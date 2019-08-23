import gql from "graphql-tag";
import client from "../_core/client";
import { AddDeviceToken, AddDeviceTokenVariables } from "../_core/schema";

export const addDeviceTokenGql = gql`
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
        mutation: addDeviceTokenGql,
        variables
    });

export default addDeviceTokenWithClient;
