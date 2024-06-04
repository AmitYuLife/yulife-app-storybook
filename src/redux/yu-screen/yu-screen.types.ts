import { ContentItem, WellbeingHubSectionContent, ProductCardCarouselSectionContent } from "@graphql/__generated";

interface CommonSectionProps {
  id: string;
  ready: boolean;
  updateOnView?: boolean;
  content?: object;
}

interface SduiSection extends CommonSectionProps {
  __typename: "SduiSection";
  content?: {
    body?: ContentItem[];
    containerStyles?: {
      property: string;
      value: string;
    }[];
  };
}

interface MaximiseYuSection extends CommonSectionProps {
  __typename: "MaximiseYuSection";
  content?: {
    challengeAmount: {
      max: number;
      left: number;
    };
    scrollItems: Array<{
      yuCoinAmount?: number;
      target?: string;
      type: string;
      done?: boolean;
    }>;
    badge: {
      label: string;
      wrapperStyles?: Array<{ property: string; value: string }>;
      textColor?: string;
    };
    progress: {
      title?: string;
      current: number;
      max: number;
    };
  };
}

interface ProductCardCarouselSection extends CommonSectionProps {
  __typename: "ProductCardCarouselSection";
  content?: ProductCardCarouselSectionContent;
}

interface WellbeingHubSection extends CommonSectionProps {
  __typename: "WellbeingHubSection";
  content?: WellbeingHubSectionContent;
}

interface ReferralSection extends CommonSectionProps {
  __typename: "ReferralSection";
  content?: {
    illustration?: {
      image: {
        uri?: string;
      };
      width: number;
      height?: number;
    };
    title: string;
    markdown: string;
    buttonLabel: string;
    buttonIcon?: {
      uri?: string;
    };
  };
}

export type YuScreenSection =
  | SduiSection
  | ProductCardCarouselSection
  | WellbeingHubSection
  | ReferralSection
  | MaximiseYuSection;
