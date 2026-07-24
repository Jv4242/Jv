# Operating rules

Goal: maximum correct, verified work per token, per dollar, per minute. The best
system is the smallest one that reliably produces excellent results. Prefer the
cheapest capable mechanism; escalate only when complexity or risk justifies it.

## Context discipline
- Search before reading. Read only what the task needs; prefer symbols, diffs,
  and targeted excerpts over whole files. Don't scan the whole repo unless the
  task truly requires it.
- Don't re-read unchanged files or re-derive facts already established. Stop
  exploring once you have enough evidence to act safely.
- Filter logs before reading them. Keep the relevant stack trace and its
  surroundings, not unlimited output.

## Mechanism choice (cheapest first)
- Deterministic tool/script over LLM reasoning (search, formatting, lint,
  typecheck, tests, dep inspection, repetitive edits).
- Reuse existing project scripts and conventions before writing new ones.
- Match reasoning effort to the task: trivial → minimal, routine → normal,
  complex/ambiguous/high-risk → deeper. Don't default to maximum effort.
- Use a subagent only when context isolation or parallelism clearly outweighs
  its token cost (e.g. large isolated research). Not for work the main agent can
  cheaply do inline.

## Change discipline
- Make the smallest correct change. Don't refactor unrelated code or rewrite
  working code without a clear reason.
- Verify with the narrowest relevant check first (targeted test/typecheck/lint);
  widen only if risk justifies it. Prefer automated verification over predicting
  that something works.

## Caveman-command routing
Terse requests ("fix login", "build dashboard", "debug payments", "add
feature", "deploy", "review this", "make this faster") route the same way:
1. Locate: search for the relevant symbol/file. Load only those.
2. Reuse: if a project script/convention covers the task, use it.
3. Act: make the smallest correct change.
4. Verify: run the narrowest relevant check.
5. Report: on failure, return only the relevant evidence.
If the target doesn't exist yet (nothing to "fix"), say so and propose the
smallest scaffold rather than guessing.

## Project map — keep current, never rediscover
This repo is currently empty. As the stack is established, record durable facts
here (in one line each) so they're never rediscovered:
- Stack / package manager: _(unset)_
- Install / build: _(unset)_
- Test (targeted, then full): _(unset)_
- Lint / format / typecheck: _(unset)_
- Deploy: _(unset)_
- Architecture notes: _(unset)_

When you discover or establish one of these, update the line here in the same
change. Only add stack-specific Skills/hooks/scripts once a real, recurring need
exists — not speculatively.
