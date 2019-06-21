import { COLOURS, IColours } from "@molecules/nav-bar/nav-bar";
import { TOP_BAR_TYPES, TopBarTypes } from "@molecules/top-bar/top-bar";
import { Style } from "@styles/index";
import { Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

export interface IEpisodeSettings {
    navBarType: IColours;
    offset: number;
    topBarType: TopBarTypes;
}

export const MAP_SLICE_HEIGHT = Style.SCALE_UP_AND_DOWN(180);
export const HALF_MAP_SLICE_HEIGHT = MAP_SLICE_HEIGHT / 2;

export const episodeSettings = {
    w1s1: {
        navBarType: COLOURS.FOREST,
        offset: 0,
        topBarType: TOP_BAR_TYPES.FOREST
    },
    w1s2: {
        navBarType: COLOURS.FOREST,
        offset: MAP_SLICE_HEIGHT * 3 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 30 : 70),
        topBarType: TOP_BAR_TYPES.FOREST
    },
    w1s3: {
        navBarType: COLOURS.FOREST,
        offset: MAP_SLICE_HEIGHT * 7 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 30 : 75),
        topBarType: TOP_BAR_TYPES.FOREST
    },
    w1s4: {
        navBarType: COLOURS.FOREST,
        offset: MAP_SLICE_HEIGHT * 11 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 15 : -15),
        topBarType: TOP_BAR_TYPES.FOREST
    },
    w1s5: {
        navBarType: COLOURS.FOREST,
        offset: MAP_SLICE_HEIGHT * 15 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 30 : 100),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w1s6: {
        navBarType: COLOURS.FOREST,
        offset: MAP_SLICE_HEIGHT * 19 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 110 : 20),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w1s7: {
        navBarType: COLOURS.FOREST,
        offset: MAP_SLICE_HEIGHT * 23 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 80 : 120),
        topBarType: TOP_BAR_TYPES.FOREST
    },
    w1s8: {
        navBarType: COLOURS.FOREST,
        offset: MAP_SLICE_HEIGHT * 26 + (isIphoneX() ? 0 : Style.SCALE_UP_AND_DOWN(30)),
        topBarType: TOP_BAR_TYPES.FOREST
    },
    w2s1: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 32,
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w2s2: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 35 + (isIphoneX() ? 0 : Style.SCALE_UP_AND_DOWN(60)),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w2s3: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 39 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(70) : 0),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w2s4: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 43 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 120 : 70),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w2s5: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 46 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? -30 : 30),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w2s6: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 50 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 130 : 60),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w2s7: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 54 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 135 : 90),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w2s8: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 57 - (isIphoneX() ? MAP_SLICE_HEIGHT : 0),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w3s1: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 63,
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s2: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 66 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 10 : 70),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s3: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 70 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 0 : 40),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s4: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 74 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(15) : 0),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s5: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 78 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 80 : 20),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s6: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 81 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? -20 : 70),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w3s7: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 85 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(85) : 0),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w3s8: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 88 - (isIphoneX() ? MAP_SLICE_HEIGHT : 0),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w4s1: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 94 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(70) : 0),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s2: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 97 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 70 : Platform.OS === "ios" ? 100 : 125),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s3: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 101 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 105 : Platform.OS === "ios" ? 135 : 155),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s4: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 106 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 80 : Platform.OS === "ios" ? 50 : 30),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s5: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 110 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 180 : Platform.OS === "ios" ? 160 : 120),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s6: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 112 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 80 : Platform.OS === "ios" ? 150 : 180),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s7: {
        navBarType: COLOURS.BLUE,
        offset:
            MAP_SLICE_HEIGHT * 117 - (isIphoneX() ? -Style.SCALE_UP_AND_DOWN(30) : Platform.OS === "ios" ? -50 : -90),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s8: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 122,
        topBarType: TOP_BAR_TYPES.WHITE
    }
};
