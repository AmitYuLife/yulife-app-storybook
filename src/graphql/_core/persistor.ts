import { CachePersistor } from "apollo-cache-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { gqlInMemoryCache } from "./cache";

let persistor: CachePersistor<string>;

export const gqlCachePersistor = () => {
  if (!persistor) {
    persistor = new CachePersistor({
      cache: gqlInMemoryCache(),
      storage: AsyncStorage,
    });
  }

  return persistor;
};
