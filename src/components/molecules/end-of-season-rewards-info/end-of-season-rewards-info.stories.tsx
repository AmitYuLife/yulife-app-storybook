import type { Meta, StoryObj } from "@storybook/react";
import EndOfSeasonRewardsInfo from "./end-of-season-rewards-info";

const meta: Meta<typeof EndOfSeasonRewardsInfo> = {
  component: EndOfSeasonRewardsInfo,
  title: "Design System/Molecules/EndOfSeasonRewardsInfo",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?node-id=7181-29167&m=dev",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof EndOfSeasonRewardsInfo>;

export const Default: Story = {
  args: {
    items: [
      {
        icon: "https://yulife-develop.imgix.net/storybook/Trees.png?ixlib=js-3.2.1&s=35708cecab9e9d702d18b21887371f55",
        title: "Trees planted",
        value: "1,000",
      },
      {
        icon: "https://yulife-develop.imgix.net/storybook/Mael.png?ixlib=js-3.2.1&s=8df6c8a3bc2dde1dbb7db2c3ea64b926",
        title: "Meals donated",
        value: "300",
      },
      {
        icon: "https://yulife-develop.imgix.net/storybook/Water.png?ixlib=js-3.2.1&s=9e2637ec4d187b0b79f2c1d4d403a1bd",
        title: "Water donated",
        value: "300l",
      },
      {
        icon: "https://yulife-develop.imgix.net/storybook/Ocean.png?ixlib=js-3.2.1&s=95f2952dfe85daab28c0035e034246cd",
        title: "Plastic removed",
        value: "115kg",
      },
    ],
  },
};
