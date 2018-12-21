import { ImageStyle, StyleSheet } from "react-native";
import { Style } from "../../../styles";
import assets from "./assets";
import { Images, IMAGES } from "./challenge-tile";

export const getImageStyle = (image: Images): ImageStyle => {
    const position = {} as { bottom?: number; left?: number; right?: number; top?: number };
    const topAdjust = Style.isShortAndroid() ? 0 : 0;

    switch (image) {
        case IMAGES.SQUIRREL:
            position.top = Style.SCALE_Y_UP_AND_DOWN(7 + topAdjust);
            position.right = Style.SCALE_UP_AND_DOWN(15);
            break;
        case IMAGES.OSTRICH:
            position.top = 0 + topAdjust;
            position.right = Style.SCALE_UP_AND_DOWN(27);
            break;
        case IMAGES.ELEPHANT:
            position.top = Style.SCALE_Y_UP_AND_DOWN(7 + topAdjust);
            position.right = Style.SCALE_UP_AND_DOWN(9);
            break;
        case IMAGES.BIRD:
            position.top = Style.SCALE_Y_UP_AND_DOWN(17 + topAdjust);
            position.right = Style.SCALE_UP_AND_DOWN(10);
            break;
        case IMAGES.OTTER:
            position.bottom = 0;
            position.right = 0;
            break;
        case IMAGES.WHALE:
            position.bottom = 0;
            position.right = Style.SCALE_UP_AND_DOWN(10);
            break;
        case IMAGES.DOLPHIN:
            position.bottom = 0;
            position.right = Style.SCALE_UP_AND_DOWN(5);
            break;
        case IMAGES.TORTOISE:
            position.bottom = 0;
            position.right = 0;
            break;
        default:
            position.top = 0;
            position.right = 0;
    }
    return StyleSheet.flatten([
        {
            position: "absolute",
            ...position
        } as ImageStyle
    ]);
};

export const getImage = (image: Images) => {
    switch (image) {
        case IMAGES.SQUIRREL:
            return assets.squirrel;
        case IMAGES.ELEPHANT:
            return assets.elephant;
        case IMAGES.OSTRICH:
            return assets.ostrich;
        case IMAGES.BIRD:
            return assets.bird;
        case IMAGES.OTTER:
            return assets.otter;
        case IMAGES.WHALE:
            return assets.whale;
        case IMAGES.DOLPHIN:
            return assets.dolphin;
        case IMAGES.TORTOISE:
            return assets.tortoise;
        default:
            return null;
    }
};
