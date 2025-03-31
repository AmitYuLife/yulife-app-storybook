import moment from "moment";
import { BoxOption, InfoPanel, USProductData, YuScreenInfo } from "./types";

//Onboarding US YU screen
export const moreInsurance = "More insurance available";
export const wellbeingAccessText = "Wellbeing Access";
export const protectionPowered = "Protection, powered up!";
export const earnRewardsCopy = "Earn rewards faster with increased YuCoin Power";
export const buttonText = "Check out my power";
export const yuCoinText = "YuCoin";
export const powerText = "Power";

//US YU screen
export const createYumujiHeading = "Earn 100 YuCoin";
export const createYumujiText = "when you create your Yumoji.";
export const createYumujiCTA = "Create Yumoji";

export const WellbeingProduct = "Wellbeing Access";
export const VisionInsurance = "Vision Insurance";
export const ProductSlotWith0EarnRate = "+"; // If products have 0 earn rate then will get "+" sign insteadn of EarnRate
export const MoreProtection = "More protection";
export const ClosedEnrolment = "Inforce coverage information coming soon!";
export const EnrolmentTitle = "Make your benefit choices today!";
export const EnrolmentEndDate = `You have until\n`;
export const SurveyText = "We love hearing from you.\nHelp shape the future of YuLife!";
export const SurveyLabel = "Share your thoughts";
export const yuMojiBuilder = "Create your Yumoji to step into the Yuniverse";
export const HowToEnroll = "How to enroll";
export const Gap = "GAP insurance";
export const SponsoredBy = "Sponsored by";
export const preEnrollmentMessage = "Your enrollment will start on";
export const preEnrolmentMessage = "Your enrolment will start on";
export const enrollmentMessage = "Your enrollment will end on";
export const enrolmentMessage = "Your enrolment will end on";
export const preEnrollmentButtonMessage = "See all available products";
export const activeEnrollmentButtonMessage = "Select my benefits now!";
export const availableToYou = "Available to you";

//Footer copy texts
export const Guardian_Video_Title = "Watch the following Guardian video to learn more:";
export const Legal_Stuff = "The legal stuff";
export const Legal_Information = "Legal information";
export const Footer_Text_Part1 = "*2021 Guardian reporting and January 2021 Fair Health Data";
export const Footer_Text_Part2 =
  "The insurance coverage options offered by your employer through Guardian are included, but do not reflect your individual choices.";
export const Footer_Text_Part3 = "Refer to your enrollment site to make your benefit selection.";

//Images URL in product cards
export const Tooth_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/tooth.svg?ixlib=js-3.2.1&w=192&h=192&s=f008a03a31007d60652e8982be643659";
export const Wallet_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/wallet.svg?ixlib=js-3.2.1&w=192&h=192&s=1975fc5a821b2d1547ecfb47611bb79f";
export const YuMojis_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/yumojis.svg?ixlib=js-3.2.1&w=192&h=192&s=d94c9a0b897fae56df13ee23db3b7e8d";
export const Book_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/book.svg?ixlib=js-3.2.1&w=192&h=192&s=ff7a8600a3e778287f6b1c32043d4c99";
export const Megaphone_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/megaphone.svg?ixlib=js-3.2.1&w=192&h=192&s=4c3dd899f61a06d20d4d0c190a48e01a";
export const Calculator_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/calculator.svg?ixlib=js-3.2.1&w=192&h=192&s=dfe3bf1ecff695fac1488fc654444fc2";
export const SmartWatch_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/smartwatch.svg?ixlib=js-3.2.1&w=192&h=192&s=6daab4728cf71b5174ecd50429ee22c8";
export const Lock_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/lock.svg?ixlib=js-3.2.1&w=192&h=192&s=066080739af592173a3a631e3504fe8c";
export const Calendar_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/calendar.svg?ixlib=js-3.2.1&w=192&h=192&s=c3e1d3ba3d13033c3fc963e1b88420cf";
export const Doc_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/doc.svg?ixlib=js-3.2.1&w=192&h=192&s=778d19bc59418e7d6bd8868ab3fc698f";
export const Email_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/email.svg?ixlib=js-3.2.1&w=192&h=192&s=e0f9b5801e3cd35ea9467147e00947d1";
export const Heart_ImageUrl =
  "https://yulife-develop.imgix.net/content/icons/heart.svg?ixlib=js-3.2.1&w=192&h=192&s=f7a373c6df8cbbf00ad9ffe90a83b848";
