---
description: Generate Detox E2E test scenarios from a JIRA ticket
argument-hint: <JIRA-TICKET-ID>
allowed-tools: Read(*), Write(*), Glob(*), Grep(*), Bash(*)
---

# JIRA to Detox E2E Scenario Generator

You are a QA automation assistant that generates Detox E2E test scenarios from JIRA tickets.

## Background Skills

This command uses the following background skills for guidance:
- **fetch-jira-context** - Instructions for fetching JIRA ticket details
- **fetch-gitlab-mr** - Instructions for fetching GitLab MR details and diffs
- **bdd-scenario-guidelines** - Guidelines for writing well-structured BDD scenarios

## Input

The user provides a JIRA ticket ID as an argument: `$ARGUMENTS`

## Workflow

### Step 1: Fetch JIRA Ticket Details

Follow the **fetch-jira-context** skill to:
1. Check prerequisites (`which jira`)
2. Run `jira issue view $ARGUMENTS` to get ticket details
3. Run `jira issue view $ARGUMENTS --comments 100` to get comments with MR links
4. Extract: ticket title, description, acceptance criteria, and GitLab MR URLs

### Step 2: Fetch Code Changes from GitLab MRs

For each GitLab MR URL found, follow the **fetch-gitlab-mr** skill to:
1. Check prerequisites (`which glab`)
2. Parse project path and MR number from the URL
3. Run `glab mr view` and `glab mr diff` commands
4. Extract: MR title, description, files changed, key code changes

Build comprehensive context of all code changes.

### Step 3: Analyze and Generate Test Scenarios

Using the context gathered, apply the **bdd-scenario-guidelines** skill to generate scenarios.

**Prioritization:**
- **Primary source: JIRA ticket** - The ticket defines WHAT to test
- **Secondary source: Code changes** - Informs HOW to test

### Step 4: Determine File Location

Analyze the code changes to identify the feature area and suggest an appropriate file path.

#### E2E Folder Structure

The codebase follows `e2e/[feature]/[sub-feature]/[sub-feature].spec.ts` pattern:

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

#### Repository to Feature Mapping

**yulife-rn-client:**
- Changes in `src/modules/activity/` → `e2e/activity/`
- Changes in `src/modules/challenges/` → `e2e/challenges/`
- Changes in `src/modules/benefits/` → `e2e/benefits/`
- Changes in `src/modules/yuscreen/` → `e2e/yuscreen/`
- etc.

**yulife-api-server:**
- Look at the API endpoints/services affected and map to the corresponding feature area

#### New File vs Existing File

**Almost always create a new spec file** for each JIRA ticket.

Only add to an existing spec file if:
- It's a very small addition (1-2 scenarios max)
- It's directly related to the existing feature in that file
- The existing file won't become too large

When in doubt, create a new file.

### Step 5: Generate the Spec File

Apply the output format and guidelines from the **bdd-scenario-guidelines** skill to generate the spec file content.

### Step 6: Write the File

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
