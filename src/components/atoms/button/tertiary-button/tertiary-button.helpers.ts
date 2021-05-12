import { EditSvg, EditSvgGrey } from "../icons/edit-svg";
import { BirthdaySvg } from "../icons/birthday-svg";
import { QuestionBubbleSvg } from "../icons/question-bubble";
import { SalarySvg } from "../icons/salary-svg";
import Icon from "@atoms/icon";
import Logo from "@atoms/logo";
import { DocIcon } from "@atoms/icon/doc-icon";
import { SmartHealthIcon } from "@atoms/icon/smart-health-icon";
import { GooglePlayIcon } from "@atoms/icon/google-play-icon";
import { AppStoreIcon } from "@atoms/icon/app-store-icon";

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
  SMART_HEALTH = "SMART_HEALTH",
  GOOGLE_PLAY = "GOOGLE_PLAY",
  APP_STORE = "APP_STORE",
  HEIGHT = "HEIGHT",
}

interface IconProps {
  color?: string;
}

export const iconHashMap = {
  [BUTTON_ICON.BIRTHDAY]: BirthdaySvg,
  [BUTTON_ICON.EDIT]: EditSvg,
  [BUTTON_ICON.EDIT_GREY]: EditSvgGrey,
  [BUTTON_ICON.QUESTION_BUBBLE]: QuestionBubbleSvg,
  [BUTTON_ICON.ARROW_RIGHT]: Icon.ArrowRight,
  [BUTTON_ICON.DOCUMENT]: Icon.Document,
  [BUTTON_ICON.BLUE_DOC]: Icon.BlueDoc,
  [BUTTON_ICON.YELLOW_DOC]: Icon.YellowDoc,
  [BUTTON_ICON.PDF]: Icon.Pdf,
  [BUTTON_ICON.SALARY]: SalarySvg,
  [BUTTON_ICON.YULIFE_LOGO]: Logo,
  [BUTTON_ICON.DOC]: DocIcon,
  [BUTTON_ICON.SMART_HEALTH]: SmartHealthIcon,
  [BUTTON_ICON.GOOGLE_PLAY]: GooglePlayIcon,
  [BUTTON_ICON.APP_STORE]: AppStoreIcon,
  [BUTTON_ICON.HEIGHT]: Icon.HeightSvgIcon,
} as Record<BUTTON_ICON, ({ color }: IconProps) => JSX.Element>;
