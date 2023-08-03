import type { Meta, StoryObj } from "@storybook/react";
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
    communities: [
      {
        name: "All company",
        leaderboardId: "all-company",
        consent: true,
        days: 30,
        hasAccepted: true,
        inviteFrom: null,
        metric: "steps",
      },
      {
        name: "Product and Tech",
        leaderboardId: "product-and-tech",
        consent: true,
        days: 30,
        hasAccepted: true,
        inviteFrom: null,
        metric: "steps",
      },
      {
        name: "Game Squad",
        leaderboardId: "game-squad",
        consent: true,
        days: 30,
        hasAccepted: true,
        inviteFrom: null,
        metric: "steps",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof LeaderboardCommunityOverlay>;

export const Default: Story = {
  args: {},
};

export const DefaultSelected: Story = {
  args: {
    activeLeaderboardId: "all-company",
  },
};
