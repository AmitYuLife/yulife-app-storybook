import { RecentRewardCard } from "@organisms";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { noop } from "lodash";

const meta: Meta<typeof RecentRewardCard> = {
  component: RecentRewardCard,
  title: "Design System/Organisms/RecentRewardCard",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/8wsC1URsc5EL3B1p6kIlDs/New-Rewards-Store-Home?node-id=6226-9933&t=lrv0BaoUJykgawlv-4",
    },
  },
  args: {
    imageUrl:
      "https://yulife-develop.imgix.net/cms/1691153993964_Illustration-garmin@3x.png?ixlib=js-3.2.1&s=b91166176f0d5a9cde51115c46c6acdf",
    onPress: noop,
  },
};

export default meta;
type Story = StoryObj<typeof RecentRewardCard>;

export const Default: Story = {
  args: {},
};
