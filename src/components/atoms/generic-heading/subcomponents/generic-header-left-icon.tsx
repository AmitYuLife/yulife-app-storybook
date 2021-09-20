import React from "react";
import { Back, CloseSvg } from "@atoms";
import { IGenericHeadingProps } from "@atoms/generic-heading/generic-heading.types";
import { TOP_BAR } from "@styles";
import { TouchableOpacityWithDelay } from "@molecules";

type Icon = IGenericHeadingProps["leftIcon"];

interface IProps {
  icon: Icon;
  onPress: () => void;
}

const GenericHeaderLeftIcon = ({ icon, onPress }: IProps) => (
  <TouchableOpacityWithDelay hitSlop={TOP_BAR.HIT_SLOP} onPress={onPress}>
    {getIcon(icon)}
  </TouchableOpacityWithDelay>
);

export default GenericHeaderLeftIcon;

const getIcon = (icon: Icon) => {
  switch (icon) {
    case "BACK":
      return <Back />;
    case "CLOSE":
      return <CloseSvg />;
    default:
      return null;
  }
};
