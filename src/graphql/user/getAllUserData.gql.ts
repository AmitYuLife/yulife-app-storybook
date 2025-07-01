import { DocumentNode, gql as gqlNoCodegen } from "@apollo/client";
import client from "@graphql/_core/client";
import { Platform } from "react-native";
import { AppDataType, IAppDataTypePayload } from "@redux/user/user.types";
import {
  UserCoinLedgerFragment,
  UserTodayActivitiesFragment,
  UserActiveStreakFragment,
  UserActiveChallengeFragment,
  DailyPensionContributionFragment,
  HintFragment,
  SocialGroupFragment,
  UserPassiveChallengesEarnRateFragment,
  UserCoinLedgerFragmentDoc,
  UserTodayActivitiesFragmentDoc,
  UserPassiveChallengesEarnRateFragmentDoc,
  UserActiveStreakFragmentDoc,
  UserActiveChallengeFragmentDoc,
  DailyPensionContributionFragmentDoc,
  HintFragmentDoc,
  SocialGroupFragmentDoc,
  UserFeatureFragmentDoc,
  UserFeatureFragment,
  UserConnectionsFragment,
  UserConnectionsFragmentDoc,
  IntercomHashMethod,
  UserDailyChallengeAmountAvailableFragment,
  UserDailyChallengeAmountAvailableFragmentDoc,
  MobileInventoryInfoFragment,
  MobileInventoryInfoFragmentDoc,
  UserChallengesDoneTodayFragment,
  UserChallengesDoneTodayFragmentDoc,
  UserProfileTodayScreenFragmentDoc,
  UserProfileTodayScreenFragment,
} from "@graphql/__generated";
import { DefinitionNode, FragmentDefinitionNode, Kind } from "graphql";
import Logger from "@services/logging/logger";

interface IUserDataQuery {
  type: AppDataType;
  fragment: DocumentNode;
  alias: string;
  query: string;
  fragmentName: string;
}

// TODO: check if we can use AppDataType for alias
// if alias is different getAllUserDataSaga() from getAllUserData.saga.ts will throw an error
export const DATA_QUERIES: IUserDataQuery[] = [
  {
    type: AppDataType.coinLedger,
    fragment: UserCoinLedgerFragmentDoc,
    alias: "coinLedger",
    query: "getUserCoinLedger",
    fragmentName: "UserCoinLedger",
  },
  {
    type: AppDataType.todayActivity,
    fragment: UserTodayActivitiesFragmentDoc,
    alias: "todayActivity",
    query: "getUserTodayActivities",
    fragmentName: "UserTodayActivities",
  },
  {
    type: AppDataType.passiveChallengesEarnRate,
    fragment: UserPassiveChallengesEarnRateFragmentDoc,
    alias: "passiveChallengesEarnRate",
    query: "getUserPassiveChallengesEarnRate",
    fragmentName: "UserPassiveChallengesEarnRate",
  },
  {
    type: AppDataType.activeStreak,
    fragment: UserActiveStreakFragmentDoc,
    alias: "activeStreak",
    query: "getUserActiveStreak",
    fragmentName: "UserActiveStreak",
  },
  {
    type: AppDataType.activeChallenge,
    fragment: UserActiveChallengeFragmentDoc,
    alias: "activeChallenge",
    query: "getUserActiveChallenge",
    fragmentName: "UserActiveChallenge",
  },
  {
    type: AppDataType.dailyPension,
    fragment: DailyPensionContributionFragmentDoc,
    alias: "dailyPension",
    query: "getDailyPensionContribution",
    fragmentName: "DailyPensionContribution",
  },
  {
    type: AppDataType.hints,
    fragment: HintFragmentDoc,
    alias: "hints",
    query: "getMobileHints",
    fragmentName: "Hint",
  },
  {
    type: AppDataType.socialGroups,
    fragment: SocialGroupFragmentDoc,
    alias: "socialGroups",
    query: "getMobileSocialGroupLeaderboards",
    fragmentName: "SocialGroup",
  },
  {
    type: AppDataType.features,
    fragment: UserFeatureFragmentDoc,
    alias: "features",
    query: "getUserFeatures",
    fragmentName: "UserFeature",
  },
  {
    type: AppDataType.connections,
    fragment: UserConnectionsFragmentDoc,
    alias: "connections",
    query: "getUserConnections",
    fragmentName: "UserConnections",
  },
  {
    type: AppDataType.dailyChallengeAmountAvailable,
    fragment: UserDailyChallengeAmountAvailableFragmentDoc,
    alias: "dailyChallengeAmountAvailable",
    query: "getUserDailyChallengeAmountAvailable",
    fragmentName: "UserDailyChallengeAmountAvailable",
  },
  {
    type: AppDataType.inventoryInfo,
    fragment: MobileInventoryInfoFragmentDoc,
    alias: "inventoryInfo",
    query: "getMobileInventoryInfo",
    fragmentName: "MobileInventoryInfo",
  },
  {
    type: AppDataType.challengesDoneToday,
    fragment: UserChallengesDoneTodayFragmentDoc,
    alias: "challengesDoneToday",
    query: "getUserChallengesDoneToday",
    fragmentName: "UserChallengesDoneToday",
  },
  {
    type: AppDataType.todayScreen,
    fragment: UserProfileTodayScreenFragmentDoc,
    alias: "todayScreen",
    query: "getUserTodayScreen",
    fragmentName: "UserTodayScreen",
  },
];

