import React from "react";
import { Back, CloseSvg } from "@atoms";
import { IGenericHeadingProps } from "@atoms/generic-heading/generic-heading.types";
import { TOP_BAR } from "@styles";
import { TouchableOpacityWithDelay } from "@molecules";

type Icon = IGenericHeadingProps["leftIcon"];

interface IProps {
  icon: Icon;
  color?: string;
  onPress: () => void;
}

const GenericHeaderLeftIcon = ({ icon, color, onPress }: IProps) => (
  <TouchableOpacityWithDelay hitSlop={TOP_BAR.HIT_SLOP} onPress={onPress}>
    {getIcon(icon, color)}
  </TouchableOpacityWithDelay>
);

export default GenericHeaderLeftIcon;

const getIcon = (icon: Icon, color?: string) => {
  switch (icon) {
    case "BACK":
      return <Back color={color} />;
    case "CLOSE":
      return <CloseSvg stroke={color} />;
    default:
      return null;
  }
};
