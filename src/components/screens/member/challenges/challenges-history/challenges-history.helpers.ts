import { Style } from "@styles/index";
import { ImageStyle } from "react-native";

interface ISlotSet {
    source: any;
    style: ImageStyle;
    width: number;
}

const BRISK_WALK: ISlotSet[] = [
    {
        source: require("../../../../../../assets/challenge-history/squirrel.png"),
        style: { position: "absolute", left: Style.SCALE_UP_AND_DOWN(-16), top: 0, right: 0, bottom: 0 },
        width: Style.SCALE_UP_AND_DOWN(106)
    },
    {
        source: require("../../../../../../assets/challenge-history/otter.png"),
        style: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 },
        width: Style.SCALE_UP_AND_DOWN(106)
    },
    {
        source: require("../../../../../../assets/challenge-history/meerkat.png"),
        style: { position: "absolute", left: Style.SCALE_UP_AND_DOWN(8), top: 0, right: 0, bottom: 0 },
        width: Style.SCALE_UP_AND_DOWN(60)
    }
];
const SHORT_STROLL: ISlotSet[] = [
    {
        source: require("../../../../../../assets/challenge-history/elephant.png"),
        style: {
            bottom: 0,
            position: "absolute",
            right: Style.SCALE_UP_AND_DOWN(-36),
            top: Style.SCALE_Y_UP_AND_DOWN(60)
        },
        width: Style.SCALE_UP_AND_DOWN(130)
    },
    {
        source: require("../../../../../../assets/challenge-history/tortoise.png"),
        style: {
            bottom: 0,
            position: "absolute",
            right: 0,
            top: Style.SCALE_Y_UP_AND_DOWN(60)
        },
        width: Style.SCALE_UP_AND_DOWN(90)
    },
    {
        source: require("../../../../../../assets/challenge-history/bighornSheep.png"),
        style: {
            bottom: 0,
            position: "absolute",
            right: Style.SCALE_UP_AND_DOWN(10),
            top: Style.SCALE_Y_UP_AND_DOWN(72)
        },
        width: Style.SCALE_UP_AND_DOWN(90)
    }
];
const LONG_WALK: ISlotSet[] = [
    {
        source: require("../../../../../../assets/challenge-history/ostrich.png"),
        style: { position: "absolute", left: 0, top: Style.SCALE_Y_UP_AND_DOWN(140), right: 0, bottom: 0 },
        width: Style.SCALE_UP_AND_DOWN(92)
    },
    {
        source: require("../../../../../../assets/challenge-history/whale.png"),
        style: { position: "absolute", left: 0, top: Style.SCALE_Y_UP_AND_DOWN(140), right: 0, bottom: 0 },
        width: Style.SCALE_UP_AND_DOWN(92)
    },
    {
        source: require("../../../../../../assets/challenge-history/desertFox.png"),
        style: { position: "absolute", left: 0, top: Style.SCALE_Y_UP_AND_DOWN(152), right: 0, bottom: 0 },
        width: Style.SCALE_UP_AND_DOWN(82)
    }
];
const MEDITATION: ISlotSet[] = [
    {
        source: require("../../../../../../assets/challenge-history/bird.png"),
        style: {
            bottom: 0,
            position: "absolute",
            right: Style.SCALE_UP_AND_DOWN(-24),
            top: Style.SCALE_Y_UP_AND_DOWN(220)
        },
        width: Style.SCALE_UP_AND_DOWN(92)
    },
    {
        source: require("../../../../../../assets/challenge-history/dolphin.png"),
        style: {
            bottom: 0,
            position: "absolute",
            right: 0,
            top: Style.SCALE_Y_UP_AND_DOWN(220)
        },
        width: Style.SCALE_UP_AND_DOWN(92)
    },
    {
        source: require("../../../../../../assets/challenge-history/camel.png"),
        style: {
            bottom: 0,
            position: "absolute",
            right: 0,
            top: Style.SCALE_Y_UP_AND_DOWN(212)
        },
        width: Style.SCALE_UP_AND_DOWN(100)
    }
];

export function getSlotImageProps(challengeType: string, currentWorld: number) {
    switch (challengeType) {
        case "brisk walk":
            return BRISK_WALK[currentWorld] || BRISK_WALK[0];
        case "short stroll":
            return SHORT_STROLL[currentWorld] || SHORT_STROLL[0];
        case "long walk":
            return LONG_WALK[currentWorld] || LONG_WALK[0];
        case "meditation":
            return MEDITATION[currentWorld] || MEDITATION[0];
        default:
            return { source: null, style: null, width: 0 };
    }
}
