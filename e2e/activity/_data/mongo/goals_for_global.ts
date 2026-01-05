import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "mongo";
const modelName = "goals_for_global";

export const GOALS_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    autoJoin: false,
    status: "active",
    type: "groups",
    illustrationImageKey: "referral/background/full/Ocean.png",
    title: "Test event detox",
    illustrationBackgroundColor: "#F9F9DB",
    illustrationTextColor: "#5A5A5C",
    synchronousProgress: true,
    participantsCount: 0,
    tagImageKey: "logos/yulife.png",
    badgeImageKey: "logos/yulife.png",
    descriptionTitle: "Bright and early",
    description:
      "A new day in the Yuniverse begins. Did you meet any of our animal friends yet? If not, hurry up! Complete 2 challenges over the next 5 days and earn lots of additional YuCoin.",
    faqText:
      "From now you will be able to participate in future individual and community events. In community events you can work together with your colleagues and friends to achieve goals_for_global and win prizes.",
    badgeText: "NEW",
    badgeBackgroundColor: "#FF5F5F",
    badgeTextColor: "#FFFFFF",
    info: [
      {
        _id: generateRandomMongoId(),
        imageKey: "personalProducts/policy-terms-conditions.svg",
        title: "Task",
        description: "Complete any challenge. Challenges can be started through the quest menu.",
      },
    ],

    startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const GOALS_3 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    autoJoin: false,
    status: "active",
    type: "individual",
    synchronousProgress: true,
    tags: [],
    participantsCount: 0,
    title: "Cycle 10km this week",
    illustrationImageKey: "cms/1652745617947_Walk of the worlds (1).png",
    illustrationBackgroundColor: "#FEFBE9",
    illustrationTextColor: "#5A5A5C",
    startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss"),
    startOn: null,
    badgeBackgroundColor: "#FF5F5F",
    badgeImageKey: "cms/1649947633967_fire.png",
    badgeText: "NEW",
    badgeTextColor: "#FFFFFF",
    description:
      "You've been selected to test our exciting new feature, The Events System! Complete cycling challenges to hit milestones and earn extra YuCoin.",
    descriptionTitle: "Ride and challenge yourself!",
    duration: 2880,
    faqText: "FAQ test",
    info: [
      {
        imageKey: "personalProducts/policy-terms-conditions.svg",
        title: "Task",
        description: "walk 500 steps over the next 2 days to win an extra YuCoin bounty.",
      },
      {
        imageKey: "cms/1651070115152_Chest.png",
        title: "Reward",
        description: "Earn up to 1000 extra YuCoin by completing daily challenges. ",
      },
      {
        imageKey: "cms/1651069814232_Group 1483.png",
        title: "Feedback",
        description:
          "We're activley developing this feature and would love to hear your feedback! You can contact us via the Chat button located in side menu on the main screen. ",
      },
    ],
    tagImageKey: "cms/1649947806334_Vector.png",
  },
} as IDatabaseItem;

export const GOALS_6 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    title: {
      "en-GB": "Money Mastery#2",
      "ja-JP": "マネーマスタリー#2",
      _id: generateRandomMongoId(),
    },
    autoJoin: true,
    illustrationImageKey: "imgix::cms/1709633083842_US_Financial-Wellness-Event-01_Banner.png",
    illustrationBackgroundColor: "#956AFF",
    illustrationTextColor: "#FFFFFF",
    status: "active",
    type: "individual",
    synchronousProgress: false,
    descriptionTitle: {
      "en-GB": "Money Mastery",
      "ja-JP": "マネーマスタリー",
      _id: generateRandomMongoId(),
    },
    description: {
      "en-GB":
        "Ever wondered how YuLifers around the world approach financial, mental, and physical wellbeing? Come back each week to see how YuLifers around the world voted, and who knows, you may even learn a thing or two!",
      "ja-JP":
        "世界中のYuLifersが、経済的、精神的、肉体的な健康にどのようにアプローチしているのか、気になったことはありませんか？世界中のYuLifersがどのように投票したのか、毎週ご覧ください！",
      _id: generateRandomMongoId(),
    },
    tags: [],
    tagImageKey: "imgix::cms/1709633141842_Square.png",
    badgeImageKey: "",
    info: [
      {
        title: {
          "en-GB": "Task",
          "ja-JP": "タスク",
          _id: generateRandomMongoId(),
        },
        description: {
          "en-GB": "Earn 100 bonus YuCoin when you complete the quiz!",
          "ja-JP": "クイズに答えると100ボーナスYuCoinがもらえます！",
          _id: generateRandomMongoId(),
        },
        imageKey: "imgix::cms/1709633170326_Policy Terms & Conditions.png",
        _id: generateRandomMongoId(),
      },
      {
        title: {
          "en-GB": "Rewards",
          "ja-JP": "報酬",
          _id: generateRandomMongoId(),
        },
        description: {
          "en-GB":
            "Earn 50 bonus YuCoin by taking this 3-question quiz on financial wellbeing 💪🏼 Ready, set, go!",
          "ja-JP":
            "経済的なウェルビーイングに関する3問のクイズに答えて、ボーナスYuCoinを50コイン獲得しよう！ 💪🏼 準備完了！",
          _id: generateRandomMongoId(),
        },
        imageKey: "imgix::cms/1709633175959_Chest.png",
        _id: generateRandomMongoId(),
      },
      {
        title: {
          "en-GB": "Stay tuned",
          "ja-JP": "注目",
          _id: generateRandomMongoId(),
        },
        description: {
          "en-GB": "We’ll share how YuLifers voted soon, so be sure to check back for updates!",
          "ja-JP":
            "ユライフがどのように投票したかは近日中にお伝えしますので、ぜひ最新情報をチェックしてください！",
          _id: generateRandomMongoId(),
        },
        imageKey: "imgix::cms/1709633181973_Donate.png",
        _id: generateRandomMongoId(),
      },
    ],
    startDateTime: moment().subtract(1, "weeks").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(1, "weeks").format("YYYY-MM-DDTHH:mm:ss"),
    gracePeriodHours: 168,
    participantsCount: 0,
    buttonAction: {
      label: {
        "en-GB": "Take a quiz",
        "ja-JP": "クイズに答える",
        _id: generateRandomMongoId(),
      },
      sduiType: "SDUI_ACTION_NAVIGATE",
      payload:
        '{"routeId":"yulife.member.journey","props":{"journeyId":"financial_wellness_quiz"}}',
      _id: generateRandomMongoId(),
    },
    disableTransactions: true,
    autoClaimRewards: true,
    hideHint: false,
    _migrated: true,
    __v: 0,
    skipAutoCompletion: true,
  },
} as IDatabaseItem;

