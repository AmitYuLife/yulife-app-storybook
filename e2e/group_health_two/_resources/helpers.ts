import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when";
import * as then from "../_steps/then";
import { TEXT_TEMPLATE } from "@ids";
import { GAME_CAROUSEL } from "./types";

export const gameCarouselScroll = (contents: GAME_CAROUSEL, unlocked: number) => async () => {
  const cards = contents.cards;

  for (let i = 1; i < cards.length - 1; i++) {
    const isUnlocked = unlocked > i ? true : false;

    When(
      "I scroll to the left",
      when.scrollFromID(TEXT_TEMPLATE(cards[i].title, "b2b"), "left", "slow", 0.35),
      async () => {
        Then(
          `I should see the card for ${cards[i + 1].title}`,
          then.carouselCardVisible(cards[i + 1], isUnlocked)
        );
      }
    );
  }
};
