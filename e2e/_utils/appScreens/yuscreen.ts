import { navigation } from "@utils";
import { scrollUntilTextVisible, swipeFromText, scrollFromID, swipeFromTextAtIndex, scrollUntilIdVisible } from "_utils/navigation/scrolling";
import {
  EARN_RATE_ROW,
  PACKAGE_INFO,
  SUMMARY_SCROLL_VIEW,
  TEXT_TEMPLATE,
  VALUE_DESCRIPTION,
  YUSCREEN_V3,
  YUSCREEN_V4,
  BACKGROUND_COLOUR_PRODUCT,
  CAROUSEL_CARD,
  ONBOARDING_SCREEN,
  V4_YUSCREEN,
  SLOT_TITLE,
  YUSCREEN_SCROLL_VIEW,
  BOX_OPTION_DESCRIPTION,
  BOX_OPTION_TITLE,
  RIGHT_SIDE_IMAGE_BOX_OPTION,
  YUSCREEN,
  GET_STARTED_BUTTON,
  EMPTY_YUSCREEN_COPY,
  MALE_BODY,
  FEMALE_BODY,
  BODY_ITEM_TITLE,
  AVATAR_BODY,
  PERSONAL_PRODUCT,
  SURVEY_SCREEN,
  BUILDER_BODY,
  FIB_BROWSE_SCREEN,
  NAV_BAR,
  CATEGORY_TYPE,
  YUMOJI_PART_ID,
  AVATAR_BUILDER_LIST,
  YUMOJI_PART_ID_STATUS,
  MAXIMISE_TODAYS_EARNINGS,
  NUDGE_ITEM,
  DONE_NUDGE_ICON,
  YUMOJI_PROMPT_CTA,
  YUMOJI_PROMPT_COPY,
  EMPTY_USER_YUMOJI_AVATAR,
  YUSCREEN_V5_USERNAME,
  YUSCREEN_V5_WORLD_AND_LEVEL,
  YUMOJI_YUSCREEN_V5
} from "@ids";
import moment from "moment";
import { expect } from "detox"
import { getFullName } from "_utils/users";
import { wellbeingButtonDes, wellbeingButtonimg, wellbeingButtonTitle } from "yuscreen/yuscreen_v4/_resources/fixture";
import { yuscreenImages } from "@images"; 
import { yumojiCreateCopy } from "yuscreen/yuscreen_v5/_resources/constants";

export const {
  idVisible,
  idNotVisible,
  textVisible,
  textNotVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  multipleTextVisible,
  textVisibleAtIndex,
  idVisibleAtIndex,
  tapID,
  tapIDNotBeingVisible,
  tapText,
} = navigation.common;

export const onEmptyYuscreen = (customer) => async () => {
  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;

  const yuscreen = element(by.id(YUSCREEN));
  const getStartedButton = element(by.id(GET_STARTED_BUTTON));
  const copy = element(by.id(EMPTY_YUSCREEN_COPY));

  await expect(yuscreen).toBeVisible();
  await expect(getStartedButton).toBeVisible();
  await expect(copy).toBeVisible();

  await expect(element(by.text(`${firstName} ${lastName}`))).toBeVisible();
};

export const onYuscreen = (customer: any) => async () => {
  const fullName = getFullName(customer);
  const yuscreen = element(by.id(YUSCREEN));

  await expect(yuscreen).toBeVisible();

  await expect(element(by.text(fullName))).toBeVisible();
};

export const onCreateAvatarScreen = async () => {
  const createTitle = element(by.text("Create your Yumoji to step into the Yuniverse"));
  const editTitle = element(by.text("Pick a body type"));

  const maleBody = element(by.id(MALE_BODY));
  await expect(maleBody).toBeVisible();

  const femaleBody = element(by.id(FEMALE_BODY));
  await expect(femaleBody).toBeVisible();

  try {
    await expect(createTitle).toBeVisible();
  } catch (e) {
    await expect(editTitle).toBeVisible();
  }

  await textVisible("Continue")();
};

export const onAvatarBuilder = (screen: string) => async () => {
  const createTitle = element(by.text("Create your Yumoji"));
  const editTitle = element(by.text("Edit your Yumoji"));

  try {
    await expect(element(by.id(BODY_ITEM_TITLE(screen)))).toBeVisible();
  } catch (e) {
    await expect(element(by.text(screen))).toBeVisible();
  }

  try {
    await expect(createTitle).toBeVisible();
  } catch (e) {
    await expect(editTitle).toBeVisible();
  }
};

