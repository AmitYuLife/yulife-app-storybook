import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LeaderboardCommunityOverlay from "./leaderboard-community-overlay";
import { FloatingModal } from "@components/modals";
import { t } from "@locale";

const meta: Meta<typeof LeaderboardCommunityOverlay> = {
  component: LeaderboardCommunityOverlay,
  title: "Design System/Overlay/LeaderboardCommunity",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/sNo5EwzeXqdA8GXR9VW1p6/Leaderboard?type=design&node-id=1084-290581&mode=design&t=OWnkNKZrPy8DbaZQ-0",
    },
  },
  decorators: [
    (Story) => (
      <FloatingModal title={t("communities")} buttonLabel={t("overlays.leaderboard_community.button_label")}>
        <Story />
      </FloatingModal>
    ),
  ],
  args: {
    socialGroups: [
      {
        name: "All company",
        socialGroupId: "test-1",
        leaderboards: [],
      },
      {
        name: "Product and Tech",
        socialGroupId: "test-2",
        leaderboards: [],
      },
      {
        name: "Game Squad",
        socialGroupId: "test-3",
        leaderboards: [],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof LeaderboardCommunityOverlay>;

export const Default: Story = {
  args: {},
};
