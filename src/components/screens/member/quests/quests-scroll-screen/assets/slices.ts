import { TOP_BAR_TYPES, TopBarTypes } from "@molecules/top-bar/top-bar";
import { COLOURS, IColours } from "../../../../../molecules/nav-bar/nav-bar";
import { episodeSettings, IEpisodeSettings } from "./slices.settings";

interface IMapSliceSlot {
    bottom?: number;
    index: number; // level - 1
    left: number;
    top?: number;
}

export interface IMapSlice {
    episodeSettings?: IEpisodeSettings;
    id: string;
    image: any;
    slots: IMapSliceSlot[];
    navBarColour: IColours;
    topBarType: TopBarTypes;
}

const interstitialsSlices: { [x: string]: IMapSlice[] } = {
    ocean: [
        {
            id: "MAP_SLICE_W02_INTERSTITIALS_01",
            image: require("../../../../../../../assets/quest-slices/interstitials/w2s0.png"),
            navBarColour: COLOURS.LIGHT,
            slots: [],
            topBarType: TOP_BAR_TYPES.DEFAULT
        },
        {
            id: "MAP_SLICE_W02_INTERSTITIALS_02",
            image: require("../../../../../../../assets/quest-slices/interstitials/w2s1.png"),
            navBarColour: COLOURS.LIGHT,
            slots: [],
            topBarType: TOP_BAR_TYPES.DEFAULT
        }
    ],
    desert: [
        {
            id: "MAP_SLICE_W03_INTERSTITIALS_01",
            image: require("../../../../../../../assets/quest-slices/interstitials/w3s0.png"),
            navBarColour: COLOURS.LIGHT,
            slots: [],
            topBarType: TOP_BAR_TYPES.DEFAULT
        },
        {
            id: "MAP_SLICE_W03_INTERSTITIALS_02",
            image: require("../../../../../../../assets/quest-slices/interstitials/w3s1.png"),
            navBarColour: COLOURS.LIGHT,
            slots: [],
            topBarType: TOP_BAR_TYPES.DEFAULT
        }
    ],
    mountain: [
        {
            id: "MAP_SLICE_W04_INTERSTITIALS_01",
            image: require("../../../../../../../assets/quest-slices/interstitials/w4s0.png"),
            navBarColour: COLOURS.LIGHT,
            slots: [],
            topBarType: TOP_BAR_TYPES.DEFAULT
        },
        {
            id: "MAP_SLICE_W04_INTERSTITIALS_02",
            image: require("../../../../../../../assets/quest-slices/interstitials/w4s1.png"),
            navBarColour: COLOURS.LIGHT,
            slots: [],
            topBarType: TOP_BAR_TYPES.DEFAULT
        }
    ]
};

