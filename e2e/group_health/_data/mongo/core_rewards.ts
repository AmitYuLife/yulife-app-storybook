import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const CORE_REWARDS_JOHN_LEWIS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: generateRandomMongoId(),
        redemptionSteps: {
            steps: [
                "Your e-voucher can only be redeemed online at johnlewis.com The John Lewis website hosts a range of high quality fashion, furnishings, flowers and household goods, all delivered direct to your door. All you need to do is 'shop' the website and once you've proceeded to checkout, select 'Add Gift Voucher or e-voucher'. You will then be asked to enter two codes for the e-voucher you wish to spend:",
                "The 10 digit serial number off the e-voucher and the 7 character online security code.",
                "Your e-voucher is worth £ After entering in the e-voucher code, your order will be automatically updated with credit to the value of the e-voucher.",
                "If there's any balance to pay, you can use a debit or credit card in the usual way. If you do not spend the full value of the e-voucher, the remaining credit will be stored in your johnlewis.com online account and can be used towards your next purchase on johnlewis.com.",
                "If you find that your e-voucher is not accepted at checkout, check the serial number and online security code you have entered and try again. If you continue to experience any further difficulties, email John Lewis Customer Service team https://www.johnlewis.com/contact-us/ or call on 03456 049 049 between 7am and midnight, 7 days a week.",
            ],
            info: "To redeem John Lewis:",
        },
        images: {
            listItemImageKey: "reward/background/JLS-GB.jpg",
            detailHeaderKey: "reward/header/JLS-GB.jpg",
        },
        loyaltyProgramme: [],
        sortOrder: 14,
        rewardProviderId: "wegift",
        redemptionUrl: "stocked",
        code: "JLS-GB",
        currencyCode: "GBP",
        description:
            "John Lewis is a British institution, with a legacy spanning over 150 years and stores all over the country. Redeem your voucher for one of the many products on johnlewis.com, where you can find everything from face creams to sofas!",
        name: "John Lewis",
        maximum_value: 250,
        minimum_value: 5,
        restrictions: {
            locations: ["GB"],
        },
        termsAndConditionsUrl: "https://gift-sandbox.wegift.io/public/terms/JLS-GB.pdf",
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                yuCoin: 4130,
                value: 5,
                stock: 7,
            },
            {
                _id: generateRandomMongoId(),
                yuCoin: 8260,
                value: 10,
                stock: 7,
            },
            {
                _id: generateRandomMongoId(),
                yuCoin: 16520,
                value: 20,
                stock: 7,
            },
        ],
        __v: 0,
    },
} as IDatabaseItem;

export const CORE_REWARDS_BROKEN = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: generateRandomMongoId(),
        redemptionSteps: {
            steps: [
                "Your e-voucher can only be redeemed online at johnlewis.com The Broken Item website hosts a range of high quality fashion, furnishings, flowers and household goods, all delivered direct to your door. All you need to do is 'shop' the website and once you've proceeded to checkout, select 'Add Gift Voucher or e-voucher'. You will then be asked to enter two codes for the e-voucher you wish to spend:",
                "The 10 digit serial number off the e-voucher and the 7 character online security code.",
                "Your e-voucher is worth £ After entering in the e-voucher code, your order will be automatically updated with credit to the value of the e-voucher.",
                "If there's any balance to pay, you can use a debit or credit card in the usual way. If you do not spend the full value of the e-voucher, the remaining credit will be stored in your johnlewis.com online account and can be used towards your next purchase on johnlewis.com.",
                "If you find that your e-voucher is not accepted at checkout, check the serial number and online security code you have entered and try again. If you continue to experience any further difficulties, email Broken Item Customer Service team https://www.johnlewis.com/contact-us/ or call on 03456 049 049 between 7am and midnight, 7 days a week.",
            ],
            info: "To redeem Broken Item:",
        },
        images: {
            listItemImageKey: "reward/background/JLS-GB.jpg",
            detailHeaderKey: "reward/header/JLS-GB.jpg",
        },
        loyaltyProgramme: [],
        sortOrder: 14,
        rewardProviderId: "broken",
        redemptionUrl: "stocked",
        code: "BROKEN-GB",
        currencyCode: "GBP",
        description:
            "Broken Item is a British institution, with a legacy spanning over 150 years and stores all over the country. Redeem your voucher for one of the many products on johnlewis.com, where you can find everything from face creams to sofas!",
        name: "Broken Item",
        maximum_value: 250,
        minimum_value: 5,
        restrictions: {
            locations: ["GB"],
        },
        termsAndConditionsUrl: "https://gift-sandbox.wegift.io/public/terms/JLS-GB.pdf",
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                yuCoin: 4140,
                value: 5,
                stock: 7,
            },
            {
                _id: generateRandomMongoId(),
                yuCoin: 8270,
                value: 10,
                stock: 7,
            },
            {
                _id: generateRandomMongoId(),
                yuCoin: 16530,
                value: 20,
                stock: 7,
            },
        ],
        __v: 0,
    },
} as IDatabaseItem;

export const CORE_REWARDS_AVIOS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: generateRandomMongoId(),
        images: {
            listItemImageKey: "reward/background/AVI-GB.jpg",
            detailHeaderKey: "reward/header/AVI-GB.jpg",
        },
        sortOrder: 1,
        rewardProviderId: "avios",
        redemptionUrl: "stocked",
        progression_level: "5",
        code: "AVI-GB",
        currencyCode: "GBP",
        denomination_type: null,
        description:
            "Avios are the loyalty currency of Aer Lingus, British Airways, Vueling and other airlines. When you collect Avios you can spend them on flights, hotels and many other experiences.  \n\n * Reward flights are subject to availability. Taxes fees and carrier charges apply \n\n * Avios may take a few days to process your request",
        e_code_usage_type: null,
        expiry_date_policy: "12 months",
        maximum_value: null,
        minimum_value: null,
        name: "Avios Miles",
        restrictions: {
            locations: ["GB"],
        },
        termsAndConditionsUrl: "https://res.cloudinary.com/yu-life/image/upload/v1533742185/reward/avios-card.png",
        reward_sticker: "best value",
        __v: 0,
        uiSettings: {
            id: "AVI-GB",
            logoWidth: 55,
            logoHeight: 55,
            ctaLabel: "buy avios",
        },
        redemptionSteps: {
            info: "connect yucoin to avios",
            steps: [
                "Please select your Avios loyalty programme and enter your membership number. Choose how many yucoin you want to convert and you’re on your way.",
            ],
        },
        loyaltyProgramme: ["AerClub", "The British Airways Executive Club", "Vueling Club"],
        availableDenominations: [
            {
                yuCoin: 500,
                value: 50,
                stock: null,
            },
            {
                yuCoin: 1000,
                value: 100,
                stock: null,
            },
            {
                yuCoin: 2500,
                value: 250,
                stock: null,
            },
            {
                yuCoin: 5000,
                value: 500,
                stock: null,
            },
            {
                yuCoin: 10000,
                value: 1000,
                stock: null,
            },
            {
                yuCoin: 20000,
                value: 2000,
                stock: null,
            },
            {
                yuCoin: 100000,
                value: 10000,
                stock: null,
            },
        ],
    },
} as IDatabaseItem;

export const CORE_REWARDS_BLOOM_UNAVAILABLE = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: generateRandomMongoId(),
        redemptionSteps: {
            steps: [
                "Visit bloomandwild.com/send-flowers",
                "Select your bouquet or gift",
                "Fill in the delivery details, delivery date and select a free gift card",
                "When prompted at checkout enter your unique voucher code",
            ],
            info: "How to redeem Bloom & Wild:",
        },
        images: {
            listItemImageKey: "reward/background/YLBAW-GB.jpg",
            detailHeaderKey: "reward/header/YLBAW-GB.jpg",
        },
        loyaltyProgramme: [],
        sortOrder: 1.3,
        rewardProviderId: "wegift",
        redemptionUrl: "stocked",
        progression_level: "5",
        code: "YLBAW-GB",
        currencyCode: "GBP",
        link_type: "20% Your Next Order",
        denomination_type: "fixed",
        description:
            "Bloom & Wild is the UK's most-loved online florist. They invented letterbox flowers to make sending beautiful blooms easier and more delightful. Every box is hand-packed with seasonal stems and sent with fun arranging tips! But the best bit? How posties can deliver them through the door when no one's home. Make someone's day with fresh blooms and save 20% off your next order.",
        e_code_usage_type: "url-only",
        expiry_date_policy: "24 months from last use",
        maximum_value: 2500,
        minimum_value: 1,
        name: "Bloom & Wild",
        restrictions: {
            locations: ["GB"],
        },
        termsAndConditionsUrl: "https://gift.wegift.io/public/terms/YLBAW-GB.pdf",
        uiSettings: {
            id: "YLBAW-GB",
            logoWidth: 87,
            logoHeight: 50,
            ctaLabel: "Claim Reward",
            offerHeading: "20% off",
            offerSubheading: "   ",
            alertHeading: "Claim your discount",
            alertSubheading: "20% discount for all yulife members",
        },
        availableDenominations: [],
        __v: 0,
    },
} as IDatabaseItem;

export const CORE_REWARDS_NIKE = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: generateRandomMongoId(),
        redemptionSteps: {
            steps: [
                "In-store: At any Nike-owned retail store in the UK (includes Factory Stores). Please print the eGift or show it on your smart phone at the till (UK only). An unlimited amount of gift cards/eGifts can be used in one transaction in store",
                "Online: http://www.nike.com/gb/en_gb/ . Up to 10 gift cards/eGifts can be used in one transaction online",
                "Exceptions & exclusions: Cannot be redeemed in franchise stores or third party retailers",
                "Balance checker: http://store.nike.com/gb/en_gb/?l=shop%2Cgift_cards&amp;balance=true/",
                "Multiple redemptions possible are possible as the balance will remain on the eGift card.",
                "You can pay outstanding balance with cash/debit card if the value of the gift card is not enough.",
            ],
            info: "How to redeem Nike",
        },
        images: {
            listItemImageKey: "reward/list-detail/v1/Nike.png",
            detailHeaderKey: "https://gift-sandbox.wegift.io/static/product_assets/NIKE/NIKE-card.png",
        },
        loyaltyProgramme: [],
        sortOrder: 18,
        rewardProviderId: "wegift",
        redemptionUrl: "realtime",
        progression_level: "5",
        code: "NIKE-GB",
        currencyCode: "GBP",
        description:
            "As one of the leading sports brands in the world, Nike offers authentic athletic footwear, apparel, equipment, and accessories for a wide variety of sports and fitness activities. Redeem your voucher online or in any Nike UK store.",

        name: "Nike",
        restrictions: {
            locations: ["GB"],
        },
        termsAndConditionsUrl: "https://gift-sandbox.wegift.io/public/terms/NIKE-GB.pdf",
        reward_sticker: null,
        uiSettings: {
            id: "NIKE-GB",
            logoWidth: 71,
            logoHeight: 37,
        },
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                yuCoin: 7750,
                value: 10,
                stock: 7,
            },
            {
                _id: generateRandomMongoId(),
                yuCoin: 15500,
                value: 20,
                stock: 7,
            },
            {
                _id: generateRandomMongoId(),
                yuCoin: 31000,
                value: 40,
                stock: 7,
            },
        ],
        __v: 0,
    },
} as IDatabaseItem;

export const CORE_REWARDS_AMAZON = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: generateRandomMongoId(),
        redemptionSteps: {
            steps: [
                "In-store: At any Amazon in the UK (includes Factory Stores). Please print the eGift or show it on your smart phone at the till (UK only). An unlimited amount of gift cards/eGifts can be used in one transaction in store",
                "Online: http://www.amazon.com/gb/en_gb/ . Up to 10 gift cards/eGifts can be used in one transaction online",
                "Exceptions & exclusions: Cannot be redeemed in franchise stores or third party retailers",
                "Balance checker: http://store.amazon.com/gb/en_gb/?l=shop%2Cgift_cards&amp;balance=true/",
                "Multiple redemptions possible are possible as the balance will remain on the eGift card.",
                "You can pay outstanding balance with cash/debit card if the value of the gift card is not enough.",
            ],
            info: "How to redeem Amazon",
        },
        images: {
            listItemImageKey: "reward/list-detail/v1/Amazon.png",
            detailHeaderKey: "https://gift-sandbox.wegift.io/static/product_assets/AMAZON/AMAZON-card.png",
        },
        loyaltyProgramme: [],
        sortOrder: 18,
        rewardProviderId: "wegift",
        redemptionUrl: "realtime",
        progression_level: "5",
        code: "AMZ-GB",
        currencyCode: "GBP",
        description:
            "As one of the leading sports brands in the world, Amazon offers authentic athletic footwear, apparel, equipment, and accessories for a wide variety of sports and fitness activities. Redeem your voucher online or in any Amazon UK store.",

        name: "Amazon",
        restrictions: {
            locations: ["GB"],
        },
        termsAndConditionsUrl: "https://gift-sandbox.wegift.io/public/terms/AMAZON-GB.pdf",
        reward_sticker: null,
        uiSettings: {
            id: "AMZ-GB",
            logoWidth: 71,
            logoHeight: 37,
        },
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                yuCoin: 7000,
                value: 12,
                stock: 7,
            },
            {
                _id: generateRandomMongoId(),
                yuCoin: 14000,
                value: 24,
                stock: 7,
            },
            {
                _id: generateRandomMongoId(),
                yuCoin: 21000,
                value: 36,
                stock: 7,
            },
        ],
        __v: 0,
    },
} as IDatabaseItem;

