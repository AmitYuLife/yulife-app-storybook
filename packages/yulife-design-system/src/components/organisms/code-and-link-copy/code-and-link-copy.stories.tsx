import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { CodeAndLinkCopy } from ".";

const meta: Meta<typeof CodeAndLinkCopy> = {
  title: "Layout/CodeAndLinkCopy",
  component: CodeAndLinkCopy,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    title: "Invite a colleague",
    code: "YULIFE2026",
    buttonText: "Share invite",
    disclaimer: "Each referral earns you both 100 YuCoin.",
    onShare: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof CodeAndLinkCopy>;

export const Default: Story = {
  args: {
    title: "Invite a colleague",
    code: "YULIFE2026",
    buttonText: "Share invite",
    disclaimer: "Each referral earns you both 100 YuCoin.",
    onShare: fn(),
  },
};

export const Playground: Story = {};
