# YuLife App

Source code for the React Native app for iOS and Android.

## Project Installation

### Node.js

The required version of Node.js is managed through [nvm](https://github.com/creationix/nvm). To ensure you're running the correct version of Node.js, follow the [nvm installation instructions](https://github.com/creationix/nvm#installation), then run the following command:

```sh
nvm use
```

### React Native

Follow the [React Native Installation Instructions](https://facebook.github.io/react-native/docs/getting-started.html) for both iOS and Android targets, skipping the section that installs Node.js. This should guide you through the installation of the following required components:

* watchman
* react-native-cli
* XCode (v9.4 or newer)
* XCode Command Line Tools
* Java Development Kit (JDK 8 or newer)
* Android Studio
* Android SDK

If you are having trouble starting the apps, ensure you have followed the installation instructions correctly and have installed all of the necessary dependencies.

## Prepare app for building

### Install app dependencies

This project uses `npm` for project tasks and dependencies.

To install dependencies, run:

```sh
npm install
```

### Download Apollo Schema

This project uses Apollo/GraphQL for its backend communication.

To download the latest backend schema from the deployed API develop server, run:

```sh
npm run download-schema
```

Alternatively, if you are developing against a local instance of the API server, you can download its schema by running:

```sh
npm run download-schema-local
```

### Start bundler and TypeScript watch process

The Metro bundler and TypeScript watch process must be started before you can build and run either app. Start these with the following command:

```sh
npm start
```

## Build app

### iOS

Building the app using XCode is the only way to install a development build on a physical device. If you only need to develop using the simulator you can use the command line.

### Building from command line (iOS)

Build and run the app in the default simulator by running the following command:

```sh
npm run start:ios
```

This will run under the default build profile, which will connect to the development API server. To choose a different build profile, add the profile name to the previous command, as below:

```sh
npm run start:ios:{profile}
# config = local | uat | production
```

#### Building from XCode

You should have installed XCode during the React Native installation process as described above.

The XCode project file can be opened either from within XCode or from Finder directly. It can be found:

```sh
<project directory>/ios/YuLife.xcodeproj
```

To build the app, select your preferred simulator target from the drop-down (this can include a physical device if one is connected) then press the Play button.

##### Build profiles (iOS)

Choose your build profile from the `Product -> Scheme` menu. By default, the `YuLife` profile is selected which connects to the develop API server. Alternate profiles available are `local`, which will connect to a local API instance, `uat` and `production`.

##### App signing

The app needs to be signed before it can be installed on a physical device.

* Ensure you've logged in to XCode using your Apple ID (`Preferences -> Accounts`). Your account needs to be linked to the `Yu Life Limited` team.

* Under the *General* tab of `YuLife` build target, tick the `Automatically manage signing` option and select `Yu Life Limited` as your team.

### Android

### Building from command line (Android)

Build and run the app in the default simulator by running the following command:

```sh
npm run start:android
```

This will run under the default build profile, which will connect to the development API server. To choose a different build profile, add the profile name to the previous command, as below:

```sh
npm run start:android:{profile}
# config = local | uat | production
```

#### Building from Android Studio

You should have installed Android Studio during the React Native installation process as described above.

If you're opening Android Studio for the first time, select `Open and existing Android Studio project` from the Welcome screen and choose the following directory:

```sh
<project directory>/android
```

Wait patiently for the project to sync all of its dependencies. Once it's up-to-date, you can build the app by pressing the Play button from the top menu or selecting `Run -> Run 'app'` from the menu. At this point the ADB window will appear for you to select your deployment target. Either choose a connected phsyical device or any simulator you may have configured.

##### Build profiles (Android)

Choose your build profile from the `Build Profile` menu, which can be found as a vertical tab on the left side of Android Studio's window. By default, the `debug` profile is selected which connects to the develop API server. Alternate profiles available are `local`, which will connect to a local API instance, `uat` and `production`.

#### Google Account signing

In order to sign-in using a Google Account on your local development build, you need to link your local build to an OAuth client ID. To do this, you will first need to open the Android project in Android Studio which will generate a debug keystore for you. You will then need to extract the SHA-1 fingerprint from your debug certificate. To do this, run the following command:

```sh
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

The line that begins with SHA1 contains the certificate's SHA-1 fingerprint. The fingerprint is the sequence of 20 two-digit hexadecimal numbers separated by colons. For example:

```sh
SHA1: BB:0D:AC:74:D3:21:E1:43:07:71:9B:62:90:AF:A1:66:6E:44:5D:75
```

You will then need to request an OAuth 2.0 Client ID from the Google API Console.

1. Visit the [Google API Console](https://console.developers.google.com/flows/enableapi?apiid=fitness) page and create a new project.
2. Click **Continue** to enable to the Fitness API.
3. Click **Go to credentials**.
4. Click **New credentials**, then select **OAuth Client ID**.
5. Under Application type select `Android`.
6. In the resulting dialog, enter your app's SHA-1 fingerprint and package name. The package name for this project is **com.yulife.debug**

You may also be asked to create an OAuth Consent Screen. You only need to enter your email address and an example product name. Enter **yulife** for this value. You don't need to fill in any of the other fields.

You should now be able to log in to your Google Account in the simulator or device.

## Tests

To run the tests use:

```sh
# To run only the unit tests. Report is in './coverage'
npm test:unit

# To update snapshots
npm run test:unit -- -u

# To run all the tests, including TypeScript checking and linting
npm run test:all
```

## StoryBook

This project provides a StoryBook server. To access it, run the following `start` command instead
of the default.

```sh
npm run start:storybook
```

Now, when you build and run either version of the app it will display the StoryBook app instead.
To view the available components, open [http://localhost:7007](http://localhost:7007) in your web browser.

## Folder Structure for YuLife

The YuLife project follows the [atomic design](http://atomicdesign.bradfrost.com/chapter-2/) pattern for component composition.

```sh
├── android
├── assets
├── coverage (Jest lcov & html report)
├── ios
├── jest (Jest setup for unit tests)
├── src
|   ├── components
|       ├── atoms
|           ├── component name
|               ├── _tests
|                   ├── __snapshots__
|                   ├── component.spec.tsx (Unit test)
|               ├── component.styles.ts (CSS & Styles)
|               ├── component.helpers.tsx (Component helpers)
|               ├── component.tsx (Component)
|           ├── atoms.stories.tsx (Atom examples for StoryBook)
|       ├── containers (Container components only)
|           ├── container name
|               ├── component.container.ts
|               ├── component.helpers.ts
|       ├── modals (Components for use in modals only)
|       ├── molecules
|       ├── screens (Presentational components only)
|           ├── component name
|               ├── tests
|                   ├── __snapshots__
|                   ├── component.spec.tsx
|               ├── component.screen.data.tsx (Text strings used in component)
|               ├── component.screen.helpers.tsx
|               ├── component.screen.styles.ts
|               ├── component.screen.tsx
|   ├── context
|   ├── graphql
|   ├── navigation
|   ├── redux (configs, store, reducers, actions, etc.)
|   ├── services
|   ├── styles
├── storybook
```