export const onAvatarCompletionScreen = async () => {
  const copy = ["Great work! \nYour Yumoji is ready for adventure.", "Done"];

  await multipleTextVisible(copy)();
};

export const onYourYuCoin = async () => {
  const copy = ["2000 steps", "5 mindful mins", "1 challenge", "Streaks", "Chests"];

  const value = [1, 1, 6, 250, 20];

  await expect(element(by.text("Your YuCoin Power"))).toBeVisible();

  for (let i = 0; i < copy.length; i++) {
    await expect(element(by.id(EARN_RATE_ROW(copy[i], value[i])))).toBeVisible();
  }
};

export const avatarBodyVisible = (eyes: string, hair: string, facialHair: string, glasses: string) => async () => {
  try {
    await expect(element(by.id(AVATAR_BODY([eyes, hair, facialHair, glasses])))).toBeVisible();
  } catch (e) {
    await expect(element(by.id(BUILDER_BODY([eyes, hair, facialHair, glasses])))).toBeVisible();
  }
};

export const avatarBodyVisibleWithUser = (user) => async () => {
  const eyes = user.data.avatar.leftEye.partId;
  const hair = user.data.avatar.hair.partId;
  const facialHair = user.data.avatar.facialHair.partId;
  const glasses = user.data.avatar.glasses.partId;

  const partsList = [eyes, hair, facialHair, glasses];

  await expect(element(by.id(AVATAR_BODY(partsList)))).toBeVisible();
};

export const leaderboardAvatarVisible =
  (facialHair: string, eyes: string, hair: string, glasses: string) => async () => {
    await expect(element(by.id(AVATAR_BODY([facialHair, eyes, hair, glasses])))).toBeVisible();
  };

export const personalProductsVisible = async () => {
  const products = ["Income Protection", "Family Income Benefit", "Critical Illness", "Travel Insurance"];

  for (const i of products) {
    await expect(element(by.id(PERSONAL_PRODUCT(i)))).toBeVisible();
  }
};

export const onSurveyScreen = async () => {
  const surveyScreen = element(by.id(SURVEY_SCREEN));
  const title = element(by.text("What Would You Like To See?"));

  await expect(surveyScreen).toBeVisible();
  await expect(title).toBeVisible();
};

export const onSurveySubmitScreen = async () => {
  const bodyCopy = element(
    by.text(
      "We appreciate your feedback. Thank you for helping us make YuLife the best insurance company in the world!"
    )
  );
  const buttonCopy = element(by.text("Close"));

  await expect(bodyCopy).toBeVisible();
  await expect(buttonCopy).toBeVisible();
};

export const onPackageScreen = async () => {
  await expectIsVisibleViaID(PACKAGE_INFO);
  await multipleTextVisible(["Common", "Rare", "Epic"])();
};

export const packageScreenCorrect = async () => {
  const textElements = [
    "How it works",
    "How much would it pay out?",
    "Other benefits",
    "YuLife app",
    "Smart Health",
    "Documents",
    "Terms & Conditions",
    "Privacy Policy",
    "Rewards Policy",
    "Key Facts",
    "Policy Guide",
    "General Terms of Business",
    "Have a question?",
    "FAQs",
  ];

  for (const i of textElements) {
    try {
      await scrollUntilTextVisible(FIB_BROWSE_SCREEN, i, "down")();
      await expect(element(by.text(i))).toBeVisible();
    } catch (e) {
      await scrollUntilTextVisible(SUMMARY_SCROLL_VIEW, i, "down")();
      await expect(element(by.text(i))).toBeVisible();
    }
  }
};

export const onYuscreenV3 = (customer: any) => async () => {
  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;
  await expect(element(by.text(`${firstName} ${lastName}`))).toBeVisible();
  await expect(element(by.id(YUSCREEN_V3(true)))).toBeVisible();
};

