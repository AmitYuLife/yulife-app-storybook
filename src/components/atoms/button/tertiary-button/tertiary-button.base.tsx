import React, { ComponentProps } from "react";
import { Animated, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import Text from "@atoms/text/text";
import { Style } from "@styles";
import { PressableWithDelay } from "@components/molecules";
import Svg from "react-native-svg";
import { getIcon, BUTTON_ICON } from "./tertiary-button.helpers";
import { styles } from "./tertiary-button.styles";

interface IProps {
  disabled?: boolean;
  testID?: string;
  onPress: () => void;
  title: string;
  delay?: number;
  rightIcon?: BUTTON_ICON;
  leftIcon?: BUTTON_ICON;
  height?: number;
}

export function TertiaryButtonBase(props: IProps) {
  const { onPress, delay, leftIcon, rightIcon, height } = props;
  const { handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress, delay });

  return (
    <View style={styles.flex}>
      <Main
        testID={props.testID}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={props.disabled}
        onPress={handlePress}
        title={props.title}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        height={height}
      />
    </View>
  );
}

type IMainProps = IProps & ComponentProps<typeof TouchableWithoutFeedback>;

function Main({ testID, disabled, onPress, title, rightIcon, leftIcon, height = Style.adjust(84) }: IMainProps) {
  const disabledStyles = disabled ? styles.disabled : {};

  const RightIcon = getIcon(rightIcon);
  const LeftIcon = getIcon(leftIcon);

  return (
    <PressableWithDelay
      testID={testID}
      accessibilityLabel={disabled ? "disabled" : "enabled"}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={StyleSheet.flatten([styles.outer, { height }])}>
        <Animated.View style={StyleSheet.flatten([styles.main, { height: height - 4 }])} testID={`${testID}-text-view`}>
          <View style={styles.leftSide}>
            <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
              <LeftIcon />
            </Svg>
            <View style={styles.titleWrapper}>
              <Text bold={true} style={[styles.title, disabledStyles]}>
                {title}
              </Text>
            </View>
          </View>
          <Svg style={styles.rightIcon} width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
            <RightIcon />
          </Svg>
        </Animated.View>
      </View>
    </PressableWithDelay>
  );
}

export default TertiaryButtonBase;
