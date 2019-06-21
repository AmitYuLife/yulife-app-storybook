import assets from "./assets/";
import styles from "./challenge-details.styles";

const BRISK_WALK = [
    { source: assets.squirrel, style: styles.image },
    { source: assets.otter, style: styles.image },
    { source: assets.meerkat, style: styles.image },
    { source: assets.wolf, style: styles.image }
];
const SHORT_STROLL = [
    { source: assets.snail, style: styles.image },
    { source: assets.tortoise, style: styles.image },
    { source: assets.bighornSheep, style: styles.image },
    { source: assets.whiteBighornSheep, style: styles.image }
];
const LONG_WALK = [
    { source: assets.rabbit, style: styles.imageLongWalk },
    { source: assets.whale, style: styles.imageLongWalk },
    { source: assets.desertFox, style: styles.imageLongWalk },
    { source: assets.deer, style: styles.imageLongWalk }
];
const MEDITATION = [
    { source: assets.bird, style: styles.image },
    { source: assets.dolphin, style: styles.image },
    { source: assets.camel, style: styles.image },
    { source: assets.owl, style: styles.image }
];

export const getImageAndStyle = (challengeType: string, currentWorld = 0) => {
    switch (challengeType) {
        case "brisk walk":
            return BRISK_WALK[currentWorld] || BRISK_WALK[0];
        case "day walk":
        case "short stroll":
            return SHORT_STROLL[currentWorld] || SHORT_STROLL[0];
        case "long walk":
            return LONG_WALK[currentWorld] || LONG_WALK[0];
        case "meditation":
            return MEDITATION[currentWorld] || MEDITATION[0];
        default:
            return { source: null, style: styles.image };
    }
};

export function getCardBackgroundColor(currentWorld: number) {
    switch (currentWorld) {
        case 3:
            return "rgb(255, 239, 239)";
        case 2:
            return "rgb(255, 253, 231)";
        case 0:
            return "rgb(235, 255, 244)";
        default:
            return "rgb(237, 251, 248)";
    }
}

export const data = {
    ctaLabel: "take challenge",
    footer: "",
    loading: "loading...",
    setUpLabel: "set up tutorial"
};
