import { gql } from "@graphql/__generated";
import client from "../_core/client";

export default () =>
  client().query({
    query: gql("GetSessionDocument"),
    fetchPolicy: "network-only",
  });
