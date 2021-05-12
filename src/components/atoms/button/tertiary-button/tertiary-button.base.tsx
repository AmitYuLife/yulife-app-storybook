import React from "react";
import { View } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import Text from "@atoms/text/text";
import { Style, Colours } from "@styles";
import { PressableWithDelay } from "@components/molecules";
import { SvgXml } from "react-native-svg";
import { BUTTON_ICON, iconHashMap } from "./tertiary-button.helpers";
import { styles } from "./tertiary-button.styles";
import FastImage from "react-native-fast-image";

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
  iconUri?: string;
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
    iconUri,
  } = props;
  const { handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress, delay });
  const disabledStyles = disabled ? styles.disabled : {};
  const RightIcon = iconHashMap[rightIcon] || View;
  const LeftIcon = iconHashMap[leftIcon] || View;

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
          {getLeftIcon(iconSvgXml, iconUri) || <LeftIcon />}
          <View style={styles.titleWrapper}>
            <Text bold={true} style={[styles.title, disabledStyles]}>
              {title}
            </Text>
            {!subTitle ? null : <Text style={[styles.subTitle, disabledStyles]}>{subTitle}</Text>}
          </View>
        </View>
        <View style={styles.rightIcon}>
          <RightIcon />
        </View>
      </PressableWithDelay>
    </View>
  );
}

const getLeftIcon = (iconSvgXml: string, iconUri: string) => {
  const fastImageStyle = { width: Style.adjust(24), height: Style.adjust(24) };

  if (iconSvgXml) {
    return <SvgXml xml={iconSvgXml} width={24} height={24} />;
  }

  if (iconUri) {
    return <FastImage resizeMode="contain" style={fastImageStyle} source={{ uri: iconUri }} />;
  }

  return null;
};

export default TertiaryButtonBase;