export const generateQueryName = (types: AppDataType[]) => {
  if (types.length === Object.values(AppDataType).length) {
    return `GetAllUserData`;
  }

  const queryNames = [...types].sort().map((type) => type.charAt(0).toUpperCase() + type.slice(1));
  return `Get${queryNames.join("")}`;
};

export const generateQuery = (types: AppDataType[], overrideQueryName?: string): DocumentNode => {
  const queries = DATA_QUERIES.filter(({ type }) => types.includes(type));
  const queryName = overrideQueryName || generateQueryName(types);

  const document = gqlNoCodegen`
    query ${queryName} {
      ${queries.map(({ alias, fragmentName, query }) => `${alias}: ${query} { ...${fragmentName}}`).join("\n")}
    }
  `;

  const definitions: DefinitionNode[] = [];

  for (const { fragment } of queries) {
    for (const definition of fragment.definitions) {
      if (!isFragmentDefinitionNode(definition)) {
        Logger.error(new Error("Definition node is not a fragment definition node"), {
          definition: JSON.stringify(definition),
        });
        continue;
      }

      const existingDefinition = definitions.find((d: DefinitionNode) => {
        if (isFragmentDefinitionNode(d)) {
          return d.name.value === definition.name.value;
        }

        return false;
      });

      if (existingDefinition) {
        continue;
      }

      definitions.push(definition);
    }
  }

  definitions.push(...document.definitions);

  return { ...document, definitions };
};

function isFragmentDefinitionNode(node: DefinitionNode): node is FragmentDefinitionNode {
  return node.kind === Kind.FRAGMENT_DEFINITION;
}

export interface GetAllUserDataResponse {
  [AppDataType.coinLedger]: UserCoinLedgerFragment;
  [AppDataType.todayActivity]: UserTodayActivitiesFragment;
  [AppDataType.passiveChallengesEarnRate]: UserPassiveChallengesEarnRateFragment;
  [AppDataType.activeStreak]: UserActiveStreakFragment;
  [AppDataType.activeChallenge]: UserActiveChallengeFragment;
  [AppDataType.dailyPension]: DailyPensionContributionFragment;
  [AppDataType.hints]: HintFragment[];
  [AppDataType.socialGroups]: SocialGroupFragment[];
  [AppDataType.features]: UserFeatureFragment[];
  [AppDataType.connections]: UserConnectionsFragment[];
  [AppDataType.dailyChallengeAmountAvailable]: UserDailyChallengeAmountAvailableFragment;
  [AppDataType.inventoryInfo]: MobileInventoryInfoFragment;
  [AppDataType.challengesDoneToday]: UserChallengesDoneTodayFragment;
  [AppDataType.todayScreen]: UserProfileTodayScreenFragment;
}

export default function getAllUserData({ types, overrideQueryName }: IAppDataTypePayload) {
  const query = generateQuery(types, overrideQueryName);

  return client().query<GetAllUserDataResponse>({
    fetchPolicy: "network-only",
    query: query,
    variables: {
      intercomHashMethod: Platform.OS as IntercomHashMethod,
    },
  });
}
