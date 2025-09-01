import React, { useMemo } from "react";
import { View, Animated, ViewStyle } from "react-native";
import { Style, Colours, StyleSheet } from "@styles";
import { noop } from "@utils";
import TouchableOpacityWithDelay from "../touchable-opacity-delay/touchable-opacity-delay";
import { isRTL } from "@locale";

const CIRCLE_SIZE = Style.adjust(24);
const SWITCH_WIDTH = Style.adjust(48);
const TRANSFORM_X = Style.adjust(28);
const ANIMATION_SPEED = 300;

interface Props {
  testID?: string;
  value: boolean;
  onPress: () => void;
  disabled?: boolean;
  wrapperStyles?: ViewStyle;
  styles?: ViewStyle;
}

function _Switch(props: Props) {
  const { value, onPress, disabled = false, testID, wrapperStyles, styles: componentStyles } = props;
  const translateX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const toValue = isRTL ? TRANSFORM_X - SWITCH_WIDTH : SWITCH_WIDTH - TRANSFORM_X;
    const animation = Animated.timing(translateX, {
      toValue: value ? toValue : 0,
      duration: ANIMATION_SPEED,
      useNativeDriver: true,
    });

    animation.start();

    return animation.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const wrapperStyle = useMemo(() => [styles.wrapper, wrapperStyles], [wrapperStyles]);
  const componentStyle = useMemo(
    () => [styles.innerWrapper, disabled ? styles.disabled : value ? styles.on : styles.off, componentStyles],
    [componentStyles, disabled, value]
  );

  return (
    <View style={wrapperStyle}>
      <TouchableOpacityWithDelay
        testID={testID}
        style={componentStyle}
        activeOpacity={0.8}
        onPress={disabled ? noop : onPress}
      >
        <Animated.View style={[styles.circle, { transform: [{ translateX }] }]} />
      </TouchableOpacityWithDelay>
    </View>
  );
}

const Switch = React.memo(_Switch);

export default Switch;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerWrapper: {
    justifyContent: "center",
    width: SWITCH_WIDTH,
    borderRadius: Style.adjust(20),
    padding: Style.adjust(14),
  },
  on: {
    backgroundColor: Colours.heavyPink,
  },
  off: {
    backgroundColor: Colours.checkMilestone.unfilledCircle,
  },
  disabled: {
    backgroundColor: Colours.slider.inactive,
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    margin: Style.adjust(2),
    position: "absolute",
    backgroundColor: Colours.neutral.white,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});
