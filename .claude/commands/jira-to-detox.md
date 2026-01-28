---
description: Generate Detox E2E test scenarios from a JIRA ticket
argument-hint: <JIRA-TICKET-ID>
allowed-tools: Read(*), Write(*), Glob(*), Grep(*), Bash(*)
---

# JIRA to Detox E2E Scenario Generator

You are a QA automation assistant that generates Detox E2E test scenarios from JIRA tickets.

## Input

The user provides a JIRA ticket ID as an argument: `$ARGUMENTS`

## Step 0: Prerequisites Check

Before proceeding, verify that the required CLI tools are installed by running:

```bash
which jira && which glab
```

If either tool is missing, stop and provide installation instructions:

**JIRA CLI (`jira-cli`):**
```bash
# macOS (Homebrew)
brew install ankitpokhrel/jira-cli/jira-cli

# Then authenticate:
jira init
```
Documentation: https://github.com/ankitpokhrel/jira-cli

**GitLab CLI (`glab`):**
```bash
# macOS (Homebrew)
brew install glab

# Then authenticate:
glab auth login
```
Documentation: https://gitlab.com/gitlab-org/cli

Once both tools are installed and authenticated, re-run this command.

## Step 1: Fetch JIRA Ticket Details

Run the following JIRA CLI commands to gather context:

```bash
# Get ticket title and description
jira issue view $ARGUMENTS

# Get comments (which contain MR links)
jira issue view $ARGUMENTS --comments 100
```

Extract and note:
- Ticket title
- Ticket description/acceptance criteria
- Any GitLab MR URLs from comments (format: `https://gitlab.com/yu-life/.../merge_requests/XXX`)

## Step 2: Fetch Code Changes from GitLab MRs

For each GitLab MR URL found in the comments:

1. Parse the project path and MR number from the URL
   - Example: `https://gitlab.com/yu-life/yulife-rn-client/-/merge_requests/123`
   - Project: `yu-life/yulife-rn-client`
   - MR number: `123`

2. Use the GitLab CLI (`glab`) to fetch MR details:

```bash
# Get MR description and metadata
glab mr view <MR_NUMBER> --repo <PROJECT_PATH>

# Get the code diff
glab mr diff <MR_NUMBER> --repo <PROJECT_PATH>
```

Example:
```bash
glab mr view 123 --repo yu-life/yulife-rn-client
glab mr diff 123 --repo yu-life/yulife-rn-client
```

Extract and note:
- MR title and description
- Files changed
- Key code changes (focus on UI components, screens, and user-facing logic)

Build a comprehensive context of all code changes related to this ticket.

## Step 3: Analyze and Generate Test Scenarios

Based on the JIRA ticket context and code changes, generate Detox E2E test scenarios.

### Prioritization

**Primary source: JIRA ticket**
- The ticket title, description, and acceptance criteria define WHAT to test
- Acceptance criteria should map directly to test scenarios
- Business requirements drive the expected outcomes (Then statements)

**Secondary source: Code changes**
- Supports the primary source of WHAT to test
- Code changes inform HOW to test (which components, pages, APIs are involved)
- Use code context to understand implementation details
- Reference changed files as supporting documentation, not as the primary driver

### Coverage Philosophy

**DO automate:**
- Primary happy paths (main user journeys)
- Reasonable unhappy paths (common error states, validation failures)
- Core business logic flows

**DO NOT automate:**
- Rare edge cases (e.g., simultaneous device access, unusual user behaviors)
- Third-party API integration points
- Email verification flows
- Scenarios requiring manual verification of external systems

### Pre-Generation Decision Process

Ask yourself:
- Is this scenario likely to need constant maintenance if automated?
- Is this a rare edge case better covered by periodic manual sanity checks?
- Does this require interaction with systems we can't control?

If yes to any, note the scenario as "Manual verification recommended" rather than generating test code.

## Step 4: Determine File Location

Analyze the code changes from Step 2 to identify the feature area and suggest an appropriate file path.

### E2E Folder Structure

The codebase follows a `e2e/[feature]/[sub-feature]/[sub-feature].spec.ts` pattern:

