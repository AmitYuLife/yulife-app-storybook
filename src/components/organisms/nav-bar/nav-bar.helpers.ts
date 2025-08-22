import { ROUTES } from "@navigation/constants";
import { Colours } from "@styles";

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
  id: keyof typeof ROUTES;
  name: string;
  onPress: () => void;
}

export interface NavBarProps {
  activeIndex: number;
  labels?: ILabel[];
  suspendedTabs: Record<string, boolean>;
  hasQuestNotification: boolean;
  badgeCounts: Record<string, number>;
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
