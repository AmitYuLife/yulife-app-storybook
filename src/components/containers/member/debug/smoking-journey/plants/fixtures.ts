import { ComponentProps } from "react";
import { AnimationModes } from "./types";
import { AnimatedPlants } from "@components/molecules";

export const COMPONENT_PROPS: Record<AnimationModes, ComponentProps<typeof AnimatedPlants>> = {
  reset: {
    canStartPlantAnimation: false,
    lapsed: true,
    animationStage: 1,
    items: [
      {
        start: 0,
        end: 0,
        animation:
          "https://yulife-local.imgix.net/smoking-cessation/progress-animation-2024-08-21-2/forest-plant.json?ixlib=js-3.2.1&s=0385fa7a78a755bdaeba9176323ed6ef",
      },
      {
        start: 0,
        end: 0,
        animation:
          "https://yulife-local.imgix.net/smoking-cessation/progress-animation-2024-08-21-2/ocean-plant.json?ixlib=js-3.2.1&s=35e85d64d37ea04271c174639066e66a",
      },
      {
        start: 0,
        end: 0,
        animation:
          "https://yulife-local.imgix.net/smoking-cessation/progress-animation-2024-08-21-2/desert-plant.json?ixlib=js-3.2.1&s=cfb057cd988bf0f63f8d74693d71c5d7",
      },
      {
        start: 0,
        end: 0,
        animation:
          "https://yulife-local.imgix.net/smoking-cessation/progress-animation-2024-08-21-2/mountain-plant.json?ixlib=js-3.2.1&s=1d7726a62d9058621d2b6e6089989035",
      },
    ],
  },
  start: {
    canStartPlantAnimation: true,
    lapsed: false,
    animationStage: 28,
    items: [
      {
        start: 0,
        end: 1,
        animation:
          "https://yulife-local.imgix.net/smoking-cessation/progress-animation-2024-08-21-2/forest-plant.json?ixlib=js-3.2.1&s=0385fa7a78a755bdaeba9176323ed6ef",
      },
      {
        start: 0,
        end: 1,
        animation:
          "https://yulife-local.imgix.net/smoking-cessation/progress-animation-2024-08-21-2/ocean-plant.json?ixlib=js-3.2.1&s=35e85d64d37ea04271c174639066e66a",
      },
      {
        start: 0,
        end: 1,
        animation:
          "https://yulife-local.imgix.net/smoking-cessation/progress-animation-2024-08-21-2/desert-plant.json?ixlib=js-3.2.1&s=cfb057cd988bf0f63f8d74693d71c5d7",
      },
      {
        start: 0,
        end: 1,
        animation:
          "https://yulife-local.imgix.net/smoking-cessation/progress-animation-2024-08-21-2/mountain-plant.json?ixlib=js-3.2.1&s=1d7726a62d9058621d2b6e6089989035",
      },
    ],
  },
};
