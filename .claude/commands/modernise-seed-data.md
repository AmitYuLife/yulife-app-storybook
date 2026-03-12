---
description: Analyse and modernise E2E seed data to use helper utilities
argument-hint: <feature-path>
allowed-tools: Read(*), Edit(*), Glob(*), Grep(*), Bash(*)
---

# Modernise E2E Seed Data

Analyse the E2E test seed data in `$ARGUMENTS` and modernise raw database seeding to use helper utilities.

## Task

1. **Find data files** in `$ARGUMENTS/_data/` (postgres and mongo directories)

2. **Identify raw seeding patterns** - objects using this structure:

   ```typescript
   export const EXAMPLE = {
     type: "postgres",
     modelName: "customer",
     data: { ... }
   } as IDatabaseItem;
   ```

3. **Modernise to helpers** where applicable:
   - Customer data → `createCustomerRecords()`
   - Business data → `createBusinessRecords()`

4. **Modernisation rules**:
   - Remove `type`, `modelName` wrapper and `as IDatabaseItem` cast
   - Lift fields from `data` to top level
   - Ensure imports from `@yu-life/yulife-bdd-framework` include the helper functions
   - **Check the JSDoc** for the helper functions (see step 3) - review their input types and subproperties to understand which database tables each field maps to

5. **Do not modernise** if:
   - No helper exists for that model type (e.g., auth)
   - The data structure is too custom for the helper

## Critical: Clean Up Related Records

When using `createCustomerRecords()`, it automatically generates records for multiple tables. You **MUST remove** any manually-seeded records that would conflict - for example if:

| Helper generates | Remove from file |
|-----------------|------------------|
| `auth` | `AUTH_X` from `mongo/auths.ts` |
| `users` | `USER_X` from `mongo/users.ts` |
| `gameState` | `USER_GAME_STATE_X` from `mongo/user_game_state.ts` |
| `onboarding` | `USER_ONBOARDING_X` from `mongo/userOnboardings.ts` |
| `business_employee_0` | `BUSINESS_EMPLOYEE_X` from `postgres/business_employees.ts` |
| `business_employee_info_0` | `BUSINESS_EMPLOYEE_INFO_X` from `postgres/business_employee_info.ts` |

**IMPORTANT**:

- Only records that will actually be seeded should remain in `_data/` files
- Do NOT leave backward-compatibility aliases or pass-through exports
- Do NOT leave comments explaining why records were removed - just remove them cleanly
- If a record had custom data (e.g., `currentBalance: 15000`), include it in the helper call via `userGameState`, `userInfo` etc.

## Update References

When modernising `CUSTOMER_X` to use `createCustomerRecords()`, it returns `IMemberReturn` instead of `IDatabaseItem`. Update all references:

- `CUSTOMER_X.data.customerId` → `CUSTOMER_X.customer.data.customerId`
- `CUSTOMER_X.data.email` → `CUSTOMER_X.customer.data.email`

## Update Test Files

Tests using modernised customers must change their login pattern:

```typescript
// Before (raw seeding)
loginAsUser(data.CUSTOMER_X, data.AUTH_X)

// After (createCustomerRecords)
import { GENERIC_AUTH_PASSWORD } from "../_utils/users/auth";
loginAsUser(data.CUSTOMER_X.customer, GENERIC_AUTH_PASSWORD)
```

The password changes from `"letmein"` to `"LetmeinNow1!"` when using `createCustomerRecords()`.

## Verification

**IMPORTANT**: Run tests with `CI=true` to avoid interactive prompts:

```bash
CI=true pnpm detox:run e2e/path/to/spec.spec.ts
```

Run the affected `spec.ts` files **before** making changes (baseline) and **after** to identify any regressions.

## Output

- Show which records will be modernised
- Perform the changes
- Report any records that cannot be modernised and why
