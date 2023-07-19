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
        id: "all-company",
      },
      {
        name: "Product and Tech",
        id: "product-and-tech",
      },
      {
        name: "Game Squad",
        id: "game-squad",
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
    defaultSelected: "all-company",
  },
};
