import type { Meta, StoryObj } from "@storybook/react";
import LoginScreen from "./login.screen";

const meta: Meta<typeof LoginScreen> = {
  component: LoginScreen,
  title: "Design System/Screens/LoginScreen",
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
type Story = StoryObj<typeof LoginScreen>;

export const Default: Story = {
  args: {},
};
