import moment from "moment";
import { IReduxState } from "../_core/reducers";

export interface IStreaks {
    currentStreak: number;
    displayStreak: boolean;
    isDoneToday: boolean;
    maxStreak: number;
    reward: string;
}

export const streaksSelector = ({ streaks }: IReduxState): IStreaks => ({
    currentStreak: streaks.streak,
    displayStreak: streaks.isAvailable && streaks.streak > 0,
    isDoneToday:
        moment()
            .add(1, "day")
            .startOf("day")
            .format()
            .slice(0, -6) === streaks.nextStreakAvailableAt,
    maxStreak: streaks.maxStreak,
    reward: `${streaks.value} ${streaks.type}`
});
