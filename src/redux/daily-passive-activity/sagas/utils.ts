import { Challenge as GqlChallenge } from "@graphql/__generated";
import { Challenge } from "@redux/_core/types";

export const toReduxChallenge = (challenge: GqlChallenge): Challenge => ({
  updatedAt: challenge?.updatedAt,
  incomingData: challenge?.incomingData,
  yuCoinAwarded: challenge?.yuCoinAwarded,
});
