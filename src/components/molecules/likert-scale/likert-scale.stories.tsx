import type { Meta, StoryObj } from "@storybook/react";
import LikertScale from "./likert-scale";

const meta: Meta<typeof LikertScale> = {
  component: LikertScale,
  title: "Design System/Molecules/LikertScale",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/j1Ac3c1tHeSiXupz83DSFB/Health-Questionnaire---Spec?node-id=368-29124&t=zCnGXTxZ7MOukuWV-4",
    },
  },
  args: {
    children: [],
    handleWidth: 24,
    handleHeight: 24,
    labelMin: "Not at all",
    labelMax: "Very much",
    value: 0,
    onChange: () => null,
  },
};

export default meta;
type Story = StoryObj<typeof LikertScale>;

export const Default: Story = {
  args: {},
};
