import { View } from "react-native";
import { EditSvg } from "../icons/edit-svg";
import { BirthdaySvg } from "../icons/birthday-svg";
import { QuestionBubbleSvg } from "../icons/question-bubble";
import { ArrowRightSvg } from "../icons/arrow-right";

export enum BUTTON_ICON {
  BIRTHDAY = "BIRTHDAY",
  EDIT = "EDIT",
  QUESTION_BUBBLE = "QUESTION_BUBBLE",
  ARROW_RIGHT = "ARROW_RIGHT",
}

export function getIcon(icon: BUTTON_ICON) {
  switch (icon) {
    case BUTTON_ICON.BIRTHDAY:
      return BirthdaySvg;
    case BUTTON_ICON.EDIT:
      return EditSvg;
    case BUTTON_ICON.QUESTION_BUBBLE:
      return QuestionBubbleSvg;
    case BUTTON_ICON.ARROW_RIGHT:
      return ArrowRightSvg;
    default:
      return View;
  }
}
