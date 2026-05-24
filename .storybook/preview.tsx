import type { Preview } from "@storybook/react-webpack5";
import "./rn-web-polyfills";
import "./fonts.css";
import { Box } from "../packages/yulife-design-system/src/components/box";
import { Colours } from "../packages/yulife-design-system/src/tokens/colours";
import "../packages/yulife-design-system/src/tokens/tokens.css";
import { isScreenStory } from "./story-utils";
import { appComponentPreviewDecorator, isAppComponentStory } from "./app-component-preview";

const WIDE_CANVAS_CATEGORIES = new Set(["Feedback", "Layout", "Media", "Navigation"]);
const FULLSCREEN_CATEGORIES = new Set(["Templates", "Foundations"]);

const DesignSystemCanvas = ({ Story, context }: { Story: () => JSX.Element; context: { title?: string } }) => {
  const category = context.title?.split("/")[0] ?? "";
  if (FULLSCREEN_CATEGORIES.has(category) || context.title?.startsWith("Screens/Examples/")) {
    return <Story />;
  }
  const isWide = WIDE_CANVAS_CATEGORIES.has(category);
  return (
    <Box
      bg={Colours.neutral.n20}
      p={24}
      minWidth={isWide ? 360 : 320}
      maxWidth={480}
      width={isWide ? "100%" : undefined}
      br={12}
    >
      <Story />
    </Box>
  );
};

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale for app screen stories.",
      toolbar: {
        icon: "globe",
        items: [
          { title: "English (UK)", value: "en-GB" },
          { title: "English (US)", value: "en-US" },
          { title: "Japanese", value: "ja-JP" },
          { title: "Dutch", value: "nl-NL" },
          { title: "Spanish (US)", value: "es-US" },
          { title: "Arabic", value: "ar-SA" },
        ],
        showName: true,
      },
    },
  },
  parameters: {
    layout: "centered",
    options: {
      storySort: {
        order: [
          "Welcome",
          "Foundations",
          "Templates",
          "Screens",
          "Inputs",
          "Layout",
          "Feedback",
          "Media",
          "Navigation",
          "Typography",
        ],
        method: "alphabetical",
      },
    },
    controls: {
      matchers: {
        color: /(background|color|fill|shadow)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  decorators: [
    (Story, context) => {
      if (isScreenStory(context.title, context.parameters)) {
        const { screenPreviewDecorator } = require("./screen-preview") as typeof import("./screen-preview");
        return screenPreviewDecorator(Story, context);
      }

      if (isAppComponentStory(context.parameters)) {
        return appComponentPreviewDecorator(Story);
      }

      return <DesignSystemCanvas Story={Story} context={context} />;
    },
  ],
};

export default preview;
