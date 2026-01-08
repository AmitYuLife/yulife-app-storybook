import type { Meta, StoryObj } from "@storybook/react";
import ContentItemScale from "./contentItemScale";

type Story = StoryObj<typeof ContentItemScale>;

const meta: Meta<typeof ContentItemScale> = {
  component: ContentItemScale,
  title: "Design System/SDUI/ContentItemScale",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/j1Ac3c1tHeSiXupz83DSFB/Health-Questionnaire---Spec?node-id=368-29124&t=zCnGXTxZ7MOukuWV-4",
    },
  },
  args: {
    answerKey: "ANSWER_KEY",
    styles: [],
    labelMin: "Not at all",
    labelMax: "Very much",
    handleWidth: 24,
    handleHeight: 24,
    handle: "",
    labelTippedColor: "blue",
    labelUntippedColor: "red",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
