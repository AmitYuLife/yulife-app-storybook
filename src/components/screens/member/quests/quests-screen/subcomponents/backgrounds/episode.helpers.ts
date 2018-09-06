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
    level: number;
    index: number;
    completedLevels: number;
}

export const getLevelLockIcon = ({
    level,
    index,
    completedLevels
}: IGetLevelLockIcon) => {
    const isEpisode6DoubleLock = level === 2 && index === 5 && completedLevels < 3;
    const isEpisode3DoubleLock = level === 5 && index === 5 && completedLevels < 3;
    const isEpisode7DoubleLock1 = level === 1 && index === 2 && completedLevels < 1;
    const isEpisode7DoubleLock2 = level === 1 && index === 5 && completedLevels < 4;
    const isDoubleLockCondition = isEpisode6DoubleLock
        || isEpisode3DoubleLock
        || isEpisode7DoubleLock1
        || isEpisode7DoubleLock2;
    if (index === 6) {
        return Treasure;
    } else if (isDoubleLockCondition) {
        return DoubleLock;
    } else {
        return Lock;
    }
};
