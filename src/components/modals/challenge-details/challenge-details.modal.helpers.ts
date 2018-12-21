import assets from "./assets/";
import styles from "./challenge-details.modal.styles";

const BRISK_WALK = [
    { source: assets.squirrel, style: styles.image },
    { source: assets.otter, style: styles.image }
];
const SHORT_STROLL = [
    { source: assets.elephant, style: styles.image },
    { source: assets.tortoise, style: styles.image }
];
const LONG_WALK = [
    { source: assets.ostrich, style: styles.imageLongWalk },
    { source: assets.whale, style: styles.imageLongWalk }
];
const MEDITATION = [
    { source: assets.bird, style: styles.image },
    { source: assets.dolphin, style: styles.image }
];

export const getImageAndStyle = (challengeType: string, currentWorld = 0) => {
    switch (challengeType) {
        case "brisk walk":
            return BRISK_WALK[currentWorld];
        case "day walk":
        case "short stroll":
            return SHORT_STROLL[currentWorld];
        case "long walk":
            return LONG_WALK[currentWorld];
        case "meditation":
            return MEDITATION[currentWorld];
        default:
            return { source: null, style: styles.image };
    }
};
