import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { Image, TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";
import { Pressable } from "@components/molecules";
import { BUTTON_ICON, iconHashMap } from "./tertiary-button.helpers";
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
  iconUri?: string;
  rightIconUri?: string;
  LeftIcon?: JSX.Element;
  RightIcon?: JSX.Element;
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
    iconUri,
    rightIconUri,
    LeftIcon,
    RightIcon,
  } = props;
  const { handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress, delay });
  const disabledStyles = disabled ? styles.disabled : {};

  return (
    <View style={StyleSheet.flatten([styles.flex, disabledStyles])}>
      <Pressable
        delay={1000}
        testID={testID}
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
        accessibilityLabel={title}
        accessibilityRole={"button"}
      >
        <View style={styles.leftSide} testID={`${testID}-text-view`}>
          {LeftIcon || <Icon uri={iconUri} button={leftIcon} />}
          <View style={styles.titleWrapper}>
            <TextTemplate type="b2b">{title}</TextTemplate>
            {!subTitle ? null : (
              <View style={styles.subtitleWrapper}>
                <TextTemplate type="b2">{subTitle}</TextTemplate>
              </View>
            )}
          </View>
        </View>
        {!RightIcon && !rightIconUri && !rightIcon ? null : (
          <View style={styles.rightIcon}>{RightIcon || <Icon uri={rightIconUri} button={rightIcon} />}</View>
        )}
      </Pressable>
    </View>
  );
}

export default TertiaryButtonBase;

type IconProps = {
  uri?: string;
  button: BUTTON_ICON;
};

const Icon = memo((props: IconProps) => {
  const { uri, button } = props;

  if (uri) {
    const size = Style.adjust(24);
    return <Image width={size} height={size} resizeMode="contain" source={{ uri }} />;
  }

  if (button && iconHashMap[button]) {
    const ButtonIcon = iconHashMap[button];
    return <ButtonIcon />;
  }

  return <View />;
});
