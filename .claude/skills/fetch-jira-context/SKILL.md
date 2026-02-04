---
name: fetch-jira-context
description: Fetch JIRA ticket details including title, description, acceptance criteria, and MR links from comments
user-invocable: false
---

# Fetch JIRA Context

This skill provides instructions for fetching JIRA ticket details using the jira-cli tool.

## Prerequisites Check

Before fetching JIRA data, verify the CLI tool is installed:

```bash
which jira
```

If missing, provide installation instructions and stop:

**JIRA CLI (`jira-cli`):**
```bash
# macOS (Homebrew)
brew install ankitpokhrel/jira-cli/jira-cli

# Then authenticate:
jira init
```
Documentation: https://github.com/ankitpokhrel/jira-cli

Once installed and authenticated, retry the command.

## Fetching Ticket Details

Run the following commands to gather context:

```bash
# Get ticket title and description
jira issue view <TICKET_ID>

# Get comments (which contain MR links)
jira issue view <TICKET_ID> --comments 100
```

## Information to Extract

From the JIRA ticket, extract and note:

1. **Ticket title** - The main feature/task being implemented
2. **Ticket description** - Detailed requirements
3. **Acceptance criteria** - Specific testable requirements (often in a list format)
4. **GitLab MR URLs from comments** - Links in format: `https://gitlab.com/yu-life/.../merge_requests/XXX`

The acceptance criteria are particularly important as they map directly to test scenarios.
