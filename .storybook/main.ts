import type { StorybookConfig } from "@storybook/react-webpack5";
import { applyRnWebWebpackConfig } from "./rn-web.webpack.ts";

const config: StorybookConfig = {
  stories: [
    "../packages/yulife-design-system/src/Welcome.mdx",
    "../packages/yulife-design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../screens/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs", "@storybook/addon-a11y"],

  staticDirs: [
    { from: "../assets", to: "/assets" },
    {
      from: "../src/components/containers/member/quests/quest-map/episodes",
      to: "/assets/quest-map/episodes",
    },
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      exclude: [
        "**/hero-card/hero-card.tsx",
        // Docgen emits `switch.displayName`, which is invalid JS (`switch` is reserved).
        "**/molecules/switch/switch.tsx",
      ],
    },
  },

  webpackFinal: async (config) => {
    if (config.optimization) {
      config.optimization.minimize = false;
    }

    return applyRnWebWebpackConfig(config);
  },
};

export default config;
