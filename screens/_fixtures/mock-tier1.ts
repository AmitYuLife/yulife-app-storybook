import type { IMenuLink } from "@screens/member/menu/menu.screen";
import type { IConnectionsSectionItem, INotificationsSectionItem } from "@screens/member/settings/settings.screen";
import type { IActivityHistoryDay } from "@organisms/activity-history-day/activity-history-day";
import type { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import type { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import type { Item } from "@screens/referrals/referrals.screen";
import type { RewardsPurchasedItemData } from "@screens/member/rewards/purchased/rewards-purchased-list";
import type { InboxMessage } from "@hooks";
import type {
  GetMobileRecentlyUsedRewardsListQuery,
  GetMobileRewardsListQuery,
  GetReferralInformationQuery,
  GetTodayEarningsQuery,
} from "@graphql/__generated";
import { UserNotificationsType } from "@graphql/__generated";
import { AchievementStatus } from "@organisms/achievement-card/achievement-card";
import type { IAchievementCardProps } from "@organisms/achievement-card/achievement-card";
import { HealthProvider, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { getPermissionsConfig } from "@services/yuHealth/permissions.helpers";
import type { BusinessAccountState } from "@components/molecules/business-picker";
import { MOCK_REWARD_ITEMS, MOCK_SHOPFRONT } from "./mock-shopfront";
import { logAction, noop } from "../_utils/mock-actions";
import {
  STORY_ACHIEVEMENT_ENDURING_WANDERER,
  STORY_MEDITATION_ICON,
  STORY_REFERRAL_BACKGROUND,
  STORY_REWARD_BUPA_DENTAL,
  STORY_REWARD_FIIT,
  STORY_REWARD_METLIFE,
  STORY_REWARD_YUNIVERSITY,
  STORY_STEPS_ICON,
  STORY_YUCOIN_ICON,
  STORY_YUMOJI_PNG_MINI,
} from "./story-assets";

export const MOCK_MENU_LINKS: IMenuLink[] = [
  { condition: true, label: "Invite a colleague", highlight: true, onPress: noop },
  { condition: true, label: "Activity history", onPress: noop },
  { condition: true, label: "My account", onPress: noop },
  { condition: true, label: "Wellbeing hub", onPress: noop },
  { condition: true, label: "Settings", onPress: noop },
  { condition: true, label: "Log out", onPress: noop },
];

export const MOCK_SETTINGS_NOTIFICATIONS: INotificationsSectionItem[] = [
  {
    id: "notif-daily-challenge",
    type: UserNotificationsType.DailyChallengeReminder,
    name: "dailyChallengeReminder",
    title: "Daily challenge reminder",
    description: "Get a nudge when your daily challenge is ready.",
    isActive: true,
    isAvailable: true,
    order: 1,
    onSwitchPress: noop,
  },
  {
    id: "notif-streak-saver",
    type: UserNotificationsType.StreakSaver,
    name: "streakSaver",
    title: "Streak saver",
    description: "Reminder before your streak resets at midnight.",
    isActive: false,
    isAvailable: true,
    order: 2,
    onSwitchPress: noop,
  },
];

export const MOCK_SETTINGS_CONNECTIONS: IConnectionsSectionItem[] = [
  {
    title: "Apple Health",
    name: "appleHealth",
    isConnected: true,
    isLoading: false,
    onPress: noop,
    onPressInfo: noop,
    lastUpdated: Date.now() - 3600000,
  },
  {
    title: "Fitbit",
    name: "fitbit",
    defaultDescription: "Connect your Fitbit to sync steps and activity.",
    isConnected: false,
    isLoading: false,
    onPress: noop,
    onPressInfo: noop,
  },
];

export const MOCK_CHALLENGES = [
  {
    id: "challenge-steps-10k",
    heading: "10,000 steps",
    duration: "7 days",
    reward: "50 YuCoin",
    isLocked: false,
    availableAtLevel: 10,
    currentWorld: 1,
    imageUri: STORY_STEPS_ICON,
    onPress: noop,
  },
  {
    id: "challenge-mindful",
    heading: "Mindful minutes",
    duration: "5 days",
    reward: "30 YuCoin",
    isLocked: true,
    availableAtLevel: 11,
    currentWorld: 1,
    imageUri: STORY_MEDITATION_ICON,
    onPress: noop,
    hasSurge: true,
  },
];

export const MOCK_PATHWAY_CHALLENGE = {
  heading: "Pathways check-in",
  reward: "25 YuCoin",
  expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  onPress: noop,
};

const todayIso = new Date().toISOString();
const threeDaysAgoIso = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();

export const MOCK_NOTIFICATIONS: InboxMessage[] = [
  {
    messageId: "notif-1",
    title: "Streak saved!",
    subtitle: "Your 7-day streak is safe — keep it going tomorrow.",
    deliveryTimestamp: todayIso,
    isRead: false,
    source: "api",
    data: { source: "api", isRead: false, onPress: "{}" },
  },
  {
    messageId: "notif-2",
    title: "New challenge available",
    subtitle: "Walk 8,000 steps today to earn 15 YuCoin.",
    deliveryTimestamp: threeDaysAgoIso,
    isRead: true,
    source: "api",
    data: { source: "api", isRead: true, onPress: "{}" },
  },
];

export const MOCK_REWARDS_LIST_DATA: GetMobileRewardsListQuery["data"] = {
  __typename: "MobileRewardsList",
  id: "reward-list-001",
  sduiStepId: "sdui-step-rewards",
  rewardStoreLocation: "UK",
  rewardStoreLocationLabel: "United Kingdom",
  hasUserSelectedStoreLocation: true,
  rewardStoreAccessRevokesAt: null,
  tags: ["Health & Fitness", "Food & Drink"],
  list: MOCK_REWARD_ITEMS,
};

export const MOCK_RECENT_REWARDS: GetMobileRecentlyUsedRewardsListQuery["data"] = {
  recentlyUsedRewards: MOCK_SHOPFRONT.recentlyUsed.recentlyUsedRewards,
};

export const MOCK_PURCHASED_REWARDS: RewardsPurchasedItemData[] = [
  {
    id: "purchase-1",
    day: "12",
    month: "May",
    reward: "Headspace Premium",
    cost: "500 YuCoin",
    status: "Delivered",
    statusColour: "#00875A",
    onPress: noop,
  },
  {
    id: "purchase-2",
    day: "3",
    month: "May",
    reward: "Peloton Digital",
    cost: "350 YuCoin",
    status: "Pending",
    statusColour: "#FF8B00",
    onPress: noop,
  },
];

export const MOCK_BATTLE_PASS_PROGRESS: IBattlePassProgressBar = {
  level: 3,
  step: 2,
  steps: 5,
  status: "in_progress",
};

export const MOCK_BATTLE_PASS_REWARDS: IBattlePassListItem[] = [
  {
    id: "bp-reward-1",
    title: "Headspace voucher",
    position: 1,
    status: "claimed",
    backgroundColour: "#EFF0FA",
    icon: { uri: STORY_REWARD_METLIFE },
  },
  {
    id: "bp-reward-2",
    title: "Peloton class pass",
    position: 2,
    status: "pending",
    backgroundColour: "#EFF0FA",
    icon: { uri: STORY_REWARD_FIIT },
  },
  {
    id: "bp-reward-3",
    title: "Calm subscription",
    position: 3,
    status: "pending",
    backgroundColour: "#EFF0FA",
    icon: { uri: STORY_REWARD_BUPA_DENTAL },
  },
];

export const MOCK_TODAY_EARNINGS_HEADER: GetTodayEarningsQuery["getTodayEarnings"]["header"] = {
  yuCoinToday: "42",
  yuCoinPower: 1,
};

export const MOCK_TODAY_EARNINGS_FEED: GetTodayEarningsQuery["getTodayEarnings"]["activityFeed"] = [
  {
    id: "feed-steps",
    title: "Steps",
    titleAccessibility: { accessibilityLabel: "Steps", accessibilityRole: "header" },
    emptyMessage: null,
    wellDoneBanner: null,
    button: null,
    buttonAccessibility: null,
    toast: null,
    questionMarkModal: null,
    activityProgress: [
      {
        type: "Steps",
        activitySubTotal: "8420",
        yuCoinSubTotal: "15",
        rating: 2,
        maxLength: 10000,
        currentPosition: 8420,
        accessibility: { accessibilityLabel: "8,420 steps", accessibilityRole: "text" },
        iconUrl: { uri: STORY_STEPS_ICON },
      },
    ],
  },
];

export const MOCK_PERMISSIONS_CONNECTED = getPermissionsConfig(HealthProvider.healthConnect);

export const MOCK_PERMISSION_STATUSES = {
  systemPermissions: {
    [HealthProviderCapability.STEP_COUNT]: true,
    [HealthProviderCapability.MINDFUL_MINUTES]: true,
    [HealthProviderCapability.CYCLING_DISTANCE]: false,
    [HealthProviderCapability.ACTIVITIES]: false,
  },
  providerPermissions: {
    [HealthProviderCapability.STEP_COUNT]: true,
    [HealthProviderCapability.MINDFUL_MINUTES]: false,
    [HealthProviderCapability.CYCLING_DISTANCE]: false,
    [HealthProviderCapability.ACTIVITIES]: false,
  },
};

export const MOCK_BUSINESS_ACCOUNT: BusinessAccountState["activeBusinessAccounts"][0] = {
  id: "ba-1",
  businessAccountId: "acme-ltd",
  businessAccountName: "Acme Ltd",
};

export const MOCK_BUSINESS_ACCOUNT_STATE: BusinessAccountState = {
  activeBusinessAccounts: [MOCK_BUSINESS_ACCOUNT],
  selectedBusinessAccount: MOCK_BUSINESS_ACCOUNT,
  setSelectedBusinessAccount: logAction("select-business-account"),
};

export const MOCK_REFERRAL_INFO: GetReferralInformationQuery["referralInformation"] = {
  rewardForReferral: 500,
  referralCode: "ALEX2024",
  shareReferralCodeMessage: "Join me on YuLife and earn rewards for staying active!",
  codeDisclaimer: "Terms apply. Reward paid when your colleague completes onboarding.",
  shareButton: "Share invite link",
  businessAccountId: "acme-ltd",
  background: { id: "ref-bg", uri: STORY_REFERRAL_BACKGROUND },
  markdown: {
    headerTitle: "## Invite a colleague\nEarn **500 YuCoin** for every successful referral.",
    headerSubtitle: "Share your code with teammates at Acme Ltd.",
    shareBoxTitle: "Your referral code",
    historyTitle: "Referral history",
    codeHistoryEmptyMessage: "No referrals yet — share your code to get started.",
  },
};

export const MOCK_REFERRAL_HISTORY: Item[] = [
  {
    id: "ref-1",
    name: "Sam Taylor",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    avatarUrl: STORY_YUMOJI_PNG_MINI,
    coin: 500,
  },
  {
    id: "ref-2",
    name: "Jordan Lee",
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    avatarUrl: STORY_YUMOJI_PNG_MINI,
    coin: 500,
  },
];

export const MOCK_ACTIVITY_HISTORY_DAYS: IActivityHistoryDay[] = [
  {
    id: "day-1",
    title: "Mon 12 May",
    level: "Level 10",
    yucoin: "+15",
    leftIcon: { id: "level-icon", uri: STORY_STEPS_ICON },
    rightIcon: { id: "yucoin-icon", uri: STORY_YUCOIN_ICON },
    historyItems: [
      {
        title: "Steps",
        activityItems: [
          {
            title: "8,420 steps",
            leftIcon: { id: "steps-icon", uri: STORY_STEPS_ICON },
            rightIcon: { id: "yucoin-icon", uri: STORY_YUCOIN_ICON },
            yucoin: "+10 YuCoin",
          },
        ],
      },
      {
        title: "Challenges",
        activityItems: [
          {
            title: "Daily challenge completed",
            leftIcon: { id: "challenge-icon", uri: STORY_MEDITATION_ICON },
            rightIcon: { id: "yucoin-icon-2", uri: STORY_YUCOIN_ICON },
            yucoin: "+5 YuCoin",
          },
        ],
      },
    ],
  },
];

export const MOCK_LEADERBOARD_ENROLLMENTS = [
  {
    socialGroupId: "sg-acme",
    socialGroupName: "Acme Ltd",
    leaderboardId: "lb-steps",
    name: "Company steps",
    consent: true,
    leaderboardConfigId: "cfg-steps",
  },
  {
    socialGroupId: "sg-acme",
    socialGroupName: "Acme Ltd",
    leaderboardId: "lb-cycling",
    name: "Cycling distance",
    consent: false,
    leaderboardConfigId: "cfg-cycling",
  },
];

export const MOCK_ACHIEVEMENTS: (Omit<IAchievementCardProps, "onPress"> & { shortDescription?: string })[] = [
  {
    id: "ach-1",
    name: "First 10k",
    shortDescription: "Walk 10,000 steps in a single day",
    description: "Walk 10,000 steps in a single day to unlock this achievement.",
    status: AchievementStatus.unlocked,
    points: 100,
    icon: { id: "ach-icon-1", uri: STORY_ACHIEVEMENT_ENDURING_WANDERER },
  },
  {
    id: "ach-2",
    name: "Week warrior",
    shortDescription: "Complete 7 challenges in a week",
    description: "Complete 7 challenges within 7 days.",
    status: AchievementStatus.locked,
    points: 250,
    icon: { id: "ach-icon-2", uri: STORY_ACHIEVEMENT_ENDURING_WANDERER },
  },
];

export const MOCK_ACHIEVEMENT_CATEGORIES = [
  { value: "All", isSelected: true, onPress: noop },
  { value: "Steps", isSelected: false, onPress: noop },
  { value: "Challenges", isSelected: false, onPress: noop },
];

export const MOCK_POTENTIAL_REWARDS = [
  { id: "pr-1", name: "Headspace", logo: { id: "pr-logo-1", uri: STORY_REWARD_METLIFE } },
  { id: "pr-2", name: "Peloton", logo: { id: "pr-logo-2", uri: STORY_REWARD_FIIT } },
  { id: "pr-3", name: "Calm", logo: { id: "pr-logo-3", uri: STORY_REWARD_BUPA_DENTAL } },
  { id: "pr-4", name: "Spotify", logo: { id: "pr-logo-4", uri: STORY_REWARD_YUNIVERSITY } },
  { id: "pr-5", name: "Amazon", logo: { id: "pr-logo-5", uri: STORY_REWARD_YUNIVERSITY } },
];
