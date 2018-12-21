import { GestureResponderEvent, PanResponderGestureState, Platform } from "react-native";
import { Style } from "../../../../../styles";
import { COLOURS } from "../../../../molecules";
import QuestScreen from "./quests-screen";

const SCREENS_PER_WORLD = 8;
const LEVELS_PER_WORLD = 50;
const LEVELS_PER_EPISODE = 7;

export const checkIfIsLockedLastLevel = (currentLevel: number) =>
    currentLevel % LEVELS_PER_WORLD !== 0 &&
    currentLevel >= Math.floor(currentLevel / LEVELS_PER_WORLD) * LEVELS_PER_WORLD;

export const checkIfIsLastWorld = (activeWorldNumber: number, currentLevel: number) =>
    Math.floor((currentLevel - 1) / LEVELS_PER_WORLD) === activeWorldNumber;

export const calculateIndices = (currentLevel: number, isLastWorld: boolean) => {
    return Array.from({ length: 8 }).map((_, i) => {
        const episodeHeight = i * Style.DEVICE_HEIGHT;
        const lockHeight = Style.DEVICE_HEIGHT / 1.5;

        if (!i && checkIfIsLockedLastLevel(currentLevel) && isLastWorld) {
            return lockHeight;
        }

        return episodeHeight;
    });
};

export const calculateIndexOfLevel = (currentLevel: number) => {
    const level = currentLevel % LEVELS_PER_WORLD;

    if (level === 0) {
        return 0;
    }

    return SCREENS_PER_WORLD - Math.ceil(level / 7);
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

export const questScreenUI = [
    [
        // world 1
        { isTopBarLight: false, navBarColour: COLOURS.DARK },   // ep. 8
        { isTopBarLight: false, navBarColour: COLOURS.DARK },   // ep. 7
        { isTopBarLight: false, navBarColour: COLOURS.LIGHT },  // ep. 6
        { isTopBarLight: false, navBarColour: COLOURS.DARK },   // ep. 5
        { isTopBarLight: false, navBarColour: COLOURS.DARK },   // ep. 4
        { isTopBarLight: false, navBarColour: COLOURS.DARK },   // ep. 3
        { isTopBarLight: false, navBarColour: COLOURS.DARK },   // ep. 2
        { isTopBarLight: false, navBarColour: COLOURS.LIGHT }  // ep. 1
    ],
    [
        // world 2
        { isTopBarLight: true, navBarColour: COLOURS.BLUE },   // ep. 8
        { isTopBarLight: false, navBarColour: COLOURS.LIGHT },  // ep. 7
        { isTopBarLight: true, navBarColour: COLOURS.LIGHT },   // ep. 6
        { isTopBarLight: true, navBarColour: COLOURS.LIGHT },    // ep. 5
        { isTopBarLight: true, navBarColour: COLOURS.BLUE },   // ep. 4
        { isTopBarLight: false, navBarColour: COLOURS.BLUE },  // ep. 3
        { isTopBarLight: false, navBarColour: COLOURS.LIGHT },  // ep. 2
        { isTopBarLight: true, navBarColour: COLOURS.LIGHT }   // ep. 1
    ]
];