const WorldSlices: IMapSlice[] = [
    /**
     *  FOREST WORLD
     *  first episode
     */
    {
        episodeSettings: episodeSettings.w1s1,
        id: "MAP_SLICE_W01E00",
        image: require("../../../../../../../assets/quest-slices/w1s0.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ index: 1, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s1,
        id: "MAP_SLICE_W01E01",
        image: require("../../../../../../../assets/quest-slices/w1s1.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            { bottom: 36, index: 2, left: 96 },
            { bottom: 36, index: 0, left: 187 },
            { bottom: 36, index: 3, left: 276 },
            { index: 4, left: 187, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s1,
        id: "MAP_SLICE_W01E02",
        image: require("../../../../../../../assets/quest-slices/w1s2.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ bottom: 36, index: 5, left: 187 }, { index: 6, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        id: "MAP_SLICE_W01E03",
        image: require("../../../../../../../assets/quest-slices/w1s3.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    // next episode
    {
        episodeSettings: episodeSettings.w1s2,
        id: "MAP_SLICE_W01E04",
        image: require("../../../../../../../assets/quest-slices/w1s4.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ bottom: 36, index: 7, left: 187 }, { index: 8, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s2,
        id: "MAP_SLICE_W01E05",
        image: require("../../../../../../../assets/quest-slices/w1s5.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            { bottom: 36, index: 9, left: 187 },
            { index: 10, left: 286, top: 8 },
            { index: 11, left: 187, top: 8 },
            { index: 12, left: 96, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s2,
        id: "MAP_SLICE_W01E06",
        image: require("../../../../../../../assets/quest-slices/w1s6.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ bottom: 36, index: 13, left: 187 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    // next episode
    {
        id: "MAP_SLICE_W01E07",
        image: require("../../../../../../../assets/quest-slices/w1s7.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s3,
        id: "MAP_SLICE_W01E08",
        image: require("../../../../../../../assets/quest-slices/w1s8.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ index: 14, left: 187, top: 20 }, { index: 15, left: 96, top: 20 }, { left: 286, top: 20, index: 17 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s3,
        id: "MAP_SLICE_W01E09",
        image: require("../../../../../../../assets/quest-slices/w1s9.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            { index: 16, bottom: 16, left: 96 },
            { bottom: 16, index: 18, left: 286 },
            { index: 19, left: 187, top: 28 }
        ],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s3,
        id: "MAP_SLICE_W01E10",
        image: require("../../../../../../../assets/quest-slices/w1s10.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ bottom: 8, index: 20, left: 187 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    // next episode
    {
        id: "MAP_SLICE_W01E11",
        image: require("../../../../../../../assets/quest-slices/w1s11.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s4,
        id: "MAP_SLICE_W01E12",
        image: require("../../../../../../../assets/quest-slices/w1s12.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            { bottom: 40, index: 21, left: 187 },
            { top: 20, index: 22, left: 283 },
            { top: 8, index: 24, left: 187 }
        ],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s4,
        id: "MAP_SLICE_W01E13",
        image: require("../../../../../../../assets/quest-slices/w1s13.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            { bottom: 20, index: 23, left: 283 },
            { bottom: 24, index: 25, left: 93 },
            { top: 8, index: 26, left: 187 }
        ],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s4,
        id: "MAP_SLICE_W01E14",
        image: require("../../../../../../../assets/quest-slices/w1s14.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ bottom: 24, index: 27, left: 187 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    // next episode
    {
        episodeSettings: episodeSettings.w1s5,
        id: "MAP_SLICE_W01E15",
        image: require("../../../../../../../assets/quest-slices/w1s15.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w1s5,
        id: "MAP_SLICE_W01E16",
        image: require("../../../../../../../assets/quest-slices/w1s16.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ index: 28, left: 187, top: 88 }, { index: 29, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w1s5,
        id: "MAP_SLICE_W01E17",
        image: require("../../../../../../../assets/quest-slices/w1s17.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            { index: 30, left: 187, bottom: 30 },
            { top: 8, index: 31, left: 283 },
            { top: 8, index: 32, left: 187 },
            { top: 8, index: 33, left: 93 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w1s5,
        id: "MAP_SLICE_W01E18",
        image: require("../../../../../../../assets/quest-slices/w1s18.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            {
                index: 34,
                left: 187,
                bottom: 40
            }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        episodeSettings: episodeSettings.w1s6,
        id: "MAP_SLICE_W01E19",
        image: require("../../../../../../../assets/quest-slices/w1s19.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ top: 8, index: 35, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w1s6,
        id: "MAP_SLICE_W01E20",
        image: require("../../../../../../../assets/quest-slices/w1s20.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            { index: 36, left: 93, bottom: 36 },
            { index: 37, left: 283, bottom: 36 },
            { top: 8, index: 38, left: 93 },
            { top: 8, index: 39, left: 283 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w1s6,
        id: "MAP_SLICE_W01E21",
        image: require("../../../../../../../assets/quest-slices/w1s21.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ index: 40, left: 187, bottom: 36 }, { index: 41, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        id: "MAP_SLICE_W01E22",
        image: require("../../../../../../../assets/quest-slices/w1s22.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        episodeSettings: episodeSettings.w1s7,
        id: "MAP_SLICE_W01E23",
        image: require("../../../../../../../assets/quest-slices/w1s23.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ top: 8, index: 42, left: 93 }, { top: 8, index: 43, left: 283 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s7,
        id: "MAP_SLICE_W01E24",
        image: require("../../../../../../../assets/quest-slices/w1s24.png"),
        navBarColour: COLOURS.FOREST,
        slots: [
            { index: 44, left: 187, bottom: 36 },
            { top: 24, index: 45, left: 93 },
            { top: 24, index: 46, left: 283 }
        ],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s7,
        id: "MAP_SLICE_W01E25",
        image: require("../../../../../../../assets/quest-slices/w1s25.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ index: 47, left: 187, bottom: 8 }, { top: 36, index: 48, left: 187 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    // next episode
    {
        id: "MAP_SLICE_W01E26",
        image: require("../../../../../../../assets/quest-slices/w1s26.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        id: "MAP_SLICE_W01E27",
        image: require("../../../../../../../assets/quest-slices/w1s27.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s8,
        id: "MAP_SLICE_W01E28",
        image: require("../../../../../../../assets/quest-slices/w1s28.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    {
        episodeSettings: episodeSettings.w1s8,
        id: "MAP_SLICE_W01E29",
        image: require("../../../../../../../assets/quest-slices/w1s29.png"),
        navBarColour: COLOURS.FOREST,
        slots: [{ bottom: 0, index: 49, left: 187 }],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    // FOREST TO OCEAN INTERSTITIALS
    ...interstitialsSlices.ocean,
    /**
     *  OCEAN WORLD
     *  first episode
     */
    {
        episodeSettings: episodeSettings.w2s1,
        id: "MAP_SLICE_W02E00",
        image: require("../../../../../../../assets/quest-slices/w2s0.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 51, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s1,
        id: "MAP_SLICE_W02E01",
        image: require("../../../../../../../assets/quest-slices/w2s1.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { bottom: 36, index: 52, left: 96 },
            { bottom: 36, index: 50, left: 187 },
            { bottom: 36, index: 53, left: 286 },
            { index: 54, left: 187, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s1,
        id: "MAP_SLICE_W02E02",
        image: require("../../../../../../../assets/quest-slices/w2s2.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ bottom: 36, index: 55, left: 187 }, { index: 56, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        id: "MAP_SLICE_W02E03",
        image: require("../../../../../../../assets/quest-slices/w2s3.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        episodeSettings: episodeSettings.w2s2,
        id: "MAP_SLICE_W02E04",
        image: require("../../../../../../../assets/quest-slices/w2s4.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ bottom: 36, index: 57, left: 187 }, { index: 58, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s2,
        id: "MAP_SLICE_W02E05",
        image: require("../../../../../../../assets/quest-slices/w2s5.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { bottom: 36, index: 59, left: 187 },
            { index: 60, left: 286, top: 8 },
            { index: 61, left: 187, top: 8 },
            { index: 62, left: 96, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s2,
        id: "MAP_SLICE_W02E06",
        image: require("../../../../../../../assets/quest-slices/w2s6.png"),
        navBarColour: COLOURS.DARK,
        slots: [{ bottom: 36, index: 63, left: 187 }],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    // next episode
    {
        id: "MAP_SLICE_W02E07",
        image: require("../../../../../../../assets/quest-slices/w2s7.png"),
        navBarColour: COLOURS.DARK,
        slots: [],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    {
        episodeSettings: episodeSettings.w2s3,
        id: "MAP_SLICE_W02E08",
        image: require("../../../../../../../assets/quest-slices/w2s8.png"),
        navBarColour: COLOURS.DARK,
        slots: [
            { bottom: 40, index: 65, left: 96 },
            { bottom: 40, index: 64, left: 187 },
            { bottom: 40, index: 67, left: 283 },
            { index: 66, left: 96, top: 8 },
            { index: 68, left: 283, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    {
        episodeSettings: episodeSettings.w2s3,
        id: "MAP_SLICE_W02E09",
        image: require("../../../../../../../assets/quest-slices/w2s9.png"),
        navBarColour: COLOURS.DARK,
        slots: [{ bottom: 36, index: 69, left: 187 }, { index: 70, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    {
        id: "MAP_SLICE_W02E10",
        image: require("../../../../../../../assets/quest-slices/w2s10.png"),
        navBarColour: COLOURS.DARK,
        slots: [],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    // next episode
    {
        episodeSettings: episodeSettings.w2s4,
        id: "MAP_SLICE_W02E11",
        image: require("../../../../../../../assets/quest-slices/w2s11.png"),
        navBarColour: COLOURS.DARK,
        slots: [{ index: 71, left: 187, top: 40 }],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    {
        episodeSettings: episodeSettings.w2s4,
        id: "MAP_SLICE_W02E12",
        image: require("../../../../../../../assets/quest-slices/w2s12.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { bottom: 0, index: 72, left: 283 },
            { bottom: 0, index: 73, left: 93 },
            { index: 74, left: 187, top: 40 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s4,
        id: "MAP_SLICE_W02E13",
        image: require("../../../../../../../assets/quest-slices/w2s13.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { bottom: 0, index: 75, left: 283 },
            { bottom: 0, index: 76, left: 93 },
            { index: 77, left: 187, top: 40 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        id: "MAP_SLICE_W02E14",
        image: require("../../../../../../../assets/quest-slices/w2s14.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s5,
        id: "MAP_SLICE_W02E15",
        image: require("../../../../../../../assets/quest-slices/w2s15.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ bottom: 0, index: 78, left: 187 }, { index: 79, left: 187, top: 40 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s5,
        id: "MAP_SLICE_W02E16",
        image: require("../../../../../../../assets/quest-slices/w2s16.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { bottom: 0, index: 80, left: 187 },
            { index: 81, left: 283, top: 40 },
            { index: 82, left: 187, top: 40 },
            { index: 83, left: 93, top: 40 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s5,
        id: "MAP_SLICE_W02E17",
        image: require("../../../../../../../assets/quest-slices/w2s17.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ bottom: 0, index: 84, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        episodeSettings: episodeSettings.w2s6,
        id: "MAP_SLICE_W02E18",
        image: require("../../../../../../../assets/quest-slices/w2s18.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 85, left: 187, top: 40 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s6,
        id: "MAP_SLICE_W02E19",
        image: require("../../../../../../../assets/quest-slices/w2s19.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { bottom: 0, index: 86, left: 93 },
            { bottom: 0, index: 88, left: 283 },
            { index: 87, left: 93, top: 40 },
            { index: 89, left: 283, top: 40 }
        ],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    {
        episodeSettings: episodeSettings.w2s6,
        id: "MAP_SLICE_W02E20",
        image: require("../../../../../../../assets/quest-slices/w2s20.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ bottom: 0, index: 90, left: 187 }, { index: 91, left: 187, top: 40 }],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    // next episode
    {
        id: "MAP_SLICE_W02E21",
        image: require("../../../../../../../assets/quest-slices/w2s21.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s7,
        id: "MAP_SLICE_W02E22",
        image: require("../../../../../../../assets/quest-slices/w2s22.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 92, left: 93, top: 8 }, { index: 93, left: 283, top: 8 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s7,
        id: "MAP_SLICE_W02E23",
        image: require("../../../../../../../assets/quest-slices/w2s23.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { bottom: 28, index: 94, left: 187 },
            { index: 95, left: 93, top: 28 },
            { index: 96, left: 283, top: 28 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s7,
        id: "MAP_SLICE_W02E24",
        image: require("../../../../../../../assets/quest-slices/w2s24.png"),
        navBarColour: COLOURS.DARK,
        slots: [{ bottom: 0, index: 97, left: 187 }, { index: 98, left: 187, top: 46 }],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    // next episode
    {
        id: "MAP_SLICE_W02E25",
        image: require("../../../../../../../assets/quest-slices/w2s25.png"),
        navBarColour: COLOURS.DARK,
        slots: [],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    {
        id: "MAP_SLICE_W02E26",
        image: require("../../../../../../../assets/quest-slices/w2s26.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        id: "MAP_SLICE_W02E27",
        image: require("../../../../../../../assets/quest-slices/w2s27.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w2s8,
        id: "MAP_SLICE_W02E28",
        image: require("../../../../../../../assets/quest-slices/w2s28.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ bottom: 10, index: 99, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // OCEAN TO DESERT INTERSTITIALS
    ...interstitialsSlices.desert,
    /**
     *  DESERT WORLD
     *  first episode
     */
    {
        episodeSettings: episodeSettings.w3s1,
        id: "MAP_SLICE_W03E00",
        image: require("../../../../../../../assets/quest-slices/w3s0.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ index: 101, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s1,
        id: "MAP_SLICE_W03E01",
        image: require("../../../../../../../assets/quest-slices/w3s1.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 36, index: 102, left: 96 },
            { bottom: 36, index: 100, left: 187 },
            { bottom: 36, index: 103, left: 286 },
            { index: 104, left: 187, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s1,
        id: "MAP_SLICE_W03E02",
        image: require("../../../../../../../assets/quest-slices/w3s2.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ bottom: 36, index: 105, left: 187 }, { index: 106, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        id: "MAP_SLICE_W03E03",
        image: require("../../../../../../../assets/quest-slices/w3s3.png"),
        navBarColour: COLOURS.DESERT,
        slots: [],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    // next episode
    {
        episodeSettings: episodeSettings.w3s2,
        id: "MAP_SLICE_W03E04",
        image: require("../../../../../../../assets/quest-slices/w3s4.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ bottom: 36, index: 107, left: 187 }, { index: 108, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s2,
        id: "MAP_SLICE_W03E05",
        image: require("../../../../../../../assets/quest-slices/w3s5.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 36, index: 109, left: 187 },
            { index: 110, left: 286, top: 8 },
            { index: 111, left: 187, top: 8 },
            { index: 112, left: 96, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s2,
        id: "MAP_SLICE_W03E06",
        image: require("../../../../../../../assets/quest-slices/w3s6.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ bottom: 36, index: 113, left: 187 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    // next episode
    {
        id: "MAP_SLICE_W03E07",
        image: require("../../../../../../../assets/quest-slices/w3s7.png"),
        navBarColour: COLOURS.DESERT,
        slots: [],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s3,
        id: "MAP_SLICE_W03E08",
        image: require("../../../../../../../assets/quest-slices/w3s8.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ index: 115, left: 96, top: 8 }, { index: 114, left: 187, top: 8 }, { index: 117, left: 283, top: 8 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s3,
        id: "MAP_SLICE_W03E09",
        image: require("../../../../../../../assets/quest-slices/w3s9.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 36, index: 116, left: 96 },
            { bottom: 36, index: 118, left: 283 },
            { index: 119, left: 187, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s3,
        id: "MAP_SLICE_W03E10",
        image: require("../../../../../../../assets/quest-slices/w3s10.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ bottom: 36, index: 120, left: 187 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    // next episode
    {
        id: "MAP_SLICE_W03E11",
        image: require("../../../../../../../assets/quest-slices/w3s11.png"),
        navBarColour: COLOURS.DESERT,
        slots: [],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s4,
        id: "MAP_SLICE_W03E12",
        image: require("../../../../../../../assets/quest-slices/w3s12.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 0, index: 121, left: 187 },
            { index: 122, left: 283, top: 40 },
            { index: 124, left: 187, top: 40 }
        ],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s4,
        id: "MAP_SLICE_W03E13",
        image: require("../../../../../../../assets/quest-slices/w3s13.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 0, index: 123, left: 283 },
            { bottom: 0, index: 125, left: 93 },
            { index: 126, left: 187, top: 40 }
        ],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s4,
        id: "MAP_SLICE_W03E14",
        image: require("../../../../../../../assets/quest-slices/w3s14.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ bottom: 0, index: 127, left: 187 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    // next episode
    {
        episodeSettings: episodeSettings.w3s5,
        id: "MAP_SLICE_W03E15",
        image: require("../../../../../../../assets/quest-slices/w3s15.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ index: 128, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s5,
        id: "MAP_SLICE_W03E16",
        image: require("../../../../../../../assets/quest-slices/w3s16.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ bottom: 40, index: 129, left: 187 }, { index: 130, left: 187, top: 8 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s5,
        id: "MAP_SLICE_W03E17",
        image: require("../../../../../../../assets/quest-slices/w3s17.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 40, index: 131, left: 286 },
            { bottom: 40, index: 132, left: 187 },
            { bottom: 40, index: 133, left: 96 },
            { index: 134, left: 187, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    // next episode
    {
        id: "MAP_SLICE_W03E18",
        image: require("../../../../../../../assets/quest-slices/w3s18.png"),
        navBarColour: COLOURS.DESERT,
        slots: [],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s6,
        id: "MAP_SLICE_W03E19",
        image: require("../../../../../../../assets/quest-slices/w3s19.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 40, index: 135, left: 187 },
            { index: 136, left: 187, top: 8 },
            { index: 137, left: 286, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s6,
        id: "MAP_SLICE_W03E20",
        image: require("../../../../../../../assets/quest-slices/w3s20.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 40, index: 138, left: 187 },
            { index: 139, left: 96, top: 8 },
            { index: 140, left: 187, top: 8 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w3s6,
        id: "MAP_SLICE_W03E21",
        image: require("../../../../../../../assets/quest-slices/w3s21.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ bottom: 40, index: 141, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        id: "MAP_SLICE_W03E22",
        image: require("../../../../../../../assets/quest-slices/w3s22.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w3s7,
        id: "MAP_SLICE_W03E23",
        image: require("../../../../../../../assets/quest-slices/w3s23.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { bottom: 40, index: 142, left: 93 },
            { bottom: 40, index: 143, left: 283 },
            { index: 144, left: 187, top: 18 }
        ],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s7,
        id: "MAP_SLICE_W03E24",
        image: require("../../../../../../../assets/quest-slices/w3s24.png"),
        navBarColour: COLOURS.DESERT,
        slots: [
            { bottom: 30, index: 145, left: 93 },
            { bottom: 30, index: 146, left: 283 },
            { index: 147, left: 187, top: 40 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w3s7,
        id: "MAP_SLICE_W03E25",
        image: require("../../../../../../../assets/quest-slices/w3s25.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ bottom: 0, index: 148, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        id: "MAP_SLICE_W03E26",
        image: require("../../../../../../../assets/quest-slices/w3s26.png"),
        navBarColour: COLOURS.DESERT,
        slots: [],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        id: "MAP_SLICE_W03E27",
        image: require("../../../../../../../assets/quest-slices/w3s27.png"),
        navBarColour: COLOURS.DESERT,
        slots: [],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    {
        episodeSettings: episodeSettings.w3s8,
        id: "MAP_SLICE_W03E28",
        image: require("../../../../../../../assets/quest-slices/w3s28.png"),
        navBarColour: COLOURS.DESERT,
        slots: [{ bottom: 10, index: 149, left: 187 }],
        topBarType: TOP_BAR_TYPES.DESERT
    },

    // OCEAN TO DESERT INTERSTITIALS
    ...interstitialsSlices.mountain,
    /**
     *  MOUNTAIN WORLD
     *  first episode
     */
    {
        episodeSettings: episodeSettings.w4s1,
        id: "MAP_SLICE_W04E00",
        image: require("../../../../../../../assets/quest-slices/w4s0.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 151, top: 8, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s1,
        id: "MAP_SLICE_W04E01",
        image: require("../../../../../../../assets/quest-slices/w4s1.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { index: 150, bottom: 36, left: 187 },
            { index: 152, bottom: 36, left: 100 },
            { index: 153, bottom: 36, left: 280 },
            { index: 154, top: 8, left: 187 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s1,
        id: "MAP_SLICE_W04E02",
        image: require("../../../../../../../assets/quest-slices/w4s2.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 155, bottom: 36, left: 187 }, { index: 156, top: 10, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        id: "MAP_SLICE_W04E03",
        image: require("../../../../../../../assets/quest-slices/w4s3.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },

    // next episode
    {
        episodeSettings: episodeSettings.w4s2,
        id: "MAP_SLICE_W04E04",
        image: require("../../../../../../../assets/quest-slices/w4s4.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 157, bottom: 45, left: 95 }, { index: 158, top: 8, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s2,
        id: "MAP_SLICE_W04E05",
        image: require("../../../../../../../assets/quest-slices/w4s5.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { index: 159, top: 8, left: 290 },
            { index: 160, bottom: 40, left: 187 },
            { index: 161, bottom: 40, left: 95 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s2,
        id: "MAP_SLICE_W04E06",
        image: require("../../../../../../../assets/quest-slices/w4s6.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 163, top: 8, left: 187 }, { index: 162, top: 110, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        id: "MAP_SLICE_W04E07",
        image: require("../../../../../../../assets/quest-slices/w4s7.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        id: "MAP_SLICE_W04E08",
        image: require("../../../../../../../assets/quest-slices/w4s8.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s3,
        id: "MAP_SLICE_W04E09",
        image: require("../../../../../../../assets/quest-slices/w4s9.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { index: 164, bottom: 40, left: 187 },
            { index: 165, bottom: 40, left: 97 },
            { index: 166, top: 8, left: 97 },
            { index: 167, bottom: 40, left: 277 },
            { index: 168, top: 8, left: 277 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s3,
        id: "MAP_SLICE_W04E10",
        image: require("../../../../../../../assets/quest-slices/w4s10.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 169, bottom: 30, left: 187 }, { index: 170, bottom: 120, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s3,
        id: "MAP_SLICE_W04E11",
        image: require("../../../../../../../assets/quest-slices/w4s11.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        episodeSettings: episodeSettings.w4s4,
        id: "MAP_SLICE_W04E12",
        image: require("../../../../../../../assets/quest-slices/w4s12.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 171, bottom: 80, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s4,
        id: "MAP_SLICE_W04E13",
        image: require("../../../../../../../assets/quest-slices/w4s13.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { index: 172, bottom: 8, left: 282 },
            { index: 173, bottom: 8, left: 187 },
            { index: 174, bottom: 8, left: 87 },
            { index: 175, top: 40, left: 187 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s4,
        id: "MAP_SLICE_W04E14",
        image: require("../../../../../../../assets/quest-slices/w4s14.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 176, bottom: 8, left: 282 }, { index: 177, bottom: 90, left: 282 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        id: "MAP_SLICE_W04E15",
        image: require("../../../../../../../assets/quest-slices/w4s15.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        episodeSettings: episodeSettings.w4s5,
        id: "MAP_SLICE_W04E16",
        image: require("../../../../../../../assets/quest-slices/w4s16.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 178, bottom: 24, left: 187 }, { index: 179, top: 8, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s5,
        id: "MAP_SLICE_W04E17",
        image: require("../../../../../../../assets/quest-slices/w4s17.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { index: 180, bottom: 35, left: 187 },
            { index: 181, top: 8, left: 282 },
            { index: 182, top: 8, left: 187 },
            { index: 183, top: 8, left: 92 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s5,
        id: "MAP_SLICE_W04E18",
        image: require("../../../../../../../assets/quest-slices/w4s18.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 184, bottom: 30, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        episodeSettings: episodeSettings.w4s6,
        id: "MAP_SLICE_W04E19",
        image: require("../../../../../../../assets/quest-slices/w4s19.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 185, top: 8, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s6,
        id: "MAP_SLICE_W04E20",
        image: require("../../../../../../../assets/quest-slices/w4s20.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [
            { index: 186, bottom: 40, left: 97 },
            { index: 187, top: 8, left: 97 },
            { index: 188, bottom: 40, left: 282 },
            { index: 189, top: 8, left: 282 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s6,
        id: "MAP_SLICE_W04E21",
        image: require("../../../../../../../assets/quest-slices/w4s21.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 190, bottom: 30, left: 187 }, { index: 191, top: 10, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s6,
        id: "MAP_SLICE_W04E22",
        image: require("../../../../../../../assets/quest-slices/w4s22.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    // next episode
    {
        episodeSettings: episodeSettings.w4s7,
        id: "MAP_SLICE_W04E23",
        image: require("../../../../../../../assets/quest-slices/w4s23.png"),
        navBarColour: COLOURS.BLUE,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s7,
        id: "MAP_SLICE_W04E24",
        image: require("../../../../../../../assets/quest-slices/w4s24.png"),
        navBarColour: COLOURS.BLUE,
        slots: [{ index: 192, top: 8, left: 97 }, { index: 193, top: 8, left: 277 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s7,
        id: "MAP_SLICE_W04E25",
        image: require("../../../../../../../assets/quest-slices/w4s25.png"),
        navBarColour: COLOURS.BLUE,
        slots: [
            { index: 194, bottom: 30, left: 187 },
            { index: 195, top: 30, left: 97 },
            { index: 196, top: 30, left: 277 }
        ],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s7,
        id: "MAP_SLICE_W04E26",
        image: require("../../../../../../../assets/quest-slices/w4s26.png"),
        navBarColour: COLOURS.BLUE,
        slots: [{ index: 197, bottom: 8, left: 187 }, { index: 198, top: 30, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s7,
        id: "MAP_SLICE_W04E27",
        image: require("../../../../../../../assets/quest-slices/w4s27.png"),
        navBarColour: COLOURS.BLUE,
        slots: [],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    // next episode
    {
        episodeSettings: episodeSettings.w4s8,
        id: "MAP_SLICE_W04E28",
        image: require("../../../../../../../assets/quest-slices/w4s28.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s8,
        id: "MAP_SLICE_W04E29",
        image: require("../../../../../../../assets/quest-slices/w4s29.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [],
        topBarType: TOP_BAR_TYPES.WHITE
    },
    {
        episodeSettings: episodeSettings.w4s8,
        id: "MAP_SLICE_W04E30",
        image: require("../../../../../../../assets/quest-slices/w4s30.png"),
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 199, bottom: 0, left: 187 }],
        topBarType: TOP_BAR_TYPES.WHITE
    }
];

export default WorldSlices;

export const loadingSlices: { [x: string]: IMapSlice } = {
    forest: {
        id: "MAP_SLICE_W01_LOADING_01",
        image: require("../../../../../../../assets/quest-slices/loading/w1s1.png"),
        navBarColour: COLOURS.FOREST,
        slots: [],
        topBarType: TOP_BAR_TYPES.FOREST
    },
    ocean: {
        id: "MAP_SLICE_W02_LOADING_01",
        image: require("../../../../../../../assets/quest-slices/loading/w2s1.png"),
        navBarColour: COLOURS.DARK,
        slots: [],
        topBarType: TOP_BAR_TYPES.DEFAULT
    },
    desert: {
        id: "MAP_SLICE_W03_LOADING_01",
        image: require("../../../../../../../assets/quest-slices/loading/w3s1.png"),
        navBarColour: COLOURS.DESERT,
        slots: [],
        topBarType: TOP_BAR_TYPES.DESERT
    },
    mountain: {
        id: "MAP_SLICE_W04_LOADING_01",
        image: require("../../../../../../../assets/quest-slices/loading/w4s1.png"),
        navBarColour: COLOURS.BLUE,
        slots: [],
        topBarType: TOP_BAR_TYPES.DEFAULT
    }
};
