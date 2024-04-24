import { ContentItem } from "@graphql/__generated";

interface CommonSectionProps {
  id: string;
  ready: boolean;
  updateOnView?: boolean;
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

interface ProductCardCarouselSection extends CommonSectionProps {
  __typename: "ProductCardCarouselSection";
}

interface WellbeingHubSection extends CommonSectionProps {
  __typename: "WellbeingHubSection";
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

export type YuScreenSection = SduiSection | ProductCardCarouselSection | WellbeingHubSection | ReferralSection;
