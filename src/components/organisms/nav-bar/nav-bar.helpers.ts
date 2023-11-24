import { Colours } from "../../../styles";
import { MobileTabs } from "@graphql/_core/schema/globalTypes";

export interface INavBarColourScheme {
  active: string;
  inactive: string;
  pressed: string;
  activeIcon?: string;
}

export interface IIconProps {
  isActive: boolean;
  isSuspended: boolean;
  colourScheme?: INavBarColourScheme;
  hasDismiss?: boolean;
  hasHiddenIcons?: boolean;
  hasWhiteBackground?: boolean;
  hasNotification?: boolean;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

export interface ILabel {
  id: string;
  name: string;
  onPress: () => void;
}

export interface NavBarProps {
  activeIndex: number;
  labels?: ILabel[];
  additionalBottom?: number;
  hasQuestNotification: boolean;
  tabNotifications: MobileTabs[];
}

export function getIconColour(isActive: boolean, isSuspended?: boolean) {
  if (isSuspended) {
    return Colours.neutral.n200;
  }

  if (isActive) {
    return Colours.darkHotPink;
  }

  return Colours.neutral.n700;
}
