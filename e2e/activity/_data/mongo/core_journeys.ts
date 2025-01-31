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
