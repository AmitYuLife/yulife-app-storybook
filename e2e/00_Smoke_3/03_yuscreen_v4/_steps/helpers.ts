import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when";
import * as then from "./then";
import {
  YUMOJI_AVATAR_YUSCREEN_V4,
  VIEW_TOP_RIGHT_COIN_COUNTER,
  TEXT_TEMPLATE,
  BUTTON_CLOSE,
  RIGHT_STATUS_ICON,
  YUCOIN_POWER,
  CONTENT_ITEM_IMAGE,
  V4_YUSCREEN,
  CONTENT_MIDDLE_ITEM_IMAGE,
  CONTENT_ITEM_INPUT,
  YUSCREEN_SCROLL_VIEW,
} from "@ids";

export const CREATE_DEFAULT_YUMOJI = async (totalYucoinCount: number) => {
  When("I create the default yumoji", when.createDefaultYumoji, async () => {
    When("I scroll up if needed", when.scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, YUMOJI_AVATAR_YUSCREEN_V4, "up", 0.8, 0.8), async () => {
      Then("I should see my Yumoji", then.idVisible(YUMOJI_AVATAR_YUSCREEN_V4));
      Then(`I should have ${totalYucoinCount} YuCoins`, then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(totalYucoinCount)));
    })
  });
};

export const CHECK_PRODUCT_BUTTON_LINK = async (productButton: string, productOnboardingViewText: string) => {
  When(`I tap on ${productButton}`, when.tapText(productButton), async () => {
    Then(
      `I should be on the first ${productOnboardingViewText} onboarding screen`,
      then.idVisible(TEXT_TEMPLATE(productOnboardingViewText))
    );
    When("I wait", when.wait(2000), async () => {
      When("I tap the close button", when.closeScreen, async () => {
        When("I tap the close button", when.closeScreenAtHeader("yulife"), async () => {
          Then(
            `I should not see ${productOnboardingViewText} onboarding screen`,
            then.textNotVisible(productOnboardingViewText)
          );
        });
      });
    })
  });
};

export const CHECK_CAROUSEL_DENTAL_BUTTON_LINK = async () => {
  const browseMoreProtection = "Browse more protection";
  const dentalPriceFrom = "From £12.99 per month";
  const moreProtection = "More protection coming soon";

  When("I swipe down the Yu screen page", when.swipeFromText(moreProtection, "up", "fast"), async () => {
    When(`I tap on ${dentalPriceFrom}`, when.tapText(dentalPriceFrom), async () => {
      When("I tap on 'Explore now'", when.tapText("Explore now", 6000), async () => {
        Then(
          `I should be on the first Bupa Dental Plan for YuLife onboarding screen`,
          then.textVisible("Bupa Dental Plan for YuLife", 8000)
        );
      });
      When("I close this screen", when.tapIDAtIndex(BUTTON_CLOSE, 0), async () => {
        Then(`I should be back on the yuscreen v4`, then.idVisible(V4_YUSCREEN));
      });
    });
  });
};

export const CHECK_CAROUSEL_BUTTON_LINK = async (
  direction: string,
  productButton: string,
  productOnboardingViewText: string
) => {
  const dentalPriceFrom = "From £12.99 per month";
  const moreProtection = "More protection coming soon";

  When("I swipe up the Yu screen page", when.swipeFromText(dentalPriceFrom, "down", "slow"), async () => {
    When("I swipe down the Yu screen page", when.swipeFromText(moreProtection, "up", "fast"), async () => {
      When(
        `I swipe right from ${dentalPriceFrom}`,
        when.swipeFromText(dentalPriceFrom, direction, "fast"),
        async () => {
          When(`I tap on ${productButton}`, when.tapText(productButton, 2000), async () => {
            When("I close this screen", when.closeScreen, async () => {
              Then(
                `I should be on the first ${productOnboardingViewText} onboarding screen`,
                then.textVisible(productOnboardingViewText, 4000)
              );
            });
            When("I close this screen", when.tapIDAtIndex(BUTTON_CLOSE, 0), async () => {
              Then(`I should be back on the yuscreen v4`, then.idVisible(V4_YUSCREEN));
            });
          });
        }
      );
    });
  });
};

