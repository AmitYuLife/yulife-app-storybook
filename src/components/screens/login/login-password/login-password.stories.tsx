import type { Meta, StoryObj } from "@storybook/react";
import LoginPasswordScreen from "./login-password.screen";

const meta: Meta<typeof LoginPasswordScreen> = {
  component: LoginPasswordScreen,
  title: "Design System/Screens/LoginPasswordScreen",
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
type Story = StoryObj<typeof LoginPasswordScreen>;

export const Default: Story = {
  args: {},
};
