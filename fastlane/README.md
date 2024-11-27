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
