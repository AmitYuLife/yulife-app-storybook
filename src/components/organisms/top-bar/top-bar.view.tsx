import React from "react";
import { View } from "react-native";
import { getStyle, TopBarViewProps, TopBarTypes } from "./top-bar.helpers";
import styles from "./top-bar.styles";
import Center from "./subcomponents/center";
import Left, { LeftIcon } from "./subcomponents/left";
import Right from "./subcomponents/right";

const TopBarView = ({
  leftIcon = LeftIcon.MENU,
  onPressLeftIcon,
  badges,
  badgeProps,
  leftIcons = [
    {
      icon: leftIcon,
      onPress: onPressLeftIcon,
    },
  ],
  menuLabel,
  type = "default" as TopBarTypes,
  shouldHighlightCoins = false,
  name,
  timer,
  onLayout,
  rightIcon = "Coins",
}: TopBarViewProps) => {
  const calculatedStyle = getStyle(type);
  const { colour, textStyle, logoColour } = calculatedStyle;

  return (
    <View pointerEvents="box-none" style={styles.wrapper} onLayout={onLayout}>
      <Left
        badges={badges}
        badgeProps={badgeProps}
        label={menuLabel}
        icons={leftIcons}
        colour={colour}
        textStyle={textStyle}
      />
      <Center name={name} timer={timer} logoColour={logoColour} colour={colour} textStyle={textStyle} />
      <Right icon={rightIcon} shouldHighlightCoins={shouldHighlightCoins} textStyle={textStyle} />
    </View>
  );
};

export default TopBarView;
