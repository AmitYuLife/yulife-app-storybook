import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LoginEmailScreen from "./login-email.screen";

const meta: Meta<typeof LoginEmailScreen> = {
  component: LoginEmailScreen,
  title: "Design System/Screens/LoginEmailScreen",
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
type Story = StoryObj<typeof LoginEmailScreen>;

export const Default: Story = {
  args: {},
};
