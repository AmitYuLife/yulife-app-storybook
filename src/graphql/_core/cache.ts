import { defaultDataIdFromObject, InMemoryCache, TypePolicies } from "@apollo/client";

const defaultYuLifeIdFromObject = (object: any) => `${object.__typename}-${object.id}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataIdFromObject = (object: any) => {
  switch (object.__typename) {
    case "APIConfigLeanplum":
      return `${object.__typename}-${object.appId}`;
    case "Level":
    case "Duel":
    case "LevelSlot":
    case "LevelSlotMilestone":
    case "User":
      return defaultYuLifeIdFromObject(object);
    case "DuelOpponent":
      return `${object.__typename}-${object.duelId}-${object.userId}-${object.score}`;
    case "DuelSearchResult":
      return `${object.__typename}-${object.customerId}`;
    case "MilestoneTarget":
      return `${object.__typename}-${object.steps}-${object.meditation}-${object.distance}`;
    case "Reward":
      return `${object.__typename}-${object.code}`;
    case "RewardUiSettings":
      return `${object.__typename}-${object.id}-${object.logoWidth}-${object.logoHeight}`;
    case "RedeemSteps":
      return `${object.__typename}-${object.id || object.info}`;
    case "Denomination":
      return `${object.__typename}-${object.yuCoin}-${object.value}`;
    case "LeaderboardItem":
      return `${object.__typename}-${object.id}-${object.avatar?.id}`;
    case "AvatarPart":
      return `${object.__typename}-${object.partId}-${object.order}`;
    case "AvatarColor":
      return `${object.__typename}-${object.colorSchemeId}-${object.displayOrder}`;
    case "YuliferProduct":
      return `${object.__typename}-${object.productId}-${object.active}`;
    case "SduiStyle":
      return `${object.__typename}-${object.property}-${object.value}`;
    default:
      return defaultDataIdFromObject(object);
  }
};

const incomingMergeStrategy = (_existing: never, incoming: never) => incoming;

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      getUserProfileEvents: {
        merge: incomingMergeStrategy,
      },
      getMobileHeroCards: {
        merge: incomingMergeStrategy,
      },
    },
  },
  QuestMapLevelListItem: {
    fields: {
      goals: {
        merge: incomingMergeStrategy,
      },
    },
  },
  MobileGameBattlePassChestDetails: {
    fields: {
      possibleRewards: {
        merge: incomingMergeStrategy,
      },
      redeemedRewards: {
        merge: incomingMergeStrategy,
      },
      openedRewards: {
        merge: incomingMergeStrategy,
      },
    },
  },
  MobileBattlePassDonationTemplate: {
    fields: {
      leaderboards: {
        merge: incomingMergeStrategy,
      },
    },
  },
};

let cache: InMemoryCache;

export const gqlInMemoryCache = () => {
  if (!cache) {
    cache = new InMemoryCache({
      dataIdFromObject,
      typePolicies,
    });
  }

  return cache;
};
