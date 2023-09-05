import { BPEW_GDent_11, CPE_100_GDent, CPE_51_GDent, CPE_93_GDent, CPE_95_GDent, CPE_96_GDent, CPE_97_GDent, CPE_98_GDent } from "@data";
import moment from "moment";
import { AccordionDatum, OnboardingYuScreenInfo, ProductStartsSoon } from "./types";

export const noProductText = "More protection coming soon";
export const wellbeingAccessText = "Wellbeing Access";
export const availableProducts = "More protection";
export const protectionPowered = "Protection, powered up!";
export const allPoweredUp = "You are all powered up!";
export const earnRewardsCopy = "Earn rewards faster with increased YuCoin Power";
export const buttonText = "Check out my power";
export const yuCoinText = "YuCoin";
export const powerText = "Power";
export const paidBy = "Employer paid";
export const lifeInsurance = "Life Insurance";
export const criticalIllness = "Critical Illness";
export const incomeProtection = "Income Protection";
export const groupDental = "Dental Cover";
export const productYuCoin = "10";
export const dentalYuCoin = "5";
export const HealthInsurance = "Health Insurance";
export const StartsSoon = "Starts soon";
export const employerScheme = "Employer scheme";
export const availableSoon = "Available soon";
export const surveyText = "We love hearing from you.\nHelp shape the future of YuLife!";
export const applicationProcessed = "Your application is being processed";
export const notCoveredYugiInfo =
  "You are not covered, and cannot claim for any treatments carried out before your cover starts.";
export const GdentMarkDown =
  "You can claim cash back, get access to Bupa clinics across the UK, and reach Bupa’s experts on their 24/7 Anytime HealthLine.";
export const coverDetailsText = "Cover details";
export const bupaDentalPlanText = "Bupa Dental Plan";
export const coveredForText = "What I’m covered for";
export const membershipGuideText = "Membership guide";
export const faqText = "FAQs";
export const createYumujiHeading = "Earn 100 YuCoin";
export const createYumujiText = "when you create your Yumoji.";
export const createYumujiCTA = "Create Yumoji";
export const yuMojiBuilder = "Create your Yumoji to step into the Yuniverse"
export const enrolNow = "Enrol now"
export const editChoice = "Edit choice"


//images slot button

export const coveredForImageSlot =
  "https://yulife-develop.imgix.net/content/icons/doc_arrow.svg?ixlib=js-3.2.1&w=72&h=72&s=b6e91db995b14b97734bc356aa842902";
export const membershipGuideImageSlot =
  "https://yulife-develop.imgix.net/duotone/policy-summary.svg?ixlib=js-3.2.1&w=72&h=72&s=92cb17210cec9cb652d34b59aa4ed723";
export const faqImageSlot =
  "https://yulife-develop.imgix.net/personalProducts/faqs.svg?ixlib=js-3.2.1&w=72&h=72&s=55f7d3ef6f114b8b9b0f11d069b88844";
export const leftCanEnrolBackgroundSrc = "https://yulife-develop.imgix.net/yuscreen/slots/background/bg-pink-without-shadow-28-04-23.svg?ixlib=js-3.2.1&w=135&h=162&s=3096ca41589b09354f75a462e30eb289"
export const leftInforceBackgroundSrc = "https://yulife-develop.imgix.net/yuscreen/slots/background/bg-gold-18-07-22.svg?ixlib=js-3.2.1&w=135&h=162&s=4d4883a6124eb597b6a3e8c44ee21c71"
export const leftFutureEnrolBackgroundSrc = "https://yulife-develop.imgix.net/yuscreen/slots/background/bg-silver-without-shadow-28-04-23.svg?ixlib=js-3.2.1&w=135&h=156&s=86e63fdbb65d035d2ad1de23b110d7a5"
export const leftInHoldingBackgroundImgSrc = "https://yulife-develop.imgix.net/yuscreen/slots/background/bg-blue-04-04-23-1.svg?ixlib=js-3.2.1&w=135&h=162&s=d70ae545203428b7c20dec42073da494"
export const rightSideInactiveBottleImgSrc = "https://yulife-develop.imgix.net/yuscreen/slots/product-items/colour/group/inactive/bottle-05-04-23-02.svg?ixlib=js-3.2.1&w=156&h=129&s=fca8d6926be12720bb1dc957ee745b62"
export const rightSideInForceImgBottleSrc = "https://yulife-develop.imgix.net/yuscreen/slots/product-items/colour/group/bottle-18-7-22.svg?ixlib=js-3.2.1&w=156&h=129&s=51e734473283c34179855092e4eb7960"

//Buttons

export const gotItText = "Got it";

//Date formats

export const dotSeperatedDateFormat = "DD.MM.YYYY";

export const GdentAvailableSoon: OnboardingYuScreenInfo = {
  mainYuCoinPower: "10",
  firstSlotYucoinPower: `+`,
  firstSlotProductTitle: groupDental,
  firstSlotProductSubtitle: availableSoon,
  firstSlotRightImgSrc: rightSideInactiveBottleImgSrc,
  lastSlotProductTitle: allPoweredUp,
};

