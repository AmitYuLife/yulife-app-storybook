import { View } from "react-native";
import { EditSvg } from "../icons/edit-svg";
import { BirthdaySvg } from "../icons/birthday-svg";

export enum BUTTON_ICON {
  BIRTHDAY = "BIRTHDAY",
  EDIT = "EDIT",
}

export function getIcon(icon: BUTTON_ICON) {
  switch (icon) {
    case BUTTON_ICON.BIRTHDAY:
      return BirthdaySvg;
    case BUTTON_ICON.EDIT:
      return EditSvg;
    default:
      return View;
  }
}
