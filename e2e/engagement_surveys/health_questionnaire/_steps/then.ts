import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import { swipeFromText } from "./when";
import { FinancialWellnessQuizDescriptionPage } from "engagement_surveys/_resources/types";
export {
  languageSettingVisible,
  languageSelectorVisible,
  allLanguagesVsible,
} from "admin/routing/_steps/then";

export const { menuItemsVisible } = screens.menu;

export const {
  idVisible,
  textVisible,
  idNotVisible,
  textNotVisible,
  multipleTextVisible,
  textVisibleAtIndex,
  idExist,
  idVisibleAtIndex,
  testMultipleIndexesVisibility,
} = navigation.common;

export const { challengeNudgeVisible, hqNudgeVisible, maximiseYucoinVisible } = screens.yuscreen;

export const { scrollUntilTextVisible, scrollFromID } = navigation.scrolling;

export {
  signupRewardVisible,
  connectionSetupScreenVisible,
  healthDataSyncComponent,
} from "admin/login_and_routing/_steps/then";

export const customerQuizModalVisible =
  (name: string, daysLeft: string, progress: number) => async () => {
    await textVisible(name)();
    await textVisible("0 / 1 journeys")();
    await textVisible(`${daysLeft} days left`)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progress))();
  };

export const onFinancialWellnessQuizDescriptionPage =
  (details: FinancialWellnessQuizDescriptionPage, completed: boolean) => async () => {
    const journeys = completed ? "1" : "0";

    await textVisible(details.title)();
    await textVisible(`${details.daysLeft} days left`)();
    await textVisible(`${journeys} / 1 journeys`)();
    await textVisible(details.descTitle)();
    await swipeFromText(details.descTitle, "up", "fast")();
    await textVisible(details.desc)();

    details.infoCards.forEach((card) => async () => {
      await textVisible(card.title)();
      await textVisible(card.desc)();
    });

    if (completed) {
      await textNotVisible(details.button)();
    } else {
      await textVisible(details.button)();
    }
  };

export const onHQInformationScreen = (copy: { title: string }) => async () => {
  await textVisible(copy.title)();
};

export const onHQConsentScreen = (copy: { title: string }) => async () => {
  await idExist(ids.TEXT_TEMPLATE(copy.title, "h3"), 2000)();
};

export const onHQRadioQuestion = (journeyStep: any) => async () => {
  const templateUI = journeyStep.data.templateUi;
  await textVisible(templateUI.copy.heading["en-GB"])();

  templateUI.options.forEach((option: any) => async () => {
    await textVisible(option.label["en-GB"])();
  });
};

export const onHQHeightQuestion = (journeyStep: any) => async () => {
  const templateUI = journeyStep.data.templateUi;
  await textVisible(templateUI.copy.heading["en-GB"])();
  await idVisible(ids.TEXT_TEMPLATE("Enter your height", "l1b"))();
};

export const answerSelected =
  (journeyStep: any, answerIndex = 0, label = "en-GB") =>
  async () => {
    await idVisible(
      ids.CHECK_BOX_STATE(journeyStep.data.templateUi.options[answerIndex].label[label], true)
    )();
  };

export const answerNotSelected =
  (journeyStep: any, answerIndex = 0, label = "en-GB") =>
  async () => {
    await idVisible(
      ids.CHECK_BOX_STATE(journeyStep.data.templateUi.options[answerIndex].label[label], false)
    )();
  };

export const onHQHoldScreen = async () => {
  await textVisible("Excited for more YuCoin?")();
  await textVisible("More questions will be available tomorrow")();
};

export const progressBarVisible =
  (currentPosition: number, maxLength: number, colour = "#E30D76") =>
  async () => {
    await idVisible(ids.WEEKLY_PROGRESS_BAR(currentPosition, maxLength, colour), 2500)();
  };

export const verifyImageChoicesVisible = async () => {
  const images = [
    "journeys/health-questionnaire/image-choice/sleep_chrono_morning.svg",
    "journeys/health-questionnaire/image-choice/sleep_chrono_night.svg",
    "journeys/health-questionnaire/image-choice/sleep_chrono_unsure.svg",
  ];

  const labels = ["Morning person", "Night person", "I'm not sure"];

  for (const src of images) {
    await idVisible(ids.IMAGE_CHOICE(src))();
  }
  for (const label of labels) {
    await idVisible(ids.IMAGE_CHOICE_LABEL(label))();
  }
};

export const nextQuestionVisible = (expectedQuestionText: string) => async () => {
  await idVisible(ids.TEXT_TEMPLATE(expectedQuestionText, "b2b"))();
};

export const canSeeHQConsentScreen = (locale: "en-GB" | "ja-JP") => async () => {
  const locales = {
    "en-GB": {
      heading: "Your privacy and consent",
      headingType: "h3",
      button: "Consent and continue",
    },
    "ja-JP": {
      heading: "お客様の個人情報の取扱について",
      headingType: "h3",
      button: "同意して次へ進む",
    },
  };
  const { heading, headingType, button } = locales[locale];
  await idVisible(ids.TEXT_TEMPLATE(heading, headingType))();
  await idVisible(ids.BUTTON_BASE(button, false))();
};

export const canSeeWeightConversion = async () => {
  await idVisible(ids.CHIP_LIST_ITEM("Kilos (kg)"))();
  await idVisible(ids.CHIP_LIST_ITEM("Stones (st)"))();
  await idVisible(ids.CHIP_LIST_ITEM("Pounds (lbs)"))();
};
