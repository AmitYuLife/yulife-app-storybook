import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { RewardSearchListItem } from ".";

const meta: Meta<typeof RewardSearchListItem> = {
  title: "Navigation/RewardSearchListItem",
  component: RewardSearchListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    label: "Spa day voucher",
    imageUrl: "https://placehold.co/48x48/png",
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof RewardSearchListItem>;

export const Default: Story = {
  args: {
    label: "Spa day voucher",
    imageUrl: "https://placehold.co/48x48/png",
    onPress: fn(),
  },
};

export const Playground: Story = {};
