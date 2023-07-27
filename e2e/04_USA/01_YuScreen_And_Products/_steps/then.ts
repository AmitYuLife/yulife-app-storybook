import { navigation, tapID, tapText } from "@utils";
import { screens } from "@appScreens";
import {
  AVATAR_ITEM,
  RIGHT_STATUS_ICON,
  BACKGROUND_COLOUR_PRODUCT,
  ONBOARDING_SCREEN,
  YUCOIN_POWER,
  TEXT_TEMPLATE,
  V4_YUSCREEN,
  BACK_BUTTON,
  CONTENT_ITEM_IMAGE,
  CONTENT_SMALL_IMAGE_CARD_URL,
  CONTENT_MIDDLE_ITEM_IMAGE,
  PCP_LIST_DESCRIPTION,
  INFO_PANEL_IMAGE,
  RIGHT_SIDE_IMAGE_BOX_OPTION,
  BOX_OPTION_TITLE,
  BOX_OPTION_DESCRIPTION,
  YUSCREEN_SCROLL_VIEW,
  COUNTDOWN_COMPONENT,
} from "@ids";
import moment = require("moment");
import * as text from "../_resources/fixture";
import {
  BPEEW_USA_1_DENPPO,
  BPEEW_USA_2_ADD,
  BPEEW_USA_3_ACC,
  BUSINESS_ACCOUNT_USA_1,
  CPE_ACCSICK_4,
  CPE_CAN_4,
  // CPE_ULIF_2,
  CPE_VLTD_3,
  CPE_VSTD_3,
} from "04_USA/_data";
import { BoxOption, USProductData } from "../_resources/types";

export const {
  idVisible,
  idNotVisible,
  textVisible,
  textNotVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  multipleTextVisible,
  idVisibleAtIndex,
  textVisibleAtIndex,
  tapIDNotBeingVisible,
  enrolmentEndsIn
} = navigation.common;

export const {
  onEmptyYuscreen,
  onYuscreen,
  onCreateAvatarScreen,
  onAvatarBuilder,
  onAvatarCompletionScreen,
  onYourYuCoin,
  avatarBodyVisible,
  avatarBodyVisibleWithUser,
  leaderboardAvatarVisible,
  personalProductsVisible,
  onSurveyScreen,
  onSurveySubmitScreen,
  onPackageScreen,
  packageScreenCorrect,
  onSkinToneScreen,
} = screens.yuscreen;

export const { swipeToID, swipeFromText, scrollUntilIdVisible, scrollUntilTextVisible } = navigation.scrolling;

export const onboardingUsYuscreenV4 = (packType: string, yuCoinPower: string) => async () => {
  const earnRate0 = "1"; // If product having 0 earn rate will get 1
  await textVisible(text.yuCoinText)();
  await textVisible(text.powerText)();

  switch (packType) {
    case "Wellbeing/TLIF/DENCHOI":
      await textVisible(yuCoinPower)();
      await textVisible(text.wellbeingAccessText)();
      await textVisible(text.Guardian_TLIF.slotAbreviation)();
      await textVisible(text.Guardian_DENCHOI.slotAbreviation)();
      await textVisible(text.moreInsurance)();
      break;
    case "LTD/STD/VADD":
      await textVisible(yuCoinPower)();
      await textVisible(earnRate0)();
      await textVisible(text.Guardian_LTD.slotAbreviation)();
      await textVisible(text.Guardian_STD.slotAbreviation)();
      await textVisible(text.Guardian_ADD.slotAbreviation)();
      await textVisible(text.moreInsurance)();
      break;
    case "CRI/SPDIS/ACC":
      await textVisible(yuCoinPower)();
      await textVisible(earnRate0)();
      await textVisible(text.Guardian_CRI.slotAbreviation)();
      await textVisible(text.Guardian_SPDIS.slotAbreviation)();      
      await textVisible(text.Guardian_ACC.heading)();
      await textVisible(text.moreInsurance)();
      break;
    case "ACCSICK/CAN/VLIF":
      await textVisible(yuCoinPower)();
      await textVisible(earnRate0)();
      await textVisible(text.Guardian_CAN.heading)();
      await textVisible(text.Guardian_ACCSICK.slotAbreviation)();
      await textVisible(text.Guardian_VLIF.slotAbreviation)();
      await textVisible(text.moreInsurance)();
      break;
    default:
      break;
  }

  await expect(element(by.id(ONBOARDING_SCREEN))).toBeVisible();
  await expect(element(by.text(text.protectionPowered))).toBeVisible();
  await expect(element(by.text(text.earnRewardsCopy))).toBeVisible();
  await swipeFromText(text.protectionPowered, "up", "slow")();
  await expect(element(by.text(text.buttonText))).toBeVisible();
};

