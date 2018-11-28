import { GestureResponderEvent, PanResponderGestureState, Platform } from "react-native";
import { Style } from "../../../../../styles";
import QuestScreen from "./quests-screen";

const SCREENS_PER_WORLD = 8;
const LEVELS_PER_WORLD = 50;
const LEVELS_PER_EPISODE = 7;

export const isLockedLastLevelFunc = (currentLevel: number) =>
    currentLevel % LEVELS_PER_WORLD !== 0 &&
    currentLevel >= Math.floor(currentLevel / LEVELS_PER_WORLD) * LEVELS_PER_WORLD;

export const calculateLastWorldIndex = (currentLevel: number) => Math.floor(currentLevel / LEVELS_PER_WORLD);

export const calculateIndices = (currentLevel: number, isLastWorld: boolean) => {
    return Array.from({ length: 8 }).map((_, i) => {
        const episodeHeight = i * Style.DEVICE_HEIGHT;
        const lockHeight = Style.DEVICE_HEIGHT / 1.5;

        if (!i && isLockedLastLevelFunc(currentLevel) && isLastWorld) {
            return lockHeight;
        }

        return episodeHeight;
    });
};

export const calculateSlicing = (activeWorldNumber: number, curentIndex: number) => {
    const adjustment = activeWorldNumber * LEVELS_PER_WORLD;

    if (curentIndex % SCREENS_PER_WORLD === 0) {
        return {
            sliceFrom: (activeWorldNumber + 1) * LEVELS_PER_WORLD - 1,
            sliceTo: (activeWorldNumber + 1) * LEVELS_PER_WORLD
        };
    }

    return {
        sliceFrom: (SCREENS_PER_WORLD - curentIndex - 1) * LEVELS_PER_EPISODE + adjustment,
        sliceTo: (SCREENS_PER_WORLD - curentIndex) * LEVELS_PER_EPISODE + adjustment
    };
};

export const handlePanResponderGrant = (component: QuestScreen) => () =>
    (component.activeIndexOnPanResponderGrant = component.state.activeIndex);

export const handlePanResponderMove = (component: QuestScreen) => (
    _: GestureResponderEvent,
    { vy: verticalSwipeVelocity }: PanResponderGestureState
): null => {
    const isBlockingFurtherSwipes =
        component.activeIndexOnPanResponderGrant !== component.state.activeIndex || component.state.isSwipeDisabled;

    if (isBlockingFurtherSwipes) {
        return null;
    }

    const verticalSwipeVelocityThreshold = 0.4;
    const hasSwipedUp = verticalSwipeVelocity < verticalSwipeVelocityThreshold * -1;
    const hasSwipedDown = verticalSwipeVelocity > verticalSwipeVelocityThreshold;

    if (hasSwipedUp || hasSwipedDown) {
        component.handleSwipe(hasSwipedUp ? "up" : "down");
    }

    return null;
};

export const onStartShouldSetPanResponder = () => Platform.OS === "ios";
