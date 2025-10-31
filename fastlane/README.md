fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios app_store_connect

```sh
[bundle exec] fastlane ios app_store_connect
```

Setup app store connect api key. This action generates a lane context variable (also available as an environment variable)

`APP_STORE_CONNECT_API_KEY` that can be used in other actions.

The API key is stored in the keychain and is used to authenticate with the App Store Connect API.

### ios ci_certificates

```sh
[bundle exec] fastlane ios ci_certificates
```

Download certificates and provisioning profiles. This action creates a new keychain for duration of the build.

Then it downloads the certificates and provisioning profiles using the match action.

### ios ci_develop_build

```sh
[bundle exec] fastlane ios ci_develop_build
```

iOS Develop build

### ios develop_certs_and_profiles

```sh
[bundle exec] fastlane ios develop_certs_and_profiles
```

Generate new develop certificates and provisioning profiles. To be run locally. Need S3 Bucket access permissions.(Lane for DevOps team)

### ios local_build

```sh
[bundle exec] fastlane ios local_build
```

iOS local develop build

### ios submit_to_internal

```sh
[bundle exec] fastlane ios submit_to_internal
```

Push the already uploaded release to pre-internal TestFlight

### ios submit_to_pt

```sh
[bundle exec] fastlane ios submit_to_pt
```

Push the already uploaded release to P&T TestFlight

### ios submit_to_yucrew

```sh
[bundle exec] fastlane ios submit_to_yucrew
```

Push the already uploaded release to the YuCrew TestFlight

----


## Android

### android submit_to_pt

```sh
[bundle exec] fastlane android submit_to_pt
```

Push the already uploaded release to P&T

### android submit_to_yucrew

```sh
[bundle exec] fastlane android submit_to_yucrew
```

Push the already uploaded release to Open Testing (YuCrew)

### android submit_to_production

```sh
[bundle exec] fastlane android submit_to_production
```

Push the already uploaded release to Production

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
