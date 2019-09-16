import { ImageStyle, StyleSheet } from "react-native";
import { Style } from "../../../styles";
import assets from "./assets";
import { Images, IMAGES } from "./challenge-tile.types";

export const getLockedImageStyle = (image: Images): ImageStyle => {
    const position = {} as { bottom?: number; left?: number; right?: number; top?: number };
    switch (image) {
        case IMAGES.WHITE_BIGHORN_SHEEP:
        case IMAGES.OWL:
        case IMAGES.BIRD:
        case IMAGES.DOLPHIN:
        case IMAGES.TORTOISE:
        case IMAGES.BIGHORN_SHEEP:
            position.right = 0;
            position.bottom = 0;
            break;
        case IMAGES.WOLF:
        case IMAGES.DEER:
        case IMAGES.SQUIRREL:
        case IMAGES.RABBIT:
        case IMAGES.WHALE:
        case IMAGES.OTTER:
            position.left = 0;
            position.bottom = 0;
            break;
        default:
            position.bottom = 0;
    }
    return StyleSheet.flatten([
        {
            position: "absolute",
            ...position
        } as ImageStyle
    ]);
};

export const getImageStyle = (image: Images): ImageStyle => {
    const position = {} as { bottom?: number; left?: number; right?: number; top?: number };
    const dimensions = {} as { height?: number; width?: number };
    switch (image) {
        case IMAGES.SQUIRREL:
            position.bottom = 0;
            position.left = 0;
            break;
        case IMAGES.RABBIT:
            position.bottom = 0;
            position.left = 0;
            dimensions.height = 119;
            dimensions.width = 101;
            break;
        case IMAGES.SNAIL:
            position.bottom = 0;
            position.right = Style.SCALE_UP_AND_DOWN(5);
            break;
        case IMAGES.BIRD:
            position.bottom = 0;
            position.right = 0;
            dimensions.width = 143;
            dimensions.height = 99;
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
        case IMAGES.BIGHORN_SHEEP:
            position.bottom = 0;
            position.right = 0;
            break;
        case IMAGES.CAMEL:
            position.bottom = 0;
            position.right = 0;
            break;
        case IMAGES.MEERKAT:
            position.bottom = 0;
            position.right = Style.SCALE_UP_AND_DOWN(15);
            break;
        case IMAGES.DESERT_FOX:
            position.bottom = 0;
            position.right = 0;
            break;
        case IMAGES.WOLF:
            const androidMultiplier = Style.isShortAndroid() || Style.isXShortAndroid() ? 0.8 : 1;
            position.left = 0;
            position.bottom = 0;
            dimensions.height = Style.SCALE_UP_AND_DOWN(134 * androidMultiplier);
            dimensions.width = Style.SCALE_UP_AND_DOWN(108 * androidMultiplier);
            break;
        case IMAGES.DEER:
            position.left = 0;
            position.bottom = 0;
            break;
        case IMAGES.WHITE_BIGHORN_SHEEP:
            position.right = 0;
            position.bottom = 0;
            break;
        case IMAGES.OWL:
            position.right = 0;
            position.bottom = 0;
            break;
        default:
            position.top = 0;
            position.right = 0;
    }
    return StyleSheet.flatten([
        {
            position: "absolute",
            ...position,
            ...dimensions
        } as ImageStyle
    ]);
};

export const getImage = (image: Images) => {
    switch (image) {
        case IMAGES.SQUIRREL:
            return assets.squirrel;
        case IMAGES.SNAIL:
            return assets.snail;
        case IMAGES.RABBIT:
            return assets.rabbit;
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
        case IMAGES.BIGHORN_SHEEP:
            return assets.bighornSheep;
        case IMAGES.CAMEL:
            return assets.camel;
        case IMAGES.MEERKAT:
            return assets.meerkat;
        case IMAGES.DESERT_FOX:
            return assets.desertFox;
        case IMAGES.DEER:
            return assets.deer;
        case IMAGES.OWL:
            return assets.owl;
        case IMAGES.WHITE_BIGHORN_SHEEP:
            return assets.whiteBighornSheep;
        case IMAGES.WOLF:
            return assets.wolf;
        default:
            return null;
    }
};
