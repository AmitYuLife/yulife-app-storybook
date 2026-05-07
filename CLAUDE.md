# YuLife React Native (RN client)

YuLife is a React Native mobile application for iOS and Android that provides a health and wellness platform with step tracking, challenges, rewards, and gamification features. The app uses Expo, React Native Navigation, Redux Toolkit with Sagas, Apollo GraphQL, and integrates with native health APIs.

Source control is GitLab (`glab` CLI).

## Boundaries

- **Do not modify `ios/` or `android/` directories.** This is an Expo managed project; native code changes belong in plugins or upstream packages, not in these folders directly.
- Do not add new data to the Redux store without specific user instruction.
- Do not create new barrel files. Only add to existing barrel files if needed.

## Code Rules

- File and directory names are kebab-case (e.g. `event-reward/`, `event-reward.tsx`).
- Use `import { Box } from "@atoms";` instead of `View`. Use the style props in `src/components/atoms/box/box.types.ts` instead of passing a `style` to Box.
- Do not use `Style.DEVICE_HEIGHT` or `Style.DEVICE_WIDTH` for the outermost `Box`. Use `100%` instead.
- Define components with `const` and export with `export default memo(Component)` at the bottom. Do not wrap the definition itself in `memo`.
- Destructure React imports: `property: ReactNode` not `property: React.ReactNode`. Do not use `React.FC`.
- Prop interfaces: `IComponentNameProps`.
- Screens must be rendered via a container (`screen-name.container.tsx`), never added directly to navigation.
- Modules in `src/modules/` — keep all related files within the module folder/subfolders.
- When fixing `Platform.select` returning `undefined`, add a `default` case rather than `?? fallback`.
- Use `useCallback` for callbacks passed as props to memoised children. Not required for every function in a component.
- Use `react-native-reanimated` for animations, not `Animated` from React Native.
- Use FlashList over FlatList with `estimatedItemSize`. Avoid anonymous functions in `renderItem` or event handlers.
- **All ESLint warnings are CI-blocking** (`--max-warnings 0`). When you modify a file, run `pnpm eslint <file>` and fix all warnings in that file, even pre-existing ones.
- Use `theme.colors.primary.p600` / `theme.colors.primary.p600Shadow` from `useTheme()` (`@modules/themes/hooks/useTheme`) instead of `Colours.primary.p600` / `Colours.primary.p600Shadow`.

## Environment Configuration

API URLs are controlled by `.env.local`, but `.env.local.overrides` takes precedence and will silently replace values. When pointing the app at a different API server, update `.env.local.overrides` rather than `.env.local`.

## State Management (Redux)

- Store: `src/redux/_core/store.ts`
- Async side effects via Redux-Saga, sagas in each module's directory, coordinated in `src/redux/_core/sagas.ts`

## GraphQL (Apollo Client)

- Client: `src/graphql/_core/client.ts`
- Queries by domain in `src/graphql/[feature]/`, generated types in `src/graphql/__generated/`
- Run `pnpm generate:gql:types:local` after modifying `.graphql` files

## Navigation (React Native Navigation)

Uses React Native Navigation (native stacks), not React Navigation.

- Routes: `src/navigation/routes.ts`
- Screen IDs: `src/navigation/constants.ts`
- Root layout: `src/navigation/root.ts`

## Localisation (Tolgee)

- New copy goes in `en-GB.json` only — CI handles other languages.
- API: `src/locale/index.ts`, wrapper: `src/locale/translator.ts`

## Unit Tests (Jest)

- Runner: Jest (`jest.config.ts`)
- Run all: `pnpm test:unit`
- Run single file: `pnpm jest path/to/file.test.ts`
- Tests are co-located with source as `filename.test.ts` — no `__tests__/` directories.

## E2E Testing (Detox)

Test structure: `e2e/feature/sub-feature/*.spec.ts`

- Uses `@yu-life/yulife-bdd-framework` for BDD-style tests: `Feature()` > `Scenario()` > `Given()` / `When()` / `Then()`
- Step definitions in `_steps/given.ts`, `_steps/when.ts`, `_steps/then.ts`
- Prefer seed helpers (`createCustomerRecords()`, `createBusinessRecords()`) over seeding individual models
- Separate users for each Scenario — do not share customer/user data between Scenario blocks
- Businesses can be reused across scenarios

**Running E2E Tests**:

1. Backend: In api-server repo, run `pnpm detox:start` (request the user to do this separately)
2. Terminal 1: `pnpm start:e2e` (bundler + TypeScript watch)
3. Terminal 2: `CI=true pnpm detox:run e2e/path/to/suite.spec.ts`

**Troubleshooting**:

- "Failed to find the app binary": run `pnpm detox:build`
- "Failed to find a device by type": check `xcrun simctl list devices available | grep -i iphone`, then `xcrun simctl create "iPhone 16 Pro" "iPhone 16 Pro"`
