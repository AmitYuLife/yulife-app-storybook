import { TopBarTypes } from "@molecules/top-bar/top-bar";
import { Style } from "@styles/index";
import { COLOURS, IColours } from "../../../../../molecules/nav-bar/nav-bar";

interface IMapSliceSlot {
    bottom?: number;
    index: number; // level - 1
    left: number;
    top?: number;
}

export interface IMapSlice {
    id: string;
    image: any;
    slots: IMapSliceSlot[];
    navBarColour: IColours;
    offset: number;
    topBarType: TopBarTypes;
}

export const MAP_SLICE_HEIGHT = Style.SCALE_UP_AND_DOWN(180);

const offsets = {
    w1s1: 0,
    w1s2: MAP_SLICE_HEIGHT * 4 - MAP_SLICE_HEIGHT / 2,
    w1s3: MAP_SLICE_HEIGHT * 8 - MAP_SLICE_HEIGHT / 2,
    w1s4: MAP_SLICE_HEIGHT * 11,
    w1s5: MAP_SLICE_HEIGHT * 15,
    w1s6: MAP_SLICE_HEIGHT * 18,
    w1s7: MAP_SLICE_HEIGHT * 22,
    w1s8: MAP_SLICE_HEIGHT * 25,
    w2s1: 0, // currentScrollIndex will default to 2nd world. No need to set.
    w2s2: MAP_SLICE_HEIGHT * 33 - 30,
    w2s3: MAP_SLICE_HEIGHT * 36,
    w2s4: MAP_SLICE_HEIGHT * 40 - MAP_SLICE_HEIGHT / 2,
    w2s5: MAP_SLICE_HEIGHT * 43 + 30,
    w2s6: MAP_SLICE_HEIGHT * 47 - 20,
    w2s7: MAP_SLICE_HEIGHT * 51 - MAP_SLICE_HEIGHT / 2,
    w2s8: MAP_SLICE_HEIGHT * 53,
    w3s1: 0, // currentScrollIndex will default to 2nd world. No need to set.
    w3s2: MAP_SLICE_HEIGHT * 62 - MAP_SLICE_HEIGHT / 2,
    w3s3: MAP_SLICE_HEIGHT * 65 + 40,
    w3s4: MAP_SLICE_HEIGHT * 69,
    w3s5: MAP_SLICE_HEIGHT * 73,
    w3s6: MAP_SLICE_HEIGHT * 77 - MAP_SLICE_HEIGHT / 2,
    w3s7: MAP_SLICE_HEIGHT * 80,
    w3s8: MAP_SLICE_HEIGHT * 84
};

