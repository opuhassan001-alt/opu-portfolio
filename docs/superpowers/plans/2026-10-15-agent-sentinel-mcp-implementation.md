# AgentSentinel MCP Gateway Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an industrial-grade Model Context Protocol (MCP) gateway, security firewall, DLP secret masking engine, and audit logger for autonomous AI agents.

**Architecture:** A modular Node.js/TypeScript gateway sitting between AI clients and host capabilities over STDIO JSON-RPC. Every tool request passes through schema validation, circuit-breaker rate limiting, zero-trust path/command/SSRF security policy enforcement, and DLP secret redaction before returning safe, auditable results.

**Tech Stack:** Node.js 20+, TypeScript 5.5+, `@modelcontextprotocol/sdk`, `zod`, Node.js native test runner (`node --test`), Docker, GitHub Actions.

**Spec:** [docs/superpowers/specs/2026-10-15-agent-sentinel-mcp-design.md](file:///e:/work%20station/opu-portfolio/docs/superpowers/specs/2026-10-15-agent-sentinel-mcp-design.md)

## Global Constraints
- Node.js version >= 20.0.0.
- TypeScript compiled with `strict: true`, target ES2022, NodeNext module resolution.
- Standard MCP protocol compliance (JSON-RPC 2.0).
- Zero uncaught exceptions; all errors return structured machine-readable error reasons.
- Zero external runtime native binaries; pure TypeScript/JavaScript implementation.

## Review Focus
1. **Command injection via subshell or chaining**: Verify `;`, `&&`, `|`, `` ` ``, `$()` are rejected or safely escaped.
2. **Path traversal via symlinks and relative dots**: Verify `../` and symlinks pointing outside allowed root are rejected.
3. **SSRF private address bypassing**: Verify cloud metadata (`169.254.169.254`), loopbacks, and private subnets are blocked.
4. **Secret leakage in tool output**: Verify AWS, GitHub, JWT, Stripe, and private keys are masked with `[REDACTED:<TYPE>]`.
5. **Runaway loop circuit breaker**: Verify repeated tool failures trip the circuit breaker and prevent runaway token consumption.

---

### Task 1: Project Scaffolding & Configuration
**Files:**
- Create: `agent-sentinel-mcp/package.json`
- Create: `agent-sentinel-mcp/tsconfig.json`
- Create: `agent-sentinel-mcp/src/core/types.ts`
- Create: `agent-sentinel-mcp/src/config/sentinel-config.ts`

**Interfaces:**
- Produces: `SentinelConfig` interface and `loadConfig(): SentinelConfig` function.

- [ ] **Step 1: Write `package.json` and `tsconfig.json`**
  Setup dependencies: `@modelcontextprotocol/sdk`, `zod`. Dev dependencies: `typescript`, `@types/node`, `tsx`.
- [ ] **Step 2: Define core interfaces in `src/core/types.ts`**
  Define `ToolExecutionResult`, `PolicyRule`, `AuditEntry`, `SecretDetectionResult`, `CircuitBreakerState`.
- [ ] **Step 3: Implement `src/config/sentinel-config.ts`**
  Support environment variables: `SENTINEL_ROOT_DIR`, `SENTINEL_MAX_FAILURES`, `SENTINEL_RATE_LIMIT_RPM`, `SENTINEL_AUDIT_LOG_PATH`.
- [ ] **Step 4: Verify TypeScript compilation**
  Run: `npx tsc --noEmit` in `agent-sentinel-mcp/`
  Expected: Clean compilation with 0 errors.

---

### Task 2: Data Loss Prevention (DLP) & Secret Masking Engine
**Files:**
- Create: `agent-sentinel-mcp/src/core/dlp-scanner.ts`
- Create: `agent-sentinel-mcp/tests/dlp-scanner.test.ts`

**Interfaces:**
- Consumes: `types.ts`
- Produces: `DlpScanner` class with `scanAndRedact(text: string): { sanitized: string; detections: SecretDetectionResult[] }`.

- [ ] **Step 1: Write failing DLP unit tests in `tests/dlp-scanner.test.ts`**
  Test redaction of AWS keys (`AKIA...`), GitHub PATs (`ghp_...`), JWT tokens, Private Keys (`-----BEGIN RSA PRIVATE KEY-----`), and generic API secrets.
- [ ] **Step 2: Run test to verify failure**
  Run: `npm test`
  Expected: FAIL (`DlpScanner` not implemented).
- [ ] **Step 3: Implement `DlpScanner` with 20+ regex detectors in `src/core/dlp-scanner.ts`**
  Mask detected matches with `[REDACTED:<CATEGORY>]` while preserving surrounding context.
- [ ] **Step 4: Run test to verify all tests pass**
  Run: `npm test`
  Expected: PASS with 100% assertions green.

---

### Task 3: Security Firewall Guards (Shell, Path, SSRF)
**Files:**
- Create: `agent-sentinel-mcp/src/security/shell-sanitizer.ts`
- Create: `agent-sentinel-mcp/src/security/path-guard.ts`
- Create: `agent-sentinel-mcp/src/security/ssrf-guard.ts`
- Create: `agent-sentinel-mcp/tests/security-guards.test.ts`

**Interfaces:**
- Produces:
  - `ShellSanitizer.validateCommand(cmd: string, allowlist?: string[]): { allowed: boolean; reason?: string }`
  - `PathGuard.resolveSafePath(inputPath: string, rootDir: string): { safePath?: string; allowed: boolean; reason?: string }`
  - `SsrfGuard.validateUrl(urlStr: string): { allowed: boolean; reason?: string }`

- [ ] **Step 1: Write failing security guard tests in `tests/security-guards.test.ts`**
  Test dangerous commands (`rm -rf /`, `curl | sh`, chaining `;`), traversal (`../../etc/shadow`), and SSRF (`http://169.254.169.254/latest/meta-data`).
- [ ] **Step 2: Run test to verify failure**
  Run: `npm test`
  Expected: FAIL (Security guards not implemented).
- [ ] **Step 3: Implement `ShellSanitizer`, `PathGuard`, and `SsrfGuard`**
  Strict AST token checking, canonical path normalization, and IPv4/IPv6 private IP classification.
- [ ] **Step 4: Run test to verify all pass**
  Run: `npm test`
  Expected: All security guard tests pass.

---

### Task 4: Reliability Guard (Circuit Breaker & Rate Limiter)
**Files:**
- Create: `agent-sentinel-mcp/src/core/circuit-breaker.ts`
- Create: `agent-sentinel-mcp/tests/circuit-breaker.test.ts`

**Interfaces:**
- Produces: `CircuitBreaker` with `recordSuccess()`, `recordFailure()`, `canExecute(): boolean`, `reset()`.

- [ ] **Step 1: Write failing tests in `tests/circuit-breaker.test.ts`**
  Verify state transitions: `CLOSED` -> `OPEN` on $N$ consecutive failures -> `HALF-OPEN` after timeout.
- [ ] **Step 2: Run test to verify failure**
  Run: `npm test`
  Expected: FAIL.
- [ ] **Step 3: Implement `CircuitBreaker` in `src/core/circuit-breaker.ts`**
  Configurable thresholds, sliding window timestamps, and cooldown duration.
- [ ] **Step 4: Run test to verify pass**
  Run: `npm test`
  Expected: PASS.

---

### Task 5: Policy Engine & Structured Audit Logger
**Files:**
- Create: `agent-sentinel-mcp/src/core/policy-engine.ts`
- Create: `agent-sentinel-mcp/src/core/audit-logger.ts`
- Create: `agent-sentinel-mcp/tests/policy-and-audit.test.ts`

**Interfaces:**
- Produces:
  - `PolicyEngine.evaluate(toolName: string, args: Record<string, unknown>): PolicyVerdict`
  - `AuditLogger.log(entry: AuditEntry): Promise<void>`

- [ ] **Step 1: Write failing tests for policy evaluation and audit log output**
- [ ] **Step 2: Run test to verify failure**
- [ ] **Step 3: Implement `PolicyEngine` and `AuditLogger` (append-only JSONL format with ISO timestamps)**
- [ ] **Step 4: Run test to verify pass**

---

### Task 6: Industrial MCP Tools Implementation
**Files:**
- Create: `agent-sentinel-mcp/src/tools/safe-exec.tool.ts`
- Create: `agent-sentinel-mcp/src/tools/safe-fs.tool.ts`
- Create: `agent-sentinel-mcp/src/tools/safe-fetch.tool.ts`
- Create: `agent-sentinel-mcp/src/tools/policy-check.tool.ts`
- Create: `agent-sentinel-mcp/src/tools/audit-inspect.tool.ts`
- Create: `agent-sentinel-mcp/tests/tools.test.ts`

**Interfaces:**
- Produces: Standard MCP Tool definition objects with JSON schemas and secure handlers.

- [ ] **Step 1: Write integration tests invoking all 5 tools**
- [ ] **Step 2: Implement tools integrating DLP, Security Guards, and Audit Logger**
- [ ] **Step 3: Verify all tool tests pass**

---

### Task 7: MCP Server Bootstrap & STDIO Transport
**Files:**
- Create: `agent-sentinel-mcp/src/index.ts`

- [ ] **Step 1: Initialize MCP `Server` with `@modelcontextprotocol/sdk`**
- [ ] **Step 2: Register tools (`ListToolsRequestSchema`, `CallToolRequestSchema`)**
- [ ] **Step 3: Connect `StdioServerTransport`**
- [ ] **Step 4: Verify build: `npm run build`**

---

### Task 8: Production Packaging & GitHub Repository
**Files:**
- Create: `agent-sentinel-mcp/README.md`
- Create: `agent-sentinel-mcp/LICENSE`
- Create: `agent-sentinel-mcp/Dockerfile`
- Create: `agent-sentinel-mcp/.github/workflows/ci.yml`

- [ ] **Step 1: Create comprehensive README with architecture, security model, and Claude/Cursor config**
- [ ] **Step 2: Add MIT License, Dockerfile, and GitHub Actions CI workflow**
- [ ] **Step 3: Initialize git, commit all files, create public GitHub repository `opuhassan001-alt/agent-sentinel-mcp` and push**