export const CORE_REWARDS_URBAN_GHI_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "649bd68bf4e68234f8dd9f3b",
        loyaltyProgramme: [],
        restrictions: {
            availableForLabels: ["649bd68bf4e68234f8dd9f3b_tease", "649bd68bf4e68234f8dd9f3b_claimable"],
            restrictedForLabels: [],
            locations: ["GB"],
        },
        tags: [
            {
                "en-GB": "Health Rewards",
                "ja-JP": "健康報酬",
            },
        ],
        badge: null,
        website: {
            isFeaturedOnWebsite: true,
        },
        claimType: "locked",
        images: {
            detailHeaderKey: "cms/1690886854208_urban_massage_header_image.png",
            listItemImageKey: "cms/1690886854216_urban_massage_list_item_image.png",
            websiteImageKey: "",
        },
        rewardProviderId: "urban",
        name: {
            "en-GB": "Urban Massage",
            "ja-JP": "アーバン・マッサージ",
        },
        code: "urban",
        description: {
            "en-GB":
                "If you’ve ever wanted all your massage, beauty, osteopathy, physiotherapy, and pregnancy wellness needs to be met in a day, Urban massage can deliver! (Bet that’ll be a really relaxing day.) \n\nUrban Massage works with qualified mobile therapists of these respective disciplines, to deliver safe home treatment. If you ever have a bad day, Urban Massage Therapist to the rescue.",
            "ja-JP":
                "マッサージ、ビューティー、オステオパシー、フィジオセラピー、妊娠中のウェルネス・ニーズを1日ですべて満たしたいと思ったことがあるなら、アーバン・マッサージにお任せを！(きっとリラックスした一日になるはずだ。）\n\nアーバン・マッサージは、それぞれの分野の資格を持ったモバイル・セラピストと協力し、安全な自宅でのトリートメントをお届けします。嫌なことがあったら、アーバン・マッサージ・セラピストにお任せください。",
        },
        currencyCode: "GBP",
        termsAndConditionsUrl: "https://urban.co/en-gb/legal",
        sortOrder: null,
        redemptionSteps: {
            steps: [
                {
                    "en-GB": "Claim your reward!",
                    "ja-JP": "報酬を請求する",
                },
                {
                    "en-GB": "You will be taken to Urban Massages’s website, www.urban.co",
                    "ja-JP": "Urban Massagesのウェブサイト、www.urban.co に移動します。",
                },
                {
                    "en-GB": "Create your Urban Massage account.",
                    "ja-JP": "アーバンマッサージのアカウントを作成してください。",
                },
                {
                    "en-GB": "Choose your desired package.",
                    "ja-JP": "ご希望のパッケージをお選びください。",
                },
                {
                    "en-GB": "Check your email inbox for your unique voucher code.",
                    "ja-JP": "Eメールに記載されたクーポンコードをご確認ください。",
                },
                {
                    "en-GB": "At checkout, enter your unique voucher code. ",
                    "ja-JP": "チェックアウトの際に、固有のクーポンコードを入力してください。",
                },
                {
                    "en-GB": "Enjoy your massage session.",
                    "ja-JP": "マッサージをお楽しみください。",
                },
            ],
            info: {
                "en-GB": "Your Reward Journey:",
                "ja-JP": "あなたの報酬の旅",
            },
        },
        denominationUnit: "£10 Urban Voucher",
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                value: 1,
                yuCoin: 0,
                displayName: {
                    "en-GB": "£10",
                    "ja-JP": "£10",
                },
            },
        ],
        copy: {
            offerHeading: {
                "en-GB": "Urban Massage Vouchers",
                "ja-JP": "アーバン・マッサージ・バウチャー",
            },
            offerSubheading: {
                "en-GB": "Claim your £10 vouchers",
                "ja-JP": "10ポンドのクーポンを請求する",
            },
            ctaLabel: {
                "en-GB": "Claim my voucher",
                "ja-JP": "バウチャーを請求する",
            },
            alertSubheading: {
                "en-GB": "Do you want to claim your gift voucher",
                "ja-JP": "ギフトバウチャーを請求しますか？",
            },
            alertHeading: {
                "en-GB": "Claim your gift voucher",
                "ja-JP": "ギフトバウチャーを請求する",
            },
            redeemCtaLabel: {
                "en-GB": "Claim my reward",
                "ja-JP": "報酬を請求する",
            },
            unlockedClaimableSlogan: {
                "en-GB": "You deserve to relax!",
                "ja-JP": "リラックスするに値する！",
            },
        },
        createdAt: {
            $date: "2023-06-28T06:43:23.794Z",
        },
        updatedAt: {
            $date: "2023-08-15T00:33:50.560Z",
        },
        __v: 0,
    },
} as IDatabaseItem;

export const CORE_REWARDS_BOOTS_GHI_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "64c8f5a1d4e9db6e99f5248f",
        loyaltyProgramme: [],
        restrictions: {
            availableForLabels: ["64c8f5a1d4e9db6e99f5248f_tease", "64c8f5a1d4e9db6e99f5248f_claimable"],
            restrictedForLabels: [],
            locations: ["GB"],
        },
        tags: [
            {
                "en-GB": "Health Rewards",
                "ja-JP": "健康報酬",
            },
        ],
        badge: {},
        website: {
            isFeaturedOnWebsite: true,
        },
        claimType: "unlimited",
        images: {
            detailHeaderKey: "cms/1690891260130_Boots.png",
            listItemImageKey: "cms/1690891260100_Boots GHI Tile.png",
            websiteImageKey: "",
        },
        rewardProviderId: "runa",
        name: {
            "en-GB": "Boots",
            "ja-JP": "ブーツ",
        },
        code: "BOOTS-GB",
        description: {
            "en-GB":
                "You’ve been there; we’ve been there. Boots is the UK’s leading health and beauty retailer for a reason: they have everything you need, when you need it. \n\nWith more than 2,200 stores ranging from local community pharmacies to large health and beauty stores, they reliably support the UK’s health and wellbeing needs — and they’re hard to miss (so don’t miss them).\n\n## Your Reward\n\nYou did it! You unlocked the ability to exchange your well-earned YuCoin for Boots vouchers. \n\nThe best part? This reward will remain unlocked every policy year from now on, looks like you’ll be in Boots near you a lot more than expected.",
            "ja-JP":
                "あなたも経験したことがあるでしょう。ブーツが英国を代表するヘルス＆ビューティー小売店であるのには理由があります。\n\n地域の薬局から大型のヘルス＆ビューティーショップまで、2,200以上の店舗を展開するブーツは、英国のヘルス＆ウェルビーイングのニーズを確実にサポートします。\n\n## ご褒美\n\nあなたはやり遂げました！獲得したYuCoinをBootsバウチャーに交換できるようになりました。\n\n最高の特典は？この特典は今後1年ごとにアンロックされるので、お近くのBootsに行く機会が予想以上に増えそうです。",
        },
        currencyCode: "GBP",
        termsAndConditionsUrl: "https://www.boots.com/cashstar-terms-and-conditions",
        redemptionSteps: {
            steps: [
                {
                    "en-GB": "Claim your reward!",
                    "ja-JP": "報酬を請求する",
                },
                {
                    "en-GB": "Receive your voucher code.",
                    "ja-JP": "クーポンコードを受け取ってください。",
                },
                {
                    "en-GB": "Head to www.boots.com, and shop till your heart’s content.",
                    "ja-JP": "www.boots.com、心ゆくまでショッピングを楽しもう。",
                },
                {
                    "en-GB": "Upon checkout, enter the voucher code where it says, “offer code”. ",
                    "ja-JP":
                        'チェックアウトの際、"offer code "と表示されているところにクーポンコードを入力してください。',
                },
                {
                    "en-GB": "Enjoy your purchase and live well, for less.",
                    "ja-JP": "購入したものを楽しみ、より安く、よりよく生きる。",
                },
            ],
            info: {
                "en-GB": "Your Reward Journey:",
                "ja-JP": "あなたの報酬の旅",
            },
        },
        denominationUnit: null,
        availableDenominations: [
            {
                _id: null,
                value: 5,
                yuCoin: 4130,
                displayName: {
                    "en-GB": "£5 Voucher",
                    "ja-JP": "5ポンドクーポン",
                },
            },
            {
                _id: generateRandomMongoId(),
                value: 10,
                yuCoin: 8260,
                displayName: {
                    "en-GB": "£10 Voucher",
                    "ja-JP": "10ポンドクーポン券",
                },
            },
            {
                _id: generateRandomMongoId(),
                value: 15,
                yuCoin: 12390,
                displayName: {
                    "en-GB": "£15 Voucher",
                    "ja-JP": "15ポンドクーポン",
                },
            },
        ],
        copy: {
            offerHeading: {
                "en-GB": "Boots Voucher",
                "ja-JP": "ブーツ引換券",
            },
            offerSubheading: {
                "en-GB": "Get vouchers from £5 for 4130 YuCoin",
                "ja-JP": "4130YuCoinで5ポンドからクーポンをゲット",
            },
            ctaLabel: {
                "en-GB": "Claim my voucher",
                "ja-JP": "バウチャーを請求する",
            },
            alertHeading: {
                "en-GB": "Claim your gift voucher",
                "ja-JP": "ギフトバウチャーを請求する",
            },
            alertSubheading: {
                "en-GB": "Do you want to claim your gift voucher",
                "ja-JP": "ギフトバウチャーを請求しますか？",
            },
            redeemCtaLabel: {
                "en-GB": "Claim my reward",
                "ja-JP": "報酬を請求する",
            },
        },
        createdAt: {
            $date: "2023-08-01T12:08:01.850Z",
        },
        updatedAt: {
            $date: "2023-08-15T00:33:50.492Z",
        },
        __v: 0,
        redemptionUrl: "https://www.boots.com/",
    },
} as IDatabaseItem;

export const CORE_REWARDS_YORK_GHI_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "64c38f7ecb39c9d50a3c14ef",
        loyaltyProgramme: [],
        restrictions: {
            availableForLabels: ["64c38f7ecb39c9d50a3c14ef_tease", "64c38f7ecb39c9d50a3c14ef_claimable"],
            restrictedForLabels: [],
            locations: ["GB"],
        },
        tags: [
            {
                "en-GB": "Health Rewards",
                "ja-JP": "健康報酬",
            },
        ],
        badge: {},
        website: {
            isFeaturedOnWebsite: true,
        },
        claimType: "unlimited",
        images: {
            detailHeaderKey: "cms/1690888164451_YorkTest.png",
            listItemImageKey: "cms/1690888163160_YorkTest GHI Tile.png",
            websiteImageKey: "",
        },
        rewardProviderId: "link",
        name: {
            "en-GB": "YorkTest",
            "ja-JP": "ヨークテスト",
        },
        code: "york",
        description: {
            "en-GB":
                "We’ve all had our “bad body days”. You know, headaches, bloating, nausea, fatigue, seemingly out of nowhere? Well it turns out, you could have a food allergy or intolerance. \n\nYou’re in luck though! YorkTest has us covered with comprehensive tests for food and allergies that take the guesswork out of your health and nutrition. It sure beats the old theory… that we’re just getting old.\n\n\n\n### Your Reward\n\n\n\nCongratulations! You’ve unlocked 40% off YorkTest’s food intolerance or allergy tests.\n\nYou can choose from YorkTest’s range of food and allergy tests; do them with your family members or partners too.\n\nDon’t worry, the kits are hassle free and easy to use. \n\nThe best part? This reward will remain unlocked from now on, get ready for your health journey to be enhanced!",
            "ja-JP":
                "私たちは皆、「体の調子が悪い日」を経験したことがある。頭痛、腹部膨満感、吐き気、疲労感など、突然のような症状だ。それは、食物アレルギーや不耐症の可能性があることがわかった。\n\nしかし、あなたは幸運です！YorkTestは、あなたの健康と栄養を推測から解放する、食品とアレルギーの包括的な検査で私たちをカバーしています。私たちはただ年をとっただけだ、という古い説に勝るものです。\n\n\n\n### ご褒美\n\n\n\nおめでとうございます！YorkTestの食物不耐症またはアレルギー検査が40%割引になりました。\n\nYorkTestのさまざまな食物検査やアレルギー検査からお好きなものをお選びください。\n\nキットは手間がかからず、使いやすいのでご安心ください。\n\n最大の魅力は？このリワードは今後もアンロックされ続けます！",
        },
        currencyCode: "GBP",
        termsAndConditionsUrl: "https://www.yorktest.com/terms-and-conditions/",
        redemptionSteps: {
            steps: [
                {
                    "en-GB": "Claim your reward!",
                    "ja-JP": "報酬を請求する",
                },
                {
                    "en-GB": "You will be taken to YorkTest’s website, www.yorktest.com.",
                    "ja-JP": "YorkTestのウェブサイトwww.yorktest.com。",
                },
                {
                    "en-GB": "Create your YorkTest account.",
                    "ja-JP": "YorkTestアカウントを作成します。",
                },
                {
                    "en-GB": "Add your chosen test to your basket.",
                    "ja-JP": "選択したテストをバスケットに入れる。",
                },
                {
                    "en-GB": "At checkout, enter the voucher code ‘YU23LIFE’.",
                    "ja-JP": "チェックアウトの際、クーポンコード「YU23LIFE」を入力してください。",
                },
                {
                    "en-GB": "Enjoy your 40% discount! (And figure out where that bloating comes from…)",
                    "ja-JP": "40％割引をお楽しみください！(そして、その膨満感はどこから来るのか？）",
                },
            ],
            info: {
                "en-GB": "Your Reward Journey:",
                "ja-JP": "あなたの報酬の旅",
            },
        },
        denominationUnit: "YorkTest Voucher",
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                yuCoin: 0,
                providerProductId: "YORKTEST",
                value: 1,
            },
        ],
        createdAt: {
            $date: "2023-07-28T09:50:54.885Z",
        },
        updatedAt: {
            $date: "2023-08-15T00:33:50.657Z",
        },
        __v: 0,
        copy: {
            offerHeading: {
                "en-GB": "YorkTest",
                "ja-JP": "ヨークテスト",
            },
            offerSubheading: {
                "en-GB": "40% off food and intolerance testing",
                "ja-JP": "食品・不耐症検査40％オフ",
            },
            ctaLabel: {
                "en-GB": "Claim my voucher",
                "ja-JP": "バウチャーを請求する",
            },
            alertHeading: {
                "en-GB": "Claim your gift voucher",
                "ja-JP": "ギフトバウチャーを請求する",
            },
            alertSubheading: {
                "en-GB": "Do you want to claim your gift voucher",
                "ja-JP": "ギフトバウチャーを請求しますか？",
            },
        },
        redemptionUrl: "https://www.yorktest.com/",
    },
} as IDatabaseItem;

