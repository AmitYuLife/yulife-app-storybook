// eslint-disable-next-line no-restricted-imports
import { ContentItem } from "@graphql/__generated";
import { SduiAction } from "@redux/user/user.types";

export interface IYuScreenStore {
  sections: YuScreenSection[];
  yumojiPrompt?: YumojiPrompt;
  lastLayoutUpdate?: string;
  lastMaximiseYuAnimationSeen?: string;
}

interface CommonSectionProps {
  id: string;
  // unique ID that enables re-used of the same section multiple times, with differing content
  sectionInstanceId: string;
  ready: boolean;
  updateOnView?: boolean;
  loadingGroup?: number;
  loading?: boolean;
  content?: object;
  lastContentUpdate?: string;
}

interface RemoteImage {
  id: string;
  uri?: string;
}

interface VariableRemoteImage {
  image: RemoteImage;
  width: number;
  height?: number;
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
  id: string;
  image?: RemoteImage;
  markdown: string;
  onPress?: SduiAction;
  done?: boolean;
  markdownStyleOverrides?: string;
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
  id: string;
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
  testId?: string;
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
    items: {
      id: string;
      image?: RemoteImage;
      title: string;
      description: string;
      route?: string;
    }[];
    businessAccountId: string;
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

export interface SmokingSection extends CommonSectionProps {
  __typename: "SmokingSection";
  content?: {
    title: string;
    description: string;
    onCardPress: SduiAction;
    buttonText?: string;
    onButtonPress?: SduiAction;
    image?: VariableRemoteImage;
    backgroundImage: RemoteImage;
  };
}

export interface HeroCardSection extends CommonSectionProps {
  __typename: "HeroCardSection";
  content?: {
    descriptionMarkdown: string;
    textColor: string;
    image: VariableRemoteImage;
    backgroundColor: string;
    borderColor: string;
    onPress: SduiAction;
    animatedRays?: boolean;
    animatedStars?: boolean;
  };
}

export type YuScreenSection =
  | SduiSection
  | ProductCardCarouselSection
  | WellbeingHubSection
  | ReferralSection
  | MaximiseYuSection
  | SmokingSection
  | HeroCardSection;

export type YumojiPrompt = {
  description?: string;
  button?: {
    onPress: {
      type: string;
      payload?: string;
    };
    label: string;
  };
  illustration?: {
    id: string;
    uri?: string;
  };
};

export type UpdateYuScreenPayload = {
  yumojiPrompt?: YumojiPrompt;
  sections: YuScreenSection[];
};

export type UpdateYuScreenMaximiseYuAnimationSeenPayload = { timestamp: string };
