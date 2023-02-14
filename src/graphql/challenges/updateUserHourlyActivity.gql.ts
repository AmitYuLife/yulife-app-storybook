import { gql, MutationTuple } from "@apollo/client";
import { ChallengesPayload } from "@graphql/_core/schema/globalTypes";
import client from "../_core/client";
import { UpdateUserHourlyActivity, UpdateUserHourlyActivityVariables } from "../_core/schema";

export const GQL_MUTATION_UPDATE_USER_HOURLY_ACTIVITY = gql`
  mutation UpdateUserHourlyActivity($payload: [ChallengesPayload!]!) {
    updateUserHourlyActivity(payload: $payload)
  }
`;

export type UpdateUserHourlyActivityMutationTuple = MutationTuple<
  UpdateUserHourlyActivity,
  UpdateUserHourlyActivityVariables
>;

const updateUserHourlyActivity = (payload: ChallengesPayload[]) =>
  client().mutate<UpdateUserHourlyActivity, UpdateUserHourlyActivityVariables>({
    mutation: GQL_MUTATION_UPDATE_USER_HOURLY_ACTIVITY,
    variables: { payload },
    errorPolicy: "ignore",
  });

export default updateUserHourlyActivity;
