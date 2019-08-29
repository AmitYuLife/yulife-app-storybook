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
    getOffsets({ ios: 610, iphoneX: 550, android: 590, highScaledPixelAndroid: 640 }),
    getOffsets({ ios: 1330, iphoneX: 1280, android: 1310 }),
    getOffsets({ ios: 2020, iphoneX: 2005, highScaledPixelAndroid: 2030, android: 2026 }),
    getOffsets({ ios: 2800, iphoneX: 2720, android: 2780 }),
    getOffsets({ ios: 3400, iphoneX: 3342, android: 3410 }),
    getOffsets({ ios: 4040, iphoneX: 4020, highScaledPixelAndroid: 4090, android: 4035 })
];

const world1WithUnity = [
    ...world1,
    getOffsets({ ios: 4740, iphoneX: 4723, android: 4720, highScaledPixelAndroid: 4750 })
];

const world2 = [
    ...world1WithUnity,
    getOffsets({ ios: 5755, iphoneX: 5670, android: 5745 }),
    getOffsets({ ios: 6390, iphoneX: 6338, android: 6370 }),
    getOffsets({ ios: 7020, iphoneX: 6950, android: 7000 }),
    getOffsets({ ios: 7700, iphoneX: 7650, android: 7680, highScaledPixelAndroid: 7693 }),
    getOffsets({ ios: 8330, iphoneX: 8270, android: 8310, highScaledPixelAndroid: 8325 }),
    getOffsets({ ios: 8950, iphoneX: 8890, android: 8930, highScaledPixelAndroid: 8955 }),
    getOffsets({ ios: 9630, iphoneX: 9570, android: 9610, highScaledPixelAndroid: 9665 })
];

const world2WithUnity = [...world2, getOffsets({ ios: 10330, iphoneX: 10220, android: 10310 })];

const world3 = [
    ...world2WithUnity,
    getOffsets({ ios: 11330, iphoneX: 11270, android: 11310 }),
    getOffsets({ ios: 11980, iphoneX: 11950, android: 11970 }),
    getOffsets({ ios: 12630, iphoneX: 12603, android: 12630, highScaledPixelAndroid: 12665 }),
    getOffsets({ ios: 13340, iphoneX: 13328, android: 13340, highScaledPixelAndroid: 13350 }),
    getOffsets({ ios: 14040, iphoneX: 13990, android: 14020 }),
    getOffsets({ ios: 14680, iphoneX: 14584, android: 14660 }),
    getOffsets({ ios: 15307, iphoneX: 15250, android: 15280, highScaledPixelAndroid: 15324 })
];

const world3WithUnity = [...world3, getOffsets({ ios: 15920, iphoneX: 15877, android: 15900 })];

const world4 = [
    ...world3WithUnity,
    getOffsets({ ios: 16918, iphoneX: 16877, android: 16904, lowScaleTallAndroid: 16914 }),
    getOffsets({ ios: 17582, android: 17575, highScaledPixelAndroid: 17600, lowScaleTallAndroid: 17600 }),
    getOffsets({ ios: 18340, iphoneX: 18280, android: 18320, highScaledPixelAndroid: 18340 }),
    getOffsets({ ios: 19035, iphoneX: 18945, android: 19015 }),
    getOffsets({ ios: 19645, iphoneX: 19590, android: 19650, highScaledPixelAndroid: 19690 }),
    getOffsets({ ios: 20330, iphoneX: 20260, android: 20310 }),
    getOffsets({ ios: 21144, iphoneX: 21070, android: 21138, highScaledPixelAndroid: 21190 }),
    getOffsets({ ios: 22040, android: 22000 })
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
