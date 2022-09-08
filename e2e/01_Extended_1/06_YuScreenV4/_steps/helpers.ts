import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import { YUMOJI_AVATAR_YUSCREEN_V4, VIEW_TOP_RIGHT_COIN_COUNTER, TEXT_TEMPLATE, BUTTON_CLOSE, RIGHT_STATUS_ICON, YUCOIN_POWER_INFO } from "@ids";


export const CREATE_DEFAULT_YUMOJI = async ( totalYucoinCount: number) => {
    When("I create the default yumoji", when.createDefaultYumoji, async () => {
        Then("I should see my Yumoji", then.idVisible(YUMOJI_AVATAR_YUSCREEN_V4))
        Then(`I should have ${totalYucoinCount} YuCoins`, then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(totalYucoinCount)))
    })
}


export const CHECK_PRODUCT_BUTTON_LINK = async ( productButton: string, productOnboardingViewText:string) => {
    When(`I tap on ${productButton}`, when.tapText(productButton), async () => {
        Then(`I should be on the first ${productOnboardingViewText} onboarding screen`, then.idVisible(TEXT_TEMPLATE(productOnboardingViewText)));
        When("I close this screen", when.tapIDAtIndex(BUTTON_CLOSE, 1), async () => {
            When("I close this screen", when.tapIDAtIndex(BUTTON_CLOSE, 1), async () => {
                Then(`I should not see ${productOnboardingViewText} onboarding screen`, then.textNotVisible(productOnboardingViewText))

            })
        })
    })
}

export const CHECK_CAROUSEL_BUTTON_LINK = async ( direction:string, productButton: string, productOnboardingViewText:string) => {
    const browseMoreProtection = "Browse more protection"
    const dentalPriceFrom = "From £12.99 per month"
    

    When("I swipe down the Yu screen page", when.swipeFromText(browseMoreProtection,"up", "fast"), async () => {
        When(`I swipe right from ${dentalPriceFrom}`, when.swipeFromText(dentalPriceFrom, direction, "fast"), async () => {
            When(`I tap on ${productButton}`, when.tapText(productButton), async () => {
                Then(`I should be on the first ${productOnboardingViewText} onboarding screen`, then.textVisible(productOnboardingViewText));
                When("I close this screen", when.tapIDAtIndex(BUTTON_CLOSE, 1), async () => {
                    Then(`I should not see ${productOnboardingViewText} onboarding screen`, then.textNotVisible(productOnboardingViewText))
                })
            })
        })
    })
}

export const PAYMENT_FAILED = async () => {
    Then("I should see correct status icon if payment failed", then.idVisible(RIGHT_STATUS_ICON))
}

export const CORRECT_PRODUCT_SLOT_BACKGROUND = async (status:string) => {
    When("I wait", when.wait(1000), async () => {
        Then("I should see correct products Slot background colours", then.productSlotsAreCorrect(status))
    })
}

type RejectionScreen = "Age" | "Answers"

export const REJECTED = async (screen: RejectionScreen, date?: string, time?: string) => {
    const screenText = (screen === "Age") 
        ? "Unfortunately we are unable to offer personal life insurance to anyone under the age of 18, please try again in future!" 
        : "Based on your answers, we’re not able to offer you personal life insurance right now."


    When(`I tap on Life insurance`, when.tapText("Life Insurance"), async () => {
        When("I wait 5 seconds", when.wait(3000), async () => {
            Then(`I should be on the ${screen} rejection screen`, then.textVisible("Sorry about this!"))
            Then(`I should be on the ${screen} rejection screen`, then.textVisible(screenText))
            When(`I tap Continue`, when.tapText("Continue"), async () => {
                Then(`I should not see rejection modal screen`, then.textNotVisible("Sorry about this!"))
            })
        })
    })
}

export const DENTAL_PRODUCT_VIEW = async (packageType: string, membershipEnding: string) => {
    When(`I tap Dental insurance`, when.tapText("Dental"), async () => {
        Then("I should see correct product details", then.dentalProductInfo(packageType, membershipEnding))
    })
}

export const WELLBEING_PRODUCT_VIEW = async (packageType: string, yuCoinPower: number) => {
    When(`I tap Wellbeing Access`, when.tapText("Wellbeing Access"), async () => {
        Then("I should see correct product details", then.wellbeingProductInfo(packageType))
        When("I tap the YuCoin icon", when.tapID(YUCOIN_POWER_INFO), async () => {
            Then("I should see correct YuCoin Power text", then.yuCoinPowerInfo(yuCoinPower))
            When("I click Got it", when.tapText("Got it!"), async () => {
                Then("I should see Wellbein Access", then.textVisibleAtIndex("Wellbeing Access", 1))
            })
        })
    })
}

export const YUCOIN_POWER = async (customer:any, yuCoinPower: number) => {
    
    const firstName = customer.data.firstName
    const lastName = customer.data.lastName

    When(`I tap YuCoin`, when.tapText("YuCoin"), async () => {
        Then("I should see correct YuCoin Power text", then.yuCoinPowerInfo(yuCoinPower))
        When("I click Got it", when.tapText("Got it!"), async () => {
            Then("I should see again my name", then.textVisible(`${firstName} ${lastName}`))
        })
    })
}

export const CHECK_OTHER_PRODUCT_WHEN_HAVE_PAYMENT_FAILED = async ( productButton: string) => {

    When(`I tap on ${productButton}`, when.tapText(productButton), async () => {
        Then(`I should payment overdue screen`, then.paymentOverdueInfo)
        When("I close this screen", when.tapIDAtIndex(BUTTON_CLOSE, 1), async () => {
            Then("I should be able to see Dental insurance", then.textVisible("Dental"))
        })
    })
}

export const ONBOARDING_YUSCREEN = async (customer: any, packType: string, yuCoinPower: string, buttonText = "Show me the way") => {
    
    const yuMojiBuilder = "Create your Yumoji to step into the Yuniverse"

    Then("I should see the onboarding Yuscreen", then.onboardingYuscreenV4(yuCoinPower, packType))
    When(`I tap ${buttonText}`, when.tapText(buttonText), async () => {
        Then(`I should see ${yuMojiBuilder}`, then.textVisible(yuMojiBuilder))
        When("I close this screen", when.tapIDAtIndex(BUTTON_CLOSE, 0), async () => {
            Then("I should be on YuScreen V4", then.onYuscreenV4(customer, packType, yuCoinPower))
        })
    })
}
