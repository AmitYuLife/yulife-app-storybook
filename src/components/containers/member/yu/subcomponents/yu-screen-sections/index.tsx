import { SduiSection } from "@components/sdui/_renderer/section/sdui-section";
import { ProductCardCarouselSection } from "./product-card-carousel-section";
import { YuScreenSection } from "@redux/yu-screen/yu-screen.types";
import { WellbeingHubSection } from "./wellbeing-hub-section";
import { ReferralSection } from "./referral-section";
import { Colours, Style } from "@styles";
import { View } from "react-native";

const sectionMap = {
  SduiSection,
  ProductCardCarouselSection,
  WellbeingHubSection,
  ReferralSection,
} as Record<string, (props: any) => JSX.Element>;

export const renderSection = (section: YuScreenSection): JSX.Element | null => {
  const Component = sectionMap[section.__typename];

  if (!Component) {
    return null;
  }

  return (
    <View style={style} key={section.id}>
      <Component {...section} />
    </View>
  );
};

const style = {
  width: Style.DEVICE_WIDTH,
  backgroundColor: Colours.neutral.white,
};
