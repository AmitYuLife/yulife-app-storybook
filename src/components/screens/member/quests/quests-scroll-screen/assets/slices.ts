import { COLOURS, IColours } from "../../../../../molecules/nav-bar/nav-bar";

interface IMapSliceSlot {
    bottom?: number;
    index: number; // level - 1
    left: number;
}

export interface IMapSlice {
    height: number;
    id: string;
    image: any;
    slots: IMapSliceSlot[];
    isTopBarLight: boolean;
    navBarColour: IColours;
}

const WorldSlices: IMapSlice[] = [
    {
        height: 136,
        id: "MAP_SLICE_W01E00",
        image: require("../../../../../../../assets/quest-slices/w1s0.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.LIGHT,
        slots: []
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E01",
        image: require("../../../../../../../assets/quest-slices/w1s1.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 0, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E02",
        image: require("../../../../../../../assets/quest-slices/w1s2.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 1, left: 96 }, { index: 2, left: 188 }, { index: 3, left: 286 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E03",
        image: require("../../../../../../../assets/quest-slices/w1s3.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 4, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E04",
        image: require("../../../../../../../assets/quest-slices/w1s4.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 5, left: 188 }]
    },
    {
        height: 528,
        id: "MAP_SLICE_W01E05",
        image: require("../../../../../../../assets/quest-slices/w1s5.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 6, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E06",
        image: require("../../../../../../../assets/quest-slices/w1s6.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 7, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E07",
        image: require("../../../../../../../assets/quest-slices/w1s7.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 8, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E08",
        image: require("../../../../../../../assets/quest-slices/w1s8.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 9, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E09",
        image: require("../../../../../../../assets/quest-slices/w1s9.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 10, left: 286 }, { index: 11, left: 188 }, { index: 12, left: 96 }]
    },
    {
        height: 419,
        id: "MAP_SLICE_W01E10",
        image: require("../../../../../../../assets/quest-slices/w1s10.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 13, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E11",
        image: require("../../../../../../../assets/quest-slices/w1s11.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 14, left: 96 }, { index: 15, left: 188 }, { index: 16, left: 286 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E12",
        image: require("../../../../../../../assets/quest-slices/w1s12.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 17, left: 96 }, { index: 18, left: 286 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E13",
        image: require("../../../../../../../assets/quest-slices/w1s13.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 19, left: 188 }]
    },
    {
        height: 346,
        id: "MAP_SLICE_W01E14",
        image: require("../../../../../../../assets/quest-slices/w1s14.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 20, left: 188 }]
    },
    {
        height: 91,
        id: "MAP_SLICE_W01E15",
        image: require("../../../../../../../assets/quest-slices/w1s15.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 21, left: 283 }, { index: 22, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E16",
        image: require("../../../../../../../assets/quest-slices/w1s16.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 23, left: 93 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E17",
        image: require("../../../../../../../assets/quest-slices/w1s17.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 24, left: 188 }, { index: 25, left: 283 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E18",
        image: require("../../../../../../../assets/quest-slices/w1s18.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 26, left: 188 }]
    },
    {
        height: 334,
        id: "MAP_SLICE_W01E19",
        image: require("../../../../../../../assets/quest-slices/w1s19.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 27, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E20",
        image: require("../../../../../../../assets/quest-slices/w1s20.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 28, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E21",
        image: require("../../../../../../../assets/quest-slices/w1s21.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 29, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E22",
        image: require("../../../../../../../assets/quest-slices/w1s22.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 30, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E23",
        image: require("../../../../../../../assets/quest-slices/w1s23.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 31, left: 283 }, { index: 32, left: 188 }, { index: 33, left: 93 }]
    },
    {
        height: 328,
        id: "MAP_SLICE_W01E24",
        image: require("../../../../../../../assets/quest-slices/w1s24.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 34, left: 188 }]
    },
    {
        height: 89,
        id: "MAP_SLICE_W01E25",
        image: require("../../../../../../../assets/quest-slices/w1s25.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 35, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E26",
        image: require("../../../../../../../assets/quest-slices/w1s26.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 36, left: 93 }, { index: 37, left: 283 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E27",
        image: require("../../../../../../../assets/quest-slices/w1s27.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 38, left: 93 }, { index: 39, left: 283 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W01E28",
        image: require("../../../../../../../assets/quest-slices/w1s28.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 40, left: 188 }]
    },
    {
        height: 364,
        id: "MAP_SLICE_W01E29",
        image: require("../../../../../../../assets/quest-slices/w1s29.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 41, left: 188 }]
    },
    {
        height: 75,
        id: "MAP_SLICE_W01E30",
        image: require("../../../../../../../assets/quest-slices/w1s30.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 42, left: 93 }, { index: 43, left: 283 }]
    },
    {
        height: 75,
        id: "MAP_SLICE_W01E31",
        image: require("../../../../../../../assets/quest-slices/w1s31.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 44, left: 188 }]
    },
    {
        height: 75,
        id: "MAP_SLICE_W01E32",
        image: require("../../../../../../../assets/quest-slices/w1s32.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 45, left: 93 }, { index: 46, left: 283 }]
    },
    {
        height: 80,
        id: "MAP_SLICE_W01E33",
        image: require("../../../../../../../assets/quest-slices/w1s33.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 47, left: 188 }]
    },
    {
        height: 172,
        id: "MAP_SLICE_W01E34",
        image: require("../../../../../../../assets/quest-slices/w1s34.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 48, left: 188 }]
    },
    {
        height: 426,
        id: "MAP_SLICE_W01E35",
        image: require("../../../../../../../assets/quest-slices/w1s35.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: []
    },
    {
        height: 196,
        id: "MAP_SLICE_W01E36",
        image: require("../../../../../../../assets/quest-slices/w1s36.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 49, left: 188 }]
    },
    {
        height: 136,
        id: "MAP_SLICE_W02E00",
        image: require("../../../../../../../assets/quest-slices/w2s0.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.LIGHT,
        slots: []
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E01",
        image: require("../../../../../../../assets/quest-slices/w2s1.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.LIGHT,
        slots: [{ index: 51, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E02",
        image: require("../../../../../../../assets/quest-slices/w2s2.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 52, left: 96 }, { index: 50, left: 188 }, { index: 53, left: 286 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E03",
        image: require("../../../../../../../assets/quest-slices/w2s3.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 54, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E04",
        image: require("../../../../../../../assets/quest-slices/w2s4.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 55, left: 188 }]
    },
    {
        height: 299,
        id: "MAP_SLICE_W02E05",
        image: require("../../../../../../../assets/quest-slices/w2s5.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 56, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E06",
        image: require("../../../../../../../assets/quest-slices/w2s6.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 57, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E07",
        image: require("../../../../../../../assets/quest-slices/w2s7.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 58, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E08",
        image: require("../../../../../../../assets/quest-slices/w2s8.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 59, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E09",
        image: require("../../../../../../../assets/quest-slices/w2s9.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 60, left: 286 }, { index: 61, left: 188 }, { index: 62, left: 96 }]
    },
    {
        height: 424,
        id: "MAP_SLICE_W02E10",
        image: require("../../../../../../../assets/quest-slices/w2s10.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 63, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E11",
        image: require("../../../../../../../assets/quest-slices/w2s11.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 65, left: 96 }, { index: 64, left: 188 }, { index: 66, left: 286 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E12",
        image: require("../../../../../../../assets/quest-slices/w2s12.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 68, left: 96 }, { index: 67, left: 286 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E13",
        image: require("../../../../../../../assets/quest-slices/w2s13.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 69, left: 188 }]
    },
    {
        height: 279,
        id: "MAP_SLICE_W02E14",
        image: require("../../../../../../../assets/quest-slices/w2s14.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 70, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E15",
        image: require("../../../../../../../assets/quest-slices/w2s15.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 71, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E16",
        image: require("../../../../../../../assets/quest-slices/w2s16.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 72, left: 286 }, { index: 73, left: 96 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E17",
        image: require("../../../../../../../assets/quest-slices/w2s17.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 74, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E18",
        image: require("../../../../../../../assets/quest-slices/w2s18.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 75, left: 286 }, { index: 76, left: 96 }]
    },
    {
        height: 335,
        id: "MAP_SLICE_W02E19",
        image: require("../../../../../../../assets/quest-slices/w2s19.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 77, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E20",
        image: require("../../../../../../../assets/quest-slices/w2s20.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 78, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E21",
        image: require("../../../../../../../assets/quest-slices/w2s21.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 79, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E22",
        image: require("../../../../../../../assets/quest-slices/w2s22.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 80, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E23",
        image: require("../../../../../../../assets/quest-slices/w2s23.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 81, left: 283 }, { index: 82, left: 188 }, { index: 83, left: 93 }]
    },
    {
        height: 327,
        id: "MAP_SLICE_W02E24",
        image: require("../../../../../../../assets/quest-slices/w2s24.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 84, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E25",
        image: require("../../../../../../../assets/quest-slices/w2s25.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 85, left: 188 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E26",
        image: require("../../../../../../../assets/quest-slices/w2s26.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 86, left: 93 }, { index: 87, left: 283 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E27",
        image: require("../../../../../../../assets/quest-slices/w2s27.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 89, left: 93 }, { index: 88, left: 283 }]
    },
    {
        height: 90,
        id: "MAP_SLICE_W02E28",
        image: require("../../../../../../../assets/quest-slices/w2s28.png"),
        isTopBarLight: false,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 90, left: 188 }]
    },
    {
        height: 364,
        id: "MAP_SLICE_W02E29",
        image: require("../../../../../../../assets/quest-slices/w2s29.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 91, left: 188 }]
    },
    {
        height: 75,
        id: "MAP_SLICE_W02E30",
        image: require("../../../../../../../assets/quest-slices/w2s30.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 92, left: 93 }, { index: 93, left: 283 }]
    },
    {
        height: 75,
        id: "MAP_SLICE_W02E31",
        image: require("../../../../../../../assets/quest-slices/w2s31.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 94, left: 188 }]
    },
    {
        height: 75,
        id: "MAP_SLICE_W02E32",
        image: require("../../../../../../../assets/quest-slices/w2s32.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 95, left: 93 }, { index: 96, left: 283 }]
    },
    {
        height: 74,
        id: "MAP_SLICE_W02E33",
        image: require("../../../../../../../assets/quest-slices/w2s33.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 97, left: 188 }]
    },
    {
        height: 145,
        id: "MAP_SLICE_W02E34",
        image: require("../../../../../../../assets/quest-slices/w2s34.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ bottom: 6, index: 98, left: 188 }]
    },
    {
        height: 498,
        id: "MAP_SLICE_W02E35",
        image: require("../../../../../../../assets/quest-slices/w2s35.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: []
    },
    {
        height: 158,
        id: "MAP_SLICE_W02E36",
        image: require("../../../../../../../assets/quest-slices/w2s36.png"),
        isTopBarLight: true,
        navBarColour: COLOURS.DARK,
        slots: [{ index: 99, left: 188 }]
    }
];

export default WorldSlices;
