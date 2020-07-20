import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import LeaderboardsScreen from "./leaderboards.screen";

const MY_USER_ID = "MY_USER_ID";
const sampleLeaderboard = {
  leaderboardId: "leaderboards.leaderboardId",
  name: "yulife",
  consent: true,
  hasAccepted: true,
  inviteFrom: "leaderboards.inviteFrom",
};

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
  leaderboards: [sampleLeaderboard],
  items: Array.from({ length: 3 }).map((_, i) => ({
    id: i ? `not_userId_${i}` : MY_USER_ID,
    coins: 0,
    firstName: "firstName",
    lastName: "lastName",
    name: "name",
    steps: 0,
    avatarRemoteFile: "string",
  })),
  copy: {
    heading: "copy.heading",
    subheading:
      "This will let us share details about your activity with other members on this leaderboard. If you change your mind, you can opt out at any point in settings. Ready to compete?",
    ctaLabel: "Yes Please!",
    ctaLabelSecondary: "copy.ctaLabelSecondary",
  },
  userId: MY_USER_ID,
  onLeftMenuPress: () => null,
  onLeaderboardChange: (_) => null,
  onRefetch: () => null,
  onAllowLeaderboard: () => null,
  onRefuseConsent: () => null,
  onPrivacyPolicyPress: () => null,
} as ComponentProps<typeof LeaderboardsScreen>;

storiesOf("LeaderboardsScreen")
  .add("default", () => <LeaderboardsScreen {...fillers} />)
  .add("prompts consent", () => (
    <LeaderboardsScreen {...fillers} leaderboards={[{ ...sampleLeaderboard, hasAccepted: false, consent: false }]} />
  ));
