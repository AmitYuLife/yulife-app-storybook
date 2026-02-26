import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemImage } from "./contentItemImage";

type Story = StoryObj<typeof ContentItemImage>;

const meta: Meta<typeof ContentItemImage> = {
  component: ContentItemImage,
  title: "Design System/SDUI/ContentItemImage",
  tags: ["autodocs"],
  parameters: {},
  args: {
    contentItemImageSize: null,
    id: "daily_survey_intro_illustration",
    image: {
      id: "https://yulife-develop.imgix.net/mood-monitor/illustrations/mood-illustration.svg?ixlib=js-3.2.1&w=344&h=370&s=bbe12317b5283a890c0f6535825520cc",
      uri: "https://yulife-develop.imgix.net/mood-monitor/illustrations/mood-illustration.svg?ixlib=js-3.2.1&w=344&h=370&s=bbe12317b5283a890c0f6535825520cc",
    },
    onPress: null,
    styles: [
      { property: "width", value: "172" },
      { property: "height", value: "185" },
      { property: "marginTop", value: "37" },
    ],
    wrapperStyles: [
      { property: "display", value: "flex" },
      { property: "flexDirection", value: "row" },
      { property: "justifyContent", value: "center" },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
