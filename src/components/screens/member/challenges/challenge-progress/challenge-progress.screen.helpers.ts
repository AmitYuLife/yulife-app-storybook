import { Style } from "../../../../../styles";
import Assets from "./assets";
import { ChallengeType } from "./challenge-progress.screen";

export const getBackgroundImage = (challengeType: ChallengeType) => {
    switch (challengeType) {
        case "brisk walk":
            return Assets.briskWalk;
        case "short stroll":
            return Assets.shortStroll;
        case "meditation":
            return Assets.meditation;
        case "long walk":
            return Assets.longWalk;
        default:
            return null;
    }
};

export const getBackgroundImageHeight = (challengeType: ChallengeType) => {
    switch (challengeType) {
        case "brisk walk":
        case "short stroll":
        case "meditation":
            return Style.SCALE_UP_AND_DOWN(450);
        case "long walk":
            return Style.SCALE_UP_AND_DOWN(500);
        default:
            return "auto";
    }
};
