import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when"
import * as then from "../_steps/then"
import { TEXT_TEMPLATE } from "@ids";
import { GAME_CAROUSEL } from "./types";
import * as ids from "@ids";
import { unlock_tab as unlock_tab_GIP } from "./gip_game_fixtures";
import { unlock_tab as unlock_tab_GH } from "./gh_game_fixtures";


export const gameCarouselScroll = (contents: GAME_CAROUSEL, unlocked: number) => async () => {
    const cards = contents.cards;

    for(let i = 1; i < cards.length -1; i++){
        const isUnlocked = unlocked > i ? true : false

        When("I scroll to the left", when.scrollFromID(TEXT_TEMPLATE(cards[i].title, "b2b"), "left", "slow", 0.35), async () => {
            Then(`I should see the card for ${cards[i + 1].title}`, then.carouselCardVisible(cards[i + 1], isUnlocked, (i - unlocked)));
          });
    }
}

export const gipRewards = (locale: string, level: number) => async () => {
    const cards = unlock_tab_GIP[locale].carousel_cards;
    
    for(let i = 0; i < cards.length; i++){
        const remainingLevels = cards[i].level - level;
        const levelText = remainingLevels <= 1 ? "level" : "levels";
        const levelMessage = `Advance ${remainingLevels} more ${levelText} to unlock this reward`;
        if(i === 0){
            When("I wait", when.wait(1000), async () => {
                Then("I should see the correct card title", then.textVisible(cards[i].card_title))
            })
        } else {
            When("I swipe along the carousel", when.scrollFromID(ids.BATTLE_PASS_LIST_ITEM_CTA(cards[i - 1].id), "left", "slow", 0.35), async () => {
                Then(`I should see the correct card title for ${cards[i].card_title}`, then.textVisible(cards[i].card_title, 1000))
            })
        }
        When("I tap the reward", when.tapID(ids.BATTLE_PASS_LIST_ITEM_CTA(cards[i].id)), async () => {
                Then(`I should see the half modal header for ${cards[i].card_title}`, then.textVisible(cards[i].header, 1000))
                Then(`I should see the correct levels remaining for ${cards[i].card_title}`, then.textVisible(levelMessage))
        })
        When("I swipe from the heading", when.swipeFromText(cards[i].header, "up", "fast"), async () => {
                Then(`I can see the first bullet point for the card for ${cards[i].card_title}`, then.textVisible(cards[i].point_1, 1000))
                Then(`I can see the second bullet point for the card for ${cards[i].card_title}`, then.textVisible(cards[i].point_2, 1000))
        })
        When("I tap to close the modal", when.tapID(ids.REWARDS_GOT_IT), async () => {
                Then(`The modal is closed so I can't see the header anymore for ${cards[i].card_title}`, then.textNotVisible(cards[i].header, 1000))
        })
        
    }
}

export const ghRewards = (locale: string) => async () => {
    const cards = unlock_tab_GH[locale].carousel_cards;
    
    for(let i = 0; i < cards.length; i++){
        if(i === 0){
            When("I wait", when.wait(1000), async () => {
                Then("I should see the correct card title", then.textVisible(cards[i].card_title))
            })
        } else {
            When("I swipe along the carousel", when.scrollFromText(cards[i].card_title, "left", "slow", 0.35), async () => {
                Then(`I should see the correct card title for ${cards[i].card_title}`, then.textVisible(cards[i].card_title, 1000))
            })
        }
    }
}
