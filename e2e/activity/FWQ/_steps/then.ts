import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import { FinancialWellnessQuizDescriptionPage } from "../_resources/types";
import { swipeFromText } from "./when";
import { scrollFromID } from "_utils/navigation/scrolling";
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

export const { scrollUntilTextVisible } = navigation.scrolling;

export const customerQuizModalVisible = (name: string, daysLeft: string) => async () => {
  await textVisible(name)();
  await idVisible(ids.EVENT_DESCRIPTION("0 / 1 journeys"))();
  await textVisible(`${daysLeft} days left`)();
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
  await idVisible("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await idVisible("RADIO_ITEM_SELECTED_agree_false")();
  await idVisible("RADIO_ITEM_SELECTED_neutral_false")();
  await idVisible("RADIO_ITEM_SELECTED_disagree_false")();
  await idVisible("RADIO_ITEM_SELECTED_strongly_disagree_false")();
};

export const canSeeEngagementSurvey1To10CheckBoxes = async () => {
  await idVisible("RADIO_ITEM_SELECTED_10_false")();
  await idVisible("RADIO_ITEM_SELECTED_9_false")();
  await idVisible("RADIO_ITEM_SELECTED_8_false")();
  await idVisible("RADIO_ITEM_SELECTED_7_false")();
  await idVisible("RADIO_ITEM_SELECTED_6_false")();
  await idVisible("RADIO_ITEM_SELECTED_5_false")();
  await idVisible("RADIO_ITEM_SELECTED_4_false")();
  await idVisible("RADIO_ITEM_SELECTED_3_false")();
  await idVisible("RADIO_ITEM_SELECTED_2_false")();
  await idVisible("RADIO_ITEM_SELECTED_1_false")();
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