export const PAYMENT_FAILED = async () => {
  Then("I should see correct status icon if payment failed", then.idVisibleAtIndex(RIGHT_STATUS_ICON, 0));
};

export const CORRECT_PRODUCT_SLOT_BACKGROUND = async (status: string) => {
  When("I wait", when.wait(1000), async () => {
    When("I scroll up if needed", when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, "YuCoin", "up", 0.8, 0.8), async () => {
      Then("I should see correct products Slot background colours", then.productSlotsAreCorrect(status));
    })
  });
};

type RejectionScreen = "Age" | "Answers";

export const REJECTED = async (screen: RejectionScreen, date?: string, time?: string) => {
  const screenText =
    screen === "Age"
      ? "Unfortunately we are unable to offer personal life insurance to anyone under the age of 18, please try again in future!"
      : "Based on your answers, we’re not able to offer you personal life insurance right now.";

  When(`I tap on Life insurance`, when.tapText("Life Insurance"), async () => {
    When("I wait 5 seconds", when.wait(3000), async () => {
      Then(`I should be on the ${screen} rejection screen`, then.textVisible("Sorry about this!"));
      Then(`I should be on the ${screen} rejection screen`, then.textVisible(screenText));
      When(`I tap Continue`, when.tapText("Continue"), async () => {
        Then(`I should not see rejection modal screen`, then.textNotVisible("Sorry about this!"));
      });
    });
  });
};

export const DENTAL_PRODUCT_VIEW = async (packageType: string, membershipEnding: string) => {
  When(`I tap Dental insurance`, when.tapText("Dental"), async () => {
    Then("I should see correct product details", then.dentalProductInfo(packageType, membershipEnding));
  });
};

export const WELLBEING_PRODUCT_VIEW = async (
  wellbeingAccessYuCoin: number,
  yuCoinPower: number
) => {
  When(`I tap Wellbeing Access`, when.tapText("Wellbeing Access"), async () => {
    Then("I should see correct product details", then.wellbeingProductInfo);
    When("I tap the Wellbeing YuCoin icon", when.tapID(YUCOIN_POWER(wellbeingAccessYuCoin)), async () => {
      Then("I should see correct YuCoin Power text", then.yuCoinPowerInfo(yuCoinPower));
      When("I click Got it", when.tapText("Got it!"), async () => {
        Then("I should see Wellbeing Access", then.textVisibleAtIndex("Wellbeing Access", 1));
      });
    });
  });
};

export const YUCOIN_POWER_CHECK = async (customer: any, yuCoinPower: number) => {
  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;

  When("I swipe to YuCoin power", when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, "YuCoin", "up"), async () => {
    When(`I tap YuCoin`, when.tapText("YuCoin"), async () => {
      When("I wait", when.wait(4000), async () => {
        Then("I should see correct YuCoin Power text", then.yuCoinPowerInfo(yuCoinPower));
      });
    });
  })
  When("I click Got it", when.tapText("Got it!"), async () => {
    Then("I should see again my name", then.textVisible(`${firstName} ${lastName}`));
  });
};

export const CHECK_OTHER_PRODUCT_WHEN_HAVE_PAYMENT_FAILED = async (productButton: string) => {
  When("I swipe up ", when.swipeFromText("More protection coming soon", "down", "fast"), async () => {
    When(`I tap on ${productButton}`, when.tapText(productButton), async () => {
      Then(`I should payment overdue screen`, then.paymentOverdueInfo);
      When("I close this screen", when.tapIDAtIndex(BUTTON_CLOSE, 0), async () => {
        Then("I should be able to see Dental insurance", then.textVisible(productButton));
      });
    });
  })
};

