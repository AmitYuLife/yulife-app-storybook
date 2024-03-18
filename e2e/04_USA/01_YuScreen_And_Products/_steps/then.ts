import { navigation } from "@utils";
import { screens } from "@appScreens";
import {
  ONBOARDING_SCREEN,
  V4_YUSCREEN,
  CONTENT_SMALL_IMAGE_CARD_URL,
  CONTENT_MIDDLE_ITEM_IMAGE,
  PCP_LIST_DESCRIPTION,
  INFO_PANEL_IMAGE,
  RIGHT_SIDE_IMAGE_BOX_OPTION,
  BOX_OPTION_TITLE,
  BOX_OPTION_DESCRIPTION,
  YUSCREEN_SCROLL_VIEW,
  COUNTDOWN_COMPONENT,
  LEFT_SIDE_BACKGROUD_IMAGE_SLOT,
  LEFT_SIDE_TEXT_SLOT_POWER,
  CAROUSEL_CARD,
  SPONSOR_LOGO_IMAGE,
  WELLBEING_HUB_SCREEN,
  TEXT_TEMPLATE,
} from "@ids";
import moment = require("moment");
import * as text from "../_resources/fixture";
import {
  BPEEW_USA_1_DENPPO,
  BPEEW_USA_2_ADD,
  BPEEW_USA_3_ACC,
  BUSINESS_ACCOUNT_USA_1,
} from "04_USA/_data";
import { BoxOption, USProductData, YuScreenInfo } from "../_resources/types";
import { expect } from 'detox'
import { BPEW_GDent_10 } from "@data";

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
  await textVisibleAtIndex(text.yuCoinText, 0)();
  await textVisible(text.powerText)();

  switch (packType) {
    case "Wellbeing/DENPPO/DENCHOI":
      await textVisible(yuCoinPower)();
      await textVisible(text.wellbeingAccessText)();
      await textVisible(text.Guardian_DENPPO.slotAbreviation)();
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
      await textVisible(text.Guardian_SPDIS.slotAbreviation)();      
      await textVisible(text.Guardian_VLTD.slotAbreviation)();
      await textVisible(text.Guardian_VSTD.slotAbreviation)();
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
  await textVisibleAtIndex("YuCoin", 0)();
  await textVisible("Power")();

  switch (packType) {
    case "Wellbeing/DENPPO/DENCHOI/TLIF/VIS": // If user have more then 5 Products and open enrollment window should see also More protection
      await textVisible(yuCoinPower, 0)();
      await expect(element(by.text(text.WellbeingProduct))).toBeVisible();
      await expect(element(by.text(text.Guardian_DENPPO.heading))).toBeVisible();
      await expect(element(by.text(text.Guardian_DENHMO.slotAbreviation))).toBeVisible();
      await expect(element(by.text(text.Guardian_DENCHOI.slotAbreviation))).toBeVisible();
      if (device.name.includes("(iPhone 15 Pro Max)")) {
        await expect(element(by.text(text.MoreProtection))).toBeVisible();
      }
      await scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, COUNTDOWN_COMPONENT, "down")();
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await swipeFromText(text.activeEnrollmentButtonMessage, "up", "fast")();
      }
      await enrollmentMessageVisible(moment(BPEEW_USA_1_DENPPO.data.enrolment_end_date).format("MM/DD/YYYY"), "active")()
      await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyText, "down")();
      await howToEnrollTexts();
      break;
    case "ADD/STD/LTD/VADD/HI":
      await textVisible(yuCoinPower)();
      await textVisible(text.Guardian_ADD.slotAbreviation)();
      await textVisible(text.Guardian_STD.slotAbreviation)();
      await textVisible(text.Guardian_LTD.slotAbreviation)();
      await textVisible(text.Guardian_VADD.slotAbreviation)();
      if (device.name.includes("(iPhone 15 Pro Max)")) {
        await expect(element(by.text(text.MoreProtection))).toBeVisible();
      }
      await scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, COUNTDOWN_COMPONENT, "down")();
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await swipeFromText(text.activeEnrollmentButtonMessage, "up", "fast")();
      }
      await enrollmentMessageVisible(moment(BPEEW_USA_2_ADD.data.enrolment_end_date).format("MM/DD/YYYY"), "active")()
      await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyText, "down")();
      await howToEnrollTexts();
      break;
    case "VLTD/SPDIS/ACC/CRI/VSTD":
      await textVisible(yuCoinPower)();
      await textVisible(text.Guardian_VLTD.slotAbreviation)();
      await textVisible(text.Guardian_SPDIS.slotAbreviation)();
      await textVisible(text.Guardian_ACC.heading)();
      await textVisible(text.Guardian_VSTD.slotAbreviation)();
      if (device.name.includes("(iPhone 15 Pro Max)")) {
        await expect(element(by.text(text.MoreProtection))).toBeVisible();
      }
      await scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, COUNTDOWN_COMPONENT, "down")();
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await swipeFromText(text.activeEnrollmentButtonMessage, "up", "fast")();
      }
      await enrollmentMessageVisible(moment(BPEEW_USA_3_ACC.data.enrolment_end_date).format("MM/DD/YYYY"), "active")()
      await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyText, "down")();
      await howToEnrollTexts();
      break;
    case "ACCSICK/CAN/VLIF":
      await textVisible(yuCoinPower)();
      await textVisible(text.Guardian_CAN.heading)();
      await textVisible(text.Guardian_ACCSICK.slotAbreviation)();
      await textVisible(text.Guardian_VLIF.slotAbreviation)();
      if (device.name.includes("(iPhone 15 Pro Max)")) {
        await expect(element(by.text(text.MoreProtection))).not.toBeVisible();
        await expect(element(by.text(text.activeEnrollmentButtonMessage))).not.toBeVisible();
      }
      await swipeFromText(text.Guardian_VLIF.slotAbreviation, "up", "fast")();
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await expect(element(by.text(text.activeEnrollmentButtonMessage))).not.toBeVisible();
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
  const visionOrCancerProd = copyText.id === "Guardian_CAN" || copyText.id === "Guardian_VIS" ? true : false
  await textVisible(copyText.heading)();
  await textVisible(copyText.description)();
  await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(text.Guardian_ImageUrl))();
  await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(copyText.middleImage))();

  await textVisible(copyText.markdownTitle_1)();
  await idVisible(CONTENT_SMALL_IMAGE_CARD_URL(copyText.image_1))();
  await textVisible(copyText.markdownSubTitle_1)();
  visionOrCancerProd && await idVisible(CONTENT_SMALL_IMAGE_CARD_URL(copyText.image_2))();

  await swipeFromText(copyText.markdownTitle_2, "up", "slow", 0.3)();

  !visionOrCancerProd && await idVisible(CONTENT_SMALL_IMAGE_CARD_URL(copyText.image_2))();
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
    await textVisible(copyText.shortDescription)();
  }
};

