const rulesDirPlugin = require("eslint-plugin-rulesdir");
rulesDirPlugin.RULES_DIR = "./eslint";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
    "@react-native",
    "plugin:storybook/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "rulesdir",
    "unused-imports",
    "react-compiler",
    "strict-null-checks",
  ],
  env: {
    browser: true,
  },
  globals: {
    React: "readonly",
    NodeJS: "readonly",
    JSX: "readonly",
    global: "readonly",
  },
  rules: {
    "react-compiler/react-compiler": "error",
    "comma-dangle": "off",
    quotes: 0,
    "no-shadow": "off",
    "no-extra-boolean-cast": "warn",
    "react-native/no-inline-styles": "warn",
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-deprecated": "warn",
    "react/jsx-boolean-value": ["error", "always"],
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
    "unused-imports/no-unused-imports": "error",
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    semi: 2,
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "block-like",
        next: "*",
      },
    ],
    "no-restricted-properties": [
      "warn",
      {
        object: "Style",
        property: "SCALE_UP_AND_DOWN",
        message:
          "Do not use the SCALE_UP_AND_DOWN function. Instead pass through the integer directly, or use the `Style.proportionSizes` function when available.",
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react-native",
            importNames: ["Text", "StyleSheet"],
            message:
              "Use `TextTemplate` from `src/components/atoms/text/text-template.tsx` or `Text` from `src/components/atoms/text/text.tsx` instead of `Text` from `react-native`. Use `StyleSheet` from `@styles` instead of `StyleSheet` from `react-native`.",
          },
          {
            name: "react-native-modal",
            message: "Do not use react-native-modal - this is only included for the hCaptcha implementation",
          },
          {
            name: "react-native-navigation",
            importNames: ["Navigation"],
            message: "Use `Navigation` from `@navigation/main` instead of `Navigation` from `react-native-navigation`.",
          },
        ],
      },
    ],
    "rulesdir/no-restricted-imports-clone": [
      "warn",
      {
        paths: [
          {
            name: "react-native",
            importNames: ["Animated"],
            message: "Use React Native Reanimated instead of React Native's Animated API",
          },
          {
            name: "react-native-animatable",
            message: "Do not use animatable! Use React Native Reanimated instead.",
          },
          {
            name: "react",
            importNames: ["default"],
            message:
              "Use named imports from React instead of default! eg ReactNode instead of React.ReactNode and as from React 17 you don't need to import React at all.",
          },
        ],
      },
    ],
    "rulesdir/jsx-no-logical-and": "error",
    "strict-null-checks/all": "warn",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/func-call-spacing": "off",
      },
    },
    {
      files: ["packages/yulife-design-system/**/*.{ts,tsx}", "screens/**/*.{ts,tsx}"],
      rules: {
        "strict-null-checks/all": "off",
        "react-native/no-inline-styles": "off",
        "rulesdir/no-restricted-imports-clone": "off",
        "rulesdir/jsx-no-logical-and": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "storybook/no-redundant-story-name": "off",
        "storybook/no-renderer-packages": "off",
        "react-compiler/react-compiler": "off",
        "react/no-unescaped-entities": "off",
        "no-restricted-imports": "off",
        "@typescript-eslint/no-deprecated": "off",
      },
    },
    {
      files: ["packages/yulife-design-system/**/*.stories.tsx"],
      rules: {
        "react-native/no-inline-styles": "off",
        "no-restricted-imports": "off",
      },
    },
    {
      files: ["packages/yulife-design-system/**/*.figma.ts"],
      parserOptions: {
        project: null,
      },
      rules: {
        "@typescript-eslint/no-deprecated": "off",
        "strict-null-checks/all": "off",
      },
    },
    {
      files: ["src/components/atoms/text/text.tsx", "src/components/atoms/text/text-template.tsx"],
      rules: {
        "no-restricted-imports": "off",
      },
    },
    {
      files: ["src/redux/**/*"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["@graphql/*"],
                message:
                  "Imports from @graphql are not allowed in redux files. Please create a new type in *.types.ts file",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/redux/*/sagas/**/*"],
      rules: {
        "no-restricted-imports": "off",
      },
    },
    {
      files: ["src/components/sdui/**/*"],
      rules: {
        "react-compiler/react-compiler": "off",
      },
    },
    {
      files: ["e2e/**/*.ts"],
      rules: {
        "no-restricted-syntax": [
          "warn",
          {
            selector: "CallExpression[callee.name='wait']",
            message:
              "Avoid bare wait() calls. Use waitFor(element).toBeVisible().withTimeout() or waitForAppReady() instead.",
          },
        ],
      },
    },
    {
      files: [".eslintrc.js"],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
      rules: {
        "@typescript-eslint/no-deprecated": "off",
        "strict-null-checks/all": "off",
      },
    },
    {
      files: ["plugins/**/*.js"],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
      rules: {
        "@typescript-eslint/no-deprecated": "off",
        "strict-null-checks/all": "off",
      },
    },
    {
      files: ["src/graphql/__generated/**/*"],
      rules: {
        "eslint-comments/no-unlimited-disable": "off",
        "eslint-comments/no-unused-disable": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.strictNullChecks.json",
  },
};