export const YUSCREEN_V4 = async (
  customer: any,
  packType: string,
  yuCoinPower: string,
  buttonText = "Check out my power"
) => {
  const yuMojiBuilder = "Create your Yumoji to step into the Yuniverse";

  When(`I tap ${buttonText}`, when.tapText(buttonText), async () => {
    Then(`I should see ${yuMojiBuilder}`, then.textVisible(yuMojiBuilder));
  });
  When(
    "I swipe down the screen",
    when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"),
    async () => {
      When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
        Then(`I should be on YuScreen V4 and see ${packType}`, then.onYuscreenV4(customer, packType, yuCoinPower));
      });
    }
  );
};

export const ONBOARDING_YUSCREEN = async (packType: string, yuCoinPower: string) => {
  Then(`I should see the onboarding Yuscreen and see ${packType}`, then.onboardingYuscreenV4(packType, yuCoinPower));
};

export const GROUP_DENTAL_PRODUCT_VIEW = async (packageType: string, yuCoinPower: string) => {
  When(`I tap Dental Cover`, when.tapText("Dental Cover"), async () => {
    Then("I should see correct product details", then.groupDentalProductInfo(packageType, yuCoinPower));
  });
};

export const REJECTION_SCREEN_INFO = async (productButton: string, rejectionReason: string) => {
  When(`I tap on ${productButton}`, when.tapText(productButton), async () => {
    Then(`I should see ${rejectionReason}`, then.ageRejectionTextInfo(rejectionReason));
    When("I close this screen", when.tapText("Continue"), async () => {
      Then(`I should be able to see ${productButton}`, then.textVisible(productButton));
    });
  });
};

export const ORDO_JOURNEY_VIEW = async () => {
  const superSonic = "Your super Sonic smile awaits...";
  const markdown = "Confirm a few details,\nand we’ll handle the rest!";
  const legalPoint1 = "A few legal points:";
  const legalPoint2 =
    "You only have one mouth, so you can only claim one toothbrush (even if your policy changes, renews, or you have a new policy in the future).";
  const legalPoint3 =
    "We have partnered with ORDO to help you on your personal wellbeing journey. Resale of the gift is not allowed under any circumstances (who wants to use someone else’s toothbrush anyway?!).";
  const legalPoint4 =
    "We can’t imagine a gift that would be any better for our YuLifers, so we don’t offer any exchanges or alternative gifts to the ORDO toothbrush.";
  const legalPoint5 =
    "If your policy is being processed for cancellation (for any reason), you will not be eligible to receive your free ORDO toothbrush.";
  const legalPoint6 =
    "YuLife will happily forward any complaints on your behalf to the ORDO experts for specialist complaints handling. YuLife is not responsible for the manufacturing, distribution, warranty or returns of ORDO toothbrushes beyond the point of claim – but we will do what we can to help if you need it!";
  const claimButton = "Claim now";
  const adressSendText = "Let us know where to send your toothbrush:";
  const ordoToothBrushImage =
    "https://yulife-develop.imgix.net/bupa/images/claim_ordo-2022-11-17.png?ixlib=js-3.2.1&w=981&h=714&s=02d52c51650ca1eb346423f3fb059bdd";

  When("I swipe down from Key Info", when.swipeFromText("Key Info", "up", "fast"), async () => {
    Then("I should see Ordo image", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(ordoToothBrushImage)));
    When(`I tap on Ordo`, when.tapID(CONTENT_MIDDLE_ITEM_IMAGE(ordoToothBrushImage)), async () => {
      Then(`I should be able to see ${superSonic}`, then.textVisible(superSonic));
      Then(`I should be able to see ${markdown}`, then.textVisible(markdown));
      Then(`I should be able to see ${legalPoint1}`, then.textVisible(legalPoint1));
      Then(`I should be able to see ${legalPoint2}`, then.textVisible(legalPoint2));
      When(`I swipe down the from ${legalPoint1}`, when.swipeFromText(legalPoint1, "up", "fast"), async () => {
        Then(`I should be able to see ${legalPoint3}`, then.textVisible(legalPoint3));
        Then(`I should be able to see ${legalPoint4}`, then.textVisible(legalPoint4));
        Then(`I should be able to see ${legalPoint5}`, then.textVisible(legalPoint5));
        Then(`I should be able to see ${legalPoint6}`, then.textVisible(legalPoint6));
        Then(`I should be able to see ${claimButton}`, then.textVisible(claimButton));
        When("I press Claim now", when.tapText("Claim now"), async () => {
          Then(`I should be able to see ${adressSendText}`, then.textVisible(adressSendText));
        });
      });
    });
  });
};

