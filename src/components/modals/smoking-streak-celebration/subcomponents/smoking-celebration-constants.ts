import { DEVICES } from "@styles/media";
import { SpotlightProps } from "@organisms";

export const MAX_SIZE_GAPS_EXPECTED_HEIGHT = DEVICES.iPhone8.height;
export const DEFAULT_MAIN_IMAGE_SIZE = {
  w: 106,
  h: 106,
};
export const CUSTOM_IMAGE_SIZE = {
  w: 106,
  h: 106,
};
export const FADE_IN_DURATION = 500;
export const FADE_OUT_DURATION = 300;
export const TEXT_FADE_IN_DELAY = 200;
export const FADE_IN_DELAY = 200;
export const FADE_IN_CONTENT_DURATION = 400;
export const CONTENT_SWITCH_FADE_IN_DELAY = 250;
export const FADE_IN_STAGGER = 300;
export const SPOTLIGHT_PROPS: Omit<SpotlightProps, "children" | "wrapperProps"> = {
  initialWidth: DEFAULT_MAIN_IMAGE_SIZE.w,
  initialHeight: DEFAULT_MAIN_IMAGE_SIZE.h,
  rays: {
    opacity: 0.5,
  },
  glow: {
    radius: 100,
    color: "#D2A935",
    duration: 4000,
    opacityInterpolation: [
      [0, 0.4, 0.7, 1],
      [0.8, 0.8, 0.4, 0],
    ],
  },
  stars: {
    starSize: 10,
    dynamicStarCount: {
      initialCount: 10,
      minCount: 10,
      maxCount: 15,
    },
    radius: 200,
    shootingSpeed: [200, 1500],
    minDistance: 100,
    colors: ["#FFF", "#FCE93D"],
    fadeOutStartFraction: 0.7,
  },
};
