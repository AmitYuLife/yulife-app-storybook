export enum FullScreenHeroBackground {
  YugiClimbing = "YugiClimbing",
  YugiGardening = "YugiGardening",
  Rewards = "Rewards",
}

export type FullScreenHeroSlide = {
  title: string;
  backgroundImage: FullScreenHeroBackground;
};

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
  slides: FullScreenHeroSlide[];
};
