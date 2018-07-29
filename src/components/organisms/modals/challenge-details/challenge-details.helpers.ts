import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";
import Assets from "./assets";
import { ChallengeType } from "./challenge-details";
import styles from "./challenge-details.styles";

export const getImage = (challengeType: ChallengeType): ImageSourcePropType => {
    switch (challengeType) {
        case "brisk walk":
            return Assets.squirrel;
        case "short stroll":
            return Assets.elephant;
        case "long walk":
            return Assets.ostrich;
        case "meditation":
            return Assets.bird;
        default:
            return null;
    }
};

export const getImageStyle = (activity: ChallengeType): StyleProp<ImageStyle> => {
    switch (activity) {
        case "meditation":
            return styles.imageMeditation;
        case "long walk":
            return styles.imageLongWalk;
        default:
            return styles.image;
    }
};
