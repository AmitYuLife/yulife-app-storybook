import React from "react";
import { EditSvg, EditSvgGrey } from "../icons/edit-svg";
import Icon from "@atoms/icon";

export enum BUTTON_ICON {
  EDIT = "EDIT",
  EDIT_GREY = "EDIT_GREY",
  ARROW_RIGHT = "ARROW_RIGHT",
}

interface IconProps {
  color?: string;
}

export const iconHashMap = {
  [BUTTON_ICON.EDIT]: EditSvg,
  [BUTTON_ICON.EDIT_GREY]: EditSvgGrey,
  [BUTTON_ICON.ARROW_RIGHT]: Icon.ArrowIcon,
} as Record<BUTTON_ICON, React.FC<IconProps>>;
