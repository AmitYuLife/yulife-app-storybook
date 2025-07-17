import { padNum } from "@utils";
import { Colours } from "@styles/index";
import { ComponentProps } from "react";
import { LeftIcon, IIcon } from "./subcomponents/left";
import Right, { RightIconTypes } from "./subcomponents/right";
import { LayoutChangeEvent, TextStyle } from "react-native";
import { TopBarType } from "@graphql/__generated";

export type TopBarTypes = "default" | "white" | "desert" | "mountain" | "forest";
export enum TOP_BAR_TYPES {
  DEFAULT = "default",
  WHITE = "white",
  DESERT = "desert",
  MOUNTAIN = "mountain",
  FOREST = "forest",
}

type NotificationBadgeProps = { count: number };

type BadgeProps = {
  [LeftIcon.NOTIFICATIONS]: NotificationBadgeProps;
};

export interface TopBarLeftProps {
  icons?: IIcon[];
  colour: string;
  label: string;
  badges: Record<string, boolean>;
  badgeProps: Record<string, Record<string, number>>;
  textStyle: TextStyle;
}

export type TopBarViewProps = {
  onPressLeftIcon?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  timer?: string;
  name?: string;
  menuLabel?: string;
  badges: Record<string, boolean>;
  badgeProps: BadgeProps;
  leftIcon?: LeftIcon;
  leftIcons?: IIcon[];
  middleLabel?: string;
  type?: TopBarTypes;
  rightIcon?: RightIconTypes;
} & Omit<ComponentProps<typeof Right>, "colour" | "logoColour" | "textStyle">;

const TopBarTypeMap: { [key in TopBarType]: TopBarTypes } = {
  [TopBarType.Default]: "default",
  [TopBarType.White]: "white",
  [TopBarType.Desert]: "desert",
  [TopBarType.Mountain]: "mountain",
  [TopBarType.Forest]: "forest",
};

export const fromGql = (value: TopBarType): TopBarTypes => {
  return TopBarTypeMap[value];
};

export function formatSeconds(secondsRemaining: number) {
  const days = Math.floor(secondsRemaining / 86400);

  if (days) {
    return `> ${days} day${days > 1 ? "s" : ""}`;
  }

  const hours = Math.floor(secondsRemaining / (60 * 60)) % 24;
  const minutes = Math.floor(secondsRemaining / 60) % 60;
  const seconds = secondsRemaining % 60;

  if (!hours && !minutes && !seconds) {
    return "--:--";
  }

  const display = `${padNum(minutes)}:${padNum(seconds)}`;

  if (hours > 0) {
    return `${padNum(hours)}:${display}`;
  }

  return display;
}

export function getStyle(type: TopBarTypes) {
  switch (type) {
    case "mountain":
      return {
        colour: "rgb(51, 51, 51)",
        logoColour: "rgb(51, 51, 51)",
        textStyle: { color: "rgb(51, 51, 51)" },
      };
    case "desert":
      return {
        colour: "rgb(108,59,38)",
        logoColour: "rgb(108,59,38)",
        textStyle: { color: "rgb(108,59,38)" },
      };
    case "forest":
      return {
        colour: "rgb(51, 88, 66)",
        logoColour: "rgb(51, 88, 66)",
        textStyle: { color: "rgb(51, 88, 66)" },
      };
    case "white":
      return {
        colour: "#FFF",
        logoColour: "#FFF",
        textStyle: { color: "white" },
      };
    default:
      return {
        colour: "#333333",
        logoColour: Colours.darkHotPink,
        textStyle: { color: "#333333" },
      };
  }
}
