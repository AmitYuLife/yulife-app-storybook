# YuLife React Native (RN client)

YuLife is a React Native mobile application for iOS and Android that provides a health and wellness platform with step tracking, challenges, rewards, and gamification features. The app uses Expo, React Native Navigation, Redux Toolkit with Sagas, Apollo GraphQL, and integrates with native health APIs.

## Architecture Overview

@.cursor/rules/react-native-best-practices.mdc

### Boundaries

- **Do not modify `ios/` or `android/` directories.** This is an Expo managed project; native code changes belong in plugins or upstream packages, not in these folders directly.

### Rules

- Always use `import { Box } from "@atoms";` component instead of View. Use the style props in `src/components/atoms/box/box.types.ts` instead of passing a `style` to Box.
- When creating components, always define them with `const` and export with `export default memo(Component)` at the bottom of the file. Do not define with `const MyComponent = memo(...`
- Always destructure React imports. For example use `property: ReactNode` instead of `property: React.ReactNode`
- If working within a module `src/modules` keep all files related to it in the module folder/subfolders.
- All screens must be rendered via a `container` rather than adding the screen file directly to navigation. This is usually via a `screen-name.container.tsx` file.
- Prop interfaces should be named following the pattern IComponentNameProps
- Do not create new barrel files. Only add to existing barrel files if needed.
- Do not use `Style.DEVICE_HEIGHT` or `Style.DEVICE_WIDTH` for the width or height of the outermost `Box`. Use `100%` when you specifically do not need the dimensions and need to cover the whole screen.

### State Management (Redux)

Redux store configuration: `src/redux/_core/store.ts` - do not add new data to the redux store without specific user instruction

**Async Operations**: Redux-Saga middleware handles side effects

- Sagas located in each module's directory
- Central saga coordination in `src/redux/_core/sagas.ts`

### GraphQL (Apollo Client)

Client setup: `src/graphql/_core/client.ts`

**Query Files**: Organized by domain in `src/graphql/[feature]/`

- Auto-generated TypeScript types in `src/graphql/__generated/`
- Run `pnpm generate:gql:types:local` after modifying `.graphql` files

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

@.cursor/rules/e2e-testing.mdc
@.cursor/rules/e2e-seed-data.mdc

Test structure: `e2e/feature/sub-feature/*.spec.ts`

**Running E2E Tests**:

1. Terminal 1: `pnpm start:e2e` (bundler + TypeScript watch)
2. Terminal 2: `CI=true pnpm detox:run e2e/path/to/suite.spec.ts`
3. Backend: In api-server repo, run `pnpm detox:start` (request the user to do this separately)
