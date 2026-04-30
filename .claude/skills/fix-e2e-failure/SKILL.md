---
name: fix-e2e-failure
description: Triage and auto-fix a failed overnight Detox E2E scenario in the yulife-rn-client repo. Takes a scenario name, isolates it with ScenarioOnly, verifies the bundler and the scenario's regional API are up, runs the spec via `CI=true pnpm detox:run`, and diagnoses from the per-step Allure artefacts (failure screenshot, view-hierarchy XML, video) already produced by Detox. Iterates up to 3 fix+re-run attempts. Use when the user says "fix overnight failure", "triage this scenario", or gives a scenario title that failed in CI.
user-invocable: true
---

# Fix Overnight E2E Failure

Automates triage of a failed Detox scenario: find the spec, isolate it, confirm services are up, run via `CI=true pnpm detox:run`, and diagnose from the per-step Allure artefacts (failure screenshot, view-hierarchy XML, video). Up to 3 fix+re-run attempts. Stop early on environmental problems.

Invocation takes one argument: the scenario name as it appears inside `Scenario("...")` in a `.spec.ts` under `e2e/`.

## 1. Locate the scenario

```sh
rg -nF 'Scenario("<name>"' e2e/ --type ts
rg -nF 'ScenarioOnly("<name>"' e2e/ --type ts
```

If no match, try fuzzy (`rg -n 'Scenario(Only)?\("[^"]*<first few words>' e2e/`) and additionally check for a `Feature("<name>"` — users often hand back a feature title by mistake.

- **0 matches**: stop. `"Scenario not found: <name>. Paste the exact Scenario() title."`
- **Feature match with multiple scenarios**: stop, print the scenarios and ask which one (or offer `FeatureOnly`).
- **>1 Scenario match**: stop, print `file:line` hits and ask which one.
- **1 match**: capture the spec path and continue.

Region from spec path (authoritative mapping at `e2e/run.ts:257`):

| Path prefix         | Region | Port |
| ------------------- | ------ | ---- |
| `e2e/japan/`        | JP     | 5003 |
| `e2e/usa/`          | US     | 5001 |
| `e2e/south_africa/` | SA     | 5002 |
| anything else       | UK     | 5000 |

## 2. Pre-flight checks

Run in parallel:

- **Bundler**: `curl -fsS http://localhost:8081/status` contains `packager-status:running`. Down → *"Run `pnpm start:e2e` in yulife-rn-client."*
- **Regional API**: `curl -fsS http://localhost:<port>` returns 200. Down → *"Run `pnpm detox:start` in yulife-api-server."*

Print the status block and stop on any failure without touching the spec.

## 3. Mark the scenario

Edit the target spec: `Scenario("<name>"` → `ScenarioOnly("<name>"`. Add `ScenarioOnly` to the `@yu-life/yulife-bdd-framework` import if not present.

Remember the path. It must be reverted on exit (`git checkout -- <path>`).

## 4. Run

```sh
CI=true pnpm detox:run <relative spec path> 2>&1 | tee /tmp/detox-output.txt
```

`CI=true` skips the interactive "replay the test / exit" prompt after completion. Going through `pnpm detox:run` (rather than shelling `detox test` directly) is important — the wrapper sets `TS_NODE_PROJECT=./e2e/tsconfig.json` so `jest.config.ts` compiles, runs the bundler/API pre-flight, and writes the Allure report.

Run with `run_in_background: true`, then immediately arm a Monitor on `/tmp/detox-output.txt` to catch failures as they happen:

```sh
tail -f /tmp/detox-output.txt 2>/dev/null | grep -E --line-buffered "FAIL|Tests:.*failed|Tests:.*passed"
```

This lets you stop early on the first FAIL rather than waiting for the full suite to finish. When a FAIL event arrives, kill detox (`pkill -f 'detox test'; pkill -f 'jest.*spec'`), inspect the failure, fix, and re-run — all without waiting for subsequent steps to time out.

## 5. Per-step capture comes free from Allure artefacts

