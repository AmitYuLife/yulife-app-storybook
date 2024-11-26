import { gql } from "@graphql/__generated";
import { filterRefetchQueries } from "./filterRefetchQueries";

export const mapRefetchQueries = (refetchQueries: string[]) => {
  const { queriesMappedToGql, queries } = refetchQueries.reduce(
    (acc, query) => {
      const gqlObject = queryToGqlMap.get(query);

      if (gqlObject) {
        acc.queriesMappedToGql.push(gqlObject);
      } else {
        acc.queries.push(query);
      }

      return acc;
    },
    { queriesMappedToGql: [], queries: [] }
  );

  return [...queriesMappedToGql, ...filterRefetchQueries(queries)];
};

const queryToGqlMap = new Map([["GetTodayEarnings", { query: gql("GetTodayEarningsDocument") }]]);
