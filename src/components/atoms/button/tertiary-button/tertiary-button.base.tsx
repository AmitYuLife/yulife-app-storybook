import React from "react";
import { View } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import Text from "@atoms/text/text";
import { Style, Colours } from "@styles";
import { PressableWithDelay } from "@components/molecules";
import Svg, { SvgXml } from "react-native-svg";
import { getIcon, BUTTON_ICON } from "./tertiary-button.helpers";
import { styles } from "./tertiary-button.styles";

interface IProps {
  disabled?: boolean;
  testID?: string;
  onPress: () => void;
  title: string;
  subTitle?: string;
  delay?: number;
  rightIcon?: BUTTON_ICON;
  leftIcon?: BUTTON_ICON;
  height?: number;
  iconSvgXml?: string;
}

export function TertiaryButtonBase(props: IProps) {
  const {
    testID,
    onPress,
    delay,
    leftIcon,
    rightIcon,
    height = Style.adjust(84),
    title,
    subTitle,
    disabled,
    iconSvgXml,
  } = props;
  const { handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress, delay });
  const disabledStyles = disabled ? styles.disabled : {};
  const RightIcon = getIcon(rightIcon);
  const LeftIcon = getIcon(leftIcon);

  return (
    <View style={styles.flex}>
      <PressableWithDelay
        testID={testID}
        accessibilityLabel={disabled ? "disabled" : "enabled"}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        style={({ pressed }) => [
          !pressed && {
            bottom: 4,
            borderBottomColor: Colours.neutral.n100,
            borderBottomWidth: 5,
          },
          styles.main,
          { height },
        ]}
      >
        <View style={styles.leftSide} testID={`${testID}-text-view`}>
          {iconSvgXml ? (
            <SvgXml xml={iconSvgXml} width={24} height={24} />
          ) : (
            <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
              <LeftIcon />
            </Svg>
          )}
          <View style={styles.titleWrapper}>
            <Text bold={true} style={[styles.title, disabledStyles]}>
              {title}
            </Text>
            {!subTitle ? null : <Text style={[styles.subTitle, disabledStyles]}>{subTitle}</Text>}
          </View>
        </View>
        <Svg style={styles.rightIcon} width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
          <RightIcon />
        </Svg>
      </PressableWithDelay>
    </View>
  );
}

export default TertiaryButtonBase;
