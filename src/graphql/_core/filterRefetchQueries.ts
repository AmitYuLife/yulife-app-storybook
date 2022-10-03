import getClient from "./client";

// Filter out queries that can't be refetched as they are not
// currently active, e.g query has not run yet, component unmounted.
// Useful if the state of the query to refetch is unknown.
// QueryManager.prototype.getObservableQueries used as a reference.
export const filterRefetchQueries = (queries: string[]) => {
  const client: any = getClient();

  const refetchable = new Map<string, boolean>();

  // Query manager is private and has no exported typings.
  client.queryManager.queries.forEach(({ observableQuery }: any) => {
    if (!observableQuery) {
      return;
    }

    if (observableQuery.options.fetchPolicy === "standby" || !observableQuery.hasObservers()) {
      return;
    }

    refetchable.set(observableQuery.queryName, true);
  });

  return queries.filter((queryName) => refetchable.has(queryName));
};
