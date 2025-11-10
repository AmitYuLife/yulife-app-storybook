import type { Meta, StoryObj } from "@storybook/react";
import Component from "./code-and-link-copy";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Organisms/CodeAndLinkCopy",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    code: "YULIFE2024",
    title: "Your referral code:",
    onShare: async () => {
      console.log("Share button pressed");
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};

export const WithDisclaimer: Story = {
  args: {
    disclaimer: "Terms and conditions apply. Valid for new users only.",
  },
};

export const WithLongCode: Story = {
  args: {
    code: "YULIFE-REFERRAL-2024-PROMO",
  },
};

export const WithAnalytics: Story = {
  args: {
    analyticsEvent: {
      name: "referral_link_copied" as const,
      location: "storybook",
    },
  },
};
