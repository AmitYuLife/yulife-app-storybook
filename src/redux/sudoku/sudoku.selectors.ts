import { IReduxState } from "../_core/reducers";

export const getSudokuState = (state: IReduxState) => state.sudoku;
export const getSudokuChallengeIdState = (state: IReduxState) => state.sudoku.challengeId;
