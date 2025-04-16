import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";

export const WELLBEING_HUB_ITEM_ASKEN = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    iconImage: "",
    source: "internal_dashboard",
    thumbnailImage: "imgix::cms/1726846960812_Asken.png",
    title: {
      "en-GB": "Asken ",
      "ja-JP": "あすけん",
    },
    description: {
      "en-GB": "AI-powered diet and nutrition tracking app.",
      "ja-JP": "AIを搭載した食事・栄養記録アプリ",
    },
    order: 50,
    restrictions: {
      featureToggleShow: null,
      showForPerkIds: ["ASKEN"],
      hideForPerkIds: [],
    },
    content: [
      {
        title: {
          "en-GB": "What is the Asken app?",
          "ja-JP": "あすけん",
        },
        markdown: {
          "en-GB":
            "Asken helps you achieve better health through smarter nutrition. It provides personalized meal recommendations by analyzing your dietary habits and goals. Using advanced AI, Asken tracks your nutrition intake and offers insights with detailed analysis and charts. It helps you understand your eating patterns, the factors influencing them, and what you can do to improve your diet and overall well-being",
          "ja-JP":
            "あすけんは、よりスマートな栄養摂取による健康増進をサポートします。あなたの食習慣や目標を分析し、パーソナライズされた食事を提案します。高度なAIを使用して、栄養摂取を追跡し、詳細な分析とチャートで洞察を提供します。あなたの食事パターン、それに影響を与える要因、食事と全体的な健康を改善するために何ができるかを理解するのに役立ちます。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "How to access your free Asken premium subscription  ",
          "ja-JP": "あすけんプレミアムの利用方法:",
        },
        markdown: {
          "en-GB":
            "As part of your benefits with YuLife, you get 12 months free access to Asken Premium. To claim your premium subscription, please follow these instructions:\n1. Make a note of your company code below.\n2. Claim your unique access code and make a note.\n3. Download the Asken app.\n4. Open the Asken app.\n6. Go to 'Settings' > 'Group code settings' > Enter your group code 1 and group code 2 in each column.\n7. Registration completed.",
          "ja-JP":
            "YuLifeの福利厚生サービスとして、あすけんプレミアムを12ヶ月間無料でご利用いただけます。利用するには以下の手順に従ってください。\n\n1.グループコード1を控えておいてください。\n2.グループコード2を請求して、控えておいてください。\n3.あすけんアプリをダウンロードしてください。\n4.あすけんアプリを開いてください。\n5.[設定] をタップし、[グループコード設定] からグループコード1とグループコード2を入力してください。\n6.登録完了です。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "Company code",
          "ja-JP": "グループコード1",
        },
        markdown: {
          "en-GB": "${PRODUCT_CODE}",
          "ja-JP": "${PRODUCT_CODE}",
        },
        _id: generateRandomMongoId(),
        type: "BOX",
        canCopy: true,
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
        label: {
          "en-GB": "Claim your unique access code ",
          "ja-JP": "グループコード2を請求する",
        },
        image: "",
        uri: "yulifeapp://yulife/perk-provision/ASKEN",
        restrictToPlatform: "",
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
        label: {
          "en-GB": "Download the Asken app",
          "ja-JP": "あすけんアプリをダウンロード (Apple App Store)",
        },
        image: "imgix::cms/1727255179613_App Store.png",
        uri: "https://apps.apple.com/jp/app/%E3%81%82%E3%81%99%E3%81%91%E3%82%93-%E3%83%80%E3%82%A4%E3%82%A8%E3%83%83%E3%83%88-%E3%83%98%E3%83%AB%E3%82%B9%E3%82%B1%E3%82%A2%E3%81%AE%E3%82%AB%E3%83%AD%E3%83%AA%E3%83%BC%E8%A8%88%E7%AE%97%E3%82%84%E4%BD%93%E9%87%8D%E7%AE%A1%E7%90%86%E3%81%AB/id687287242",
        restrictToPlatform: "ios",
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
        label: {
          "en-GB": "Download the Asken app ",
          "ja-JP": "あすけんアプリをダウンロード (Google Play)",
        },
        image: "imgix::cms/1727255188709_Google Play.png",
        uri: "https://play.google.com/store/apps/details?id=jp.co.greenhouse.asken",
        restrictToPlatform: "android",
      },
      {
        title: {
          "en-GB": "Have a question? ",
          "ja-JP": "質問はございますか？",
        },
        markdown: {
          "en-GB": "Chat to us through the app.",
          "ja-JP": "アプリでチャットしてください。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
    ],
    enabled: true,
    query: {
      preferredContentLocation: {
        contains: [],
      },
    },
    isPromoted: true,
  },
};

