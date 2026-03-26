import React from "react";
import { View } from "react-native";
import { getStyle, TopBarViewProps, TopBarTypes } from "./top-bar.helpers";
import styles from "./top-bar.styles";
import Center from "./subcomponents/center";
import Left, { LeftIcon } from "./subcomponents/left";
import Right from "./subcomponents/right";
import { Box } from "@atoms";

const TopBarView = ({
  leftIcon = LeftIcon.MENU,
  onPressLeftIcon,
  badges,
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
  leftRef,
  onLayout,
  rightIcon = "Coins",
}: TopBarViewProps) => {
  const calculatedStyle = getStyle(type);
  const { colour, textStyle, logoColour } = calculatedStyle;

  return (
    <View pointerEvents="box-none" style={styles.wrapper} onLayout={onLayout}>
      {/* collapsable=false https://github.com/facebook/react-native/issues/29712 */}
      <Box viewRef={leftRef} collapsable={false} h="100%" />
      <Left badges={badges} label={menuLabel} icons={leftIcons} colour={colour} textStyle={textStyle} />
      <Box pointerEvents="none">
        <Center name={name} timer={timer} logoColour={logoColour} colour={colour} textStyle={textStyle} />
      </Box>
      <Right icon={rightIcon} shouldHighlightCoins={shouldHighlightCoins} textStyle={textStyle} />
    </View>
  );
};

export default TopBarView;