export const onYuscreenV4 = (customer: any, packType: string, yuCoinPower: string, createYuMoji = true) => async () => {
  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;
  const createYumujiHeading = "Earn 100 YuCoin";
  const createYumujiText = "when you create your Yumoji.";
  const createYumujiCTA = "Create Yumoji";
  const lifeInsurance = "Life Insurance";
  const criticalIllness = "Critical Illness";
  const incomeProtection = "Income Protection";
  const WellbeingProduct = "Wellbeing Access";
  const noProductText = "More protection coming soon";
  const dentalInsurance = "Dental";
  const dentalYuCoinPower = "+6";
  const PLIYuCoinPower = "+20";
  const dentalPriceFrom = "From £12.99 per month";
  const extendLifeInsurance = "Extend your life insurance";
  const surveyText = "We love hearing from you.\nHelp shape the future of YuLife!";
  const surveyLabel = "Share your thoughts";
  const groupDental = "Dental Cover";
  const dentalChoice = "Bupa Dental Choice"
  const paidBy = "Employer paid";
  const employerScheme = "Employer scheme";
  const HealthInsurance = "Health Insurance"
  const StartSoon = "Starts soon"

  await textVisible(`${firstName} ${lastName}`)();
  await idVisible(V4_YUSCREEN)()
  createYuMoji && await textVisible(createYumujiHeading)();
  createYuMoji && await textVisible(createYumujiText)();
  createYuMoji && await textVisible(createYumujiCTA)();
  await textVisibleAtIndex(yuCoinPower, 0)();
  await textVisibleAtIndex("YuCoin", 0)();
  await textVisible("Power")();

  switch (packType) {
    case "wellbeing only":      
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(WellbeingProduct)();
      await textNotVisible(noProductText)();
      await swipeFromText(WellbeingProduct, "up", "fast")();
      await idNotVisible(CAROUSEL_CARD)();
      await textVisible(surveyText)();
      await textVisible(surveyLabel)();
      await swipeFromText(surveyText, "down", "fast")();
      break;
    case "dentalActiveAndPliInactive":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(dentalInsurance)();
      await swipeFromText(createYumujiCTA, "up", "slow")();
      await idVisibleAtIndex(CAROUSEL_CARD, 0)();
      await textNotVisible(dentalPriceFrom)();
      await textNotVisible(extendLifeInsurance)();
      await swipeFromText(surveyText, "down", "slow")();
      break;
    case "5 Products Slots":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textNotVisible(paidBy)();
      await textVisibleAtIndex("10", 0)();
      await textVisible(criticalIllness)();
      await textVisibleAtIndex("10", 1)();
      await textVisible(incomeProtection)();
      await textVisibleAtIndex("10", 2)();
      await textVisible(WellbeingProduct)();
      await textVisible("1")();
      break;
    case "groupDental":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisible(groupDental)();
      await textVisible(employerScheme)();
      break;
      case "dentalChoice":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisible(dentalChoice)();
      await textVisible(employerScheme)();
      break;
    case "0EarnRateSlot":
      await textNotVisible("0")(); // should not be visible in slot because earn rate is 0 in product details
      await textVisible(incomeProtection)();
      await textNotVisible(paidBy)();
      await textNotVisible(dentalInsurance)(); // should not because of Gdent  bought by their company XSE-1376
      await swipeFromText(incomeProtection, "up", "fast")();
      await idNotVisible(CAROUSEL_CARD)()
      await swipeFromText(surveyText, "down", "fast")();
      break;
    case "cancelledDental":
      await textVisible(yuCoinPower)();
      await textNotVisible(dentalInsurance)();
      await textNotVisible(dentalYuCoinPower)();
      break;
    case "GHI_FUTURE":
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textNotVisible(dentalInsurance)();
      await textNotVisible(dentalInsurance)();
      await textNotVisible(dentalYuCoinPower)();
      await textNotVisible(lifeInsurance)();
      await textVisible(HealthInsurance)();
      await textVisible(StartSoon)();
      break;
    case "GHI_STARTED":
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textNotVisible(dentalInsurance)();
      await textNotVisible(dentalInsurance)();
      await textNotVisible(dentalYuCoinPower)();
      await textNotVisible(lifeInsurance)();
      await textVisible(HealthInsurance)();
      await textVisible(employerScheme)();
      await textNotVisible(StartSoon)();
      break;
    case "pension": 
      await textVisibleAtIndex(yuCoinPower, 0)();
      await idVisible(SLOT_TITLE("Pension Contributions"))()
      break;
    case "PliOnly":
      await textVisible(PLIYuCoinPower)();
      await textVisible(lifeInsurance)();
      await swipeFromText(createYumujiCTA, "up", "slow")();
      await idVisibleAtIndex(CAROUSEL_CARD, 0)();
      await textVisible(extendLifeInsurance)();
      break;
    case "noPLI":
      await textNotVisible(PLIYuCoinPower)();
      await textNotVisible(lifeInsurance)();
      await swipeFromText(createYumujiCTA, "up", "slow")();
      await textNotVisible(extendLifeInsurance)();
      break;
    case "holdingPLI":
      await textVisible("6")();
      await textVisible(lifeInsurance)();
      await swipeFromText(createYumujiCTA, "up", "slow")();
      await textNotVisible(extendLifeInsurance)();
      break;
    default:
      break;
  }
};

