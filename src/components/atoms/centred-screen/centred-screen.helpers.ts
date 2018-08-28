import { StyleSheet } from "react-native";
import { IMAGES } from "./centred-screen";
import styles from "./centred-screen.styles";

export const getImage = (image: string) => {
    switch (image) {
        case IMAGES.FOREST:
            return require("./assets/forestBackground.png");
        case IMAGES.LARGE_FOREST:
            return require("./assets/largeForest.png");
        case IMAGES.MOUNTAINS:
            return require("./assets/mountains.png");
        default:
            return null;
    }
};

export const getImageStyle = (image: string) => {
    switch (image) {
        case IMAGES.FOREST:
            return StyleSheet.flatten([
                styles.imageBase,
                styles.imageForest
            ]);
        case IMAGES.LARGE_FOREST:
            return StyleSheet.flatten([
                styles.imageBase,
                styles.imageLargeForest
            ]);
        case IMAGES.MOUNTAINS:
            return StyleSheet.flatten([
                styles.imageBase,
                styles.imageLargeForest
            ]);
        default:
            return null;
    }
};