export const CORE_REWARDS_BUPA_GHI_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "64a403a408975d03a0aa63ff",
        loyaltyProgramme: [],
        restrictions: {
            availableForLabels: ["64a403a408975d03a0aa63ff_tease", "64a403a408975d03a0aa63ff_claimable"],
            restrictedForLabels: [],
            locations: ["GB"],
        },
        tags: [
            {
                "en-GB": "Health Rewards",
                "ja-JP": "健康報酬",
            },
        ],
        badge: {},
        website: {
            isFeaturedOnWebsite: true,
        },
        claimType: "locked",
        images: {
            detailHeaderKey: "cms/1690887765336_bupa_header_image.png",
            listItemImageKey: "cms/1690887765353_bupa_list_image.png",
            websiteImageKey: "",
        },
        rewardProviderId: "partnerVoucher",
        name: {
            "en-GB": "Bupa Be.Motivated",
            "es-ES": "Bupa Be.Motivated",
            "ja-JP": "ビーモチベート",
        },
        code: "bupa",
        description: {
            "en-GB":
                "Life can get very busy — we hear ya — sometimes our health is the last thing on our minds. That’s why Bupa Be.Motivated brings the opportunity to you, to get ahead of your health. Not only will the assessment be comprehensive, the results from them will also be analysed and your next steps can be laid out for you. Your health advisor will also connect you with a centre nearest to you. \n\nTake this opportunity to work health into your schedule, and form healthier habits. After all, we all want to live our best lives don’t we? \n\n\n\n\n### Your Reward\n\n\n\nCongrats! You’ve unlocked a free in-person health assessment with Bupa Be.Motivated worth over £200.\n\nYou are now entitled to a comprehensive one hour health check which includes 11 core tests. After which, a Bupa Be.Motivated health adviser will discuss with you how you can set lifestyle, health, and fitness goals based on your results. Even better, they will also provide lifestyle coaching and behaviour change support for a whole year. How grand!\n\n### What Will You Be Tested For?\n\n- Height assessment \n- Weight assessment \n- Body mass index (BMI)\n- Waist to height ratio\n- Body fat percentage\n- Estimated energy requirement \n- Blood pressure test in both arms \n- Mobility and flexibility review\n- Comprehensive cholesterol profile \n- Check for Diabetes - HbA1c (non-fasting blood sugar test)\n- Lung age (if you’re a smoker or recent ex-smoker)",
            "es-ES":
                "La vida puede ser muy ajetreada - le escuchamos - a veces nuestra salud es lo último en lo que pensamos. Por eso, Bupa Be.Motivated le ofrece la oportunidad de tomar las riendas de su salud. La evaluación no sólo será exhaustiva, sino que también se analizarán los resultados y se le indicarán los pasos a seguir.\n\nAproveche esta oportunidad para incorporar la salud a su agenda y crear hábitos más saludables. Al fin y al cabo, todos queremos vivir lo mejor posible, ¿no es así?\n\n\n\n\n### Tu recompensa\n\n\n\n¡Felicidades! Ha desbloqueado una evaluación de salud gratuita en persona con Bupa Be.Motivated valorada en más de 200 £.\n\nAhora tiene derecho a un completo chequeo de salud de una hora que incluye 11 pruebas básicas. Después, un asesor de salud de Bupa Be.Motivated le explicará cómo puede establecer objetivos de estilo de vida, salud y forma física basados en sus resultados. Y lo que es aún mejor, también le proporcionará asesoramiento sobre su estilo de vida y apoyo para el cambio de comportamiento durante todo un año. ¡Grandioso!\n\n\n\n### ¿Para qué le harán las pruebas?\n\n- Estatura\n- Evaluación del peso\n- Índice de masa corporal (IMC)\n- Relación cintura-estatura\n- Porcentaje de grasa corporal\n- Necesidades energéticas estimadas\n- Prueba de tensión arterial en ambos brazos\n- Revisión de movilidad y flexibilidad\n- Perfil completo de colesterol\n- Comprobación de diabetes - HbA1c (prueba de azúcar en sangre sin ayuno)\n- Edad pulmonar (si es fumador o ex fumador reciente)",
            "ja-JP":
                "人生は非常に忙しくなることがあります - 私たちはあなたを聞く - 時には私たちの健康は私たちの頭の最後のものです。だからこそ、Bupa Be.Motivatedは、あなたの健康を先取りする機会を提供するのです。アセスメントは包括的なものであるだけでなく、アセスメント結果は分析され、あなたの次のステップが示されます。健康アドバイザーは、あなたの最寄りのセンターを紹介します。\n\nこの機会に健康をスケジュールに組み込んで、より健康的な習慣を身につけましょう。結局のところ、私たちは皆、最高の人生を送りたいと思っているのではないでしょうか？\n\n\n\n\n### ご褒美\n\n\n\nおめでとうございます！200ポンド以上の価値があるBupa Be.Motivatedの無料対面健康診断のロックを解除しました。\n\nあなたは今、11のコアテストを含む包括的な1時間の健康チェックを受ける権利があります。その後、Bupa Be.Motivatedの健康アドバイザーが、あなたの結果に基づいて、ライフスタイル、健康、フィットネスの目標をどのように設定すればよいかを相談します。さらに、ライフスタイルのコーチングと行動変容のサポートを1年間提供してくれる。どのように壮大な！\n\n### 検査項目は？\n\n- 身長測定\n- 体重測定\n- 体格指数（BMI）\n- 身長に対するウエストの比率\n- 体脂肪率\n- 推定エネルギー必要量\n- 両腕の血圧検査\n- 運動能力と柔軟性の評価\n- 包括的なコレステロールプロフィール\n- 糖尿病チェック - HbA1c（非空腹時血糖値検査）\n- 肺年齢（喫煙者または最近喫煙をやめた方）",
        },
        currencyCode: "GBP",
        termsAndConditionsUrl: "https://www.bupa.co.uk/~/media/Files/MMS/cli-00851.pdf",
        redemptionSteps: {
            steps: [
                {
                    "en-GB": "Claim your reward!",
                    "es-ES": 'Pulsa "Reclamar recompensa".',
                    "ja-JP": "報酬を請求する",
                },
                {
                    "en-GB": "Check your email, we’ve sent you the voucher code.",
                    "es-ES": "Comprueba tu correo electrónico, ¡te hemos enviado algo! (Es el código del vale).",
                    "ja-JP": "バウチャーコードをお送りしました。",
                },
                {
                    "en-GB": "Call the Bupa Clinics number on 0370 218 4965 to book your in-person health assessment.",
                    "es-ES":
                        "Llame al número de las Clínicas Bupa en XXX XXX XXXX para reservar su evaluación de salud en persona.",
                    "ja-JP": "Bupa Clinicsの電話番号0370 218 4965に電話して、対面式健康診断を予約してください。",
                },
                {
                    "en-GB":
                        "Mention that you are a YuLife member, and make sure you give the consultant your unique voucher number (in your email) to get your health assessment for free. Your membership details can be found in your Bupa Touch account.",
                    "es-ES":
                        "Mencione que es miembro de YuLife y asegúrese de dar al asesor su número de vale único (en su correo electrónico) para obtener una evaluación sanitaria gratuita.",
                    "ja-JP":
                        "ゆうらいふの会員であることを伝え、コンサルタントが無料で健康診断を受けられるように、あなた固有のバウチャー番号（Eメールに記載）を必ず伝えてください。会員情報はBupa Touchアカウントでご確認いただけます。",
                },
                {
                    "en-GB": "Enjoy your free in-person health assessment! (And, a healthy life ahead.)",
                    "es-ES": "Disfrute de su chequeo médico gratuito en persona. (Y, una vida saludable por delante).",
                    "ja-JP": "無料対面健康診断をお楽しみください！(そして、これからの健康な人生を)",
                },
            ],
            info: {
                "en-GB": "Your Reward Journey:",
                "es-ES": "Su viaje de recompensa:",
                "ja-JP": "あなたの報酬の旅",
            },
        },
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                yuCoin: 0,
                providerProductId: "BUPA_HEALTH_ASSESSMENT",
                value: 1,
            },
        ],
        createdAt: {
            $date: "2023-07-04T11:33:56.976Z",
        },
        updatedAt: {
            $date: "2023-08-15T00:33:50.544Z",
        },
        __v: 0,
        copy: {
            ctaLabel: {
                "en-GB": "Claim my voucher",
                "es-ES": "Reclamar mi vale",
                "ja-JP": "バウチャーを請求する",
            },
            alertHeading: {
                "en-GB": "Claim your gift voucher",
                "es-ES": "Reclame su cheque regalo",
                "ja-JP": "ギフトバウチャーを請求する",
            },
            alertSubheading: {
                "en-GB": "Do you want to claim your gift voucher",
                "es-ES": "¿Desea reclamar su cheque regalo?",
                "ja-JP": "ギフトバウチャーを請求しますか？",
            },
            offerSubheading: {
                "en-GB": "Claim it for free!",
                "es-ES": "Reclámelo gratis",
                "ja-JP": "無料でご請求ください！",
            },
            offerHeading: {
                "en-GB": "Bupa In-person Health Assessment ",
                "es-ES": "Evaluación de salud en persona Bupa",
                "ja-JP": "Bupa対面式健康診断",
            },
            unlockedClaimableSlogan: {
                "en-GB": "Be motivated to get your health assessed! ",
                "ja-JP": "健康診断を受ける意欲を持つ",
            },
            redeemCtaLabel: {
                "en-GB": "Claim my reward",
                "ja-JP": "報酬を請求する",
            },
        },
        denominationUnit: "Health assessment",
        redemptionUrl: null,
    },
} as IDatabaseItem;

export const CORE_REWARDS_LIVING_DNA_GHI_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "64ad4e2d87cea9cd5185cd8f",
        loyaltyProgramme: [],
        restrictions: {
            availableForLabels: ["64ad4e2d87cea9cd5185cd8f_tease", "64ad4e2d87cea9cd5185cd8f_claimable"],
            restrictedForLabels: [],
            locations: ["GB"],
        },
        tags: [
            {
                "en-GB": "Health Rewards",
                "ja-JP": "健康報酬",
            },
        ],
        badge: {},
        website: {
            isFeaturedOnWebsite: true,
        },
        claimType: "locked",
        images: {
            detailHeaderKey: "cms/1690887947360_Living DNA.png",
            listItemImageKey: "cms/1690887947354_Feed Image.png",
            websiteImageKey: "",
        },
        rewardProviderId: "livingDna",
        name: {
            "en-GB": "Living DNA",
            "ja-JP": "生きたDNA",
        },
        code: "livingDna",
        description: {
            "en-GB":
                "Have you ever wondered if you were part neanderthal; or why you just can’t seem to lose that belly fat; or why on a bad day, you can’t even remember what you ate for lunch? These seemingly unrelated things can actually be understood by analysing your DNA.\n\nLiving DNA’s world-leading ancestry and wellbeing tests not only allows you to trace your family’s regional history around the world, but also brings to light aspects of yourself you didn’t know could be measured. Their tests uncover personality traits like memory processing and imagination; nutrigenomics like your response to carbohydrates or metabolism; fitness genomics like your fat loss response to exercise; and much more.\n\nDiscover truths about your body and mind with Living DNA’s tests — and unlock your full potential!",
            "ja-JP":
                "自分はネアンデルタール人の一部なのではないか、なぜお腹の脂肪が落ちないのか、なぜ嫌なことがあると昼に何を食べたかさえ思い出せないのか、と考えたことはないだろうか。一見無関係に見えるこれらのことも、実はDNAを分析することで解明できるのだ。\n\n世界をリードするリビングDNAの先祖とウェルビーイング検査は、あなたの家族の世界中の地域の歴史をたどることができるだけでなく、あなた自身の知らなかった側面を浮き彫りにしてくれる。リビングDNAの検査は、記憶処理や想像力などの性格的特徴、炭水化物や代謝に対する反応などのニュートリゲノミクス、運動による脂肪減少反応などのフィットネスゲノミクスなどを明らかにします。\n\nリビングDNAの検査で、あなたの体と心の真実を発見し、潜在能力を最大限に引き出しましょう！",
        },
        currencyCode: "GBP",
        termsAndConditionsUrl: "https://livingdna.com/int/legal/Living-DNA-terms-of-service",
        redemptionSteps: {
            steps: [
                {
                    "en-GB": "Claim your reward!",
                    "ja-JP": "報酬を請求する",
                },
                {
                    "en-GB":
                        "Fill in your details to get your Living DNA kit ordered, and your test will be shipped to your desired address.",
                    "ja-JP": "必要事項をご記入の上、リビングDNAキットをご注文ください。",
                },
                {
                    "en-GB": "Your test kit will arrive in 3 – 5 days!",
                    "ja-JP": "検査キットは3～5日で届きます！",
                },
                {
                    "en-GB":
                        "Follow the simple instructions in your kit to activate your account and take your sample.",
                    "ja-JP":
                        "キットに記載されている簡単な手順に従って、アカウントを有効化し、サンプルを採取してください。",
                },
                {
                    "en-GB":
                        "After you’ve posted the sample, your DNA results will be accessible on your Living DNA account within 6 – 8 weeks of arrival at the lab (their scientists are hard at work processing thousands of years of DNA data for you).",
                    "ja-JP":
                        "サンプルの郵送後、DNA鑑定結果はラボ到着後6～8週間以内にLiving DNAのアカウントからアクセスできるようになります（ラボの科学者たちは、あなたのために何千年ものDNAデータを懸命に処理しています）。",
                },
                {
                    "en-GB": "Enjoy insights on your DNA!",
                    "ja-JP": "あなたのDNAに関する洞察をお楽しみください！",
                },
            ],
            info: {
                "en-GB": "Your reward journey:",
                "ja-JP": "ご褒美の旅",
            },
        },
        denominationUnit: "LivingDNA Testing Kit",
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                value: 1,
                yuCoin: 0,
            },
        ],
        createdAt: {
            $date: "2023-07-11T12:42:21.228Z",
        },
        updatedAt: {
            $date: "2023-08-15T00:33:50.547Z",
        },
        __v: 0,
        copy: {
            offerHeading: {
                "en-GB": "Living DNA Test Kit",
                "ja-JP": "リビングDNA検査キット",
            },
            offerSubheading: {
                "en-GB": "Claim it for free!",
                "ja-JP": "無料でご請求ください！",
            },
            ctaLabel: {
                "en-GB": "Claim my reward",
                "ja-JP": "報酬を請求する",
            },
            alertHeading: {
                "en-GB": "Claim your testing kit",
                "ja-JP": "検査キットを請求する",
            },
            alertSubheading: {
                "en-GB": "Do you want to claim your testing kit",
                "ja-JP": "検査キットを請求しますか？",
            },
            unlockedClaimableSlogan: {
                "en-GB": "Discover your DNA now! ",
                "ja-JP": "今すぐ自分のDNAを発見しよう！",
            },
            redeemCtaLabel: {
                "en-GB": "Claim my reward",
                "ja-JP": "報酬を請求する",
            },
        },
    },
} as IDatabaseItem;

export const CORE_REWARDS_GARMIN_GHI_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "64bf87537b74ab1ef759eece",
        loyaltyProgramme: [],
        restrictions: {
            availableForLabels: ["64bf87537b74ab1ef759eece_tease", "64bf87537b74ab1ef759eece_claimable"],
            restrictedForLabels: [],
            locations: ["GB"],
        },
        tags: [
            {
                "en-GB": "Health Rewards",
                "ja-JP": "健康報酬",
            },
        ],
        badge: {},
        website: {
            isFeaturedOnWebsite: true,
        },
        claimType: "locked",
        images: {
            detailHeaderKey: "cms/1690888099538_Garmin.png",
            listItemImageKey: "cms/1690888099528_GarminGHI Tile.png",
            websiteImageKey: "",
        },
        rewardProviderId: "partnerVoucher",
        name: {
            "en-GB": "Garmin",
            "ja-JP": "ガーミン",
        },
        code: "garmin",
        description: {
            "en-GB":
                "Walking or running won’t be the only way you can maintain your fitness tracking. If you want to go for a swim, take a dance class, do some yoga, you will be able to track your fitness goals with ease with the Forerunner 55 smartwatch. (You will now also be able to track your steps from your desk to the kitchen — without having to bring your phone.) #you’rewelcome\n\n\n### Your Reward\n\nCONGRATULATIONS! \n\nYou’ve done it. You’ve unlocked a free Garmin smartwatch worth £179.99.\n\nThis swanky timepiece comes in 4 colourways; can track your time, distance, pace, and speed, with a built in GPS; monitor your overall health and wellness with wrist-band heart rate and more; tracks more than just running with an array of built-in activity profiles; and much, much more. \n\nOR\n\nIf you'd prefer — and don't need a smartwatch — you can also choose to donate £100 to the children of Great Ormand Street Hospital (GOSH). You won't be able to claim the smartwatch at a later date after donating, but you'll be giving hundreds of children the chance to live to their full potential!\n",
            "ja-JP":
                "ウォーキングやランニングだけが、フィットネス・トラッキングを維持する唯一の方法ではない。水泳やダンス、ヨガなど、Forerunner 55スマートウォッチがあれば、フィットネス目標を簡単にトラッキングできる。(デスクからキッチンまで、携帯電話を持っていかなくても歩数を記録できるようになります)。#ようこそ\n\n\n### ご褒美\n\nおめでとうございます！\n\nおめでとうございます。179.99ポンド相当のGarminスマートウォッチを無料でアンロックしました。\n\nこの洒落た時計には4つのカラーバリエーションがあり、内蔵GPSで時間、距離、ペース、スピードを追跡し、リストバンド心拍数などで全体的な健康とウェルネスをモニターし、内蔵アクティビティ・プロファイルの数々でランニング以外のことも追跡できる。\n\nまたは\n\nスマートウォッチでなくてもよいという方は、100ポンドをグレート・オーマンド・ストリート病院（GOSH）の子どもたちに寄付することもできます。寄付後、後日スマートウォッチを受け取ることはできませんが、何百人もの子どもたちに可能性を最大限に発揮して生きるチャンスを与えることになります！\n",
        },
        currencyCode: "GBP",
        termsAndConditionsUrl: "https://www.garmin.com/en-GB/legal/shopterms/",
        redemptionSteps: {
            steps: [
                {
                    "en-GB": "Make your selection of a Garmin smartwatch or GOSH donation by claiming your reward!",
                    "ja-JP": "ガーミン・スマートウォッチまたはGOSHの寄付のいずれかを選択し、報酬を請求してください！",
                },
                {
                    "en-GB": "Check your email, we sent you something! (It’s the voucher code.)",
                    "ja-JP": "メールをチェックしてください！(クーポンコードです)",
                },
                {
                    "en-GB": "Head to Garmin’s website, www.garmin.com.",
                    "ja-JP": "ガーミンのウェブサイトwww.garmin.com。",
                },
                {
                    "en-GB": "Choose your Garmin Forerunner 55 colour way. ",
                    "ja-JP": "Garmin Forerunner 55のカラーをお選びください。",
                },
                {
                    "en-GB": "At checkout, enter your unique voucher code. ",
                    "ja-JP": "チェックアウトの際に、固有のクーポンコードを入力してください。",
                },
                {
                    "en-GB": "Enjoy your Garmin Forerunner 55 Smartwatch free of charge!",
                    "ja-JP": "Garmin Forerunner 55スマートウォッチを無料でお楽しみください！",
                },
            ],
            info: {
                "en-GB": "Your Reward Journey:",
                "ja-JP": "あなたの報酬の旅",
            },
        },
        denominationUnit: "Watch",
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                yuCoin: 0,
                providerProductId: "GARMIN_GB",
                value: 1,
            },
        ],
        createdAt: {
            $date: "2023-07-25T08:26:59.950Z",
        },
        updatedAt: {
            $date: "2023-08-15T00:33:50.513Z",
        },
        __v: 0,
        copy: {
            offerSubheading: {
                "en-GB": "Claim it for free!",
                "ja-JP": "無料でご請求ください！",
            },
            offerHeading: {
                "en-GB": "Garmin Smartwatch",
                "ja-JP": "ガーミン・スマートウォッチ",
            },
            ctaLabel: {
                "en-GB": "Claim my voucher",
                "ja-JP": "バウチャーを請求する",
            },
            alertHeading: {
                "en-GB": "Claim your gift voucher",
                "ja-JP": "ギフトバウチャーを請求する",
            },
            alertSubheading: {
                "en-GB": "Do you want to claim your gift voucher",
                "ja-JP": "ギフトバウチャーを請求しますか？",
            },
            unlockedClaimableSlogan: {
                "en-GB": "Get your Garmin!",
                "ja-JP": "ガーミンを手に入れよう！",
            },
            redeemCtaLabel: {
                "en-GB": "Claim my reward",
                "ja-JP": "報酬を請求する",
            },
        },
        alternativeClaim: {
            alternativeRewardId:"6512f45770c344f66a694f54",
            optionPrimaryLabel: {
                "en-GB": "Get my Garmin",
                "es-ES": "Conseguir mi Garmin",
            },
            optionAlternativeLabel: {
                "en-GB": "Make a GOSH donation instead",
                "es-ES": "Haz una donación a GOSH",
            },
        },
    },
} as IDatabaseItem;

