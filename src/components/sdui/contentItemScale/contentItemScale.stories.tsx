import type { Meta, StoryObj } from "@storybook/react-webpack5";
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
    contentItemScaleOptions: [
      { label: "Not at all", value: "1" },
      { label: "Somewhat", value: "2" },
      { label: "Neutral", value: "3" },
      { label: "Somewhat", value: "4" },
      { label: "Very much", value: "5" },
    ],
    handle: "",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
