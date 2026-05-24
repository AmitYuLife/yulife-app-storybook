import {
  SduiSection,
  MaximiseYuSection,
  WellbeingHubSection,
  ProductCardCarouselSection,
  ProductCardCarouselSectionItem,
  FeatureCardSection,
} from "@redux/yu-screen/yu-screen.types";
import { SduiActionType } from "@redux/_core/types";
import moment from "moment";

const now = moment().format();
const todayEnd = moment().endOf("day").format();

const noopNavigate = { type: SduiActionType.SduiActionNavigate };

const makeRemoteImage = (uri: string) => ({ id: uri, uri });

const makeIllustrations = (uri: string) => ({
  square: makeRemoteImage(uri),
  tall: makeRemoteImage(uri),
  wide: makeRemoteImage(uri),
});

const makeProductCardItem = (
  params: Pick<ProductCardCarouselSectionItem, "id" | "productName" | "title" | "body"> & { illustrationUri: string }
): ProductCardCarouselSectionItem => ({
  id: params.id,
  productName: params.productName,
  title: params.title,
  body: params.body,
  illustrations: makeIllustrations(params.illustrationUri),
  onCardPress: noopNavigate,
});

/** A blank SduiSection with no body — renders nothing but won't crash. */
export const MOCK_SDUI_SECTION: SduiSection = {
  __typename: "SduiSection",
  id: "sdui-section-1",
  sectionInstanceId: "sdui-section-instance-1",
  ready: true,
  updateOnView: false,
  loading: false,
  lastContentUpdate: now,
  content: {
    body: [],
  },
};

/** A populated MaximiseYu section showing today's challenge nudges. */
export const MOCK_MAXIMISE_YU_SECTION: MaximiseYuSection = {
  __typename: "MaximiseYuSection",
  id: "maximise-yu-1",
  sectionInstanceId: "maximise-yu-instance-1",
  ready: true,
  updateOnView: false,
  loading: false,
  lastContentUpdate: now,
  content: {
    challengeAmount: { max: 3, left: 2 },
    scrollItems: [
      {
        id: "nudge-1",
        markdown: "**10,000 steps** today earns you 50 YuCoin",
        done: false,
        onPress: noopNavigate,
      },
      {
        id: "nudge-2",
        markdown: "**Meditate** for 10 minutes",
        done: true,
        onPress: noopNavigate,
      },
    ],
    badge: {
      label: "2 of 3 done",
      wrapperStyles: [],
      textColor: "#FFFFFF",
    },
    progress: {
      title: "Your progress today",
      current: 2,
      max: 3,
    },
  },
};

/** Wellbeing Hub perks promoted on the YuScreen. */
export const MOCK_WELLBEING_HUB_SECTION: WellbeingHubSection = {
  __typename: "WellbeingHubSection",
  id: "wellbeing-hub-1",
  sectionInstanceId: "wellbeing-hub-instance-1",
  ready: true,
  updateOnView: false,
  loading: false,
  lastContentUpdate: now,
  content: {
    businessAccountId: "business-account-1",
    buttonLabel: "See all benefits",
    items: [
      {
        id: "wellbeing-metlife-gp24",
        title: "MetLife GP24",
        description: "Immediate access to a GP by phone or video",
        image: makeRemoteImage(
          "https://yulife-develop.imgix.net/perks/METLIFE_GP24.png?ixlib=js-3.2.1&fit=clip&fm=png&s=1ddea0de5b993bb05e2e9a04870ff01f"
        ),
      },
      {
        id: "wellbeing-yu-matter",
        title: "YuMatter",
        description: "Mental health support when you need it",
        image: makeRemoteImage(
          "https://yulife-develop.imgix.net/wellbeing_hub/yu-matter.png?ixlib=js-3.2.1&fit=clip&fm=png&s=b1127559c64c08bc138f7a02d0faa2f2"
        ),
      },
      {
        id: "wellbeing-yuniversity",
        title: "Yuniversity Courses",
        description: "Free Learning Material",
        image: makeRemoteImage(
          "https://yulife-develop.imgix.net/cms/1669639176057_Yuniversity@3x.png?ixlib=js-3.2.1&w=276&h=239.2&crop=fit&fit=clip&fm=png&dpr=3&s=423beccd8655b409d6a35a8af434ad1b"
        ),
      },
    ],
  },
};

