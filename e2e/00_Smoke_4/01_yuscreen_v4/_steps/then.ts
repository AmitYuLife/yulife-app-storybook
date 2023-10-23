import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import moment = require("moment");
import * as data from "@data";
import { scrollUntilTextVisible } from "./when";
import * as fixture from "../_resources/fixture";
import { scrollUntilIdVisible } from "_utils/navigation/scrolling"

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
  onYuscreenV4,
  onSkinToneScreen,
} = screens.yuscreen;

const coverForWApos = "What I’m covered for";
const coverFor = "What I'm covered for";
const howToClaim = "How to make a claim";
const billingInfo = "Billing info";
const paymenHistory = "View payment history";
const updatePayment = "Update payment details";
const faq = "FAQs";
const membershipGuide = "Membership Guide";
const productInfo = "Product Information (IPID)";
const paidBy = "Employer scheme";
const keyInfo = "Key Info";
const coverlevel = "Cover Level";
const startDateText = "Start date";
const schemeNumber = "Scheme number"
const IncludedInPol = "Included on your policy"
const dependentDescription = "These people share your policy, and are known as 'dependants' in your Membership Guide. They have their own benefit limits up to the same amounts you are covered for."
const Bupa_markdown_1 = "This information is based on data we received from your company. Individual circumstances may vary. Please contact us if you have any questions."
const Bupa_markdown_2 = "Policies paid for by your employer may have implications on your tax status and take-home pay."

export const { swipeToID, swipeFromText } = navigation.scrolling;

export const avatarItemVisible = (avatarItem: string, status: string) => async () => {
  await idVisible(
    ids.AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status)
  );
};

export const { onTodaysYucoin, onDailySteps } = screens.dailySteps;

export const pickWhereLeftModal = async () => {
  const heading = `Pick up where you left off?`;
  const subHeading = `Pick up where you left off?`;
  const continueCtaLabel = `Continue`;
  const startOverCtaLabel = `Start fresh`;

  await expect(element(by.text(heading))).toBeVisible();
  await expect(element(by.text(subHeading))).toBeVisible();
  await expect(element(by.text(continueCtaLabel))).toBeVisible();
  await expect(element(by.text(startOverCtaLabel))).toBeVisible();
};

