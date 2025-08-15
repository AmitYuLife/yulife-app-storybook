import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customer from "surveys/_data/postgres/customers";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_5 } from "../postgres/business";

const model = "core_journeys";

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
    name: "Engagement Survey: Detox Pulse",
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
