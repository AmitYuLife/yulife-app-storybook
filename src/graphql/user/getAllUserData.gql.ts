import { DocumentNode, gql as gqlNoCodegen } from "@apollo/client";
import { IntercomHashMethod } from "@graphql/_core/schema/globalTypes";
import client from "../_core/client";
import { Platform } from "react-native";
import { GQL_FRAGMENT_USER_COIN_LEDGER } from "@graphql/_fragments/userCoinLedger.gql";
import { GQL_FRAGMENT_USER_TODAY_ACTIVITY } from "@graphql/_fragments/userTodayActivity.gql";
import { GQL_FRAGMENT_USER_LEADERBOARDS } from "@graphql/_fragments/userLeaderboards.gql";
import { GQL_FRAGMENT_USER_ACTIVE_CHALLENGE } from "@graphql/_fragments/userActiveChallenge.gql";
import { GQL_FRAGMENT_USER_PASSIVE_CHALLENGES_EARN_RATE } from "./getUserPassiveChallengesEarnRate.gql";
import { AppDataType } from "@redux/user/user.actions";
import {
  GetDailyPensionContribution_getDailyPensionContribution,
  GetMobileHints_getMobileHints,
  GetUserActiveChallenge_getUserActiveChallenge,
  GetUserActiveStreak_getUserActiveStreak,
  GetUserCoinLedger_coinLedger,
  GetUserLeaderboards_getUserLeaderboards,
  GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate,
  GetUserTodayActivity_todayActivity,
} from "@graphql/_core/schema";
import { GQL_FRAGMENT_USER_ACTIVE_STREAK } from "@graphql/_fragments/userActiveStreak.gql";
import { GQL_FRAGMENT_DAILY_PENSION_CONTRIBUTION } from "@graphql/_fragments/dailyPensionContribution.gql";
import { GQL_FRAGMENT_HINT } from "@graphql/_fragments/hint.gql";

interface IUserDataQuery {
  type: AppDataType;
  fragment: DocumentNode;
  alias: string;
  query: string;
  fragmentName: string;
}

export const DATA_QUERIES: IUserDataQuery[] = [
  {
    type: AppDataType.coinLedger,
    fragment: GQL_FRAGMENT_USER_COIN_LEDGER,
    alias: "coinLedger",
    query: "getUserCoinLedger",
    fragmentName: "UserCoinLedger",
  },
  {
    type: AppDataType.todayActivity,
    fragment: GQL_FRAGMENT_USER_TODAY_ACTIVITY,
    alias: "todayActivity",
    query: "getUserTodayActivity",
    fragmentName: "UserTodayActivity",
  },
  {
    type: AppDataType.leaderboards,
    fragment: GQL_FRAGMENT_USER_LEADERBOARDS,
    alias: "leaderboards",
    query: "getUserLeaderboards",
    fragmentName: "Leaderboard",
  },
  {
    type: AppDataType.passiveChallengesEarnRate,
    fragment: GQL_FRAGMENT_USER_PASSIVE_CHALLENGES_EARN_RATE,
    alias: "passiveChallengesEarnRate",
    query: "getUserPassiveChallengesEarnRate",
    fragmentName: "UserPassiveChallengesEarnRate",
  },
  {
    type: AppDataType.activeStreak,
    fragment: GQL_FRAGMENT_USER_ACTIVE_STREAK,
    alias: "activeStreak",
    query: "getUserActiveStreak",
    fragmentName: "UserActiveStreak",
  },
  {
    type: AppDataType.activeChallenge,
    fragment: GQL_FRAGMENT_USER_ACTIVE_CHALLENGE,
    alias: "activeChallenge",
    query: "getUserActiveChallenge",
    fragmentName: "UserActiveChallenge",
  },
  {
    type: AppDataType.dailyPension,
    fragment: GQL_FRAGMENT_DAILY_PENSION_CONTRIBUTION,
    alias: "dailyPension",
    query: "getDailyPensionContribution",
    fragmentName: "DailyPensionContribution",
  },
  {
    type: AppDataType.hints,
    fragment: GQL_FRAGMENT_HINT,
    alias: "hints",
    query: "getMobileHints",
    fragmentName: "Hint",
  },
];

export const generateQuery = (types: AppDataType[]) => {
  const queries = DATA_QUERIES.filter(({ type }) => types.includes(type));

  return gqlNoCodegen`
    ${queries.map(({ fragment }) => fragment.loc.source.body).join("\n")}

    query GetAllUserData {
      ${queries.map(({ alias, fragmentName, query }) => `${alias}: ${query} { ...${fragmentName}}`).join("\n")}
    }`;
};

export interface GetAllUserDataResponse {
  [AppDataType.coinLedger]: GetUserCoinLedger_coinLedger;
  [AppDataType.todayActivity]: GetUserTodayActivity_todayActivity;
  [AppDataType.leaderboards]: GetUserLeaderboards_getUserLeaderboards[];
  [AppDataType.passiveChallengesEarnRate]: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate;
  [AppDataType.activeStreak]: GetUserActiveStreak_getUserActiveStreak;
  [AppDataType.activeChallenge]: GetUserActiveChallenge_getUserActiveChallenge;
  [AppDataType.dailyPension]: GetDailyPensionContribution_getDailyPensionContribution;
  [AppDataType.hints]: GetMobileHints_getMobileHints[];
}

export default function getAllUserData(types: AppDataType[]) {
  const query = generateQuery(types);

  return client().query<GetAllUserDataResponse>({
    fetchPolicy: "network-only",
    query: query,
    variables: {
      intercomHashMethod: Platform.OS as IntercomHashMethod,
    },
  });
}
