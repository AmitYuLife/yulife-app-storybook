import React from "react";
import { Back, CloseSvg } from "@atoms";
import { TOP_BAR } from "@styles";
import { TouchableOpacityWithDelay } from "@molecules";
import { t } from "@locale";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

interface IProps {
  icon: LeftIcon;
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

const accessibilityLabels: Partial<Record<LeftIcon, string>> = {
  [LeftIcon.BACK]: t("generic_heading.left_icon.back.accessibility_label"),
  [LeftIcon.CLOSE]: t("generic_heading.left_icon.close.accessibility_label"),
};

const getIcon = (icon: LeftIcon, color?: string) => {
  switch (icon.toLowerCase()) {
    case LeftIcon.BACK.toLowerCase():
      return <Back color={color} />;
    case LeftIcon.CLOSE.toLowerCase():
      return <CloseSvg stroke={color} />;
    default:
      return null;
  }
};