export const productSlotsAreCorrect = (status: string) => async () => {
  if (status === "0 product live") {
    await expect(element(by.id(ids.BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(0)).toBeVisible();
    await expect(element(by.id(ids.BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(1)).toBeVisible();
  }
  if (status === "dental only") {
    await expect(element(by.id(ids.BACKGROUND_COLOUR_PRODUCT("#F7F3FF")))).toBeVisible(50); // dental insurance button
    await expect(element(by.id(ids.BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(0)).toBeVisible(); // life insurance button
    await expect(element(by.id(ids.BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(1)).toBeVisible(); // more protection coming soon button
  }
  if (status === "groupDental") {
    await expect(element(by.id(ids.BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(0)).toBeVisible(); // life insurance button
    await expect(element(by.id(ids.BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(1)).toBeVisible(); // more protection coming soon button
  }
};

export const dentalProductInfo = (packageType: string, membershipEnding: string) => async () => {
  const policyDetails = "Policy details";
  const name = "Bupa Dental Plan for YuLife";
  const membershipNumber = `000000${membershipEnding}`;
  

  await expect(element(by.text(policyDetails))).toBeVisible();
  await expect(element(by.text(packageType))).toBeVisible();
  await expect(element(by.text(name))).toBeVisible();
  await expect(element(by.text(membershipNumber))).toBeVisible();
  await swipeFromText(membershipNumber, "up", "fast")();
  await expect(element(by.text(coverFor))).toBeVisible();
  await expect(element(by.text(howToClaim))).toBeVisible();
  await expect(element(by.text(billingInfo))).toBeVisible();
  await expect(element(by.text(paymenHistory))).toBeVisible();
  await expect(element(by.text(updatePayment))).toBeVisible();
  await expect(element(by.text(faq))).toBeVisible();
  await expect(element(by.text(membershipGuide))).toBeVisible();
  await expect(element(by.text(productInfo))).toBeVisible();
  await swipeFromText(productInfo, "down", "fast")();
};

export const wellbeingProductInfo = async () => {
  const policyName = "Wellbeing Access";
  const policyDescription =
    "A YuLife Wellbeing access membership rewards you with YuCoin, discounts, and vouchers for building healthier habits.";
  const policyInsurance = "There is no insurance attached to this membership.";
  const paidBy = "Employer scheme";

  await expect(element(by.text(policyName)).atIndex(1)).toBeVisible();
  await expect(element(by.text(paidBy))).toBeVisible();
  await expect(element(by.text(policyDescription))).toBeVisible();
  await expect(element(by.text(policyInsurance))).toBeVisible();
};

export const groupDentalProductInfo = (packageType: string, yuCoinPower: string) => async () => {
  const policyName = "Bupa Dental Plan";
  const policyDescription =
    "Claim cash back, access Bupa clinics across the UK, and reach Bupa experts on their 24/7 Anytime HealthLine.";
  const paidBy = "Employer scheme";
  const policyInfoYugi =
    "This policy is paid for by your employer. Remember if you change jobs, you'll lose this cover.";
  const keyInfo = "Key Info";
  const coverlevel = "Cover Level";
  const startDateText = "Start date";
  const level = "Level 4";
  const startDate = moment().subtract(1, "months").format("DD/MM/YYYY");

  await idVisible(ids.TEXT_TEMPLATE(policyName))();
  await expect(element(by.text(paidBy))).toBeVisible();
  await expect(element(by.text(policyDescription))).toBeVisible();
  await expect(element(by.text(packageType))).toBeVisible();
  await expect(element(by.id(ids.YUCOIN_POWER(yuCoinPower)))).toBeVisible();
  await expect(element(by.text(policyInfoYugi))).toBeVisible();
  await expect(element(by.text(keyInfo))).toBeVisible();
  await swipeFromText(keyInfo, "up", "slow", 0.3)();
  await expect(element(by.text(coverlevel))).toBeVisible();
  await expect(element(by.text(startDateText))).toBeVisible();
  await expect(element(by.text(startDate))).toBeVisible();
  // commenting out until found a way to ID
  // await expect(element(by.text(level))).toBeVisible();
};

export const yuCoinPowerInfo = (yuCoinPower: number) => async () => {
  const powerBoost = `For every 1 YuCoin you would\nhave earned, you now earn ${yuCoinPower}!`;
  const baseYucoinPower = "Equipping yourself with policies boosts your YuCoin Power in the Yuniverse.";
  const wellbeingEarn = "You can earn YuCoin for your wellbeing activities!";

  await textVisibleAtIndex(`${yuCoinPower}`, 1);
  await textVisibleAtIndex(`${yuCoinPower}`, 2);
  await textVisibleAtIndex(`${yuCoinPower}`, 3);
  await swipeFromText("Activities that earn YuCoin:", "up", "slow")();
  await expectIsVisibleViaText(`${yuCoinPower * 6}`);
  await expectIsVisibleViaText(`${yuCoinPower * 20}`);
  await expectIsVisibleViaText(`${addCommasToNumber(yuCoinPower * 250)}`);

  if (yuCoinPower < 2) {
    await expect(element(by.text(wellbeingEarn))).toBeVisible();
    await expectIsVisibleViaText("2000 steps");
    await expectIsVisibleViaText("1.6km cycling");
    await expectIsVisibleViaText("5 mindful minutes");
    await expectIsVisibleViaText("complete 1 challenge");
    await expectIsVisibleViaText("open 1 chest");
    await expectIsVisibleViaText("complete 1 streak");
  } else {
    await swipeFromText("Activities that earn YuCoin:", "down", "slow")();
    await expect(element(by.text(baseYucoinPower))).toBeVisible();
    await expect(element(by.text(powerBoost))).toBeVisible();
    await swipeFromText("Activities that earn YuCoin:", "up", "slow")();
    await expectIsVisibleViaText("2000 steps");
    await expectIsVisibleViaText("1.6km cycling");
    await expectIsVisibleViaText("5 mindful minutes");
    await swipeFromText("Activities that earn YuCoin:", "up", "slow")();
    await expectIsVisibleViaText("complete 1 challenge");
    await expectIsVisibleViaText("open 1 chest");
    await expectIsVisibleViaText("complete 1 streak");
  }
};

export const paymentOverdueInfo = async () => {
  const paymentOverdueTitle = "Whoops, looks like you have a payment overdue.";
  const paymentOverdueText =
    "Please review your payment details related to your existing policies before taking out another.";

  await expect(element(by.text(paymentOverdueTitle))).toBeVisible();
  await expect(element(by.text(paymentOverdueText))).toBeVisible();
};

export const onboardingYuscreenV4 = (packType: string, yuCoinPower: string) => async () => {


  switch (packType) {
    case "wellbeing only":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisible(fixture.yuCoinText)();
      await textVisible(fixture.powerText)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(fixture.wellbeingAccessText)();
      await textNotVisible(paidBy)();
      await textNotVisible(fixture.noProductText)();
      await textNotVisible(fixture.availableProducts)();
      await textVisible(fixture.allPoweredUp)();
      break;
    case "dentalAndPli":
      await textVisible(yuCoinPower, 0)();
      await textVisible(fixture.yuCoinText)();
      await textVisible(fixture.powerText)();
      await textVisible(fixture.availableProducts)();
      await textNotVisible(fixture.noProductText)();
      break;
    case "3 Products Slots":
      await textVisible(yuCoinPower)(); // 31
      await textVisible(fixture.yuCoinText)();
      await textVisible(fixture.powerText)();
      await textVisible(fixture.wellbeingAccessText)();
      await textNotVisible(paidBy)();
      await textVisibleAtIndex(fixture.productYuCoin, 0)();
      await textVisible(fixture.criticalIllness)();
      await textVisibleAtIndex(fixture.productYuCoin, 1)();
      await textVisible(fixture.incomeProtection)();
      await textVisible(fixture.availableProducts)();
      break;
      case "3 Products Slots Started":
      await textVisible(yuCoinPower)(); // 31
      await textVisible(fixture.yuCoinText)();
      await textVisible(fixture.powerText)();
      await textVisible(fixture.wellbeingAccessText)();
      await textVisible(paidBy)();
      await textVisibleAtIndex(fixture.productYuCoin, 0)();
      await textVisible(fixture.criticalIllness)();
      await textVisibleAtIndex(fixture.productYuCoin, 1)();
      await textVisible(fixture.incomeProtection)();
      await textVisible(fixture.availableProducts)();
      break;
    case "groupDental":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisible(fixture.yuCoinText)();
      await textVisible(fixture.powerText)();
      await textVisibleAtIndex(fixture.dentalYuCoin, 1)();
      await textVisible(fixture.groupDental)();
      await textNotVisible(paidBy)();
      await textVisible(fixture.availableProducts)();
      break;
    case "0EarnRate":
      await textVisible(fixture.incomeProtection)();
      await textVisible(fixture.powerText)();
      await textNotVisible(fixture.noProductText)();
      await textNotVisible(paidBy)();
      await textVisible(yuCoinPower)();
      break;
    case "LifeInsurance":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(fixture.yuCoinText)();
      await textVisible(fixture.powerText)();
      await textVisible(fixture.lifeInsurance)();
      await textVisible(fixture.availableProducts)();
      break;
    case "GHI_FUTURE":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(fixture.yuCoinText)();
      await textVisible(fixture.powerText)();
      await textVisible(fixture.HealthInsurance)();
      await textVisible(fixture.StartsSoon)(); // if product date in future user see this
      await textNotVisible(fixture.employerScheme)();
      await textVisible(fixture.allPoweredUp)();
      break;
    case "GHI_STARTED":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(fixture.yuCoinText)();
      await textVisible(fixture.powerText)();
      await textVisible(fixture.HealthInsurance)();
      await textNotVisible(fixture.StartsSoon)();
      await textVisible(fixture.allPoweredUp)();
      await textVisible(fixture.employerScheme)() // if product date started user see this
      break;
    case "pension":
      await idVisible(ids.SLOT_TITLE("Pension Contributions"))()
      await textVisible("Great news!")()
      await idVisible(ids.ONBOARDING_SCREEN_MARKDOWN("Earn up to **15 YuCoin** a day for your existing pension contributions."))
      if (device.name.includes("(iPhone SE (3rd generation))")) {
        await swipeFromText("Great news!", "up", "fast")();
      }
      await textVisible("Tell me more")()
      return
    default:
      break;
  }

  await expect(element(by.id(ids.ONBOARDING_SCREEN))).toBeVisible();
  await expect(element(by.text(fixture.protectionPowered))).toBeVisible();
  await expect(element(by.text(fixture.earnRewardsCopy))).toBeVisible();
  await swipeFromText(fixture.protectionPowered, "up", "slow")();
  await expect(element(by.text(fixture.buttonText))).toBeVisible();
};

export const onLifeInsuranceOverview = async () => {
  await textVisible("Life Insurance", 3000)();
};

export const onDentalInsuranceOverview = async () => {
  await textVisible("Bupa Dental Plan for YuLife", 3000)();
};

export const ageRejectionTextInfo = (rejectionReason: string) => async () => {
  const rejectionTitle = "Sorry about this!";
  const rejectionPLIAgeText = "Based on your age we are unable to offer you personal life insurance.";
  const rejectionDentalAgeText =
    "Based on the information you provided we’re not able to offer you dental insurance right now. For more information please email support@yulife.com";
  const rejectionCovidText =
    "Based on your answers, we’re not able to offer you personal life insurance right now.\n\nYou will be able to try again on 05/03/2023."; // this date was put in seed data customer product progression

  switch (rejectionReason) {
    case "pliAgeRejected":
      await expect(element(by.text(rejectionTitle))).toBeVisible();
      await expect(element(by.text(rejectionPLIAgeText))).toBeVisible();
      break;
    case "dentalAgeRejected":
      await expect(element(by.text(rejectionTitle))).toBeVisible();
      await expect(element(by.text(rejectionDentalAgeText))).toBeVisible();
      break;
    case "pliCovidRejected":
      await expect(element(by.text(rejectionTitle))).toBeVisible();
      await expect(element(by.text(rejectionCovidText))).toBeVisible();
      break;
    default:
      break;
  }
};

export function addCommasToNumber(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const GHIProductInfo = ( productStartDate: any, dependentName:any, yuCoinPower: string, hasDependants = false) => async () => {
  const policyName = "Health Insurance";
  const policyDescription =
    "Your workplace health insurance from Bupa to support your mental, physical and financial wellbeing";
  const policyInfoYugi =
    "This policy is paid for by your employer. Remember if you change jobs, you’ll lose this cover.";
  const startDate = moment(productStartDate.data.start_date).format("DD/MM/YYYY");
  const dependent = `${dependentName.data.first_name} ${dependentName.data.last_name}`
  const GHIRewardImg = "https://yulife-develop.imgix.net/bupa/images/rewards_on_the_way_2023-03-23.png?ixlib=js-3.2.1&w=981&h=714&s=4809f351b905b43bb783ab2519e188f7"

  await idVisible(ids.TEXT_TEMPLATE(policyName))();
  await expect(element(by.text(paidBy))).toBeVisible();
  await expect(element(by.text(policyDescription))).toBeVisible();
  await expect(element(by.id(ids.YUCOIN_POWER(yuCoinPower)))).toBeVisible();
  await expect(element(by.text(policyInfoYugi))).toBeVisible();
  await expect(element(by.text(keyInfo))).toBeVisible();
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, coverlevel, "down")()
  await expect(element(by.text(coverlevel))).toBeVisible();
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, startDateText, "down")()
  await expect(element(by.text(startDateText))).toBeVisible();
  await expect(element(by.text(startDate))).toBeVisible(); 
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, faq, "down")()
  await expect(element(by.text(coverForWApos))).toBeVisible();
  await expect(element(by.text(howToClaim))).toBeVisible();
  await expect(element(by.text(faq))).toBeVisible();
  if (hasDependants) {
    await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, dependentDescription, "down")()
    await expect(element(by.text(dependent))).toBeVisible();
    await expect(element(by.text(dependentDescription))).toBeVisible();
    await swipeFromText(dependentDescription, "up", "fast")();
  }
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, Bupa_markdown_2, "down")()
  await expect(element(by.text(Bupa_markdown_1))).toBeVisible();
  await expect(element(by.text(Bupa_markdown_2))).toBeVisible();
  await expect(element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(GHIRewardImg)))).toBeVisible();
}


export const policyGoesLiveIn = (seed:any) => async () => {

  const targetDate = moment(seed);
  const currentDate = moment();

  const diffDuration = moment.duration(targetDate.diff(currentDate));
  
  const days = Math.floor(diffDuration.asDays())
  await idVisible(ids.COUNTDOWN_UNIT(days, 'Days'))()

  var hours = diffDuration.hours()
  await idVisible(ids.COUNTDOWN_UNIT(hours, 'Hours'))()

  var minutes = diffDuration.minutes();
  await idVisible(ids.COUNTDOWN_UNIT(minutes+1, 'Mins'))()
}

export const amOnPensionProductPage = (hasConnectedBefore: boolean) => async () => {
  await textVisible("Earn as you save")()
  await textVisible("Connect my Smart Pension")()
  if (!hasConnectedBefore) {
    await textVisible('Get instant 250 Bonus YuCoin')()
  }
}

export const onYuscreenMini = (slotTitle: string, customer: typeof data.CUSTOMER_109) => async () => {
  await idVisible(ids.SLOT_TITLE(slotTitle))()
  await textVisible(`${customer.data.firstName} ${customer.data.lastName}`)()
}

export const canSeeEarningsPensionTab = (hasConnectedBefore: boolean) => async () => {
  await textVisible("Savings")()
  await textVisible("Connect to your Smart Pension account and earn up to 15 YuCoin per day for your existing pension contributions")()
  
  if (!hasConnectedBefore) {
    await textVisible("Connection bonus")()
    await textVisible("250")()
  }
}

export const canSeePensionPopUpModal = async () => {
  await textVisible("We want to help you take care of your savings by rewarding you YuCoin based on your pension contribution!")()
  await textVisible("Find all information about connecting your pension here:")()
}

export const cannotSeePensionPopUpModal = async () => {
  await textNotVisible("We want to help you take care of your savings by rewarding you YuCoin based on your pension contribution!")()
  await textNotVisible("Find all information about connecting your pension here:")()
}

export const wellbeingHubVisible = async () => {
  await idVisible(ids.RIGHT_SIDE_IMAGE_BOX_OPTION(fixture.wellbeingButtonimg))
  await idVisible(ids.BOX_OPTION_TITLE(fixture.wellbeingButtonTitle))
  await idVisible(ids.BOX_OPTION_DESCRIPTION(fixture.wellbeingButtonDes))
}

export const wellbeingServiceVisible = async () => {
  const titles = ["YuMatter", "Yuniversity", "Beam", "HiBob", "More Happi"]

  for (const i of titles) {
      await scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE(i), "down")()
      await expect(element(by.id(ids.TEXT_TEMPLATE(i)))).toBeVisible()
  }
}