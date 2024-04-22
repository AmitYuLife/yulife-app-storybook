import { gql } from "@graphql/__generated";
import client from "@graphql/_core/client";

export const getYuScreen = () => {
  return client().query({
    fetchPolicy: "network-only",
    query: gql("GetYuScreenDocument"),
  });
};