export const howToEnrollTexts = async () => {
  await expect(element(by.text(text.HowToEnroll))).toBeVisible();
  await expect(element(by.text(BUSINESS_ACCOUNT_USA_1.data.external_admin_url_description))).toBeVisible();
};

export const onUSAYuscreenV4 = (customer: any, packType: string, yuCoinPower: string) => async () => {
  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;

  await expect(element(by.text(`${firstName} ${lastName}`))).toBeVisible();
  await expect(element(by.id(V4_YUSCREEN))).toBeVisible();
  await expect(element(by.text(text.createYumujiHeading))).toBeVisible();
  await expect(element(by.text(text.createYumujiText))).toBeVisible();
  await expect(element(by.text(text.createYumujiCTA))).toBeVisible();
  await textVisible("YuCoin")();
  await textVisible("Power")();

  switch (packType) {
    case "Wellbeing/DENPPO/DENCHOI/TLIF/VIS": // If user have more then 5 Products and open enrollment window should see also More protection
      await textVisible(yuCoinPower, 0)();
      await expect(element(by.text(text.WellbeingProduct))).toBeVisible();
      await expect(element(by.text(text.Guardian_DENPPO.heading))).toBeVisible();
      await expect(element(by.text(text.Guardian_DENHMO.heading))).toBeVisible();
      await expect(element(by.text(text.Guardian_TLIF.slotAbreviation))).toBeVisible();
      await expect(element(by.text(text.Guardian_DENCHOI.slotAbreviation))).toBeVisible();
      if (device.name.includes("(iPhone 14 Pro)")) {
        await expect(element(by.text(text.MoreProtection))).toBeVisible();
      }
      await scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, COUNTDOWN_COMPONENT, "down")();
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await swipeFromText(text.activeEnrollmentButtonMessage, "up", "fast")();
      }
      await expect(
        element(by.text(`${text.enrollmentMessage} ${moment(BPEEW_USA_1_DENPPO.data.enrolment_end_date).format("MM/DD/YYYY")}`))
      ).toBeVisible();
      await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyText, "down")();
      await howToEnrollTexts();
      break;
    case "ADD/STD/LTD/VADD/HI":
      await textVisible(yuCoinPower)();
      await textVisible(text.Guardian_VADD.slotAbreviation)();
      await textVisible(text.Guardian_ADD.slotAbreviation)();
      await textVisible(text.Guardian_STD.slotAbreviation)();
      await textVisible(text.Guardian_LTD.slotAbreviation)();
      await textVisible(text.Guardian_HI.slotAbreviation)();
      if (device.name.includes("(iPhone 14 Pro)")) {
        await expect(element(by.text(text.MoreProtection))).toBeNotVisible();
      }
      await scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, COUNTDOWN_COMPONENT, "down")();
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await swipeFromText(text.activeEnrollmentButtonMessage, "up", "fast")();
      }
      await expect(
        element(by.text(`${text.enrollmentMessage} ${moment(BPEEW_USA_2_ADD.data.enrolment_end_date).format("MM/DD/YYYY")}`))
      ).toBeVisible();
      await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyText, "down")();
      await howToEnrollTexts();
      break;
    case "VLTD/SPDIS/ACC/CRI/VSTD":
      await textVisible(yuCoinPower)();
      await textVisible(text.Guardian_VLTD.slotAbreviation)();
      await textVisible(text.Guardian_SPDIS.slotAbreviation)();
      await textVisible(text.Guardian_ACC.heading)();
      await textVisible(text.Guardian_CRI.slotAbreviation)();
      await textVisible(text.Guardian_VSTD.slotAbreviation)();
      if (device.name.includes("(iPhone 14 Pro)")) {
        await expect(element(by.text(text.MoreProtection))).toBeNotVisible();
      }
      await scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, COUNTDOWN_COMPONENT, "down")();
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await swipeFromText(text.activeEnrollmentButtonMessage, "up", "fast")();
      }
      await expect(
        element(by.text(`${text.enrollmentMessage} ${moment(BPEEW_USA_3_ACC.data.enrolment_end_date).format("MM/DD/YYYY")}`))
      ).toBeVisible();
      await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyText, "down")();
      await howToEnrollTexts();
      break;
    case "ACCSICK/CAN/VLIF":
      await textVisible(yuCoinPower)();
      await textVisible(text.Guardian_CAN.heading)();
      await textVisible(text.Guardian_ACCSICK.slotAbreviation)();
      await textVisible(text.Guardian_VLIF.slotAbreviation)();
      if (device.name.includes("(iPhone 14 Pro)")) {
        await expect(element(by.text(text.MoreProtection))).toBeNotVisible();
        await expect(element(by.text(text.activeEnrollmentButtonMessage))).toBeNotVisible();
      }
      await swipeFromText(text.Guardian_VLIF.slotAbreviation, "up", "fast")();
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await expect(element(by.text(text.activeEnrollmentButtonMessage))).toBeNotVisible();
        await expect(element(by.text(text.ClosedEnrolment))).toBeVisible();
      }
      await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyText, "down")();
      await exploreInsuranceBoxVisible()

      break;
    default:
      break;
  }
  await expect(element(by.text(text.SurveyLabel))).toBeVisible();
  await expect(element(by.text(text.SurveyText))).toBeVisible();
  await swipeFromText(text.SurveyText, "down", "fast")();
};

