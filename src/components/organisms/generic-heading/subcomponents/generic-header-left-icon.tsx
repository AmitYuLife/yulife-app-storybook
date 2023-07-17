import React, { memo } from "react";
import { Back, CloseSvg } from "@atoms";
import { TOP_BAR } from "@styles";
import { TouchableOpacityWithDelay } from "@molecules";
import { t } from "@locale";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import styles from "../generic-heading.styles";

interface IProps {
  icon: LeftIcon;
  color?: string;
  onPress: () => void;
}

const GenericHeaderLeftIcon = ({ icon, color, onPress }: IProps) => (
  <TouchableOpacityWithDelay
    hitSlop={TOP_BAR.HIT_SLOP}
    style={styles.leftIconTouchable}
    onPress={onPress}
    accessibilityLabel={accessibilityLabelKeys[icon] ? t(accessibilityLabelKeys[icon]) : ""}
  >
    {getIcon(icon, color)}
  </TouchableOpacityWithDelay>
);

const accessibilityLabelKeys: Partial<Record<LeftIcon, string>> = {
  [LeftIcon.BACK]: "labels.cta.back",
  [LeftIcon.CLOSE]: "generic_heading.left_icon.close.accessibility_label",
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

export default memo(GenericHeaderLeftIcon);
