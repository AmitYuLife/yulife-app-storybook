# GitLab Detox Testing Documentation

## Overview

This document explains how detox testing workflows are configured and executed on GitLab CI/CD.

### GitLab CI/CD Structure

CI Jobs are configured in the [Gitlab configuration file](../../../gitlab/.e2e.yml)

- **Base job configuration** (`.ios-detox-base-test`) with shared setup
- **Specific test jobs** extending the base configuration (e.g., `ios-detox-healthcheck-test-release`)

### Environment Configuration

#### Test Environment

- **Device**: iPhone 16 Pro
- **Node**: v18.20.7 - Installed through NVM
- **Ruby**: 3.2.2 - Part of the MacOS VM (rbenv available for changing version if needed).
- **Xcode**: 16.2 - Part of the MacOS VM
- **Runner**: oakhost_macos_m4 (GitLab runner with macOS support)

## GitLab Detox Scripts

The GitLab implementation uses a complete set of custom scripts located in `scripts/gitlab/detox/` to handle all aspects of detox testing:

### Core Setup Scripts

- **`install_dependencies.sh`**:
  - Install dependencies and configures cache

- **`build_detox_app.sh`**:
  - Build detox app if it's not present in cache

### API Management Scripts

- **`pull_run_api_server.sh`**:
  - Clones the YuLife API and run it on the background using TS. Migrations for detox also run in this script.

### Test Execution Scripts

- **`run_detox_test.sh`**:
  - Prepare the device and run the detox tests.

- **`upload_detox_report.sh`**:
  - Parse the Detox test results and upload them to our reporting service (S3 + CF).

- **`pull_latest_allure_report.sh`**:
  - Downloads historical Detox test results and add them as history for new runs.

## Environment Variables

### GitLab-Specific Variables

The GitLab implementation uses several built-in and custom environment variables:

### Platform-Specific Variables

| GitLab Variable | Purpose |
|-----------------|---------|
| `$CI_JOB_ID` | Build numbering (Note: JOB_ID is too big for build number, using hardcoded one for now) |
| `$CI_PROJECT_DIR` | Build output directory |
| `$CI_COMMIT_REF_NAME` | Current git branch |
| `$CI_PROJECT_ID` | GitLab project ID |
| `$CI_PIPELINE_ID` | GitLab pipeline ID |
| `$CI_JOB_TOKEN` | GitLab job token |
| `$CI_PIPELINE_SOURCE` | Pipeline trigger source |

### Script-Specific Environment Variables

#### API Configuration

| Variable | Purpose | Example Values | Notes |
|----------|---------|----------------|-------|
| `$API_BRANCH_NAME` | Override branch for API server | `main`, `develop`, `feature/api-updates` | Defaults to current branch if not set |
| `$API_ENV_OVERWRITE` | Environment variable overrides for API | `NODE_ENV=test,LOG_LEVEL=debug` | Comma-separated key=value pairs |
| `$API_PORT` | Port configuration | `5000`, `5001`, `5002`, `5003` | Based on region (UK=5000, JP=5001, SA=5002, US=5003) |
| `$API_REGION` | Geographic region | `UK`, `JP`, `SA`, `US` | Determines API server configuration and port |
| `$GITLAB_TOKEN_REPORTER` | GitLab token for API server repository access | `glpat-xxxxxxxxxxxxxxxxxxxx` | Required for cloning API repository |

#### Device and Test Configuration

