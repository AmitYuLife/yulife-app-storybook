import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_42, CUSTOMER_44 } from "../postgres/customers";
import { CUSTOMER_2_SMOKING } from "japan/_data";

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
    staticJourney: true,
    yuCoinRewardAsFlatAmount: 20,
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
        title: { "en-GB": "Getting to know Yu!" },
        description: { "en-GB": "Earn YuCoin by discovering more about your health!" },
        image: "illustrations/health-questionnaire-panel-2024-04-05-1.svg",
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
    minAppVersion: ">=3.44.0",
    staticJourney: false,
    requiresUserStateForAccess: false,
    uiAccess: [],
    accessRules: {
      tags: [CUSTOMER_44.data.customerId],
    },
    uiAccessCopy: {
      eventPanel: {
        title: {
          "en-GB": "Automated QA Test Journey 10 Multiplier",
        },
      },
    },
    yuCoinRewardAsEarnRateMultiple: 10,
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
    minAppVersion: ">=3.44.0",
    yuCoinRewardAsEarnRateMultiple: 0,
    staticJourney: false,
    requiresUserStateForAccess: false,
    uiAccess: [],
    uiAccessCopy: {
      eventPanel: {
        title: {
          "en-GB": "Automated QA Test Journey 500 YuCoin Flat Amount",
        },
      },
    },
    accessRules: {
      tags: [CUSTOMER_44.data.customerId],
    },
    yuCoinRewardAsFlatAmount: 500,
  },
};
