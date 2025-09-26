import { padNum } from "@utils";
import { Colours } from "@styles/index";
import { ComponentProps, RefObject } from "react";
import { LeftIcon, IIcon } from "./subcomponents/left";
import Right, { RightIconTypes } from "./subcomponents/right";
import { LayoutChangeEvent, View } from "react-native";
import { TopBarType } from "@graphql/__generated";

export type TopBarTypes = "default" | "white" | "desert" | "mountain" | "forest";
export enum TOP_BAR_TYPES {
  DEFAULT = "default",
  WHITE = "white",
  DESERT = "desert",
  MOUNTAIN = "mountain",
  FOREST = "forest",
}

export type TopBarViewProps = {
  onPressLeftIcon?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  timer?: string;
  name?: string;
  menuLabel?: string;
  badges: Record<string, boolean>;
  leftIcon?: LeftIcon;
  leftRef?: RefObject<View>;
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
        colour: Colours.darkestGray,
        logoColour: Colours.darkestGray,
        textStyle: { color: Colours.darkestGray },
      };
    case "desert":
      return {
        colour: Colours.text.brown,
        logoColour: Colours.text.brown,
        textStyle: { color: Colours.text.brown },
      };
    case "forest":
      return {
        colour: Colours.text.forestGreen,
        logoColour: Colours.text.forestGreen,
        textStyle: { color: Colours.text.forestGreen },
      };
    case "white":
      return {
        colour: Colours.neutral.white,
        logoColour: Colours.neutral.white,
        textStyle: { color: Colours.neutral.white },
      };
    default:
      return {
        colour: Colours.darkestGray,
        logoColour: Colours.darkHotPink,
        textStyle: { color: Colours.darkestGray },
      };
  }
}