export const onLegalStuffPage = (copyText: USProductData) => async () => {
  await swipeFromText(copyText.legalStuff_1, "down", "fast")();
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

export const onPCPPage = (hasBanners = true) => async () => {
  if (hasBanners) {
    await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(text.Guardian_Top_Banner))()
    await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(text.YuLife_Top_Banner))()
    await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(text.Transamerica_Top_Banner))()
  }
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

export const correctUSAOnboardingScreenVisible = (product:YuScreenInfo) => async () => {
  await textVisibleAtIndex(text.yuCoinText, 0)()
  await textVisible(text.powerText)()
  await textVisible(product.mainYuCoinPower)()
  product.SlotProductTitle && await textVisible(product.SlotProductTitle)()
  product.SlotLeftBackgroundImgSrc && await idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(product.SlotLeftBackgroundImgSrc), 0)()
  product.SlotYuCoinPowerText && await idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(product.SlotYuCoinPowerText), 0)()
  //if product data have info for second slot will run below
  product.SecondSlotProductTitle && await textVisible(product.SecondSlotProductTitle)()
  product.SecondSlotLeftBackgroundImgSrc && await idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(product.SecondSlotLeftBackgroundImgSrc), 1)()
  product.SlotYuCoinPowerText && await idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(product.SlotYuCoinPowerText), 1)()
  await idVisible(ONBOARDING_SCREEN)()
  await textVisible(text.protectionPowered)()
  await textVisible(text.earnRewardsCopy)()
}

