import { YUGI_INTRO_TYPE } from "../../../../containers/products/fib/subcontainers/fib.yugi-intro.container";

export const getData = (type: YUGI_INTRO_TYPE) => {
  switch (type) {
    case YUGI_INTRO_TYPE.INTRO_UNDERWRITING:
      return [
        {
          text:
            "Hi, I’m Yugi! I can craft items that give you both personalised life insurance and special powers in the Yuniverse.",
        },
        {
          text:
            "I’ll whip up a bespoke policy just for you. Before we get down to details, let’s choose your style for a perfect fit.",
        },
      ];
    case YUGI_INTRO_TYPE.FOREST_STYLE_SELECTED:
      return [
        {
          text: "Great choice - that look is evergreen! Ready to see what I can make for you?",
        },
      ];
    case YUGI_INTRO_TYPE.OCEAN_STYLE_SELECTED:
      return [
        {
          text: "Great choice - that fabric really flows! Ready to see what I can make for you?",
        },
      ];
    case YUGI_INTRO_TYPE.DESERT_STYLE_SELECTED:
      return [
        {
          text: "Great choice - ready for fun in the sun! Ready to see what I can make for you?",
        },
      ];
    case YUGI_INTRO_TYPE.MOUNTAIN_STYLE_SELECTED:
      return [
        {
          text: "Great choice - attitude at altitude! Ready to see what I can make for you?",
        },
      ];
    case YUGI_INTRO_TYPE.PACKAGE_CHOSEN:
      return [
        {
          text: "Excellent choice! On to the “final fitting” to gather some additional info about you!",
        },
        {
          text: "Please answer honestly and accurately, to ensure I get you the perfect fit!",
        },
      ];

    case YUGI_INTRO_TYPE.ANSWERS_SUBMITTED:
      return [{ text: "Alright, I’ve worked out a few different options for you at different price points." }];
  }
};
