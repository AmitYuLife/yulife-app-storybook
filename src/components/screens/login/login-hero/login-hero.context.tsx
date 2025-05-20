import { createContext, useContext } from "react";

/**
 * To perfectly calculate the amount of space the chest animation can take up, we need to know the height of the title section and the cta container.
 * This context is used to store and update these heights, avoiding the need to pass them down through props.
 */

interface ILoginHeroContext {
  titleSectionHeight: number;
  ctaContainerHeight: number;
  setTitleSectionHeight: (height: number) => void;
  setCtaContainerHeight: (height: number) => void;
}

export const LoginHeroContext = createContext<ILoginHeroContext>({
  titleSectionHeight: 160,
  ctaContainerHeight: 300,
  setTitleSectionHeight: (_height: number) => ({}),
  setCtaContainerHeight: (_height: number) => ({}),
});

export const useLoginHeroContext = () => useContext(LoginHeroContext);