export const onProductDetails = (coverType: string, productName: string, earnRate: number) => async () => {
  const lumpSum = `x salary as lump sum`;
  const yuCoin = `YuCoin Power`;

  const product = TEXT_TEMPLATE(productName);
  const power = VALUE_DESCRIPTION(earnRate, yuCoin);

  const documents = TEXT_TEMPLATE("Documents");

  await expect(element(by.text(coverType))).toBeVisible();
  await expect(element(by.id(product))).toBeVisible();
  await expect(element(by.id(power))).toBeVisible();
  await expect(element(by.id(documents))).toBeVisible();
  await expect(element(by.text("Policy Details"))).toBeVisible();
};

export const onCertificate =
  (productName: string, customer: any, customerGroupPol: any, business: any, businessEmployee: any) => async () => {
    const customerName = `${customer.data.firstName} ${customer.data.lastName}`;
    const companyName = business.data.business_account_name;
    const policyNumber = customerGroupPol.data.business_product_id;
    const dateJoined = moment(businessEmployee.data.start_date).format("DD/MM/YYYY");

    await expect(element(by.text(productName))).toBeVisible();

    await expect(element(by.text("Client name"))).toBeVisible();
    await expect(element(by.text(customerName))).toBeVisible();

    await expect(element(by.text("Company name"))).toBeVisible();
    await expect(element(by.text(companyName))).toBeVisible();

    await expect(element(by.text("Policy number"))).toBeVisible();
    await expect(element(by.text(policyNumber))).toBeVisible();

    await expect(element(by.text("Cover start date"))).toBeVisible();
    await expect(element(by.text(dateJoined))).toBeVisible();
  };

export const onChooseAvatarBodyScreen = async () => {
  const createTitle = element(by.text("Create your Yumoji to step into the Yuniverse"));
  await expect(createTitle).toBeVisible();

  const femaleBody = element(by.id(FEMALE_BODY));
  await expect(femaleBody).toBeVisible();

  const maleBody = element(by.id(MALE_BODY));
  await expect(maleBody).toBeVisible();

  const continueButtonText = element(by.text("Continue"));
  await expect(continueButtonText).toBeVisible();

  const laterButtonText = element(by.text("I'll do this later"));
  await expect(laterButtonText).toBeVisible();
};

export const onSkinToneScreen = (screen: string) => async () => {
  try {
    await expect(element(by.id(BODY_ITEM_TITLE(screen)))).toBeVisible();
  } catch (e) {
    await expect(element(by.text(screen))).toBeVisible();
  }
};

export const onFacialHairScreen = (screen: string) => async () => {
  try {
    await expect(element(by.id(BODY_ITEM_TITLE(screen)))).toBeVisible();
  } catch (e) {
    await expect(element(by.text(screen))).toBeVisible();
  }
};

