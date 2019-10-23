import { Style } from "@styles/index";
import { Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

interface IOffsets {
    iphoneX?: number;
    ios: number;
    android: number;
    highScaledPixelAndroid?: number;
    lowScaleTallAndroid?: number;
}

function getOffsets({ iphoneX, ios, android, highScaledPixelAndroid, lowScaleTallAndroid }: IOffsets) {
    if (iphoneX && isIphoneX()) {
        return Style.SCALE_UP_AND_DOWN(iphoneX);
    } else if (Platform.OS === "ios") {
        return Style.SCALE_UP_AND_DOWN(ios);
    } else if (lowScaleTallAndroid && Style.isTallAndLowScaledPixelAndroid()) {
        return Style.SCALE_UP_AND_DOWN(lowScaleTallAndroid);
    } else if (
        highScaledPixelAndroid &&
        (Style.isShortToMediumAndroidAndHighScaledPixel() || Style.isShortAndLowScaledPixelAndroid())
    ) {
        return Style.SCALE_UP_AND_DOWN(highScaledPixelAndroid);
    }
    return Style.SCALE_UP_AND_DOWN(android);
}

const world1 = [
    0,
    getOffsets({ ios: 610, iphoneX: 660, android: 590, highScaledPixelAndroid: 640 }),
    getOffsets({ ios: 1330, iphoneX: 1380, android: 1310 }),
    getOffsets({ ios: 2020, iphoneX: 2090, highScaledPixelAndroid: 2030, android: 2026 }),
    getOffsets({ ios: 2800, iphoneX: 2810, android: 2780 }),
    getOffsets({ ios: 3400, iphoneX: 3432, android: 3410 }),
    getOffsets({ ios: 4040, iphoneX: 4100, highScaledPixelAndroid: 4090, android: 4035 })
];

const world1WithUnity = [
    ...world1,
    getOffsets({ ios: 4740, iphoneX: 4793, android: 4720, highScaledPixelAndroid: 4750 })
];

const world2 = [
    ...world1WithUnity,
    getOffsets({ ios: 5755, iphoneX: 5770, android: 5745 }),
    getOffsets({ ios: 6390, iphoneX: 6408, android: 6370 }),
    getOffsets({ ios: 7020, iphoneX: 7050, android: 7000 }),
    getOffsets({ ios: 7700, iphoneX: 7720, android: 7680, highScaledPixelAndroid: 7693 }),
    getOffsets({ ios: 8330, iphoneX: 8350, android: 8310, highScaledPixelAndroid: 8325 }),
    getOffsets({ ios: 8950, iphoneX: 9060, android: 8930, highScaledPixelAndroid: 8955 }),
    getOffsets({ ios: 9630, iphoneX: 9740, android: 9610, highScaledPixelAndroid: 9665 })
];

const world2WithUnity = [...world2, getOffsets({ ios: 10330, iphoneX: 10395, android: 10310 })];

const world3 = [
    ...world2WithUnity,
    getOffsets({ ios: 11330, iphoneX: 11420, android: 11310 }),
    getOffsets({ ios: 11980, iphoneX: 12110, android: 11970 }),
    getOffsets({ ios: 12630, iphoneX: 12773, android: 12630, highScaledPixelAndroid: 12665 }),
    getOffsets({ ios: 13340, iphoneX: 13508, android: 13340, highScaledPixelAndroid: 13350 }),
    getOffsets({ ios: 14040, iphoneX: 14160, android: 14020 }),
    getOffsets({ ios: 14680, iphoneX: 14744, android: 14660 }),
    getOffsets({ ios: 15307, iphoneX: 15400, android: 15280, highScaledPixelAndroid: 15324 })
];

const world3WithUnity = [...world3, getOffsets({ ios: 15920, iphoneX: 16077, android: 15900 })];

const world4 = [
    ...world3WithUnity,
    getOffsets({ ios: 16918, iphoneX: 17047, android: 16904, lowScaleTallAndroid: 16914 }),
    getOffsets({
        ios: 17582,
        iphoneX: 17730,
        android: 17575,
        highScaledPixelAndroid: 17600,
        lowScaleTallAndroid: 17600
    }),
    getOffsets({ ios: 18340, iphoneX: 18420, android: 18320, highScaledPixelAndroid: 18340 }),
    getOffsets({ ios: 19035, iphoneX: 19085, android: 19015 }),
    getOffsets({ ios: 19645, iphoneX: 19766, android: 19650, highScaledPixelAndroid: 19690 }),
    getOffsets({ ios: 20330, iphoneX: 20400, android: 20310 }),
    getOffsets({ ios: 21144, iphoneX: 21220, android: 21138, highScaledPixelAndroid: 21190 }),
    getOffsets({ ios: 22040, iphoneX: 22090, android: 22000 })
];

export default {
    withUnity: {
        0: world1WithUnity,
        1: world2WithUnity,
        2: world3WithUnity,
        3: world4
    },
    withoutUnity: {
        0: world1,
        1: world2,
        2: world3,
        3: world4
    }
};