`.detoxrc.json` already sets `screenshot.shouldTakeAutomaticSnapshots: true` with `takeWhen.testStart/testFailure/testDone: true`, and `uiHierarchy: "enabled"`. Each `Given/When/Then` runs as its own jest test case, so detox writes a per-step PNG, a view-hierarchy XML, and a whole-run video into `e2e-report/allure-results/`.

Do not poll metro-mcp during the run. Under detox, the injected runtime holds the Hermes debugger exclusive and every `Runtime.evaluate` call will hang indefinitely.

## 6. On pass

- Revert the spec (`git checkout -- <path>`).
- Print "Pass on attempt N." Note if app code was patched — that file stays in the working tree.
- Stop.

## 7. On fail — autofix loop (≤ 3 attempts)

Per attempt:

### 7a. Read failure from `e2e-report/results.json`

Parse `assertionResults` and find the **first** failed test. Extract:

- Full `ancestorTitles` chain + `title` — this maps directly to a `Given/When/Then` line in the spec.
- `failureMessages[0]` first two lines — matcher, selector, timeout.
- Any stack frame into `src/`.

### 7b. Locate the Allure record for that step

In `e2e-report/allure-results/*-result.json`, grep for the failing step's `title`. Pick the record whose `name` matches and `status: "failed"`. The record lists attachments:

- `failure.png` (image/png) — screenshot at the moment of failure
- `test.mp4` (video/mp4) — whole-run video
- view-hierarchy XML dump(s) keyed by step

All attachment files live under `e2e-report/allure-results/attachments/<uuid>.<ext>`.

Detox distinguishes two sub-steps for visibility matchers: "Expect X to exist" and "Expect X to be visible". The granularity of exist-passed + visible-failed is a strong hint that the element is in the tree but off-screen / covered / zero-sized — not missing.

### 7c. Inspect the failure visually

**Always** `Read` `failure.png`. A single glance answers most "why didn't it find it" questions (wrong screen, error banner, modal covering, off-screen element).

If visually ambiguous, read the view-hierarchy XML (`attachments/<uuid>.xml`) — grep for the selector text/testID to find it in the tree and inspect its `frame` / `hidden` / `alpha` attributes.

For failures in the preceding steps (context: what was the app doing right before?), find the `-result.json` for the last passing step in the same Scenario and view *its* screenshot — Detox captures one at `testDone`, so the immediately-preceding frame is on disk.

### 7d. Classify

1. **App bug** — the failure.png shows a red error banner, a missing element that should be there, a wrong screen, a crash overlay, etc. → edit `src/`.
2. **Stale spec selector** — the failure.png clearly shows the expected element on screen, just under a different testID or text (component was renamed). → edit the spec / `_steps/`.
3. **Data / seed issue** — failure.png shows an empty list, missing user, wrong balance. Preconditions not met. → **stop and report.** Do not touch seed data.
4. **Backend / env issue** — 5xx banner, "no connection", GraphQL schema error in a visible toast. → **stop and report.**

Preference: app code over spec. Do not weaken an assertion, extend a timeout, or add a sleep. If the only plausible change is to weaken the test, stop and report.

Flakes are hard to identify from a single attempt. If attempt N passes but attempt N+1 fails on identical code, that is evidence of a flake — but only treat it as such if the failure.png differs between attempts (element appears later, different pixel state). If the failure.png is pixel-identical across attempts, it is a real bug.

### 7e. Apply one minimal change, one file, one reason

Follow repo conventions (`Box` over `View`, `IComponentNameProps`, no new barrel files, etc.).

### 7f. Re-run

Same `CI=true pnpm detox:run <spec>` command. Increment attempt counter.

## 8. Exit after 3 attempts (or hard-stop)

- Always revert the target spec. This is the only file the skill guarantees to clean up.
- Leave any `src/` or `_steps/` edits in the working tree.
- Print a per-attempt summary: what the fix was, and what the new failure was.
- End with a hypothesis and a concrete next step. For a flake, recommend repeat-run to measure pass rate rather than a code fix.

## Conventions

- British English. No emojis. No time estimates. Terse output.
- The spec file is always reverted on exit (pass, fail, hard-stop). Nothing else.
- Never run destructive git commands beyond `git checkout -- <path>`.
- Never skip hooks (`--no-verify`), never amend commits the user didn't ask for.
