import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when";
import * as then from "./then";
import {
  YUCOIN_POWER,
  BACK_BUTTON,
  ONBOARDING_SCREEN,
  V4_YUSCREEN,
  BUTTON_CLOSE_HEADER,
  TOP_RIGHT_ITEM_IMAGE,
} from "@ids";
import * as text  from "yuscreen/yuscreen_v4/_resources/fixture";
import { UKProductData } from "../_resources/types";

export const BUPA_CLAIM = async () => {
  When("I tap How to make claim", when.tapText("How to make a claim"), async () => {
    Then("I should see Bupa claim text", then.bupaClaimInfo);
    When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
      Then("I should see again Policy details", then.textVisible("Policy details"));
    });
  });
};

export const FAQ = async () => {
  When("I swipe down the page", when.swipeFromText("How to make a claim", "up", "slow"), async () => {
    When("I tap FAQs text", when.tapText("FAQs"), async () => {
      Then("I should see FAQs info", then.FAQInfo);
      When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
        Then("I should see again Billing info", then.textVisible("Billing info"));
      });
    });
  });
};

export const PAYMENT_HISTORY = async (ammountPaid: string, payStatus: string) => {
  When("I tap View payment history text", when.tapText("View payment history", 1000, true), async () => {
    Then("I should see View payment history info", then.paymentHistoryInfo(ammountPaid, payStatus));
    When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
      Then("I should see again Billing info", then.textVisible("Billing info"));
    });
  });
};

type coverLevel = "Common" | "Rare" | "Epic";

export const PACKAGE_COVERING = async (cover: coverLevel) => {
  When(`I tap "What I'm covered for" text`, when.tapText("What I'm covered for"), async () => {
    Then(`I should see correct ${cover} Package details and price`, then.packageVisible(cover));
    When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
      Then("I should see again Policy details", then.textVisible("Policy details"));
    });
  });
};

export const CANCELED_DENTAL_POLICY = async () => {
  When("I tap at Dental", when.tapText("Dental"), async () => {
    Then("I should see canceled notification", then.cancelledNotificationVisible);
    Then("I should see correct product details", then.dentalProductInfo("Common", "0321"));
  });
};

export const ONBOARDING_YUSCREEN = async (packType: string, yuCoinPower: string) => {

  const earnRate0 = "1"; // If product having 0 earn rate will get 1

  Then(`I should see ${text.yuCoinText} text`, then.textVisibleAtIndex(text.yuCoinText, 0))
  Then(`I should see ${text.powerText} text`, then.textVisible(text.powerText))

switch (packType) {
  case "DentalCover":
      Then(`I should see ${text.groupDental}`, then.textVisible(text.groupDental))
      Then(`I should see ${text.startsSoon}`, then.textVisible(text.startsSoon))
      Then(`I should Not see Keepsake text`, then.textNotVisible("Keepsake"))
      break;
  case "KeepSake":
      Then(`I should see ${earnRate0} earn rate`, then.textVisibleAtIndex(earnRate0, 1))
      Then(`I should see 1 earn rate`, then.textVisibleAtIndex("1", 0))
      Then(`I should see Keepsake text`, then.textVisible("Keepsake"))
    break;
  default:
    break;
  }
  Then(`I should see ${ONBOARDING_SCREEN} id`, then.idVisible(ONBOARDING_SCREEN))
  Then(`I should see ${text.protectionPowered} text`, then.textVisible(text.protectionPowered))
  Then(`I should see ${text.earnRewardsCopy} text`, then.textVisible(text.earnRewardsCopy))
  When(`When i swipe from ${text.protectionPowered}`, when.swipeFromText(text.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${text.buttonText} text`, then.textVisible(text.buttonText))
  })
}


export const YUSCREEN = async (customer: any, packType: string, yuCoinPower: string, buttonText = "Check out my power") => {

  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;

  When(`I tap ${buttonText}`, when.tapText(buttonText), async () => {
      Then(`I should see ${text.yuMojiBuilder}`, then.textVisible(text.yuMojiBuilder))
  })
  When("I swipe down the screen", when.swipeFromText(text.yuMojiBuilder, "up", "slow"), async () => {
      When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see ${firstName} ${lastName} text`, then.textVisible(`${firstName} ${lastName}`))
          Then(`I should see ${V4_YUSCREEN} id`, then.idVisible(V4_YUSCREEN))
          Then(`I should see ${text.createYumujiHeading} text`, then.textVisible(`${text.createYumujiHeading}`))
          Then(`I should see ${text.createYumujiText} text`, then.textVisible(`${text.createYumujiText}`))
          Then(`I should see ${text.createYumujiCTA} text`, then.textVisible(`${text.createYumujiCTA}`))
          Then(`I should see ${text.yuCoinText} text`, then.textVisibleAtIndex(`${text.yuCoinText}`, 0))
          Then(`I should see ${text.powerText} text`, then.textVisible(`${text.powerText}`))

          switch (packType) {
              case "Keepsake":
                  Then(`I should see ${yuCoinPower} yucoin power`, then.textVisibleAtIndex(yuCoinPower, 1))
                  Then(`I should see Keepsake slot`, then.textVisible("Keepsake"))
                  break;
              case "GDent":
                  Then(`I should see ${yuCoinPower} yucoin power`, then.textVisible(yuCoinPower))
                  Then(`I should NOT see Keepsake slot`, then.textNotVisible("Keepsake"))
                  Then(`I should NOT see ${text.lifeInsurance} slot`, then.textNotVisible(text.lifeInsurance))
                  Then(`I should NOT see ${text.noProductText} slot`, then.textNotVisible(text.noProductText))
                break;
              default:
                  break;
          }
      })
  })
}

export const PRODUCT_CHECK = async (productCard: UKProductData) => {
  When(`I tap ${productCard.productName} slot text`, when.tapText(productCard.productName), async () => {
      Then(`I should see top right close x image`, then.idVisible(BUTTON_CLOSE_HEADER("button_only")))
      Then(`I should see ${productCard.productName} header text`, then.textVisibleAtIndex(productCard.productName, 1))
      Then(`I should see correct image`, then.idVisible(TOP_RIGHT_ITEM_IMAGE(productCard.rightImage)))
      Then(`I should see ${productCard.yuCoinPower} text`, then.idVisible(YUCOIN_POWER(productCard.yuCoinPower)))
      Then(`I should see ${productCard.productDescription} text`, then.textVisible(productCard.productDescription))
      When(`I tap close x `, when.tapID(BUTTON_CLOSE_HEADER("button_only")), async () => {
        Then(`I should NOT see ${productCard.productDescription} text`, then.textNotVisible(productCard.productDescription))
      })
  })
}
