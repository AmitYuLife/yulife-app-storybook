import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_5 } from "../postgres/business";
import { CORE_JOURNEY_INSTANCE_HQ_ID } from "../../_resources/constants";

const model = "core_journey_instances";

export const CORE_JOURNEY_INSTANCE_FOR_REWARD_MULTIPLIER_TEST = {
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
    steps: [
      {
        stepId: "initial_multiplier",
      },
      {
        stepId: "submission_multiplier",
      },
    ],
  },
};

export const CORE_JOURNEY_INSTANCE_FOR_REWARD_FLAT_RATE_TEST = {
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
    steps: [
      {
        stepId: "initial_flat",
      },
      {
        stepId: "submission_flat",
      },
    ],
  },
};

export const CORE_JOURNEY_INSTANCE_2 = {
  type: "mongo",
  modelName: model,
  data: {
    _id: generateRandomMongoId(),
    journeyId: `engagement_survey_pulse_${Date.now}`,
    name: "Engagement Survey: Detox Pulse",
    journeySourceTemplateId: "engagement_survey",
    ownerBusinessAccountId: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
    allAnswerKeys: ["one_thing_you_would_change_seeded", "recommend_workplace_pulse_seeded"],
    published: true,
    showHeroCard: true,
    minAppVersion: ">=4.9.0",
    staticJourney: false,
    requiresUserStateForAccess: false,
    uiAccess: [],
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
      tags: [BUSINESS_ACCOUNT_5.business.data.businessAccountId],
    },
    steps: [
      {
        stepId: "pulse_intro_step_seeded",
      },
      {
        stepId: "one_thing_you_would_change_seeded",
      },
      {
        stepId: "recommend_workplace_pulse_seeded",
      },
      {
        stepId: "thank_you_submission_pulse_seeded",
      },
    ],
  },
};

export const CORE_JOURNEY_INSTANCE_3 = {
  type: "mongo",
  modelName: model,
  data: {
    _id: "68a33e77c451a6150464b01f",
    journeyId: "68a33e77c451a6150464b01f",
    name: "Test Engagement Survey",
    journeySourceTemplateId: "engagement_survey",
    ownerBusinessAccountId: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
    minAppVersion: ">=4.9.0",
    allAnswerKeys: [],
    steps: [
      { stepId: "68a33e77c451a6150464b020" },
      { stepId: "68a33e77c451a6150464b021" },
      { stepId: "68a33e77c451a6150464b022" },
      { stepId: "68a33e77c451a6150464b03a" },
      { stepId: "68a33e77c451a6150464b03b" },
    ],
    published: true,
    showHeroCard: true,
    uiAccess: [],
    uiAccessCopy: {
      eventPanel: {
        title: {
          "en-GB": "Getting to know yu!",
          "ja-JP": "アンケートのお願い",
          _id: "67a9f342dc8b2ddcd179ba28",
          "en-US": "Getting to know Yu!",
          "en-ZA": "Getting to know Yu!",
        },
        description: {
          "en-GB": "Earn **${amount}** YuCoin and help improve your workplace anonymously!",
          "ja-JP":
            "職場環境に関する匿名のアンケートに回答して**${amount} YuCoin**を獲得しましょう!",
          _id: "67a9f342dc8b2ddcd179ba29",
          "en-US": "Earn **${amount}** YuCoin and improve your workplace!",
          "en-ZA": "Earn **${amount}** YuCoin and improve your workplace!",
        },
        image: "imgix::cms/1739887809094_hq-card-image@3x.png",
        titleImage: {
          "en-GB": "imgix::cms/1739887796680_hq-card-title-uk@3x.png",
          "en-US": "imgix::cms/1739887891337_hq-card-title-uk@3x.png",
          "ja-JP": "imgix::cms/1739887863647_hq-card-title-jp@3x.png",
          "en-ZA": "imgix::cms/1739887947547_hq-card-title-uk@3x.png",
        },
        backgroundImage: "imgix::cms/1739887819715_hq-card-background@3x.png",
      },
    },
    createdAt: {
      $date: "2025-03-24T16:42:55.067Z",
    },
    updatedAt: {
      $date: "2025-04-10T10:44:55.231Z",
    },
    yuCoinRewardAsEarnRateMultiple: 30,
    yuCoinRewardAsFlatAmount: 0,
    isStaticJourney: false,
    requiresUserStateForAccess: false,
    accessRules: {
      tags: [BUSINESS_ACCOUNT_5.business.data.businessAccountId],
    },
    archived: false,
  },
};

export const CORE_JOURNEY_INSTANCE_SURVEY_PROMPT = {
  type: "mongo",
  modelName: model,
  data: {
    _id: generateRandomMongoId(),
    journeyId: generateRandomMongoId(),
    name: "Detox Survey Prompt Test Journey",
    journeySourceTemplateId: "engagement_survey",
    ownerBusinessAccountId: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
    minAppVersion: ">=4.9.0",
    allAnswerKeys: [],
    steps: [
      { stepId: generateRandomMongoId() },
      { stepId: generateRandomMongoId() },
      { stepId: generateRandomMongoId() },
    ],
    published: true,
    showHeroCard: false,
    uiAccess: [],
    uiAccessCopy: {},
    yuCoinRewardAsEarnRateMultiple: 30,
    yuCoinRewardAsFlatAmount: 0,
    isStaticJourney: false,
    requiresUserStateForAccess: false,
    accessRules: {
      tags: [BUSINESS_ACCOUNT_5.business.data.businessAccountId],
    },
    archived: false,
  },
};
