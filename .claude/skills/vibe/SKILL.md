---
name: vibe
description: Interactive web vibe coding session — launch browser, seed data, develop live against the YuLife RN app running in react-native-web. TRIGGER on any of these phrases or close variants — "vibe", "vibe code", "vibe coding", "vibe mode", "vibe session", "vibe on <feature>", "let's vibe", "start vibing", "run vibe", "run the vibe", "run a vibe", "run vibes", "vibe test", "run vibe test", "run the vibe test", "run vibe tests", "vibe spec", "run vibe spec", "run the vibe spec", "kick off a vibe", "fire up vibe", "vibe it", "/vibe". Also triggers when user references the vibe browser session, asks to seed + login + drive a screen interactively, or asks to run anything under `vibes/*.spec.ts`.
user-invocable: true
---

# Vibe Mode

Interactive development session for the YuLife React Native Web app. You work WITH the user against a live headed browser: the full RN client is running in the browser via `react-native-web`, wired to the local API.

## Required access

You MUST have **both** `yulife-rn-client` and `yulife-api-server` checkouts in your working directories. Client changes (screens, seed data, vibe specs) live in `yulife-rn-client`; CORS headers, detox endpoints, event listeners, GraphQL schema/resolvers live in `yulife-api-server`. If you're launched with only one, ask the user to re-launch with both before starting.

## Rules

1. **The user can see the browser.** Don't show them screenshots. Only take screenshots for your own understanding (element positions, layout debugging).
2. **ALWAYS run headed. No exceptions.** Every `playwright test` invocation MUST include `--headed` (or use `pnpm vibes:headed`). The whole point of vibe mode is that the user is watching the browser. Headless is for CI, and we don't have CI for vibes. If you catch yourself running headless, stop and re-run headed.
3. **Always run vibe specs in the background.** Use `Bash run_in_background: true` (and tee to `/tmp/vibe-spec.log`) for any `pnpm vibes` / `playwright test` invocation. Vibe runs are long-lived (the user drives the browser; specs frequently `waitForTimeout` for tens of minutes). A foreground run blocks tool calls and you can't tail logs or edit code while the session is live. Tail `/tmp/vibe-spec.log` when you need progress; do not poll on a sleep loop.
4. **One continuous session.** Don't close the browser between steps. Keep it alive.
4. **Edit code freely.** HMR updates the running app. If HMR fails, tell the user to refresh.
5. **Modify test data and tests** to match what the user is working on. "I need a user with 5000 coins" → update seed data, reseed, reload.
6. **Modify the Playwright spec** (`vibes/tournament.spec.ts` or a new one) to match the current feature.
7. **Web-specific fixes** go in `.web.tsx` / `.web.ts` files next to the originals in `src/`.
8. **ALWAYS use the `metro-mcp` MCP for debugging — never edit `web/index.tsx` to expose runtime hooks.** Metro-mcp is connected to the running app and gives you everything you'd otherwise be tempted to bolt onto `window`: view hierarchy (`mcp__metro-mcp__get_component_tree`, `mcp__metro-mcp__inspect_component`, `mcp__metro-mcp__list_elements`, `mcp__metro-mcp__find_components`, `mcp__metro-mcp__inspect_at_point`), computed styles & accessibility (`mcp__metro-mcp__check_element_accessibility`, `mcp__metro-mcp__audit_accessibility`), Redux state and actions (`mcp__metro-mcp__get_redux_state`, `mcp__metro-mcp__get_redux_actions`, `mcp__metro-mcp__dispatch_redux_action`), navigation (`mcp__metro-mcp__get_navigation_state`, `mcp__metro-mcp__get_current_route`, `mcp__metro-mcp__get_route_history`), console + network logs (`mcp__metro-mcp__get_console_logs`, `mcp__metro-mcp__get_network_requests`, `mcp__metro-mcp__get_response_body`), and an `mcp__metro-mcp__evaluate_js` escape hatch when you genuinely need to run code in-app. Reach for these BEFORE adding `(window as any).__SOMETHING__` to `web/index.tsx` or any other source file. Do NOT modify `web/index.tsx` to expose `__REDUX_STORE__`, `__VIBE_GET_TOKEN__`, or similar — those changes leak debug surface into production builds and metro-mcp already covers the use case.

