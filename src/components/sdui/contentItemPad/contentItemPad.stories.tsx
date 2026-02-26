import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemPad } from "./contentItemPad";

type Story = StoryObj<typeof ContentItemPad>;

const meta: Meta<typeof ContentItemPad> = {
  component: ContentItemPad,
  title: "Design System/SDUI/ContentItemPad",
  tags: ["autodocs"],
  parameters: {},
  args: {
    amount: 80,
    dynamicStyles: null,
    id: "daily_survey_intro_bottom_pad",
    pointerEvents: null,
    styles: null,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
