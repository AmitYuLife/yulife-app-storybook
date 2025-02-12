import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const CORE_REWARDS_ORDO_REWARDS = {
  type: "mongo",
  modelName: "core_rewards",
  data: {
    _id: "6572cb3f8f7531b2fa7962db",
    code: "ordo-discounts",
    rewardProviderId: "link",
    loyaltyProgramme: [],
    redemptionUrl: "https://www.ordolife.com/collections/yulife-collection",
    availableDenominations: [
      {
        yuCoin: 0,
        value: 1,
        _id: generateRandomMongoId(),
        availableForRewardsStore: true,
      },
    ],
    currencyCode: "GBP",
    images: {
      listItemImageKey: "imgixGlobal::cms/1702021776915_Ordo (1).png",
      detailHeaderKey: "imgixGlobal::cms/1702021776597_Ordo.png",
      websiteImageKey: "",
    },
    name: {
      "en-GB": "Ordo",
      "ja-JP": "オルド",
    },
    description: {
      "en-GB":
        "Find your smile with discounts on a range of Ordo x YuLife products.\n\nFrom water floss to Sonic toothbrushes, Ordo products will revolutionise your dental routine. They’ve been clinically proven by dentists and hygienists to perform at a level which any dental care expert would be happy to recommend. \n\nOrdo products are also truly sustainable from manufacturing to the post-use lifecycle. They are committed to limiting their environmental impact through innovation and waste reduction, ensuring that when you clean your teeth, you’re also supporting a clean earth.",
      "ja-JP":
        "Ordo×YuLife製品の割引で、あなたの笑顔を見つけましょう。ウォーターフロスからソニック歯ブラシまで、Ordo製品はあなたの歯の日常に革命を起こします。歯科医や歯科衛生士によって臨床的に証明された、デンタルケアの専門家なら誰でも喜んでお勧めできるレベルの製品です。\n\nまた、オルドの製品は、製造から使用後のライフサイクルまで、真に持続可能です。技術革新と廃棄物の削減を通じて環境への影響を最小限に抑え、歯をきれいにすることは、きれいな地球を守ることでもあるのです。",
    },
    copy: {
      ctaLabel: {
        "en-GB": "Claim my discount",
        "ja-JP": "割引を申請する",
      },
      alertHeading: {
        "en-GB": "Claim my discount",
        "ja-JP": "割引を申請する",
      },
      offerSubheading: {
        "en-GB": "Discounts on a range of oral care products",
        "ja-JP": "各種オーラルケア製品の割引",
      },
      redeemCtaLabel: null,
    },
    redemptionSteps: {
      info: {
        "en-GB": "How to redeem your exclusive offer:",
        "ja-JP": "限定オファーのご利用方法",
      },
      steps: [
        {
          "en-GB": "Tap the “Claim my discount” button below.",
          "ja-JP": "下の「割引を申請する」ボタンをタップしてください。",
        },
        {
          "en-GB":
            "Add the Ordo products you want to purchase from the YuLife collection to your basket.",
          "ja-JP": "YuLifeコレクションから購入したいOrdo製品をバスケットに追加します。",
        },
        {
          "en-GB": "At checkout, your discounts will be applied automatically.",
          "ja-JP": "チェックアウトの際、割引は自動的に適用されます。",
        },
        {
          "en-GB": "Enjoy your Ordo products!",
          "ja-JP": "オルドの製品をお楽しみください！",
        },
      ],
    },
    termsAndConditionsUrl: "https://www.ordolife.com/pages/terms-conditions",
    restrictions: {
      availableForLabels: ["6572cb3f8f7531b2fa7962db_claimable"],
      restrictedForLabels: [],
      locations: ["GB"],
    },
    tags: [
      {
        "en-GB": "Wellbeing",
        "ja-JP": "ウェルビーイング",
      },
    ],
    website: {
      isFeaturedOnWebsite: true,
    },
    claimType: "unlimited",
    createdAt: {
      $date: "2023-12-08T07:52:31.197Z",
    },
    updatedAt: {
      $date: "2024-01-04T00:33:50.445Z",
    },
    __v: 0,
    denominationUnit: {
      "en-GB": "Ordo discount",
      "ja-JP": "オルド割引",
    },
  },
} as IDatabaseItem;
