import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LeaderboardScreen } from "@screens/member/leaderboard/leaderboard.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import {
  buildLeaderboardItems,
  MOCK_CURRENT_USER,
  MOCK_SOCIAL_GROUP,
  STEPS_LEADERBOARD,
  SUDOKU_LEADERBOARD,
} from "../_fixtures/mock-leaderboard";

const meta = {
  title: "Screens/Member/Leaderboard",
  ...createScreenMeta({
    title: "Member/Leaderboard",
    description: [
      "The main Leaderboard tab screen. Shows a scrollable ranked list of users in the active social group, with a podium header, tab switcher for multiple leaderboard types, and a floating rank chip for the current user when they are out of view.",
      "",
      "**When to use:** Navigated to from the bottom tab bar (index 3).",
      "**Commonly used with:** `LeaderboardListTabs`, `LeaderboardListItem`, `LeaderboardFloatingRank`, `NavBar`, `TopBar`.",
      "**Theme-aware:** No — uses fixed neutral colours.",
    ].join("\n"),
    component: LeaderboardScreen,
    route: ROUTES.leaderboard,
    screenPath: "src/components/screens/member/leaderboard/leaderboard.screen.tsx",
  }),
  argTypes: {
    items: {
      control: false,
      description:
        "Ranked leaderboard entries. Each entry requires `id`, `userId`, `score`, `name`, `position`, `isTarget`, and `avatar`.",
    },
    currentUserInfo: {
      control: false,
      description:
        "The currently logged-in user's leaderboard entry, used to highlight their row and drive the floating rank chip.",
    },
    activeSocialGroup: {
      control: false,
      description: "The active social group (company/team). Provides the list of available leaderboard tabs.",
    },
    activeLeaderboard: {
      control: false,
      description:
        "Which leaderboard tab is currently selected. Must be a leaderboard from `activeSocialGroup.leaderboards`.",
    },
    ranks: {
      control: false,
      description: "Avatar URIs for the top-3 positions, used in the podium header.",
    },
    isLoading: {
      control: "boolean",
      description: "Shows a loading state for the overall list structure (social groups, consent).",
    },
    itemsIsLoading: {
      control: "boolean",
      description: "Shows skeleton rows while leaderboard entries are being fetched.",
    },
    showDuels: {
      control: "boolean",
      description: "Shows the duels entry point in the header.",
    },
    showSearch: {
      control: "boolean",
      description: "Shows the search icon in the header.",
    },
    showReferral: {
      control: "boolean",
      description: "Shows the referral footer below the list.",
    },
    referralAmount: {
      control: "number",
      description: "Number of coins awarded per referral, shown in the referral footer.",
    },
    currentUserIsOutOfBounds: {
      control: "boolean",
      description: "When true, the floating rank chip shows a modal instead of scrolling to the user's row.",
    },
    onLeftMenuPress: { action: "left-menu", description: "Opens the side menu." },
    onNotificationPress: { action: "notifications", description: "Navigates to the notifications screen." },
    onLeftNavigationPress: { action: "left-nav", description: "Navigates left in the leaderboard header." },
    onDuelPress: { action: "duel", description: "Opens the duels screen." },
    onSearchPress: { action: "search", description: "Opens the leaderboard search screen." },
    onRefresh: { action: "refresh", description: "Triggers a pull-to-refresh data reload." },
    onQuestionMarkPress: { action: "question-mark", description: "Opens leaderboard information." },
    onJoinLeaderboardPress: { action: "join-leaderboard", description: "Opens the join leaderboard overlay." },
    onListItemPress: { action: "list-item-press", description: "Opens a user's profile." },
    onUpdateActiveLeaderboard: { action: "update-leaderboard", description: "Switches the active leaderboard tab." },
    onShowRankModal: { action: "show-rank-modal", description: "Shows a modal with the current user's rank." },
    onOpenFrames: { action: "open-frames", description: "Opens the avatar frame selector." },
  },
} satisfies Meta<typeof LeaderboardScreen>;

export default meta;
type Story = StoryObj<typeof LeaderboardScreen>;

const items = buildLeaderboardItems(15);
const ranks = {
  top1: items[0]?.avatar?.uri,
  top2: items[1]?.avatar?.uri,
  top3: items[2]?.avatar?.uri,
};

const baseArgs = {
  items,
  currentUserInfo: MOCK_CURRENT_USER,
  activeSocialGroup: MOCK_SOCIAL_GROUP,
  activeLeaderboard: STEPS_LEADERBOARD,
  ranks,
  isLoading: false,
  itemsIsLoading: false,
  showDuels: true,
  showSearch: true,
  showReferral: false,
  referralAmount: 100,
  currentUserIsOutOfBounds: false,
  onLeftMenuPress: logAction("left-menu"),
  onNotificationPress: logAction("notifications"),
  onLeftNavigationPress: logAction("left-nav"),
  onDuelPress: logAction("duel"),
  onSearchPress: logAction("search"),
  onRefresh: logAction("refresh"),
  onQuestionMarkPress: logAction("question-mark"),
  onJoinLeaderboardPress: logAction("join-leaderboard"),
  onListItemPress: logAction("list-item-press"),
  onUpdateActiveLeaderboard: logAction("update-leaderboard"),
  onShowRankModal: logAction("show-rank-modal"),
  onOpenFrames: logAction("open-frames"),
};

export const Default: Story = {
  args: baseArgs,
};

export const Loading: Story = {
  args: {
    ...baseArgs,
    items: [],
    isLoading: true,
    itemsIsLoading: true,
  },
};

export const ItemsLoading: Story = {
  args: {
    ...baseArgs,
    items: [],
    isLoading: false,
    itemsIsLoading: true,
  },
};

export const EmptySudoku: Story = {
  name: "EmptySudoku",
  args: {
    ...baseArgs,
    items: [],
    activeLeaderboard: SUDOKU_LEADERBOARD,
    isLoading: false,
    itemsIsLoading: false,
  },
};

export const WithReferral: Story = {
  args: {
    ...baseArgs,
    showReferral: true,
    referralAmount: 150,
  },
};

export const CurrentUserOutOfBounds: Story = {
  args: {
    ...baseArgs,
    items: buildLeaderboardItems(15),
    currentUserIsOutOfBounds: true,
  },
};

export const NoConsent: Story = {
  args: {
    ...baseArgs,
    items: [],
    activeLeaderboard: {
      ...STEPS_LEADERBOARD,
      consent: false,
    },
  },
};

export const Playground: Story = {
  args: baseArgs,
};
