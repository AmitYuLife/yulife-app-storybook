import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default ({
  battlePass: _,
  ...state
}: PersistedState & IReduxState & { battlePass: unknown }): PersistedState & IReduxState => state;