/** Product policy cards carousel — "Powerful protection" section. */
export const MOCK_PRODUCT_CARD_CAROUSEL_SECTION: ProductCardCarouselSection = {
  __typename: "ProductCardCarouselSection",
  id: "product-carousel-1",
  sectionInstanceId: "product-carousel-instance-1",
  ready: true,
  updateOnView: false,
  loading: false,
  lastContentUpdate: now,
  content: {
    title: "Powerful protection",
    items: [
      makeProductCardItem({
        id: "product-health-insurance",
        productName: "Health insurance",
        title: "Bupa health cover",
        body: "Online GP, open referrals, and more.",
        illustrationUri:
          "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/bupa/bupa-ghi-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=ca33d0822995c9d37ad42782febc02b0",
      }),
      makeProductCardItem({
        id: "product-dental-insurance",
        productName: "Dental insurance",
        title: "Bupa dental cover",
        body: "Routine check-ups and emergency treatment.",
        illustrationUri:
          "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/bupa/bupa-dental-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=c5f6727b33849ef9b45859495d362b13",
      }),
      makeProductCardItem({
        id: "product-income-protection",
        productName: "Income protection",
        title: "Aviva income protection",
        body: "Financial support if you can't work due to illness.",
        illustrationUri:
          "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/aviva/aviva-gip-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=ee313e9ff342b244cbad8e7a6ddbe8ef",
      }),
      makeProductCardItem({
        id: "product-life-insurance",
        productName: "Life insurance",
        title: "Aviva life cover",
        body: "Peace of mind for you and your family.",
        illustrationUri:
          "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/aviva/aviva-gli-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=412830824f458e93f1b4e34f657dcc52",
      }),
    ],
  },
};

/** Smoking cessation feature card — pre-journey state. */
export const MOCK_SMOKING_FEATURE_CARD_SECTION: FeatureCardSection = {
  __typename: "FeatureCardSection",
  id: "smoking-feature-1",
  sectionInstanceId: "smoking-feature-instance-1",
  ready: true,
  updateOnView: false,
  loading: false,
  lastContentUpdate: now,
  content: {
    title: "Looking to quit smoking?",
    description:
      "Research shows that if you stop smoking for 28 days straight, you're 5x more likely to quit for good.",
    onCardPress: noopNavigate,
    image: {
      image: makeRemoteImage(
        "https://yulife-local.imgix.net/smoking-cessation/swiper/yugi.svg?ixlib=js-3.2.1&fm=png&w=744&h=744&s=2d662f7c289088a7fc13c963d038828b"
      ),
      width: 64,
      height: 64,
    },
    backgroundImage: makeRemoteImage(
      "https://yulife-local.imgix.net/journeys/smoking-cessation/smoking-background-2024-07-16.png?ixlib=js-3.2.1&s=bf7117f422a2439a69e2f7aa531297bd"
    ),
  },
};

/**
 * Sections array to preload in story Redux store.
 * lastLayoutUpdate is set to today so the useEffect in YuScreen does not
 * dispatch queryYuScreenLayout() (sagas are absent in story store).
 */
export const DEFAULT_YU_SCREEN_SECTIONS = [
  MOCK_MAXIMISE_YU_SECTION,
  MOCK_WELLBEING_HUB_SECTION,
  MOCK_PRODUCT_CARD_CAROUSEL_SECTION,
  MOCK_SMOKING_FEATURE_CARD_SECTION,
];
export const YU_SCREEN_LAST_LAYOUT_UPDATE = todayEnd;
