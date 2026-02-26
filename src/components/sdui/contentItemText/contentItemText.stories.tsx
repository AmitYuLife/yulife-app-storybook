import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemText } from "./contentItemText";

type Story = StoryObj<typeof ContentItemText>;

const meta: Meta<typeof ContentItemText> = {
  component: ContentItemText,
  title: "Design System/SDUI/ContentItemText",
  tags: ["autodocs"],
  parameters: {},
  args: {
    colour: "red",
    dynamicStyleKey: null,
    id: "daily_survey_intro_title",
    numberOfLines: null,
    styles: [
      { property: "marginTop", value: "24" },
      { property: "marginHorizontal", value: "24" },
      { property: "height", value: "32" },
      { property: "justifyContent", value: "center" },
      { property: "alignItems", value: "center" },
    ],
    text: "Mood Monitor",
    textAlign: "center",
    textType: "h2",
    underline: true,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
