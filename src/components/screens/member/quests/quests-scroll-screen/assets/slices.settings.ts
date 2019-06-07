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
        navBarType: COLOURS.LIGHT,
        offset: 0,
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w1s2: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 3 + Style.SCALE_UP_AND_DOWN(50),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w1s3: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 7 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 30 : 55),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w1s4: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 11 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(15) : 0),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w1s5: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 14 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 60 : 120),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w1s6: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 18 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 60 : -10),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w1s7: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 22 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 80 : 10),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w1s8: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 25 + (isIphoneX() ? 0 : Style.SCALE_UP_AND_DOWN(30)),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w2s1: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 29,
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w2s2: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 32 + (isIphoneX() ? 0 : Style.SCALE_UP_AND_DOWN(60)),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w2s3: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 36 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(70) : 0),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w2s4: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 40 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 120 : 70),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w2s5: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 43 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? -30 : 30),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w2s6: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 47 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 130 : 60),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w2s7: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 51 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 135 : 90),
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    w2s8: {
        navBarType: COLOURS.DARK,
        offset: MAP_SLICE_HEIGHT * 54 - (isIphoneX() ? MAP_SLICE_HEIGHT : 0),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w3s1: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 58,
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s2: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 61 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 10 : 70),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s3: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 65 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 0 : 40),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s4: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 69 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(15) : 0),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s5: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 73 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 80 : 20),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w3s6: {
        navBarType: COLOURS.DESERT,
        offset: MAP_SLICE_HEIGHT * 76 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? -20 : 70),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w3s7: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 80 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(85) : 0),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w3s8: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 83 - (isIphoneX() ? MAP_SLICE_HEIGHT : 0),
        topBarType: TOP_BAR_TYPES.DESERT
    },
    w4s1: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 89 - (isIphoneX() ? Style.SCALE_UP_AND_DOWN(70) : 0),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s2: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 92 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 70 : Platform.OS === "ios" ? 100 : 125),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s3: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 96 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 105 : Platform.OS === "ios" ? 135 : 155),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s4: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 101 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 80 : Platform.OS === "ios" ? 50 : 30),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s5: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 105 - Style.SCALE_UP_AND_DOWN(isIphoneX() ? 180 : Platform.OS === "ios" ? 160 : 120),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s6: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 107 + Style.SCALE_UP_AND_DOWN(isIphoneX() ? 80 : Platform.OS === "ios" ? 150 : 180),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s7: {
        navBarType: COLOURS.BLUE,
        offset:
            MAP_SLICE_HEIGHT * 112 - (isIphoneX() ? -Style.SCALE_UP_AND_DOWN(30) : Platform.OS === "ios" ? -50 : -90),
        topBarType: TOP_BAR_TYPES.WHITE
    },
    w4s8: {
        navBarType: COLOURS.LIGHT,
        offset: MAP_SLICE_HEIGHT * 117,
        topBarType: TOP_BAR_TYPES.WHITE
    }
};
