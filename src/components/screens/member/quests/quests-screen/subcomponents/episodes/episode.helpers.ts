import { DoubleLock, Lock, Treasure } from "../common";

export const getLevelFill = (level: number) => {
    switch (level) {
        case 5:
            return "rgb(253,233,59)";
        default:
            return "rgb(255,255,255)";
    }
};

interface IGetLevelLockIcon {
    currentLevel: number;
    episode: number;
    isChest: boolean;
    level: number;
    worldNumber: number;
}

export const getLevelLockIcon = ({
    currentLevel,
    episode,
    isChest,
    level,
    worldNumber: world
}: IGetLevelLockIcon) => {
    switch (true) {
        case isChest:
            return Treasure;
        case world === 0 && episode === 5 && level === 5 && currentLevel < 18:
        case world === 0 && episode === 2 && level === 5 && currentLevel < 39:
        case world === 0 && episode === 1 && level === 2 && currentLevel < 44:
        case world === 0 && episode === 1 && level === 5 && currentLevel < 47:
        case world === 1 && episode === 7 && level === 4 && currentLevel < 54:
        case world === 1 && episode === 5 && level === 5 && currentLevel < 68:
        case world === 1 && episode === 2 && level === 5 && currentLevel < 89:
        case world === 1 && episode === 1 && level === 2 && currentLevel < 94:
        case world === 1 && episode === 1 && level === 5 && currentLevel < 97:
            return DoubleLock;
        default:
            return Lock;
    }
};