**Existing Feature Folders:**
- `e2e/activity/` - Activity features (cycling, duels, leaderboard, p2p_gifting, steps, streaks)
- `e2e/admin/` - Admin features (appreview, emails, feedback_forms, login_and_routing, referrals, routing)
- `e2e/battle_pass/` - Battle pass features
- `e2e/benefits/` - Benefits features (rewards, wellbeing_hub)
- `e2e/challenges/` - Challenge features (challenges, events, meditopia, yudoku)
- `e2e/challenges_extended/` - Extended challenges (boosts, fiit_in_app, surge)
- `e2e/engagement_surveys/` - Survey features (health_pathways, health_questionnaire, journey_templates)
- `e2e/personal/` - Personal features (business_leavers, notif_centre, pensions)
- `e2e/reward_passes/` - Reward passes (prevention_pass, wellbeing_pass)
- `e2e/smoking_cessation/` - Smoking cessation features
- `e2e/worlds_progression/` - Worlds features (eotw, worlds, worlds_extended)
- `e2e/yuscreen/` - YuScreen features

**Region-Specific Folders:**
- `e2e/japan/` - Japan region tests
- `e2e/usa/` - USA region tests
- `e2e/south_africa/` - South Africa region tests

### Repository to Feature Mapping

Based on the repository and file paths changed in the MRs:

**yulife-rn-client:**
- Changes in `src/modules/activity/` → `e2e/activity/`
- Changes in `src/modules/challenges/` → `e2e/challenges/`
- Changes in `src/modules/benefits/` → `e2e/benefits/`
- Changes in `src/modules/yuscreen/` → `e2e/yuscreen/`
- etc.

**yulife-api-server:**
- Look at the API endpoints/services affected and map to the corresponding feature area

### New File vs Existing File

**Almost always create a new spec file** for each JIRA ticket.

Only add to an existing spec file if:
- It's a very small addition (1-2 scenarios max)
- It's directly related to the existing feature in that file
- The existing file won't become too large

When in doubt, create a new file.

Suggested path format: `e2e/[feature]/[sub-feature]/[sub-feature].spec.ts`

## Step 5: Generate the Spec File

### Output Format

Generate a TypeScript spec file using the `@yu-life/yulife-bdd-framework`:

```typescript
import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";

Feature("[Ticket Number] - [Feature description from JIRA ticket]", async () => {
  // Happy path scenario - derived from acceptance criteria
  Scenario("[Scenario based on JIRA acceptance criteria]", [], async () => {
    // JIRA: [Ticket ID] - [Relevant acceptance criterion]

    Given("[precondition/setup]", [], async () => {
      When("[user action from acceptance criteria]", [], async () => {
        Then("[expected outcome from acceptance criteria]", () => null);
        Then("[another expected outcome]", () => null);
      });
    });
  });

  // Additional scenarios based on other acceptance criteria
  Scenario("[Another acceptance criterion]", [], async () => {
    // JIRA: [Ticket ID] - [Relevant acceptance criterion]

    Given("[precondition]", [], async () => {
      When("[user action]", [], async () => {
        Then("[expected outcome]", () => null);
      });
    });
  });
});
```

### Scenario Guidelines

1. **Aggressively combine scenarios on the same page** - If multiple ACs can be verified from the same page or by continuing navigation from a previous assertion, combine them into ONE scenario. Each Scenario has significant setup cost (login, data seeding, navigation).
2. **Create new Scenarios ONLY when absolutely necessary:**
   - Different user type or permission level
   - Different data state (e.g., empty state vs populated)
   - Different locale/region
   - Cannot be reached by continuing navigation from another assertion
3. **Chain navigation within a single Scenario** - If you navigate to Page A, then click to Page B, then back to Page A - this should all be ONE scenario with multiple When/Then blocks, not three separate scenarios.
4. **Use clear, business-readable language** - avoid technical jargon in scenario titles
5. **Always use placeholder step definitions** - Do NOT add any action implementations:
   - Scenario: use `[]` as the second argument
   - Given: use `[]` as the second argument
   - When: use `[]` as the second argument
   - Then: use `() => null` as the second argument
   - This command generates a test specification skeleton only; implementations are added separately
6. **Include JIRA reference comments** with the relevant acceptance criteria
7. **Avoid overly large files** - if file gets too large then split the feature up into multiple sub files
8. **Use Given for setup** - Unlike Cypress, Detox specs typically use Given for the initial setup (login, data seeding) before When/Then blocks

