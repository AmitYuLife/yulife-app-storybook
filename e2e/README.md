# Detox E2E Testing

End-to-end testing framework for the YuLife mobile app using [Detox](https://wix.github.io/Detox/) with Jest and a custom BDD framework.

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [API Setup](#api-setup)
- [Client Setup](#client-setup)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Writing Tests](#writing-tests)
- [Working with Test Data](#working-with-test-data)
- [Multi-Region Testing](#multi-region-testing)
- [Debugging & Troubleshooting](#debugging--troubleshooting)
- [GitLab CI](#gitlab-ci)

---

## Overview

### What is this?

This is the E2E testing suite for the YuLife mobile app. It uses:
- **Detox** - Grey-box testing framework for React Native
- **Jest** - Test runner
- **@yu-life/yulife-bdd-framework** - Custom BDD framework for writing readable, data-driven tests

### How does it connect to other projects?

The E2E tests require **two projects** running simultaneously:

```
┌─────────────────────────────────────────────────────────────────┐
│                        E2E Test Suite                           │
│                  (yulife-rn-client/e2e)                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/GraphQL
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     yulife-api-server                           │
│              (running in detox mode on port 5000)               │
│                                                                 │
│  Provides:                                                      │
│  - /detox/addRecords  → Seeds test data                         │
│  - /detox/clear       → Clears data between tests               │
│  - /detox/loginAdmin  → Generates admin tokens                  │
│  - All normal API endpoints for app functionality               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Docker Services                             │
│  - MongoDB (port 27018)                                         │
│  - Postgres (port 5432) - user: api / password: letmeinplease   │
│  - PgBouncer                                                    │
│  - Valkey/Redis                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Prerequisites

### Required Software

- **Node.js** (use nvm to manage versions)
- **Xcode** (latest stable version recommended)
- **CocoaPods** (`gem install cocoapods`)
- **Detox CLI** - `npm i -g detox-cli`
- **Apple Simulator Utils** - `brew install wix/brew/applesimutils`
- **Docker** (for running database services)
- **pnpm** (for API server)
- **pnpm** (for client)

### Required Repositories

Clone both repositories:
```bash
git clone <yulife-rn-client-repo>
git clone <yulife-api-server-repo>
```

---

## Quick Start

Here's the fastest way to get up and running:

### Terminal 1: API Server

```bash
cd yulife-api-server
git pull && nvm use && pnpm install && pnpm build && pnpm services:start && pnpm detox:changeRegionDatabase:UK && pnpm detox:start:UK
```

### Terminal 2: Client Build & Bundler

```bash
cd yulife-rn-client
git pull && rm -rf node_modules && pnpm install && cd ios && bundle exec pod install --repo-update && cd ../ && pnpm detox:build
```

Then start the bundler:
```bash
pnpm start:e2e
```

### Terminal 3: Run Tests

```bash
# Run a single test file
pnpm detox:run e2e/challenges/yudoku/yudoku.spec.ts

# Run all tests
pnpm detox:test:all
```

---

## API Setup

### Step 1: Install Dependencies & Build

```bash
cd yulife-api-server
git pull
nvm use
pnpm install
pnpm build
```

### Step 2: Start Docker Services

```bash
pnpm services:start
```

This starts:
- **MongoDB** on port `27018` (no credentials required)
- **Postgres** on port `5432` (user: `api`, password: `letmeinplease`)
- **PgBouncer** for connection pooling
- **Valkey/Redis** for caching

### Step 3: Setup Databases (First Time Only)

```bash
pnpm detox:setup
```

This runs migrations for both MongoDB and Postgres in the detox environment.

### Step 4: Set Region & Start Server

**UK (default - port 5000):**
```bash
pnpm detox:changeRegionDatabase:UK && pnpm detox:start:UK
```

**Other regions:**
```bash
# Japan (port 5003)
pnpm detox:changeRegionDatabase:JP && pnpm detox:start:JP

# USA (port 5001)
pnpm detox:changeRegionDatabase:US && pnpm detox:start:US

# South Africa (port 5002)
pnpm detox:changeRegionDatabase:SA && pnpm detox:start:SA
```

### API Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm services:start` | Start Docker services (MongoDB, Postgres, etc.) |
| `pnpm detox:setup` | Run database migrations for detox |
| `pnpm detox:start` | Start API in detox mode (UK, port 5000) |
| `pnpm detox:start:UK` | Start API for UK region (port 5000) |
| `pnpm detox:start:US` | Start API for US region (port 5001) |
| `pnpm detox:start:SA` | Start API for SA region (port 5002) |
| `pnpm detox:start:JP` | Start API for JP region (port 5003) |
| `pnpm detox:changeRegionDatabase:*` | Switch database to specified region |
| `pnpm detox:slowstart` | Start with 1s delay on responses (for debugging) |

---

## Client Setup

### Step 1: Install Dependencies

```bash
cd yulife-rn-client
git pull
rm -rf node_modules  # Clean install recommended
pnpm install
```

### Step 2: Install iOS Pods

```bash
cd ios
bundle exec pod install --repo-update
cd ../
```

### Step 3: Build Detox App

```bash
pnpm detox:build
```

> **Note:** This builds the iOS simulator app. It can take 10-15 minutes on first build.

### Step 4: Start the Bundler

```bash
pnpm start:e2e
```

This starts the React Native Metro bundler in E2E mode.

### Client Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm detox:build` | Build iOS app for Detox testing |
| `pnpm start:e2e` | Start Metro bundler in E2E mode |
| `pnpm detox:run <path>` | Run a specific test file |
| `pnpm detox:test:all` | Run all tests |
| `pnpm detox:build:translations` | Build translation mapping for localized tests |

---

## Running Tests

### Run a Single Test File

```bash
pnpm detox:run e2e/challenges/yudoku/yudoku.spec.ts
```

### Run a Single Scenario

Add `ScenarioOnly` to the scenario you want to run:

```typescript
// In your spec file
import { ScenarioOnly } from "@yu-life/yulife-bdd-framework";

Feature("My Feature", async () => {
  ScenarioOnly("Only run this scenario", scenario.start, () => {
    // ...
  });
  
  Scenario("This will be skipped", scenario.start, () => {
    // ...
  });
});
```

Then run the test file:
```bash
pnpm detox:run e2e/path/to/your/test.spec.ts
```

### Run All Tests

```bash
pnpm detox:test:all
```

### Running Localized Tests

1. Set the target locale and build translations:
```bash
export TARGET_LOCALE=ja-JP
pnpm detox:build:translations
```

2. Run tests with the same locale:
```bash
TARGET_LOCALE=ja-JP pnpm detox:test:all
```

---

## Folder Structure

```
e2e/
├── _utils/                       # Shared utilities
│   ├── appScreens/              # Screen-specific helper functions
│   ├── i18n/                    # Internationalization utilities
│   ├── navigation/              # Navigation helpers and element IDs
│   ├── socket/                  # Socket server for test data communication
│   ├── translations/            # Translation utilities
│   └── users/                   # User authentication helpers
│
├── challenges/                   # Feature: Challenges
│   ├── _common/                 # Shared setup (given.ts, scenario.ts)
│   ├── _data/                   # Test data
│   │   ├── mongo/              # MongoDB fixtures
│   │   └── postgres/           # Postgres fixtures
│   ├── challenges/             # Challenge tests
│   │   ├── _resources/         # Constants, helpers, types
│   │   ├── _steps/            # Step definitions (when.ts, then.ts)
│   │   └── challenges.spec.ts  # Test file
│   ├── yudoku/                 # Yudoku tests
│   └── ...                     # Other challenge subtests
│
├── challenges_extended/          # Extended challenge tests
├── activity/                    # Activity tests (cycling, duels, etc.)
├── admin/                       # Admin feature tests
├── benefits/                    # Benefits feature tests
├── japan/                       # Japan region-specific tests
├── usa/                         # USA region-specific tests
├── south_africa/                # South Africa region-specific tests
├── ...                          # Other feature folders
│
├── init.ts                      # Jest global setup/teardown
├── run.ts                       # Test runner entry point
├── dataManager.ts               # Data manager instances
├── jest.config.ts               # Jest configuration
├── specs.json                   # Test suite definitions
└── README.md                    # This file
```

### Feature Folder Structure

Each feature follows this pattern:

```
feature_name/
├── _common/                     # Shared across subfeatures
│   ├── given.ts                # Login and setup functions
│   └── scenario.ts             # Scenario initialization
├── _data/                       # Test data fixtures
│   ├── index.ts                # Data exports
│   ├── mongo/                  # MongoDB collections
│   │   ├── users.ts
│   │   ├── auths.ts
│   │   └── ...
│   └── postgres/               # Postgres tables
│       ├── customers.ts
│       └── ...
├── subfeature/                  # Individual test suite
│   ├── _resources/             # Constants, helpers, types
│   ├── _steps/                 # Step definitions
│   │   ├── when.ts            # Actions (tap, type, scroll)
│   │   └── then.ts            # Assertions (visible, exists)
│   └── subfeature.spec.ts      # The actual test file
```

---

## Writing Tests

### BDD Structure

Tests use a BDD (Behavior-Driven Development) pattern with nested callbacks:

```typescript
import { Given, When, Then, Feature, Scenario } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("Feature Name", async () => {
  Scenario("Descriptive scenario name", scenario.start, () => {
    Given("I login as a user", given.logInAndGoToTab("home", data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see the home screen", then.idVisible(ids.HOME_SCREEN));
    });
    
    When("I tap the button", when.tapID(ids.SOME_BUTTON, 2000), async () => {
      Then("I should see the result", then.textVisible("Expected Text"));
    });
  });
});
```

### Key Patterns

#### 1. Imports

```typescript
// BDD framework
import { Given, When, Then, Feature, Scenario, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";

// Local step definitions
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";

// Test data
import * as data from "../_data";

// Element IDs (path alias)
import * as ids from "@ids";
```

#### 2. Step Definitions

**when.ts** - Actions the user performs:
```typescript
import { navigation } from "@navigation";

export const { tapID, tapText, typeText, scrollFromID } = navigation.common;

// Custom actions
export const completeChallenge = (challengeName: string) => async () => {
  // Custom implementation
};
```

**then.ts** - Assertions to verify state:
```typescript
import { navigation } from "@utils";
import { screens } from "@appScreens";

export const { idVisible, textVisible, idExist, wait } = navigation.common;

// Custom assertions
export const scoreDisplayed = (expectedScore: number) => async () => {
  await textVisible(`Score: ${expectedScore}`)();
};
```

#### 3. Wait Times

When using step functions, include wait times (in ms) to allow UI to settle:

```typescript
When("I tap the button", when.tapID(ids.BUTTON, 2000), async () => {
  // 2000ms wait after tap
});
```

#### 4. Using ScenarioOnly / FeatureOnly

For debugging, run only specific tests:

```typescript
// Run only this scenario
ScenarioOnly("My test", scenario.start, () => { ... });

// Run only this feature
FeatureOnly("My feature", async () => { ... });
```

**Remember to remove these before committing!**

### Path Aliases

Available path aliases (defined in `tsconfig.json`):

| Alias | Path |
|-------|------|
| `@app` | `../src/app` |
| `@utils` | `./_utils` |
| `@navigation` | `./_utils/navigation` |
| `@ids` | `./_utils/navigation/ids` |
| `@socket` | `./_utils/socket` |
| `@dataManager` | `./dataManager` |
| `@i18n` | `./_utils/i18n` |
| `@appScreens` | `./_utils/appScreens` |

---

## Working with Test Data

### Data Structure

Test data is defined in `_data` folders, split by database:

```
_data/
├── index.ts          # Exports all data
├── mongo/
│   ├── users.ts      # User documents
│   ├── auths.ts      # Authentication records
│   └── ...
└── postgres/
    ├── customers.ts  # Customer records
    └── ...
```

### Creating Test Data

```typescript
// In _data/mongo/users.ts
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const USER_1 = dataManager.mongoData.users({
  _id: "user-1-id",
  email: "test@example.com",
  firstName: "Test",
  lastName: "User",
  // ... other fields
});

export const AUTH_1 = dataManager.mongoData.auths({
  userId: "user-1-id",
  // ... auth fields
});
```

### How Data Gets Seeded

1. Tests define data using the `dataManager`
2. Before each scenario, data is sent to the API via `/detox/addRecords`
3. After each scenario, `/detox/clear` resets the database

---

## Multi-Region Testing

### Region Ports

| Region | API Port | Command |
|--------|----------|---------|
| UK | 5000 | `pnpm detox:start:UK` |
| US | 5001 | `pnpm detox:start:US` |
| SA | 5002 | `pnpm detox:start:SA` |
| JP | 5003 | `pnpm detox:start:JP` |

### Switching Regions

On the API side:
```bash
pnpm detox:changeRegionDatabase:JP && pnpm detox:start:JP
```

Region-specific tests are in dedicated folders:
- `e2e/japan/` - Japan-specific tests
- `e2e/usa/` - USA-specific tests
- `e2e/south_africa/` - South Africa-specific tests

---

## Debugging & Troubleshooting

### Common Errors & Fixes

#### 1. "Keyboard is not on screen"

**Problem:** Detox complains the keyboard is not visible.

**Solution:**
1. Open Simulator via Xcode
2. Go to **I/O → Keyboard → Toggle Software Keyboard** (or press `⌘K`)
3. Disconnect hardware keyboard: **I/O → Keyboard → Connect Hardware Keyboard** (uncheck)

#### 2. Build Fails / Pods Issues

**Problem:** Build fails or pods won't install.

**Solution:**
```bash
rm -rf node_modules
rm -rf ios/Pods
pnpm install
cd ios && bundle exec pod install --repo-update && cd ../
pnpm detox:build
```

#### 3. App Built in Wrong Location

**Problem:** No `ios/build/Build` folder exists.

**Solution:**
1. Open Xcode → **Settings** → **Locations**
2. Click **Advanced** under Derived Data
3. Select **Unique**
4. Rebuild

#### 4. Element Not Found

**Problem:** Test can't find an element.

**Solutions:**
- Check the element ID in the app code matches what the test expects
- Add more wait time after previous action
- Check the element is actually visible on screen (not scrolled away)
- Open the Allure report to see screenshots

#### 5. API Connection Failed

**Problem:** Tests fail to connect to API.

**Solution:**
1. Verify API is running: `curl http://localhost:5000/health`
2. Check the correct region is running for your tests
3. Ensure Docker services are running: `docker ps`

#### 6. Metro Bundler Issues

**Problem:** Metro bundler crashes or hangs.

**Solution:**
```bash
# Clear Metro cache
pnpm start --reset-cache

# Or for e2e
pnpm start:e2e --reset-cache
```

#### 7. Simulator Issues

**Problem:** Simulator won't boot or is unresponsive.

**Solution:**
```bash
# Reset all simulators
xcrun simctl shutdown all
xcrun simctl erase all
```

### Viewing Test Reports

After running tests, open the Allure report:
```bash
# Reports are generated in the e2e-report folder
open e2e-report/index.html
```

### Debugging Tips

1. **Use `ScenarioOnly`** to run just one scenario while debugging
2. **Add `wait()` steps** to pause and observe the simulator
3. **Check screenshots** in the test report for failure context
4. **Use `pnpm detox:slowstart`** on API to slow down responses
5. **Comment out `afterAll` in `init.ts`** to keep data after test failure

---

## GitLab CI

Detox tests run on GitLab in a custom MacOS VM.

### Configuration

CI jobs are defined in `gitlab/.e2e.yml`.

### More Information

See [Detox GitLab Scripts Documentation](../scripts/gitlab/detox/README.md) for:
- CI job configuration
- Pipeline triggers
- Artifact management
- Parallel test execution

---

## Best Practices

1. **Keep tests independent** - Each scenario should set up its own data
2. **Use meaningful names** - Scenario names should describe what's being tested
3. **Wait appropriately** - Add wait times after actions that trigger async operations
4. **Clean up after debugging** - Remove `ScenarioOnly`/`FeatureOnly` before committing
5. **Test one thing** - Each scenario should verify a single user flow
6. **Use IDs over text** - Element IDs are more stable than text matching
7. **Keep data minimal** - Only seed the data needed for each test

---

## Need Help?

- Check this README first
- Look at existing tests for patterns
- Review the Allure report for test failures
- Ask in the team Slack channel