export const CORE_REWARDS_THRIVA_GHI_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "64b7b195a85859af773442e4",
        loyaltyProgramme: [],
        restrictions: {
            availableForLabels: ["64b7b195a85859af773442e4_tease", "64b7b195a85859af773442e4_claimable"],
            restrictedForLabels: [],
            locations: ["GB"],
        },
        tags: [
            {
                "en-GB": "Health Rewards",
                "ja-JP": "健康報酬",
            },
        ],
        badge: {},
        website: {
            isFeaturedOnWebsite: true,
        },
        claimType: "locked",
        images: {
            detailHeaderKey: "imgixGlobal::cms/1690888021390_Thriva.png",
            listItemImageKey: "imgixGlobal::cms/1690888021357_Feed Image (1).png",
            websiteImageKey: "",
        },
        rewardProviderId: "partnerVoucher",
        name: {
            "en-GB": "Thriva",
            "es-ES": "Thriva",
            "ja-JP": "トリバ",
        },
        code: "thriva",
        description: {
            "en-GB":
                "We know. A blood test can sound scary; but let’s B positive — it’s only a little finger prick. What you get in return are insights about your health that can help you make decisions for your future wellbeing. After all, prevention is a whole lot better than cure.\n\n### \n\n### Your reward\n\nCongratulations! You’ve unlocked a take-home blood test kit from Thriva worth £73.\n\nOf course, it doesn’t just stop there (that’d be silly). In return for your blood sample, you’ll get a GP report back. \n\nYou’ll be able to access these documents through your Thriva account — which you will create on your claiming journey.\n\n### \n\n### What will you be tested for?\n\n* Ferritin C - understand your iron levels, which can affect your energy, sleep, or heart health.\n* Cholesterol - understand your heart health through this essential fat.\n* Liver profile - understand your liver health as an indicator for long-term health.\n* Creatinine and eGFR - understand your kidney function, another indicator for long-term health.\n* HbA1c - understand your diabetes risk with your average blood glucose levels.",
            "es-ES":
                "Lo sabemos. Un análisis de sangre puede dar miedo, pero seamos positivos: es sólo un pequeño pinchazo en el dedo. Lo que obtienes a cambio es información sobre tu salud que puede ayudarte a tomar decisiones para tu bienestar futuro. Al fin y al cabo, más vale prevenir que curar.\n\n## Tu recompensa\n\n¡Enhorabuena! Has desbloqueado un kit de análisis de sangre para llevar a casa de Thriva valorado en 73 £.\n\nPor supuesto, la cosa no acaba aquí (sería una tontería). A cambio de tu muestra de sangre, recibirás un informe médico.\n\nPodrás acceder a estos documentos a través de tu cuenta de Thriva, que se abrirá en tu nombre tras rellenar algunos datos con nosotros. (Te lo ponemos lo más fácil posible, de nada).\n\n## ¿Qué pruebas se le realizarán?\n\n- Ferritina C: conozca sus niveles de hierro, que pueden afectar a su energía, sueño o salud cardiaca.\n- Colesterol: conozca la salud de su corazón a través de esta grasa esencial.\n- Perfil hepático: conozca la salud de su hígado como indicador de su salud a largo plazo.\n- Creatinina y eGFR: conozca su función renal, otro indicador de salud a largo plazo.\n- HbA1c: conozca su riesgo de diabetes gracias a sus niveles medios de glucosa en sangre.",
            "ja-JP":
                "私たちは知っている。血液検査は怖いと思われるかもしれませんが、前向きに考えましょう。その見返りとして得られるのは、あなたの健康についての洞察であり、将来の健康のための決断に役立つものです。結局のところ、予防は治療に勝るのです。\n\n## ご褒美\n\nおめでとうございます！Thrivaの家庭用血液検査キット73ポンド相当を獲得しました。\n\nもちろん、それだけでは終わりません（バカバカしい）。血液サンプルの見返りとして、GPレポートが戻ってきます。\n\nこれらの書類にはThrivaのアカウントからアクセスすることができます。(私たちはできるだけ手間をかけないようにしています。）\n\n## 何を検査されますか？\n\n- フェリチンC - エネルギー、睡眠、または心臓の健康に影響を与える可能性のある鉄のレベルを把握します。\n- コレステロール-この必須脂肪を通して心臓の健康状態を把握します。\n- 肝臓プロファイル - 長期的な健康の指標として肝臓の健康状態を把握します。\n- クレアチニンとeGFR-長期的な健康のもう一つの指標である腎機能を把握します。\n- HbA1c-平均血糖値から糖尿病リスクを把握します。",
        },
        currencyCode: "GBP",
        termsAndConditionsUrl: "https://s3-eu-west-1.amazonaws.com/thriva/legal/Customer+Terms+and+Conditions.pdf",
        redemptionSteps: {
            steps: [
                {
                    "en-GB": "Claim your reward!",
                    "es-ES": "¡Reclama tu recompensa!",
                    "ja-JP": "報酬を請求する",
                },
                {
                    "en-GB": "You will be taken to Thriva’s website, thriva.co.",
                    "es-ES":
                        "Rellene sus datos para configurar su cuenta Thriva, y su prueba será enviada a la dirección que desee.",
                    "ja-JP":
                        "あなたの詳細情報を入力し、Thrivaアカウントを設定すると、テストはあなたの希望する住所に発送されます。",
                },
                {
                    "en-GB": "Add the specialised-for-YuLife Thriva test kit to your cart.",
                    "es-ES": "Comprueba tu correo electrónico, te hemos enviado un enlace al sitio web de Thriva.",
                    "ja-JP": "スリバのウェブサイトへのリンクを送りましたので、メールをチェックしてください。",
                },
                {
                    "en-GB": "Secure your checkout by creating your Thriva account.",
                    "es-ES": "Cree su cuenta Thriva.",
                    "ja-JP": "Thrivaアカウントを作成してください。",
                },
                {
                    "en-GB": "Check your email, we’ve sent you the voucher code.",
                    "es-ES": "Espere entre 3 y 5 días. Su kit de prueba llegará, ¡se lo prometemos!",
                    "ja-JP": "検査キットは3～5日で届きます！",
                },
                {
                    "en-GB": "At checkout, enter your unique voucher code to receive your free kit.",
                    "es-ES":
                        "Una vez que haya enviado la muestra de sangre, podrá acceder al informe del médico de cabecera en su cuenta de Thriva transcurridos 10 días laborables.\n¡Disfrute de sus conocimientos sobre salud!",
                    "ja-JP":
                        "血液サンプルの提出後、10営業日後にあなたのスリヴァ・アカウントからGPレポートにアクセスできるようになります。",
                },
                {
                    "en-GB": "Your test kit will arrive in 2 – 4 days!",
                    "ja-JP": "健康への洞察を楽しもう！",
                },
                {
                    "en-GB":
                        "After you’ve posted the blood sample, the GP report will be accessible on your Thriva account after 2 working days.",
                    "ja-JP":
                        "血液サンプルの提出後、2営業日後にあなたのスリヴァ・アカウントからGPレポートにアクセスできるようになります。",
                },
                {
                    "en-GB": "Enjoy your health insights!",
                    "ja-JP": "健康への洞察を楽しもう！",
                },
            ],
            info: {
                "en-GB": "Your reward journey:",
                "es-ES": "Su viaje de recompensa:",
                "ja-JP": "あなたの報酬の旅",
            },
        },
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                yuCoin: 0,
                value: 1,
                providerProductId: "THRIVA_FREE_UK",
            },
        ],
        createdAt: {
            $date: "2023-07-19T09:49:09.868Z",
        },
        updatedAt: {
            $date: "2023-09-22T00:33:50.641Z",
        },
        __v: 0,
        denominationUnit: {
            "en-GB": "Thriva Testing kit",
            "ja-JP": "トリバ検査キット",
        },
        copy: {
            offerSubheading: {
                "en-GB": "Claim it for free!",
                "es-ES": "Reclámelo gratis",
                "ja-JP": "無料でご請求ください！",
            },
            offerHeading: {
                "en-GB": "Thriva Blood Test Kit",
                "es-ES": "Kit de análisis de sangre Thriva",
                "ja-JP": "スリバ血液検査キット",
            },
            ctaLabel: {
                "en-GB": "Claim my kit",
                "es-ES": "Reclamar mi kit",
                "ja-JP": "キットを請求する",
            },
            alertHeading: {
                "en-GB": "Claim your kit",
                "es-ES": "Reclame su kit",
                "ja-JP": "キットを請求する",
            },
            alertSubheading: {
                "en-GB": "Do you want to claim your kit",
                "es-ES": "¿Desea reclamar su kit",
                "ja-JP": "キットを請求しますか？",
            },
            unlockedClaimableSlogan: {
                "en-GB": "Insights on your health await! ",
                "es-ES": "¡Le esperan ideas sobre su salud!",
                "ja-JP": "あなたの健康についての洞察が待っている！",
            },
            redeemCtaLabel: {
                "en-GB": "Claim my reward",
                "es-ES": "Reclamar mi recompensa",
                "ja-JP": "報酬を請求する",
            },
        },
    },
} as IDatabaseItem;

export const CORE_REWARDS_GOSH_GHI_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "6512f45770c344f66a694f54",
        loyaltyProgramme: [],
        restrictions: {
            availableForLabels: ["alternativeClaim"],
            restrictedForLabels: [],
            locations: ["GB"],
        },
        tags: [],
        badge: {},
        website: {
            isFeaturedOnWebsite: false,
        },
        claimType: "locked",
        images: {
            detailHeaderKey: "imgixGlobal::cms/1695987416025_GOSH.png",
            listItemImageKey: "imgixGlobal::cms/1695987416650_GOSH.png",
            websiteImageKey: "",
        },
        rewardProviderId: "link",
        name: {
            "en-GB": "GOSH",
            "es-ES": "GOSH",
        },
        code: "gosh",
        description: {
            "en-GB": ".",
            "es-ES": ".",
        },
        redemptionUrl: null,
        currencyCode: "GBP",
        termsAndConditionsUrl: "https://www.gosh.org/charity-terms-and-conditions/",
        shouldCountTowardsDonations: true,
        availableDenominations: [
            {
                _id: generateRandomMongoId(),
                displayName: {
                    "en-GB": "£",
                    "es-ES": "£",
                },
                yuCoin: 0,
                value: 100,
            },
        ],
        copy: {
            alertHeading: {
                "en-GB": "Are you sure?",
                "es-ES": "¿Seguro?",
            },
            alertSubheading: {
                "en-GB": "You won't be able to get a Garmin if you donate to GOSH:",
                "es-ES": "No podrás conseguir un Garmin si donas a GOSH:",
            },
            redeemCtaLabel: null,
            unlockedClaimableSlogan: null,
            alertOkLabel: {
                "en-GB": "Make donation 💖",
                "es-ES": "Hacer donación 💖",
            },
            alertCancelLabel: null,
            ctaLabel: null,
        },
        redemptionSteps: {
            steps: [],
            info: {
                "en-GB": "Redeem",
                "es-ES": "Canjear",
            },
        },
        customConfirmation: {
            title: {
                "en-GB": "Thank you for your donation!",
                "es-ES": "Gracias por su donación.",
            },
            description: {
                "en-GB":
                    "Your donation will help to give support to seriously ill children and their families, offering them the best chance to fulfil their potential. To learn more about GOSH's work and how your donation will make a difference, please click [here](https://www.gosh.org/what-we-do/).",
                "es-ES":
                    "Su donación ayudará a prestar apoyo a los niños gravemente enfermos y a sus familias, ofreciéndoles la mejor oportunidad de desarrollar todo su potencial. Para saber más sobre el trabajo de GOSH y cómo su donación marcará la diferencia, haga clic [aquí](https://www.gosh.org/what-we-do/).",
            },
        },
        createdAt: {
            $date: "2023-09-26T15:10:15.997Z",
        },
        updatedAt: {
            $date: "2023-10-17T05:37:05.896Z",
        },
        __v: 0,
        denominationUnit: {
            "en-GB": "£ Donation to GOSH",
            "es-ES": "£ Donación a GOSH",
        },
        archived: false,
        alternativeClaim: null,
        donationType: "charity",
    },
} as IDatabaseItem;

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
                    "en-GB": "Add the Ordo products you want to purchase from the YuLife collection to your basket.",
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

