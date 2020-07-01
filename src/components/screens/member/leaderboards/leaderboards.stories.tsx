import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import LeaderboardsScreen from "./leaderboards.screen";
import { avatarFiller } from "../yu-screen/yu-screen.stories-helper";

const fillers = {
  componentId: "string",
  activeLeaderboardIndex: 0,
  sortBy: "steps",
  hasNotification: false,
  appState: "active",
  labels: [
    {
      name: "labels.string",
      onPress: () => null,
    },
  ],
  totalCoins: 0,
  isLoading: false,
  leaderboards: [
    {
      leaderboardId: "leaderboards.leaderboardId",
      name: "yulife",
      consent: false,
      hasAccepted: false,
      inviteFrom: "leaderboards.inviteFrom",
    },
  ],
  items: [
    {
      id: "userId",
      coins: 0,
      firstName: "firstName",
      lastName: "lastName",
      name: "name",
      steps: 0,
      avatar: avatarFiller,
    },
  ],
  copy: {
    heading: "copy.heading",
    subheading:
      "This will let us share details about your activity with other members on this leaderboard. If you change your mind, you can opt out at any point in settings. Ready to compete?",
    ctaLabel: "Yes Please!",
    ctaLabelSecondary: "copy.ctaLabelSecondary",
  },
  userId: "userId",
  onLeftMenuPress: () => null,
  onLeaderboardChange: (_) => null,
  onRefetch: () => null,
  onAllowLeaderboard: () => null,
  onRefuseConsent: () => null,
  onPrivacyPolicyPress: () => null,
} as ComponentProps<typeof LeaderboardsScreen>;

storiesOf("LeaderboardsScreen").add("default", () => <LeaderboardsScreen {...fillers} />);