export const FIELD_VALIDATION = async () => {
  const firstNameValidation = "Please enter a first name between 2 and 35 characters";
  const lastNameValidation = "Please enter a last name between 2 and 35 characters";
  const postCodeValidation = "Please enter a valid UK postcode";
  const phoneNumberValidation = "Please enter a valid contact number";

  When("I add wrong  below minimum contact details data", when.addWronMinimumContactDetails, async () => {
    Then(`I should see ${firstNameValidation}`, then.textVisible(firstNameValidation));
    Then(`I should see ${lastNameValidation}`, then.textVisible(lastNameValidation));
  });
  When("I add minimum wrong post code and phone", when.addWrongMinimumPostCodeAndPhone, async () => {
    Then(`I should be able to see ${postCodeValidation}`, then.textVisible(postCodeValidation));
  });
  When("I press on postcode field", when.tapID(CONTENT_ITEM_INPUT("postcode")), async () => {
    Then(`I should see ${phoneNumberValidation}`, then.textVisible(phoneNumberValidation));
  });
  When("I add wrong after maximum contact details data", when.addWronMaximumContactDetails, async () => {
    Then(`I should see ${firstNameValidation}`, then.textVisible(firstNameValidation));
    Then(`I should see ${lastNameValidation}`, then.textVisible(lastNameValidation));
  });
  When("I add maximum wrong post code and phone", when.addWrongMaximumPostCodeAndPhone, async () => {
    Then(`I should see ${postCodeValidation}`, then.textVisible(postCodeValidation));
  });
  When("I add valid contact details", when.addContactDetails, async () => {
    Then(`I should not see ${firstNameValidation}`, then.textNotVisible(firstNameValidation));
    Then(`I should not see ${lastNameValidation}`, then.textNotVisible(lastNameValidation));
  });
  When("I add valid postcode and phone", when.addValidPostCodeAndPhone, async () => {
    Then(`I should not to see ${postCodeValidation}`, then.textNotVisible(postCodeValidation));
  });
};

export const CHECKOUT_PROCESS = async () => {
  const ordoShipped = "Your Ordo toothbrush is on the way!";
  const processInfo = "Your order is being processed, delivery can take  around 5 working days.";
  const ordoToothBrushImage =
    "https://yulife-develop.imgix.net/bupa/images/claim_ordo-2022-11-17.png?ixlib=js-3.2.1&w=981&h=714&s=02d52c51650ca1eb346423f3fb059bdd";

  When("I tap claim now", when.tapText("Claim now"), async () => {
    Then(`I should be able to see ${ordoShipped}`, then.textVisible(ordoShipped, 4000));
    Then(`I should be able to see ${processInfo}`, then.textVisible(processInfo));
    When("I press Done", when.tapText("Done"), async () => {
      Then("I should not see Ordo image", then.idNotVisible(CONTENT_MIDDLE_ITEM_IMAGE(ordoToothBrushImage)));
    });
  });
};

export const GROUP_HEALTH_PRODUCT_VIEW = async (startDate: any, dependentName:any, yuCoinPower: string) => {
  When(`I tap Health Insurance`, when.tapText("Health Insurance"), async () => {
    Then("I should see correct product details", then.GHIProductInfo(startDate, dependentName, yuCoinPower));
  });
};
