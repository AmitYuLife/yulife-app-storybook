import { IScrollQuestProps } from "./scrolly-quest";

export function shouldScrollyQuestUpdate(currentProps: IScrollQuestProps, nextProps: IScrollQuestProps) {
    const currentCurrentLevel = currentProps.levels[currentProps.currentLevel - 1];
    const nextCurrentLevel = nextProps.levels[nextProps.currentLevel - 1];
    return (
        currentProps.currentLevel !== nextProps.currentLevel ||
        currentProps.activeLevel !== nextProps.activeLevel ||
        currentProps.initialScrollIndex !== nextProps.initialScrollIndex ||
        currentProps.data.length !== nextProps.data.length ||
        currentProps.levels.length !== nextProps.levels.length ||
        currentProps.offsets.length !== nextProps.offsets.length ||
        (!!(nextCurrentLevel && currentCurrentLevel) &&
            (nextCurrentLevel.isActive !== currentCurrentLevel.isActive ||
                nextCurrentLevel.isDone !== currentCurrentLevel.isDone ||
                nextCurrentLevel.isNext !== currentCurrentLevel.isNext ||
                nextCurrentLevel.nextAvailableAt !== currentCurrentLevel.nextAvailableAt ||
                nextCurrentLevel.rating !== currentCurrentLevel.rating))
    );
}
