import { OnboardingSwiperData } from "@organisms";

export const images = [
  require("../../../../../../assets/yuscreen/onboarding/yuscreenOnboarding1.png"),
  require("../../../../../../assets/yuscreen/onboarding/yuscreenOnboarding2.png"),
  require("../../../../../../assets/yuscreen/onboarding/yuscreenOnboarding3.png"),
];

export const data: OnboardingSwiperData[] = [
  {
    id: "yuscreen_onboarding_1",
    buttonLabel: "Next",
    title: "Design your own Yumoji",
    subtitle: "Bring yourself into the Yuniverse",
  },
  {
    id: "yuscreen_onboarding_2",
    buttonLabel: "Next",
    title: "Stay protected",
    subtitle: "Browse your company and personal insurances",
  },
  {
    id: "yuscreen_onboarding_3",
    buttonLabel: "Let's go",
    title: "Power up your YuCoin",
    subtitle: "Power up your YuCoin earnings by being better protected",
  },
];
