import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

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
        availableForRewardsStore: true,
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
