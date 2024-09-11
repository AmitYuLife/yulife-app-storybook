import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["game2048"];
const reducer = (state: IReduxState) => state.game2048;

const getGame2048HighScoreSelector = (state: State) => state.highScore;
export const getGame2048HighScore = createSelector(reducer, getGame2048HighScoreSelector);
