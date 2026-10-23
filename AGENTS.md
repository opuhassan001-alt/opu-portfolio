## Cross-session TODO

`docs/TODO.md` is the persistent backlog — the only handoff between sessions, and
shared with the team through git. It is enforced by hooks, not by good intentions:

- **SessionStart** injects the backlog into context, minus any item another
  session currently has locked (see `## In Progress` below).
- **Stop** blocks the session from ending if it changed files but left
  `docs/TODO.md` untouched. When blocked: record what's unfinished under `## Backlog`,
  move finished work to `## Done` with today's date, then finish.

Every item — Backlog or Done — carries a permanent `#N` id from one shared
sequence, assigned once and never renumbered or reused: safe to say "fix #7"
across sessions or days even if the item's wording changes later, and no
second tag format to keep straight. A Backlog item keeps its own number when
it's completed and moved to Done — it doesn't get relabeled.

Running multiple sessions on this repo at once? Before starting a Backlog
item, append
`- CLAIM #N session <id> <timestamp> "what you're about to do"` under
`## In Progress` (the SessionStart message shows the exact line to copy; the
quoted label is optional but recommended — it's what makes the log useful
later, not just who/when). When it's fully finished, DELETE its CLAIM/
RELEASE line(s) from `## In Progress` entirely, in the same edit that
writes its `## Done` entry — the Done entry is now the permanent record, so
the lock lines are pure clutter (safe here specifically because it's one
coordinated edit by the session that just finished it). If only pausing an
item that's still open, `RELEASE` instead but leave the pair in place — a
progress trail for whoever resumes it next. Abandoning it early? Same rule:
`RELEASE` immediately — the 2h auto-expiry is a crash
backstop, not a substitute for releasing.

`.gitattributes` sets `merge=union` on the file so parallel appends don't conflict.


## Project Isolation & Global Tooling Policy

1. **Global Plugin & Skill Availability**: All plugins and skills are available on-demand whenever needed for this project.
2. **Strict Project Isolation**: This repository (`opu-portfolio`) is strictly project-based. Its code, assets, and design must never be exported, leaked, or referenced in other projects unless explicitly requested by the user.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
