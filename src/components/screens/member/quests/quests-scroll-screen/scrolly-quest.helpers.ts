import { IScrollQuestProps } from "./scrolly-quest";

export function shouldScrollyQuestUpdate(currentProps: IScrollQuestProps, nextProps: IScrollQuestProps) {
    return (
        currentProps.currentLevel !== nextProps.currentLevel ||
        currentProps.initialScrollIndex !== nextProps.initialScrollIndex ||
        currentProps.data.length !== nextProps.data.length ||
        currentProps.levels.length !== nextProps.levels.length ||
        currentProps.offsets.length !== nextProps.offsets.length ||
        (!!(nextProps.levels[nextProps.currentLevel] && currentProps.levels[currentProps.currentLevel]) &&
            (nextProps.levels[nextProps.currentLevel].isActive !==
                currentProps.levels[currentProps.currentLevel].isActive ||
                nextProps.levels[nextProps.currentLevel].isDone !==
                    currentProps.levels[currentProps.currentLevel].isDone ||
                nextProps.levels[nextProps.currentLevel].isNext !==
                    currentProps.levels[currentProps.currentLevel].isNext ||
                nextProps.levels[nextProps.currentLevel].nextAvailableAt !==
                    currentProps.levels[currentProps.currentLevel].nextAvailableAt ||
                nextProps.levels[nextProps.currentLevel].rating !==
                    currentProps.levels[currentProps.currentLevel].rating))
    );
}
