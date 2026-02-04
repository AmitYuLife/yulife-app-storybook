---
name: bdd-scenario-guidelines
description: Guidelines for writing well-structured BDD test scenarios with proper grouping and coverage
user-invocable: false
---

# BDD Scenario Guidelines

This skill provides guidelines for writing well-structured BDD test scenarios for Detox E2E tests.

## Coverage Philosophy

### DO Automate

- Primary happy paths (main user journeys)
- Reasonable unhappy paths (common error states, validation failures)
- Core business logic flows

### DO NOT Automate

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

## Scenario Grouping Rules

### Aggressively Combine Same-Page Scenarios

If multiple acceptance criteria can be verified from the same page or by continuing navigation from a previous assertion, combine them into ONE scenario. Each Scenario has significant setup cost (login, data seeding, navigation).

### Create Separate Scenarios ONLY When

- Different user type or permission level
- Different data state (e.g., empty state vs populated)
- Different locale/region
- Cannot be reached by continuing navigation from another assertion

### Chain Navigation Within Scenarios

If you navigate to Page A, then click to Page B, then back to Page A - this should all be ONE scenario with multiple When/Then blocks, not three separate scenarios.

**Rule of thumb:** If you can reach it by tapping from where you already are, it belongs in the same scenario.

## Placeholder Conventions

Always use placeholder step definitions - do NOT add any action implementations:

- **Scenario:** use `[]` as the second argument
- **Given:** use `[]` as the second argument
- **When:** use `[]` as the second argument
- **Then:** use `() => null` as the second argument

This generates a test specification skeleton only; implementations are added separately.

## Output Format

Generate TypeScript spec files using the `@yu-life/yulife-bdd-framework`:

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

## Additional Guidelines

1. **Use clear, business-readable language** - avoid technical jargon in scenario titles
2. **Include JIRA reference comments** with the relevant acceptance criteria
3. **Avoid overly large files** - if file gets too large then split the feature up into multiple sub files
4. **Use Given for setup** - Unlike Cypress, Detox specs typically use Given for the initial setup (login, data seeding) before When/Then blocks

## Examples

### BAD: Separate Scenarios for Each AC on the Same Page

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

### GOOD: One Scenario Covering All Same-Page Assertions + Chained Navigation

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

### Complete Example: Notification Preferences Feature

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
