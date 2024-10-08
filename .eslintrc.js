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
  plugins: ["react", "@typescript-eslint", "deprecation", "rulesdir"],
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
    "comma-dangle": "off",
    quotes: 0,
    "no-shadow": "off",
    "no-extra-boolean-cast": "warn",
    "react-native/no-inline-styles": "warn",
    "prettier/prettier": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-shadow": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
    "deprecation/deprecation": "warn",
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
            importNames: ["Text"],
            message:
              "Use `TextTemplate` from `src/components/atoms/text/text-template.tsx` or `Text` from `src/components/atoms/text/text.tsx` instead of `Text` from `react-native`.",
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
        ],
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
      files: ["*.stories.tsx"],
      rules: {
        "react-native/no-inline-styles": "off",
        "no-restricted-imports": "off",
      },
    },
    {
      files: ["src/components/atoms/text/text.tsx", "src/components/atoms/text/text-template.tsx"],
      rules: {
        "no-restricted-imports": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: [".eslintrc.js"],
};
