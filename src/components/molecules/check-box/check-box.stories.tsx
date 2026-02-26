import type { Meta, StoryObj } from "@storybook/react-webpack5";
import CheckBox from "./check-box";

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: "Design System/Molecules/Check-box",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {};