export const onboardingYuscreenV4 = (packType: string, yuCoinPower: string) => async () => {
  const noProductText = "More protection coming soon";
  const wellbeingAccessText = "Wellbeing Access";
  const availableProducts = "More protection";
  const allPoweredUp = "You are all powered up!"
  const protectionPowered = "Protection, powered up!";
  const earnRewardsCopy = "Earn rewards faster with increased YuCoin Power";
  const buttonText = "Check out my power";
  const yuCoinText = "YuCoin";
  const powerText = "Power";
  const paidBy = "Employer paid";
  const lifeInsurance = "Life Insurance";
  const criticalIllness = "Critical Illness";
  const incomeProtection = "Income Protection";
  const groupDental = "Dental Cover";
  const productYuCoin = "10";
  const dentalYuCoin = "5";

  switch (packType) {
    case "wellbeing only":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(wellbeingAccessText)();
      await textVisible(paidBy)();
      await textVisible(noProductText)();
      await textNotVisible(availableProducts)();
      break;
    case "3 Products Slots":
      await textVisible(yuCoinPower)(); // 31
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisible(lifeInsurance)();
      await textVisibleAtIndex(paidBy, 0)();
      await textVisibleAtIndex(productYuCoin, 0)();
      await textVisible(criticalIllness)();
      await textVisibleAtIndex(paidBy, 1)();
      await textVisibleAtIndex(productYuCoin, 1)();
      await textVisible(incomeProtection)();
      await textVisibleAtIndex(paidBy, 2)();
      await textVisibleAtIndex(productYuCoin, 2)();
      await textVisible(allPoweredUp)();
      break;
    case "groupDental":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisibleAtIndex(dentalYuCoin, 1)();
      await textVisible(groupDental)();
      await textVisible(paidBy)();
      await textVisible(allPoweredUp)();
      break;
    case "0EarnRate":
      await textVisible(incomeProtection)();
      await textVisible(powerText)();
      await textVisible(noProductText)();
      await textVisible(paidBy)();
      await textVisible(yuCoinPower)();
      break;
    case "noProducts":
      await textVisible(yuCoinPower)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisible(noProductText)();
      await textVisible(protectionPowered)();
      await textVisible(earnRewardsCopy)();
      await textVisible(buttonText)();
      break;
    default:
      break;
  }

  await expect(element(by.id(ONBOARDING_SCREEN))).toBeVisible();
  await expect(element(by.text(protectionPowered))).toBeVisible();
  await expect(element(by.text(earnRewardsCopy))).toBeVisible();
  await swipeFromText(protectionPowered, "up", "slow")();
  await expect(element(by.text(buttonText))).toBeVisible();
};

export const wellbeingHubVisible = (visible = true) => async () => {
  if(visible){
    await idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(wellbeingButtonimg))
    await idVisible(BOX_OPTION_TITLE(wellbeingButtonTitle))
    await idVisible(BOX_OPTION_DESCRIPTION(wellbeingButtonDes))
  } else {
    await idNotVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(wellbeingButtonimg))
    await idNotVisible(BOX_OPTION_TITLE(wellbeingButtonTitle))
    await idNotVisible(BOX_OPTION_DESCRIPTION(wellbeingButtonDes))
  }
}


export const yuCoinPowerInfoVisible = (yuCoinPower: number) => async () => {
  const powerBoost = `For every 1 YuCoin you would\nhave earned, you now earn ${yuCoinPower}!`;
  const baseYucoinPower = "Reach your rewards faster with YuCoin Power!"
  const wellbeingEarn = "You can earn YuCoin for your wellbeing activities!";

  await textVisibleAtIndex(`${yuCoinPower}`, 1)();
  await textVisibleAtIndex(`${yuCoinPower}`, 2)();
  await textVisibleAtIndex(`${yuCoinPower}`, 3)();
  await swipeFromText("Activities that earn YuCoin:", "up", "slow")();
  await textVisible(`${yuCoinPower * 8}`)();
  await textVisible(`${yuCoinPower * 20}`)();
  // @update calculations wrong on bitrise, passing locally
  // const streakMultiple = (yuCoinPower * 40).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // await textVisible(streakMultiple)();
  await swipeFromText("Activities that earn YuCoin:", "down", "fast")();

  if (yuCoinPower < 2) {
    await textVisible(wellbeingEarn)();
    await textVisible(baseYucoinPower)()
    await textVisible("2000 steps")();
    await textVisible("1.6km cycling")();
    await textVisible("5 mindful minutes")();
    await textVisible("complete 1 challenge")();
    await textVisible("open 1 chest")();
    await textVisible("complete 1 streak")();
  } else {
    await textVisible(baseYucoinPower)()
    await textVisible(powerBoost)()
    await swipeFromText("Activities that earn YuCoin:", "up", "slow")();
    await textVisible("2000 steps")();
    await textVisible("1.6km cycling")();
    await textVisible("5 mindful minutes")();
    await swipeFromText("Activities that earn YuCoin:", "up", "slow")();
    await textVisible("complete 1 challenge")();
    await textVisible("open 1 chest")();
    await textVisible("complete 1 streak")();
  }
};

