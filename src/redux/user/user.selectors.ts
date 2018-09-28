import { IReduxState } from "../_core/reducers";

export interface IStreak {
    nextStreakAvailableAt: string;
    streak: number;
}

export const userConsentSelector = (state: IReduxState) => state.user.consent;
export const userStreakSelector = ({ user: { nextStreakAvailableAt, streak } }: IReduxState) => ({
    nextStreakAvailableAt,
    streak
});
