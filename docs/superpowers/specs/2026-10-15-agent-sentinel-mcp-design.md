# AgentSentinel: Industrial-Grade MCP Gateway & Autonomous Agent Reliability Firewall

## 1. Vision & Intent (The Why)
As enterprises and developers transition from single-prompt chatbots to autonomous AI agents that invoke tools (filesystem, shell commands, databases, internal APIs), they encounter a critical production readiness barrier: **unbounded tool execution risk**.

Current Model Context Protocol (MCP) setups give AI models unvetted, direct execution access. This exposes systems to:
1. **Indirect Prompt Injection & Poisoning**: Malicious web/file data coercing tools into destructive behavior.
2. **Data & Secret Exfiltration**: Unintentional leakage of API tokens, SSH keys, customer PII, and database credentials into model context windows and logs.
3. **Runaway Execution Loops**: Unbounded retry storms consuming thousands of dollars in token spend.
4. **Lack of Enterprise Compliance & Auditing**: No immutable record of what the agent called, why, when, and with what parameters.

**AgentSentinel** is an industrial-grade, production-ready MCP Gateway and Execution Firewall. It sits as a high-performance proxy and tool suite between any AI agent client (Claude Code, Cursor, OpenCode, Antigravity, Custom LLM Harnesses) and native system capabilities.

---

## 2. Goals, Non-Goals & Anti-Goals

### Goals
1. **Standard MCP Server Interface**:
   - 100% compliant with the Model Context Protocol (JSON-RPC 2.0 over STDIO).
   - Compatible with Claude Desktop, Cursor, Antigravity, and custom agent harnesses.
2. **Zero-Trust Security Firewall & Policy Engine**:
   - **Command Execution Guard**: AST/Token command parser preventing shell escapes, piping to destructive binaries (`rm`, `mkfs`, `dd`, `curl | sh`), and enforcing an allowlist/denylist policy.
   - **Path Traversal & Chroot Boundary**: Strict canonical path normalization preventing escape outside approved workspace boundaries.
   - **SSRF Protection**: HTTP requester blocking metadata IP addresses (`169.254.169.254`), loopbacks (`127.0.0.1`, `localhost`), and internal RFC-1918 subnets (`10.0.0.0/8`, `192.168.0.0/16`).
3. **Data Loss Prevention (DLP) & Secret Masking**:
   - High-throughput regex engine scanning tool inputs and outputs for 25+ secret patterns (AWS Access Keys, GitHub Personal Access Tokens, Bearer Tokens, Private Keys, Database connection URIs, Stripe keys).
   - Automatically redacts identified secrets before output is returned to LLM or written to logs.
4. **Agent Reliability & Loop Breaker (Circuit Breaker)**:
   - Sliding-window rate limiter per session.
   - Consecutive tool error detector that trips the circuit breaker after $N$ identical failures to prevent catastrophic token drain.
5. **Immutable Structured Audit Trail**:
   - High-performance JSONL audit logger capturing timestamps, session IDs, tool name, parameter hashes, execution duration, policy verdict (ALLOWED / BLOCKED / REDACTED), and output size.
6. **Built-in Industrial Developer Tools**:
   - `sentinel_safe_exec`: Sandboxed shell execution with timeout, memory limit, and allowlist.
   - `sentinel_safe_fs`: Sandboxed file operations (read, write, list) with path traversal prevention.
   - `sentinel_safe_fetch`: Sandboxed HTTP client with SSRF blocking and payload truncation.
   - `sentinel_policy_check`: Policy validation tool for agents to self-evaluate actions against compliance rules.
   - `sentinel_audit_inspect`: Query and inspect recent session audit logs.
7. **Production Packaging**:
   - TypeScript with strict compiler settings (`strict: true`, ES2022).
   - Zero external runtime bloat; uses `@modelcontextprotocol/sdk` and `zod`.
   - Comprehensive automated test suite using Node.js native test runner (`node --test`).
   - GitHub Actions CI workflow, Dockerfile, and MIT License.

### Non-Goals
- Building an entire UI web dashboard (AgentSentinel is an infrastructure engine and MCP server).
- Implementing vendor-locked LLM orchestration (AgentSentinel is model-agnostic and protocol-compliant).

### Anti-Goals (What would make this a failure)
- Adding multi-second latency to tool execution.
- Complex external cloud dependencies required just to boot the gateway.
- Silent failure: any policy violation must return clear, machine-readable error reasons so the agent can self-correct.

---

## 3. System Architecture & Component Design

