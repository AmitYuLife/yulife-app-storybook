module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
    "@react-native-community",
  ],
  plugins: ["react", "@typescript-eslint", "yulife-rn-client", "deprecation"],
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
    "yulife-rn-client/no-scale-up-and-down": "warn",
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
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};