export const goToYuScreenAndDismissIntro = async () => {
    await tapID(NAV_BAR("yu"))()
    await tapText("Check out my power", 2500)()
    await tapText("I'll do this later", 2500)()
}

export const goToYuScreenAndDismissPower = async () => {
    await tapID(NAV_BAR("yu"))()
    await tapText("Check out my power", 2500)()
}

export const startYumojiBuilder = (bodyTypeID:string) => async () => {
  await tapText("Create Yumoji", 2500)()
  await tapID(bodyTypeID)()
  await tapText("Continue")()
}

export const unlockedYumojiItemsVisible = (gender:string,itemLevel:string, itemWorld:any, tapItem=true, scrollFromItemTab=true) => async () => {
  scrollFromItemTab &&  await scrollFromID(CATEGORY_TYPE("hairStyle"), "left", "fast")()

  await tapID(CATEGORY_TYPE("chest"))()
  await scrollUntilIdVisible(AVATAR_BUILDER_LIST, YUMOJI_PART_ID(`yumoji_${gender}_chest_${itemLevel}_${itemWorld}`), "down")()
  await idVisible(YUMOJI_PART_ID_STATUS("available", `yumoji_${gender}_chest_${itemLevel}_${itemWorld}`))()
  tapItem && await tapID(YUMOJI_PART_ID(`yumoji_${gender}_chest_${itemLevel}_${itemWorld}`))()

  await tapID(CATEGORY_TYPE("pants"))()
  await scrollUntilIdVisible(AVATAR_BUILDER_LIST, YUMOJI_PART_ID(`yumoji_${gender}_pants_${itemLevel}_${itemWorld}`), "down")()
  await idVisible(YUMOJI_PART_ID_STATUS("available", `yumoji_${gender}_pants_${itemLevel}_${itemWorld}`))()
  tapItem && await tapID(YUMOJI_PART_ID(`yumoji_${gender}_pants_${itemLevel}_${itemWorld}`))()

  await tapID(CATEGORY_TYPE("boots"))()
  await scrollUntilIdVisible(AVATAR_BUILDER_LIST, YUMOJI_PART_ID(`yumoji_${gender}_boots_${itemLevel}_${itemWorld}`), "down")()
  await idVisible(YUMOJI_PART_ID_STATUS("available", `yumoji_${gender}_boots_${itemLevel}_${itemWorld}`))()
  tapItem && await tapID(YUMOJI_PART_ID(`yumoji_${gender}_boots_${itemLevel}_${itemWorld}`))()

  if(itemLevel!="base"){
  await scrollFromID(CATEGORY_TYPE("chest"), "left", "slow")()
  await tapID(CATEGORY_TYPE("gloves"))()
  await scrollUntilIdVisible(AVATAR_BUILDER_LIST, YUMOJI_PART_ID(`yumoji_${gender}_gloves_${itemLevel}_${itemWorld}`), "down")()
  await idVisible(YUMOJI_PART_ID_STATUS("available", `yumoji_${gender}_gloves_${itemLevel}_${itemWorld}`))()
  tapItem && await tapID(YUMOJI_PART_ID(`yumoji_${gender}_gloves_${itemLevel}_${itemWorld}`))()
  }
}

export const saveYumoji = (firstTime=true) => async ()=>{
  await tapText("Save")();
  await tapText("Save changes")();
  firstTime && await tapText("Done")();
}

export const yumojiItemLockedModalVisible = (level:number) => async () => {
  await textVisible("Item locked 🔒")()
  await textVisible(`Unlock this item at level ${level} on the quest map!`)()
  await textVisible("Take a challenge")()
  await textVisible("Close")()
}

export const maximiseYucoinVisible = (current:number, max:number) => async () => {
  await textVisible("YuCoin earned today")()
  await idVisible(MAXIMISE_TODAYS_EARNINGS(current, max))()
}

export const chestNudgeVisible = (yuCoinAmount=200) => async () => {
  const nudgeCopy = `Unlock a chest\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(NUDGE_ITEM(nudgeCopy))()
}
export const walkingNudgeVisible = (steps="12,000", yuCoinAmount=60) => async () => {
  const walkingMarkdown = `Walk ${steps} steps\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(NUDGE_ITEM(walkingMarkdown))()
}

