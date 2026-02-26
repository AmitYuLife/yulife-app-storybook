import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemSliderInput } from "./contentItemSliderInput";

type Story = StoryObj<typeof ContentItemSliderInput>;

const meta: Meta<typeof ContentItemSliderInput> = {
  component: ContentItemSliderInput,
  title: "Design System/SDUI/ContentItemSliderInput",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "score",
    minValue: 1,
    maxValue: 5,
    leftLabel: "Left",
    rightLabel: "Right",
    answerKey: "score",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
