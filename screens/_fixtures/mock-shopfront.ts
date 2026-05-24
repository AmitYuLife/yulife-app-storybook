import { GetMobileGameShopfrontQuery, GetMobileRewardsListQuery } from "@graphql/__generated/graphql";
import { SduiActionType } from "@graphql/__generated";
import {
  STORY_DONATION_MEAL,
  STORY_DONATION_OCEAN,
  STORY_DONATION_TREE,
  STORY_REWARD_BUPA_DENTAL,
  STORY_REWARD_FIIT,
  STORY_REWARD_METLIFE,
  STORY_WELLBEING_HUB_YU_MATTER,
  STORY_WELLBEING_PASS_BACKGROUND,
  STORY_YUCOIN_ICON,
} from "./story-assets";

export const MOCK_SHOPFRONT: GetMobileGameShopfrontQuery = {
  rewardPasses: {
    __typename: "MobileGameRewardPassList",
    activeRewardPasses: [
      {
        __typename: "MobileGameRewardPass",
        label: "YuLife Wellbeing Pass",
        primaryColor: "#E30D76",
        passIcon: { __typename: "RemoteImage", id: "pass-icon-1", uri: STORY_YUCOIN_ICON },
        backgroundImage: {
          __typename: "RemoteImage",
          id: "pass-bg-1",
          uri: STORY_WELLBEING_PASS_BACKGROUND,
        },
        foregroundImage: {
          __typename: "RemoteImage",
          id: "pass-fg-1",
          uri: STORY_WELLBEING_HUB_YU_MATTER,
        },
        onPress: {
          __typename: "SduiAction",
          type: SduiActionType.SduiActionNavigate,
          payload: JSON.stringify({ route: "yulife.member.BattlePass" }),
        },
        slots: [
          {
            __typename: "MobileGameRewardPassSlot",
            x: "0.25",
            y: "0.5",
            images: [{ __typename: "RemoteImage", id: "slot-img-1", uri: STORY_DONATION_TREE }],
          },
          {
            __typename: "MobileGameRewardPassSlot",
            x: "0.5",
            y: "0.5",
            images: [{ __typename: "RemoteImage", id: "slot-img-2", uri: STORY_DONATION_MEAL }],
          },
          {
            __typename: "MobileGameRewardPassSlot",
            x: "0.75",
            y: "0.5",
            images: [{ __typename: "RemoteImage", id: "slot-img-3", uri: STORY_DONATION_OCEAN }],
          },
        ],
      },
    ],
  },
  rewardList: {
    __typename: "MobileRewardsList",
    id: "reward-list-001",
    sduiStepId: "sdui-step-rewards",
    rewardStoreLocation: "UK",
    rewardStoreLocationLabel: "United Kingdom",
    hasUserSelectedStoreLocation: true,
    rewardStoreAccessRevokesAt: null,
    tags: ["Health & Fitness", "Food & Drink", "Entertainment", "Shopping"],
    list: [],
  },
  recentlyUsed: {
    __typename: "MobileRecentlyUsedRewardsList",
    recentlyUsedRewards: [
      {
        __typename: "MobileGameRecentlyUsedReward",
        id: "recent-1",
        sduiStepId: "sdui-step-recent-1",
        name: "Headspace",
        image: { __typename: "RemoteImage", id: "headspace-img", uri: STORY_REWARD_METLIFE },
      },
      {
        __typename: "MobileGameRecentlyUsedReward",
        id: "recent-2",
        sduiStepId: "sdui-step-recent-2",
        name: "Peloton",
        image: { __typename: "RemoteImage", id: "peloton-img", uri: STORY_REWARD_FIIT },
      },
      {
        __typename: "MobileGameRecentlyUsedReward",
        id: "recent-3",
        sduiStepId: "sdui-step-recent-3",
        name: "Calm",
        image: { __typename: "RemoteImage", id: "calm-img", uri: STORY_REWARD_BUPA_DENTAL },
      },
    ],
  },
};

export const MOCK_REWARD_ITEMS: GetMobileRewardsListQuery["data"]["list"] = [
  {
    __typename: "MobileRewardsListItem",
    id: "reward-item-1",
    isLocked: false,
    showLockedRewardOverlay: false,
    name: "Headspace Premium",
    description: "3 months of Headspace Premium — mindfulness and meditation.",
    imageUrl: { __typename: "RemoteImage", id: "headspace-full-img", uri: STORY_REWARD_METLIFE },
    pills: [
      { __typename: "MobileRewardsListItemPill", id: "pill-1", text: "Health", backgroundColor: "#E8F5E9" },
      { __typename: "MobileRewardsListItemPill", id: "pill-2", text: "Popular", backgroundColor: "#FFF3E0" },
    ],
    teaseDetails: null,
  },
  {
    __typename: "MobileRewardsListItem",
    id: "reward-item-2",
    isLocked: false,
    showLockedRewardOverlay: false,
    name: "Peloton Digital",
    description: "1 month of Peloton Digital — unlimited classes.",
    imageUrl: { __typename: "RemoteImage", id: "peloton-full-img", uri: STORY_REWARD_FIIT },
    pills: [{ __typename: "MobileRewardsListItemPill", id: "pill-3", text: "Fitness", backgroundColor: "#E3F2FD" }],
    teaseDetails: null,
  },
  {
    __typename: "MobileRewardsListItem",
    id: "reward-item-3",
    isLocked: true,
    showLockedRewardOverlay: true,
    name: "Mindfulness Retreat",
    description: "Weekend retreat experience — unlock at Level 50.",
    imageUrl: { __typename: "RemoteImage", id: "retreat-img", uri: STORY_WELLBEING_HUB_YU_MATTER },
    pills: [{ __typename: "MobileRewardsListItemPill", id: "pill-4", text: "Exclusive", backgroundColor: "#FCE4EC" }],
    teaseDetails: null,
  },
];

export const MOCK_SHOPFRONT_WITH_EXPIRY: GetMobileGameShopfrontQuery = {
  ...MOCK_SHOPFRONT,
  rewardList: {
    ...MOCK_SHOPFRONT.rewardList,
    rewardStoreAccessRevokesAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
};
