import { ContentItem } from "@graphql/__generated";
import { SduiAction } from "@redux/user/user.types";

interface CommonSectionProps {
  id: string;
  ready: boolean;
  updateOnView?: boolean;
  content?: object;
  lastContentUpdate?: string;
}

interface RemoteImage {
  id: string;
  uri?: string;
}

export interface SduiSection extends CommonSectionProps {
  __typename: "SduiSection";
  content?: {
    body?: ContentItem[];
    containerStyles?: {
      property: string;
      value: string;
    }[];
  };
}

export interface MaximiseYuItem {
  image?: RemoteImage;
  markdown: string;
  onPress?: SduiAction;
  done?: boolean;
}

export interface MaximiseYuSection extends CommonSectionProps {
  __typename: "MaximiseYuSection";
  content?: {
    challengeAmount: {
      max: number;
      left: number;
    };
    scrollItems: Array<MaximiseYuItem>;
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

export interface ProductCardCarouselSectionItem {
  illustrations: {
    square: RemoteImage;
    tall: RemoteImage;
    wide: RemoteImage;
  };
  logo?: RemoteImage;
  productName: string;
  title: string;
  body: string;
  label?: string;
  cardCta?: string;
  onCardPress?: SduiAction;
  buttonCta?: string;
  onButtonPress?: SduiAction;
}

export interface ProductCardCarouselSection extends CommonSectionProps {
  __typename: "ProductCardCarouselSection";
  content?: {
    title: string;
    items: ProductCardCarouselSectionItem[];
    cta?: string;
    onPress?: SduiAction;
  };
}

export interface WellbeingHubSection extends CommonSectionProps {
  __typename: "WellbeingHubSection";
  content?: {
    title: string;
    items: {
      id: string;
      image?: RemoteImage;
      title: string;
      description: string;
      route?: string;
    }[];
    buttonLabel: string;
  };
}

export interface ReferralSection extends CommonSectionProps {
  __typename: "ReferralSection";
  content?: {
    illustration?: {
      image: RemoteImage;
      width: number;
      height?: number;
    };
    title: string;
    markdown: string;
    buttonLabel: string;
    buttonIcon?: RemoteImage;
  };
}

export type YuScreenSection =
  | SduiSection
  | ProductCardCarouselSection
  | WellbeingHubSection
  | ReferralSection
  | MaximiseYuSection;