### Scenario Grouping Example

**BAD: Separate scenarios for each AC on the same page**
```typescript
// BAD: 4 scenarios = 4x login + 4x navigation setup
Scenario("Dashboard shows widget A", [], async () => {
  Given("I am logged in", [], async () => {
    When("I navigate to dashboard", [], async () => {
      Then("Widget A is visible", () => null);
    });
  });
});
Scenario("Dashboard shows widget B", [], async () => {
  Given("I am logged in", [], async () => {
    When("I navigate to dashboard", [], async () => {
      Then("Widget B is visible", () => null);
    });
  });
});
```

**GOOD: One scenario covering all same-page assertions + chained navigation**
```typescript
// GOOD: 1 scenario = 1x login, continuous navigation flow
Scenario("User can view dashboard widgets and navigate to details", [], async () => {
  // JIRA: CTE-123 - AC 1, 2, 3, 4, 5

  Given("I am logged in as a standard user", [], async () => {
    When("I navigate to dashboard", [], async () => {
      Then("Widget A is visible with correct styling", () => null);
      Then("Widget B is visible with correct styling", () => null);
      Then("Widget C is visible with correct styling", () => null);
      Then("Each widget is clickable", () => null);
    });
    When("I tap on Widget A", [], async () => {
      Then("Detail page is displayed", () => null);
      Then("Breadcrumb shows Dashboard > Widget A", () => null);
      Then("Detail content is correct", () => null);
    });
    When("I tap Dashboard in breadcrumb", [], async () => {
      Then("User is navigated back to dashboard", () => null);
    });
  });
});

// Separate scenario ONLY because data state differs
Scenario("Dashboard shows empty state when no data", [], async () => {
  Given("I am logged in as a user with no data", [], async () => {
    When("I navigate to dashboard", [], async () => {
      Then("Empty state message is displayed", () => null);
    });
  });
});
```

**Rule of thumb:** If you can reach it by tapping from where you already are, it belongs in the same scenario.

### Example Output

For a ticket about adding a new notification preferences feature:

```typescript
import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";

Feature("CTE-1234 - User can configure notification preferences in settings", async () => {
  /**
   * JIRA: CTE-1234 - AC 1: User can view and modify notification settings
   * AC 2: Settings persist after app restart
   * AC 3: Disabling push requires confirmation
   */
  Scenario("User can toggle notification settings and changes persist", [], async () => {
    Given("I am logged in as a standard user", [], async () => {
      When("I navigate to Settings > Notifications", [], async () => {
        Then("Notification settings page is displayed", () => null);
        Then("Push notifications toggle is visible", () => null);
        Then("Email notifications toggle is visible", () => null);
      });
      When("I toggle push notifications on", [], async () => {
        Then("Success message is displayed", () => null);
      });
      When("I close and reopen the app", [], async () => {
        Then("Push notification setting is persisted", () => null);
      });
      When("I toggle push notifications off", [], async () => {
        Then("Confirmation modal appears", () => null);
      });
      When("I confirm the change", [], async () => {
        Then("Push setting is saved successfully", () => null);
      });
    });
  });

  /*
   * Separate scenario: different user type (guest user)
   * JIRA: CTE-1234 - AC 4: Guest users cannot access notification settings
   */
  Scenario("Guest user cannot access notification settings", [], async () => {
    Given("I am logged in as a guest user", [], async () => {
      When("I navigate to Settings", [], async () => {
        Then("Notifications section is not visible", () => null);
      });
    });
  });
});
```

## Step 6: Write the File

After generating the content:
1. Confirm the suggested file path with the user
2. Create the spec file at the agreed location
3. If the directory doesn't exist, create it
4. If this is a new sub-feature, consider creating the `_steps/` folder structure:
   ```
   e2e/[feature]/[sub-feature]/
   ├── [sub-feature].spec.ts
   └── _steps/
       ├── given.ts
       ├── when.ts
       └── then.ts
   ```

## Summary

After completing all steps, provide a summary:
- JIRA ticket: [ID and title]
- MRs analyzed: [list of MR URLs]
- Files changed: [brief summary]
- Spec file created: [path]
- Scenarios generated: [count and brief descriptions]
- Manual verification recommended: [any scenarios marked as such]
