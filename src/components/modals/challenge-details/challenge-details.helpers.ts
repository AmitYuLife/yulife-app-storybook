import Assets from "./assets/";
import styles from "./challenge-details.styles";

export const getImage = (challengeType: string) => {
    switch (challengeType) {
        case "brisk walk":
            return Assets.squirrel;
        case "day walk":
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

export const getImageStyle = (challengeType: string) => {
    switch (challengeType) {
        case "meditation":
            return styles.imageMeditation;
        case "long walk":
            return styles.imageLongWalk;
        default:
            return styles.image;
    }
};
