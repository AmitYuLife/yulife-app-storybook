import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { RecentRewardCard } from ".";

const meta: Meta<typeof RecentRewardCard> = {
  title: "Layout/RecentRewardCard",
  component: RecentRewardCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    imageUrl: "https://placehold.co/100x100/png",
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof RecentRewardCard>;

export const Default: Story = {
  args: {
    imageUrl: "https://placehold.co/100x100/png",
    onPress: fn(),
  },
};

export const Playground: Story = {};