| Variable | Purpose | Example Values | Notes |
|----------|---------|----------------|-------|
| `$IPHONE_DEVICE` | iOS Simulator device name | `iPhone 16 Pro`, `iPhone 15 Pro`, `iPhone 14 Pro` | Must match available simulator |
| `$DETOX_TEST_TYPE` | Test suite identifier | `healthcheck`, `smoke`, `admin`, `admin:2`, `activity`, `activity:2`, `battle-pass`, `benefits`, `challenges`, `challenges:2`, `challenges-extended`, `personal`, `sa`, `surveys`, `usa`, `jp`, `worlds`, `worlds:2`, `yuscreen`, `reward-passes`, `modified-files` | Determines which tests to run |
| `$DETOX_LOG_LEVEL` | Logging verbosity | `error`, `warn`, `info`, `debug` | Default: `warn` |
| `$TARGET_LOCALE` | Locale for internationalization testing | `en-GB`, `ja-JP`, `en-ZA`, `en-US` | Affects app language and test translations |
| `$DETOX_BUILD_CONFIG` | Build configuration | `ios.sim.release`, `ios.sim.debug` | Release is faster, debug has more logging |
| `$FORCE_DETOX_BUILD` | Force rebuild even if cache exists | `true` | Use when dependencies change |
| `$DETOX_SPEC_FILE` | Specific test file to run | `healthcheck.e2e.ts`, `smoke.e2e.ts` | Used when `DETOX_TEST_TYPE=base` |
| `$DETOX_EXIT_CODE` | Exit code from detox test execution | `0`, `1` | Used to determine test success/failure |
| `$METRO_PORT` | Metro bundler port | `8081` | Default port for Metro bundler |

#### Build and App Configuration

| Variable | Purpose | Example Values | Notes |
|----------|---------|----------------|-------|
| `$BUNDLE_ID` | iOS app bundle identifier | `com.yulife.develop` | Used for app identification |
| `$XCODE_WORKSPACE` | Xcode workspace file | `YuLife.xcworkspace` | Xcode workspace to build |
| `$XCODE_SCHEME` | Xcode build scheme | `YuLife` | Build scheme to use |
| `$DISPLAY_NAME` | App display name | `YuLife (e2e)` | Name shown on device |
| `$ENVFILE` | Environment file for app | `.env.e2e` | Environment configuration file |
| `$BITRISE_BUILD_NUMBER` | Build number | `1234` | App version patch number |
| `$PLATFORM` | Target platform | `ios` | Platform to build for |
| `$ENABLE_YUWATCH` | Enable YuWatch features | `0`, `1` | Toggle YuWatch functionality |

#### GitLab-Specific Configuration

| Variable | Purpose | Example Values | Notes |
|----------|---------|----------------|-------|
| `$CP_HOME_DIR` | CocoaPods cache directory | `$CI_PROJECT_DIR/.cocoapods_cache` | Must be within project directory for caching |
| `$TART_EXECUTOR_SHELL` | Tart executor shell configuration | `bash -l` | Shell to use for Tart VM execution |
| `$TART_EXECUTOR_ROOT_DISK_OPTS` | Tart disk options for performance | `sync=none,caching=cached` | Optimizes VM disk performance |
| `$CI_DETOX_CACHE_PREFIX` | Cache key prefix for detox builds | `ios-detox-build`, `ios-detox-build-modified-files` | Differentiates cache keys |
| `$CI_DETOX_CHANGES` | Indicates modified files test | `true` | Used for modified files detection |
| `$SCHEDULE_JOB` | Scheduled job identifier | `overnight-detox-run` | Identifies scheduled pipeline runs |
| `$DEVOPS_AWS_ACCOUNT_ID` | AWS account ID for ECR | `112259133553` | Used for Docker image registry |
| `$QA_REPORTER_ROLE_ARN` | AWS role for QA reporting | `arn:aws:iam::...` | IAM role for S3/CloudFront access |

#### AWS and Reporting

| Variable | Purpose | Example Values | Notes |
|----------|---------|----------------|-------|
| `$REPORT_S3_BUCKET_NAME` | S3 bucket for test reports | `yu-qa-production-reports` | Must have write permissions |
| `$REPORT_DNS_NAME` | CloudFront domain for report access | `reports.qa.yulife.engineering` | Public URL for accessing reports |
| `$SLACK_WEBHOOK_URL` | Slack integration for notifications | `https://hooks.slack.com/services/...` | Webhook URL for `#alerts-e2e-results` channel |

## Infrastructure Setup

### GitLab CI/CD Infrastructure

The GitLab implementation uses a custom infrastructure setup optimized for detox testing:

### GitLab Runners and Images

#### Runner Configuration

- **Image**: `112259133553.dkr.ecr.eu-west-2.amazonaws.com/yulife-macos-xcode:1.0.0`

#### VM Infrastructure

