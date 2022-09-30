import React from "react";
import { Back, CloseSvg } from "@atoms";
import { IGenericHeadingProps } from "@organisms";
import { TOP_BAR } from "@styles";
import { TouchableOpacityWithDelay } from "@molecules";
import { t } from "@locale";

type Icon = IGenericHeadingProps["leftIcon"];

interface IProps {
  icon: Icon;
  color?: string;
  onPress: () => void;
}

const GenericHeaderLeftIcon = ({ icon, color, onPress }: IProps) => (
  <TouchableOpacityWithDelay
    hitSlop={TOP_BAR.HIT_SLOP}
    onPress={onPress}
    accessibilityLabel={accessibilityLabels[icon] ?? ""}
  >
    {getIcon(icon, color)}
  </TouchableOpacityWithDelay>
);

export default GenericHeaderLeftIcon;

const accessibilityLabels = {
  BACK: t("generic_heading.left_icon.back.accessibility_label"),
  CLOSE: t("generic_heading.left_icon.close.accessibility_label"),
};

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
