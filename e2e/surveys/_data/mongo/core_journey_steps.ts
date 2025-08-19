import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CORE_JOURNEY_INSTANCE_HQ_ID } from "../../_resources/constants";
import {
  CORE_JOURNEY_INSTANCE_FOR_REWARD_MULTIPLIER_TEST,
  CORE_JOURNEY_INSTANCE_FOR_REWARD_FLAT_RATE_TEST,
  CORE_JOURNEY_INSTANCE_2,
} from "./core_journey_instances";

const modelName = "core_journey_steps";
const type = "mongo";

export const CORE_JOURNEY_STEPS_01 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f1",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.7.26",
    name: "dynamic_health.1.7.26",
    externalId: "dynamic_health.1.7.26",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.7.26",
      copy: {
        heading: {
          "en-GB":
            "Have you enjoyed any alcoholic drinks like cocktails, beers, or wine this month?",
          "ja-JP": "過去6ヶ月間にアルコール飲料を摂取しましたか?",
          _id: "6627908b790eab650c2a69bf",
        },
        description: {
          "en-GB": null,
          _id: "6627908b790eab650c2a69c0",
        },
        ctaLabel: {
          "en-GB": "Next",
          "ja-JP": "次へ",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.1.7.26.1",
          label: {
            "en-GB": "Yes, I have consumed alcohol this month",
            "ja-JP": "はい",
            _id: "6627908b790eab650c2a69bd",
          },
        },
        {
          value: "dynamic_health.1.7.26.2",
          label: {
            "en-GB": "No, I have not consumed alcohol this month",
            "ja-JP": "いいえ",
            _id: "6627908b790eab650c2a69be",
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.1.7.26"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.1.7.26": {
          type: "object",
          properties: {
            "dynamic_health.1.7.26.1": {
              type: "boolean",
            },
            "dynamic_health.1.7.26.2": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.1.7.26"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: "2024-04-23T10:42:19.928+0000",
    updatedAt: "2024-04-23T10:42:19.928+0000",
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_02 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f2",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.7.29",
    name: "dynamic_health.1.7.29",
    externalId: "dynamic_health.1.7.29",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.7.29",
      copy: {
        heading: {
          "en-GB":
            "Are you interested in receiving some advice about alcohol consumption? Just checking in to see if you're open to some helpful tips!",
          _id: "6627908b790eab650c2a69c3",
        },
        description: {
          "en-GB": null,
          _id: "6627908b790eab650c2a69c4",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.1.7.29.1",
          label: {
            "en-GB": "Yes, I wouldn't mind.",
            _id: "6627908b790eab650c2a69c1",
          },
        },
        {
          value: "dynamic_health.1.7.29.2",
          label: {
            "en-GB": "No, thank you.",
            _id: "6627908b790eab650c2a69c2",
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.1.7.29"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.1.7.29": {
          type: "object",
          properties: {
            "dynamic_health.1.7.29.1": {
              type: "boolean",
            },
            "dynamic_health.1.7.29.2": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.1.7.29"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: "2024-04-23T10:42:19.928+0000",
    updatedAt: "2024-04-23T10:42:19.928+0000",
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_03 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f3",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.4.1",
    name: "dynamic_health.1.4.1",
    externalId: "dynamic_health.1.4.1",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.4.1",
      copy: {
        heading: {
          "en-GB":
            "Did you pay attention to your hunger and fullness cues today, eating when you felt genuinely hungry and stopping before feeling overly full?",
          _id: "6627908b790eab650c2a69c9",
        },
        description: {
          "en-GB": null,
          _id: "6627908b790eab650c2a69ca",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.1.4.1.1",
          label: {
            "en-GB": "I followed my hunger and fullness cues all day.",
            _id: "6627908b790eab650c2a69c5",
          },
        },
        {
          value: "dynamic_health.1.4.1.2",
          label: {
            "en-GB": "I mostly followed my hunger and fullness cues during the day.",
            _id: "6627908b790eab650c2a69c6",
          },
        },
        {
          value: "dynamic_health.1.4.1.3",
          label: {
            "en-GB": "I sometimes followed my hunger and fullness cues today.",
            _id: "6627908b790eab650c2a69c7",
          },
        },
        {
          value: "dynamic_health.1.4.1.4",
          label: {
            "en-GB": "I didn't pay attention to my hunger and fullness cues at all today.",
            _id: "6627908b790eab650c2a69c8",
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.1.4.1"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.1.4.1": {
          type: "object",
          properties: {
            "dynamic_health.1.4.1.1": {
              type: "boolean",
            },
            "dynamic_health.1.4.1.2": {
              type: "boolean",
            },
            "dynamic_health.1.4.1.3": {
              type: "boolean",
            },
            "dynamic_health.1.4.1.4": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.1.4.1"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: "2024-04-23T10:42:19.928+0000",
    updatedAt: "2024-04-23T10:42:19.928+0000",
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_04 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f4",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.6.10",
    name: "dynamic_health.1.6.10",
    externalId: "dynamic_health.1.6.10",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.6.10",
      copy: {
        heading: {
          "en-GB":
            "Have you found yourself using tobacco products more than once in the past 6 months?",
          _id: "6627908b790eab650c2a69cd",
        },
        description: {
          "en-GB": null,
          _id: "6627908b790eab650c2a69ce",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.1.6.10.1",
          label: {
            "en-GB": "I have used tobacco products more than once in the last 6 months.",
            _id: "6627908b790eab650c2a69cb",
          },
        },
        {
          value: "dynamic_health.1.6.10.2",
          label: {
            "en-GB": "I have not used tobacco products more than once in the last 6 months.",
            _id: "6627908b790eab650c2a69cc",
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.1.6.10"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.1.6.10": {
          type: "object",
          properties: {
            "dynamic_health.1.6.10.1": {
              type: "boolean",
            },
            "dynamic_health.1.6.10.2": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.1.6.10"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: "2024-04-23T10:42:19.928+0000",
    updatedAt: "2024-04-23T10:42:19.928+0000",
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_05 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f5",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.8.12",
    name: "dynamic_health.1.8.12",
    externalId: "dynamic_health.1.8.12",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.8.12",
      copy: {
        heading: {
          "en-GB":
            "Do you use any specific treatments or strategies to manage headaches or migraines?",
          _id: "6627908b790eab650c2a69d4",
        },
        description: {
          "en-GB": "(Select all that apply",
          _id: "6627908b790eab650c2a69d5",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "native",
      multiSelect: true,
      options: [
        {
          value: "dynamic_health.1.8.12.1",
          label: {
            "en-GB": "Yes, I use over-the-counter pain medication.",
            _id: "6627908b790eab650c2a69cf",
          },
        },
        {
          value: "dynamic_health.1.8.12.2",
          label: {
            "en-GB": "Yes, I use prescription medication.",
            _id: "6627908b790eab650c2a69d0",
          },
        },
        {
          value: "dynamic_health.1.8.12.3",
          label: {
            "en-GB":
              "Yes, I use non-drug strategies (e.g., relaxation techniques, avoiding triggers.",
            _id: "6627908b790eab650c2a69d1",
          },
        },
        {
          value: "dynamic_health.1.8.12.4",
          label: {
            "en-GB": "Yes, Other.",
            _id: "6627908b790eab650c2a69d2",
          },
        },
        {
          value: "dynamic_health.1.8.12.5",
          label: {
            "en-GB": "No, I do not use any specific treatments or strategies.",
            _id: "6627908b790eab650c2a69d3",
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.1.8.12"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.1.8.12": {
          type: "object",
          properties: {
            "dynamic_health.1.8.12.1": {
              type: "boolean",
            },
            "dynamic_health.1.8.12.2": {
              type: "boolean",
            },
            "dynamic_health.1.8.12.3": {
              type: "boolean",
            },
            "dynamic_health.1.8.12.4": {
              type: "boolean",
            },
            "dynamic_health.1.8.12.5": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.1.8.12"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: "2024-04-23T10:42:19.929+0000",
    updatedAt: "2024-04-23T10:42:19.929+0000",
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_06 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f6",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.7.11",
    name: "dynamic_health.2.7.11",
    externalId: "dynamic_health.2.7.11",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.2.7.11",
      copy: {
        heading: {
          "en-GB": "In the past week, how often have you felt a lack of hope or enthusiasm?",
          _id: "6627908b790eab650c2a69da",
        },
        description: {
          "en-GB": null,
          _id: "6627908b790eab650c2a69db",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.7.11.1",
          label: {
            "en-GB": "Almost every day",
            _id: "6627908b790eab650c2a69d6",
          },
        },
        {
          value: "dynamic_health.2.7.11.2",
          label: {
            "en-GB": "Several days",
            _id: "6627908b790eab650c2a69d7",
          },
        },
        {
          value: "dynamic_health.2.7.11.3",
          label: {
            "en-GB": "Rarely",
            _id: "6627908b790eab650c2a69d8",
          },
        },
        {
          value: "dynamic_health.2.7.11.4",
          label: {
            "en-GB": "Not at all",
            _id: "6627908b790eab650c2a69d9",
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.2.7.11"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.2.7.11": {
          type: "object",
          properties: {
            "dynamic_health.2.7.11.1": {
              type: "boolean",
            },
            "dynamic_health.2.7.11.2": {
              type: "boolean",
            },
            "dynamic_health.2.7.11.3": {
              type: "boolean",
            },
            "dynamic_health.2.7.11.4": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.2.7.11"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: "2024-04-23T10:42:19.929+0000",
    updatedAt: "2024-04-23T10:42:19.929+0000",
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_07 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f7",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.7.3",
    name: "dynamic_health.2.7.3",
    externalId: "dynamic_health.2.7.3",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.2.7.3",
      copy: {
        heading: {
          "en-GB":
            "Did you experience any moments today when you were feeling a bit down or had a decrease in mood?",
          _id: "6627908b790eab650c2a69e0",
        },
        description: {
          "en-GB": null,
          _id: "6627908b790eab650c2a69e1",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.7.3.1",
          label: {
            "en-GB": "Most of the day",
            _id: "6627908b790eab650c2a69dc",
          },
        },
        {
          value: "dynamic_health.2.7.3.2",
          label: {
            "en-GB": "Some of the day",
            _id: "6627908b790eab650c2a69dd",
          },
        },
        {
          value: "dynamic_health.2.7.3.3",
          label: {
            "en-GB": "A little of the day",
            _id: "6627908b790eab650c2a69de",
          },
        },
        {
          value: "dynamic_health.2.7.3.4",
          label: {
            "en-GB": "None of the day",
            _id: "6627908b790eab650c2a69df",
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.2.7.3"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.2.7.3": {
          type: "object",
          properties: {
            "dynamic_health.2.7.3.1": {
              type: "boolean",
            },
            "dynamic_health.2.7.3.2": {
              type: "boolean",
            },
            "dynamic_health.2.7.3.3": {
              type: "boolean",
            },
            "dynamic_health.2.7.3.4": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.2.7.3"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: "2024-04-23T10:42:19.929+0000",
    updatedAt: "2024-04-23T10:42:19.929+0000",
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_08 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f8",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.7.14",
    name: "dynamic_health.2.7.14",
    externalId: "dynamic_health.2.7.14",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.2.7.14",
      copy: {
        heading: {
          "en-GB":
            "Have you needed to take any days off work lately due to feeling down or having a low mood?",
          _id: "6627908b790eab650c2a69e5",
        },
        description: {
          "en-GB": null,
          _id: "6627908b790eab650c2a69e6",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.7.14.1",
          label: {
            "en-GB": "I have taken days off due to feeling down or having a low mood.",
            _id: "6627908b790eab650c2a69e2",
          },
        },
        {
          value: "dynamic_health.2.7.14.2",
          label: {
            "en-GB": "I have not needed to take days off.",
            _id: "6627908b790eab650c2a69e3",
          },
        },
        {
          value: "dynamic_health.2.7.14.3",
          label: {
            "en-GB": "I have wanted to take days off but did not.",
            _id: "6627908b790eab650c2a69e4",
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.2.7.14"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.2.7.14": {
          type: "object",
          properties: {
            "dynamic_health.2.7.14.1": {
              type: "boolean",
            },
            "dynamic_health.2.7.14.2": {
              type: "boolean",
            },
            "dynamic_health.2.7.14.3": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.2.7.14"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: "2024-04-23T10:42:19.929+0000",
    updatedAt: "2024-04-23T10:42:19.929+0000",
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_09 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69fd",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "health_questionnaire_initial",
    name: "health_questionnaire_initial",
    template: "journey_template_intro",
    templateUi: {
      headingImageKey: "journeys/banner-yugi-heart.png",
      copy: {
        heading: {
          "en-GB": "Getting to know Yu!",
          "ja-JP": "あなたのことを教えてね!",
        },
        description: {
          "en-GB":
            "Discovering more about your health is always a good thing, but we’re also here to reward you for that intention. Receive some **extra YuCoin** as you sail through these questions!",
          "ja-JP":
            "自分の健康について知ることはとても大切なことです。健康チェックの質問に答えていただくと、もれなくYuCoinをプレゼントします!",
        },
        ctaLabel: {
          "en-GB": "Let’s go!",
          "ja-JP": "始める",
        },
      },
      introBoxes: [
        {
          iconImageKey: "journeys/info-panel-document.png",
          description: {
            "en-GB": "Complete the health questions to the best of your ability.",
            "ja-JP": "健康に関する質問にできる限り詳しく回答してください。",
          },
          heading: {
            "en-GB": "Task",
            "ja-JP": "タスク",
          },
        },
        {
          iconImageKey: "journeys/info-panel-chest.png",
          description: {
            "en-GB": "${amount} YuCoin!",
            "ja-JP": "${amount}YuCoinを獲得!",
          },
          heading: {
            "en-GB": "Rewards",
            "ja-JP": "リワード",
          },
        },
        {
          iconImageKey: "journeys/info-panel-question-mark.png",
          description: {
            "en-GB":
              "These questions were hand-picked and referenced from NHS sources to help you create an overall picture of your health.",
            "ja-JP":
              "これらの質問は、専門家の情報源から厳選して参照したもので、あなたの健康状態の全体像を把握するのに役立ちます。",
          },
          heading: {
            "en-GB": "Why all the questions?",
            "ja-JP": "なぜこんなに質問が多いのか?",
          },
        },
      ],
      infoBoxText: {
        "en-GB":
          "Our lips are sealed! Your answers are confidential and won’t be shared with your employer or any third party.",
        "ja-JP":
          "このアンケートは機密情報として扱われ、雇用主や第三者に共有されることはありません。",
      },
      showProgress: false,
      yuCoinRewardAsEarnRateMultiple: 4,
      disclaimer: {
        "en-GB":
          "By completing this questionnaire and submitting this information, you consent to us processing your data in order to record and analyse the information on a pseudonymised basis for research purposes in order to develop our understanding of where we might be able to improve population health through gamification. You may withdraw your consent at any time through our in-app chat function or via email to [data@yulife.com](mailto:data@yulife.com). Please see our Privacy Policy for further information: \n[https://yulife.com/privacy-policy/](https://yulife.com/privacy-policy/).",
        "ja-JP":
          "このアンケートに回答し、この情報を送信することで、あなたは、ゲーミフィケーションを通じて集団の健康を改善できる可能性のある場所についての理解を深めるために、研究目的で仮名ベースで情報を記録し分析するために、当社があなたのデータを処理することに同意します。あなたは、当社のアプリ内チャット機能または[data@yulife.com](mailto:data@yulife.com)への電子メールを通じて、いつでも同意を撤回することができます。詳しくは[プライバシーポリシー](https://yulife.com/jp/privacy-policy/)をご覧ください。",
      },
    },
    stepType: "initial",
    answerKeys: [],
    validation: {
      type: "object",
      additionalProperties: true,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    createdAt: "2024-04-23T10:42:19.944+0000",
    updatedAt: "2024-04-23T10:42:19.944+0000",
    __v: 0,
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_10 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a6a01",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "health_questionnaire_submission",
    name: "health_questionnaire_submission",
    stepType: "post_submission_confirmation",
    template: "journey_template_yucoin_award",
    templateUi: {
      copy: {
        heading: {
          "en-GB": "Thank you for your feedback!",
          "ja-JP": "ご協力ありがとうございます！",
          _id: "67e18d2897e7765fda549a7d",
        },
        description: {
          "en-GB": "Here’s some YuCoin for helping to make your company experience even better.",
          "ja-JP": "アンケート回答のお礼として、YuCoinを差し上げます。",
          _id: "67e18d2897e7765fda549a7e",
        },
        ctaLabel: {
          "en-GB": "Claim",
          "ja-JP": "受け取る",
          _id: "67e18d2897e7765fda549a7f",
        },
      },
      showProgress: false,
      progress: {
        progressValue: 2,
        progressTotal: 2,
      },
      category: {},
    },
    answerKeys: [],
    temporaryProperties: [],
    hooks: [
      {
        hook: "awardYucoin",
        trigger: "onPreFill",
      },
      {
        hook: "validateAccessRules",
        trigger: "onPreSave",
      },
    ],
    events: [],
    nextSteps: [],
    __v: 0,
    disableBackAction: true,
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_11 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7ad",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.1.1",
    name: "dynamic_health.2.1.1",
    externalId: "dynamic_health.2.1.1",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.2.1.1",
      copy: {
        heading: {
          "en-GB": "How many hours of sleep did you get last night?",
          _id: {
            $oid: "6630d7310860d967cba8d774",
          },
        },
        description: {
          "en-GB": null,
          _id: {
            $oid: "6630d7310860d967cba8d775",
          },
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.1.1.1",
          label: {
            "en-GB": "More than 9 hours",
            _id: {
              $oid: "6630d7310860d967cba8d770",
            },
          },
        },
        {
          value: "dynamic_health.2.1.1.2",
          label: {
            "en-GB": "7 – 9 hours",
            _id: {
              $oid: "6630d7310860d967cba8d771",
            },
          },
        },
        {
          value: "dynamic_health.2.1.1.3",
          label: {
            "en-GB": "5 – 6 hours",
            _id: {
              $oid: "6630d7310860d967cba8d772",
            },
          },
        },
        {
          value: "dynamic_health.2.1.1.4",
          label: {
            "en-GB": "Less than 5 hours",
            _id: {
              $oid: "6630d7310860d967cba8d773",
            },
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.2.1.1"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.2.1.1": {
          type: "object",
          properties: {
            "dynamic_health.2.1.1.1": {
              type: "boolean",
            },
            "dynamic_health.2.1.1.2": {
              type: "boolean",
            },
            "dynamic_health.2.1.1.3": {
              type: "boolean",
            },
            "dynamic_health.2.1.1.4": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.2.1.1"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: {
      $date: "2024-04-30T11:34:09.397Z",
    },
    updatedAt: {
      $date: "2024-04-30T11:34:09.397Z",
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_12 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7ae",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.1.11",
    name: "dynamic_health.2.1.11",
    externalId: "dynamic_health.2.1.11",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.2.1.11",
      copy: {
        heading: {
          "en-GB": "Are you a morning or night person?",
          _id: {
            $oid: "6630d7310860d967cba8d779",
          },
        },
        description: {
          "en-GB": null,
          _id: {
            $oid: "6630d7310860d967cba8d77a",
          },
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.1.11.1",
          label: {
            "en-GB": "Morning person",
            _id: {
              $oid: "6630d7310860d967cba8d776",
            },
          },
        },
        {
          value: "dynamic_health.2.1.11.2",
          label: {
            "en-GB": "Night person",
            _id: {
              $oid: "6630d7310860d967cba8d777",
            },
          },
        },
        {
          value: "dynamic_health.2.1.11.3",
          label: {
            "en-GB": "I'm not sure",
            _id: {
              $oid: "6630d7310860d967cba8d778",
            },
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.2.1.11"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.2.1.11": {
          type: "object",
          properties: {
            "dynamic_health.2.1.11.1": {
              type: "boolean",
            },
            "dynamic_health.2.1.11.2": {
              type: "boolean",
            },
            "dynamic_health.2.1.11.3": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.2.1.11"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: {
      $date: "2024-04-30T11:34:09.397Z",
    },
    updatedAt: {
      $date: "2024-04-30T11:34:09.397Z",
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_13 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7af",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.6.27",
    name: "dynamic_health.2.6.27",
    externalId: "dynamic_health.2.6.27",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.2.6.27",
      copy: {
        heading: {
          "en-GB": "In the past 6 months, how often have you felt stressed?",
          _id: {
            $oid: "6630d7310860d967cba8d780",
          },
        },
        description: {
          "en-GB": null,
          _id: {
            $oid: "6630d7310860d967cba8d781",
          },
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.6.27.1",
          label: {
            "en-GB": "Always",
            _id: {
              $oid: "6630d7310860d967cba8d77b",
            },
          },
        },
        {
          value: "dynamic_health.2.6.27.2",
          label: {
            "en-GB": "Often",
            _id: {
              $oid: "6630d7310860d967cba8d77c",
            },
          },
        },
        {
          value: "dynamic_health.2.6.27.3",
          label: {
            "en-GB": "Sometimes",
            _id: {
              $oid: "6630d7310860d967cba8d77d",
            },
          },
        },
        {
          value: "dynamic_health.2.6.27.4",
          label: {
            "en-GB": "Rarely",
            _id: {
              $oid: "6630d7310860d967cba8d77e",
            },
          },
        },
        {
          value: "dynamic_health.2.6.27.5",
          label: {
            "en-GB": "Never",
            _id: {
              $oid: "6630d7310860d967cba8d77f",
            },
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.2.6.27"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.2.6.27": {
          type: "object",
          properties: {
            "dynamic_health.2.6.27.1": {
              type: "boolean",
            },
            "dynamic_health.2.6.27.2": {
              type: "boolean",
            },
            "dynamic_health.2.6.27.3": {
              type: "boolean",
            },
            "dynamic_health.2.6.27.4": {
              type: "boolean",
            },
            "dynamic_health.2.6.27.5": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.2.6.27"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: {
      $date: "2024-04-30T11:34:09.397Z",
    },
    updatedAt: {
      $date: "2024-04-30T11:34:09.397Z",
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_14 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7b0",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.11.1",
    name: "dynamic_health.2.11.1",
    externalId: "dynamic_health.2.11.1",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.2.11.1",
      copy: {
        heading: {
          "en-GB":
            "In the past week, how often did you manage to stay focused on important tasks without getting sidetracked?",
          _id: {
            $oid: "6630d7310860d967cba8d787",
          },
        },
        description: {
          "en-GB": null,
          _id: {
            $oid: "6630d7310860d967cba8d788",
          },
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.11.1.1",
          label: {
            "en-GB": "Always",
            _id: {
              $oid: "6630d7310860d967cba8d782",
            },
          },
        },
        {
          value: "dynamic_health.2.11.1.2",
          label: {
            "en-GB": "Often",
            _id: {
              $oid: "6630d7310860d967cba8d783",
            },
          },
        },
        {
          value: "dynamic_health.2.11.1.3",
          label: {
            "en-GB": "Sometimes",
            _id: {
              $oid: "6630d7310860d967cba8d784",
            },
          },
        },
        {
          value: "dynamic_health.2.11.1.4",
          label: {
            "en-GB": "Rarely",
            _id: {
              $oid: "6630d7310860d967cba8d785",
            },
          },
        },
        {
          value: "dynamic_health.2.11.1.5",
          label: {
            "en-GB": "Never",
            _id: {
              $oid: "6630d7310860d967cba8d786",
            },
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.2.11.1"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.2.11.1": {
          type: "object",
          properties: {
            "dynamic_health.2.11.1.1": {
              type: "boolean",
            },
            "dynamic_health.2.11.1.2": {
              type: "boolean",
            },
            "dynamic_health.2.11.1.3": {
              type: "boolean",
            },
            "dynamic_health.2.11.1.4": {
              type: "boolean",
            },
            "dynamic_health.2.11.1.5": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.2.11.1"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: {
      $date: "2024-04-30T11:34:09.398Z",
    },
    updatedAt: {
      $date: "2024-04-30T11:34:09.398Z",
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_15 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7b1",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.8.1",
    name: "dynamic_health.2.8.1",
    externalId: "dynamic_health.2.8.1",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.2.8.1",
      copy: {
        heading: {
          "en-GB": "How often do you socialise with friends, family, or community groups?",
          _id: {
            $oid: "6630d7310860d967cba8d78e",
          },
        },
        description: {
          "en-GB": null,
          _id: {
            $oid: "6630d7310860d967cba8d78f",
          },
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.8.1.1",
          label: {
            "en-GB": "Always (everyday)",
            _id: {
              $oid: "6630d7310860d967cba8d789",
            },
          },
        },
        {
          value: "dynamic_health.2.8.1.2",
          label: {
            "en-GB": "Often (several times a week)",
            _id: {
              $oid: "6630d7310860d967cba8d78a",
            },
          },
        },
        {
          value: "dynamic_health.2.8.1.3",
          label: {
            "en-GB": "Sometimes (a few times a month)",
            _id: {
              $oid: "6630d7310860d967cba8d78b",
            },
          },
        },
        {
          value: "dynamic_health.2.8.1.4",
          label: {
            "en-GB": "Rarely (a few times a year)",
            _id: {
              $oid: "6630d7310860d967cba8d78c",
            },
          },
        },
        {
          value: "dynamic_health.2.8.1.5",
          label: {
            "en-GB": "I don't socialise with others",
            _id: {
              $oid: "6630d7310860d967cba8d78d",
            },
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.2.8.1"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.2.8.1": {
          type: "object",
          properties: {
            "dynamic_health.2.8.1.1": {
              type: "boolean",
            },
            "dynamic_health.2.8.1.2": {
              type: "boolean",
            },
            "dynamic_health.2.8.1.3": {
              type: "boolean",
            },
            "dynamic_health.2.8.1.4": {
              type: "boolean",
            },
            "dynamic_health.2.8.1.5": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.2.8.1"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: {
      $date: "2024-04-30T11:34:09.398Z",
    },
    updatedAt: {
      $date: "2024-04-30T11:34:09.398Z",
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_16 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7b3",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.7.30",
    name: "dynamic_health.1.7.30",
    externalId: "dynamic_health.1.7.30",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.7.30",
      copy: {
        heading: {
          "en-GB": "Have you found yourself drinking more than once in the past 6 months?",
          _id: {
            $oid: "6630d7310860d967cba8d796",
          },
        },
        description: {
          "en-GB": null,
          _id: {
            $oid: "6630d7310860d967cba8d797",
          },
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.1.7.30.1",
          label: {
            "en-GB": "Yes",
            _id: {
              $oid: "6630d7310860d967cba8d794",
            },
          },
        },
        {
          value: "dynamic_health.1.7.30.2",
          label: {
            "en-GB": "No",
            _id: {
              $oid: "6630d7310860d967cba8d795",
            },
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.1.7.30"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.1.7.30": {
          type: "object",
          properties: {
            "dynamic_health.1.7.30.1": {
              type: "boolean",
            },
            "dynamic_health.1.7.30.2": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.1.7.30"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: {
      $date: "2024-04-30T11:34:09.398Z",
    },
    updatedAt: {
      $date: "2024-04-30T11:34:09.398Z",
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_17 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7b4",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.1.8",
    name: "dynamic_health.1.1.8",
    externalId: "dynamic_health.1.1.8",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.1.8",
      copy: {
        heading: {
          "en-GB": "Are you happy with your current diet?",
          _id: {
            $oid: "6630d7310860d967cba8d79b",
          },
        },
        description: {
          "en-GB": null,
          _id: {
            $oid: "6630d7310860d967cba8d79c",
          },
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.1.1.8.1",
          label: {
            "en-GB": "Yes",
            _id: {
              $oid: "6630d7310860d967cba8d798",
            },
          },
        },
        {
          value: "dynamic_health.1.1.8.2",
          label: {
            "en-GB": "No",
            _id: {
              $oid: "6630d7310860d967cba8d799",
            },
          },
        },
        {
          value: "dynamic_health.1.1.8.3",
          label: {
            "en-GB": "Somewhat",
            _id: {
              $oid: "6630d7310860d967cba8d79a",
            },
          },
        },
      ],
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.1.1.8"],
    validation: {
      type: "object",
      minProperties: 1,
      properties: {
        "dynamic_health.1.1.8": {
          type: "object",
          properties: {
            "dynamic_health.1.1.8.1": {
              type: "boolean",
            },
            "dynamic_health.1.1.8.2": {
              type: "boolean",
            },
            "dynamic_health.1.1.8.3": {
              type: "boolean",
            },
          },
          additionalProperties: false,
        },
      },
      required: ["dynamic_health.1.1.8"],
      additionalProperties: false,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: {
      $date: "2024-04-30T11:34:09.399Z",
    },
    updatedAt: {
      $date: "2024-04-30T11:34:09.399Z",
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_18 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7b5",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.0.0.1",
    name: "dynamic_health.0.0.1",
    externalId: "dynamic_health.0.0.1",
    template: "journey_template_height",
    templateUi: {
      answerKey: "dynamic_health.0.0.1",
      copy: {
        heading: {
          "en-GB": "What is your height?",
          _id: {
            $oid: "6630d7310860d967cba8d79d",
          },
        },
        description: {
          "en-GB": null,
          _id: {
            $oid: "6630d7310860d967cba8d79e",
          },
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 20,
        yucoinAward: true,
      },
    },
    stepType: "normal",
    answerKeys: ["dynamic_health.0.0.1"],
    validation: {
      type: "object",
      properties: {
        HEIGHT_UNIT: {
          type: "string",
          enum: ["imperial", "metric"],
        },
        HEIGHT_CM: {
          type: "number",
          minimum: 0,
        },
        HEIGHT_FT: {
          type: "number",
          minimum: 0,
        },
        HEIGHT_IN: {
          type: "number",
          minimum: 0,
        },
        "dynamic_health.0.0.1": {
          type: "string",
        },
      },
      required: ["dynamic_health.0.0.1"],
      additionalProperties: false,
      minProperties: 2,
      maxProperties: 5,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [],
    __v: 0,
    createdAt: {
      $date: "2024-04-30T11:34:09.399Z",
    },
    updatedAt: {
      $date: "2024-04-30T11:34:09.399Z",
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_FOR_REWARD_MULTIPLIER_TEST_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId,
    journey: CORE_JOURNEY_INSTANCE_FOR_REWARD_MULTIPLIER_TEST.data._id,
    stepId: "initial",
    name: "initial",
    stepType: "initial",
    template: "journey_template_choice",
    templateUi: {
      design: "default",
      copy: {
        heading: {
          "en-GB": "The choice is yours.",
        },
        description: {
          "en-GB": "Will you choose the Red pill or Blue pill?",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      answerKey: "the_choice_is_yours",
      multiSelect: false,
      options: [
        {
          label: {
            "en-GB": "Red pill",
          },
          value: "red_pill",
        },
        {
          label: {
            "en-GB": "Blue pill",
          },
          value: "blue_pill",
        },
      ],
      showProgress: true,
      category: {},
      progress: {
        progressValue: 0,
        progressTotal: 1,
      },
    },
    answerKeys: ["the_choice_is_yours"],
    temporaryProperties: [],
    customValidation: {
      isRequired: true,
    },
    hooks: [],
    events: [],
    nextSteps: [
      {
        stepId: "submission",
      },
    ],
  },
};

export const CORE_JOURNEY_FOR_REWARD_MULTIPLIER_TEST_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId,
    journey: CORE_JOURNEY_INSTANCE_FOR_REWARD_MULTIPLIER_TEST.data._id,
    stepId: "submission",
    name: "submission",
    stepType: "submission",
    template: "journey_template_no_question",
    templateUi: {
      copy: {
        heading: {
          "en-GB": "Thank you for answering",
        },
        description: {
          "en-GB": "Press submit to collect your reward!",
        },
        ctaLabel: {
          "en-GB": "Submit",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 1,
      },
    },
    answerKeys: [],
    temporaryProperties: [],
    hooks: [
      {
        hook: "validateAccessRules",
        trigger: "onPreSave",
      },
      {
        hook: "awardYucoin",
        trigger: "onPreFill",
      },
    ],
    events: [],
    nextSteps: [],
  },
};

export const CORE_JOURNEY_FOR_REWARD_FLAT_RATE_TEST_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId,
    journey: CORE_JOURNEY_INSTANCE_FOR_REWARD_FLAT_RATE_TEST.data._id,
    stepId: "initial",
    name: "initial",
    stepType: "initial",
    template: "journey_template_choice",
    templateUi: {
      design: "default",
      copy: {
        heading: {
          "en-GB": "The choice is yours.",
        },
        description: {
          "en-GB": "Will you choose the Red pill or Blue pill?",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      answerKey: "the_choice_is_yours",
      multiSelect: false,
      options: [
        {
          label: {
            "en-GB": "Red pill",
          },
          value: "red_pill",
        },
        {
          label: {
            "en-GB": "Blue pill",
          },
          value: "blue_pill",
        },
      ],
      showProgress: true,
      category: {},
      progress: {
        progressValue: 0,
        progressTotal: 1,
      },
    },
    answerKeys: ["the_choice_is_yours"],
    temporaryProperties: [],
    customValidation: {
      isRequired: true,
    },
    hooks: [],
    events: [],
    nextSteps: [
      {
        stepId: "submission",
      },
    ],
  },
};

export const CORE_JOURNEY_FOR_REWARD_FLAT_RATE_TEST_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId,
    journey: CORE_JOURNEY_INSTANCE_FOR_REWARD_FLAT_RATE_TEST.data._id,
    stepId: "submission",
    name: "submission",
    stepType: "submission",
    template: "journey_template_no_question",
    templateUi: {
      copy: {
        heading: {
          "en-GB": "Thank you for answering",
        },
        description: {
          "en-GB": "Press submit to collect your reward!",
        },
        ctaLabel: {
          "en-GB": "Submit",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 1,
      },
    },
    answerKeys: [],
    temporaryProperties: [],
    hooks: [
      {
        hook: "validateAccessRules",
        trigger: "onPreSave",
      },
      {
        hook: "awardYucoin",
        trigger: "onPreFill",
      },
    ],
    events: [],
    nextSteps: [],
  },
};

export const CORE_JOURNEY_STEPS_19 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,

    stepId: "dynamic_advice.1.2.15",
    name: "dynamic_advice.1.2.15",
    stepType: "normal",
    externalId: "dynamic_advice.1.2.15",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_advice.1.2.15",
      copy: {
        heading: {
          "en-GB": "How motivated are you to take up this advice?",
          "ja-JP": "このアドバイスを積極的に取り入れたい気持ちはどのくらいありますか?",
          _id: "680840de9ce202f0ef54743b",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "680840de9ce202f0ef54743c",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
      hint: {
        title: {
          en: "Health advice and tips",
          "en-GB": "Health advice and tips",
          "en-US": "Health advice and tips",
          "en-ZA": "Health advice and tips",
          "ja-JP": "健康に関するアドバイス",
          "es-US": "Consejos de salud",
          _id: "680840de9ce202f0ef54743d",
        },
        description: {
          "en-GB":
            "Understanding your sleep habits are important for building a healthy sleep pattern.",
          "ja-JP": "自分の睡眠習慣を理解することは、健康的な睡眠パターンを築くために重要です。",
          _id: "680840de9ce202f0ef54743e",
        },
        imageKey: "journeys/health-questionnaire/advice.svg",
      },
      design: "default",
      options: [
        {
          value: "dynamic_advice.1.2.15.1",
          label: {
            "en-GB": "It's not for me",
            "ja-JP": "自分に適切だとは思わない",
            _id: "680840de9ce202f0ef54743f",
          },
        },
        {
          value: "dynamic_advice.1.2.15.2",
          label: {
            "en-GB": "I'll think about it",
            "ja-JP": "後で考えたい",
            _id: "680840de9ce202f0ef547440",
          },
        },
        {
          value: "dynamic_advice.1.2.15.3",
          label: {
            "en-GB": "I'm interested in it",
            "ja-JP": "興味はない",
            _id: "680840de9ce202f0ef547441",
          },
        },
        {
          value: "dynamic_advice.1.2.15.4",
          label: {
            "en-GB": "I'll definitely give it a try",
            "ja-JP": "ぜひ試したい",
            _id: "680840de9ce202f0ef547442",
          },
        },
        {
          value: "dynamic_advice.1.2.15.5",
          label: {
            "en-GB": "I'm committed to do it regularly",
            "ja-JP": "必ず継続して行いたい",
            _id: "680840de9ce202f0ef547443",
          },
        },
      ],
    },
    answerKeys: ["dynamic_advice.1.2.15"],
    temporaryProperties: [],
    __v: 0,
    hooks: [],
    events: [],
    nextSteps: [],
  },
};

export const CORE_JOURNEY_STEPS_20 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.1.216",
    name: "dynamic_health.1.1.216",
    stepType: "normal",
    externalId: "dynamic_health.1.1.216",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.1.216",
      copy: {
        heading: {
          "en-GB": "Quiz time! What is the recommended daily intake of fruits and vegetables?",
          "ja-JP": "クイズです! 1日に推奨される果物や野菜の摂取量はどのくらいですか?",
          _id: "6808411c4be42efa459a8b9b",
        },
        description: {
          "en-GB": "",
          "ja-JP": "",
          _id: "6808411c4be42efa459a8b9c",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "6808411c4be42efa459a8b9d",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.1.1.216.1",
          label: {
            "en-GB": "1 portion",
            "ja-JP": "1皿分",
            _id: "6808411c4be42efa459a8b9e",
          },
        },
        {
          value: "dynamic_health.1.1.216.2",
          label: {
            "en-GB": "2 – 3 portions",
            "ja-JP": "2~3皿分",
            _id: "6808411c4be42efa459a8b9f",
          },
        },
        {
          value: "dynamic_health.1.1.216.3",
          label: {
            "en-GB": "5 portions",
            "ja-JP": "5皿分",
            _id: "6808411c4be42efa459a8ba0",
          },
        },
        {
          value: "dynamic_health.1.1.216.4",
          label: {
            "en-GB": "6+ portions",
            "ja-JP": "6皿分以上",
            _id: "6808411c4be42efa459a8ba1",
          },
        },
      ],
    },
    answerKeys: ["dynamic_health.1.1.216"],
    temporaryProperties: [],
    feedback: {
      submitOnNoMatch: false,
      entries: [
        {
          values: ["dynamic_health.1.1.216.3"],
          imageKey: "journeys/health-questionnaire/feedback/correct.svg",
          imageWidth: 78,
          backgroundColor: "#40C057",
          displayRays: true,
          starMultiplier: 5,
          title: {
            en: "Nicely done!",
            "en-GB": "Nicely done!",
            "en-US": "Well done!",
            "en-ZA": "Nicely done!",
            "ja-JP": "よくできました！",
            "es-US": "¡Bien hecho!",
            _id: "6808411c4be42efa459a8ba2",
          },
          description: {
            en: "**5 portions** is the correct answer.",
            "en-GB": "**5 portions** is the correct answer.",
            "en-US": "**5 portions** is the correct answer.",
            "en-ZA": "**5 portions** is the correct answer.",
            "ja-JP": "**5 portions** が正しい答えです。",
            "es-US": "**5 portions** es la respuesta correcta.",
            _id: "6808411c4be42efa459a8ba3",
          },
          ctaLabel: {
            en: "Next",
            "en-GB": "Next",
            "en-US": "Next",
            "en-ZA": "Next",
            "ja-JP": "次へ",
            "es-US": "Siguiente",
            _id: "6808411c4be42efa459a8ba4",
          },
          onCtaClickAction: "SUBMIT_STEP",
        },
        {
          values: [
            "dynamic_health.1.1.216.1",
            "dynamic_health.1.1.216.2",
            "dynamic_health.1.1.216.4",
          ],
          imageKey: "journeys/health-questionnaire/feedback/incorrect-2025-04-16.svg",
          imageWidth: 202,
          backgroundColor: "#F06B2A",
          displayRays: true,
          title: {
            en: "So close!",
            "en-GB": "So close!",
            "en-US": "So close!",
            "en-ZA": "So close!",
            "ja-JP": "もう少し！",
            "es-US": "¡Tan cerca!",
            _id: "6808411c4be42efa459a8ba5",
          },
          description: {
            en: "The actual answer is: **5 portions**.",
            "en-GB": "The actual answer is: **5 portions**.",
            "en-US": "The actual answer is: **5 portions**.",
            "en-ZA": "The actual answer is: **5 portions**.",
            "ja-JP": "実際の答えは：**5 portions**。",
            "es-US": "La respuesta es: **5 portions**.",
            _id: "6808411c4be42efa459a8ba6",
          },
          ctaLabel: {
            en: "Next",
            "en-GB": "Next",
            "en-US": "Next",
            "en-ZA": "Next",
            "ja-JP": "次へ",
            "es-US": "Siguiente",
            _id: "6808411c4be42efa459a8ba7",
          },
          onCtaClickAction: "SUBMIT_STEP",
        },
      ],
    },
    hooks: [],
    events: [],
    nextSteps: [],
  },
};

export const CORE_JOURNEY_STEPS_21 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.1.1.222",
    name: "dynamic_health.1.1.222",
    stepType: "normal",
    externalId: "dynamic_health.1.1.222",
    template: "journey_template_choice",
    templateUi: {
      answerKey: "dynamic_health.1.1.222",
      copy: {
        heading: {
          "en-GB": "Quiz time! What are the benefits of a balanced diet?",
          "ja-JP": "クイズです! バランスの取れた食事がもたらすメリットは何ですか?",
          _id: "680840382655875c3868e623",
        },
        description: {
          "en-GB": "",
          "ja-JP": "",
          _id: "680840382655875c3868e624",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "680840382655875c3868e625",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.1.1.222.1",
          label: {
            "en-GB": "Instant weight loss",
            "ja-JP": "素早い体重の減量",
            _id: "680840382655875c3868e626",
          },
        },
        {
          value: "dynamic_health.1.1.222.2",
          label: {
            "en-GB": "Improved digestion, energy levels, and reduced risk of chronic diseases",
            "ja-JP": "消化/体力の向上、慢性疾患のリスク軽減",
            _id: "680840382655875c3868e627",
          },
        },
        {
          value: "dynamic_health.1.1.222.3",
          label: {
            "en-GB": "Immunity against all diseases",
            "ja-JP": "あらゆる病気に対する免疫力の向上",
            _id: "680840382655875c3868e628",
          },
        },
        {
          value: "dynamic_health.1.1.222.4",
          label: {
            "en-GB": "Cure mental health",
            "ja-JP": "メンタルヘルスの回復",
            _id: "680840382655875c3868e629",
          },
        },
      ],
    },
    answerKeys: ["dynamic_health.1.1.222"],
    temporaryProperties: [],
    feedback: {
      submitOnNoMatch: false,
      entries: [
        {
          values: ["dynamic_health.1.1.222.2"],
          imageKey: "journeys/health-questionnaire/feedback/correct.svg",
          imageWidth: 78,
          backgroundColor: "#40C057",
          displayRays: true,
          starMultiplier: 5,
          title: {
            en: "Nicely done!",
            "en-GB": "Nicely done!",
            "en-US": "Well done!",
            "en-ZA": "Nicely done!",
            "ja-JP": "よくできました！",
            "es-US": "¡Bien hecho!",
            _id: "680840382655875c3868e62a",
          },
          description: {
            en: "**Improved digestion, energy levels, and reduced risk of chronic diseases** is the correct answer.",
            "en-GB":
              "**Improved digestion, energy levels, and reduced risk of chronic diseases** is the correct answer.",
            "en-US":
              "**Improved digestion, energy levels, and reduced risk of chronic diseases** is the correct answer.",
            "en-ZA":
              "**Improved digestion, energy levels, and reduced risk of chronic diseases** is the correct answer.",
            "ja-JP":
              "**Improved digestion, energy levels, and reduced risk of chronic diseases** が正しい答えです。",
            "es-US":
              "**Improved digestion, energy levels, and reduced risk of chronic diseases** es la respuesta correcta.",
            _id: "680840382655875c3868e62b",
          },
          ctaLabel: {
            en: "Next",
            "en-GB": "Next",
            "en-US": "Next",
            "en-ZA": "Next",
            "ja-JP": "次へ",
            "es-US": "Siguiente",
            _id: "680840382655875c3868e62c",
          },
          onCtaClickAction: "SUBMIT_STEP",
          _id: "68084038bbb150b94b8a0385",
        },
        {
          values: [
            "dynamic_health.1.1.222.1",
            "dynamic_health.1.1.222.3",
            "dynamic_health.1.1.222.4",
          ],
          imageKey: "journeys/health-questionnaire/feedback/incorrect-2025-04-16.svg",
          imageWidth: 202,
          backgroundColor: "#F06B2A",
          displayRays: true,
          title: {
            en: "So close!",
            "en-GB": "So close!",
            "en-US": "So close!",
            "en-ZA": "So close!",
            "ja-JP": "もう少し！",
            "es-US": "¡Tan cerca!",
            _id: "680840382655875c3868e62d",
          },
          description: {
            en: "The actual answer is: **Improved digestion, energy levels, and reduced risk of chronic diseases**.",
            "en-GB":
              "The actual answer is: **Improved digestion, energy levels, and reduced risk of chronic diseases**.",
            "en-US":
              "The actual answer is: **Improved digestion, energy levels, and reduced risk of chronic diseases**.",
            "en-ZA":
              "The actual answer is: **Improved digestion, energy levels, and reduced risk of chronic diseases**.",
            "ja-JP":
              "実際の答えは：**Improved digestion, energy levels, and reduced risk of chronic diseases**。",
            "es-US":
              "La respuesta es: **Improved digestion, energy levels, and reduced risk of chronic diseases**.",
            _id: "680840382655875c3868e62e",
          },
          ctaLabel: {
            en: "Next",
            "en-GB": "Next",
            "en-US": "Next",
            "en-ZA": "Next",
            "ja-JP": "次へ",
            "es-US": "Siguiente",
            _id: "680840382655875c3868e62f",
          },
          onCtaClickAction: "SUBMIT_STEP",
          _id: "68084038bbb150b94b8a0386",
        },
      ],
    },
    __v: 0,
    hooks: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_22 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.1.31",
    name: "dynamic_health.2.1.31",
    stepType: "normal",
    externalId: "dynamic_health.2.1.31",
    template: "journey_template_image_choice",
    templateUi: {
      answerKey: "dynamic_health.2.1.31",
      copy: {
        heading: {
          "en-GB": "Are you a morning or night person?",
          "ja-JP": "あなたは朝型、または夜型のどちらですか?",
          _id: "68083fe84be42efa459a8982",
        },
        description: {
          "en-GB": "",
          "ja-JP": "",
          _id: "68083fe84be42efa459a8983",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "68083fe84be42efa459a8984",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.1.31.1",
          label: {
            "en-GB": "Morning person",
            "ja-JP": "朝型",
            _id: "68083fe84be42efa459a8985",
          },
          imageKey: "journeys/health-questionnaire/image-choice/sleep_chrono_morning.svg",
        },
        {
          value: "dynamic_health.2.1.31.2",
          label: {
            "en-GB": "Night person",
            "ja-JP": "夜型",
            _id: "68083fe84be42efa459a8986",
          },
          imageKey: "journeys/health-questionnaire/image-choice/sleep_chrono_night.svg",
        },
        {
          value: "dynamic_health.2.1.31.3",
          label: {
            "en-GB": "I'm not sure",
            "ja-JP": "分からない",
            _id: "68083fe84be42efa459a8987",
          },
          imageKey: "journeys/health-questionnaire/image-choice/sleep_chrono_unsure.svg",
        },
      ],
      columns: 2,
    },
    answerKeys: ["dynamic_health.2.1.31"],
    temporaryProperties: [],
    __v: 0,
    hooks: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_23 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.11.8",
    name: "dynamic_health.2.11.8",
    stepType: "normal",
    externalId: "dynamic_health.2.11.8",
    template: "journey_template_scale",
    templateUi: {
      answerKey: "dynamic_health.2.11.8",
      copy: {
        heading: {
          "en-GB":
            "In the past week, how often did you manage to stay focused on important tasks without getting sidetracked?",
          "ja-JP": "過去1週間で、重要なタスクに集中し、脱線せずに取り組むことはできましたか?",
          _id: "6808413c4be42efa459a8c54",
        },
        description: {
          "en-GB": "",
          "ja-JP": "",
          _id: "6808413c4be42efa459a8c55",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "6808413c4be42efa459a8c56",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.11.8.1",
          label: {
            "en-GB": "Always",
            "ja-JP": "常にできた",
            _id: "6808413c4be42efa459a8c57",
          },
        },
        {
          value: "dynamic_health.2.11.8.2",
          label: {
            "en-GB": "Often",
            "ja-JP": "だいたいできた",
            _id: "6808413c4be42efa459a8c58",
          },
        },
        {
          value: "dynamic_health.2.11.8.3",
          label: {
            "en-GB": "Sometimes",
            "ja-JP": "時々できた",
            _id: "6808413c4be42efa459a8c59",
          },
        },
        {
          value: "dynamic_health.2.11.8.4",
          label: {
            "en-GB": "Rarely",
            "ja-JP": "あまりできなかった",
            _id: "6808413c4be42efa459a8c5a",
          },
        },
        {
          value: "dynamic_health.2.11.8.5",
          label: {
            "en-GB": "Never",
            "ja-JP": "全くできなかった",
            _id: "6808413c4be42efa459a8c5b",
          },
        },
      ],
    },
    answerKeys: ["dynamic_health.2.11.8"],
    temporaryProperties: [],
    __v: 0,
    hooks: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_24 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.9.3",
    name: "dynamic_health.2.9.3",
    stepType: "normal",
    externalId: "dynamic_health.2.9.3",
    template: "journey_template_scale",
    templateUi: {
      answerKey: "dynamic_health.2.9.3",
      copy: {
        heading: {
          "en-GB":
            "Yesterday, did you check social media multiple times, even when it may not have been appropriate (e.g., during a meeting, at dinner, etc.)?",
          "ja-JP": "昨日、会議中や食事中など、適切でない状況でも複数回SNSをチェックしましたか?",
          _id: "680840492655875c3868e681",
        },
        description: {
          "en-GB": "",
          "ja-JP": "",
          _id: "680840492655875c3868e682",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "680840492655875c3868e683",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.9.3.1",
          label: {
            "en-GB": "Yes, I checked social media repeatedly",
            "ja-JP": "はい、繰り返しSNSをチェックしました",
            _id: "680840492655875c3868e684",
          },
        },
        {
          value: "dynamic_health.2.9.3.2",
          label: {
            "en-GB": "I checked social media a few times, but it was controlled",
            "ja-JP": "いくつかの場面でSNSをチェックしましたが、コントロールされていました",
            _id: "680840492655875c3868e685",
          },
        },
        {
          value: "dynamic_health.2.9.3.3",
          label: {
            "en-GB": "No, I didn't check social media",
            "ja-JP": "いいえ、SNSはチェックしませんでした",
            _id: "680840492655875c3868e686",
          },
        },
        {
          value: "dynamic_health.2.9.3.4",
          label: {
            "en-GB": "I wanted to check social media at inappropriate times, but I didn't",
            "ja-JP": "不適切な時にSNSをチェックしたかったが、しませんでした",
            _id: "680840492655875c3868e687",
          },
        },
      ],
    },
    answerKeys: ["dynamic_health.2.9.3"],
    temporaryProperties: [],
    __v: 0,
    hooks: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_25 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.8.109",
    name: "dynamic_health.2.8.109",
    stepType: "normal",
    externalId: "dynamic_health.2.8.109",
    template: "journey_template_image_choice",
    templateUi: {
      answerKey: "dynamic_health.2.8.109",
      copy: {
        heading: {
          "en-GB": "How do you typically maintain your social connections?",
          "ja-JP": "普段、どのように社交的なつながりを維持していますか?",
          _id: "681179858ce1b213c187c23a",
        },
        description: {
          "en-GB": "(Select all that apply)",
          "ja-JP": "（該当するものを全て選択してください）",
          _id: "681179858ce1b213c187c23b",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "681179858ce1b213c187c23c",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
      multiSelect: true,
      options: [
        {
          value: "dynamic_health.2.8.109.1",
          label: {
            "en-GB": "In-person meet ups",
            "ja-JP": "対面での会合",
            _id: "681179858ce1b213c187c23d",
          },
          imageKey: "journeys/health-questionnaire/image-choice/social_inperson.svg",
        },
        {
          value: "dynamic_health.2.8.109.2",
          label: {
            "en-GB": "Phone calls or video chats",
            "ja-JP": "電話やビデオチャット",
            _id: "681179858ce1b213c187c23e",
          },
          imageKey: "journeys/health-questionnaire/image-choice/social_calls.svg",
        },
        {
          value: "dynamic_health.2.8.109.3",
          label: {
            "en-GB": "Social media or messaging apps",
            "ja-JP": "ソーシャルメディアやメッセージングアプリ",
            _id: "681179858ce1b213c187c23f",
          },
          imageKey: "journeys/health-questionnaire/image-choice/social_online.svg",
        },
        {
          value: "dynamic_health.2.8.109.4",
          label: {
            "en-GB": "Other methods",
            "ja-JP": "その他の方法",
            _id: "681179858ce1b213c187c240",
          },
          imageKey: "journeys/health-questionnaire/image-choice/social_other.svg",
        },
      ],
      columns: 2,
    },
    answerKeys: ["dynamic_health.2.8.109"],
    temporaryProperties: [],
    __v: 0,
    hooks: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_26 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    stepId: "dynamic_health.2.9.11",
    name: "dynamic_health.2.9.11",
    stepType: "normal",
    externalId: "dynamic_health.2.9.11",
    template: "journey_template_scale",
    templateUi: {
      answerKey: "dynamic_health.2.9.11",
      copy: {
        heading: {
          "en-GB": "Do you use your personal or work mobile phone for work?",
          "ja-JP": "仕事で個人用または業務用の携帯電話を使用していますか?",
          _id: "68083ef62655875c3868e406",
        },
        description: {
          "en-GB": "",
          "ja-JP": "",
          _id: "68083ef62655875c3868e407",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "68083ef62655875c3868e408",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
      design: "default",
      multiSelect: false,
      options: [
        {
          value: "dynamic_health.2.9.11.1",
          label: {
            "en-GB": "I use my work mobile phone for work",
            "ja-JP": "仕事用の携帯電話を仕事に使用している",
            _id: "68083ef62655875c3868e409",
          },
        },
        {
          value: "dynamic_health.2.9.11.2",
          label: {
            "en-GB": "I use my personal mobile phone for work",
            "ja-JP": "個人用の携帯電話を仕事に使用している",
            _id: "68083ef62655875c3868e40a",
          },
        },
        {
          value: "dynamic_health.2.9.11.3",
          label: {
            "en-GB": "I don't need to use a mobile phone for work",
            "ja-JP": "仕事用に携帯電話を使用する必要はない",
            _id: "68083ef62655875c3868e40b",
          },
        },
      ],
    },
    answerKeys: ["dynamic_health.2.9.11"],
    temporaryProperties: [],
    __v: 0,
    hooks: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_CONSENT = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    name: "health_questionnaire_consent",
    stepId: "health_questionnaire_consent",
    stepType: "normal",
    template: "journey_template_legal",
    templateUi: {
      headingImageKey: "journeys/privacy-hero-2025-04-08.svg",
      copy: {
        heading: {
          "en-GB": "Your privacy and consent",
          "ja-JP": "お客様の個人情報の取扱について",
        },
        description: {
          "en-GB":
            "Upon completing this questionnaire, we will collect and process your responses, which may include insights into your health and wellbeing. Your answers will help us provide personalised recommendations and guidance to support your overall wellbeing.\n\nWe may also use your responses to:\n\n * Offer further targeted questions to enhance your experience\n * Track completion and reward you with YuCoin\n * Anonymise and aggregate data for statistical analysis to improve population health\n\nAll information collected will be pseudonymised. You can withdraw your consent at any time via our in-app chat or by emailing [data@yulife.com](mailto:data@yulife.com). For more details, please review our [Member Privacy Policy](https://yulife.com/privacy-policy/).\n\nBy proceeding, you confirm your consent to this and all future questionnaires.",
          "ja-JP":
            "本アンケートにご回答いただきますと、ご回答内容（貴社の健康状態や従業員の皆さまのウェルビーイングに関する情報を含む場合がございます）を収集し、処理させていただきます。ご回答は、貴社全体のウェルビーイング向上をサポートするためのパーソナライズされたご提案やガイダンスのご提供に活用させていただきます。\n\nまた、ご回答は以下の目的で利用させていただく場合がございます。\n\n * 貴社のエクスペリエンスを向上させるための、より詳細な質問のご提示\n * アンケート完了状況の追跡と、YuCoinによるリワードのご提供\n * 母集団の健康状態改善に向けた統計分析のための、データ匿名化および集計\n\n収集するすべての情報は匿名化されます。ご同意は、弊社のアプリ内チャットまたはEメール（[data@yulife.com](mailto:data@yulife.com)）にて、いつでも同意を撤回することができます。詳細につきましては、弊社の[メンバープライバシーポリシー](https://yulife.com/jp/privacy-policy/) をご参照ください。\n\n本手続きにお進みいただくことにより、貴社は本アンケートおよび今後のすべてのアンケートにご同意いただいたものとみなします。\n",
        },
        ctaLabel: {
          "en-GB": "Consent and continue",
          "ja-JP": "同意して次へ進む",
        },
      },
      showProgress: false,
    },
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEP_WEIGHT = {
  type: "mongo",
  modelName: "core_journey_steps",
  data: {
    _id: generateRandomMongoId(),
    answerKeys: ["dynamic_health.0.0.2"],
    externalId: "dynamic_health.0.0.2",
    journey: CORE_JOURNEY_INSTANCE_HQ_ID,
    name: "dynamic_health.0.0.2",
    stepId: "dynamic_health.0.0.2",
    stepType: "normal",
    template: "journey_template_weight",
    templateUi: {
      answerKey: "dynamic_health.0.0.2",
      copy: {
        heading: {
          "en-GB": "What is your current weight?",
          "ja-JP": "現在の体重はどのくらいですか?",
          _id: "67dd739ef74e196e960464bf",
        },
        description: {
          "en-GB": null,
          "ja-JP": null,
          _id: "67dd739ef74e196e960464c0",
        },
        ctaLabel: {
          en: "Next",
          "en-GB": "Next",
          "en-US": "Next",
          "en-ZA": "Next",
          "ja-JP": "次へ",
          "es-US": "Siguiente",
          _id: "67dd739ef74e196e960464c1",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 1,
        progressTotal: 10,
      },
    },
  },
};

export const CORE_JOURNEY_STEPS_27 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_2.data._id,
    stepId: "pulse_intro_step_seeded",
    name: "Introduction",
    stepType: "initial",
    template: "journey_template_intro",
    templateUi: {
      copy: {
        heading: {
          "en-GB": "Share your feedback!",
          "ja-JP": "ご意見をお寄せください!",
        },
        description: {
          "en-GB":
            "Help improve your workplace experience! Take a few minutes to fill in this anonymous survey.",
          "ja-JP": "職場環境の改善に関する匿名のアンケートにご協力をお願いいたします。",
        },
        ctaLabel: {
          "en-GB": "Let’s go!",
          "ja-JP": "始める",
        },
      },
      questionsAmount: 2,
      introBoxes: [
        {
          iconImageKey: "journeys/info-panel-document.png",
          description: {
            "en-GB": "Complete the survey.",
            "ja-JP": "アンケートにご協力ください。",
          },
          heading: { "en-GB": "Task" },
        },
        {
          iconImageKey: "journeys/info-panel-chest.png",
          description: {
            "en-GB": "Earn ${amount} YuCoin!",
            "ja-JP": "${amount} YuCoinを獲得できます。",
          },
          heading: { "en-GB": "Rewards" },
        },
        {
          iconImageKey: "journeys/info-panel-question-mark.png",
          description: {
            "en-GB":
              "To gather insights to enhance employee engagement and overall satisfaction. It is not intended to evaluate individual performance.",
            "ja-JP":
              "従業員のエンゲージメントと総合的な満足度を高めるための知見を収集すること。個人の業績を評価するためのものではありません。",
          },
          heading: { "en-GB": "Why are we gathering feedback?" },
        },
      ],
      infoBoxText: {
        "en-GB":
          "Our lips are sealed! Your response is completely anonymous. Your employer won’t be able to see your individual answers.",
        "ja-JP": "回答は完全に匿名となります。雇用主に個人の回答が共有されることはありません。",
      },
    },
    answerKeys: [],
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [{ stepId: "one_thing_you_would_change_seeded" }],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_28 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_2.data._id,
    stepId: "one_thing_you_would_change_seeded",
    name: "What's the one thing you would change about your company to make your experience there better?",
    stepType: "normal",
    template: "journey_template_multi_line_text",
    templateUi: {
      copy: {
        heading: {
          "en-GB":
            "What's the one thing you would change about ${companyName} to make your experience there better?",
          "ja-JP": "${companyName}での体験をより良くするために、あなたが変えたいことは何ですか?",
        },
        ctaLabel: {
          "en-GB": "Next",
          "ja-JP": "次のページ",
        },
      },
      input: {
        answerKey: "one_thing_you_would_change",
        heading: {
          "en-GB": "E.g. more benefits, more days off, better compensation, etc.",
          "ja-JP": "例: 福利厚生の充実、有給日数の増加、給与の引き上げなど",
        },
      },
      showProgress: true,
      category: {
        name: {
          "en-GB": "Overall",
          "ja-JP": "全体",
        },
      },
      progress: {
        progressValue: 0,
        progressTotal: 2,
      },
    },
    answerKeys: ["one_thing_you_would_change"],
    customValidation: {
      isRequired: true,
      minLength: 1,
      maxLength: 1000,
    },
    temporaryProperties: [],
    hooks: [],
    events: [],
    nextSteps: [{ stepId: "recommend_workplace_pulse_seeded" }],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_29 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_2.data._id,
    stepId: "recommend_workplace_pulse_seeded",
    name: "How likely are you to recommend your company as a place to work?",
    stepType: "normal",
    template: "journey_template_choice",
    templateUi: {
      design: "default",
      copy: {
        heading: {
          "en-GB":
            "How likely are you to recommend ${companyName} as a place to work? (1 being very unlikely, 10 being very likely.)",
          "ja-JP":
            "${companyName}を職場として勧める可能性はどのくらいありますか? (1: 全く思わない, 10: 非常にそう思う)",
        },
        ctaLabel: {
          "en-GB": "Next",
          "ja-JP": "次のページ",
        },
      },
      answerKey: "recommend_workplace_pulse",
      options: Array.from({ length: 10 }, (_, i) => {
        const val = (10 - i).toString();
        return {
          label: { "en-GB": val, "ja-JP": val },
          value: val,
        };
      }),
      showProgress: true,
      category: {
        name: {
          "en-GB": "Overall",
          "ja-JP": "全体",
        },
      },
      progress: {
        progressValue: 1,
        progressTotal: 2,
      },
    },
    answerKeys: ["recommend_workplace_pulse"],
    customValidation: {
      isRequired: true,
    },
    hooks: [
      {
        hook: "awardYucoin",
        trigger: "onPreFill",
      },
    ],
    temporaryProperties: [],
    events: [],
    nextSteps: [{ stepId: "thank_you_submission_pulse_seeded" }],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_30 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journey: CORE_JOURNEY_INSTANCE_2.data._id,
    stepId: "thank_you_submission_pulse_seeded",
    name: "Thank you and submission",
    stepType: "submission",
    template: "journey_template_no_question",
    templateUi: {
      copy: {
        heading: {
          "en-GB": "Thank you for answering this survey.",
          "ja-JP": "アンケートはこれで終了です！",
        },
        description: {
          "en-GB": "Click below to submit your answers.",
          "ja-JP": "以下のボタンをクリックして回答を送信してください。",
        },
        ctaLabel: {
          "en-GB": "Submit",
          "ja-JP": "送信",
        },
      },
      showProgress: true,
      progress: {
        progressValue: 2,
        progressTotal: 2,
      },
      category: {},
    },
    answerKeys: [],
    temporaryProperties: [],
    hooks: [
      {
        hook: "awardYucoin",
        trigger: "onPreFill",
      },
      {
        hook: "validateAccessRules",
        trigger: "onPreSave",
      },
    ],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_31 = {
  type,
  modelName,
  data: {
    _id: "68a33e77c451a6150464b020",
    journey: "68a33e77c451a6150464b01f",
    stepId: "68a33e77c451a6150464b020",
    stepType: "initial",
    template: "survey_template_intro",
    answerKeys: [],
    hooks: [],
    temporaryProperties: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_32 = {
  type,
  modelName,
  data: {
    _id: "68a33e77c451a6150464b021",
    journey: "68a33e77c451a6150464b01f",
    stepId: "68a33e77c451a6150464b021",
    stepType: "normal",
    template: "survey_template_scale",
    templateUi: {
      categoryName: "Wellbeing",
      scaleType: "agree",
      title: "Maintaining work-life balance is important to you.",
      isRequired: true,
    },
    answerKeys: [],
    hooks: [],
    temporaryProperties: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_33 = {
  type,
  modelName,
  data: {
    _id: "68a33e77c451a6150464b022",
    journey: "68a33e77c451a6150464b01f",
    stepId: "68a33e77c451a6150464b022",
    stepType: "normal",
    template: "survey_template_scale",
    templateUi: {
      categoryName: "Wellbeing",
      scaleType: "agree",
      title: "You have an acceptable workload within your standard working hours.",
      isRequired: true,
    },
    answerKeys: [],
    hooks: [],
    temporaryProperties: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_34 = {
  type,
  modelName,
  data: {
    _id: "68a33e77c451a6150464b03a",
    journey: "68a33e77c451a6150464b01f",
    stepId: "68a33e77c451a6150464b03a",
    stepType: "normal",
    template: "survey_template_nps",
    templateUi: {
      categoryName: "Overall",
      title:
        "How likely are you to recommend Waelchi Group as a place to work? (0 being very unlikely, 10 being very likely.)",
      isRequired: true,
    },
    answerKeys: [],
    hooks: [],
    temporaryProperties: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_35 = {
  type,
  modelName,
  data: {
    _id: "68a33e77c451a6150464b03b",
    journey: "68a33e77c451a6150464b01f",
    stepId: "68a33e77c451a6150464b03b",
    stepType: "post_submission_confirmation",
    template: "survey_template_reward",
    answerKeys: [],
    hooks: [
      {
        hook: "validateAccessRules",
        trigger: "onPreSave",
      },
      {
        hook: "awardYucoin",
        trigger: "onPreFill",
      },
    ],
    temporaryProperties: [],
    events: [],
    nextSteps: [],
  },
} as IDatabaseItem;
