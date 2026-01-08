import { EndOfSeasonItems } from "./types";

export const couponsTermsAndConditions =
  "I consent to the immediate supply of this digital code upon payment and I acknowledge and accept that my right to cancel the order will be lost once the digital code has been issued.";

export const endOfSeasonHarmonyTitle = "Season of Harmony is completed!";

export const EndOfSeasonMockItems: EndOfSeasonItems = [
  { type: "tree", title: "Trees planted", score: "+0" },
  { type: "water", title: "Water donated", score: "+168L" },
  { type: "meal", title: "Meals donated", score: "+0.1" },
  { type: "ocean", title: "Plastic removed", score: "+0kg" },
];

export const rewardHints = {
  wallet: {
    title: "Reward collected!",
    description: "You can find your reward in your Wallet in Store.",
  },
  powerUp: {
    title: "Power up collected!",
    description: "You can find your power up in your Power Ups inventory.",
  },
} as const;