export const GOALS_FTUE = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    autoJoin: true,
    status: "active",
    type: "individual",
    synchronousProgress: true,
    tags: [],
    participantsCount: 0,
    title: {
      "en-GB": "FTUE - test",
      "ja-JP": "FTUE - テスト",
    },
    illustrationImageKey: "cms/1652745617947_Walk of the worlds (1).png",
    illustrationBackgroundColor: "#FEFBE9",
    illustrationTextColor: "#5A5A5C",
    startOn: "user_onboarded",
    badgeBackgroundColor: "#FF5F5F",
    badgeImageKey: "cms/1649947633967_fire.png",
    badgeText: {
      "en-GB": "NEW",
      "ja-JP": "ニュー",
    },
    badgeTextColor: "#FFFFFF",
    description: {
      "en-GB":
        "There’s a chill in the air that can’t be dismissed this week. The heating is on, fireplaces are lit, and we’re ready to cozy up and hibernate until the new year but let’s not press the pause button just yet. \n\nTake a moment to breathe in the crisp winter air with a stroll around the park, or take a mindful moment relaxing in the warmth. \n\nComplete one challenge perfectly to achieve today’s bonus 100 YuCoin. ",
      "ja-JP":
        "今週は、寒さを感じないわけにはいきません。暖房が入り、暖炉に火が入り、新年まで冬眠する準備が整いましたが、まだ一時停止ボタンは押さないようにしましょう。\n\n公園を散歩して冬の澄んだ空気を吸い込んだり、暖かさの中でリラックスして心豊かな時間を過ごしてみてはいかがでしょうか。\n\n1つのチャレンジを完璧にこなすと、本日のボーナス100YuCoinを獲得できます。",
    },
    descriptionTitle: {
      "en-GB": "Walk into Winter ❄️",
      "ja-JP": "ウォーク・イン・ウィンター ❄️",
    },
    duration: 10080,
    faqText: {
      "en-GB": "FAQ test",
      "ja-JP": "FAQテスト",
    },
    info: [
      {
        title: {
          "en-GB": "Task",
          "ja-JP": "タスク",
        },
        description: {
          "en-GB": "Complete a challenge perfectly by achieving 3 stars. ",
          "ja-JP": "3つの星を獲得して、チャレンジを完璧にクリアする。",
        },
        imageKey: "personalProducts/policy-terms-conditions.svg",
      },
      {
        title: {
          "en-GB": "Reward",
          "ja-JP": "ご褒美",
        },
        description: {
          "en-GB": "Earn a 100 YuCoin bonus by completing a 3* challenge. ",
          "ja-JP": "3*チャレンジをクリアすると、100YuCoinボーナスがもらえます。",
        },
        imageKey: "cms/1651070115152_Chest.png",
      },
      {
        title: {
          "en-GB": "Feedback",
          "ja-JP": "フィードバック",
        },
        description: {
          "en-GB":
            "We’re activley developing this feature and would love to hear your feedback! You can contact us via the “Chat” button located in side menu on the main screen. ",
          "ja-JP":
            "私たちはこの機能を積極的に開発しており、お客様のご意見をお聞きしたいと思います！メイン画面のサイドメニューにある「チャット」ボタンからご連絡ください。",
        },
        imageKey: "cms/1651069814232_Group 1483.png",
      },
    ],
    tagImageKey: "cms/1649947806334_Vector.png",
    endDateTime: moment().add(1, "week").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    startDateTime: moment().subtract(1, "hour").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    __v: 0,
    _migrated: true,
  },
} as IDatabaseItem;
