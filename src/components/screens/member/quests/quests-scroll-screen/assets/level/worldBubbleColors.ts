import { Colours } from "@styles";

interface IBubbleColours {
  [x: number]: {
    available: string;
    notAvailable: string;
  };
}

const worldBubbleColoursLegacy: IBubbleColours = {
  0: {
    available: "white",
    notAvailable: "#8BFFDC",
  },

  1: {
    available: "white",
    notAvailable: "#7CEFFF",
  },

  2: {
    available: "white",
    notAvailable: "#FFB7A0",
  },
  3: {
    available: "white",
    notAvailable: "#F2A1FF",
  },
};

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

export const getWorldBubbleColours = (isLegacy: boolean) => (isLegacy ? worldBubbleColoursLegacy : worldBubbleColours);
