import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["yuScreen"];
const reducer = (state: IReduxState) => state.yuScreen;

const yuScreenSectionsSelector = (state: State) => state.sections;
export const getYuScreenSections = createSelector(reducer, yuScreenSectionsSelector);

const yuScreenLastLayoutUpdateSelector = (state: State) => state.lastLayoutUpdate;
export const getYuScreenLastLayoutUpdate = createSelector(reducer, yuScreenLastLayoutUpdateSelector);
