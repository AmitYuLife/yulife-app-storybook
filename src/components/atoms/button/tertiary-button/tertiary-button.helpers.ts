import { View } from "react-native";
import { EditSvg, EditSvgGrey } from "../icons/edit-svg";
import { BirthdaySvg } from "../icons/birthday-svg";
import { QuestionBubbleSvg } from "../icons/question-bubble";
import { ArrowRightSvg } from "../icons/arrow-right";
import { SalarySvg } from "../icons/salary-svg";
import Icon from "@atoms/icon";

export enum BUTTON_ICON {
  BIRTHDAY = "BIRTHDAY",
  EDIT = "EDIT",
  EDIT_GREY = "EDIT_GREY",
  QUESTION_BUBBLE = "QUESTION_BUBBLE",
  ARROW_RIGHT = "ARROW_RIGHT",
  SALARY = "SALARY",
  DOCUMENT = "DOCUMENT",
}

export function getIcon(icon: BUTTON_ICON) {
  switch (icon) {
    case BUTTON_ICON.BIRTHDAY:
      return BirthdaySvg;
    case BUTTON_ICON.EDIT:
      return EditSvg;
    case BUTTON_ICON.EDIT_GREY:
      return EditSvgGrey;
    case BUTTON_ICON.QUESTION_BUBBLE:
      return QuestionBubbleSvg;
    case BUTTON_ICON.ARROW_RIGHT:
      return ArrowRightSvg;
    case BUTTON_ICON.SALARY:
      return SalarySvg;
    case BUTTON_ICON.DOCUMENT:
      return Icon.Document;
    default:
      return View;
  }
}