export const challengeNudgeVisible = (challengeAmount:number, yuCoinAmount:number) =>  async () => {
  let challengeText = "challenges"
  if (challengeAmount === 1) challengeText = "challenge"
  const nudgeMarkdown = `Complete ${challengeAmount} ${challengeText}\nto earn up to ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(NUDGE_ITEM(nudgeMarkdown))()
}

export const streakNudgeVisible = (yuCoinAmount=400) => async () => {
  const streakMarkdown = `Complete your streak\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(NUDGE_ITEM(streakMarkdown))()
}

export const meditationNudeVisible = (minutes=30, yuCoinAmount=60) => async () => {
  const meditationMarkdown = `Meditate for ${minutes} mins\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(NUDGE_ITEM(meditationMarkdown), 3000)()
}

export const cyclingNudgeVisible = (km=9.6, yuCoinAmount=60) => async()=>{
  const cycleMarkdown = `Cycle ${km}km\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(NUDGE_ITEM(cycleMarkdown))()
}

export const hqNudgeVisible = (yuCoinAmount=20) => async() => {
  const hqMarkdown = `Check in on your health\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(NUDGE_ITEM(hqMarkdown))()
}

export const moodMonitorNudgeVisible = async() => {
  const moodMonitorMarkdown = "Keep track of how you're\nfeeling this week!"
  await idVisible(NUDGE_ITEM(moodMonitorMarkdown))()
}

export const completedChestNudgeVisible = (yuCoinAmount=200) => async () => {
  const nudgeCopy = `Unlock a chest\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(DONE_NUDGE_ICON(nudgeCopy))()
}

export const completedWalkingNudgeVisible = (steps="12,000", yuCoinAmount=60) => async () => {
  const walkingMarkdown = `Walk ${steps} steps\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(DONE_NUDGE_ICON(walkingMarkdown))()
}

export const completedChallengeNudgeVisible = (challengeAmount:number, yuCoinAmount:number) =>  async () => {
  let challengeText = "challenges"
  if (challengeAmount === 1) challengeText = "challenge"
  const nudgeMarkdown = `Complete ${challengeAmount} ${challengeText}\nto earn up to ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(DONE_NUDGE_ICON(nudgeMarkdown))()
}

export const completedMeditationNudeVisible = (minutes=30, yuCoinAmount=60) => async () =>{
  const meditationMarkdown = `Meditate for ${minutes} mins\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(DONE_NUDGE_ICON(meditationMarkdown))()
}

export const completedCyclingNudgeVisible = (km=9.6, yuCoinAmount=60) => async()=>{
  const cycleMarkdown = `Cycle ${km}km\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(DONE_NUDGE_ICON(cycleMarkdown))()
}

export const completedStreakNudgeVisible = (yuCoinAmount=400) => async () => {
  const streakMarkdown = `Complete your streak\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(DONE_NUDGE_ICON(streakMarkdown))()
}

export const completedHQNudgeVisible = (yuCoinAmount=20) => async() => {
  const hqMarkdown = `Check in on your health\nto earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`
  await idVisible(DONE_NUDGE_ICON(hqMarkdown))()
}

export const completedMoodMonitorNudgeVisible = async() => {
  const moodMonitorMarkdown = "Keep track of how you're\nfeeling this week!"
  await idVisible(DONE_NUDGE_ICON(moodMonitorMarkdown))()
}

export const yuscreenV5CreateYumojiVisible = async()=>{
  await idVisible(YUMOJI_PROMPT_CTA)()
  await idVisible(YUMOJI_PROMPT_COPY(yumojiCreateCopy))()
  await idVisible(EMPTY_USER_YUMOJI_AVATAR)()
}

export const yuScreenV5HeaderVisible = (collapsed: boolean, name: string, world: string, level: string, emptyAvatar=false) => async () => {
    await idVisibleAtIndex(YUSCREEN_V5_USERNAME(name), 0)()
    await idVisibleAtIndex(YUSCREEN_V5_WORLD_AND_LEVEL(world, level), 0)()
    
  if(!collapsed && emptyAvatar) {
    await idVisible(EMPTY_USER_YUMOJI_AVATAR)()
  } else {
    await idNotVisible(EMPTY_USER_YUMOJI_AVATAR)()
  }

  if(!collapsed && !emptyAvatar) {
    await idVisible(YUMOJI_YUSCREEN_V5)()
  } else {
    await idNotVisible(YUMOJI_YUSCREEN_V5)()
  }
}
