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
  UserFragment,
  UserFragmentDoc,
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

/** converts the AppDataType to a short query name (q = query, making it easier to search for in the codebase) */
const NAMING_MAP: Record<AppDataType, string> = {
  [AppDataType.coinLedger]: "qCL",
  [AppDataType.todayActivity]: "qTA",
  [AppDataType.passiveChallengesEarnRate]: "qPCER",
  [AppDataType.activeStreak]: "qAS",
  [AppDataType.activeChallenge]: "qAC",
  [AppDataType.dailyPension]: "qDP",
  [AppDataType.hints]: "qH",
  [AppDataType.socialGroups]: "qSG",
  [AppDataType.features]: "qF",
  [AppDataType.connections]: "qC",
  [AppDataType.dailyChallengeAmountAvailable]: "qDCAA",
  [AppDataType.inventoryInfo]: "qII",
  [AppDataType.challengesDoneToday]: "qCDT",
  [AppDataType.todayScreen]: "qTS",
  [AppDataType.currentUser]: "qCU",
};

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
    fragmentName: "UserProfileTodayScreen",
  },
  {
    type: AppDataType.currentUser,
    fragment: UserFragmentDoc,
    alias: "currentUser",
    query: "getCurrentUser",
    fragmentName: "User",
  },
];

export const generateQueryName = (types: AppDataType[]) => {
  if (types.length === Object.values(AppDataType).length) {
    return `GetAllUserData`;
  }

  const queryNames = [...types].sort().map((type) => NAMING_MAP[type]);
  return `Get${queryNames.join("")}`;
};

export const generateQuery = (
  types: AppDataType[],
  overrideQueryName?: string,
  includeIntercomHash = false
): DocumentNode => {
  if (includeIntercomHash && !types.includes(AppDataType.currentUser)) {
    throw new Error("includeIntercomHash requires AppDataType.currentUser in the types array");
  }

  const queries = DATA_QUERIES.filter(({ type }) => types.includes(type));
  const queryName = overrideQueryName || generateQueryName(types);
  const needsIntercomHash = includeIntercomHash && types.includes(AppDataType.currentUser);
  const queryVariables = needsIntercomHash ? " ($intercomHashMethod: IntercomHashMethod!)" : "";
  const extraFields = needsIntercomHash ? "intercomHash: getIntercomHash(method: $intercomHashMethod)" : "";

  const document = gqlNoCodegen`
    query ${queryName}${queryVariables} {
      ${queries.map(({ alias, fragmentName, query }) => `${alias}: ${query} { ...${fragmentName}}`).join("\n")}
      ${extraFields}
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
  [AppDataType.currentUser]: UserFragment | null;
  intercomHash?: string;
}

export default function getAllUserData({ types, overrideQueryName, refreshLoggerIdentity }: IAppDataTypePayload) {
  const query = generateQuery(types, overrideQueryName, refreshLoggerIdentity);

  return client().query<GetAllUserDataResponse>({
    fetchPolicy: "network-only",
    query: query,
    variables: {
      intercomHashMethod: Platform.OS as IntercomHashMethod,
    },
  });
}
