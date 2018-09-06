import {
    GestureResponderEvent,
    PanResponderGestureState
} from "react-native";
import QuestScreen from "./quests-screen";

export const handlePanResponderGrant = (component: QuestScreen) => {
    return () => component.activeIndexOnPanResponderGrant = component.state.activeIndex;
};

export const handlePanResponderMove = (
    component: QuestScreen
) => {
    return (
        _: GestureResponderEvent,
        gestureState: PanResponderGestureState
    ): null => {
        const isBlockingFurtherSwipes =
            (component.activeIndexOnPanResponderGrant !==
                component.state.activeIndex) || component.state.isSwipeDisabled;
        if (isBlockingFurtherSwipes) {
            return null;
        }
        const horizontalSwipeVelocity = gestureState.vy;
        const horizontalSwipeVelocityThreshold = 0.4;
        const hasSwipedUp =
            horizontalSwipeVelocity <
            horizontalSwipeVelocityThreshold * -1;
        const hasSwipedDown =
            horizontalSwipeVelocity >
            horizontalSwipeVelocityThreshold;
        if (hasSwipedUp || hasSwipedDown) {
            component.handleSwipe(hasSwipedUp ? "up" : "down");
        }
        return null;
    };
};
