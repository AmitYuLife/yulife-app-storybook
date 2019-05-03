import { StyleSheet } from "react-native";
import { CenteredScreenImages } from "./centred-screen";
import styles from "./centred-screen.styles";

export const getImageAndStyle = (image: CenteredScreenImages) => {
    switch (image) {
        case "forest":
            return {
                source: require("../../../../assets/centred-screen/forestBackground.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageForest])
            };
        case "large_forest":
            return {
                source: require("../../../../assets/centred-screen/largeForest.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "gray_forest":
            return {
                source: require("../../../../assets/centred-screen/gray-forest.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "challenge_failed_forest":
            return {
                source: require("../../../../assets/centred-screen/challenge_failed_forest.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "ocean":
            return {
                source: require("../../../../assets/centred-screen/ocean.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "gray_ocean":
            return {
                source: require("../../../../assets/centred-screen/gray-ocean.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "challenge_failed_ocean":
            return {
                source: require("../../../../assets/centred-screen/challenge_failed_ocean.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "desert":
            return {
                source: require("../../../../assets/centred-screen/desert.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "gray_desert":
            return {
                source: require("../../../../assets/centred-screen/gray_desert.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "challenge_failed_desert":
            return {
                source: require("../../../../assets/centred-screen/challenge_failed_desert.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "mountain":
            return {
                source: require("../../../../assets/centred-screen/mountain.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "gray_mountain":
            return {
                source: require("../../../../assets/centred-screen/gray_mountain.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        case "challenge_failed_mountain":
            return {
                source: require("../../../../assets/centred-screen/challenge_failed_mountain.png"),
                style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest])
            };
        default:
            return { source: null, style: null };
    }
};
