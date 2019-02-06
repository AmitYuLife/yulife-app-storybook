import { padNum } from "@services/utils";
import { Style } from "../../../../../../../styles";
import { IChallenge } from "../../quests-screen";
import { IMapSlice } from "../slices";

interface IBubbleColours {
    [x: number]: {
        [x: number]: {
            available: string;
            notAvailable: string;
        };
    };
}

const worldBubbleColours: IBubbleColours = {
    0: {
        0: {
            available: "white",
            notAvailable: "rgb(112, 222, 206)"
        },
        1: {
            available: "white",
            notAvailable: "rgb(112, 222, 206)"
        },
        2: {
            available: "rgb(253, 233, 57)",
            notAvailable: "rgb(185, 225, 104)"
        },
        3: {
            available: "white",
            notAvailable: "rgb(185, 225, 104)"
        },
        4: {
            available: "white",
            notAvailable: "rgb(185, 225, 104)"
        },
        5: {
            available: "white",
            notAvailable: "rgb(112, 222, 206)"
        },
        6: {
            available: "white",
            notAvailable: "rgb(112, 222, 206)"
        },
        7: {
            available: "white",
            notAvailable: "rgb(131, 178, 71)"
        }
    },
    1: {
        0: {
            available: "white",
            notAvailable: "rgb(66, 120, 165)"
        },
        1: {
            available: "white",
            notAvailable: "rgb(66, 120, 165)"
        },
        2: {
            available: "rgb(253, 233, 57)",
            notAvailable: "rgb(66, 120, 165)"
        },
        3: {
            available: "white",
            notAvailable: "rgb(66, 120, 165)"
        },
        4: {
            available: "white",
            notAvailable: "rgb(66, 120, 165)"
        },
        5: {
            available: "white",
            notAvailable: "rgb(66, 120, 165)"
        },
        6: {
            available: "white",
            notAvailable: "rgb(66, 120, 165)"
        },
        7: {
            available: "white",
            notAvailable: "rgb(66, 120, 165)"
        }
    }
};

export function getBackgroundColor(nextAvailable: number, level: IChallenge): string {
    // time for more of that fucking awful logic

    if (level.level % 50 === 0) {
        return level.isDone || level.isActive ? "rgb(226, 1, 119)" : "white";
    } else if (level.isActive) {
        // current level colour is always the same
        return nextAvailable < 0 ? "rgb(145,0,76)" : "rgb(226, 1, 119)";
    } else {
        const world = Math.floor((level.level - 1) / 50);
        const episode = Math.floor(((level.level - 1) % 50) / 7);

        if (level.isDone) {
            return worldBubbleColours[world][episode].notAvailable;
        } else {
            return worldBubbleColours[world][episode].available;
        }
    }
}

export function getButtonPosition(slice: IMapSlice, index: number) {
    const record = slice.slots[index];

    return {
        bottom: record.bottom ? Style.SCALE_UP_AND_DOWN(record.bottom) : 0,
        left: Style.SCALE_UP_AND_DOWN(record.left)
    };
}

export const getTime = (nextAvailable: number) => {
    const hours = Math.floor(nextAvailable / (60 * 60)) % 24;
    const minutes = Math.floor(nextAvailable / 60) % 60;
    const seconds = nextAvailable % 60;
    if (hours < 1 && minutes < 1 && seconds < 1) {
        return null;
    }

    const paddedHours = padNum(hours);
    const paddedMinutes = padNum(minutes);
    const paddedSeconds = padNum(seconds);

    if (hours < 1 && minutes < 1) {
        return `:${paddedSeconds}`;
    } else if (hours < 1) {
        return `${paddedMinutes}:${paddedSeconds}`;
    } else {
        return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    }
};