export const CORE_REWARDS_BUPA_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        _id: "670fd48d23f0dacc22e2ecf0",
        code: "BUPAHA30%",
        rewardProviderId: "link",
        loyaltyProgramme: [],
        redemptionUrl: "https://www.bupa.co.uk/health/health-assessments/compare-health-assessments-yulife",
        currencyCode: "GBP",
        images: {
          "listItemImageKey": "imgixGlobal::cms/1729090410936_1712738847582_Bupa health assesment.png",
          "detailHeaderKey": "imgixGlobal::cms/1729090406831_1712738836108_Bupa health assesment.png",
          "websiteImageKey": ""
        },
        name: {
          "en-GB": "Bupa health assessments",
          "_id": generateRandomMongoId(),
          "ja-JP": "ブパ"
        },
        description: {
          "en-GB": "Ready to unlock your healthiest, happiest self? \n\nIt's time to take a proactive step towards your wellbeing. These comprehensive health checks are packed with medical and non-invasive tests, including a diabetes test, a thorough cholesterol profile, a mobility and flexibility review, plus many more!\n\nBupa's skilled nurses and health advisers are ready to guide you through your assessment, providing a clear overview of your health and wellbeing. Got any specific health concerns? They're all ears! \n\nAnd if you need further treatment or diagnostic tests, they've got you covered with arrangements for NHS follow-up appointments or private GP referrals. But the journey doesn't stop there! Your assessment also includes a 12-month expert health and wellbeing support to help you smash your long-term health and fitness goals.\n\n### Your reward\n\nYou've unlocked 30% off a range of Bupa health assessments!",
          "_id": generateRandomMongoId(),
          "ja-JP": "\"最も健康で幸せな自分を解き放つ準備はできているか？\n\n健康への積極的な一歩を踏み出す時です。この包括的な健康チェックには、糖尿病検査、徹底的なコレステロール・プロファイル、運動能力と柔軟性の見直しなど、医学的かつ非侵襲的な検査が満載です！\n\nブパの熟練した看護師と健康アドバイザーが、あなたの健康とウェルビーイングの明確な概要を提供し、あなたの評価を通してあなたを導く準備ができています。特定の健康上の懸念事項がありますか？何でもお聞かせください！\n\nさらに治療や診断テストが必要な場合は、NHSのフォローアップ予約やプライベートGPの紹介を手配します。しかし、旅はそこで終わりません！あなたのアセスメントには、長期的な健康とフィットネスの目標を達成するための12ヶ月間の専門家による健康とウェルビーイングのサポートも含まれています。\n\n### 報酬\n\nBupa健康アセスメントを30%割引でご利用いただけます！\n"
        },
        redemptionSteps: {
          "info": {
            "en-GB": "How to redeem",
            "_id": generateRandomMongoId(),
            "ja-JP": "換金方法"
          },
          "steps": [
            {
              "en-GB": "Claim your reward!",
              "_id": generateRandomMongoId(),
              "ja-JP": "1.報酬を請求する！"
            },
            {
              "en-GB": "You will land on a Bupa-YuLife page where you can browse a range of health assessments.",
              "_id": generateRandomMongoId(),
              "ja-JP": "2.Bupa-YuLifeのページに移動し、様々な健康評価を閲覧することができます。"
            },
            {
              "en-GB": "Once you have selected your assessment, copy the discount code associated with your test.",
              "_id": generateRandomMongoId(),
              "ja-JP": "3.評価を選択したら、試験に関連する割引コードをコピーします。"
            },
            {
              "en-GB": "You can choose to make your booking through telephone or email.",
              "_id": generateRandomMongoId(),
              "ja-JP": "4.ご予約は電話またはEメールからお選びいただけます。"
            },
            {
              "en-GB": "To make your booking via telephone: use the number on the Bupa-YuLife page.",
              "_id": generateRandomMongoId(),
              "ja-JP": "5.お電話でのご予約：ブッパ・ユーライフのページに記載されている電話番号をご利用ください。"
            },
            {
              "en-GB": "Confirm with Bupa that you are a YuLife member and that you want to self-pay for a health assessment.",
              "_id": generateRandomMongoId(),
              "ja-JP": "6.Bupaに、あなたがYuLife会員であり、健康診断の自己負担を希望していることを確認します。"
            },
            {
              "en-GB": "Bupa will help you setup your account, discuss the product range with you, and help you set up an appointment.",
              "_id": generateRandomMongoId(),
              "ja-JP": "7.Bupaは、あなたのアカウントを設定し、製品の範囲についてあなたと議論し、あなたが予約を設定するのに役立ちます。"
            },
            {
              "en-GB": "You payment details will be taken but payment will only be made the day of the appointment.",
              "_id": generateRandomMongoId(),
              "ja-JP": "8.お支払いの詳細をお伺いしますが、お支払いは予約日当日のみとなります。"
            },
            {
              "en-GB": "You will receive an email on your appointment details and next steps.",
              "_id": generateRandomMongoId(),
              "ja-JP": "9.予約の詳細と次のステップについてEメールが届きます。"
            },
            {
              "en-GB": "To make a booking via email: tap the 'Email us' button. Fill in your contact information on the landing page.",
              "_id": generateRandomMongoId(),
              "ja-JP": "10.Eメールで予約する場合：「Eメールする」ボタンをタップします。ランディングページで連絡先情報を入力します。"
            },
            {
              "en-GB": "Bupa will call you within 24 hours to take you through steps 6 – 9 above.",
              "_id": generateRandomMongoId(),
              "ja-JP": "11.Bupaから24時間以内にお電話を差し上げ、上記のステップ6～9をご案内します。"
            },
            {
              "en-GB": "Enjoy insights into your health!",
              "_id": generateRandomMongoId(),
              "ja-JP": "12.健康についての洞察を楽しむ！"
            }
          ]
        },
        termsAndConditionsUrl: "https://www.bupa.co.uk/health/health-assessments/ha-frequently-asked-questions",
        restrictions: {
          "availableForLabels": [
            "670fd48d23f0dacc22e2ecf0_tease",
            "670fd48d23f0dacc22e2ecf0_claimable"
          ],
          "restrictedForLabels": [],
          "locations": [
            "GB"
          ]
        },
        tags: [
          {
            "en-GB": "Income Protection",
            "_id": generateRandomMongoId(),
            "ja-JP": "ウェルビーイング"
          }
        ],
        badge: {
          "name": {
            "en-GB": "New",
            "_id": generateRandomMongoId(),
            "ja-JP": "新しい"
          },
          "colour": "#E30D76"
        },
        website: {
          "isFeaturedOnWebsite": true
        },
        claimType: "unlimited",
        availableDenominations: [
          {
            "yuCoin": 0,
            "value": 0,
            "_id": generateRandomMongoId(),
          }
        ],
        copy: {
          "alertHeading": {
            "en-GB": "Confirm your reward claim",
            "_id": generateRandomMongoId(),
            "ja-JP": "報酬請求の確認"
          },
          "alertSubheading": {
            "en-GB": "Tap 'Confirm' to get up to 30% off a range of Bupa Health Assessments. ",
            "_id": generateRandomMongoId(),
            "ja-JP": "確認」をタップすると、さまざまなBupa健康診断が最大30%割引になります。"
          },
          "offerHeading": {
            "en-GB": "Health check discount",
            "_id": generateRandomMongoId(),
            "ja-JP": "健康診断割引"
          },
          "offerSubheading": {
            "en-GB": "Claim up to 30% off a range of health assessments! ",
            "_id": generateRandomMongoId(),
            "ja-JP": "各種健康診断が最大30％割引！"
          }
        }
      }
} as IDatabaseItem;

export const CORE_REWARDS_SCAN_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        "_id": "670fd5bf23f0dacc22e2ed25",
        "code": "SCAN.COM",
        "rewardProviderId": "link",
        "loyaltyProgramme": [],
        "currencyCode": "GBP",
        "images": {
          "listItemImageKey": "imgixGlobal::cms/1729090814564_1688993880405_Scan.com_Feature.png",
          "detailHeaderKey": "imgixGlobal::cms/1729090807789_1688993888349_scan.com_Reward List.png",
          "websiteImageKey": ""
        },
        "name": {
          "en-GB": "Scan.com",
          "_id": generateRandomMongoId(),
          "ja-JP": "スキャン・ドット・コム"
        },
        "description": {
          "en-GB": "Scan.com provides quick and easy access to affordable private medical scans with no need for a GP referral and no waiting lists. Get access to a host of other benefits that you won’t find anywhere else including:\n\n- Pre and post scan consultations with a clinician\n- Digital scan images\n- Radiologist report\n- Report powered by Scanslated (a user-friendly interactive scan report) \n\nWhat’s more, if you can find a like for like scan cheaper elsewhere, Scan.com will refund the difference! \n\n### Your reward\n\nYou've unlocked 15% off Scan.com!",
          "_id": generateRandomMongoId(),
          "ja-JP": "Scan.comは、GPの紹介も待ち時間も不要で、お手頃価格のプライベート医療スキャンを素早く簡単にご利用いただけます。  YuLife会員になると、スキャン料金が最大15％割引になるほか、以下のような他では得られない特典があります：\n\n- 医師によるスキャン前後のコンサルテーション\n- デジタル画像\n- 放射線科医によるレポート\n- Scanslatedによるレポート（ユーザーフレンドリーなインタラクティブ・スキャン・レポート）\n\nさらに、Scan.comでは、他でより安い同種のスキャンが見つかった場合、差額を返金いたします！"
        },
        "copy": {
          "ctaLabel": {
            "en-GB": null,
            "_id": generateRandomMongoId(),
            "ja-JP": "報酬を請求する"
          },
          "alertHeading": {
            "en-GB": "Confirm your reward claim",
            "_id": generateRandomMongoId(),
            "ja-JP": "報酬請求の確認"
          },
          "alertSubheading": {
            "en-GB": "Tap 'Confirm' to get up to 15% off private medical scans.",
            "_id": generateRandomMongoId(),
            "ja-JP": "Scan.comにリダイレクトされます。"
          },
          "offerHeading": {
            "en-GB": "Scan.com discount",
            "_id": generateRandomMongoId(),
            "ja-JP": "スキャン・ドット・コム"
          },
          "offerSubheading": {
            "en-GB": "Claim 15% off private medical scans!",
            "_id": generateRandomMongoId(),
            "ja-JP": "プライベート・メディカル・スキャンが最大15％オフ"
          }
        },
        "redemptionSteps": {
          "info": {
            "en-GB": "How to redeem",
            "_id": generateRandomMongoId(),
            "ja-JP": "換金方法"
          },
          "steps": [
            {
              "en-GB": "Claim your reward!",
              "_id": generateRandomMongoId(),
              "ja-JP": "下の「報酬を請求する」をタップしてください。"
            },
            {
              "en-GB": "Select your desired scan and a location, proce, and appointment that suits you.",
              "_id": generateRandomMongoId(),
              "ja-JP": "必要なスキャンを検索し、あなたに合った場所、料金、予約を選択してください。"
            },
            {
              "en-GB": "Your discount will be applied automatically at checkout.",
              "_id": generateRandomMongoId(),
              "ja-JP": "安全に関する質問にお答えいただき、お支払いをお済ませいただくと、チェックアウト時に自動的に最大15％のYuLife割引が適用されます。"
            },
            {
              "en-GB": "Within 2 days you'll receive a phone consultation with an expert clinician who will ask about your symptoms and complete your referral.",
              "_id": generateRandomMongoId(),
              "ja-JP": "安全に関する質問にお答えいただき、お支払いをお済ませいただくと、チェックアウト時に自動的に最大15％のYuLife割引が適用されます。"
            },
            {
              "en-GB": "After referral, your chosen scanning site will call you to offer a choice of appointment times. Please note that some sites will allow you to pre-select the time of your scan at the point of booking.",
              "_id": generateRandomMongoId(),
              "ja-JP": "紹介後、選択されたスキャン施設から電話連絡があり、予約時間の選択ができます。サイトによっては、予約時にスキャン時間を事前に選択できるところもありますので、ご注意ください。"
            },
            {
              "en-GB": "You will receive a confirmation email once your time slot has been booked.",
              "_id": generateRandomMongoId(),
              "ja-JP": "予約完了後、確認のメールをお送りします。"
            },
            {
              "en-GB": "Visit your selected scanning centre to have your scan.",
              "_id": generateRandomMongoId(),
              "ja-JP": "選択したスキャンセンターでスキャンを受けてください。"
            },
            {
              "en-GB": "After your scan you will receive your results via email. You can also request copies of your images if needed for onward care. If any abnormalities are found you will be contacted by a clinician to discuss the next steps.",
              "_id": generateRandomMongoId(),
              "ja-JP": "スキャン後、Eメールで結果が届きます。その後のケアに必要であれば、画像のコピーを請求することもできます。異常が見つかった場合は、次のステップについて医師からご連絡いたします。"
            }
          ]
        },
        "termsAndConditionsUrl": "https://uk.scan.com/?ref=YULIFE",
        "restrictions": {
          "availableForLabels": [
            "670fd5bf23f0dacc22e2ed25_tease",
            "670fd5bf23f0dacc22e2ed25_claimable",
            "MetLife_GIP"
          ],
          "restrictedForLabels": [],
          "locations": [
            "GB"
          ]
        },
        "tags": [
          {
            "en-GB": "Income Protection",
            "_id": generateRandomMongoId(),
            "ja-JP": "ウェルビーイング"
          }
        ],
        "badge": {
          "colour": "#E30D76"
        },
        "website": {
          "isFeaturedOnWebsite": true
        },
        "claimType": "unlimited",
        "availableDenominations": [
          {
            "yuCoin": 0,
            "value": 0,
            "_id": generateRandomMongoId(),
          }
        ],
        "redemptionUrl": "https://uk.scan.com/?ref=YULIFE"
      }
} as IDatabaseItem;

