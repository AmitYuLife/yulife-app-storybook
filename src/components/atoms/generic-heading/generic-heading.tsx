import React from "react";
import { StyleSheet, View, TouchableOpacity, ViewStyle, Image } from "react-native";
import Text from "../text/text";
import Back from "./../back/back";
import styles from "./generic-heading.styles";

interface IProps {
  heading: string;
  subheading?: string;
  hidesBorder?: boolean;
  onLeftIconPress?: () => void;
  style?: ViewStyle;
  onRightIconPress?: () => void;
  leftIcon?: LeftIcon;
  border?: "new"; // FIXME: STANDARDISE ALL HEADING BORDERS
  rightIcon?: IRightIcon | string;
}

interface IRightIcon {
  icon: "SETTINGS";
}

type LeftIcon = "BACK" | "CLOSE";

export default function GenericHeading(props: IProps) {
  const {
    heading,
    hidesBorder,
    subheading,
    onLeftIconPress,
    onRightIconPress,
    style,
    leftIcon = "BACK",
    border,
    rightIcon = {
      icon: "SETTINGS",
    },
  } = props;
  return (
    <View>
      <View style={[styles.paddingHorizontal, style]}>
        <View
          style={StyleSheet.flatten([
            styles.headingWrapper,
            hidesBorder || !!border ? { borderBottomWidth: 0 } : null,
            subheading ? null : styles.paddingBottom,
          ])}
        >
          {!onLeftIconPress ? null : (
            <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIcon}>
              <LeftIcon icon={leftIcon} />
            </TouchableOpacity>
          )}

          {!onRightIconPress ? null : (
            <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
              <RightIcon icon={rightIcon} />
            </TouchableOpacity>
          )}
          <Text numberOfLines={1} bold={true} style={styles.heading}>
            {heading}
          </Text>
        </View>
        {!subheading ? null : (
          <View style={StyleSheet.flatten([styles.subheadingWrapper, styles.paddingBottom])}>
            <Text style={styles.subheading}>{subheading}</Text>
          </View>
        )}
      </View>
      <NewBorder {...{ border }} />
    </View>
  );
}

function LeftIcon({ icon }: { icon: IProps["leftIcon"] }) {
  switch (icon) {
    case "BACK":
      return (
        <View style={styles.backAdjust}>
          <Back />
        </View>
      );
    case "CLOSE":
      return <Image source={require("@assets/icons/close.png")} />;
    default:
      return null;
  }
}

function RightIcon({ icon }: { icon: IProps["rightIcon"] }) {
  if (typeof icon === "string") {
    return <Text style={styles.rightTextIcon}>{icon}</Text>;
  }
  switch (icon.icon) {
    case "SETTINGS":
      return <Image source={require("@assets/menu/settings.png")} />;
    default:
      return null;
  }
}

function NewBorder({ border }: { border: IProps["border"] }) {
  if (!border) {
    return null;
  }

  return (
    <>
      <View style={styles.newBorderPad} />
      <View style={styles.newBorderShadow} />
    </>
  );
}
