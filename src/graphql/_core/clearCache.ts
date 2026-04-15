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

  // Use allSettled so that an in-flight query being rejected by clearStore() (or any persistor
  // failure) does not abort the cleanup — both branches need to run independently, and downstream
  // logout work (e.g. clearing the auth token) must not be blocked by either failing.
  await Promise.allSettled([client.clearStore(), persistor.purge()]);
}
