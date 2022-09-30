import { gql } from "@apollo/client";
import client from "../_core/client";
import { AddDeviceToken, AddDeviceTokenVariables } from "../_core/schema";

export const GQL_MUTATION_ADD_DEVICE_TOKEN = gql`
  mutation AddDeviceToken($deviceToken: String!, $os: OS!, $deviceId: String!, $subscribed: Boolean!) {
    addDeviceToken(deviceToken: $deviceToken, os: $os, deviceId: $deviceId, subscribed: $subscribed) {
      userId
      deviceToken
      deviceId
      subscribed
      os
    }
  }
`;

const addDeviceTokenWithClient = (variables: AddDeviceTokenVariables) =>
  client().mutate<AddDeviceToken, AddDeviceTokenVariables>({
    mutation: GQL_MUTATION_ADD_DEVICE_TOKEN,
    variables,
  });

export default addDeviceTokenWithClient;