export const WELLBEING_HUB_ITEM_LUNALUNA = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    iconImage: "",
    source: "internal_dashboard",
    thumbnailImage: "imgix::cms/1726861263624_LunaLuna.png",
    title: {
      "en-GB": "LunaLuna",
      "ja-JP": "ルナルナ",
    },
    description: {
      "en-GB": "Women's health app",
      "ja-JP": "女性の健康アプリ",
    },
    order: 3,
    restrictions: {
      featureToggleShow: null,
      showForPerkIds: ["LUNALUNA"],
      hideForPerkIds: [],
    },
    content: [
      {
        title: {
          "en-GB": "What is Luna Luna?",
          "ja-JP": "ルナ・ルナとは？",
        },
        markdown: {
          "en-GB":
            "Luna Luna helps you achieve better health through better cycle management. At its core, it tracks your menstrual cycles and symptoms. Using sophisticated algorithms, Luna Luna analyzes your data, providing personalized insights and visualizations. It helps you understand your cycle patterns, the factors affecting them, and offers guidance on how to manage your reproductive health and overall well-being effectively.",
          "ja-JP":
            "Luna Lunaは、月経周期の管理を通じて、あなたの健康増進をサポートします。その中核となるのは、あなたの月経周期と症状を追跡することです。洗練されたアルゴリズムを使用してデータを分析し、パーソナライズされたインサイトとビジュアライゼーションを提供します。あなたの生理周期のパターンや、それに影響を与える要因を理解し、生殖に関する健康や健康全般を効果的に管理するためのガイダンスを提供します。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
      {
        title: {
          "en-GB": "How to access your free Luna Luna premium membership",
          "ja-JP": "ルナルナファミリーコースの利用方法:",
        },
        markdown: {
          "en-GB":
            "As part of your benefits with YuLife, you get 12 months free access to Luna Luna Premium. To claim your premium subscription, please follow these instructions:\n1. Tap [Claim your Luna Luna access] below.\n2. You will be directed to the LunaLuna page specifically for YuLife. Please read the instructions carefully and tap [Agree to the Terms and Start Using]. *If you do not have the LunaLuna app, you will need to download it.\n3. You will be directed to the YuLife special page for free registration of the paid plan. Copy and enter the Luna Code (8 alphanumeric characters) and the Company Code (7 digits) displayed in the YuLife app.\n4. Tap [Next], then tap [Start Using] to activate the paid plan.",
          "ja-JP":
            "YuLifeの福利厚生サービスとして、ルナルナファミリーコースを12ヶ月間無料でご利用いただけます。利用するには以下の手順に従ってください。\n1. 以下の [ルナルナへのアクセス権を申請する] をタップしてください。\n2. LunaLunaのYuLife専用ページに遷移するので、注意事項をよく読み、[注意事項に同意して利用開始する] をタップしてください。※ルナルナアプリをお持ちでない方はダウンロードが必要です\n3. 有料プラン無償利用登録のYuLife特設ページに遷移するので、YuLifeアプリに表示されていた専用コード (半角英数字8桁) と専用番号 (半角7桁) をそれぞれコピーして入力してください。\n4. [次へ] をタップし、[利用を開始する] をタップすると有料プランをお使いいただけるようになります。",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        canCopy: true,
      },
      {
        title: {
          "en-GB": "Luna Code 1",
          "ja-JP": "専用コード",
        },
        markdown: {
          "en-GB": "${PRODUCT_CODE_NUMERICAL}",
          "ja-JP": "${PRODUCT_CODE_NUMERICAL}",
        },
        _id: generateRandomMongoId(),
        type: "BOX",
        canCopy: true,
      },
      {
        title: {
          "en-GB": "Luna Code 2",
          "ja-JP": "専用番号",
        },
        markdown: {
          "en-GB": "${PRODUCT_CODE_NUMERICAL}",
          "ja-JP": "${PRODUCT_CODE_NUMERICAL}",
        },
        label: {
          "en-GB": "Claim your Luna Luna access",
          "ja-JP": " ルナルナへのアクセス権を申請する",
        },
        _id: generateRandomMongoId(),
        type: "BOX",
        image: "",
        uri: "https://sp.lnln.jp/freeoffer/lp/yulife",
        canCopy: true,
        restrictToPlatform: "",
      },
      {
        title: {
          "en-GB": "",
        },
        markdown: {
          "en-GB": "",
        },
        label: {
          "en-GB": "Claim your Luna Luna access",
          "ja-JP": "ルナルナへのアクセス権を申請する",
        },
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "",
        uri: "https://sp.lnln.jp/freeoffer/lp/yulife",
        restrictToPlatform: "",
      },
    ],
    enabled: true,
    isPromoted: true,
    query: {
      preferredContentLocation: {
        contains: [],
      },
    },
  },
};
