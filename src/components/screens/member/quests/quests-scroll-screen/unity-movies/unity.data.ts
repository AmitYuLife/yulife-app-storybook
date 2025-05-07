import { Colours } from "@styles";

export interface IUnityData {
  color: string;
  backgroundChest: string;
  backgroundGradient: string;
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
  [1000, { totalFrames: 394, loopStartFrame: 288, loopEndFrame: 394, frameRate: 24 }],
]);

const UNITY_ANIMATION_CONFIG = new Map<number, AnimationConfig>([
  [850, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [900, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [950, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [1050, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [1100, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [1150, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [1250, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [1300, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
  [1350, { totalFrames: 230, loopStartFrame: 144, loopEndFrame: 230, frameRate: 24 }],
]);

const data = [
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/earth/forest-gradient-background.webp"),
    backgroundChest: require("./assets/background/earth/forest-chest-background.webp"),
    background: require("./assets/background/earth/forest-background.json"),
    foreground: require("./assets/foreground/earth/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/earth/ocean-gradient-background.webp"),
    backgroundChest: require("./assets/background/earth/ocean-chest-background.webp"),
    background: require("./assets/background/earth/ocean-background.json"),
    foreground: require("./assets/foreground/earth/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/purple/desert-gradient-background.webp"),
    backgroundChest: require("./assets/background/purple/desert-chest-background.webp"),
    background: require("./assets/background/earth/desert-background.json"),
    foreground: require("./assets/foreground/earth/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    backgroundGradient: require("./assets/background/common/yuniverse-background.webp"),
    backgroundChest: require("./assets/background/common/yuniverse-background.webp"),
    background: require("./assets/background/earth/mountain-background.json"),
    foreground: require("./assets/foreground/earth/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/red/forest-gradient-background.webp"),
    backgroundChest: require("./assets/background/red/forest-chest-background.webp"),
    background: require("./assets/background/red/forest-background.json"),
    foreground: require("./assets/foreground/red/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/red/ocean-gradient-background.webp"),
    backgroundChest: require("./assets/background/red/ocean-chest-background.webp"),
    background: require("./assets/background/red/ocean-background.json"),
    foreground: require("./assets/foreground/red/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/red/desert-gradient-background.webp"),
    backgroundChest: require("./assets/background/red/desert-chest-background.webp"),
    background: require("./assets/background/red/desert-background.json"),
    foreground: require("./assets/foreground/red/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    backgroundGradient: require("./assets/background/common/yuniverse-background.webp"),
    backgroundChest: require("./assets/background/common/yuniverse-background.webp"),
    background: require("./assets/background/red/mountain-background.json"),
    foreground: require("./assets/foreground/red/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/bright/forest-gradient-background.webp"),
    backgroundChest: require("./assets/background/bright/forest-chest-background.webp"),
    background: require("./assets/background/bright/forest-background.json"),
    foreground: require("./assets/foreground/bright/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/bright/ocean-gradient-background.webp"),
    backgroundChest: require("./assets/background/bright/ocean-chest-background.webp"),
    background: require("./assets/background/bright/ocean-background.json"),
    foreground: require("./assets/foreground/bright/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/bright/desert-gradient-background.webp"),
    backgroundChest: require("./assets/background/bright/desert-chest-background.webp"),
    background: require("./assets/background/bright/desert-background.json"),
    foreground: require("./assets/foreground/bright/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    backgroundGradient: require("./assets/background/common/yuniverse-background.webp"),
    backgroundChest: require("./assets/background/common/yuniverse-background.webp"),
    background: require("./assets/background/bright/mountain-background.json"),
    foreground: require("./assets/foreground/bright/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/orange/forest-gradient-background.webp"),
    backgroundChest: require("./assets/background/orange/forest-chest-background.webp"),
    background: require("./assets/background/orange/forest-background.json"),
    foreground: require("./assets/foreground/orange/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/orange/ocean-gradient-background.webp"),
    backgroundChest: require("./assets/background/orange/ocean-chest-background.webp"),
    background: require("./assets/background/orange/ocean-background.json"),
    foreground: require("./assets/foreground/orange/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/orange/desert-gradient-background.webp"),
    backgroundChest: require("./assets/background/orange/desert-chest-background.webp"),
    background: require("./assets/background/orange/desert-background.json"),
    foreground: require("./assets/foreground/orange/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    backgroundGradient: require("./assets/background/common/yuniverse-background.webp"),
    backgroundChest: require("./assets/background/common/yuniverse-background.webp"),
    background: require("./assets/background/orange/mountain-background.json"),
    foreground: require("./assets/foreground/orange/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/purple/forest-gradient-background.webp"),
    backgroundChest: require("./assets/background/purple/forest-chest-background.webp"),
    background: require("./assets/background/purple/forest-background.json"),
    foreground: require("./assets/foreground/purple/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/purple/ocean-gradient-background.webp"),
    backgroundChest: require("./assets/background/purple/ocean-chest-background.webp"),
    background: require("./assets/background/purple/ocean-background.json"),
    foreground: require("./assets/foreground/purple/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/purple/desert-gradient-background.webp"),
    backgroundChest: require("./assets/background/purple/desert-chest-background.webp"),
    background: require("./assets/background/purple/desert-background.json"),
    foreground: require("./assets/foreground/purple/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    backgroundGradient: require("./assets/background/common/yuniverse-background.webp"),
    backgroundChest: require("./assets/background/common/yuniverse-background.webp"),
    background: require("./assets/background/purple/mountain-background.json"),
    foreground: require("./assets/foreground/purple/mountain-foreground.json"),
  },

  // Ring planet
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/ring/forest-gradient-background.webp"),
    backgroundChest: require("./assets/background/ring/forest-chest-background.webp"),
    background: require("./assets/background/ring/forest-background.json"),
    foreground: require("./assets/foreground/ring/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/ring/ocean-gradient-background.webp"),
    backgroundChest: require("./assets/background/ring/ocean-chest-background.webp"),
    background: require("./assets/background/ring/ocean-background.json"),
    foreground: require("./assets/foreground/ring/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/ring/desert-gradient-background.webp"),
    backgroundChest: require("./assets/background/ring/desert-chest-background.webp"),
    background: require("./assets/background/ring/desert-background.json"),
    foreground: require("./assets/foreground/ring/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    backgroundGradient: require("./assets/background/common/yuniverse-background.webp"),
    backgroundChest: require("./assets/background/common/yuniverse-background.webp"),
    background: require("./assets/background/purple/mountain-background.json"), // TODO: replace with ring
    foreground: require("./assets/foreground/orange/mountain-foreground.json"), // // TODO: replace with ring
  },

  // Lunar planet
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/lunar/forest-gradient-background.webp"),
    backgroundChest: require("./assets/background/lunar/forest-chest-background.webp"),
    background: require("./assets/background/lunar/forest-background.json"),
    foreground: require("./assets/foreground/lunar/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/lunar/ocean-gradient-background.webp"),
    backgroundChest: require("./assets/background/lunar/ocean-chest-background.webp"),
    background: require("./assets/background/lunar/ocean-background.json"),
    foreground: require("./assets/foreground/lunar/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    backgroundGradient: require("./assets/background/lunar/desert-gradient-background.webp"),
    backgroundChest: require("./assets/background/lunar/desert-chest-background.webp"),
    background: require("./assets/background/lunar/desert-background.json"),
    foreground: require("./assets/foreground/lunar/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    backgroundGradient: require("./assets/background/common/yuniverse-background.webp"),
    backgroundChest: require("./assets/background/common/yuniverse-background.webp"),
    background: require("./assets/background/purple/mountain-background.json"), // TODO: replace with lunar
    foreground: require("./assets/foreground/orange/mountain-foreground.json"), // TODO: replace with lunar
  },
];
