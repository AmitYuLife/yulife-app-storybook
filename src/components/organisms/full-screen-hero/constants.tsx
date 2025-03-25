import { FullScreenHeroBackground } from "./types";
import YugiClimbingBackground from "./backgrounds/yugi-climbing-background";
import YugiGardeningBackground from "./backgrounds/yugi-gardening-background";
import RewardsBackground from "./backgrounds/rewards-background";

export const BACKGROUND_IMAGE_MAP: Record<FullScreenHeroBackground, React.JSX.Element> = {
  [FullScreenHeroBackground.YugiClimbing]: <YugiClimbingBackground />,
  [FullScreenHeroBackground.YugiGardening]: <YugiGardeningBackground />,
  [FullScreenHeroBackground.Rewards]: <RewardsBackground />,
};
