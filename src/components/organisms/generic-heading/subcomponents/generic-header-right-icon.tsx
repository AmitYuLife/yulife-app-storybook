import React from "react";
import { Image, View } from "react-native";
import { CloseSvg, EditSvg, Text } from "@atoms";
import { Button } from "@molecules";
import { TOP_BAR } from "@styles";
import { IGenericHeadingProps } from "@organisms";
import PlusSvg from "@atoms/plus/plus-svg";
import styles from "../generic-heading.styles";
import { TouchableOpacityWithDelay } from "@molecules";

type IIcon = IGenericHeadingProps["rightIcon"];

interface IProps {
  icon: IIcon;
  Icon?: JSX.Element;
  color?: string;
  onPress: () => void;
  testID: string;
}

const GenericHeaderRightIcon = ({ icon, color, onPress, testID, Icon }: IProps) => {
  if (Icon) {
    return (
      <TouchableOpacityWithDelay
        hitSlop={TOP_BAR.HIT_SLOP}
        onPress={onPress}
        style={styles.rightIconTouchable}
        testID={testID}
      >
        {Icon}
      </TouchableOpacityWithDelay>
    );
  }

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
      {getIcon(icon, color)}
    </TouchableOpacityWithDelay>
  );
};

export default GenericHeaderRightIcon;

const getIcon = (icon: IIcon, color: string) => {
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
          <CloseSvg stroke={color} />
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
