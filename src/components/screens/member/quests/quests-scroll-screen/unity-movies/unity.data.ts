import { Colours } from "@styles";

export interface IUnityData {
  color: string;
  waves: string;
  background: string;
  foreground: string;
}

interface AnimationConfig {
  /** total frames for lottie's animation (can be checked with LottieFiles app) */
  totalFrames: number;
  /** the frame number where final state of YuCoin is on bottom position */
  loopStartFrame: number;
  /** the frame number where final state of YuCoin is on bottom position after a full up/down animation (should be bigger than loopStartFrame) */
  loopEndFrame: number;
  totalDuration?: number; // Remove it after we'll have all unity animations with frame rate 24, calculate it using total frames and frame rate, totalDuration = (totalFrames/frameRate) * 1000
  frameRate: number;
}

export function getAssets(unity: number): IUnityData {
  const index = Math.floor((unity - 1) / 50);
  return data[index] || data[index % 4];
}

export function getYuniversalAnimation(level: number): AnimationConfig {
  return YUNIVERSAL_ANIMATION_CONFIG.has(level)
    ? YUNIVERSAL_ANIMATION_CONFIG.get(level)
    : DEFAULT_YUNIVERSAL_ANIMATION_CONFIG;
}

export function getUnityAnimation(level: number): AnimationConfig {
  return UNITY_ANIMATION_CONFIG.has(level) ? UNITY_ANIMATION_CONFIG.get(level) : DEFAULT_UNITY_ANIMATION_CONFIG;
}

const DEFAULT_YUNIVERSAL_ANIMATION_CONFIG = {
  totalFrames: 450,
  loopStartFrame: 288,
  loopEndFrame: 388,
  frameRate: 29,
};
const DEFAULT_UNITY_ANIMATION_CONFIG = {
  totalFrames: 300,
  loopStartFrame: 178,
  loopEndFrame: 284,
  frameRate: 29,
  totalDuration: 10000, // This is from old configuration, will be removed when all animations will have 24 frame rate
};

const YUNIVERSAL_ANIMATION_CONFIG = new Map<number, AnimationConfig>([
  [200, { totalFrames: 450, loopStartFrame: 280, loopEndFrame: 390, frameRate: 29 }],
  [400, { totalFrames: 570, loopStartFrame: 220, loopEndFrame: 349, frameRate: 29 }],
  [600, DEFAULT_YUNIVERSAL_ANIMATION_CONFIG], // current animation has only 300 frames we need to change it
  [800, { totalFrames: 266, loopStartFrame: 208, loopEndFrame: 266, frameRate: 24 }],
]);

const UNITY_ANIMATION_CONFIG = new Map<number, AnimationConfig>([
  [850, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [900, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [950, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
]);

const data = [
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/forest-background-loop.json"),
    background: require("./assets/background/earth/forest-background.json"),
    foreground: require("./assets/foreground/earth/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/ocean-background-loop.json"),
    background: require("./assets/background/earth/ocean-background.json"),
    foreground: require("./assets/foreground/earth/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/desert-background-loop.json"),
    background: require("./assets/background/earth/desert-background.json"),
    foreground: require("./assets/foreground/earth/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/mountain-background-loop.json"),
    background: require("./assets/background/earth/mountain-background.json"),
    foreground: require("./assets/foreground/earth/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/forest-background-loop.json"),
    background: require("./assets/background/red/forest-background.json"),
    foreground: require("./assets/foreground/red/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/ocean-background-loop.json"),
    background: require("./assets/background/red/ocean-background.json"),
    foreground: require("./assets/foreground/red/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/desert-background-loop.json"),
    background: require("./assets/background/red/desert-background.json"),
    foreground: require("./assets/foreground/red/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/mountain-background-loop.json"),
    background: require("./assets/background/red/mountain-background.json"),
    foreground: require("./assets/foreground/red/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/forest-background-loop.json"),
    background: require("./assets/background/bright/forest-background.json"),
    foreground: require("./assets/foreground/bright/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/ocean-background-loop.json"),
    background: require("./assets/background/bright/ocean-background.json"),
    foreground: require("./assets/foreground/bright/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/desert-background-loop.json"),
    background: require("./assets/background/bright/desert-background.json"),
    foreground: require("./assets/foreground/bright/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/mountain-background-loop.json"),
    background: require("./assets/background/bright/mountain-background.json"),
    foreground: require("./assets/foreground/bright/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/forest-background-loop.json"),
    background: require("./assets/background/orange/forest-background.json"),
    foreground: require("./assets/foreground/orange/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/ocean-background-loop.json"),
    background: require("./assets/background/orange/ocean-background.json"),
    foreground: require("./assets/foreground/orange/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/desert-background-loop.json"),
    background: require("./assets/background/orange/desert-background.json"),
    foreground: require("./assets/foreground/orange/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/mountain-background-loop.json"),
    background: require("./assets/background/orange/mountain-background.json"),
    foreground: require("./assets/foreground/orange/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/forest-background-loop.json"),
    background: require("./assets/background/purple/forest-background.json"),
    foreground: require("./assets/foreground/purple/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/ocean-background-loop.json"),
    background: require("./assets/background/purple/ocean-background.json"),
    foreground: require("./assets/foreground/purple/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/desert-background-loop.json"),
    background: require("./assets/background/purple/desert-background.json"),
    foreground: require("./assets/foreground/purple/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/mountain-background-loop.json"),
    background: require("./assets/background/purple/mountain-background.json"),
    foreground: require("./assets/foreground/orange/mountain-foreground.json"), // TODO: replace this one with purple
  },
];
