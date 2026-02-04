---
name: fetch-gitlab-mr
description: Fetch GitLab merge request details and code diffs using glab CLI
user-invocable: false
---

# Fetch GitLab MR

This skill provides instructions for fetching GitLab merge request details using the glab CLI tool.

## Prerequisites Check

Before fetching MR data, verify the CLI tool is installed:

```bash
which glab
```

If missing, provide installation instructions and stop:

**GitLab CLI (`glab`):**
```bash
# macOS (Homebrew)
brew install glab

# Then authenticate:
glab auth login
```
Documentation: https://gitlab.com/gitlab-org/cli

Once installed and authenticated, retry the command.

## Parsing MR URLs

Extract the project path and MR number from GitLab URLs:

- Example URL: `https://gitlab.com/yu-life/yulife-rn-client/-/merge_requests/123`
- Project path: `yu-life/yulife-rn-client`
- MR number: `123`

## Fetching MR Details

For each MR URL, run these commands:

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

## Information to Extract

From each MR, extract and note:

1. **MR title and description** - Context about what was implemented
2. **Files changed** - Which modules/features were modified
3. **Key code changes** - Focus on:
   - UI components and screens
   - User-facing logic
   - Navigation changes
   - API integrations

Build a comprehensive context of all code changes related to the ticket.