export const onMoreProtectionProductsCard = (copyText: USProductData) => async () => {
  await textVisible(copyText.heading)();
  await textVisible(copyText.description)();
  await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(text.Guardian_ImageUrl))();
  await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.middleImage))();

  await textVisible(copyText.markdownTitle_1)();
  await idVisible(CONTENT_SMALL_IMAGE_CARD_URL(copyText.image_1))();
  await textVisible(copyText.markdownSubTitle_1)();

  await swipeFromText(copyText.markdownTitle_2, "up", "slow", 0.3)();

  await idVisible(CONTENT_SMALL_IMAGE_CARD_URL(copyText.image_2))();
  await textVisible(copyText.markdownSubTitle_2)();
  await idVisible(CONTENT_SMALL_IMAGE_CARD_URL(copyText.image_3))();
  await textVisible(copyText.markdownSubTitle_3)()

  await swipeFromText(copyText.markdownTitle_3, "up", "slow")();

  //Switch case checking the footer
  switch (copyText.id) {
    case "Guardian_DENPPO":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Footer_Text_Part1)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_DENHMO":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Footer_Text_Part1)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_DENCHOI":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_VIS":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Guardian_VIS.footerText)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_WLIF":
      await textVisible(text.Guardian_WLIF.footerText)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_ULIF":
      await textVisible(text.Guardian_ULIF.footerText)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_VADD":
      await textVisible(text.Guardian_VADD.footerText)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_VSTD":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_ACC":
      await textVisible(text.Guardian_Video_Title)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_VLTD":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Guardian_VLTD.footerText)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_HI":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Guardian_HI.footerText)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_CRI":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_SPDIS":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_CAN":
      await textVisible(text.Guardian_Video_Title)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      break;
    case "Guardian_ACCSICK":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Guardian_ACCSICK.footerText)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    case "Guardian_VLIF":
      await textVisible(text.Guardian_Video_Title)();
      await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.videoImageUrl))();
      await textVisible(text.Guardian_VLIF.footerText)();
      await textVisible(text.Footer_Text_Part2)();
      await textVisible(text.Footer_Text_Part3)();
      break;
    default:
      break;
  }
};

