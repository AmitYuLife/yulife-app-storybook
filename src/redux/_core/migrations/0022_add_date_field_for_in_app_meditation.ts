import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";
import moment from "moment";
import { DATE_FORMAT } from "@utils";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  dailyMeditation: {
    ...state.dailyMeditation,
    inAppMeditation: {
      ...state.dailyMeditation.inAppMeditation,
      date: state.dailyMeditation.inAppMeditation?.createdAt
        ? moment.unix(state.dailyMeditation.inAppMeditation.createdAt).format(DATE_FORMAT)
        : null,
    },
  },
});
