import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InboxMessageItem } from ".";

const meta: Meta<typeof InboxMessageItem> = {
  title: "Feedback/InboxMessageItem",
  component: InboxMessageItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    title: "Challenge complete",
    subtitle: "You earned 50 YuCoin for hitting your step goal.",
    timestamp: "2h ago",
    showNotificationDot: true,
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof InboxMessageItem>;

export const Default: Story = {
  args: {
    title: "Challenge complete",
    subtitle: "You earned 50 YuCoin for hitting your step goal.",
    timestamp: "2h ago",
    showNotificationDot: true,
    onPress: fn(),
  },
};

export const Playground: Story = {};
