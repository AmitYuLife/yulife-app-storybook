import { Colours } from "@styles";

interface IBubbleColours {
  [x: number]: {
    available: string;
    notAvailable: string;
  };
}

const worldBubbleColours: IBubbleColours = {
  0: {
    available: Colours.neutral.n20,
    notAvailable: "#8BFFDC",
  },

  1: {
    available: Colours.neutral.n20,
    notAvailable: "#7CEFFF",
  },

  2: {
    available: Colours.neutral.n20,
    notAvailable: "#FFB7A0",
  },
  3: {
    available: Colours.neutral.n20,
    notAvailable: "#F2A1FF",
  },
};

export const getWorldBubbleColours = () => worldBubbleColours;