export const onDescriptionProductCard = (copyText: USProductData) => async () => {
  if (copyText.id === "Guardian_WLIF") {
    await textVisibleAtIndex(copyText.heading, 0)();
    await textVisibleAtIndex(copyText.shortDescription, 0)();
  } else if (copyText.id === "Guardian_ULIF") {
    await textVisibleAtIndex(copyText.heading, 1)();
    await textVisibleAtIndex(copyText.shortDescription, 1)();
  } else if (copyText.id === "Guardian_ADD") {
    await textVisible(copyText.slotAbreviation)();
    await textVisible(copyText.shortDescription)();
  } else if (copyText.id === "Guardian_DENCHOI") {
    await idVisible(BOX_OPTION_TITLE(copyText.boxTitle))();
  } else {
    await textVisible(copyText.boxTitle)();
    await textVisible(copyText.boxDescription)();
  }
};

export const onLegalStuffPage = (copyText: USProductData) => async () => {
  await textVisible(text.Legal_Stuff)();
  await textVisible(copyText.legalStuff_1)();
  await textVisible(copyText.legalStuff_2)();
  await textVisible(copyText.legalStuff_3)();
  await swipeFromText(text.Legal_Stuff, "up", "fast")();

  switch (copyText.id) {
    case "Guardian_DENCHOI":
      await textVisible(copyText.legalStuff_4)();
      await textVisible(copyText.legalStuff_5)();
      break;
    case "Guardian_DENHMO":
      await textVisible(copyText.legalStuff_4)();
      break;
    case "Guardian_TLIF":
      await textVisible(copyText.legalStuff_4)();
      break;
    case "Guardian":
      await textVisible(copyText.legalStuff_4)();
      break;
    case "Guardian_ADD":
      await textVisible(copyText.legalStuff_4)();
      break;
    default:
      break;
  }
};

export const onPCPPage = async () =>{
  await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(text.Guardian_Top_Banner))()
  await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(text.YuLife_Top_Banner))()
  await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(text.Transamerica_Top_Banner))()
  await textVisible("Available to you")()
}

export const infoPanelVisible = (visible: boolean) => async () => {
  if(visible){
    await idVisible(PCP_LIST_DESCRIPTION)()
    await idVisible(INFO_PANEL_IMAGE(text.PCPListInfoPanel.imageUrl))()
  } else {
    await idNotVisible(PCP_LIST_DESCRIPTION)()
    await idNotVisible(INFO_PANEL_IMAGE(text.PCPListInfoPanel.imageUrl))()  
  }
}

export const pcpProductVisible = (prod: BoxOption, visible: boolean) => async () => {
  if(visible){
    await idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(prod.imageUrl))()
    await idVisible(BOX_OPTION_TITLE(prod.title))()
    await idVisible(BOX_OPTION_DESCRIPTION(prod.description))()
  } else {
    await idNotVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(prod.imageUrl))()
    await idNotVisible(BOX_OPTION_TITLE(prod.title))()
    await idNotVisible(BOX_OPTION_DESCRIPTION(prod.description))()
  }
}

export const exploreInsuranceBoxVisible = async () => {
  await idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(text.ExploreInsureanceBox.imageUrl))()
  await idVisible(BOX_OPTION_TITLE(text.ExploreInsureanceBox.title))()
  await idVisible(BOX_OPTION_DESCRIPTION(text.ExploreInsureanceBox.description))()
}


