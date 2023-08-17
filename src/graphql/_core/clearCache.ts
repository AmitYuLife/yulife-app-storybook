import gqlClient from "./client";
import { gqlCachePersistor } from "./persistor";

type Args = {
  shouldStop?: boolean;
};

export async function clearApolloCache({ shouldStop }: Args = {}) {
  const client = gqlClient();
  const persistor = gqlCachePersistor();

  if (shouldStop) {
    client.stop();
  }

  await Promise.all([client.clearStore(), persistor.purge()]);
}