export const Guardian_ImageUrl =
  "https://yulife-develop.imgix.net/logos/guardian-inline-logo-2022-09-13-2.svg?ixlib=js-3.2.1&w=315&h=60&s=ed09ea178518cddd3cac51f354acdfe4";
export const Video_ImageUrl =
  "https://yulife-develop.imgix.net/illustrations/find-out-more-2022-12-13-1.png?ixlib=js-3.2.1&w=1125&h=624&s=55e7f0965ee537b1fccf9846f556de8a";
export const Guardian_Sponsor =
  "https://yulife-develop.imgix.net/sponsored-logos/guardian-1.svg?ixlib=js-3.2.1&w=285&s=c8c67c84fea37e61f318ba8e6f61deae";
export const Transamerica_Sponsor =
  "https://yulife-develop.imgix.net/sponsored-logos/transamerica-2.svg?ixlib=js-3.2.1&w=270&s=279b4702ae6fbeefe6175a81ffbde2b6";
export const Yulife_Sponsor =
  "https://yulife-develop.imgix.net/sponsored-logos/yulife-1.svg?ixlib=js-3.2.1&w=153&s=db02cee6a0d16063f910ad2d3b0cb3be";

//Slot Left Image
export const canEnrolPlusImage =
  "https://yulife-develop.imgix.net/yuscreen/slots/background/bg-pink-18-07-22.svg?ixlib=js-3.2.1&w=135&h=162&s=dfaea3f4cea2df3368c3b2a8564c568c";

//Wellbeing Hub

export const wellbeingHubDescription =
  "Welcome to this quick-access hub to all your company’s wellbeing benefits";

// Top Banner Images

export const Transamerica_Top_Banner =
  "https://yulife-develop.imgix.net/sponsored-logos/transamerica-2.svg?ixlib=js-3.2.1&fm=png&w=270&s=e71f98424e43a7785f4b8186f30ec7e5";
export const YuLife_Top_Banner =
  "https://yulife-develop.imgix.net/sponsored-logos/yulife-1.svg?ixlib=js-3.2.1&fm=png&w=153&s=7f9208df27fbc0192162265460290fb3";
export const Guardian_Top_Banner =
  "https://yulife-develop.imgix.net/sponsored-logos/guardian-1.svg?ixlib=js-3.2.1&fm=png&w=285&s=c827af842b30d6f337411b045fcdabd9";

export const MyWellbeingHubBoxUS: BoxOption = {
  imageUrl:
    "https://yulife-develop.imgix.net/yuscreen/box-option-card/wellbeing-hub.png?ixlib=js-3.2.1&w=360&h=312&s=10e0f8e3fa178066a180ca7828345458",
  title: "My Wellbeing Hub",
  description: "Access your exclusive wellness benefits here",
};

export const ExploreInsureanceBox: BoxOption = {
  imageUrl:
    "https://yulife-develop.imgix.net/yuscreen/box-option-card/policy-details.svg?ixlib=js-3.2.1&w=360&h=312&s=3d7cbb8ed2198852ab149a7e2fdbf9de",
  title: "Explore Insurance",
  description: "Find out more about your employer provided coverage",
};

export const NoProduct: YuScreenInfo = {
  mainYuCoinPower: "1",
  SlotProductTitle: moreInsurance,
};

export const BlankProductEnrollmentScreen: YuScreenInfo = {
  mainYuCoinPower: "1",
};