```
               [ AI Agent / LLM Client ]
             (Claude, Cursor, Antigravity)
                         │
                         │ JSON-RPC 2.0 (STDIO / SSE)
                         ▼
        ┌────────────────────────────────────────────────────────┐
        │            AgentSentinel MCP Gateway                   │
        │                                                        │
        │  ┌──────────────────────────────────────────────────┐  │
        │  │ 1. Request Validator (Zod Schema Validation)    │  │
        │  └────────────────────────┬─────────────────────────┘  │
        │                           │                            │
        │  ┌────────────────────────▼─────────────────────────┐  │
        │  │ 2. Reliability Guard (Circuit Breaker & Rate)    │  │
        │  └────────────────────────┬─────────────────────────┘  │
        │                           │                            │
        │  ┌────────────────────────▼─────────────────────────┐  │
        │  │ 3. Policy Firewall (Path, Shell, SSRF Enforcer)  │  │
        │  └────────────────────────┬─────────────────────────┘  │
        │                           │                            │
        │  ┌────────────────────────▼─────────────────────────┐  │
        │  │ 4. Tool Execution Core (Sandboxed System Ops)    │  │
        │  └────────────────────────┬─────────────────────────┘  │
        │                           │                            │
        │  ┌────────────────────────▼─────────────────────────┐  │
        │  │ 5. DLP Engine (25+ Secret Scanners & Masking)   │  │
        │  └────────────────────────┬─────────────────────────┘  │
        │                           │                            │
        │  ┌────────────────────────▼─────────────────────────┐  │
        │  │ 6. Structured Audit Logger (JSONL Stream)        │  │
        │  └──────────────────────────────────────────────────┘  │
        └────────────────────────────────────────────────────────┘
                         │
                         ▼
             [ Safe Sanitized Response ]
```

---

## 4. Module Decomposition

```
agent-sentinel-mcp/
├── package.json
├── tsconfig.json
├── .gitignore
├── LICENSE
├── README.md
├── Dockerfile
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── index.ts                      # Server bootstrap & stdio transport
│   ├── config/
│   │   └── sentinel-config.ts        # Config loader & environment variables
│   ├── core/
│   │   ├── types.ts                  # TypeScript interfaces & types
│   │   ├── policy-engine.ts          # Policy evaluator (allow/deny rules)
│   │   ├── dlp-scanner.ts            # Data Loss Prevention & regex secret masking
│   │   ├── circuit-breaker.ts        # Fault tolerance & runaway loop prevention
│   │   └── audit-logger.ts           # JSONL append-only structured audit trail
│   ├── security/
│   │   ├── shell-sanitizer.ts        # AST-based command validator & token check
│   │   ├── path-guard.ts             # Chroot directory boundary & traversal guard
│   │   └── ssrf-guard.ts             # Private IP & metadata endpoint blocker
│   └── tools/
│       ├── safe-exec.tool.ts         # sentinel_safe_exec
│       ├── safe-fs.tool.ts           # sentinel_safe_fs
│       ├── safe-fetch.tool.ts        # sentinel_safe_fetch
│       ├── policy-check.tool.ts      # sentinel_policy_check
│       └── audit-inspect.tool.ts     # sentinel_audit_inspect
└── tests/
    ├── dlp-scanner.test.ts
    ├── shell-sanitizer.test.ts
    ├── path-guard.test.ts
    ├── ssrf-guard.test.ts
    ├── circuit-breaker.test.ts
    └── policy-engine.test.ts
```

---

## 5. Technology Stack
- **Runtime**: Node.js 20+ (LTS)
- **Language**: TypeScript 5.5+ (`strict: true`, NodeNext modules)
- **MCP Framework**: `@modelcontextprotocol/sdk` (Official Anthropic Model Context Protocol SDK)
- **Validation**: `zod`
- **Testing**: Node.js built-in test runner (`node --test`) with TypeScript loader (`tsx` / compiled tests)
- **Build**: `tsc` (TypeScript Compiler)

---

## 6. Review Focus & Edge Cases
1. **Command Chaining & Obfuscation**: Prevent bypass via `;`, `&&`, `||`, backticks, `$()`, or base64 decoding.
2. **Symlink Directory Traversal**: Reject paths that resolve outside the permitted root via symlinks.
3. **DNS Rebinding & IPv6 SSRF**: Enforce blocking of `::1`, `fe80::`, IPv4-mapped IPv6, and internal hostnames.
4. **Secret False Positives / Negatives**: Ensure entropy checks and anchor patterns accurately flag secrets without breaking normal base64 hashes or code snippets.
5. **Graceful Degradation**: If audit disk is full or read-only, fail securely without executing unlogged privileged commands.
