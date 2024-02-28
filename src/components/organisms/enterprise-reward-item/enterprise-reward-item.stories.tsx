import type { Meta, StoryObj } from "@storybook/react";
import EnterpriseRewardItem from "./enterprise-reward-item";

const meta: Meta<typeof EnterpriseRewardItem> = {
  component: EnterpriseRewardItem,
  title: "Design System/Organisms/EnterpriseRewardItem",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?type=design&node-id=248-20576&mode=design&t=PdzKqNtttEPqr1tL-4",
    },
  },
  args: {
    backgroundColor: "#39D6FF",
    onPress: () => console.log("press"),
    icon: {
      uri: "https://yulife-local.imgix.net/storybook-assets/shirt.png?ixlib=js-3.2.1&s=e5ef3312ed0e2973c6aa8778fcdc8b3b",
      width: 39,
      height: 31,
    },
  },
};

export default meta;
type Story = StoryObj<typeof EnterpriseRewardItem>;

export const Default: Story = {
  args: {
    label: "1",
  },
};

export const Next: Story = {
  args: {
    label: "Next",
  },
};

export const Claim: Story = {
  args: {
    label: "1",
    status: "claim",
  },
};

export const Claimed: Story = {
  args: {
    label: "1",
    status: "claimed",
  },
};
