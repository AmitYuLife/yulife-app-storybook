import { SduiSection } from "@components/sdui/_renderer/section/sdui-section";
import { ProductCardCarouselSection } from "./product-card-carousel-section";
import { YuScreenSection } from "@redux/yu-screen/yu-screen.types";
import { WellbeingHubSection } from "./wellbeing-hub-section";
import { ReferralSection } from "./referral-section";
import { FeatureCardSection } from "./feature-card-section";
import { Colours, Style } from "@styles";
import { View } from "react-native";
import { MaximiseYuSection } from "./maximise-yu-section";
import { HeroCardSection } from "./hero-card";

const sectionMap = {
  SduiSection,
  ProductCardCarouselSection,
  WellbeingHubSection,
  ReferralSection,
  MaximiseYuSection,
  SmokingSection: FeatureCardSection,
  FeatureCardSection,
  HeroCardSection,
} as Record<string, (props: any) => JSX.Element>;

export const renderSection = (section: YuScreenSection): JSX.Element | null => {
  const Component = sectionMap[section.__typename];

  if (!Component) {
    return null;
  }

  return (
    <View style={style} key={section.sectionInstanceId}>
      <Component {...section} />
    </View>
  );
};

const style = {
  width: Style.DEVICE_WIDTH,
  backgroundColor: Colours.neutral.white,
};
