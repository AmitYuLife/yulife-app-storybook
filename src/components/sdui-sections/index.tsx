import { ReactNode } from "react";
import { View } from "react-native";
import { SduiSection } from "@components/sdui/_renderer/section/sdui-section";
import { ProductCardCarouselSection } from "./product-card-carousel-section";
import { YuScreenSection } from "@redux/yu-screen/yu-screen.types";
import { WellbeingHubSection } from "./wellbeing-hub-section";
import { ReferralSection } from "./referral-section";
import { FeatureCardSection } from "./feature-card-section";
import { MaximiseYuSection } from "./maximise-yu-section";
import { HeroCardSection } from "./hero-card";

const sectionMap = {
  SduiSection,
  ProductCardCarouselSection,
  WellbeingHubSection,
  ReferralSection,
  MaximiseYuSection,
  FeatureCardSection,
  HeroCardSection,
} as Record<string, (props: any) => ReactNode>;

export const renderSduiSection = (section: YuScreenSection): ReactNode => {
  const Component = sectionMap[section.__typename];

  if (!Component) {
    return null;
  }

  return (
    <View key={section.sectionInstanceId}>
      <Component {...section} />
    </View>
  );
};
