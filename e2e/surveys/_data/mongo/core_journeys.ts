import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customer from "surveys/_data/postgres/customers";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_5 } from "../postgres/business";

const model = "core_journeys";

export const CORE_JOURNEY_1 = {
  type: "mongo",
  modelName: model,
  data: {
    _id: "66140199f9be413b16dd1c81",
    journeyId: "health_questionnaire",
    name: "health_questionnaire",
    allAnswerKeys: [],
    published: true,
    minAppVersion: ">=1.0",
    type: "questionnaire",
    createdAt: "2024-03-27T13:31:13.059+0000",
    updatedAt: "2024-03-27T13:31:13.059+0000",
    __v: 0,
    requiresUserStateForAccess: true,
    showHeroCard: true,
    staticJourney: true,
    yuCoinRewardAsEarnRateMultiple: 4,
    uiAccess: [
      {
        isFirstJourney: true,
        daysSinceJourneyAccessGranted: {
          or: [
            {
              operator: "between",
              min: 0,
              max: 6,
            },
            {
              operator: "between",
              min: 13,
              max: 20,
            },
            {
              operator: "between",
              min: 27,
              max: 34,
            },
          ],
        },
      },
      {
        isFirstJourney: false,
        daysSinceJourneyAccessGranted: {
          or: [
            {
              operator: "between",
              min: 6,
              max: 12,
            },
            {
              operator: "between",
              min: 20,
              max: 26,
            },
            {
              operator: "between",
              min: 34,
              max: 40,
            },
          ],
        },
      },
    ],
    uiAccessCopy: {
      eventPanel: {
        title: {
          "en-GB": "Daily health questions",
          "ja-JP": "健康チェックの質問",
        },
        description: {
          "en-GB": "Earn **${amount}**${yuCoin} by discovering more about your health.",
          "en-US": "Earn **${amount}**${yuCoin} by discovering more about your health.",
          "en-ZA": "Earn **${amount}**${yuCoin} by discovering more about your health.",
          "ja-JP": "健康に関する質問への回答で\n**${amount}**${yuCoin}をプレゼント。",
        },
        image: "journeys/banner-yugi-coin-2025-04-17.svg",
        backgroundImage: "journeys/banner-gradient-2025-02-24.svg",
        titleImage: {
          "en-GB": "journeys/health-questionnaire/banner-title-2025-04-17.svg",
          "en-US": "journeys/health-questionnaire/banner-title-2025-04-17.svg",
          "en-ZA": "journeys/health-questionnaire/banner-title-2025-04-17.svg",
          "ja-JP": "journeys/health-questionnaire/banner-title-jp-2025-04-17.svg",
        },
      },
    },
  },
};

export const CORE_JOURNEY_FOR_REWARD_MULTIPLIER_TEST = {
  type: "mongo",
  modelName: model,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "automated_qa_test_journey_10_multiplier",
    name: "Automated QA Test Journey 10 Multiplier",
    allAnswerKeys: ["the_choice_is_yours"],
    published: true,
    showHeroCard: true,
    minAppVersion: ">=4.9.0",
    staticJourney: false,
    requiresUserStateForAccess: false,
    uiAccess: [],
    accessRules: {
      tags: [customer.CUSTOMER_1.data.customerId],
    },
    uiAccessCopy: {
      eventPanel: {
        title: {
          "en-GB": "Automated QA Test Journey 10 Multiplier",
        },
        description: {
          "en-GB": "Automated QA Test Journey 10 Multiplier",
        },
      },
    },
    yuCoinRewardAsEarnRateMultiple: 10,
    yuCoinRewardAsFlatAmount: 0,
  },
};

export const CORE_JOURNEY_FOR_REWARD_FLAT_RATE_TEST = {
  type: "mongo",
  modelName: model,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "automated_qa_test_journey_500_yucoin_flat_amount",
    name: "Automated QA Test Journey 500 YuCoin Flat Amount",
    allAnswerKeys: ["the_choice_is_yours"],
    published: true,
    showHeroCard: true,
    minAppVersion: ">=4.9.0",
    staticJourney: false,
    requiresUserStateForAccess: false,
    uiAccess: [],
    accessRules: {
      tags: [customer.CUSTOMER_1, customer.CUSTOMER_7.customer.data.customerId],
    },
    uiAccessCopy: {
      eventPanel: {
        title: {
          "en-GB": "Automated QA Test Journey 500 YuCoin Flat Amount",
        },
        description: {
          "en-GB": "Automated QA Test Journey 500 YuCoin Flat Amount",
        },
      },
    },
    yuCoinRewardAsEarnRateMultiple: 0,
    yuCoinRewardAsFlatAmount: 500,
  },
};

export const CORE_JOURNEY_2 = {
  type: "mongo",
  modelName: model,
  data: {
    _id: generateRandomMongoId(),
    journeyId: `engagement_survey_pulse_${Date.now}`,
    name: "Engagement Survey: Pulse",
    allAnswerKeys: ["one_thing_you_would_change", "recommend_workplace_pulse"],
    published: true,
    showHeroCard: true,
    minAppVersion: ">=4.9.0",
    staticJourney: false,
    requiresUserStateForAccess: false,
    uiAccess: [customer.CUSTOMER_6.customer.data.customer_id],
    uiAccessCopy: {
      eventPanel: {
        title: {
          "en-GB": "Share your feedback pulse",
          _id: "67e18b8f97e7765fda54996b",
          "ja-JP": "アンケートのお願い",
        },
        description: {
          "en-GB": "Earn YuCoin and help improve your workplace anonymously!",
          _id: "67e18b8f97e7765fda54996c",
          "ja-JP": "職場環境に関する匿名のアンケートに回答してYuCoinを獲得しましょう!",
        },
        image: "imgix::cms/1742835023215_employee-survey-hero-card-2024-12-11.png",
      },
    },
    createdAt: {
      $date: "2025-03-24T16:42:55.067Z",
    },
    updatedAt: {
      $date: "2025-04-10T10:44:55.231Z",
    },
    __v: 0,
    yuCoinRewardAsEarnRateMultiple: 30,
    yuCoinRewardAsFlatAmount: 0,
    accessRules: {
      tags: [
        BUSINESS_ACCOUNT_4.data.business_account_id,
        BUSINESS_ACCOUNT_5.business.data.businessAccountId,
      ],
    },
  },
};