## What runs where

| Service | Command | Port |
|---------|---------|------|
| Web bundler | `pnpm start:web` (webpack-dev-server) — **you start and restart it yourself** via `Bash run_in_background` and tee to `/tmp/yulife-web-bundler.log`, don't ask the user | 3000 |
| API server | `pnpm vibe` in `../yulife-api-server` (tees log to `/tmp/yulife-api-server.log`, auto-restarts on file changes — wait ~30s after editing api-server code before retrying) | 5000 |
| Playwright | `pnpm vibes:headed` | — |

All three must be up for a test run. Restart the web bundler after `pnpm install` or if you see stale-fd errors like `ENOENT ... node_modules/process/browser.js`.

## Startup

If the user provides an argument (feature name, ticket), adapt the session to that context. Otherwise default to the tournament setup.

1. Check web server on port 3000 — if nothing listening, run `pnpm start:web` in the background **yourself** (don't ask the user). HMR handles src/ changes, but **webpack config changes** (`web/webpack.config.mjs`, new aliases, new env vars) require a full bundler restart — kill the background process and re-launch it. The user is not running the bundler; you are.
2. **Verify the API is up AND running in vibe mode.** Port 5000 listening is not enough — the user might have a regular dev server running. The source of truth is `pnpm vibe` in `../yulife-api-server/package.json`, which currently resolves to `pnpm migrate-for-detox && pnpm detox:start 2>&1 | tee /tmp/yulife-api-server.log`. Re-check that script before assuming the log path — if someone changes it, the tee target changes too. Confirm vibe mode by tailing `/tmp/yulife-api-server.log` and looking for the detox-mode startup banner / recent activity. If the log is missing, stale, or the server is running in a non-vibe mode, ask the user to run `pnpm vibe` from `../yulife-api-server`. Tail this same log whenever a `/detox/*` call returns a generic 500 — the response body usually hides the real error.
3. Run the relevant spec headed: `npx playwright test vibes/<spec>.spec.ts --config vibes/playwright.config.ts --headed --timeout=0`. `--timeout=0` disables Playwright's default 2-minute per-test kill; use `test.setTimeout()` inside the spec for explicit budgets (including long dev-hold `waitForTimeout` calls).
4. Say "Session is live" — done.

**Default test user**: defined in `vibes/data/credentials.ts` — `VIBE_EMAIL` + `VIBE_PASSWORD`. Never hard-code email/password in specs; import the helper and call `applyVibeCredentials({ customer, auth })` before seeding.

**Don't `applyVibeCredentials` against an already-seeded user.** The helper mutates the in-memory `customer.email` and `auth.password`, but if those rows already exist in the DB, the next `dataManager.seed()` is a no-op against the duplicate `_id`. Login then fails because the on-disk row still has the original email. For specs that re-use existing seed data (e.g. activity-data customers), log in with the seeded creds directly instead of overwriting them.

## Common gotchas — read this BEFORE chasing UI issues

1. **White screen ≠ "test selector wrong".** A `[browser:pageerror]` (uncaught TypeError, etc.) crashes the React tree and `document.body.innerText === ""`. Always look at `attachBrowserLogs(page)` output FIRST. Errors that go through `Logger.notify` are caught and don't crash boot — `[browser:pageerror]` does.
2. **`[browser:error] CORS policy`** = chromium isn't getting `--disable-web-security`. Check `vibes/playwright.config.ts:projects[0].use.launchOptions.args`.
3. **Login returning a token doesn't mean the app booted.** Check the page state after reload — probe `document.body.innerText` and watch for `[browser:pageerror]`. The `LoginUser` GraphQL mutation can succeed while the bundle crashes during hydration.
4. **`Re-Seeding 617 records` then 500 on `/detox/clear`** — the api-server is hitting a real error that the route handler used to swallow. The handler now returns 500 with the actual message. If you see `canceling statement due to statement timeout`, the postgres `statement_timeout` is killing the giant TRUNCATE — already worked around with `SET LOCAL statement_timeout = 0` inside a transaction in `src/app/plugins/detox/handlers/clear/create.ts`.
5. **Reseed is slow (~45s).** Once the DB has the records you need, pass `{ skipReseed: true }` to `connectDataManager(activityData, { skipReseed: true })` for subsequent iterations. Drop it only when you change seed data.
6. **HMR only catches `src/` changes.** Webpack config (`web/webpack.config.mjs`), new files in `web/aliases/`, env vars, and `web/index.html` need a full bundler restart — kill `pnpm start:web` and re-launch it yourself.
7. **`--user-data-dir` is rejected by `playwright.launchOptions.args`** — playwright wants `launchPersistentContext` for that. Don't add it; the ephemeral profile + `--disable-web-security` is enough.
8. **`#root` is locked to 414×896** in `web/index.html` to match the playwright vibe viewport. Don't widen it — that flexes RN-web's `useWindowDimensions` and breaks layout-dependent screens.
9. **Native-module "package not linked" warnings** mean a new RN library was added without a web alias. Drop a stub in `web/aliases/<name>.js` exporting noop fns and add it to `web/webpack.config.mjs:resolve.alias`. Existing stubs: `intercom`, `bugsnag`, `customerio`, `stripe-react-native`, `expo-*`, `fitkit`, `yu-health`, `yu-watch`, etc.
10. **Forgive non-fatal errors.** `vapidPublicKey` / push-notifications / `customerio.init` errors are caught and logged — they don't crash the app. Don't waste time on them unless they're a `pageerror`.

## Layout

```
vibes/
├── playwright.config.ts     Chromium, iOS user-agent, 414x896 mobile viewport
├── dataManager.ts           Seeds via /detox/addRecords + /detox/clear
├── data/
│   ├── credentials.ts       VIBE_EMAIL / VIBE_PASSWORD + applyVibeCredentials helper
│   └── (postgres/, mongo/)  Ad-hoc vibe-owned seed records
├── utils/
│   ├── index.ts             loadApp, waitForText, tapText, tapTestId, screenshot
│   └── login.ts             loginAsUser — LoginUser mutation → inject token → reload
├── tournament.spec.ts       Example: tournament states + dev hold
├── global-setup.ts          Optional seed hook
├── global-teardown.ts       Optional teardown hook
├── tsconfig.json            Vibe-only tsc settings
└── screenshots/             gitignored
```

## Adapting to the user's needs

Examples:

- "vibe on the rewards screen" → seed rewards data, login, navigate to the rewards tab.
- "I need a user in a tournament with 3 teams" → mutate the tournament seed data (3 teams instead of 8), reseed.
- "add a test for the leaderboard" → create `vibes/leaderboard.spec.ts` with appropriate seed data and assertions.
- "test the login flow" → don't inject the token; let the app show the login screen.

To change the test user's email/password, edit `vibes/data/credentials.ts`. Never mutate challenge data fields like `.data.email` / `.data.password` directly in a spec — wrap it in a helper.

To reseed: call `connectDataManager(data)` which does `resetData()` then `insertRecords()` against the API's `/detox` endpoints.

## CORS — chromium must launch with web security disabled

The RN web app talks directly to `http://localhost:5000/graphql`, but the api-server doesn't send `Access-Control-Allow-Origin` for `http://localhost:3000` in dev. Without disabling web security in the test browser, every Apollo request fails with a CORS preflight error and the app stays on a white screen forever.

`vibes/playwright.config.ts` already passes `--disable-web-security` and `--disable-site-isolation-trials` to chromium for this reason. **Don't strip those flags.** Don't add `--user-data-dir` — playwright rejects it (use `launchPersistentContext` if you really need a persistent profile). If you ever spin up your own playwright config, copy these flags across — otherwise login + every saga GraphQL call will silently die.

If you see `[browser:error] CORS policy` in stdout, the flags aren't taking effect.

## Always pipe browser logs

Every vibe spec MUST call `attachBrowserLogs(page)` (from `./utils`) immediately after acquiring `page`. It forwards `console.error`, `console.warn`, uncaught `pageerror`, and failed network requests to the test's stdout. Without this, a white-screen runtime crash is invisible — playwright will just say "element not found" and you'll waste time blaming selectors when the bundle never booted.

```ts
test("…", async ({ page }) => {
  attachBrowserLogs(page);   // <-- first line, every spec
  await loginAsUser(page, customer, auth);
  // …
});
```

If you see `[browser:pageerror]` or `[browser:error]` in the output before your assertions fail, the app is crashing — fix the runtime error before chasing UI selectors.

## Useful patterns

**Fire a backend event from a test** — exercise an `@OnEvent` listener without driving the UI path:

```ts
import { triggerEvent } from "./dataManager";

await triggerEvent("goal_participant_joined", { userId, goalId });
```

**Top up seed data mid-test** — insert/upsert records without reseeding everything:

```ts
import { addRecords } from "./dataManager";

await addRecords([
  { type: "mongo", modelName: "core_settings", data: { ... } },
]);
```

Both helpers POST to the API's `/detox/*` endpoints under the hood. Never use raw `fetch` for these — use the helpers so retry/timeout behaviour stays consistent.

**Bypass a click with SDUI navigation** — onboarding overlays sometimes intercept clicks on web:

```ts
await page.evaluate((id) => {
  (window as any).__NAV?.push?.("yulife.member.DailySteps", {
    component: {
      id: "yulife.events.tournamentDetails",
      name: "yulife.events.tournamentDetails",
      passProps: { eventId: id, componentId: "yulife.member.DailySteps" },
    },
  });
}, eventId);
```

**Pause on a state for dev** — inside the spec:

```ts
test.setTimeout(60 * 60 * 1000);
// …drive app to the state you want to dev against…
await page.waitForTimeout(30 * 60 * 1000);
```

## How login works

1. Seed via `connectDataManager(challengeData)` — POSTs all records to `/detox/addRecords`.
2. `loginAsUser(page, customer, auth)` — calls the `LoginUser` GraphQL mutation with the creds from `applyVibeCredentials`, injects the JWT into `localStorage.__secure_store___Store_token`, reloads the page. App boots into authenticated state.
3. Spec takes over.

Token persists across reloads even when HMR fires.

## Key files to know

| Path | What |
|------|------|
| `web/webpack.config.mjs` | Webpack config + all aliases |
| `web/aliases/` | Native-module stubs for web |
| `web/react-native-navigation.tsx` | Web nav engine (replaces Wix RNN) |
| `web/index.tsx` | Entry point, saga dispatches |
| `web/aliases/react-native-config.js` | API URLs — change here if API is on a different port |
| `src/**/*.web.tsx` | Web-specific component overrides |
| `vibes/data/credentials.ts` | `VIBE_EMAIL`, `VIBE_PASSWORD`, `applyVibeCredentials` |
| `vibes/utils/login.ts` | Login helper — GraphQL + token injection |
| `vibes/dataManager.ts` | Seeding + `/detox/addRecords` |
| `e2e/challenges/_data/` | Shared seed records (customers, tournaments, etc.) |

## Don't

- Don't skip `--headed` — the user wants to see the browser.
- Don't mutate challenge data emails/passwords inline in specs. Use `applyVibeCredentials`.
- Don't commit `vibes/screenshots/` (it's gitignored).
- Don't skip hooks (`--no-verify`) unless the user has explicitly asked. If lint-staged fails, investigate and fix.
