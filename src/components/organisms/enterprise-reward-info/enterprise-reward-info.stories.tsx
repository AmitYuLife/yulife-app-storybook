import type { Meta, StoryObj } from "@storybook/react";
import EnterpriseRewardInfo from "./enterprise-reward-info";

const meta: Meta<typeof EnterpriseRewardInfo> = {
  component: EnterpriseRewardInfo,
  title: "Design System/Organisms/EnterpriseRewardInfo",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?type=design&node-id=233-18196&mode=dev",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof EnterpriseRewardInfo>;

export const Default: Story = {
  args: {
    title: "32,123 Meals",
    titleColor: "#B53C01",
    description: "donated by your company",
    backgroundColor: "#FFEEE5",
    icon: {
      uri: "https://yulife-local.imgix.net/storybook-assets/Meals.png?ixlib=js-3.2.1&s=59696ef2e749b05b36391fc5a0e5d95c",
      id: "",
    },
  },
};

export const Bottles: Story = {
  args: {
    title: "2103l Water",
    titleColor: "#3112F1",
    description: "donated by your company",
    backgroundColor: "#E3F7FC",
    icon: {
      uri: "https://yulife-local.imgix.net/storybook-assets/Bottles.png?ixlib=js-3.2.1&s=4687637f1d64a3b47382b3d8ddb59763",
      id: "",
    },
  },
};