export const USAProdSlotVisible = (prod:YuScreenInfo) => async () => {
  await textVisible(prod.mainYuCoinPower)()
  await textVisible(prod.SlotProductTitle)()
  prod.SlotLeftBackgroundImgSrc && await idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(prod.SlotLeftBackgroundImgSrc), 0)()
  prod.SlotYuCoinPowerText && await idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(prod.SlotYuCoinPowerText), 0)()
        
  prod.SecondSlotProductTitle && await textVisible(prod.SecondSlotProductTitle)()
  prod.SecondSlotLeftBackgroundImgSrc && await idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(prod.SecondSlotLeftBackgroundImgSrc), 1)()
  prod.SlotYuCoinPowerText && await idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(prod.SlotYuCoinPowerText), 1)()
}

export const onYuScreenUSA = (customer: any) => async () => {
  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;

  await textVisible(`${firstName} ${lastName}`)()
  await idVisible(V4_YUSCREEN)()
  await textVisible(`${text.createYumujiHeading}`)()
  await textVisible(`${text.createYumujiText}`)()
  await textVisible(`${text.createYumujiCTA}`)()
  await textVisibleAtIndex(`${text.yuCoinText}`, 0)() // @update - can't find YuCoin text on yuscreen it is there
  await textVisible(`${text.powerText}`)()
  await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyLabel, "down")()
  await textVisible(`${text.SurveyLabel}`)()
  await textVisible(`${text.SurveyText}`)()
  await idNotVisible(CAROUSEL_CARD)()
  await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${firstName} ${lastName}`, "up")()

}

export const sponsoredByVisible = (visible: boolean) => async () => {
  if(visible){
    await textVisible(text.SponsoredBy)()
    await idVisible(SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor))()
    await idVisible(SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor))()
    await idVisible(SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor))()
  } else {
    await textNotVisible(text.SponsoredBy)()
    await idNotVisible(SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor))()
    await idNotVisible(SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor))()
    await idNotVisible(SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor))()
  }
}

export const boxOptionVisible = (box:BoxOption, visible: boolean) => async () => {
  if(visible){
    await idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(box.imageUrl))()
    await idVisible(BOX_OPTION_TITLE(box.title))()
    await idVisible(BOX_OPTION_DESCRIPTION(box.description))()
  } else {
    await idNotVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(box.imageUrl))()
    await idNotVisible(BOX_OPTION_TITLE(box.title))()
    await idNotVisible(BOX_OPTION_DESCRIPTION(box.description))()
  }
}

export const enrollmentComponentVisible = (date:typeof BPEW_GDent_10, state = "pre" || "active") => async () => {
  const targetDate = date.data.enrolment_end_date
  const countdownDate = state === "pre" ? moment(targetDate).subtract(1, "day").format("YYYY-MM-DD") : targetDate
  const buttonMessage = state === "pre" ? text.preEnrollmentButtonMessage : text.activeEnrollmentButtonMessage

  await enrollmentMessageVisible(targetDate, state)()
  await enrolmentEndsIn(moment(countdownDate).format("MM/DD/YYYY"))()
  await textVisible(buttonMessage)()
}

const enrollmentMessageVisible = (date: string, state = "pre" || "active") => async () => {
  if(state === "active"){
    try {
      await textVisible(`${text.enrolmentMessage} ${moment(date).format("MM/DD/YYYY")}`)
    } catch {
      await textVisible(`${text.enrollmentMessage} ${moment(date).format("MM/DD/YYYY")}`)
    }
  } else {
    try {
      await textVisible(`${text.preEnrolmentMessage} ${moment(date).format("MM/DD/YYYY")}`)
    } catch {
      await textVisible(`${text.preEnrollmentMessage} ${moment(date).format("MM/DD/YYYY")}`)
    }
  }
}

export const wellbeingHubScreenVisible = (customer: any) => async () => {
  await idVisible(WELLBEING_HUB_SCREEN)()
  await textVisible(`Hi ${customer.data.firstName} ${customer.data.lastName}`)()
  await textVisible(text.wellbeingHubDescription)()
  await textVisible("All")()
  await idVisible(TEXT_TEMPLATE("Smart Health"))()
  await textVisible("Immediate access to a GP by phone or video")()
}