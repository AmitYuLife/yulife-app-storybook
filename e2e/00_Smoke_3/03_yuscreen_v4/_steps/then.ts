import { navigation } from "@utils";
import { screens } from "@appScreens";
import {
  AVATAR_ITEM,
  BACKGROUND_COLOUR_PRODUCT,
  ONBOARDING_SCREEN,
  YUCOIN_POWER,
  TEXT_TEMPLATE,
  CONTENT_MIDDLE_ITEM_IMAGE,
} from "@ids";
import moment = require("moment");
import { BUSINESS_PRODUCT_8_GHI } from "@data";

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
const paidBy = "Employer Paid";
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
    AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status)
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
    await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(0)).toBeVisible();
    await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(1)).toBeVisible();
  }
  if (status === "dental only") {
    await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#F7F3FF")))).toBeVisible(); // dental insurance button
    await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(0)).toBeVisible(); // life insurance button
    await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(1)).toBeVisible(); // more protection coming soon button
  }
  if (status === "groupDental") {
    await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(0)).toBeVisible(); // life insurance button
    await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(1)).toBeVisible(); // more protection coming soon button
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
  const paidBy = "Employer Paid";

  await expect(element(by.text(policyName)).atIndex(1)).toBeVisible();
  await expect(element(by.text(paidBy))).toBeVisible();
  await expect(element(by.text(policyDescription))).toBeVisible();
  await expect(element(by.text(policyInsurance))).toBeVisible();
};

export const groupDentalProductInfo = (packageType: string, yuCoinPower: string) => async () => {
  const policyName = "Bupa Dental Plan";
  const policyDescription =
    "You can claim cash back, access to Bupa clinics across the UK, and reach Bupa’s experts on their 24/7 Anytime HealthLine.";
  const paidBy = "Employer Paid";
  const policyInfoYugi =
    "This policy is paid for by your employer. Remember if you change jobs, you’ll lose this cover.";
  const keyInfo = "Key Info";
  const coverlevel = "Cover Level";
  const startDateText = "Start date";
  const level = "Level 4";
  const startDate = moment().subtract(1, "months").format("DD/MM/YYYY");

  await idVisible(TEXT_TEMPLATE(policyName))();
  await expect(element(by.text(paidBy))).toBeVisible();
  await expect(element(by.text(policyDescription))).toBeVisible();
  await expect(element(by.text(packageType))).toBeVisible();
  await expect(element(by.id(YUCOIN_POWER(yuCoinPower)))).toBeVisible();
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
  const noProductText = "More protection coming soon";
  const wellbeingAccessText = "Wellbeing Access";
  const availableProducts = "More protection";
  const protectionPowered = "Protection, powered up!";
  const allPoweredUp = "You are all powered up!"
  const earnRewardsCopy = "Earn rewards faster with increased YuCoin power";
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
  const HealthInsurance = "Health Insurance"
  const StartsSoon = "Starts soon"
  const employerScheme = "Employer scheme"

  switch (packType) {
    case "wellbeing only":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(wellbeingAccessText)();
      await textNotVisible(paidBy)();
      await textNotVisible(noProductText)();
      await textNotVisible(availableProducts)();
      await textVisible(allPoweredUp)();
      break;
    case "dentalAndPli":
      await textVisible(yuCoinPower, 0)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisible(availableProducts)();
      await textNotVisible(noProductText)();
      break;
    case "3 Products Slots":
      await textVisible(yuCoinPower)(); // 31
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisible(lifeInsurance)();
      await textNotVisible(paidBy)();
      await textVisibleAtIndex(productYuCoin, 0)();
      await textVisible(criticalIllness)();
      await textVisibleAtIndex(productYuCoin, 1)();
      await textVisible(incomeProtection)();
      await textVisibleAtIndex(productYuCoin, 2)();
      await textVisible(availableProducts)();
      break;
    case "groupDental":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisibleAtIndex(dentalYuCoin, 1)();
      await textVisible(groupDental)();
      await textNotVisible(paidBy)();
      await textVisible(availableProducts)();
      break;
    case "0EarnRate":
      await textVisible(incomeProtection)();
      await textVisible(powerText)();
      await textNotVisible(noProductText)();
      await textNotVisible(paidBy)();
      await textVisible(yuCoinPower)();
      break;
    case "LifeInsurance":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisible(lifeInsurance)();
      await textVisible(availableProducts)();
      break;
    case "GHI_FUTURE":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisible(HealthInsurance)();
      await textVisible(StartsSoon)(); // if product date in future user see this
      await textNotVisible(employerScheme)();
      await textVisible(allPoweredUp)();
      break;
    case "GHI_STARTED":
      await textVisibleAtIndex(yuCoinPower, 0)();
      await textVisibleAtIndex(yuCoinPower, 1)();
      await textVisible(yuCoinText)();
      await textVisible(powerText)();
      await textVisible(HealthInsurance)();
      await textNotVisible(StartsSoon)();
      await textVisible(allPoweredUp)();
      await textVisible(employerScheme)() // if product date started user see this
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

export const GHIProductInfo = ( productStartDate: any, dependentName:any, yuCoinPower: string) => async () => {
  const policyName = "Health Insurance";
  const policyDescription =
    "Your workplace health insurance from Bupa to support your mental, physical and financial wellbeing";
  const policyInfoYugi =
    "This policy is paid for by your employer. Remember if you change jobs, you’ll lose this cover.";
  const startDate = moment(productStartDate.data.start_date).format("DD/MM/YYYY");
  const schemeNumberProduct = BUSINESS_PRODUCT_8_GHI.product.data.product_id
  const dependent = `${dependentName.data.first_name} ${dependentName.data.last_name}`
  const GHIRewardImg = "https://yulife-develop.imgix.net/bupa/images/rewards_on_the_way_2023-03-23.png?ixlib=js-3.2.1&w=981&h=714&s=4809f351b905b43bb783ab2519e188f7"

  await idVisible(TEXT_TEMPLATE(policyName))();
  await expect(element(by.text(paidBy))).toBeVisible();
  await expect(element(by.text(policyDescription))).toBeVisible();
  await expect(element(by.id(YUCOIN_POWER(yuCoinPower)))).toBeVisible();
  await expect(element(by.text(policyInfoYugi))).toBeVisible();
  await expect(element(by.text(keyInfo))).toBeVisible();
  await swipeFromText(keyInfo, "up", "slow", 0.5)();
  await expect(element(by.text(schemeNumber))).toBeVisible();
  await expect(element(by.text(schemeNumberProduct))).toBeVisible();
  await expect(element(by.text(coverlevel))).toBeVisible();
  await expect(element(by.text(startDateText))).toBeVisible();
  await expect(element(by.text(startDate))).toBeVisible(); 
  await expect(element(by.text(coverForWApos))).toBeVisible();
  await expect(element(by.text(howToClaim))).toBeVisible();
  await expect(element(by.text(faq))).toBeVisible();
  await swipeFromText(IncludedInPol, "up", "slow", 0.2)();
  await expect(element(by.text(dependent))).toBeVisible();
  await swipeFromText(dependent, "up", "slow", 0.1)();
  await expect(element(by.text(dependentDescription))).toBeVisible();
  await swipeFromText(dependentDescription, "up", "fast")();
  await expect(element(by.text(Bupa_markdown_1))).toBeVisible();
  await expect(element(by.text(Bupa_markdown_2))).toBeVisible();
  await expect(element(by.id(CONTENT_MIDDLE_ITEM_IMAGE(GHIRewardImg)))).toBeVisible();
};
