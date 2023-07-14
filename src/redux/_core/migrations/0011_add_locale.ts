import { PersistedState } from "redux-persist";
import { findBestAvailableLanguage } from "@locale";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => {
  const locale = findBestAvailableLanguage();

  return {
    ...state,
    device: {
      ...state.device,
      locale,
      currentDeviceLocale: locale,
    },
  };
};
