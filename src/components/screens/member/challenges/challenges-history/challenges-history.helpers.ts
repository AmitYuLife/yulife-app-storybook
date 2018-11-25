import { Style } from "../../../../../styles";

export const getImage = (challengeType: string) => {
    switch (challengeType) {
        case "brisk walk":
            return require("../../../../../../assets/challenge-tile/squirrel.png");
        case "short stroll":
            return require("../../../../../../assets/challenge-tile/elephant.png");
        case "long walk":
            return require("../../../../../../assets/challenge-tile/ostrich.png");
        case "meditation":
            return require("../../../../../../assets/challenge-tile/bird.png");
        default:
            return null;
    }
};

export const getImageStyle = (challengeType: string) => {
    switch (challengeType) {
        case "brisk walk":
            return { position: "absolute", left: Style.SCALE_UP_AND_DOWN(-16), top: 0, right: 0, bottom: 0 };
        case "short stroll":
            return {
                bottom: 0,
                position: "absolute",
                right: Style.SCALE_UP_AND_DOWN(-36),
                top: Style.SCALE_Y_UP_AND_DOWN(60)
            };
        case "long walk":
            return { position: "absolute", left: 0, top: Style.SCALE_Y_UP_AND_DOWN(140), right: 0, bottom: 0 };
        case "meditation":
            return {
                bottom: 0,
                position: "absolute",
                right: Style.SCALE_UP_AND_DOWN(-24),
                top: Style.SCALE_Y_UP_AND_DOWN(220)
            };
        default:
            return null;
    }
};

export const getImageWidth = (challengeType: string) => {
    switch (challengeType) {
        case "brisk walk":
            return Style.SCALE_UP_AND_DOWN(106);
        case "short stroll":
            return Style.SCALE_UP_AND_DOWN(130);
        case "long walk":
            return Style.SCALE_UP_AND_DOWN(92);
        case "meditation":
            return Style.SCALE_UP_AND_DOWN(92);
        default:
            return 0;
    }
};
