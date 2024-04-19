import { SduiSection } from "@components/sdui/_renderer/section/sdui-section";
import { ProductCardCarouselSection } from "./product-card-carousel-section";
import { YuScreenSection } from "@redux/yu-screen/yu-screen.types";
import { WellbeingHubSection } from "./wellbeing-hub-section";
import { ReferralSection } from "./referral-section";

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

  return <Component key={section.id} {...section} />;
};
