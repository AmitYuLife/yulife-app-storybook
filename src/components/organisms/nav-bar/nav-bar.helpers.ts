import { Colours } from "../../../styles";

export interface INavBarColourScheme {
  active: string;
  inactive: string;
  pressed: string;
  activeIcon?: string;
}

export interface IIconProps {
  isActive: boolean;
  isPressed: boolean;
  isHighlighted: boolean;
  colourScheme?: INavBarColourScheme;
  hasDismiss?: boolean;
  hasHiddenIcons?: boolean;
  hasWhiteBackground?: boolean;
  hasNotification?: boolean;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

export interface ILabel {
  name: string;
  onPress: () => void;
}

export interface NavBarProps {
  activeIndex: number;
  hasNotification?: boolean;
  labels?: ILabel[];
  highlightedLabel?: HighlightedLabel;
  additionalBottom?: number;
  hasYuScreenNotification?: boolean;
}

export type HighlightedLabel = "yucoin" | "quests" | "yu" | "leaderboard" | "rewards";

export function getIconColour(isActive: boolean) {
  return isActive ? Colours.darkHotPink : Colours.neutral.n700;
}
