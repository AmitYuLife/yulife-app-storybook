import React, { FC } from "react";
import { View } from "react-native";
import { getStyle, TopBarViewProps, TopBarTypes } from "./top-bar.helpers";
import styles from "./top-bar.styles";
import Center from "./subcomponents/center";
import Left, { LeftIconTypes } from "./subcomponents/left";
import Right from "./subcomponents/right";

const TopBarView: FC<TopBarViewProps> = ({
  coins,
  leftIcon = "Menu" as LeftIconTypes,
  menuLabel,
  onPressLeftIcon,
  type = "default" as TopBarTypes,
  shouldHighlightCoins = false,
  name,
  timer,
  onLayout,
  rightIcon = "Coins"
}: TopBarViewProps) => {
  const calculatedStyle = getStyle(type);
  const { colour, textStyle, logoColour } = calculatedStyle;

  return (
    <View pointerEvents="box-none" style={styles.wrapper} onLayout={onLayout}>
      <Left label={menuLabel} onPress={onPressLeftIcon} icon={leftIcon} colour={colour} textStyle={textStyle} />
      <Center name={name} timer={timer} logoColour={logoColour} colour={colour} textStyle={textStyle} />
      <Right icon={rightIcon} shouldHighlightCoins={shouldHighlightCoins} coins={coins} colour={colour} textStyle={textStyle} />
    </View>
  );
};

export default TopBarView;
