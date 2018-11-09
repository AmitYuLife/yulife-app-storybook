import moment from "moment";
import { IReduxState } from "../_core/reducers";

export interface IStreaks {
    currentStreak: number;
    displayStreak: boolean;
    isAvailable: boolean;
    isDoneToday: boolean;
    maxStreak: number;
    reward: string;
}

export const streaksSelector = ({ streaks }: IReduxState): IStreaks => ({
    currentStreak: streaks.streak,
    displayStreak: streaks.displayStreak,
    isAvailable: streaks.isAvailable,
    isDoneToday:
        moment()
            .add(1, "day")
            .startOf("day")
            .format("YYYY-MM-DDTHH:mm:ss") <= streaks.nextStreakAvailableAt,
    maxStreak: streaks.maxStreak,
    reward: `${streaks.value} ${streaks.type}`
});
export const streakAwardIdSelector = ({ streaks }: IReduxState) => streaks.streakAwardId;
