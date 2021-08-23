import React, { memo } from "react";
import { View } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { Text, Image } from "@atoms";
import { Style, Colours } from "@styles";
import { PressableWithDelay } from "@components/molecules";
import { SvgXml } from "react-native-svg";
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
  iconSvgXml?: string;
  iconUri?: string;
  rightIconUri?: string;
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
    rightIconUri,
  } = props;
  const { handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress, delay });
  const disabledStyles = disabled ? styles.disabled : {};

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
          <Icon svgXml={iconSvgXml} uri={iconUri} button={leftIcon} />
          <View style={styles.titleWrapper}>
            <Text bold={true} style={[styles.title, disabledStyles]}>
              {title}
            </Text>
            {!subTitle ? null : <Text style={[styles.subTitle, disabledStyles]}>{subTitle}</Text>}
          </View>
        </View>
        <View style={styles.rightIcon}>
          <Icon uri={rightIconUri} button={rightIcon} />
        </View>
      </PressableWithDelay>
    </View>
  );
}

export default TertiaryButtonBase;

type IconProps = {
  svgXml?: string;
  uri?: string;
  button: BUTTON_ICON;
};

const Icon = memo((props: IconProps) => {
  const { svgXml, uri, button } = props;

  if (svgXml) {
    return <SvgXml xml={svgXml} width={24} height={24} />;
  }

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
