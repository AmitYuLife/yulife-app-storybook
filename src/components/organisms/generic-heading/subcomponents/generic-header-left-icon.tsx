import { memo } from "react";
import { Back, CloseSvg } from "@atoms";
import { TOP_BAR } from "@styles";
import { TouchableOpacityWithDelay } from "@molecules";
import { t } from "@locale";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { RefreshIcon } from "@atoms/icon/refresh-icon";
import { Menu } from "@organisms/top-bar/assets";

interface IProps {
  icon: LeftIcon;
  color?: string;
  onPress: () => void;
  testID?: string;
  accessibilityLabel?: string;
  disabled?: boolean;
}

const GenericHeaderLeftIcon = ({ icon, color, onPress, testID, accessibilityLabel, disabled }: IProps) => (
  <TouchableOpacityWithDelay
    hitSlop={TOP_BAR.HIT_SLOP}
    onPress={onPress}
    accessibilityLabel={accessibilityLabel ?? (accessibilityLabelKeys[icon] ? t(accessibilityLabelKeys[icon]) : "")}
    testID={testID}
    disabled={disabled}
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
    case LeftIcon.REFRESH.toLowerCase():
      return <RefreshIcon />;
    case LeftIcon.MENU.toLowerCase():
      return <Menu color={color} />;
    default:
      return null;
  }
};

export default memo(GenericHeaderLeftIcon);
