import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import { FinancialWellnessQuizDescriptionPage } from "../_resources/types";
import { swipeFromText } from "./when";
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
} = navigation.common;

export const {
  challengeNudgeVisible,
  hqNudgeVisible,
  completedHQNudgeVisible,
  maximiseYucoinVisible,
} = screens.yuscreen;

export const { scrollUntilTextVisible, scrollFromID } = navigation.scrolling;

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

export const onHQInformationScreen = (copy: any) => async () => {
  await scrollUntilTextVisible("SDUI_BODY_SCROLL", copy.description, "down")();
  await scrollUntilTextVisible("SDUI_BODY_SCROLL", copy.boxOneTitle, "down")();
  await scrollUntilTextVisible("SDUI_BODY_SCROLL", copy.boxOneDescription, "down")();
  await scrollUntilTextVisible("SDUI_BODY_SCROLL", copy.boxTwoTitle, "down")();
  await scrollUntilTextVisible("SDUI_BODY_SCROLL", copy.boxTwoDescription, "down")();
  await scrollUntilTextVisible("SDUI_BODY_SCROLL", copy.boxThreeTitle, "down")();
  await scrollUntilTextVisible("SDUI_BODY_SCROLL", copy.boxThreeDescription, "down")();
  await scrollUntilTextVisible("SDUI_BODY_SCROLL", copy.infoBox, "down")();
  await scrollFromID("SDUI_BODY_SCROLL", "up", "fast")();
  await textVisible(copy.cta)();
  copy.disclaimer.forEach((text) => async () => {
    await textVisible(text)();
  });
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
  (currentPosition: number, maxLength = 200, colour = "#E30D76") =>
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
