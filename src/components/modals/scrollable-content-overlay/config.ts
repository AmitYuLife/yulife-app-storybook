import { Colours } from "@styles";

export const gradient = {
  bottom: {
    colors: [Colours.neutral.white, Colours.neutral.white, Colours.gradients.whiteTransparent],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    locations: [0, 0.9, 1],
  },
  top: {
    colors: [Colours.neutral.white, Colours.neutral.white, Colours.gradients.whiteTransparent],
    start: { x: 0, y: 1 },
    end: { x: 0, y: 0 },
    locations: [0, 0.9, 1],
  },
};
