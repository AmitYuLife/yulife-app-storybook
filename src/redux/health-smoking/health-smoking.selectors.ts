import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["healthSmoking"];
const reducer = (state: IReduxState) => state.healthSmoking;

const getHealthSmokingStateSelector = (state: State) => state.smokingState;
export const getHealthSmokingState = createSelector(reducer, getHealthSmokingStateSelector);
