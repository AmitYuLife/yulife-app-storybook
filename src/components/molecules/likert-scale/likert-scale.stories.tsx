import type { Meta, StoryObj } from "@storybook/react-webpack5";
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
    value: 3,
    onChange: () => null,
    options: [
      { label: "Not at all", value: "1" },
      { label: "Somewhat", value: "2" },
      { label: "Neutral", value: "3" },
      { label: "Somewhat", value: "4" },
      { label: "Very much", value: "5" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof LikertScale>;

export const Default: Story = {
  args: {},
};