const WorldSlices: IMapSlice[] = [
    /**
     *  FOREST WORLD
     *  first episode
     */
    {
        id: "MAP_SLICE_W01E00",
        image: require("../../../../../../../assets/quest-slices/w1s0.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w1s1,
        slots: [{ index: 0, left: 187, top: 8 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E01",
        image: require("../../../../../../../assets/quest-slices/w1s1.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w1s1,
        slots: [
            { bottom: 36, index: 1, left: 96 },
            { bottom: 36, index: 2, left: 187 },
            { bottom: 36, index: 3, left: 286 },
            { index: 4, left: 187, top: 8 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E02",
        image: require("../../../../../../../assets/quest-slices/w1s2.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s1,
        slots: [{ bottom: 36, index: 5, left: 187 }, { index: 6, left: 187, top: 8 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E03",
        image: require("../../../../../../../assets/quest-slices/w1s3.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E04",
        image: require("../../../../../../../assets/quest-slices/w1s4.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s2,
        slots: [{ bottom: 36, index: 7, left: 187 }, { index: 8, left: 187, top: 8 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E05",
        image: require("../../../../../../../assets/quest-slices/w1s5.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s2,
        slots: [
            { bottom: 36, index: 9, left: 187 },
            { index: 10, left: 286, top: 8 },
            { index: 11, left: 187, top: 8 },
            { index: 12, left: 96, top: 8 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E06",
        image: require("../../../../../../../assets/quest-slices/w1s6.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s2,
        slots: [{ bottom: 36, index: 13, left: 187 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E07",
        image: require("../../../../../../../assets/quest-slices/w1s7.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E08",
        image: require("../../../../../../../assets/quest-slices/w1s8.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s3,
        slots: [{ index: 14, left: 96, top: 8 }, { index: 15, left: 187, top: 8 }, { index: 16, left: 286, top: 8 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E09",
        image: require("../../../../../../../assets/quest-slices/w1s9.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s3,
        slots: [
            { bottom: 36, index: 17, left: 96 },
            { bottom: 36, index: 18, left: 286 },
            { index: 19, left: 187, top: 8 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E10",
        image: require("../../../../../../../assets/quest-slices/w1s10.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s3,
        slots: [{ bottom: 36, index: 20, left: 187 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E11",
        image: require("../../../../../../../assets/quest-slices/w1s11.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E12",
        image: require("../../../../../../../assets/quest-slices/w1s12.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s4,
        slots: [
            { bottom: 0, index: 21, left: 283 },
            { bottom: 0, index: 22, left: 187 },
            { bottom: 90, index: 23, left: 93 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E13",
        image: require("../../../../../../../assets/quest-slices/w1s13.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s4,
        slots: [
            { bottom: 0, index: 24, left: 187 },
            { bottom: 0, index: 25, left: 283 },
            { bottom: 90, index: 26, left: 187 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E14",
        image: require("../../../../../../../assets/quest-slices/w1s14.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s4,
        slots: [{ bottom: 0, index: 27, left: 187 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E15",
        image: require("../../../../../../../assets/quest-slices/w1s15.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s5,
        slots: [{ index: 28, left: 187, top: 8 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E16",
        image: require("../../../../../../../assets/quest-slices/w1s16.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s5,
        slots: [{ bottom: 36, index: 29, left: 187 }, { index: 30, left: 187, top: 8 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E17",
        image: require("../../../../../../../assets/quest-slices/w1s17.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s5,
        slots: [
            { bottom: 36, index: 31, left: 283 },
            { bottom: 36, index: 32, left: 187 },
            { bottom: 36, index: 33, left: 93 },
            { index: 34, left: 187, top: 8 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E18",
        image: require("../../../../../../../assets/quest-slices/w1s18.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E19",
        image: require("../../../../../../../assets/quest-slices/w1s19.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s6,
        slots: [
            { bottom: 36, index: 35, left: 187 },
            { index: 36, left: 93, top: 8 },
            { index: 37, left: 283, top: 8 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E20",
        image: require("../../../../../../../assets/quest-slices/w1s20.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s6,
        slots: [
            { bottom: 36, index: 38, left: 93 },
            { bottom: 36, index: 39, left: 283 },
            { index: 40, left: 187, top: 8 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E21",
        image: require("../../../../../../../assets/quest-slices/w1s21.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s6,
        slots: [{ bottom: 36, index: 41, left: 187 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E22",
        image: require("../../../../../../../assets/quest-slices/w1s22.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E23",
        image: require("../../../../../../../assets/quest-slices/w1s23.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s7,
        slots: [
            { bottom: 44, index: 42, left: 93 },
            { bottom: 44, index: 43, left: 283 },
            { index: 44, left: 187, top: 8 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E24",
        image: require("../../../../../../../assets/quest-slices/w1s24.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s7,
        slots: [
            { bottom: 20, index: 45, left: 93 },
            { bottom: 20, index: 46, left: 283 },
            { index: 47, left: 187, top: 24 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E25",
        image: require("../../../../../../../assets/quest-slices/w1s25.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s7,
        slots: [{ bottom: 0, index: 48, left: 187 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E26",
        image: require("../../../../../../../assets/quest-slices/w1s26.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s7,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E27",
        image: require("../../../../../../../assets/quest-slices/w1s27.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W01E28",
        image: require("../../../../../../../assets/quest-slices/w1s28.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w1s8,
        slots: [{ bottom: 0, index: 49, left: 187 }],
        topBarType: "white"
    },
    /**
     *  OCEAN WORLD
     *  first episode
     */
    {
        id: "MAP_SLICE_W02E00",
        image: require("../../../../../../../assets/quest-slices/w2s0.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s1,
        slots: [{ index: 51, left: 187, top: 8 }],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E01",
        image: require("../../../../../../../assets/quest-slices/w2s1.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s1,
        slots: [
            { bottom: 36, index: 52, left: 96 },
            { bottom: 36, index: 50, left: 187 },
            { bottom: 36, index: 53, left: 286 },
            { index: 54, left: 187, top: 8 }
        ],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E02",
        image: require("../../../../../../../assets/quest-slices/w2s2.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s1,
        slots: [{ bottom: 36, index: 55, left: 187 }, { index: 56, left: 187, top: 8 }],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E03",
        image: require("../../../../../../../assets/quest-slices/w2s3.png"),
        navBarColour: COLOURS.LIGHT,
        offset: 0,
        slots: [],
        topBarType: "white"
    },
    // next episode
    {
        id: "MAP_SLICE_W02E04",
        image: require("../../../../../../../assets/quest-slices/w2s4.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s2,
        slots: [{ bottom: 36, index: 57, left: 187 }, { index: 58, left: 187, top: 8 }],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E05",
        image: require("../../../../../../../assets/quest-slices/w2s5.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s2,
        slots: [
            { bottom: 36, index: 59, left: 187 },
            { index: 60, left: 286, top: 8 },
            { index: 61, left: 187, top: 8 },
            { index: 62, left: 96, top: 8 }
        ],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E06",
        image: require("../../../../../../../assets/quest-slices/w2s6.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w2s2,
        slots: [{ bottom: 36, index: 63, left: 187 }],
        topBarType: "default"
    },
    // next episode
    {
        id: "MAP_SLICE_W02E07",
        image: require("../../../../../../../assets/quest-slices/w2s7.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W02E08",
        image: require("../../../../../../../assets/quest-slices/w2s8.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w2s3,
        slots: [
            { bottom: 40, index: 65, left: 96 },
            { bottom: 40, index: 64, left: 187 },
            { bottom: 40, index: 67, left: 283 },
            { index: 66, left: 96, top: 8 },
            { index: 68, left: 283, top: 8 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W02E09",
        image: require("../../../../../../../assets/quest-slices/w2s9.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w2s3,
        slots: [{ bottom: 36, index: 69, left: 187 }, { index: 70, left: 187, top: 8 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W02E10",
        image: require("../../../../../../../assets/quest-slices/w2s10.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    // next episode
    {
        id: "MAP_SLICE_W02E11",
        image: require("../../../../../../../assets/quest-slices/w2s11.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w2s4,
        slots: [{ index: 71, left: 187, top: 40 }],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W02E12",
        image: require("../../../../../../../assets/quest-slices/w2s12.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s4,
        slots: [
            { bottom: 0, index: 72, left: 283 },
            { bottom: 0, index: 73, left: 93 },
            { index: 74, left: 187, top: 40 }
        ],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E13",
        image: require("../../../../../../../assets/quest-slices/w2s13.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s4,
        slots: [
            { bottom: 0, index: 75, left: 283 },
            { bottom: 0, index: 76, left: 93 },
            { index: 77, left: 187, top: 40 }
        ],
        topBarType: "white"
    },
    // next episode
    {
        id: "MAP_SLICE_W02E14",
        image: require("../../../../../../../assets/quest-slices/w2s14.png"),
        navBarColour: COLOURS.LIGHT,
        offset: 0,
        slots: [],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E15",
        image: require("../../../../../../../assets/quest-slices/w2s15.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s5,
        slots: [{ bottom: 0, index: 78, left: 187 }, { index: 79, left: 187, top: 40 }],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E16",
        image: require("../../../../../../../assets/quest-slices/w2s16.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s5,
        slots: [
            { bottom: 0, index: 80, left: 187 },
            { index: 81, left: 283, top: 40 },
            { index: 82, left: 187, top: 40 },
            { index: 83, left: 93, top: 40 }
        ],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E17",
        image: require("../../../../../../../assets/quest-slices/w2s17.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s5,
        slots: [{ bottom: 0, index: 84, left: 187 }],
        topBarType: "white"
    },
    // next episode
    {
        id: "MAP_SLICE_W02E18",
        image: require("../../../../../../../assets/quest-slices/w2s18.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s6,
        slots: [{ index: 85, left: 187, top: 40 }],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E19",
        image: require("../../../../../../../assets/quest-slices/w2s19.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s6,
        slots: [
            { bottom: 0, index: 86, left: 93 },
            { bottom: 0, index: 88, left: 283 },
            { index: 87, left: 93, top: 40 },
            { index: 89, left: 283, top: 40 }
        ],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W02E20",
        image: require("../../../../../../../assets/quest-slices/w2s20.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s6,
        slots: [{ bottom: 0, index: 90, left: 187 }, { index: 91, left: 187, top: 40 }],
        topBarType: "default"
    },
    // next episode
    {
        id: "MAP_SLICE_W02E21",
        image: require("../../../../../../../assets/quest-slices/w2s21.png"),
        navBarColour: COLOURS.LIGHT,
        offset: 0,
        slots: [],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E22",
        image: require("../../../../../../../assets/quest-slices/w2s22.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s7,
        slots: [{ index: 92, left: 93, top: 0 }, { index: 93, left: 283, top: 0 }],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E23",
        image: require("../../../../../../../assets/quest-slices/w2s23.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s7,
        slots: [
            { bottom: 28, index: 94, left: 187 },
            { index: 95, left: 93, top: 28 },
            { index: 96, left: 283, top: 28 }
        ],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E24",
        image: require("../../../../../../../assets/quest-slices/w2s24.png"),
        navBarColour: COLOURS.DARK,
        offset: offsets.w2s7,
        slots: [{ bottom: 0, index: 97, left: 187 }, { index: 98, left: 187, top: 46 }],
        topBarType: "default"
    },
    // next episode
    {
        id: "MAP_SLICE_W02E25",
        image: require("../../../../../../../assets/quest-slices/w2s25.png"),
        navBarColour: COLOURS.DARK,
        offset: 0,
        slots: [],
        topBarType: "default"
    },
    {
        id: "MAP_SLICE_W02E26",
        image: require("../../../../../../../assets/quest-slices/w2s26.png"),
        navBarColour: COLOURS.LIGHT,
        offset: 0,
        slots: [],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E27",
        image: require("../../../../../../../assets/quest-slices/w2s27.png"),
        navBarColour: COLOURS.LIGHT,
        offset: 0,
        slots: [],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W02E28",
        image: require("../../../../../../../assets/quest-slices/w2s28.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w2s8,
        slots: [{ bottom: 10, index: 99, left: 187 }],
        topBarType: "white"
    },
    /**
     *  DESERT WORLD
     *  first episode
     */
    {
        id: "MAP_SLICE_W03E00",
        image: require("../../../../../../../assets/quest-slices/w3s0.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s1,
        slots: [{ index: 101, left: 187, top: 8 }],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E01",
        image: require("../../../../../../../assets/quest-slices/w3s1.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s1,
        slots: [
            { bottom: 36, index: 102, left: 96 },
            { bottom: 36, index: 100, left: 187 },
            { bottom: 36, index: 103, left: 286 },
            { index: 104, left: 187, top: 8 }
        ],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E02",
        image: require("../../../../../../../assets/quest-slices/w3s2.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s1,
        slots: [{ bottom: 36, index: 105, left: 187 }, { index: 106, left: 187, top: 8 }],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E03",
        image: require("../../../../../../../assets/quest-slices/w3s3.png"),
        navBarColour: COLOURS.DESERT,
        offset: 0,
        slots: [],
        topBarType: "desert"
    },
    // next episode
    {
        id: "MAP_SLICE_W03E04",
        image: require("../../../../../../../assets/quest-slices/w3s4.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s2,
        slots: [{ bottom: 36, index: 107, left: 187 }, { index: 108, left: 187, top: 8 }],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E05",
        image: require("../../../../../../../assets/quest-slices/w3s5.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s2,
        slots: [
            { bottom: 36, index: 109, left: 187 },
            { index: 110, left: 286, top: 8 },
            { index: 111, left: 187, top: 8 },
            { index: 112, left: 96, top: 8 }
        ],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E06",
        image: require("../../../../../../../assets/quest-slices/w3s6.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s2,
        slots: [{ bottom: 36, index: 113, left: 187 }],
        topBarType: "desert"
    },
    // next episode
    {
        id: "MAP_SLICE_W03E07",
        image: require("../../../../../../../assets/quest-slices/w3s7.png"),
        navBarColour: COLOURS.DESERT,
        offset: 0,
        slots: [],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E08",
        image: require("../../../../../../../assets/quest-slices/w3s8.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s3,
        slots: [{ index: 115, left: 96, top: 8 }, { index: 114, left: 187, top: 8 }, { index: 117, left: 283, top: 8 }],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E09",
        image: require("../../../../../../../assets/quest-slices/w3s9.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s3,
        slots: [
            { bottom: 36, index: 116, left: 96 },
            { bottom: 36, index: 118, left: 283 },
            { index: 119, left: 187, top: 8 }
        ],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E10",
        image: require("../../../../../../../assets/quest-slices/w3s10.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s3,
        slots: [{ bottom: 36, index: 120, left: 187 }],
        topBarType: "desert"
    },
    // next episode
    {
        id: "MAP_SLICE_W03E11",
        image: require("../../../../../../../assets/quest-slices/w3s11.png"),
        navBarColour: COLOURS.DESERT,
        offset: 0,
        slots: [],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E12",
        image: require("../../../../../../../assets/quest-slices/w3s12.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s4,
        slots: [
            { bottom: 0, index: 121, left: 187 },
            { index: 122, left: 283, top: 40 },
            { index: 124, left: 187, top: 40 }
        ],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E13",
        image: require("../../../../../../../assets/quest-slices/w3s13.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s4,
        slots: [
            { bottom: 0, index: 123, left: 283 },
            { bottom: 0, index: 125, left: 93 },
            { index: 126, left: 187, top: 40 }
        ],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E14",
        image: require("../../../../../../../assets/quest-slices/w3s14.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s4,
        slots: [{ bottom: 0, index: 127, left: 187 }],
        topBarType: "desert"
    },
    // next episode
    {
        id: "MAP_SLICE_W03E15",
        image: require("../../../../../../../assets/quest-slices/w3s15.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s5,
        slots: [{ index: 128, left: 187, top: 8 }],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E16",
        image: require("../../../../../../../assets/quest-slices/w3s16.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s5,
        slots: [{ bottom: 40, index: 129, left: 187 }, { index: 130, left: 187, top: 8 }],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E17",
        image: require("../../../../../../../assets/quest-slices/w3s17.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s5,
        slots: [
            { bottom: 40, index: 131, left: 286 },
            { bottom: 40, index: 132, left: 187 },
            { bottom: 40, index: 133, left: 96 },
            { index: 134, left: 187, top: 8 }
        ],
        topBarType: "desert"
    },
    // next episode
    {
        id: "MAP_SLICE_W03E18",
        image: require("../../../../../../../assets/quest-slices/w3s18.png"),
        navBarColour: COLOURS.DESERT,
        offset: 0,
        slots: [],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E19",
        image: require("../../../../../../../assets/quest-slices/w3s19.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s6,
        slots: [
            { bottom: 40, index: 135, left: 187 },
            { index: 136, left: 187, top: 8 },
            { index: 137, left: 286, top: 8 }
        ],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E20",
        image: require("../../../../../../../assets/quest-slices/w3s20.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s6,
        slots: [
            { bottom: 40, index: 138, left: 187 },
            { index: 139, left: 96, top: 8 },
            { index: 140, left: 187, top: 8 }
        ],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W03E21",
        image: require("../../../../../../../assets/quest-slices/w3s21.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w3s6,
        slots: [{ bottom: 40, index: 141, left: 187 }],
        topBarType: "white"
    },
    // next episode
    {
        id: "MAP_SLICE_W03E22",
        image: require("../../../../../../../assets/quest-slices/w3s22.png"),
        navBarColour: COLOURS.LIGHT,
        offset: 0,
        slots: [],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W03E23",
        image: require("../../../../../../../assets/quest-slices/w3s23.png"),
        navBarColour: COLOURS.LIGHT,
        offset: offsets.w3s7,
        slots: [
            { bottom: 40, index: 142, left: 93 },
            { bottom: 40, index: 143, left: 283 },
            { index: 144, left: 187, top: 18 }
        ],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E24",
        image: require("../../../../../../../assets/quest-slices/w3s24.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s7,
        slots: [
            { bottom: 30, index: 145, left: 93 },
            { bottom: 30, index: 146, left: 283 },
            { index: 147, left: 187, top: 40 }
        ],
        topBarType: "white"
    },
    {
        id: "MAP_SLICE_W03E25",
        image: require("../../../../../../../assets/quest-slices/w3s25.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s7,
        slots: [{ bottom: 0, index: 148, left: 187 }],
        topBarType: "white"
    },
    // next episode
    {
        id: "MAP_SLICE_W03E26",
        image: require("../../../../../../../assets/quest-slices/w3s26.png"),
        navBarColour: COLOURS.DESERT,
        offset: 0,
        slots: [],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E27",
        image: require("../../../../../../../assets/quest-slices/w3s27.png"),
        navBarColour: COLOURS.DESERT,
        offset: 0,
        slots: [],
        topBarType: "desert"
    },
    {
        id: "MAP_SLICE_W03E28",
        image: require("../../../../../../../assets/quest-slices/w3s28.png"),
        navBarColour: COLOURS.DESERT,
        offset: offsets.w3s8,
        slots: [{ bottom: 10, index: 149, left: 187 }],
        topBarType: "desert"
    }
];

export default WorldSlices;
