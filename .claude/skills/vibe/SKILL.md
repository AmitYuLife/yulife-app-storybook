---
name: vibe
description: Interactive web vibe coding session — launch browser, seed data, develop live against the YuLife RN app running in react-native-web
user-invocable: true
---

# Vibe Mode

Interactive development session for the YuLife React Native Web app. You work WITH the user against a live headed browser: the full RN client is running in the browser via `react-native-web`, wired to the local API.

## Required access

You MUST have **both** `yulife-rn-client` and `yulife-api-server` checkouts in your working directories. Client changes (screens, seed data, vibe specs) live in `yulife-rn-client`; CORS headers, detox endpoints, event listeners, GraphQL schema/resolvers live in `yulife-api-server`. If you're launched with only one, ask the user to re-launch with both before starting.

## Rules

1. **The user can see the browser.** Don't show them screenshots. Only take screenshots for your own understanding (element positions, layout debugging).
2. **Always run headed.** `pnpm vibes:headed` or `--headed` on any `playwright test` invocation. Headless is for CI, and we don't have CI for vibes.
3. **One continuous session.** Don't close the browser between steps. Keep it alive.
4. **Edit code freely.** HMR updates the running app. If HMR fails, tell the user to refresh.
5. **Modify test data and tests** to match what the user is working on. "I need a user with 5000 coins" → update seed data, reseed, reload.
6. **Modify the Playwright spec** (`vibes/tournament.spec.ts` or a new one) to match the current feature.
7. **Web-specific fixes** go in `.web.tsx` / `.web.ts` files next to the originals in `src/`.

## What runs where

| Service | Command | Port |
|---------|---------|------|
| Web bundler | `pnpm start:web` (webpack-dev-server) | 3000 |
| API server | `pnpm start` in `../yulife-api-server` | 5000 |
| Playwright | `pnpm vibes:headed` | — |

All three must be up for a test run. Restart the web bundler after `pnpm install` or if you see stale-fd errors like `ENOENT ... node_modules/process/browser.js`.

## Startup

If the user provides an argument (feature name, ticket), adapt the session to that context. Otherwise default to the tournament setup.

1. Check web server on port 3000 — if nothing listening, run `pnpm start:web` in the background.
2. Check API on port 5000 — if nothing listening, tell the user to start it from `../yulife-api-server`.
3. Run the relevant spec headed: `npx playwright test vibes/<spec>.spec.ts --config vibes/playwright.config.ts --headed --timeout=0`. `--timeout=0` disables Playwright's default 2-minute per-test kill; use `test.setTimeout()` inside the spec for explicit budgets (including long dev-hold `waitForTimeout` calls).
4. Say "Session is live" — done.

**Default test user**: defined in `vibes/data/credentials.ts` — `VIBE_EMAIL` + `VIBE_PASSWORD`. Never hard-code email/password in specs; import the helper and call `applyVibeCredentials({ customer, auth })` before seeding.

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