export const CORE_REWARDS_MEDITOPIA_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        "_id": "670fd85e23f0dacc22e2edcb",
        "code": "MEDITOPIA-GIP",
        "rewardProviderId": "partnerVoucher",
        "loyaltyProgramme": [],
        "redemptionUrl": "https://go.meditopia.com/code",
        "currencyCode": "GBP",
        "images": {
          "listItemImageKey": "imgixGlobal::cms/1729091290896_Meditopia (1).png",
          "detailHeaderKey": "imgixGlobal::cms/1729091400781_MEDITOPIA (2).png",
          "websiteImageKey": ""
        },
        "name": {
          "en-GB": "Meditopia",
          "_id": generateRandomMongoId(),
          "ja-JP": "メディオトピア"
        },
        "description": {
          "en-GB": "Meditopia premium includes unlimited access to thousands of daily meditations and resources to find peace and improve your wellbeing.\n\nWith Meditopia:\n- Sleep well at night with sleep stories\n- Listen to a new and personalised meditation every day\n- The biggest and most exclusive content library in the world\n- Relax with new music and nature sounds every month\n- Download content to use offline \n\nWhether you’re looking to find inner peace, improve your sleep, or cultivate mindfulness, Meditopia supports your journey towards a healthier mind and body.\n\n## Your reward\n\nYou've unlocked a 12-month Meditopia premium subscription!\n\nPlease note: If you are a current user of Meditopia premium, you'll have to wait until your subscription ends before you can apply this offer.",
          "_id": generateRandomMongoId(),
          "ja-JP": "「Meditopiaプレミアムでは、何千もの毎日の瞑想と、安らぎを見つけウェルビーイングを向上させるためのリソースに無制限にアクセスできます。\n\nメディトピアで\n- スリープストーリーで夜ぐっすり眠る\n- 毎日新しい自分だけの瞑想を聞くことができます。\n- 世界最大級の限定コンテンツライブラリー\n- 毎月新しい音楽や自然音でリラックス\n- コンテンツをダウンロードしてオフラインで利用\n\n心の平和を見つけたい方、睡眠を改善したい方、マインドフルネスを身につけたい方、Meditopiaはあなたの心と体の健康への旅をサポートします。\n\n## ご褒美\n\nメディトピア・プレミアム12ヶ月分（51ポンド相当）がアンロックされました！\n\n注意：現在メディトピア・プレミアムをご利用中の方は、この特典を適用する前にサブスクリプションが終了するまで待つ必要があります。\""
        },
        "copy": {
          "voucherCodeTitle": {
            "en-GB": "Voucher Code",
            "_id": generateRandomMongoId(),
            "ja-JP": "クーポンコード"
          },
          "alertHeading": {
            "en-GB": "Confirm your reward claim",
            "_id": generateRandomMongoId(),
            "ja-JP": "今すぐ請求しよう！"
          },
          "alertSubheading": {
            "en-GB": "By claiming this reward you will receive your voucher code.",
            "_id": generateRandomMongoId(),
            "ja-JP": "確認する」をタップして、12ヶ月の無料プレミアムメディトピア購読をお申し込みください。"
          },
          "offerHeading": {
            "en-GB": "Free Meditopia subscription",
            "_id": generateRandomMongoId(),
            "ja-JP": "メディトピア無料購読"
          },
          "offerSubheading": {
            "en-GB": "Claim your 12-month premium subscription!",
            "_id": generateRandomMongoId(),
            "ja-JP": "12ヶ月のプレミアム購読をお申し込みください！"
          },
          "purchaseHeading": {
            "en-GB": "12-month Meditopia premium voucher",
            "_id": generateRandomMongoId(),
            "ja-JP": "メディトピアプレミアム12ヶ月券"
          }
        },
        "redemptionSteps": {
          "info": {
            "en-GB": "How to redeem",
            "_id": generateRandomMongoId(),
            "ja-JP": "換金方法"
          },
          "steps": [
            {
              "en-GB": "Claim your reward!",
              "_id": generateRandomMongoId(),
              "ja-JP": "1.報酬を請求する！"
            },
            {
              "en-GB": "Copy your unique code (we also sent it to your email).",
              "_id": generateRandomMongoId(),
              "ja-JP": "2.バウチャーコードをお送りしますので、メールをご確認ください。"
            },
            {
              "en-GB": "Continue to Meditopia and redeem your code.",
              "_id": generateRandomMongoId(),
              "ja-JP": "3.表示されたページでコードを入力してください。"
            },
            {
              "en-GB": "Create an account if you don't have one.",
              "_id": generateRandomMongoId(),
              "ja-JP": "4.アカウントを作成する。"
            },
            {
              "en-GB": "Download the Meditopia app, sign in, and enjoy your 12-month premium subscription!",
              "_id": generateRandomMongoId(),
              "ja-JP": "5.アプリをダウンロードし、12ヶ月のプレミアムメンバーシップをお楽しみください！"
            }
          ]
        },
        "termsAndConditionsUrl": "https://web.meditopia.com/en/eu/terms/",
        "restrictions": {
          "availableForLabels": [
            "670fd85e23f0dacc22e2edcb_tease",
            "670fd85e23f0dacc22e2edcb_claimable",
            "MetLife_GIP"
          ],
          "restrictedForLabels": [],
          "locations": [
            "GB"
          ]
        },
        "tags": [
          {
            "en-GB": "Income Protection",
            "_id": generateRandomMongoId(),
            "ja-JP": "所得補償"
          }
        ],
        "website": {
          "isFeaturedOnWebsite": true
        },
        "claimType": "locked",
        "availableDenominations": [
          {
            "yuCoin": 0,
            "value": 0,
            "providerProductId": "MEDITOPIA_12_MONTH",
            "_id": null
          }
        ],
        "failedClaimCount": 0
      }
} as IDatabaseItem;

export const CORE_REWARDS_BETTERHELP_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        "_id": "670fdd6523f0dacc22e2ef2c",
        "code": "BETTERHELP-GIP",
        "rewardProviderId": "link",
        "loyaltyProgramme": [],
        "redemptionUrl": "https://hasofferstracking.betterhelp.com/aff_c?offer_id=40&aff_id=4268&source=yulife15",
        "currencyCode": "GBP",
        "images": {
          "listItemImageKey": "imgixGlobal::cms/1729092782897_download (1).png",
          "detailHeaderKey": "imgixGlobal::cms/1729092776647_download (1).png",
          "websiteImageKey": ""
        },
        "name": {
          "en-GB": "BetterHelp",
          "_id": generateRandomMongoId(),
          "ja-JP": "ベターヘルプ"
        },
        "description": {
          "en-GB": "You deserve to be happy.\n\nBetterHelp offers you convenient and affordable therapy by connecting you with one of 33,000 licensed therapists, matched based on your location, preferences, and therapist availability. Whether you're dealing with anxiety, stress, or personal challenges, BetterHelp makes it easy to access professional support through video, phone, or live chat. With flexible scheduling and a range of therapists to choose from, you can get the help you need in a way that fits your lifestyle and budget, all from the comfort of your home.\n\n### Your reward\n\nYou've unlocked 15% off online therapy for a year!\n\nThis offer is only applicable to new BetterHelp users.",
          "_id": generateRandomMongoId(),
          "ja-JP": "「あなたは幸せになる価値がある。\n\nBetterHelpは、あなたの場所、好み、セラピストの空き状況に基づいてマッチングされた33,000人のライセンスを持つセラピストのうちの1人とあなたをつなぐことで、便利で手頃な価格のセラピーを提供します。不安、ストレス、個人的な課題など、BetterHelpならビデオ、電話、ライブチャットで簡単にプロのサポートを受けることができます。柔軟なスケジューリングと様々なセラピストから選べるので、ご自宅にいながら、ライフスタイルやご予算に合わせて必要なサポートを受けることができます。\n\n### 報酬\n\nオンライン・セラピーが1年間15%オフでご利用いただけます！\n\nこのオファーは、BetterHelpの新規ユーザーのみに適用されます。\""
        },
        "redemptionSteps": {
          "info": {
            "en-GB": "How to redeem",
            "_id": generateRandomMongoId(),
            "ja-JP": "換金方法"
          },
          "steps": [
            {
              "en-GB": "Claim your reward!",
              "_id": generateRandomMongoId(),
              "ja-JP": "1.報酬を請求する！"
            },
            {
              "en-GB": "Complete your preference questions and create an account on the BetterHelp page you're taken to.",
              "_id": generateRandomMongoId(),
              "ja-JP": "2.BetterHelpのページで、ご希望の質問を記入し、アカウントを作成する。"
            },
            {
              "en-GB": "Your discount will automatically be applied to your account.",
              "_id": generateRandomMongoId(),
              "ja-JP": "3.自動的に割引が適用されます。"
            },
            {
              "en-GB": "Enjoy your journey with therapy!",
              "_id": generateRandomMongoId(),
              "ja-JP": "4.セラピーの旅を楽しもう！"
            }
          ]
        },
        "termsAndConditionsUrl": "https://",
        "restrictions": {
          "availableForLabels": [
            "670fdd6523f0dacc22e2ef2c_tease",
            "670fdd6523f0dacc22e2ef2c_claimable"
          ],
          "restrictedForLabels": [],
          "locations": []
        },
        "tags": [
          {
            "en-GB": "Income Protection",
            "_id": generateRandomMongoId(),
            "ja-JP": "ウェルビーイング"
          }
        ],
        "website": {
          "isFeaturedOnWebsite": true
        },
        "claimType": "unlimited",
        "availableDenominations": [
          {
            "yuCoin": 0,
            "value": 0,
            "_id": generateRandomMongoId(),
          }
        ],
        "copy": {
          "alertHeading": {
            "en-GB": "Confirm your reward claim",
            "_id": generateRandomMongoId(),
            "ja-JP": "報酬請求の確認"
          },
          "alertSubheading": {
            "en-GB": "Tap 'Confirm' to be redirected to the YuLife x BetterHelp landing page. ",
            "_id": generateRandomMongoId(),
            "ja-JP": "確認」をタップすると、YuLife×BetterHelpのランディングページに移動します。"
          },
          "offerHeading": {
            "en-GB": "BetterHelp discount",
            "_id": generateRandomMongoId(),
            "ja-JP": "ベターヘルプディスカウント"
          },
          "offerSubheading": {
            "en-GB": "Claim 15% off online therapy for a year!",
            "_id": generateRandomMongoId(),
            "ja-JP": "オンライン・セラピーが1年間15％オフ！"
          }
        }
    }
} as IDatabaseItem;

export const CORE_REWARDS_SKINVISION_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        "_id": "670fde2923f0dacc22e2ef4d",
        "code": "SKINVISIONGIP",
        "rewardProviderId": "partnerVoucher",
        "loyaltyProgramme": [],
        "currencyCode": "GBP",
        "images": {
          "listItemImageKey": "imgixGlobal::cms/1729093057922_1724337829460_Skin Vision.png",
          "detailHeaderKey": "imgixGlobal::cms/1729093048534_1724337823075_Skin Vision.png",
          "websiteImageKey": ""
        },
        "name": {
          "en-GB": "Skinvision",
          "_id": generateRandomMongoId(),
          "ja-JP": "スキンビジョン"
        },
        "description": {
          "en-GB": "Is that mole looking a little too suspicious?\n\nKeep a close watch on your skin with SkinVision, the innovative app that helps you catch potential signs of skin cancer early. Powered by advanced AI, SkinVision lets you scan suspicious moles or spots using your phone’s camera and delivers a risk assessment in seconds. With personalised advice and tracking features, it’s easier than ever to stay proactive about your health. Take charge of your skin health and gain peace of mind by detecting changes early — all from the comfort of home.\n\n### Your reward\n\nEarly detection is important, good thing you've unlocked 1-day access to SkinVision.",
          "_id": generateRandomMongoId(),
          "ja-JP": "「そのほくろ、ちょっと怪しすぎない？\n\nSkinVisionは、皮膚がんの可能性を早期に発見するための革新的なアプリです。先進のAIを搭載したSkinVisionは、携帯電話のカメラで疑わしいほくろやシミをスキャンし、数秒でリスク評価を行います。パーソナライズされたアドバイスと追跡機能により、これまで以上に簡単に健康について積極的になることができます。ご自宅にいながら、お肌の健康を管理し、変化を早期発見して安心感を得ましょう。\n\n### 報酬\n\n早期発見が大切です。SkinVisionへの1日アクセスをアンロックしました。\n\nジェイミーから利用規約の追加 \""
        },
        "copy": {
          "voucherCodeTitle": {
            "en-GB": "Promo Code",
            "_id": generateRandomMongoId(),
            "ja-JP": "プロモコード"
          },
          "alertHeading": {
            "en-GB": "Confirm your reward claim",
            "_id": generateRandomMongoId(),
            "ja-JP": "今すぐ請求しよう！"
          },
          "alertSubheading": {
            "en-GB": "By claiming this reward you will receive your promo code.",
            "_id": generateRandomMongoId(),
            "ja-JP": "確認」をタップすると、1日間SkinVisionアプリをご利用いただけます。"
          },
          "offerHeading": {
            "en-GB": "Free SkinVision scan",
            "_id": generateRandomMongoId(),
            "ja-JP": "スキンビジョン無料スキャン"
          },
          "offerSubheading": {
            "en-GB": "Claim your in-app skin cancer screening! ",
            "_id": generateRandomMongoId(),
            "ja-JP": "アプリ内の皮膚がん検診をお申し込みください！"
          },
          "purchaseHeading": {
            "en-GB": "1-day SkinVision promo code",
            "_id": generateRandomMongoId(),
            "ja-JP": "スキンビジョン1日利用券"
          }
        },
        "redemptionSteps": {
          "info": {
            "en-GB": "How to redeem",
            "_id": generateRandomMongoId(),
            "ja-JP": "換金方法"
          },
          "steps": [
            {
              "en-GB": "Claim your reward!",
              "_id": generateRandomMongoId(),
              "ja-JP": "報酬を請求する"
            },
            {
              "en-GB": "Copy your promo code (we also sent it to your email).",
              "_id": generateRandomMongoId(),
              "ja-JP": "プロモコードをコピーしてください。"
            },
            {
              "en-GB": "Continue to SkinVision.",
              "_id": generateRandomMongoId(),
              "ja-JP": "スキンビジョンへ続く。"
            },
            {
              "en-GB": "Download the app, where you will continue your journey.",
              "_id": generateRandomMongoId(),
              "ja-JP": "アプリをダウンロードして、旅を続けよう。"
            },
            {
              "en-GB": "If you don't have a SkinVision account, sign up.",
              "_id": generateRandomMongoId(),
              "ja-JP": "SkinVisionのアカウントをお持ちでない方は、ぜひご登録ください。"
            },
            {
              "en-GB": "Enter your promo code when entering your personal details.",
              "_id": generateRandomMongoId(),
              "ja-JP": "個人情報を入力する際にプロモコードを入力してください。"
            },
            {
              "en-GB": "If you already have a SkinVision account, sign in.",
              "_id": generateRandomMongoId(),
              "ja-JP": "すでにSkinVisionアカウントをお持ちの方は、サインインしてください。"
            },
            {
              "en-GB": "Add your promo code under \"Account\".",
              "_id": generateRandomMongoId(),
              "ja-JP": "アカウント」の下にプロモコードを追加してください。"
            },
            {
              "en-GB": "Enjoy your 1-day access to SkinVision.",
              "_id": generateRandomMongoId(),
              "ja-JP": "SkinVisionの1日アクセスをお楽しみください。"
            }
          ]
        },
        "termsAndConditionsUrl": "https://skinvision-static-content.s3-eu-west-1.amazonaws.com/website/en/Terms_and_Conditions.pdf",
        "restrictions": {
          "availableForLabels": [
            "670fde2923f0dacc22e2ef4d_tease",
            "670fde2923f0dacc22e2ef4d_claimable"
          ],
          "restrictedForLabels": [],
          "locations": []
        },
        "tags": [
          {
            "en-GB": "Income Protection",
            "_id": generateRandomMongoId(),
            "ja-JP": "所得補償"
          }
        ],
        "website": {
          "isFeaturedOnWebsite": true
        },
        "claimType": "locked",
        "availableDenominations": [
          {
            "yuCoin": 0,
            "value": 1,
            "providerProductId": "SKIN_VISION_GIP",
            "_id": generateRandomMongoId(),
          }
        ],
      }
} as IDatabaseItem;