- **Base Image**: Pre-configured macOS VM from [yulife-devops-packer](https://gitlab.com/yu-life/infrastructure/yulife-devops-packer/-/tree/main/packer)
- **Database Services**: Managed by the VM for consistent test environment
  - **PostgreSQL**: Port 5432
  - **MongoDB**: Port 27018
  - **PgBouncer**: Connection pooling for PostgreSQL
  - **Valkey**: In-memory data store

#### Container Configuration

```yaml
# Docker image specifications
image: 112259133553.dkr.ecr.eu-west-2.amazonaws.com/yulife-macos-xcode:1.0.0
tags:
  - oakhost_macos_m4
variables:
  TART_EXECUTOR_SHELL: bash -l
  TART_EXECUTOR_ROOT_DISK_OPTS: "sync=none,caching=cached"
```

### Caching Strategy

- **GitLab-native caching** for build artifacts and dependencies
- **Enhanced caching configuration**:
  - CocoaPods cache: `$CI_PROJECT_DIR/.cocoapods_cache`
  - Node modules cache: `$CI_PROJECT_DIR/.yarn`
  - Build cache: `ios/build/Build/Products`

## Notification and Reporting

### Slack Integration

- Slack notifications sent to `#alerts-e2e-results`
- Success/failure notification settings preserved
- Same notification format and channels maintained

### Test Reporting

- **S3 integration** for storing test reports
- **Allure reporting** with history synchronization
- **S3 bucket**: `yu-qa-production-reports`  
- **DNS**: `reports.qa.yulife.engineering`

## How to Run Detox Tests on GitLab

### Current Configuration

The GitLab detox testing is configured in `gitlab/.e2e.yml` with the following structure:

```yaml
ios-detox-build-app:
  stage: build
  variables:
    DETOX_BUILD_CONFIG: ios.sim.release
    FORCE_DETOX_BUILD: "true"

.base-detox-test:
  extends: .assume-aws-role-with-web-identity:qa-reporter
  needs:
    - ios-detox-build-app
  stage: test
  variables:
    API_REGION: UK
    TARGET_LOCALE: en-GB
    IPHONE_DEVICE: iPhone 16 Pro
```

### Available Test Jobs

#### Merge Request Tests

- **`ios-detox-run-modified-files`**: Runs when e2e files are modified in MR
- **`ios-detox-build-app`**: Builds app with debug configuration for MR changes

#### Overnight Scheduled Tests

The following test suites run automatically on schedule (`SCHEDULE_JOB=overnight-detox-run`):

- **`ios-detox-admin`** & **`ios-detox-admin-2`**: Admin functionality tests
- **`ios-detox-activity`** & **`ios-detox-activity-2`**: Activity tracking tests  
- **`ios-detox-battle-pass`**: Battle pass feature tests
- **`ios-detox-benefits`**: Benefits system tests
- **`ios-detox-challenges`** & **`ios-detox-challenges-2`** & **`ios-detox-challenges-extended`**: Challenge system tests
- **`ios-detox-personal`**: Personal profile tests
- **`ios-detox-sa`**: South Africa region tests (`API_REGION: SA`)
- **`ios-detox-surveys`**: Survey functionality tests
- **`ios-detox-usa`**: USA region tests (`API_REGION: US`)
- **`ios-detox-jp`**: Japan region tests (`API_REGION: JP`, `TARGET_LOCALE: ja-JP`)
- **`ios-detox-worlds`** & **`ios-detox-worlds-2`**: Worlds progression tests
- **`ios-detox-yuscreen`**: YuScreen feature tests
- **`ios-detox-reward-passes`**: Reward passes tests

#### Disabled Tests (Available for Manual Triggering)

- **`ios-detox-healthcheck-test`**: Basic health check tests
- **`ios-detox-screenshots`**: Screenshot generation tests
- **`ios-detox-smoke`**: Smoke test suite

### Triggering Tests

#### Automatic Triggers

- **Merge Requests**: Modified files tests run automatically when e2e files change
- **Scheduled**: Overnight tests run on schedule with `SCHEDULE_JOB=overnight-detox-run`

#### Manual Triggers

- TODO: Manual triggering will be available once DEVOPS-4362 is completed
