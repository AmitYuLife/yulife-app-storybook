import type { Meta, StoryObj } from "@storybook/react";
import { RewardCard } from "./reward-card";

const meta: Meta<typeof RewardCard> = {
  component: RewardCard,
  title: "Design System/Molecules/RewardCard",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    progress: 0,
    target: 10,
    rewardTitle: "Urban Massage Vouchers",
    rewardQuantity: 3,
    primaryColor: "#923280",
    secondaryColor: "#7A206A",
    rewardImage: {
      id: "",
      uri: "https://yu-local-global-assets.imgix.net/cms/1701868907581_urban.png?ixlib=js-3.2.1&w=200&s=6c2ea33e6342d930161d3037cc39a7b3",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RewardCard>;

export const Default: Story = {};
