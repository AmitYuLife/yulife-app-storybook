import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { children: "Track your daily steps and earn YuCoin rewards.", type: "b2" },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "Track your daily steps and earn YuCoin rewards.", type: "b2" },
};

export const Playground: Story = {};
