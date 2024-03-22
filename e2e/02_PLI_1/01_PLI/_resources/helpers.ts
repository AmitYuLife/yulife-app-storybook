import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when";
import * as then from "../_steps/then";
import { CUSTOMER_37 } from "@data";
import {
  PRODUCT_STEP_BODY_SCROLL_VIEW,
  VIEW_TOP_RIGHT_COIN_COUNTER,
} from "@ids";



const styleText = `Almost there, choose a style for your Rare chest`;

export const CHECKOUT = async (isCovered: boolean, cover: string) => {
  const nextScreenTitle = isCovered ? "Item unlocked!\nYou've powered up your protection." : "We’ll be in touch";
  const nextScreenBody =
    nextScreenTitle == "Item unlocked!\nYou've powered up your protection."
      ? `Congratulations, you’ve successully purchased\n${cover} cover, your policy is now active.`
      : "Based on your answers we’ll need additional information. We’ll reach out shortly by email and text to let you know what to do next. No payment will be taken from you.\n\nIn the meantime, you are now covered by Accidental Death Benefit provided by your selected policy:";

  When("I add contact details", when.addContactDetails, async () => {
    Then("I should be on the checkout page", then.isOnScreen("Checkout"));
    When("I add GP details", when.addGPDetails, async () => {
      Then("I should be on the checkout page", then.isOnScreen("Checkout"));
      When("I add payment details", when.addPaymentDetails, async () => {
        Then("I should be on the checkout page", then.isOnScreen("Checkout"));
        When(`I tap Purchase cover`, when.tapText(`Purchase cover`), async () => {
          Then(`I should be on the ${nextScreenTitle} screen`, then.isOnScreen(nextScreenTitle));
          Then(`I should see the ${nextScreenBody}`, then.isOnScreen(nextScreenBody));
        });
      });
    });
  });
};


export const REVIEW_YUSCREEN = async () => {
  When("I tap Continue", when.tapText("Continue"), async () => {
    Then("I should see Life Insurance product slot", then.textVisible("Life Insurance"));
    Then("I should Not see Add Life insurance", then.textNotVisible("Add Life insurance"));
  });
};




