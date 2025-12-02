# Google Services

The `google-services.json` files are configuration files required by Firebase and Google Services for Android apps. They contain project information, API keys, OAuth client IDs, and service configurations that enable Firebase features like Analytics, Authentication, and Cloud Messaging.

## Files

- **`google-services.json`**: Production configuration file for the release build (`com.yulife.app` package). This file is used for production environments. To configure this file or download it again, you can do it from [Firebase project settings](https://console.firebase.google.com/project/yulife-d3140/settings/general/android:com.yulife.app).

- **`google-services-debug.json`**: Debug/development configuration file for develop and UAT environments. This file contains configurations for both `com.yulife.debug` and `com.yulife.release` package names and is used during development and testing. To configure this file or download it again, you can do it from [Firebase project settings](https://console.firebase.google.com/project/yu-life-test/settings/general/android:com.yulife.release).

## Additional Information

- Develop and UAT environments Android builds are signed with the develop certificate (`yulife-android-develop`). This certificate can be found on 1Password in the vault `DevOps - Dev & UAT` with the name `Android Develop/UAT keystore file`.

- Production Android builds are signed with production certificate (`yulife-react-native-client`). This certificate can be found on 1Password in the vault `DevOps - Production` with the name `Android Keystore file`.
