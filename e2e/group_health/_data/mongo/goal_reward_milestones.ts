import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3, GOAL_PRODUCTS_4 } from "./goal_products";

const type = "mongo";
const modelName = "goal_reward_milestones";

export const GOAL_REWARD_MILESTONE_15_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691152361046_Illustration-discounts@2x.png",
        targetValue: 0.025,
        rewardType: "core_reward",
        rewardId: "64c8f5a1d4e9db6e99f5248f",
        rewardValue: 1,
        rewardQuantity: 100000000,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        rewardDescription: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_16_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153069424_Illustration-discounts@3x.png",
        targetValue: 0.025,
        rewardType: "core_reward",
        rewardId: "64c38f7ecb39c9d50a3c14ef",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        rewardDescription: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_17_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153142045_Illustration-urban@3x.png",
        targetValue: 0.05,
        rewardType: "core_reward",
        rewardId: "649bd68bf4e68234f8dd9f3b",
        rewardValue: 1,
        rewardQuantity: 3,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Urban Massage Vouchers",
            "ja-JP": "アーバン",
        },
        rewardDescription: {
            "en-GB": "Massage Vouchers",
            "ja-JP": "アーバン",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_18_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153338274_Illustration-thriva@3x.png",
        targetValue: 0.25,
        rewardType: "core_reward",
        rewardId: "64b7b195a85859af773442e4",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Free Thriva Health Screening Kit",
            "ja-JP": "トリバ",
        },
        rewardDescription: {
            "en-GB": "Free Health Screening Kit",
            "ja-JP": "トリバ",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_19_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153464467_Illustration-livingDNA@3x.png",
        targetValue: 0.5,
        rewardType: "core_reward",
        rewardId: "64ad4e2d87cea9cd5185cd8f",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 3,
        rewardTitle: {
            "en-GB": "Free Living DNA Test Kit",
            "ja-JP": "生きたDNA",
        },
        rewardDescription: {
            "en-GB": "Free DNA Kit",
            "ja-JP": "生きたDNA",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_20_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153946782_Illustration-healthassessment@3x.png",
        targetValue: 0.75,
        rewardType: "core_reward",
        rewardId: "64a403a408975d03a0aa63ff",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Free In-person Health Assessment",
            "ja-JP": "ブパ・ヘルス",
        },
        rewardDescription: {
            "en-GB": "Free Health Assessment",
            "ja-JP": "ブパ・ヘルス",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_21_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153993964_Illustration-garmin@3x.png",
        targetValue: 1,
        rewardType: "core_reward",
        rewardId: "64bf87537b74ab1ef759eece",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 2,
        rewardTitle: {
            "en-GB": "Free Garmin Smartwatch",
            "ja-JP": "ガーミン",
        },
        rewardDescription: {
            "en-GB": "Free Smartwatch",
            "ja-JP": "ガーミン",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_22_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691152361046_Illustration-discounts@2x.png",
        targetValue: 0.025,
        rewardType: "core_reward",
        rewardId: "64c8f5a1d4e9db6e99f5248f",
        rewardValue: 1,
        rewardQuantity: 100000000,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        rewardDescription: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_23_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153069424_Illustration-discounts@3x.png",
        targetValue: 0.025,
        rewardType: "core_reward",
        rewardId: "64c38f7ecb39c9d50a3c14ef",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        rewardDescription: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_24_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153142045_Illustration-urban@3x.png",
        targetValue: 0.05,
        rewardType: "core_reward",
        rewardId: "649bd68bf4e68234f8dd9f3b",
        rewardValue: 1,
        rewardQuantity: 3,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Urban Massage Vouchers",
            "ja-JP": "アーバン",
        },
        rewardDescription: {
            "en-GB": "Massage Vouchers",
            "ja-JP": "アーバン",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_25_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153338274_Illustration-thriva@3x.png",
        targetValue: 0.25,
        rewardType: "core_reward",
        rewardId: "64b7b195a85859af773442e4",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Free Thriva Health Screening Kit",
            "ja-JP": "トリバ",
        },
        rewardDescription: {
            "en-GB": "Free Health Screening Kit",
            "ja-JP": "トリバ",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_26_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153464467_Illustration-livingDNA@3x.png",
        targetValue: 0.5,
        rewardType: "core_reward",
        rewardId: "64ad4e2d87cea9cd5185cd8f",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 3,
        rewardTitle: {
            "en-GB": "Free Living DNA Test Kit",
            "ja-JP": "生きたDNA",
        },
        rewardDescription: {
            "en-GB": "Free DNA Kit",
            "ja-JP": "生きたDNA",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_27_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153946782_Illustration-healthassessment@3x.png",
        targetValue: 0.75,
        rewardType: "core_reward",
        rewardId: "64a403a408975d03a0aa63ff",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 2,
        rewardTitle: {
            "en-GB": "Free In-person Health Assessment",
            "ja-JP": "ブパ・ヘルス",
        },
        rewardDescription: {
            "en-GB": "Free Health Assessment",
            "ja-JP": "ブパ・ヘルス",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_28_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153993964_Illustration-garmin@3x.png",
        targetValue: 1,
        rewardType: "core_reward",
        rewardId: "64bf87537b74ab1ef759eece",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 2,
        rewardTitle: {
            "en-GB": "Free Garmin Smartwatch",
            "ja-JP": "ガーミン",
        },
        rewardDescription: {
            "en-GB": "Free Smartwatch",
            "ja-JP": "ガーミン",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_29_GIP_REWARDS = {
    type,
    modelName,
    data: {
        _id: "6718c27b82561e06522c3aec",
        parentType: "goal_products",
        goal: GOAL_PRODUCTS_4.data._id,
        targetValue: 0.002,
        rewardType: "core_reward",
        rewardQuantity: 1,
        earnRateBased: true,
        rewardId: "670fd48d23f0dacc22e2ecf0",
        rewardTitle: {
          "en-GB": "Bupa health assessments",
          "_id": generateRandomMongoId(),
          "ja-JP": "Bupa健康診断割引"
        },
        rewardOverlayImageKey: "",
        rewardImageKey: "imgix::cms/1730284079315_bupa.png",
        animated: false,
        eligibilityFrequency: 1,
        teaser: {
          "title": {
            "en-GB": "Up tp 30% off Bupa health assessments",
            "_id": generateRandomMongoId(),
            "ja-JP": "Bupaの健康診断が最大30％オフ"
          },
          "description": {
            "en-GB": "\"- Get a comprehensive picture of your current health and future risks. - Assessments include various tests, such as blood tests, cholesterol checks, and lifestyle evaluations, tailored to your needs.\"",
            "_id": generateRandomMongoId(),
            "ja-JP": "「現在の健康状態と将来のリスクを総合的に把握する。- アセスメントには、血液検査、コレステロールチェック、生活習慣の評価など、あなたのニーズに合わせた様々な検査が含まれます。\""
          },
          "image": "",
          "_id": generateRandomMongoId(),
        },
        rewardLockedImageKey: "imgix::cms/1730284103879_bupa@3x.png",
        detailsTitle: {
          "en-GB": "Up to 30% off Bupa health assessments",
          "_id": generateRandomMongoId(),
          "ja-JP": "Bupa健康診断が最大30％オフ"
        },
        explanations: [
          {
            "label": {
              "en-GB": "Get a comprehensive picture of your current health and future risks.",
              "_id": generateRandomMongoId(),
              "ja-JP": "現在の健康状態と将来のリスクを総合的に把握する。"
            }
          },
          {
            "label": {
              "en-GB": "Assessments include various tests, such as blood tests, cholesterol checks, and lifestyle evaluations, tailored to your needs.",
              "_id": generateRandomMongoId(),
              "ja-JP": "アセスメントには、血液検査、コレステロールチェック、生活習慣の評価など、患者のニーズに合わせたさまざまな検査が含まれる。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_30_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d36625e",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.01,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fd5bf23f0dacc22e2ed25",
        "rewardTitle": {
          "en-GB": "Medical scan discount",
          "ja-JP": "民間医療スキャン割引",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284219520_scan.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "title": {
            "en-GB": null,
            "_id": generateRandomMongoId(),
          },
          "description": {
            "en-GB": null,
            "_id": generateRandomMongoId(),
          },
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardLockedImageKey": "imgix::cms/1730284226968_Scan@3x.png",
        "explanations": [
          {
            "label": {
              "en-GB": "Get simplified access to medical imaging services like MRI, CT, and ultrasound scans.",
              "_id": generateRandomMongoId(),
              "ja-JP": "MRI、CT、超音波検査などの医療画像サービスを簡単にご利用いただけます。"
            }
          },
          {
            "label": {
              "en-GB": "Quick bookings, transparent pricing, and fast results on their easy-to-use platform.",
              "_id": generateRandomMongoId(),
              "ja-JP": "迅速な予約、透明性の高い価格設定、使いやすいプラットフォームでの迅速な結果。"
            }
          }
        ],
        "detailsTitle": {
          "en-GB": "Up to 15% off private medical scans with Scan.com",
          "_id": generateRandomMongoId(),
          "ja-JP": "Scan.comでプライベート医療スキャンが最大15％オフ"
        }
      }
};

export const GOAL_REWARD_MILESTONE_31_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d36625f",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.05,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fd85e23f0dacc22e2edcb",
        "rewardTitle": {
          "en-GB": "Meditopia subscription",
          "ja-JP": "メディトピア無料購読",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284240017_meditopia.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardValue": 0,
        "rewardLockedImageKey": "imgix::cms/1730284244555_Meditopia@3x.png",
        "detailsTitle": {
          "en-GB": "12 months Meditopia premium subscription",
          "_id": generateRandomMongoId(),
          "ja-JP": "Meditopiaプレミアム購読12ヶ月"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "Improve your sleep and focus, reduce stress, and enhance overall mental wellbeing.",
              "_id": generateRandomMongoId(),
              "ja-JP": "睡眠と集中力を高め、ストレスを軽減し、全体的な精神的ウェルビーイングを高める。"
            }
          },
          {
            "label": {
              "en-GB": "Get a wide range of guided meditations, sleep stories, and mindfulness practices.",
              "_id": generateRandomMongoId(),
              "ja-JP": "ガイド付き瞑想、睡眠体験談、マインドフルネスの実践など、さまざまなものを手に入れよう。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_32_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d366260",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.15,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fdd6523f0dacc22e2ef2c",
        "rewardTitle": {
          "en-GB": "Betterhelp discount",
          "ja-JP": "ベターヘルプ割引",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284256074_betterhelp.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardLockedImageKey": "imgix::cms/1730284261361_Betterhelp@3x.png",
        "detailsTitle": {
          "en-GB": "15% off BetterHelp for a year",
          "_id": generateRandomMongoId(),
          "ja-JP": "BetterHelpが1年間15%オフ"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "Take control of your stress, anxiety, relationships, or other struggles with therapy from the comfort of your own home.",
              "_id": generateRandomMongoId(),
              "ja-JP": "ご自宅にいながら、ストレス、不安、人間関係、その他の葛藤をセラピーでコントロールしましょう。"
            }
          },
          {
            "label": {
              "en-GB": "Talk to a range of licensed therapists through video, phone, or live chat.",
              "_id": generateRandomMongoId(),
              "ja-JP": "ビデオ、電話、ライブチャットで、免許を持ったセラピストと話すことができます。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_33_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d366261",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.25,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fde2923f0dacc22e2ef4d",
        "rewardTitle": {
          "en-GB": "Skinvision access",
          "ja-JP": "スキンビジョン1日アクセス",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284273706_skinvision.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardValue": 1,
        "rewardLockedImageKey": "imgix::cms/1730284279609_Skinvision@3x.png",
        "detailsTitle": {
          "en-GB": "x1 skin cancer screening on the Skinvision app",
          "_id": generateRandomMongoId(),
          "ja-JP": "Skinvisionアプリでの皮膚がん検診x1"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "Detect potential signs of skin cancer early with your one-time scan.",
              "_id": generateRandomMongoId(),
              "ja-JP": "1回だけの検査で、皮膚がんの可能性を早期に発見しましょう。"
            }
          },
          {
            "label": {
              "en-GB": "Scan moles or skin spots with your phone's camera and receive an instant risk assessment.",
              "_id": generateRandomMongoId(),
              "ja-JP": "あなたの携帯電話のカメラでほくろや皮膚の斑点をスキャンし、即座にリスク評価を受けることができます。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_34_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d366262",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.35,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fd99423f0dacc22e2ee32",
        "rewardTitle": {
          "en-GB": "Sleep Cycle subscription",
          "ja-JP": "スリープ・サイクルの無料購読",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284293434_sleepcycle.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardValue": 1,
        "rewardLockedImageKey": "imgix::cms/1730284299723_Sleepcycle@3x.png",
        "detailsTitle": {
          "en-GB": "12 months Sleep Cycle premium subscription",
          "_id": generateRandomMongoId(),
          "ja-JP": "スリープ・サイクル・プレミアム・サブスクリプション12ヶ月"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "Smart alarm clock app designed to improve your sleep quality and help you wake up feeling refreshed.",
              "_id": generateRandomMongoId(),
              "ja-JP": "睡眠の質を高め、すっきりとした目覚めをサポートするスマートな目覚まし時計アプリ。"
            }
          },
          {
            "label": {
              "en-GB": "Enjoy features like sleep statistics, soundscapes, and personalised insights.",
              "_id": generateRandomMongoId(),
              "ja-JP": "睡眠統計、サウンドスケープ、パーソナライズされたインサイトなどの機能をお楽しみください。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_35_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d366263",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.45,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "6708ea1d1bbe9f34442e3e7c",
        "rewardTitle": {
          "en-GB": "Free smart scale",
          "ja-JP": "無料のWithingsスマート体重計",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284311968_withings.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardValue": 1,
        "rewardLockedImageKey": "imgix::cms/1730284318286_Withings@3x.png",
        "detailsTitle": {
          "en-GB": "Free Withings Body Smart scale",
          "_id": generateRandomMongoId(),
          "ja-JP": "無料のWithings Body Smart体重計"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "Track your body composition metrics such as body fat, muscle mass, water percentage, and BMI.",
              "_id": generateRandomMongoId(),
              "ja-JP": "体脂肪、筋肉量、水分率、BMIなどの体組成指標を追跡。"
            }
          },
          {
            "label": {
              "en-GB": "With the Withings Health Mate app, get personalised insights and progress tracking on your phone.",
              "_id": generateRandomMongoId(),
              "ja-JP": "Withings Health Mateアプリで、あなたの携帯電話にパーソナライズされたインサイトと進捗状況のトラッキングを。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_36_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d366264",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.55,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fe1f923f0dacc22e2f032",
        "rewardTitle": {
          "en-GB": "Free at-home heart check",
          "ja-JP": "PocDoc自宅心臓チェック",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284331382_pocdoc.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardValue": 1,
        "rewardLockedImageKey": "imgix::cms/1730284337710_PocDoc@3x.png",
        "detailsTitle": {
          "en-GB": "Free Pocdoc at-home heart check",
          "_id": generateRandomMongoId(),
          "ja-JP": "無料Pocdoc自宅心臓チェック"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "Perform an at-home Healthy Heart check for cardiovascular risk.",
              "_id": generateRandomMongoId(),
              "ja-JP": "心血管系のリスクを調べるために、自宅でヘルシーハートチェックを行う。"
            }
          },
          {
            "label": {
              "en-GB": "The app offers instant, accurate results and provides personalised advice based on your health data.",
              "_id": generateRandomMongoId(),
              "ja-JP": "このアプリは、瞬時に正確な結果を提供し、あなたの健康データに基づいてパーソナライズされたアドバイスを提供する。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_37_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d366265",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.65,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fdbf123f0dacc22e2eedb",
        "rewardTitle": {
          "en-GB": "Lifesum subscription",
          "ja-JP": "ライフサム無料購読",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284349671_lifesum.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardValue": 1,
        "rewardLockedImageKey": "imgix::cms/1730284354777_Lifesum@3x.png",
        "detailsTitle": {
          "en-GB": "12 months Lifesum premium subscription",
          "_id": generateRandomMongoId(),
          "ja-JP": "ライフサム・プレミアム購読12ヶ月"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "Achieve your fitness and nutrition goals by tracking your food intake, exercise, and overall lifestyle habits.",
              "_id": generateRandomMongoId(),
              "ja-JP": "食事量、運動量、生活習慣全般を記録して、フィットネスと栄養の目標を達成しましょう。"
            }
          },
          {
            "label": {
              "en-GB": "Personalise your meal plans, track your calories, and get nutritional advice tailored to your specific needs.",
              "_id": generateRandomMongoId(),
              "ja-JP": "食事プランをパーソナライズし、カロリーを記録し、特定のニーズに合わせた栄養アドバイスを受けることができます。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_38_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d366266",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 0.75,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fd8fc23f0dacc22e2edf7",
        "rewardTitle": {
          "en-GB": "Fiit subscription",
          "ja-JP": "Fiit無料購読",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284367277_fiit.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardValue": 1,
        "rewardLockedImageKey": "imgix::cms/1730284372170_Fiit@3x.png",
        "detailsTitle": {
          "en-GB": "12 months Fiit premium subscription",
          "_id": generateRandomMongoId(),
          "ja-JP": "Fiitプレミアム購読12ヶ月"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "Meet your fitness goals with personalised training plans, progress tracking, and community challenges.",
              "_id": generateRandomMongoId(),
              "ja-JP": "パーソナライズされたトレーニングプラン、進捗管理、コミュニティチャレンジでフィットネスゴールを達成しましょう。"
            }
          },
          {
            "label": {
              "en-GB": "Unlimited access to on-demand classes, including strength training, yoga, HIIT, and pilates.",
              "_id": generateRandomMongoId(),
              "ja-JP": "筋力トレーニング、ヨガ、HIIT、ピラティスなどのオンデマンドクラスを無制限に利用できる。"
            }
          }
        ]
      }
};

export const GOAL_REWARD_MILESTONE_39_GIP_REWARDS = {
    type,
    modelName,
    data: {
        "_id": "6718c3539ea1b3a30d366267",
        "parentType": "goal_products",
        "goal": GOAL_PRODUCTS_4.data._id,
        "targetValue": 1,
        "rewardType": "core_reward",
        "rewardQuantity": 1,
        "earnRateBased": true,
        "rewardId": "670fe2f323f0dacc22e2f05a",
        "rewardTitle": {
          "en-GB": "Free pair of trainers",
          "ja-JP": "ニューバランス880トレーナー無料",
          "_id": generateRandomMongoId(),
        },
        "rewardOverlayImageKey": "",
        "rewardImageKey": "imgix::cms/1730284129419_newbalance.png",
        "animated": false,
        "eligibilityFrequency": 1,
        "teaser": {
          "image": "",
          "_id": generateRandomMongoId(),
        },
        "_migrated": true,
        "__v": 0,
        "rewardValue": 1,
        "rewardLockedImageKey": "imgix::cms/1730284140476_NewBalance@3x.png",
        "detailsTitle": {
          "en-GB": "Free New Balance 880 running shoes",
          "_id": generateRandomMongoId(),
          "ja-JP": "ニューバランス880ランニングシューズ無料"
        },
        "explanations": [
          {
            "label": {
              "en-GB": "A high-performance running shoe designed for comfort and support on long-distance runs.",
              "_id": generateRandomMongoId(),
              "ja-JP": "長距離ランでの快適性とサポート性を追求した高性能ランニングシューズ。"
            }
          },
          {
            "label": {
              "en-GB": "Whether you're an avid runner or just starting out, the New Balance 880 is perfect for your running journey.",
              "_id": generateRandomMongoId(),
              "ja-JP": "熱心なランナーでも、走り始めたばかりのランナーでも、ニューバランス880はあなたのランニングの旅に最適だ。"
            }
          }
        ]
      }
};