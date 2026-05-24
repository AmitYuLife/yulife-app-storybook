import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { GiftSendPrompt } from ".";

const meta: Meta<typeof GiftSendPrompt> = {
  title: "Layout/GiftSendPrompt",
  component: GiftSendPrompt,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    name: "Jamie",
    title: "Send a gift",
    description: "Share YuCoin with a colleague",
    buttonLabel: "Send gift",
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof GiftSendPrompt>;

export const Default: Story = {
  args: {
    name: "Jamie",
    title: "Send a gift",
    description: "Share YuCoin with a colleague",
    buttonLabel: "Send gift",
    onPress: fn(),
  },
};

export const Playground: Story = {};
