import { ContentItemLottieFragment as GqlLottie } from "@graphql/__generated";

export type Props = Omit<GqlLottie, "onAnimationEnd"> & {
  shouldPlay?: boolean;
  keyShouldPlay?: string;
  shouldUseFadeIn?: boolean;
  onAnimationEnd?: GqlLottie["onAnimationEnd"] | (() => void);
};
