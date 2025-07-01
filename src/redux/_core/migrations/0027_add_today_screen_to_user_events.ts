import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  user: {
    ...state.user,
    todayScreen: {
      ...state.user?.todayScreen,
      button: {
        ...state.user?.todayScreen?.button,
        id: "",
        label: "",
      },
    },
  },
});