export const GdentAvailableSoonProduct: ProductStartsSoon = {
  productName: groupDental,
  goLiveDate: CPE_93_GDent.data.start_date,
  yugiInfoText: notCoveredYugiInfo,
  additionalProductInfo: GdentMarkDown,
  coverDetailsText: coverDetailsText,
  planName: bupaDentalPlanText,
  pricePerMonth: "0.00",
  yuCoinPower: `${CPE_93_GDent.data.earn_rate}`,
  coveredForText: coveredForText,
  coveredForImgSlot: coveredForImageSlot,
  membershipGuideImgSlot: membershipGuideImageSlot,
  membershipText: membershipGuideText,
  faqImageSlot: faqImageSlot,
  faqText: faqText,
  button: gotItText,
};

export type AccordionData = Array<AccordionDatum>;

export const level1Benefit: AccordionData = [
  {
    leftText: "Routine examination",
    rightTextBody: "up to £60",
    rightTextLabel: "maximum of two £30 visits per policy year",
  },
  {
    leftText: "Scale and polish",
    rightTextBody: "up to £80",
    rightTextLabel: "maximum of two £40 visits per policy year",
  },
  {
    leftText: "Virtual routine examination",
    rightTextBody: "up to £20",
  },
  {
    leftText: "Dental X-rays and scans",
    rightTextBody: "up to £40",
  },
  {
    leftText: "Fillings, fissure sealant and topical fluoride",
    rightTextBody: "up to £150",
  },
  {
    leftText: "Extractions",
    rightTextBody: "up to £100",
  },
  {
    leftText: "Major restorative dental treatment",
    rightTextBody: "80% contribution",
    rightTextLabel: "up to £275",
  },
  {
    leftText: "UK Orthodontic treatment",
    rightTextBody: "up to £300",
  },
  {
    leftText: "Worldwide emergency dental treatment",
    rightTextBody: "up to £1,000",
    rightTextLabel: "maximum of four £250 emergencies per policy year",
  },
  {
    leftText: "Worldwide dental injury treatment",
    rightTextBody: "UK Oral cancer treatment",
  },
  {
    leftText: "UK Oral cancer treatment",
    rightTextBody: "Paid in full",
  },
  {
    leftText: "Cash benefit for UK hospital stay",
    rightTextBody: "up to £1,000",
    rightTextLabel: "maximum of ten £100 hospital stays per policy year",
  },
];

export const GdentAvailableFrom: OnboardingYuScreenInfo = {
  mainYuCoinPower: "10",
  firstSlotYucoinPower: `+22`,
  firstSlotProductTitle: groupDental,
  firstSlotRightImgSrc: rightSideInactiveBottleImgSrc,
  firstSlotProductSubtitle: `Available ${moment(BPEW_GDent_11.data.enrolment_start_date).format("DD.MM")}`,
  lastSlotProductTitle: allPoweredUp,
};

export const GdentInForce: OnboardingYuScreenInfo = {
  mainYuCoinPower: "10",
  firstSlotYucoinPower: CPE_96_GDent.data.earn_rate,
  firstSlotProductTitle: groupDental,
  firstSlotLeftBackgroundImgSrc:  leftInforceBackgroundSrc,
  firstSlotProductSubtitle: employerScheme,
  firstSlotRightImgSrc: rightSideInForceImgBottleSrc,
  lastSlotProductTitle: allPoweredUp,
};

export const GdentEnrolNow: OnboardingYuScreenInfo = {
  mainYuCoinPower: "10",
  firstSlotYucoinPower: `+22`,
  firstSlotProductTitle: groupDental,
  firstSlotProductSubtitle: enrolNow,
  firstSlotLeftBackgroundImgSrc: leftCanEnrolBackgroundSrc,
  firstSlotRightImgSrc: rightSideInactiveBottleImgSrc,
  lastSlotProductTitle: allPoweredUp,
};

export const GdentProductHolding: OnboardingYuScreenInfo = {
  mainYuCoinPower: "10",
  firstSlotYucoinPower: CPE_98_GDent.data.earn_rate,
  firstSlotProductTitle: groupDental,
  firstSlotProductSubtitle: editChoice,
  firstSlotLeftBackgroundImgSrc: leftInHoldingBackgroundImgSrc,
  firstSlotRightImgSrc: rightSideInactiveBottleImgSrc,
  lastSlotProductTitle: allPoweredUp,
};

export const GdentStartsSoon: OnboardingYuScreenInfo = {
  mainYuCoinPower: "10",
  firstSlotYucoinPower: CPE_100_GDent.data.earn_rate,
  firstSlotProductTitle: groupDental,
  firstSlotProductSubtitle: StartsSoon,
  firstSlotLeftBackgroundImgSrc: leftInHoldingBackgroundImgSrc,
  firstSlotRightImgSrc: rightSideInForceImgBottleSrc,
  lastSlotProductTitle: allPoweredUp,
};