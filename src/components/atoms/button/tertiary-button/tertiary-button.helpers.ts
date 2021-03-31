import { View } from "react-native";
import { EditSvg, EditSvgGrey } from "../icons/edit-svg";
import { BirthdaySvg } from "../icons/birthday-svg";
import { QuestionBubbleSvg } from "../icons/question-bubble";
import { SalarySvg } from "../icons/salary-svg";
import Icon from "@atoms/icon";
import { Logo } from "@atoms";
import { DocIcon } from "@atoms/icon/doc-icon";

export enum BUTTON_ICON {
  BIRTHDAY = "BIRTHDAY",
  EDIT = "EDIT",
  EDIT_GREY = "EDIT_GREY",
  QUESTION_BUBBLE = "QUESTION_BUBBLE",
  ARROW_RIGHT = "ARROW_RIGHT",
  SALARY = "SALARY",
  DOCUMENT = "DOCUMENT",
  PDF = "PDF",
  BLUE_DOC = "BLUE_DOC",
  YELLOW_DOC = "YELLOW_DOC",
  YULIFE_LOGO = "YULIFE_LOGO",
  DOC = "DOC",
}

//@TODO: refactor this where we can pass the icon direct instead of a function with a switch
/// this is not very scalable and can cost us performance in the future
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
      return Icon.ArrowRight;
    case BUTTON_ICON.SALARY:
      return SalarySvg;
    case BUTTON_ICON.DOCUMENT:
      return Icon.Document;
    case BUTTON_ICON.BLUE_DOC:
      return Icon.BlueDoc;
    case BUTTON_ICON.YELLOW_DOC:
      return Icon.YellowDoc;
    case BUTTON_ICON.PDF:
      return Icon.Pdf;
    case BUTTON_ICON.YULIFE_LOGO:
      return Logo;
    case BUTTON_ICON.DOC:
      return DocIcon;
    default:
      return View;
  }
}
