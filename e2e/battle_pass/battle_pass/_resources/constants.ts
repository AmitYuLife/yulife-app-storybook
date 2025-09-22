import moment from "moment";
import { IMPACT_DONATION, StripeCardDetails } from "./types";

export const emptySeasonalRewardVisible =
  "It's quiet in here. Head over to your seasonal rewards path to earn exclusive vouchers and discounts!";
export const emptyInventoryState =
  "Your inventory is empty. Head over to your seasonal rewards path to earn helpful items to aid you on your journey.";
export const outOfCoinsMessage =
  "You have insufficient balance to make this purchase. \n \n Try finishing some challenges to earn more coins.";

export const impactDonationImages: Record<IMPACT_DONATION, string> = {
  tree: "https://yulife-develop.imgix.net/game/donations/tree_2024_08_05.svg?ixlib=js-3.2.1&w=88&h=88&fit=clip&fm=png&dpr=3&s=7206050e6b81edf91895a64b9313019c",
  water:
    "https://yulife-develop.imgix.net/game/donations/water_2024_08_05.svg?ixlib=js-3.2.1&w=88&h=88&fit=clip&fm=png&dpr=3&s=2ae92fd7e197dd71cadf265da1d980fe",
  meal: "https://yulife-develop.imgix.net/game/donations/meal_2024_08_05.svg?ixlib=js-3.2.1&w=88&h=88&fit=clip&fm=png&dpr=3&s=4e3d9f9cdfb662faa21bf6e71f2321eb",
  ocean:
    "https://yulife-develop.imgix.net/game/donations/ocean_2024_08_05.svg?ixlib=js-3.2.1&w=88&h=88&fit=clip&fm=png&dpr=3&s=a5d486b2ba195b396d03eb2905d55fa1",
};

export const locationModalTitle = "Choose your location!";

export const challengeTypes = [
  "Extra brisk walk challenge",
  "Extra long walk challenge",
  "Extra meditation challenge",
  "Extra workout challenge",
  "Extra short stroll challenge",
];

export const cardDetails: StripeCardDetails = {
  cardNumber: "4242424242424242",
  expiry: moment().add(2, "years").format("MM/YY"),
  cvc: "123",
  postalCode: "SWA 1AA",
};
