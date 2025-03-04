import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY } from "../postgres/business";

export const WELLBEING_HUB_ITEM_1 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "Fiit",
    description: "Claim your free year of access to Fiit",
    thumbnailImage: "cms/1639655759852_Screenshot 2021-12-16 at 11.55.50.png",
    iconImage: "cms/1639655870609_Screenshot 2021-12-16 at 11.57.42.png",
    source: "internal_dashboard",
    enabled: true,
    isPromoted: true,
    query: {
      workLocationCountry: {},
    },
    restrictions: {
      showForPerkIds: "FIIT_12_MONTH",
      perkId: "FIIT_12_MONTH",
    },
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Welcome to Fiit",
        markdown:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate tellus sapien, nec tincidunt lacus suscipit eu. Etiam diam libero, lacinia nec nunc vehicula, varius sagittis nisl.",
      },
      {
        _id: generateRandomMongoId(),
        title: "",
        markdown: "",
        type: "BUTTON",
        image: "",
        restrictToPlatform: "",
        label: "Activate your Fiit account",
        uri: "yulifeapp-detox://yulife/perk-provision/FIIT_12_MONTH",
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Have a question?",
        markdown: "Chat to us through the app, or read more from our Help Centre.",
      },

      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        label: "Help centre",
        uri: "https://faq.yulife.com/en/",
        image: "content/icons/help.png",
      },
    ],
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_2 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "Yuniversity",
    description: "Your learning hub resources",
    thumbnailImage: "cms/1669639176057_Yuniversity@3x.png",
    iconImage: "content/icons/yulife.png",
    order: 3,
    enabled: true,
    seed: true,
    route: "yulife.member.yuniversityCourses",
    source: "manual_entry",
    content: [],
    isPromoted: true,
    restrictions: {
      appVersionRequired: ">=3.53",
    },
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_3 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "FiitUSA",
    description: "Claim your free year of access to Fiit",
    thumbnailImage: "cms/1639655759852_Screenshot 2021-12-16 at 11.55.50.png",
    iconImage: "cms/1639655870609_Screenshot 2021-12-16 at 11.57.42.png",
    source: "internal_dashboard",
    enabled: true,
    isPromoted: true,
    query: {
      workLocationCountry: {
        contains: ["US"],
      },
    },
    restrictions: {
      showForPerkIds: "FIIT_12_MONTH",
      perkId: "FIIT_12_MONTH",
    },
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Welcome to Fiit",
        markdown:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate tellus sapien, nec tincidunt lacus suscipit eu. Etiam diam libero, lacinia nec nunc vehicula, varius sagittis nisl.",
      },
      {
        _id: generateRandomMongoId(),
        title: "",
        markdown: "",
        type: "BUTTON",
        image: "",
        restrictToPlatform: "",
        label: "Activate your Fiit account",
        uri: "yulifeapp-detox://yulife/perk-provision/FIIT_12_MONTH",
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Have a question?",
        markdown: "Chat to us through the app, or read more from our Help Centre.",
      },

      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        label: "Help centre",
        uri: "https://faq.yulife.com/en/",
        image: "content/icons/help.png",
      },
    ],
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_4 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "Fiit Uk",
    description: "Claim your free year of access to Fiit",
    thumbnailImage: "cms/1639655759852_Screenshot 2021-12-16 at 11.55.50.png",
    iconImage: "cms/1639655870609_Screenshot 2021-12-16 at 11.57.42.png",
    source: "internal_dashboard",
    enabled: true,
    isPromoted: true,
    query: {
      workLocationCountry: {
        contains: ["UK"],
      },
    },
    restrictions: {
      showForPerkIds: "FIIT_12_MONTH",
      perkId: "FIIT_12_MONTH",
    },
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Welcome to Fiit",
        markdown:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate tellus sapien, nec tincidunt lacus suscipit eu. Etiam diam libero, lacinia nec nunc vehicula, varius sagittis nisl.",
      },
      {
        _id: generateRandomMongoId(),
        title: "",
        markdown: "",
        type: "BUTTON",
        image: "",
        restrictToPlatform: "",
        label: "Activate your Fiit account",
        uri: "yulifeapp-detox://yulife/perk-provision/FIIT_12_MONTH",
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Have a question?",
        markdown: "Chat to us through the app, or read more from our Help Centre.",
      },

      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        label: "Help centre",
        uri: "https://faq.yulife.com/en/",
        image: "content/icons/help.png",
      },
    ],
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_5 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    iconImage: "imgix::cms/1690813753038_Blua.jpg",
    source: "internal_dashboard",
    thumbnailImage: "imgix::cms/1690813751170_Blua.jpg",
    title: {
      "en-GB": "Blua Health",
      "ja-JP": "ブルア・ヘルス",
    },
    description: {
      "en-GB": "Your access to 24/7 GP consultations.",
      "ja-JP": "年中無休・24時間体制のGPコンサルテーションをご利用いただけます。",
    },
    order: 1,
    restrictions: {
      perkId: "BUPA_HEALTH_INSURANCE",
      showForPerkIds: "BUPA_HEALTH_INSURANCE",
    },
    content: [
      {
        title: {
          "en-GB": "How does it work?",
          "ja-JP": "どのように機能するのか？",
        },
        markdown: {
          "en-GB":
            "You can access GP consultations 24/7 via phone or video call, with Blua Health. \n\nAI powered clinical triage, private prescription writing (excluding costs), and free prescription delivery/collection from your chosen pharmacy, are also available to you.",
          "ja-JP":
            "ブルアヘルスなら、電話やビデオ通話で24時間365日、GPの診察が受けられます。\n\nAIを活用したクリニカル・トリアージ、プライベート処方箋作成（費用を除く）、ご指定の薬局からの無料処方箋配達・受け取りもご利用いただけます。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "The smarter way to see a GP",
          "ja-JP": "よりスマートなGPの受診方法",
        },
        markdown: {
          "en-GB":
            "To get a diagnosis, book GP appointments, and view prescription orders — apply using the Blua Health application.",
          "ja-JP":
            "診断、GPの予約、処方箋の閲覧には、ブルア・ヘルスのアプリケーションをご利用ください。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Availability",
          "ja-JP": "空室状況",
        },
        markdown: {
          "en-GB": "- Book unlimited appointments\n- 24/7\n- 365 days a year",
          "ja-JP": "- 予約は無制限\n- 24/7\n- 年中無休",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Access to benefit ",
          "ja-JP": "ベネフィットへのアクセス",
        },
        markdown: {
          "en-GB": "Download the Blua Health App from the Apple App Store or Google Play.",
          "ja-JP":
            "Apple App StoreまたはGoogle Playからブルア・ヘルス・アプリをダウンロードしてください。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "",
        },
        markdown: {
          "en-GB": "",
        },
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "imgix::cms/1690814246002_Google Play.jpg",
        restrictToPlatform: "android",
        label: {
          "en-GB": "Download the Blua Heath App",
          "ja-JP": "ブルア・ヒース・アプリをダウンロード",
        },
        uri: "https://play.google.com/store/apps/details?id=com.bupa.digitalprimarycare&hl=en&gl=US&pli=1",
      },
      {
        title: {
          "en-GB": "",
        },
        markdown: {
          "en-GB": "",
        },
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "imgix::cms/1690814320046_App Store.jpg",
        restrictToPlatform: "ios",
        label: {
          "en-GB": "Download the Blua Heath App",
          "ja-JP": "ブルア・ヒース・アプリをダウンロード",
        },
        uri: "https://apps.apple.com/gb/app/bupa-blua-health/id1621523655",
      },
      {
        title: {
          "en-GB": "Have a question? ",
          "ja-JP": "ご質問ですか？",
        },
        markdown: {
          "en-GB": "Chat to us through the app, or read more from our Help Centre.",
          "ja-JP":
            "アプリからチャットでお問い合わせいただくか、ヘルプセンターで詳細をご覧ください。",
        },
        _id: null,
        type: "MARKDOWN",
        image: "imgix::cms/1690814320046_App Store.jpg",
        restrictToPlatform: null,
        label: null,
        uri: null,
      },
      {
        title: null,
        markdown: null,
        _id: null,
        type: "BUTTON",
        image: "imgix::cms/1690815341298_Group 1594.png",
        restrictToPlatform: "",
        label: {
          "en-GB": "Help Centre ",
          "ja-JP": "ヘルプセンター",
        },
        uri: "https://faq.yulife.com/en/",
      },
    ],
    createdAt: {
      $date: "2023-07-31T14:39:24.453Z",
    },
    updatedAt: {
      $date: "2023-10-31T12:33:22.485Z",
    },
    __v: 0,
    enabled: true,
    isPromoted: true,
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_6 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    iconImage: "imgix::cms/1690815091482_Blua.jpg",
    source: "internal_dashboard",
    thumbnailImage: "imgix::cms/1690814990884_Anytime HealthLine.jpg",
    title: {
      "en-GB": "Anytime Helpline",
      "ja-JP": "いつでもヘルプライン",
    },
    description: {
      "en-GB": "Your access to 24/7 medical advice from a qualified nurse.",
      "ja-JP": "有資格の看護師による24時間365日の医療アドバイスを受けることができます。",
    },
    order: 2,
    restrictions: {
      perkId: "BUPA_HEALTH_INSURANCE",
      showForPerkIds: "BUPA_HEALTH_INSURANCE",
    },
    content: [
      {
        title: {
          "en-GB": "How does it work?",
          "ja-JP": "どのように機能するのか？",
        },
        markdown: {
          "en-GB":
            "Speak to a qualified nurse about any health concern with Anytime HealthLine. \n\nSeek support and advice whenever you need without taking time away from work.",
          "ja-JP":
            "健康上の心配事については、Anytime HealthLineで資格を持った看護師にご相談ください。\n\n仕事を休むことなく、必要なときにいつでもサポートやアドバイスを受けることができます。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Unlimited health advice 24/7",
          "ja-JP": "年中無休・無制限の健康アドバイス",
        },
        markdown: {
          "en-GB": "Receive medical advice from a qualified nurse via telephone service.",
          "ja-JP": "電話サービスを通じて、資格を持つ看護師から医療アドバイスを受けることができる。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Availability",
          "ja-JP": "空室状況",
        },
        markdown: {
          "en-GB": "- Make unlimited calls\n- Unlimited call time\n- 24/7\n- 365 days a year",
          "ja-JP": "- かけ放題\n- 通話時間無制限\n- 24/7\n- 365日",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Access to benefit ",
          "ja-JP": "ベネフィットへのアクセス",
        },
        markdown: {
          "en-GB":
            "Anytime HealthLine: 0345 604 0537\n\nDo note: Your Bupa Membership Details will be required — find them in your Bupa Touch account.",
          "ja-JP":
            "エニタイム・ヘルスライン：0345 604 0537\n\nご注意：Bupa会員の詳細が必要となります。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Have a question? ",
          "ja-JP": "ご質問ですか？",
        },
        markdown: {
          "en-GB": "Chat to us through the app, or read more from our Help Centre.",
          "ja-JP":
            "アプリからチャットでお問い合わせいただくか、ヘルプセンターで詳細をご覧ください。",
        },
        _id: null,
        type: "MARKDOWN",
        image: "imgix::cms/1690814320046_App Store.jpg",
        restrictToPlatform: null,
        label: null,
        uri: null,
      },
      {
        title: null,
        markdown: null,
        _id: null,
        type: "BUTTON",
        image: "imgix::cms/1690815341298_Group 1594.png",
        restrictToPlatform: "",
        label: {
          "en-GB": "Help Centre ",
          "ja-JP": "ヘルプセンター",
        },
        uri: "https://faq.yulife.com/en/",
      },
    ],
    createdAt: {
      $date: "2023-07-31T14:39:24.453Z",
    },
    updatedAt: {
      $date: "2023-11-01T12:33:23.370Z",
    },
    __v: 0,
    enabled: true,
    isPromoted: true,
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_7 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    iconImage: "imgix::cms/1690815091482_Blua.jpg",
    source: "internal_dashboard",
    thumbnailImage: "imgix::cms/1690815645728_Family Mental HealthLine.jpg",
    title: {
      "en-GB": "Family Mental HealthLine",
      "ja-JP": "ファミリー・メンタルヘルス・ライン",
    },
    description: {
      "en-GB": "Supporting your family’s mental wellbeing.",
      "ja-JP": "家族のメンタルヘルスをサポートする",
    },
    order: 3,
    restrictions: {
      perkId: "BUPA_HEALTH_INSURANCE",
      showForPerkIds: "BUPA_HEALTH_INSURANCE",
    },
    content: [
      {
        title: {
          "en-GB": "How does it work?",
          "ja-JP": "どのように機能するのか？",
        },
        markdown: {
          "en-GB":
            "If you are concerned about a child’s emotional or mental wellbeing, Bupa’s Family Mental HealthLine provides guidance and support to parents, guardians, and carers alike.",
          "ja-JP":
            "子どもの感情的または精神的な健康が心配な場合、BupaのFamily Mental HealthLineは、両親、保護者、介護者にガイダンスとサポートを提供します。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Supporting your family's mental wellbeing",
          "ja-JP": "家族のメンタルヘルスをサポートする",
        },
        markdown: {
          "en-GB": "Receive mental health support with a trained advisor via telephone services.",
          "ja-JP":
            "電話サービスを通じて、訓練を受けたアドバイザーによるメンタルヘルスサポートを受けることができる。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Availability",
          "ja-JP": "空室状況",
        },
        markdown: {
          "en-GB": "- Make unlimited calls\n- Unlimited call time\n- 24/7\n- 365 days a year",
          "ja-JP": "- かけ放題\n- 通話時間無制限\n- 24/7\n- 365日",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Access to benefit ",
          "ja-JP": "ベネフィットへのアクセス",
        },
        markdown: {
          "en-GB":
            "Family Mental HealthLine: 0345 266 7938\n\nDo note: Your Bupa Membership Details will be required — find them in your Bupa Touch account.",
          "ja-JP":
            "ファミリー・メンタルヘルス・ライン：0345-266-7938\n\nご注意：Bupa会員の詳細が必要となります。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Have a question? ",
          "ja-JP": "ご質問ですか？",
        },
        markdown: {
          "en-GB": "Chat to us through the app, or read more from our Help Centre.",
          "ja-JP":
            "アプリからチャットでお問い合わせいただくか、ヘルプセンターで詳細をご覧ください。",
        },
        _id: null,
        type: "MARKDOWN",
        image: "imgix::cms/1690814320046_App Store.jpg",
        restrictToPlatform: null,
        label: null,
        uri: null,
      },
      {
        title: null,
        markdown: null,
        _id: null,
        type: "BUTTON",
        image: "imgix::cms/1690815341298_Group 1594.png",
        restrictToPlatform: "",
        label: {
          "en-GB": "Help Centre ",
          "ja-JP": "ヘルプセンター",
        },
        uri: "https://faq.yulife.com/en/",
      },
    ],
    createdAt: {
      $date: "2023-07-31T14:39:24.453Z",
    },
    updatedAt: {
      $date: "2023-11-01T12:33:23.367Z",
    },
    __v: 0,
    enabled: true,
    isPromoted: true,
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_8 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    iconImage: "imgix::cms/1690815091482_Blua.jpg",
    source: "internal_dashboard",
    thumbnailImage: "imgix::cms/1690815689618_Menopause HealthLine.jpg",
    title: {
      "en-GB": "Menopause HealthLine",
      "ja-JP": "更年期障害ヘルスライン",
    },
    description: {
      "en-GB": "Access clinical advice from a menopause-trained nurse.",
      "ja-JP": "更年期障害のトレーニングを受けた看護師による臨床アドバイスを受けることができる。",
    },
    order: 4,
    restrictions: {
      perkId: "BUPA_HEALTH_INSURANCE",
      showForPerkIds: "BUPA_HEALTH_INSURANCE",
    },
    content: [
      {
        title: {
          "en-GB": "How does it work?",
          "ja-JP": "どのように機能するのか？",
        },
        markdown: {
          "en-GB":
            "Manage the symptoms of menopause with Menopause HealthLine. \n\nGet the guidance and support you need to understand and manage this time of change.",
          "ja-JP":
            "Menopause HealthLineで更年期の症状に対処しましょう。\n\nこの変化の時期を理解し、管理するために必要なガイダンスとサポートを受けることができます。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "A safe place for female employees",
          "ja-JP": "女性従業員にとって安全な場所",
        },
        markdown: {
          "en-GB":
            "Receive clinical advice and support from a menopause-trained nurse via telephone service.",
          "ja-JP":
            "更年期障害のトレーニングを受けた看護師から、電話サービスを通じて臨床的なアドバイスやサポートを受けることができる。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Availability",
          "ja-JP": "空室状況",
        },
        markdown: {
          "en-GB":
            "- Make unlimited calls\n- Unlimited call time\n- Lines open from 8am to 8pm (BST)\n- 365 days a year",
          "ja-JP":
            "- かけ放題\n- 通話時間無制限\n- 営業時間：午前8時から午後8時（日本時間）\n- 年中無休",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Access to benefit ",
          "ja-JP": "ベネフィットへのアクセス",
        },
        markdown: {
          "en-GB":
            "Menopause HealthLine: 0345 608 9984\n\nDo note: Your Bupa Membership Details will be required — find them in your Bupa Touch account.",
          "ja-JP":
            "メノポーズ・ヘルスライン：0345 608 9984\n\nご注意：Bupa会員の詳細が必要となります。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Have a question? ",
          "ja-JP": "ご質問ですか？",
        },
        markdown: {
          "en-GB": "Chat to us through the app, or read more from our Help Centre.",
          "ja-JP":
            "アプリからチャットでお問い合わせいただくか、ヘルプセンターで詳細をご覧ください。",
        },
        _id: null,
        type: "MARKDOWN",
        image: "imgix::cms/1690814320046_App Store.jpg",
        restrictToPlatform: null,
        label: null,
        uri: null,
      },
      {
        title: null,
        markdown: null,
        _id: null,
        type: "BUTTON",
        image: "imgix::cms/1690815341298_Group 1594.png",
        restrictToPlatform: "",
        label: {
          "en-GB": "Help Centre ",
          "ja-JP": "ヘルプセンター",
        },
        uri: "https://faq.yulife.com/en/",
      },
    ],
    createdAt: {
      $date: "2023-07-31T14:39:24.453Z",
    },
    updatedAt: {
      $date: "2023-11-01T12:33:23.357Z",
    },
    __v: 0,
    enabled: true,
    isPromoted: true,
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_9 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    iconImage: "imgix::cms/1690815091482_Blua.jpg",
    source: "internal_dashboard",
    thumbnailImage: "imgix::cms/1690815810301_Direct Access.jpg",
    title: {
      "en-GB": "Direct Access",
      "ja-JP": "ダイレクト・アクセス",
    },
    description: {
      "en-GB": "Your direct access to consultations or treatments.",
      "ja-JP": "ご相談や治療への直接アクセス",
    },
    order: 5,
    restrictions: {
      perkId: "BUPA_HEALTH_INSURANCE",
      showForPerkIds: "BUPA_HEALTH_INSURANCE",
    },
    content: [
      {
        title: {
          "en-GB": "How does it work?",
          "ja-JP": "どのように機能するのか？",
        },
        markdown: {
          "en-GB":
            "For certain medical conditions, remote assessment with a trained advisor, therapist or clinician, can be made available by contacting Bupa directly. \n\nIf eligible, you could receive fast access consultation or treatment with the right healthcare providers. \n\nEligible conditions:\n\nConcerns about Mental Health \nMusculoskeletal concerns\nSymptoms of Cancer",
          "ja-JP":
            "特定の病状については、訓練を受けたアドバイザー、セラピストまたは臨床医による遠隔アセスメントを、Bupaに直接連絡することで利用できる。\n\n資格があれば、適切な医療提供者による診察や治療を迅速に受けることができる。\n\n対象となる病状\n\nメンタルヘルスに関するお悩み\n筋骨格系に関する懸念\nがんの症状",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Direct Access to the treatment you need, when you need it",
          "ja-JP": "必要な時に必要な治療が受けられるダイレクトアクセス",
        },
        markdown: {
          "en-GB":
            "No GP referral needed to receive treatment for certain conditions — listed above.",
          "ja-JP": "上記の特定の症状については、GPの紹介は不要。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Availability",
          "ja-JP": "空室状況",
        },
        markdown: {
          "en-GB":
            "- Unlimited usage\n- Lines open from 8am to 8pm (BST), Monday to Friday \n- Lines open from 8am to 4pm (BST), Saturday \n- Benefit limits apply for referral to treatment",
          "ja-JP":
            "- 無制限\n- 電話受付時間：午前8時～午後8時（BST、月～金\n- 土曜日の午前8時から午後4時まで（BST）\n- 治療の紹介には給付制限が適用されます。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Access to benefit ",
          "ja-JP": "ベネフィットへのアクセス",
        },
        markdown: {
          "en-GB":
            "Direct Access: 0345 600 8277\n\nDo note: Your Bupa Membership Details will be required — find them in your Bupa Touch account.",
          "ja-JP":
            "直接アクセス0345 600 8277\n\nご注意：Bupa会員の詳細が必要です。Bupa Touchアカウントでご確認ください。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Have a question? ",
          "ja-JP": "ご質問ですか？",
        },
        markdown: {
          "en-GB": "Chat to us through the app, or read more from our Help Centre.",
          "ja-JP":
            "アプリからチャットでお問い合わせいただくか、ヘルプセンターで詳細をご覧ください。",
        },
        _id: null,
        type: "MARKDOWN",
        image: "imgix::cms/1690814320046_App Store.jpg",
        restrictToPlatform: null,
        label: null,
        uri: null,
      },
      {
        title: null,
        markdown: null,
        _id: null,
        type: "BUTTON",
        image: "imgix::cms/1690815341298_Group 1594.png",
        restrictToPlatform: "",
        label: {
          "en-GB": "Help Centre ",
          "ja-JP": "ヘルプセンター",
        },
        uri: "https://faq.yulife.com/en/",
      },
    ],
    query: {
      employmentStartDate: {
        lessThan: moment().subtract(6, "months").format("YYYY-MM-DD"),
      },
    },
    createdAt: {
      $date: "2023-07-31T14:39:24.453Z",
    },
    updatedAt: {
      $date: "2023-11-01T12:33:23.353Z",
    },
    __v: 0,
    enabled: true,
    isPromoted: true,
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_10 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "Restricted",
    description: "This item is only visible to certain employees",
    thumbnailImage: "cms/1669639176057_Yuniversity@3x.png",
    iconImage: "content/icons/yulife.png",
    order: 3,
    enabled: true,
    isPromoted: true,
    seed: true,
    route: "yulife.member.yuniversityCourses",
    source: "internal_dashboard",
    content: [],
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY.data.business_account_id,
    },
    query: {
      department: {
        contains: ["Senior Management"],
      },
      payGrade: {
        contains: ["Grade 55", "Grade 65"],
      },
    },
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;
