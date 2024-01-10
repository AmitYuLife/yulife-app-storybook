import type { Meta, StoryObj } from "@storybook/react";
import EventPanel from "./event-panel";
import { ComponentProps } from "react";

const goalArgs: ComponentProps<typeof EventPanel> = {
  type: "goal",
  width: 292,
  title: "Travel the Yuniverse",
  challenges: [
    {
      description: "20,000 / 50,000 steps",
      icon: {
        uri: "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&w=64&h=64&monochrome=%23FFFFFF&s=b9c6f11e1b448d264ba331a177679c54",
      },
    },
  ],
  progressBar: {
    current: 40,
    max: 100,
  },
  milestones: [
    {
      value: 16,
      shouldAttractAttention: false,
      rewardClaimed: true,
    },
    {
      value: 28,
      shouldAttractAttention: false,
      rewardClaimed: true,
    },
    {
      value: 40,
      shouldAttractAttention: true,
      rewardClaimed: false,
    },
    {
      value: 52,
      shouldAttractAttention: false,
      rewardClaimed: false,
    },
    {
      value: 64,
      shouldAttractAttention: false,
      rewardClaimed: false,
    },
    {
      value: 76,
      shouldAttractAttention: false,
      rewardClaimed: false,
    },
    {
      value: 88,
      shouldAttractAttention: false,
      rewardClaimed: false,
    },
    {
      value: 100,
      shouldAttractAttention: false,
      rewardClaimed: false,
    },
  ],
  fontColor: "#FFFFFF",
  backgroundColor: "#1B5991",
  borderColor: "#013D73",
  tags: {
    tag: "Special event • 25 hours left",
    icon: {
      uri: "https://yulife-local.imgix.net/core-design/brand-system/brand/logo-library/yu-life.svg?ixlib=js-3.2.1&w=64&h=64&monochrome=%23FFFFFF&s=9bac0aaef9110744e0ad9b790878cb0d",
    },
  },
  isDisabled: false,
  buttonText: "Join",
  onPanelPress: () => {
    /* do nothing */
  },
};

const rewardArgs: ComponentProps<typeof EventPanel> = {
  type: "rewards",
  width: 360,
  backgroundImage: {
    uri: "https://yulife-local.imgix.net/product-game/card-bg-forest-2023-12-18.svg?ixlib=js-3.2.1&w=1017&h=408&s=f90d8d039373ccea7a7f0a8411d4bf78",
  },
  title: "Level up to unlock new rewards",
  challenges: [
    {
      description: "1/6 Rewards",
      icon: {
        uri: "https://yulife-local.imgix.net/duotone/gift-box-pink.svg?ixlib=js-3.2.1&w=48&h=48&s=e8be56330f7d653e68cc3e22652d6311",
      },
    },
  ],
  progressBar: {
    current: 1,
    max: 6,
  },
  milestones: [
    {
      value: 1,
      rewardClaimed: true,
      shouldAttractAttention: false,
    },
    {
      value: 2,
      rewardClaimed: false,
      shouldAttractAttention: false,
    },
    {
      value: 3,
      rewardClaimed: false,
      shouldAttractAttention: false,
    },
    {
      value: 4,
      rewardClaimed: false,
      shouldAttractAttention: false,
    },
    {
      value: 5,
      rewardClaimed: false,
      shouldAttractAttention: false,
    },
    {
      value: 6,
      rewardClaimed: false,
      shouldAttractAttention: false,
    },
  ],
  fontColor: "#464647",
  backgroundColor: "#FFFFFF",
  borderColor: "#E7E7EB",
  tags: {
    tag: "165 days left",
    icon: {
      uri: "https://yulife-local.imgix.net/static_steps/game_mechanics_information/hourglass.svg?ixlib=js-3.2.1&w=48&h=48&s=f88777c87dab797789ab2f865fa12a25",
    },
  },
  isDisabled: false,
  buttonText: null,
  onPanelPress: () => {
    /* do nothing */
  },
};

const meta: Meta<typeof EventPanel> = {
  component: EventPanel,
  title: "Design System/Molecules/EventPanel",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: goalArgs,
};

export default meta;
type Story = StoryObj<typeof EventPanel>;

export const Goal: Story = {
  args: goalArgs,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
};

export const Rewards: Story = {
  args: rewardArgs,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
};