export const CORE_REWARDS_SLEEPCYCLE_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        "_id": "670fd99423f0dacc22e2ee32",
        "code": "SLEEPCYCLE-GIP",
        "rewardProviderId": "partnerVoucher",
        "loyaltyProgramme": [],
        "currencyCode": "GBP",
        "images": {
          "listItemImageKey": "imgixGlobal::cms/1729091920159_1706780598052_Sleep Cycle.png",
          "detailHeaderKey": "imgixGlobal::cms/1729091914794_1706780586492_Sleep Cycle (1).png",
          "websiteImageKey": ""
        },
        "name": {
          "en-GB": "Sleepcycle",
          "_id": generateRandomMongoId(),
          "ja-JP": "スリープサイクル"
        },
        "description": {
          "en-GB": "Sleep Cycle is one of the world's most popular sleep apps. It's intelligent alarm clock is designed to gently wake you up while you’re in your lightest sleep phase. It also tracks and analyses your sleep patterns to help you learn and improve your sleep patterns! \n\nWith a premium subscription, you can enjoy:\n\n* Smart Alarm - wakes you up in light sleep\n* Sleep Aid - fall asleep with soothing sounds and meditations\n* Sound Tracking - discover if you're snoring, sleep talking, coughing, and more\n* Statistics - identify changes and progress in your sleep over time\n* Weekly Summary - insights on how your sleep can improve\n* Sleep Notes - improve your quality of sleep by tracking your lifestyle habits and how it impacts your rest\n* Online Backup - secure your data online in case you loose or replace your current device\n* Alarm Sounds -  choose from 15 additional alarm sounds or select from your own library\n* Wake Up Mood - log your morning mood when you wake up\n\nAll you need to do is pop it on your bedside at night and let the app do the rest! \n\n### Your reward\n\nYou've unlocked a 12-month Sleep Cycle premium subscription!\n\nIf you are a current user of Sleep Cycle premium, it would be most ideal for you to wait until your subscription ends before you apply this offer.",
          "_id": generateRandomMongoId(),
          "ja-JP": "更新が必要\n\n\n\nスリープ・サイクル・プレミアム・サブスクリプション（1年間）を34％オフでご利用いただけます。\n\nSleep Cycleは、世界で最も人気のある睡眠アプリの1つです。そのインテリジェントな目覚まし時計は、あなたが最も明るい睡眠段階にある間に優しくあなたを目覚めさせるように設計されています。また、あなたの睡眠パターンを追跡・分析し、学習と改善に役立ちます！\n\n##Premium membership features：\n\n* スマートアラーム - 眠りの浅い時に起こしてくれます。\n* スリープエイド - 心地よいサウンドと瞑想で眠りを誘います。\n* サウンドトラッキング - いびき、寝言、咳などを発見します。\n* 統計 - 時間の経過に伴う睡眠の変化と進捗状況を確認します。\n* 週間サマリー - あなたの睡眠を改善する方法についての洞察。\n* 睡眠ノート - あなたの生活習慣とそれがあなたの休息にどのような影響を与えるかを追跡することにより、睡眠の質を向上させます。\n* オンラインバックアップ - 現在のデバイスを紛失したり交換した場合に備えて、データをオンラインで保護します。\n* アラーム音 - 15の追加アラーム音から選択するか、独自のライブラリから選択します。\n* 起床時の気分 - 起床時の朝の気分を記録します。\n\nあなたは夜にあなたの枕元にそれをポップし、アプリが残りを行うようにする必要があります！"
        },
        "copy": {
          "ctaLabel": {
            "en-GB": null,
            "_id": generateRandomMongoId(),
            "ja-JP": "会員登録はこちらから"
          },
          "voucherCodeTitle": {
            "en-GB": "Voucher Code",
            "_id": generateRandomMongoId(),
            "ja-JP": "クーポンコード"
          },
          "alertHeading": {
            "en-GB": "Confirm your reward claim",
            "_id": generateRandomMongoId(),
            "ja-JP": "報酬請求の確認"
          },
          "alertSubheading": {
            "en-GB": "By claiming this reward you will receive your voucher code.",
            "_id": generateRandomMongoId(),
            "ja-JP": "この特典を申請すると、クーポンコードが発行されます。"
          },
          "offerHeading": {
            "en-GB": "Free Sleep Cycle subscription",
            "_id": generateRandomMongoId(),
            "ja-JP": "睡眠サイクル"
          },
          "offerSubheading": {
            "en-GB": "Claim your 12-month premium subscription!",
            "_id": generateRandomMongoId(),
            "ja-JP": "12ヶ月のプレミアム購読をお申し込みください！"
          },
          "purchaseHeading": {
            "en-GB": "12-month Sleep Cycle premium voucher",
            "_id": generateRandomMongoId(),
            "ja-JP": "スリープ・サイクル・プレミアム12ヵ月券"
          }
        },
        "redemptionSteps": {
          "info": {
            "en-GB": "How to redeem",
            "_id": generateRandomMongoId(),
            "ja-JP": "スリープ・サイクル・プレミアム・メンバーシップのご利用方法："
          },
          "steps": [
            {
              "en-GB": "Claim your reward!",
              "_id": generateRandomMongoId(),
              "ja-JP": "報酬を請求する"
            },
            {
              "en-GB": "Copy your unique code (we also sent it to your email).",
              "_id": generateRandomMongoId(),
              "ja-JP": "あなたのユニークコードをコピーしてください。"
            },
            {
              "en-GB": "Continue to Sleep Cycle and redeem your code.",
              "_id": generateRandomMongoId(),
              "ja-JP": "スリープ・サイクルに進み、コードをご利用ください。"
            },
            {
              "en-GB": "Create an account if you don't have one.",
              "_id": generateRandomMongoId(),
              "ja-JP": "アカウントをお持ちでない場合は作成してください。"
            },
            {
              "en-GB": "Download the Sleep Cycle app, sign in, and enjoy your 12-month premium subscription!",
              "_id": generateRandomMongoId(),
              "ja-JP": "Sleep Cycleアプリをダウンロードしてサインインし、12ヶ月のプレミアム購読をお楽しみください！"
            }
          ]
        },
        "termsAndConditionsUrl": "https://support.sleepcycle.com/hc/en-us/articles/115002692205-Sleep-Cycle-Premium-Terms-Conditions-",
        "restrictions": {
          "availableForLabels": [
            "670fd99423f0dacc22e2ee32_tease",
            "670fd99423f0dacc22e2ee32_claimable"
          ],
          "restrictedForLabels": [],
          "locations": []
        },
        "tags": [
          {
            "en-GB": "Income Protection",
            "_id": generateRandomMongoId(),
            "ja-JP": "ウェルビーイング"
          }
        ],
        "website": {
          "isFeaturedOnWebsite": true
        },
        "claimType": "locked",
        "availableDenominations": [
          {
            "yuCoin": 0,
            "value": 1,
            "providerProductId": "SLEEP_CYCLE_12_MONTH",
            "_id": generateRandomMongoId(),
          }
        ],
        "redemptionUrl": "https://app.sleepcycle.com/partner/yulife"
      }
} as IDatabaseItem;

export const CORE_REWARDS_WITHINGS_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
        "_id": "6708ea1d1bbe9f34442e3e7c",
        "code": "WITHINGS",
        "rewardProviderId": "withings",
        "loyaltyProgramme": [],
        "availableDenominations": [
          {
            "yuCoin": 0,
            "value": 1,
            "displayName": {
              "en-GB": "White scale",
              "_id": generateRandomMongoId(),
              "ja-JP": "ホワイトスケール"
            },
            "providerProductId": "3700546708206",
            "_id": generateRandomMongoId(),
          },
          {
            "yuCoin": 0,
            "value": 1,
            "displayName": {
              "en-GB": "Black scale",
              "_id": generateRandomMongoId(),
              "ja-JP": "ブラックスケール"
            },
            "providerProductId": "3700546708190",
            "_id": generateRandomMongoId(),
          }
        ],
        "currencyCode": "GBP",
        "images": {
          "listItemImageKey": "imgixGlobal::cms/1730286806249_Withings.png",
          "detailHeaderKey": "imgixGlobal::cms/1730286801015_Withings.png",
          "websiteImageKey": "",
          "redemptionStepsFooter": ""
        },
        "name": {
          "en-GB": "Withings",
          "_id": generateRandomMongoId(),
          "ja-JP": "ウィジングスマートスケール"
        },
        "description": {
          "en-GB": "Our bodies are complex, but Withings makes things simple.\n\nThe Withings Body Smart scale is a comprehensive health tracking device that does more than just measure your weight. Using advanced sensors, it tracks body composition metrics such as body fat, muscle mass, water percentage, metabolic rate, and BMI. It syncs effortlessly with the Withings Health Mate app, giving you personalised insights and progress tracking on your phone. The scale also supports multiple users, automatically recognising each person, making it ideal for households. With the Body Smart scale, you can stay informed about you and your family's health and fitness goals with detailed, easy-to-understand data at your fingertips.\n\n### Your reward\n\nYou've unlocked a free Withings Body Smart Scale customised for the YuLife experience!",
          "_id": generateRandomMongoId(),
          "ja-JP": "スマートスケールを無料で手に入れる"
        },
        "redemptionSteps": {
          "info": {
            "en-GB": "How to redeem",
            "_id": generateRandomMongoId(),
            "ja-JP": "スマートスケールのご利用は簡単です！配送先情報をお知らせください。"
          },
          "steps": [
            {
              "en-GB": "Claim your reward!",
              "_id": generateRandomMongoId(),
              "ja-JP": "1.報酬を請求する！"
            },
            {
              "en-GB": "Fill in your details to get your Body Smart scale ordered, and it will be shipped to your desired address.",
              "_id": generateRandomMongoId(),
              "ja-JP": "2.ボディ・スマート体重計を注文するために必要な情報を入力してください。"
            },
            {
              "en-GB": "Once delivered, follow the simple instructions that come with your scale to activate your account.",
              "_id": generateRandomMongoId(),
              "ja-JP": "3.スケールが届いたら、スケールに同梱されている簡単な説明書に従ってアカウントを有効にしてください。"
            },
            {
              "en-GB": "After you've set up your account and used the scale, your results will be available on the Withings Health Mate app.",
              "_id": generateRandomMongoId(),
              "ja-JP": "4.アカウントを設定し、体重計を使用すると、Withings Health Mateアプリで結果を確認できます。"
            },
            {
              "en-GB": "Enjoy insights on your health!",
              "_id": generateRandomMongoId(),
              "ja-JP": "5.健康についての洞察を楽しもう！\""
            }
          ]
        },
        "termsAndConditionsUrl": "https://",
        "restrictions": {
          "availableForLabels": [
            "6708ea1d1bbe9f34442e3e7c_tease",
            "6708ea1d1bbe9f34442e3e7c_claimable"
          ],
          "restrictedForLabels": [],
          "locations": [
            "GB"
          ]
        },
        "tags": [
          {
            "en-GB": "Income Protection",
            "_id": generateRandomMongoId(),
            "ja-JP": "所得補償"
          }
        ],
        "website": {
          "isFeaturedOnWebsite": true
        },
        "claimType": "locked",
        "failedClaimCount": 0,
        "copy": {
          "alertHeading": {
            "en-GB": "Confirm your reward claim",
            "_id": generateRandomMongoId(),
            "ja-JP": "報酬請求の確認"
          },
          "offerHeading": {
            "en-GB": "Free Withings smart scale",
            "_id": generateRandomMongoId(),
            "ja-JP": "無料のWithingsスマート体重計"
          },
          "offerSubheading": {
            "en-GB": "Claim your customised Body Smart scale!",
            "_id": generateRandomMongoId(),
            "ja-JP": "カスタマイズしたBody Smart体重計をご請求ください！"
          },
          "purchaseHeading": {
            "en-GB": "Check this",
            "_id": generateRandomMongoId(),
            "ja-JP": "ウィジングス・スマート・スケール（無制限）"
          }
        }
      }
} as IDatabaseItem;

export const CORE_REWARDS_POCDOC_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
      "_id": "670fe1f923f0dacc22e2f032",
      "code": "POCDOC-GIP",
      "rewardProviderId": "partnerVoucher",
      "loyaltyProgramme": [],
      "currencyCode": "GBP",
      "images": {
        "listItemImageKey": "imgixGlobal::cms/1729093979961_download (3).png",
        "detailHeaderKey": "imgixGlobal::cms/1729093975534_download (2).png",
        "websiteImageKey": ""
      },
      "name": {
        "en-GB": "PocDoc",
        "_id": generateRandomMongoId(),
        "ja-JP": "ポックドック"
      },
      "description": {
        "en-GB": "A little love for your heart today can prevent you from missing a beat tomorrow.\n\nThe Healthy Heart Check by PocDoc is an at-home self-test that delivers comprehensive results in just 10 minutes. Trusted by pharmacies across the UK and the NHS, this convenient heart check uses a simple finger-prick test, combined with PocDoc's unique microfluidic technology and your smartphone, to provide NHS-equivalent cardiovascular screening results without the need for a GP visit. Empower yourself to monitor your heart health easily and efficiently, all from the comfort of your home. It's so simple you could do it in a heartbeat.\n\n### Your reward\n\nYou've unlocked a free at-home heart health check!",
        "_id": generateRandomMongoId(),
        "ja-JP": "\"今日、あなたの心臓にちょっとした愛情を注げば、明日、鼓動が乱れるのを防ぐことができる。\n\nPocDocのヘルシー・ハート・チェックは、わずか10分で総合的な結果が得られる家庭用セルフ・テストです。英国中の薬局やNHSから信頼されているこの便利な心臓チェックは、簡単な指刺し検査とPocDoc独自のマイクロ流体技術とスマートフォンを組み合わせて、GPを受診することなくNHSと同等の心血管スクリーニング結果を提供します。自宅にいながら、簡単かつ効率的に心臓の健康状態をモニターすることができます。とても簡単なので、すぐに実行できます。\n\n### 報酬\n\n40ポンド相当のご自宅での心臓健康チェックを無料で受けられます！\n\nジェイミーが条件を追加します \""
      },
      "redemptionSteps": {
        "info": {
          "en-GB": "How to redeem",
          "_id": generateRandomMongoId(),
          "ja-JP": "換金方法"
        },
        "steps": [
          {
            "en-GB": "Claim your reward!",
            "_id": generateRandomMongoId(),
            "ja-JP": "1.報酬を請求する！"
          },
          {
            "en-GB": "Copy your unique code (we also sent it to your email).",
            "_id": generateRandomMongoId(),
            "ja-JP": "2.あなたのEメールにユニークなコードが送信されます。"
          },
          {
            "en-GB": "Continue to PocDoc.",
            "_id": generateRandomMongoId(),
            "ja-JP": "3.表示されたページで、ヘルシー・ハート・チェックを買い物かごに入れます。"
          },
          {
            "en-GB": "Add the Healthy Heart Check to your basket.",
            "_id": generateRandomMongoId(),
            "ja-JP": "4.固有のコードを入力し、チェックアウトを完了します。"
          },
          {
            "en-GB": "Enter your unique code and complete your checkout.",
            "_id": generateRandomMongoId(),
            "ja-JP": "5.健康についての洞察を楽しむ！"
          },
          {
            "en-GB": "Enjoy insights on your health!",
            "_id": generateRandomMongoId(),
            "ja-JP": "健康についての洞察をお楽しみください！"
          }
        ]
      },
      "termsAndConditionsUrl": "https://",
      "restrictions": {
        "availableForLabels": [
          "670fe1f923f0dacc22e2f032_tease",
          "670fe1f923f0dacc22e2f032_claimable"
        ],
        "restrictedForLabels": [],
        "locations": []
      },
      "tags": [
        {
          "en-GB": "Income Protection",
          "_id": generateRandomMongoId(),
          "ja-JP": "所得補償"
        }
      ],
      "website": {
        "isFeaturedOnWebsite": true
      },
      "claimType": "locked",
      "availableDenominations": [
        {
          "yuCoin": 0,
          "value": 1,
          "providerProductId": "POCDOC_GIP",
          "_id": generateRandomMongoId(),
        }
      ],
      "copy": {
        "alertHeading": {
          "en-GB": "Confirm your reward claim",
          "_id": generateRandomMongoId(),
          "ja-JP": "報酬請求の確認"
        },
        "alertSubheading": {
          "en-GB": "By claiming this reward you will receive your voucher code.",
          "_id": generateRandomMongoId(),
          "ja-JP": "この特典を申請すると、クーポンコードが発行されます。"
        },
        "offerHeading": {
          "en-GB": "Free PocDoc heart check",
          "_id": generateRandomMongoId(),
          "ja-JP": "無料PocDocハートチェック"
        },
        "offerSubheading": {
          "en-GB": "Claim your at-home heart health check!",
          "_id": generateRandomMongoId(),
          "ja-JP": "ご自宅での心臓健康チェックをお申し込みください！"
        },
        "purchaseHeading": {
          "en-GB": "At-home heart health check voucher",
          "_id": generateRandomMongoId(),
          "ja-JP": "ご自宅で心臓の健康チェックができるクーポン券"
        }
      }
    }
} as IDatabaseItem;

