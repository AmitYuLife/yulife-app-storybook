import React, { ComponentProps, FC } from "react";
import { View } from "react-native";
import { getStyle } from "./top-bar.helpers";
import styles, { TOP_BAR_HEIGHT } from "./top-bar.styles";
import Center from "./center";
import Left, { LeftIconTypes, leftIconTypes } from "./left";
import Right from "./right";

export type TopBarTypes = "default" | "white" | "desert" | "mountain" | "forest";
export enum TOP_BAR_TYPES {
  DEFAULT = "default",
  WHITE = "white",
  DESERT = "desert",
  MOUNTAIN = "mountain",
  FOREST = "forest",
}

export type IProps = {
  onPressLeftIcon?: () => void;
  timer?: string;
  name?: string;
  menuLabel?: string;
  leftIcon?: React.ComponentProps<typeof Left>["icon"];
  middleLabel?: string;
  type?: TopBarTypes;
} & Omit<ComponentProps<typeof Right>, "colour" | "logoColour" | "textStyle">;

interface StaticProperties {
  LeftIcon: typeof leftIconTypes;
  height: number;
}

const TopBar: FC<IProps> & StaticProperties = ({
  coins,
  leftIcon = "Menu" as LeftIconTypes,
  menuLabel,
  onPressLeftIcon,
  type = "default" as TopBarTypes,
  shouldHighlightCoins = false,
  name,
  timer,
}: IProps) => {
  const calculatedStyle = getStyle(type);
  const { colour, textStyle } = calculatedStyle;
  const leftProps = {
    label: menuLabel,
    onPress: onPressLeftIcon,
    icon: leftIcon,
    colour,
    textStyle,
  };
  const centerProps = {
    ...calculatedStyle,
    name,
    timer,
  };
  const rightProps = {
    shouldHighlightCoins,
    coins,
    colour,
    textStyle,
  };
  return (
    <View style={styles.wrapper}>
      <Left {...leftProps} />
      <Center {...centerProps} />
      <Right {...rightProps} />
    </View>
  );
};

TopBar.LeftIcon = leftIconTypes;
TopBar.height = TOP_BAR_HEIGHT;

export default TopBar;
