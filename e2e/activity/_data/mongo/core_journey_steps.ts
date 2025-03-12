import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  CORE_JOURNEY_FOR_REWARD_FLAT_RATE_TEST,
  CORE_JOURNEY_FOR_REWARD_MULTIPLIER_TEST,
} from "./core_journeys";

const modelName = "core_journey_steps";
const type = "mongo";

export const CORE_JOURNEY_STEPS_01 = {
  type,
  modelName,
  data: {
    _id: "6627908b790eab650c2a69f1",
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6627908b790eab650c2a69e7",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6627908b790eab650c2a69e8",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6627908b790eab650c2a69e9",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6627908b790eab650c2a69ea",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6627908b790eab650c2a69eb",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6627908b790eab650c2a69ec",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6627908b790eab650c2a69ed",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6627908b790eab650c2a69ee",
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
    journey: "66140199f9be413b16dd1c81",
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
            "en-GB": "Earn 20 YuCoin!",
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
      yuCoinAmount: 20,
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
    ui: "6627908b790eab650c2a69fb",
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
    journey: "66140199f9be413b16dd1c81",
    stepId: "health_questionnaire_submission",
    name: "health_questionnaire_submission",
    template: "journey_template_lottie",
    templateUi: {
      url: "media/chest-yucoin/hq-chest-reward-2.json",
      copy: {
        ctaLabel: {
          "en-GB": "Claim",
        },
      },
      loop: false,
      autoPlay: false,
      showProgress: false,
    },
    stepType: "submission",
    answerKeys: [],
    hooks: [
      {
        hook: "awardYucoin",
        trigger: "onPreSave",
        props: {
          awardYucoin: 20,
        },
      },
    ],
    validation: {
      type: "object",
      properties: {
        SHOULD_LOTTIE_PLAY_KEY: {
          type: "boolean",
        },
      },
      additionalProperties: false,
    },
    temporaryProperties: ["SHOULD_LOTTIE_PLAY_KEY"],
    ui: "6627908b790eab650c2a69ff",
    events: [],
    nextSteps: [],
    createdAt: "2024-04-23T10:42:19.955+0000",
    updatedAt: "2024-04-23T10:42:19.955+0000",
    __v: 0,
  },
} as IDatabaseItem;

export const CORE_JOURNEY_STEPS_11 = {
  type,
  modelName,
  data: {
    _id: "6630d7310860d967cba8d7ad",
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6630d7310860d967cba8d7a1",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6630d7310860d967cba8d7a2",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6630d7310860d967cba8d7a3",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6630d7310860d967cba8d7a4",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6630d7310860d967cba8d7a5",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6630d7310860d967cba8d7a7",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6630d7310860d967cba8d7a8",
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
    journey: "66140199f9be413b16dd1c81",
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
    ui: "6630d7310860d967cba8d7a9",
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
    journey: CORE_JOURNEY_FOR_REWARD_MULTIPLIER_TEST.data._id,
    stepId: "whats_your_favourite_colour",
    name: "What's your favourite colour?",
    stepType: "initial",
    template: "journey_template_radio",
    templateUi: {
      design: "default",
      copy: {
        heading: {
          "en-GB": "The choice is yours.",
        },
        description: {
          "en-GB": "Will you choose the Red pill or Blue pill.",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      answerKey: "the_choice_is_yours",
      choices: [
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
    ui: generateRandomMongoId(),
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
    journey: CORE_JOURNEY_FOR_REWARD_MULTIPLIER_TEST.data._id,
    stepId: "submission",
    name: "Submission",
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
        hook: "awardYucoin",
        trigger: "onPreFill",
      },
      {
        hook: "validateAccessRules",
        trigger: "onPreSave",
      },
    ],
    ui: generateRandomMongoId(),
    events: [],
    nextSteps: [],
  },
};

export const CORE_JOURNEY_FOR_REWARD_FLAT_RATE_TEST_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId,
    journey: CORE_JOURNEY_FOR_REWARD_FLAT_RATE_TEST.data._id,
    stepId: "whats_your_favourite_colour",
    name: "What's your favourite colour?",
    stepType: "initial",
    template: "journey_template_radio",
    templateUi: {
      design: "default",
      copy: {
        heading: {
          "en-GB": "The choice is yours.",
        },
        description: {
          "en-GB": "Will you choose the Red pill or Blue pill.",
        },
        ctaLabel: {
          "en-GB": "Next",
        },
      },
      answerKey: "the_choice_is_yours",
      choices: [
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
    ui: generateRandomMongoId(),
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
    journey: CORE_JOURNEY_FOR_REWARD_FLAT_RATE_TEST.data._id,
    stepId: "submission",
    name: "Submission",
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
        hook: "awardYucoin",
        trigger: "onPreFill",
      },
      {
        hook: "validateAccessRules",
        trigger: "onPreSave",
      },
    ],
    ui: generateRandomMongoId(),
    events: [],
    nextSteps: [],
  },
};
