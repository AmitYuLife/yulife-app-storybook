# YuLife React Native (RN client)

YuLife is a React Native mobile application for iOS and Android that provides a health and wellness platform with step tracking, challenges, rewards, and gamification features. The app uses Expo, React Native Navigation, Redux Toolkit with Sagas, Apollo GraphQL, and integrates with native health APIs.

## Architecture Overview

@.cursor/rules/react-native-best-practices.mdc

### State Management (Redux)

Redux store configuration: `src/redux/_core/store.ts` - do not add new data to the redux store without specific user instruction

**Async Operations**: Redux-Saga middleware handles side effects

- Sagas located in each module's directory
- Central saga coordination in `src/redux/_core/sagas.ts`

### GraphQL (Apollo Client)

Client setup: `src/graphql/_core/client.ts`

**Query Files**: Organized by domain in `src/graphql/[feature]/`

- Auto-generated TypeScript types in `src/graphql/__generated/`
- Run `yarn generate:gql:types:local` after modifying `.graphql` files

**Apollo Configuration**:

- Auth middleware injects JWT tokens and device headers
- Retry logic with exponential backoff
- Multi-region client support

### Navigation (React Native Navigation)

Navigation wrapper: `src/navigation/main.ts`

**Key Files**:

- `src/navigation/routes.ts`: Route definitions
- `src/navigation/constants.ts`: Screen component IDs
- `src/navigation/root.ts`: Root navigation layout

**Features**:

- Native stack navigation (not React Navigation)
- RTL support with animation inversion
- Bottom tabs for main screens
- Modal and overlay support

### Localization (Tolgee)

Translation management:

- New copy should only be added to the `en-GB.json` file, which will be auto translated in CI later
- Main API: `src/locale/index.ts`
- Polyglot wrapper: `src/locale/translator.ts`
- Regional overrides supported (UK, US, Saudi Arabia, Japan)
- RTL locale support (Arabic, Hebrew)

## E2E Testing (Detox)

Test structure: `e2e/feature/sub-feature/*.spec.ts`

**Running E2E Tests**:

1. Terminal 1: `yarn start:e2e` (bundler + TypeScript watch)
2. Terminal 2: `yarn detox:run` (or specific suite)
3. Backend: In api-server repo, run `yarn detox:start` (request the user to do this separately)

## Common Gotchas

### Detox Build Failures

If `detox:build` fails with "package was built for iOS not iOS Simulator", add `EXCLUDED_ARCHS=arm64` to the xcodebuild command in package.json.

If SwiftEmitModule errors occur:

```bash
cd ios && bundle exec pod install
cd .. && yarn detox:build
git reset --hard HEAD  # Only if no important changes
```
