import { GestureResponderEvent, PanResponderGestureState, Platform } from "react-native";
import QuestScreen from "./quests-screen";

export const handlePanResponderGrant = (component: QuestScreen) => () =>
    (component.activeIndexOnPanResponderGrant = component.state.activeIndex);

export const handlePanResponderMove = (component: QuestScreen) => (
    _: GestureResponderEvent,
    { dy, vy }: PanResponderGestureState
): null => {
    const isBlockingFurtherSwipes =
        component.activeIndexOnPanResponderGrant !== component.state.activeIndex || component.state.isSwipeDisabled;

    if (isBlockingFurtherSwipes) {
        return null;
    }

    const distance = Platform.OS === "android" ? 60 : 10;
    const swipeVelocityThreshold = 0.4;
    const hasSwipedUp = dy < -distance && vy < swipeVelocityThreshold * -1;
    // const hasSwipedRight = dx > distance && vx > swipeVelocityThreshold;
    const hasSwipedDown = dy > distance && vy > swipeVelocityThreshold;
    // const hasSwipedLeft = dx < -distance && vx < swipeVelocityThreshold * -1;

    if (hasSwipedUp || hasSwipedDown) {
        component.handleSwipe(hasSwipedUp ? "up" : "down");
    }
    // else if (hasSwipedRight) {
    //     component.props.labels[0].onPress();
    // } else if (hasSwipedLeft) {
    //     component.props.labels[2].onPress();
    // }

    return null;
};

export const onStartShouldSetPanResponder = () => Platform.OS === "ios";
