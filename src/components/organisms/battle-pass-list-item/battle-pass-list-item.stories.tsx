import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BattlePasstListItem from "./battle-pass-list-item";

const meta: Meta<typeof BattlePasstListItem> = {
  component: BattlePasstListItem,
  title: "Design System/Organisms/BattlePassListItem",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?type=design&node-id=248-20576&mode=design&t=PdzKqNtttEPqr1tL-4",
    },
  },
  args: {
    backgroundColour: "#39D6FF",
    onPress: () => console.log("press"),
    icon: {
      uri: "https://yulife-local.imgix.net/storybook-assets/shirt.png?ixlib=js-3.2.1&s=e5ef3312ed0e2973c6aa8778fcdc8b3b",
      width: 39,
      height: 31,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BattlePasstListItem>;

export const Default: Story = {
  args: {
    position: 1,
  },
};

export const Next: Story = {
  args: {
    position: 2,
  },
};

export const Claim: Story = {
  args: {
    position: 3,
    status: "completed",
  },
};

export const Claimed: Story = {
  args: {
    position: 4,
    status: "claimed",
  },
};
