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

export const {
  challengeNudgeVisible,
  hqNudgeVisible,
  completedHQNudgeVisible,
  maximiseYucoinVisible,
} = screens.yuscreen;

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

export const questionEventPanelVisible = (eventPanel: any) => async () => {
  await textVisible(eventPanel.title["en-GB"])();
  await textVisible(eventPanel.description["en-GB"])();
};

export const eventPanelForRewardTest = (eventPanel: any) => async () => {
  await textVisible(eventPanel.title["en-GB"])();
  await textVisible(eventPanel.description["en-GB"])();
};

export const onHQInformationScreen = (copy: { title: string }) => async () => {
  await textVisible(copy.title)();
};

export const onHQConsentScreen = (copy: { title: string }) => async () => {
  await textVisible(copy.title)();
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

export const canSeeEngagementSurveyAgreeCheckBoxes = async () => {
  await idVisible(ids.CHECK_BOX_STATE("Strongly agree", false))();
  await idVisible(ids.CHECK_BOX_STATE("Agree", false))();
  await idVisible(ids.CHECK_BOX_STATE("Neutral", false))();
  await idVisible(ids.CHECK_BOX_STATE("Disagree", false))();
  await idVisible(ids.CHECK_BOX_STATE("Strongly disagree", false))();
};

export const canSeeEngagementSurvey1To10CheckBoxes = async () => {
  for (let i = 10; i >= 1; i--) {
    if (i === 5) {
      await scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5)();
    }
    await idVisible(ids.WORKPLACE_CHOICE(i))();
  }
};

export const canSeeEngagementSurveySupportedByCheckBoxes = async () => {
  await idVisible("growth_development_supported_choice_my_manager")();
  await idVisible("growth_development_supported_choice_a_manager_in_another_team")();
  await idVisible("growth_development_supported_choice_a_peer_from_my_team")();
  await idVisible("growth_development_supported_choice_a_peer_from_another_team")();
  await idVisible("growth_development_supported_choice_someone_in_senior_leadership")();
  await idVisible("growth_development_supported_choice_no_one_yet")();
  await scrollFromID("growth_development_supported_choice_my_manager", "up", "fast", 0.5)();
  await idVisible("growth_development_supported_choice_other")();
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

export const pulseSurveyIntroVisible = async () => {
  await idVisible(ids.TEXT_TEMPLATE("Share your feedback!", "h3"))();
  await idVisible(
    ids.MARKDOWN(
      "Help improve your workplace experience! Take a few minutes to fill in this anonymous survey."
    )
  )();
  await idVisible(ids.CONTENT_ITEM_INFO_CARD("**Task**\n\nComplete the survey."))();
  await idVisible(ids.CONTENT_ITEM_INFO_CARD("**Rewards**\n\nEarn 30 YuCoin!"))();
  await idVisible(
    ids.CONTENT_ITEM_INFO_CARD(
      "**Why are we gathering feedback?**\n\nTo gather insights to enhance employee engagement and overall satisfaction. It is not intended to evaluate individual performance."
    )
  )();
  await scrollFromID(
    ids.CONTENT_ITEM_INFO_CARD("**Task**\n\nComplete the survey."),
    "up",
    "fast"
  )();
  await idVisible(
    ids.WARNING_BANNER(
      "Our lips are sealed! Your response is completely anonymous. Your employer won’t be able to see your individual answers."
    )
  )();
  await idVisible(ids.BUTTON_BASE("Let’s go!", false))();
};

export const engagementSurveyHeroCardVisible = async () => {
  await idVisible(ids.EVENT_CARD("Share your feedback pulse"))();
  await idVisible(ids.EVENT_HEADING("Share your feedback pulse", "#5A5A5C"))();
  await idVisible(
    ids.EVENT_DESCRIPTION("Earn YuCoin and help improve your workplace anonymously!", "#5A5A5C")
  )();
};

export const canSeeWeightConversion = async () => {
  await idVisible(ids.CHIP_LIST_ITEM("Kilos (kg)"))();
  await idVisible(ids.CHIP_LIST_ITEM("Stones (st)"))();
  await idVisible(ids.CHIP_LIST_ITEM("Pounds (lbs)"))();
};
