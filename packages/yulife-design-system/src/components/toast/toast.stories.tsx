import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Toast } from ".";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { message: "Challenge completed — 50 YuCoin added", variant: "success", visible: true },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: { message: "Challenge completed — 50 YuCoin added", variant: "success", visible: true },
};

export const Playground: Story = {};
