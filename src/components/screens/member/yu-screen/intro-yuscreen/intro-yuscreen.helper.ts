export const images = [
  require("../../../../../../assets/yuscreen/onboarding/yuscreenOnboarding1.png"),
  require("../../../../../../assets/yuscreen/onboarding/yuscreenOnboarding2.png"),
  require("../../../../../../assets/yuscreen/onboarding/yuscreenOnboarding3.png"),
];

export interface IYuScreenIntroDataItem {
  color: string;
  buttonLabel: string;
  title: string;
  subtitle: string;
}

export const data: IYuScreenIntroDataItem[] = [
  {
    color: "green",
    buttonLabel: "Next",
    title: "Design your own Yumoji",
    subtitle: "Bring yourself into the Yuniverse",
  },
  {
    color: "red",
    buttonLabel: "Next",
    title: "Stay protected",
    subtitle: "Browse your company and personal insurances",
  },
  {
    color: "yellow",
    buttonLabel: "Let's go",
    title: "Power up your YuCoin",
    subtitle: "Power up your YuCoin earnings by being better protected",
  },
];
