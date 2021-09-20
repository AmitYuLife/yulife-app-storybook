import React from "react";
import { Image, View } from "react-native";
import { Button, CloseSvg, EditSvg, Text } from "@atoms";
import { TOP_BAR } from "@styles";
import { IGenericHeadingProps } from "@atoms/generic-heading/generic-heading.types";
import PlusSvg from "@atoms/plus/plus-svg";
import styles from "../generic-heading.styles";
import { TouchableOpacityWithDelay } from "@molecules";

type Icon = IGenericHeadingProps["rightIcon"];

interface IProps {
  icon: Icon;
  onPress: () => void;
  testID: string;
}

const GenericHeaderRightIcon = ({ icon, onPress, testID }: IProps) => {
  if (icon === "SAVE") {
    return <Button label="Save" onPress={onPress} size="ExtraSmall" wrapperStyle={styles.buttonSave} testID={testID} />;
  }

  return (
    <TouchableOpacityWithDelay
      hitSlop={TOP_BAR.HIT_SLOP}
      onPress={onPress}
      style={styles.rightIconTouchable}
      testID={testID}
    >
      {getIcon(icon)}
    </TouchableOpacityWithDelay>
  );
};

export default GenericHeaderRightIcon;

const getIcon = (icon: Icon) => {
  switch (icon) {
    case "SETTINGS":
      return <Image source={require("@assets/menu/settings.png")} />;

    case "EDIT":
      return (
        <View>
          <EditSvg />
        </View>
      );

    case "PLUS":
      return (
        <View>
          <PlusSvg />
        </View>
      );

    case "CLOSE":
      return (
        <View>
          <CloseSvg />
        </View>
      );
    case "Done":
      return (
        <Text numberOfLines={1} style={styles.rightIconText}>
          {icon}
        </Text>
      );
    default:
      return null;
  }
};
