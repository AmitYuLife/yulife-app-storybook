export enum FullScreenHeroBackground {
  YugiClimbing = "YugiClimbing",
  YugiGardening = "YugiGardening",
  Rewards = "Rewards",
}

export type FullScreenHeroProps = {
  primaryCta: {
    label: string;
    onPress: () => void;
  };
  secondaryCta?: {
    label: string;
    onPress: () => void;
  };
  disclaimerMarkdown?: string;
  slides: {
    title: string;
    backgroundImage: FullScreenHeroBackground;
  }[];
};