export const CORE_REWARDS_LIFESUM_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
      "_id": "670fdbf123f0dacc22e2eedb",
      "code": "LIFESUM-GIP",
      "rewardProviderId": "partnerVoucher",
      "loyaltyProgramme": [],
      "availableDenominations": [
        {
          "yuCoin": 0,
          "value": 1,
          "providerProductId": "LIFESUM_12_MONTH",
          "_id": generateRandomMongoId(),
        }
      ],
      "currencyCode": "GBP",
      "images": {
        "listItemImageKey": "imgixGlobal::cms/1729092132961_1729089894474_Lifesum (1).png",
        "detailHeaderKey": "imgixGlobal::cms/1729092124770_1729085711761_Lifesum.png",
        "websiteImageKey": ""
      },
      "name": {
        "en-GB": "Lifesum",
        "_id": generateRandomMongoId(),
        "ja-JP": "ライフサム"
      },
      "description": {
        "en-GB": "Lifesum is a health app that makes it easy to eat better, stay active, and reach your health goals. It provides personalised meal plans, nutrition advice, and healthy recipes that are easy to whip up.\n\nEach feature of Lifesum is designed to make your health journey smoother and more enjoyable. Whether you're tracking your meals, staying hydrated, or finding a workout routine that suits you, Lifesum has got you covered.\n\nStart your journey to a healthier Yu with Lifesum today!\n\n### Your reward\n\nYou've unlocked a 12-month Lifesum premium subscription!\n\nPlease note: If you are a current Lifesum premium user, you'll have to wait until your subscription ends before you can apply this offer.",
        "_id": generateRandomMongoId(),
        "ja-JP": "Lifesumは、より良い食事、活動的な滞在、健康目標の達成を簡単にする健康アプリです。パーソナライズされた食事プラン、栄養アドバイス、簡単に作れるヘルシーレシピを提供します。\n\nLifesumの各機能は、あなたの健康の旅をよりスムーズで楽しいものにするためにデザインされています。食事の記録、水分補給、自分に合ったワークアウトなど、Lifesumがあなたをサポートします。\n\n今すぐLifesumで健康への旅を始めましょう！\n\n### ご褒美\n\nライフサムプレミアム12ヶ月分（99.99ポンド相当）がアンロックされました！\n\nご注意：現在ライフサムをご利用中の方は、このオファーを適用するには、サブスクリプションが終了するまでお待ちいただく必要があります。"
      },
      "copy": {
        "ctaLabel": {
          "en-GB": "Claim Reward",
          "_id": generateRandomMongoId(),
          "ja-JP": "報酬を請求する"
        },
        "voucherCodeTitle": {
          "en-GB": "Voucher Code",
          "_id": generateRandomMongoId(),
          "ja-JP": "クーポンコード"
        },
        "alertHeading": {
          "en-GB": "Confirm your reward claim",
          "_id": generateRandomMongoId(),
          "ja-JP": "報酬請求の確認"
        },
        "alertSubheading": {
          "en-GB": "By claiming this reward you will receive your voucher code.",
          "_id": generateRandomMongoId(),
          "ja-JP": "この特典を申請すると、クーポンコードが発行されます。"
        },
        "offerHeading": {
          "en-GB": "Free Lifesum subscription",
          "_id": generateRandomMongoId(),
          "ja-JP": "ライフサム"
        },
        "offerSubheading": {
          "en-GB": "Claim your 12-month premium subscription!",
          "_id": generateRandomMongoId(),
          "ja-JP": "12ヶ月のプレミアム購読"
        },
        "purchaseHeading": {
          "en-GB": "12-month Lifesum premium voucher",
          "_id": generateRandomMongoId(),
          "ja-JP": "ライフサム・プレミアム12ヶ月バウチャー"
        }
      },
      "redemptionSteps": {
        "info": {
          "en-GB": "How to redeem",
          "_id": generateRandomMongoId(),
          "ja-JP": "トーアの換金方法"
        },
        "steps": [
          {
            "en-GB": "Claim your reward!",
            "_id": generateRandomMongoId(),
            "ja-JP": "報酬を請求する"
          },
          {
            "en-GB": "Copy your unique code (we also sent it to your email).",
            "_id": generateRandomMongoId(),
            "ja-JP": "バウチャーコードをお送りしましたので、メールをご確認ください。"
          },
          {
            "en-GB": "Continue to Lifesum and redeem your code.",
            "_id": generateRandomMongoId(),
            "ja-JP": "ライフサム交換ページ](https://lifesum.com/partner/yulife/redeem)にアクセス。"
          },
          {
            "en-GB": "Create an account if you don't have one. ",
            "_id": generateRandomMongoId(),
            "ja-JP": "クーポンコードを入力し、「続ける」をタップしてください。"
          },
          {
            "en-GB": "Download the Lifesum app, sign in, and enjoy your 12-month premium subscription!",
            "_id": generateRandomMongoId(),
            "ja-JP": "アカウントをお持ちでない場合は作成してください。"
          }
        ]
      },
      "termsAndConditionsUrl": "https://lifesum.com/policy/",
      "restrictions": {
        "availableForLabels": [
          "670fdbf123f0dacc22e2eedb_tease",
          "670fdbf123f0dacc22e2eedb_claimable"
        ],
        "restrictedForLabels": [],
        "locations": [
          "GB"
        ]
      },
      "tags": [
        {
          "en-GB": "Income Protection",
          "_id": generateRandomMongoId(),
          "ja-JP": "所得補償"
        }
      ],
      "website": {
        "isFeaturedOnWebsite": true
      },
      "claimType": "locked",
    }    
} as IDatabaseItem;

export const CORE_REWARDS_FIIT_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
      "_id": "670fd8fc23f0dacc22e2edf7",
      "code": "FIIT-GIP",
      "rewardProviderId": "partnerVoucher",
      "loyaltyProgramme": [],
      "currencyCode": "GBP",
      "images": {
        "listItemImageKey": "imgixGlobal::cms/1729091767115_FIIT list.png",
        "detailHeaderKey": "imgixGlobal::cms/1729091761979_FIIT header.png",
        "websiteImageKey": ""
      },
      "name": {
        "en-GB": "Fiit",
        "_id": generateRandomMongoId(),
        "ja-JP": "FiiT GIP"
      },
      "description": {
        "en-GB": "Bring the gym home with the #1 rated fitness app. Get unlimited access to 500+ on-demand and group workouts, including HIIT, strength training, yoga and pilates. Connect with a fitness tracker like Apple Watch, Polar and MyZone to see your live stats, track progress and join leaderboard classes. And with 18 structured training plans tailored to your goal and level, you can get results faster! \n\n### Your reward \n\nYou've unlocked a 12-month Fiit premium subscription!\n\nPlease note: If you have a paid Fiit membership, you'll have to wait until your subscription ends before you can apply this offer.",
        "_id": generateRandomMongoId(),
        "ja-JP": "\n人気No.1のフィットネスアプリで、ジムをご自宅に。HIIT、筋力トレーニング、ヨガ、ピラティスなど、500以上のオンデマンドおよびグループワークアウトに無制限にアクセスできます。Apple Watch、Polar、MyZoneなどのフィットネストラッカーと接続すれば、ライブの統計情報を確認したり、進捗状況を追跡したり、リーダーボードのクラスに参加したりできます。また、あなたの目標やレベルに合わせた18の体系的なトレーニングプランで、より早く結果を出すことができます！30日間の無料トライアルを開始すると、初回のお支払いが25％オフになります。"
      },
      "redemptionSteps": {
        "info": {
          "en-GB": "How to redeem",
          "_id": generateRandomMongoId(),
          "ja-JP": "換金方法"
        },
        "steps": [
          {
            "en-GB": "Claim your reward!",
            "_id": generateRandomMongoId(),
            "ja-JP": "申請中"
          },
          {
            "en-GB": "Copy your unique code (we also sent it to your email).",
            "_id": generateRandomMongoId(),
            "ja-JP": "あなたのユニークコードをコピーしてください。"
          },
          {
            "en-GB": "Continue to Fiit, scroll down the page, and redeem your code.",
            "_id": generateRandomMongoId(),
            "ja-JP": "Fiitに進み、ページを下にスクロールしてコードをご利用ください。"
          },
          {
            "en-GB": "Create an account if you don't have one.",
            "_id": generateRandomMongoId(),
            "ja-JP": "アカウントをお持ちでない場合は作成してください。"
          },
          {
            "en-GB": "Download the Fiit app, sign in, and enjoy your 12-month premium subscription!",
            "_id": generateRandomMongoId(),
            "ja-JP": "Fiitアプリをダウンロードしてサインインし、12ヶ月のプレミアム購読をお楽しみください！"
          }
        ]
      },
      "termsAndConditionsUrl": "https://",
      "restrictions": {
        "availableForLabels": [
          "670fd8fc23f0dacc22e2edf7_tease",
          "670fd8fc23f0dacc22e2edf7_claimable"
        ],
        "restrictedForLabels": [],
        "locations": []
      },
      "tags": [
        {
          "en-GB": "Income Protection",
          "_id": generateRandomMongoId(),
          "ja-JP": "ウェルビーイング"
        }
      ],
      "website": {
        "isFeaturedOnWebsite": true
      },
      "claimType": "locked",
      "availableDenominations": [
        {
          "yuCoin": 0,
          "value": 1,
          "providerProductId": "FIIT_12_MONTH",
          "_id": generateRandomMongoId(),
        }
      ],
      "copy": {
        "voucherCodeTitle": {
          "en-GB": "Voucher Code",
          "_id": generateRandomMongoId(),
          "ja-JP": "クーポンコード"
        },
        "alertHeading": {
          "en-GB": "Confirm your reward claim",
          "_id": generateRandomMongoId(),
          "ja-JP": "報酬請求の確認"
        },
        "alertSubheading": {
          "en-GB": "By claiming this reward you will receive your voucher code.",
          "_id": generateRandomMongoId(),
          "ja-JP": "この特典を申請すると、クーポンコードが発行されます。"
        },
        "offerHeading": {
          "en-GB": "Free Fiit subscription",
          "_id": generateRandomMongoId(),
          "ja-JP": "Fiit無料購読"
        },
        "offerSubheading": {
          "en-GB": "Claim your 12-month premium subscription!",
          "_id": generateRandomMongoId(),
          "ja-JP": "12ヶ月のプレミアム購読をお申し込みください！"
        },
        "purchaseHeading": {
          "en-GB": "12-month Fiit premium voucher",
          "_id": generateRandomMongoId(),
          "ja-JP": "Fiitプレミアム12ヶ月バウチャー"
        }
      }
    }
} as IDatabaseItem;

export const CORE_REWARDS_NIKE_GIP_REWARDS = {
    type: "mongo",
    modelName: "core_rewards",
    data: {
      "_id": "670fe2f323f0dacc22e2f05a",
      "code": "NEWBALANCE-GIP",
      "rewardProviderId": "partnerVoucher",
      "loyaltyProgramme": [],
      "currencyCode": "GBP",
      "images": {
        "listItemImageKey": "imgixGlobal::cms/1729094287211_New Balance.png",
        "detailHeaderKey": "imgixGlobal::cms/1729094279627_New Balance.png",
        "websiteImageKey": ""
      },
      "name": {
        "en-GB": "New Balance 880",
        "_id": generateRandomMongoId(),
        "ja-JP": "ニューバランス880"
      },
      "description": {
        "en-GB": "If life is a marathon, at least with New Balance you'll get to run with style.\n\nThe New Balance 880 is a high-performance running shoe designed for comfort and support on long-distance runs. It features a plush midsole with Fresh Foam technology, providing soft cushioning that adapts to your stride for a smooth, responsive experience. The shoe's engineered mesh upper enhances breathability while offering a secure fit, making it ideal for both training and race day. With its durable outsole, the New Balance 880 delivers reliable traction on various surfaces, ensuring you stay stable and confident with every step. Whether you're an avid runner or just starting out, the New Balance 880 is the perfect companion for your running journey.\n\n### Your reward\n\nYou've unlocked a pair of New Balance 880 running shoes!",
        "_id": generateRandomMongoId(),
        "ja-JP": "「人生がマラソンなら、少なくともニューバランスなら、スタイリッシュに走ることができる。\n\nニューバランス880は、長距離ランでの快適性とサポートのために設計された高性能ランニングシューズです。それは、滑らかな、応答性の経験のためにあなたの歩幅に適応する柔らかいクッション性を提供し、Fresh Foam技術で豪華なミッドソールを備えています。エンジニアードメッシュのアッパーが通気性を高めると同時に、しっかりとしたフィット感を提供し、トレーニングにもレース当日にも理想的なシューズとなっている。耐久性のあるアウトソールで、ニューバランス880は様々な路面で信頼性の高いトラクションを発揮し、一歩一歩が安定し、自信を保てる。あなたが熱心なランナーであろうと、始めたばかりであろうと、ニューバランス880はあなたのランニングの旅のための完璧な仲間です。\n\n### ご褒美\n\n最大160ポンド相当のニューバランス880ランニングシューズを1足プレゼント。\nジェイミーが条件を追加します \""
      },
      "copy": {
        "alertHeading": {
          "en-GB": "Confirm your reward claim",
          "_id": generateRandomMongoId(),
          "ja-JP": "今すぐ請求しよう！"
        },
        "alertSubheading": {
          "en-GB": "By claiming this reward you will receive your voucher code.",
          "_id": generateRandomMongoId(),
          "ja-JP": "確認」をタップして、ニューバランス880トレーナーを無料で入手してください。"
        },
        "offerHeading": {
          "en-GB": "Free New Balance 880",
          "_id": generateRandomMongoId(),
          "ja-JP": "ニューバランス880"
        },
        "offerSubheading": {
          "en-GB": "Claim your pair of trainers!",
          "_id": generateRandomMongoId(),
          "ja-JP": "トレーナー1足無料"
        },
        "purchaseHeading": {
          "en-GB": "New Balance 880 voucher",
          "_id": generateRandomMongoId(),
          "ja-JP": "バンス880の新しいクーポン券"
        }
      },
      "redemptionSteps": {
        "info": {
          "en-GB": "How to redeem",
          "_id": generateRandomMongoId(),
          "ja-JP": "換金方法"
        },
        "steps": [
          {
            "en-GB": "Claim your reward!",
            "_id": generateRandomMongoId(),
            "ja-JP": "1.報酬を請求する"
          },
          {
            "en-GB": "Copy your unique code (we also sent it to your email).",
            "_id": generateRandomMongoId(),
            "ja-JP": "2.バウチャーコードをお送りしますので、メールをご確認ください。"
          },
          {
            "en-GB": "Continue to New Balance.",
            "_id": generateRandomMongoId(),
            "ja-JP": "3.お好みのニューバランス880のデザインを選び、カートに入れる。"
          },
          {
            "en-GB": "Choose your preferred New Balance 880 design, and add it to your cart.",
            "_id": generateRandomMongoId(),
            "ja-JP": "4.カートにクーポンコードを入力してください。"
          },
          {
            "en-GB": "Add your unique voucher code by viewing your cart.",
            "_id": generateRandomMongoId(),
            "ja-JP": "5.チェックアウトに向かい、配送に関する詳細を記入し、支払いを行います。"
          },
          {
            "en-GB": "Head to checkout to fill in your delivery details and make payment.",
            "_id": generateRandomMongoId(),
            "ja-JP": "6.880sを楽しんでください！"
          },
          {
            "en-GB": "Enjoy your 880s!",
            "_id": generateRandomMongoId(),
            "ja-JP": "880sを楽しんでくれ！"
          }
        ]
      },
      "termsAndConditionsUrl": "https://",
      "restrictions": {
        "availableForLabels": [
          "670fe2f323f0dacc22e2f05a_tease",
          "670fe2f323f0dacc22e2f05a_claimable"
        ],
        "restrictedForLabels": [],
        "locations": []
      },
      "tags": [
        {
          "en-GB": "Income Protection",
          "_id": generateRandomMongoId(),
          "ja-JP": "所得補償"
        }
      ],
      "website": {
        "isFeaturedOnWebsite": true
      },
      "claimType": "locked",
      "availableDenominations": [
        {
          "yuCoin": 0,
          "value": 1,
          "providerProductId": "NEWBALANCE_GIP",
          "_id": generateRandomMongoId(),
        }
      ],
    }
      
} as IDatabaseItem;