import { GestureResponderEvent, PanResponderGestureState, Platform } from "react-native";
import QuestScreen from "./quests-screen";

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
