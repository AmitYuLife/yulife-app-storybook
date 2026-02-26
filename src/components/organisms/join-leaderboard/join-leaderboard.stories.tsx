import type { Meta, StoryObj } from "@storybook/react-webpack5";
import JoinLeaderboard from "./join-leaderboard";

const meta: Meta<typeof JoinLeaderboard> = {
  component: JoinLeaderboard,
  title: "Design System/Organisms/JoinLeaderboard",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/sNo5EwzeXqdA8GXR9VW1p6/Leaderboard?type=design&node-id=1084-287427&mode=design&t=wdSc9rzUugCOFLGC-4",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof JoinLeaderboard>;

export const Default: Story = {
  args: {},
};
