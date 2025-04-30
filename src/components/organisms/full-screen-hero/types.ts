export enum FullScreenHeroBackground {
  YugiClimbing = "YugiClimbing",
  YugiGardening = "YugiGardening",
  Rewards = "Rewards",
}

export type FullScreenHeroSlide = {
  title: string;
  foregroundComponent?: React.ReactNode;
  backgroundComponent?: React.ReactNode;
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
