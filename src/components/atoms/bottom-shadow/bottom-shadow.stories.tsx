import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BottomShadow from "./bottom-shadow";

const meta: Meta<typeof BottomShadow> = {
  component: BottomShadow,
  title: "Design System/Atoms/BottomShadow",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof BottomShadow>;

export const Default: Story = {
  args: {},
};
