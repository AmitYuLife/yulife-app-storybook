import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { DonationListItem } from ".";

const meta: Meta<typeof DonationListItem> = {
  title: "Navigation/DonationListItem",
  component: DonationListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    id: "mind-charity",
    title: "Mind charity",
    description: "Supporting mental health across the UK",
    yuCoin: 500,
    image: { uri: "https://placehold.co/56x56/png" },
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof DonationListItem>;

export const Default: Story = {
  args: {
    id: "mind-charity",
    title: "Mind charity",
    description: "Supporting mental health across the UK",
    yuCoin: 500,
    image: { uri: "https://placehold.co/56x56/png" },
    onSubmit: fn(),
  },
};

export const Playground: Story = {};
