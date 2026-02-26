import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Radio from "./radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Design System/Atoms/Radio",
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};
