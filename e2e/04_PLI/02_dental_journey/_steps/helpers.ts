import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import { CUSTOMER_37, AUTH_37 } from "@data";
import { CONDITION_OPTION, CONTENT_ITEM_INPUT, PRODUCT_STEP_BODY_SCROLL_VIEW, SCROLL_PICKER, SCROLL_PICKER_ACTIVE_ITEM, SELECTED_PACKAGE_TITLE, YUCOIN_POWER, TEXT_TEMPLATE, COVER_TYPE, BUTTON_CLOSE_CHALLENGE, BACK_BUTTON, PACKAGE_INFO} from "@ids";
import { addCommasToNumber } from "_utils/appScreens/rewards";
import { capitalizeFirstLetter } from "@navigation";
import moment from "moment"


const  addOneMonth = moment().add(1, 'M')
const  startOfnextMonth = moment(addOneMonth).startOf('month').format("DD/MM/YYYY")
const  startOfnextMonthFormated = moment(addOneMonth).startOf('month').format("DD.MM.YYYY")

const warningText = "You are not covered, and cannot claim for any treatments carried out before your cover starts"


export const ONBOARDING = async () => {
    When("I tap on the right part of the screen", when.navigateThroughTheFullSwiper, async () => {
        When("I tap on the right part of the screen", when.navigateThroughTheFullSwiper, async () => {
            When("I tap on the right part of the screen", when.navigateThroughTheFullSwiper, async () => {
                When("I tap on explore now", when.dismissDentalModal, async () => {
                    Then("I should see the intro screen", then.textVisible("Bupa Dental Plan for YuLife"));
                })
            })
        })
    })
}

export const INFORMATION = async () => {
    const supportTitle = "Bupa support is here for you"
    const supportCopy = "Both NHS and private patients can claim cash back towards treatment costs with this plan. Use the Bupa Dental Care support line to arrange an appointment or get fast, free advice via a phone or video call."
    const claimsTitle = "Claims made easy"
    const claimsCopy = "When you’re seen in a participating Bupa dental practice they’ll settle the claim for you*, or use Bupa Touch for online claims."
    const worldwideTitle = "Worldwide coverage"
    const worldwideCopy = "Routine or emergency, you’re covered at home and on the go for eligible treatments."
    const onlyWithYuLifeTitle = "Only with YuLife"
    const onlyWithYuLifeCopy = "Customise your Yumoji's style and unlock new perks, as well as keep the YuLife app and this policy if you change jobs."

    const forest = "Forest Pathfinder"
    const ocean = "Ocean Explorer"
    const desert = "Desert Trailblazer"
    const mountain = "Mountain Adventurer"
    
    When("I scroll to the left", when.scrollFromID(PACKAGE_INFO, "left", "slow"), async () => {
        Then(`I should see ${mountain}`, then.textVisible(mountain))
    })
    When("I scroll to the right", when.scrollFromID(PACKAGE_INFO, "right", "slow", 0.4), async () => {
        Then(`I should see ${desert}`, then.textVisible(desert))
    })
    When("I scroll to the right", when.scrollFromID(PACKAGE_INFO, "right", "slow", 0.4), async () => {
        Then(`I should see ${ocean}`, then.textVisible(ocean))
    })
    When("I scroll to the right", when.scrollFromID(PACKAGE_INFO, "right", "slow", 0.4), async () => {
        Then(`I should see ${forest}`, then.textVisible(forest))
    })
    When("I scroll to Claims made easy", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Claims made easy", "down"), async () => {
        Then("I should see the Bupa support box", then.multipleTextVisible([supportTitle, supportCopy]))
    })
    When("I scroll to Worldwide coverage", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Worldwide coverage", "down"), async () => {
        Then("I should see the Claims box", then.multipleTextVisible([claimsTitle, claimsCopy]))
    })
    When("I scroll to Only with YuLife", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Only with YuLife", "down"), async () => {
        Then("I should see the Worldwide box", then.multipleTextVisible([worldwideTitle, worldwideCopy]))
    })

    When("I scroll to the bottom of the page", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Information about our Service", "down"), async () => {
        Then("I should see the Only with YuLife box", then.multipleTextVisible([onlyWithYuLifeTitle, onlyWithYuLifeCopy]))
        Then("I should see *Excludes some treatments", then.textVisible("*Excludes some treatments"))
        Then("I should see FAQs", then.textVisible("FAQs"))
        Then("I should see YuLife's Privacy Policy", then.textVisible("YuLife's Privacy Policy"))
        Then("I should see Bupa's Privacy Notice", then.textVisible("Bupa's Privacy Notice"))
        Then("I should see Information about our Service", then.textVisible("Information about our Service"))
        Then("I should see Browse cover levels button", then.textVisible("Browse cover levels"))
    })
    When("I tap Browse cover levels", when.tapText("Browse cover levels"), async () => {
        Then("I should be on the plan page", then.isOnScreen("Choose a plan that suits you"))
    })
}

export const PLANS = async () => {
    const chestRewardsTitle = "Increased Chest Reward"
    const chestRewardsCopy = "Earn a larger YuCoin bounty when opening chests."
    const streakBountyTitle = "Increased Streak Bounty"
    const streakBountyCopy = "Earn a larger YuCoin bounty for hitting streaks."
    const stepLimitTitle = "Increased Daily Step Limit"
    const stepLimitCopy = "Increases the number of daily steps for which you earn YuCoin."
    const eligibleStartDateCopy = `You could be eligible to start claiming for treatments from ${startOfnextMonth}*`





    When("I tap the Common tile", when.tapText("£12.99"), async () => {
        When("I scroll down to Preventive treatment", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Preventive treatment", "down"), async () => {
            Then("I should see Up to £205", then.textVisible("Up to £205"))
            Then("I should see £12.99 / month", then.textVisible("£12.99 / month"))
            Then(`I should see correct Common Package details and price`, then.packageVisible("Common"))
        })
    })
    When("I scroll up to the top of the page", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Choose a plan that suits you", "up"), async () => {
        When("I tap the Rare tile", when.tapText("£18.99"), async () => {
            When("I scroll down to Preventive treatment", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Preventive treatment", "down"), async () => {
                Then("I should see Up to £255", then.textVisible("Up to £255"))
                Then("I should see £18.99 / month", then.textVisible("£18.99 / month"))
                Then(`I should see correct Rare Package details and price`, then.packageVisible("Rare"))
            })
        })
    })
    When("I scroll up to the top of the page", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Choose a plan that suits you", "up"), async () => {
        When("I tap the Epic tile", when.tapText("£27.99"), async () => {
            When("I scroll down to Preventive treatment", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Preventive treatment", "down"), async () => {
                Then("I should see Up to £385", then.textVisible("Up to £385"))
                Then("I should see £27.99 / month", then.textVisible("£27.99 / month"))
                Then(`I should see correct Epic Package details and price`, then.packageVisible("Epic"))
            })
        })
    })
   
    When("I scroll to the bottom of the page", when.swipeFromText("Paid in full", "up", "fast"), async () => {
        Then("I should see Epic", then.idVisible(TEXT_TEMPLATE("epic")))
        // Then("I should see Your Perks YuCoin Power text", then.multipleTextVisible(["Your Perks", "YuCoin Power"]))  //need to find a fix multiple text found
        Then("I should see the correct YuCoin power", then.idVisible(YUCOIN_POWER("6")))
        // Then("I should see the Chest Reward perk", then.multipleTextVisible([chestRewardsTitle, chestRewardsCopy]))  //need to find a fix multiple text found
        // Then("I should see the Streak Bounty perk", then.multipleTextVisible([streakBountyTitle, streakBountyCopy])) //need to find a fix multiple text found
        // Then("I should see the Increased Steps perk", then.multipleTextVisible([stepLimitTitle, stepLimitCopy]))     //need to find a fix multiple text found
    })

    When("I tap Continue", when.tapText("Continue"), async () => {
        Then("I should be on the Summary page", then.isOnScreen("Summary"))
        Then("I should see Epic", then.idVisible(COVER_TYPE("epic")))
        Then("I should see £27.99 / month", then.textVisible("£27.99 / month"))
        // Then("I should see corect Start Date", then.textVisible(eligibleStartDateCopy))  //need to find a how this days is calculated
        Then("I should see also Benefit from", then.textVisible("You'll also benefit from:"))
        Then("I should see the correct YuCoin power", then.idVisible(YUCOIN_POWER(6)))
        Then("I should see the Chest Reward perk", then.multipleTextVisible([chestRewardsTitle, chestRewardsCopy]))
        Then("I should see the Streak Bounty perk", then.multipleTextVisible([streakBountyTitle, streakBountyCopy]))
        When("I scroll to the bottom of the page", when.swipeFromText(streakBountyTitle, "up", "slow"), async () => {
            Then("I should see the Increased Steps perk", then.multipleTextVisible([stepLimitTitle, stepLimitCopy]))
            Then("I should see Package details", then.textVisible("Package details"))
            Then("I should see FAQs", then.textVisible("FAQs"))
            Then("I should see Membership Guide", then.textVisible("Membership Guide"))
            Then("I should see Product information (IPID)", then.textVisible("Product information (IPID)"))
        })
    })
}

type coverLevel = "Common" | "Rare" | "Epic"

export const PACKAGE_DETAILS = async ( cover: coverLevel )  => {
    When(`I tap Package Details text`, when.tapText("Package details"), async () => {
        Then(`I should see correct ${cover} Package details and price`, then.packageVisible(cover));     
    })
    When("I tap to go back to Summary screen", when.tapID(BACK_BUTTON), async () => {
        Then("I should see again Continue to checkout", then.textVisible("Continue to checkout"))
    })
}

export const CHECKOUT = async () => {
    const nextScreen = "Great news!\nYour application is being processed"
    const exclusiveText = `Your exclusive dental YuCoin power up has been unlocked! You can find more details via the gloves located next to your Yumoji`
    const policyLiveOn = `If approved, your policy goes live on*:`
    const perksText = "Your YuLife perks are now unlocked, including YuCoin Power and your new gloves!"
    const checkoutSummary = "*Subject to confirmation from Bupa and successful first payment, we will notify you of any changes to your application status."
    const onboardStepPerformed = "Information about your policy lives here, with details of cover amounts and how to make a claim"


    
    When("I add contact details", when.addContactDetails, async () => {
        Then("I should be on the checkout page", then.isOnScreen("Declarations"))
        When("I accept the conditions", when.acceptConditions, async () => {
            Then("I should see YuLife's Privacy Policy", then.textVisible("YuLife's Privacy Policy"))
            When("I add payment details", when.addPaymentDetails, async () => {
                Then("I should be on the checkout page", then.isOnScreen("Checkout"))
                Then("I should see £27.99 / month", then.textVisible("£27.99 / month"))
                When(`I tap Purchase cover`, when.tapText("Purchase cover"), async () => {
                    Then(`I should be on the ${nextScreen} screen`, then.isOnScreen(nextScreen))
                    Then("I should see more info text", then.textVisible(exclusiveText))
                    When(`I tap More details`, when.tapText("More details"), async () => {
                        Then(`I should be on the ${nextScreen} screen`, then.isOnScreen(nextScreen))
                        Then("I should see policy Live on text", then.textVisible(policyLiveOn))  
                        // Then("I shoul see correct date in the text", then.textVisible(startOfnextMonthFormated)) //need to find a how this days is calculated
                        Then("I should see warning text", then.textVisible(warningText))
                        Then("I should see perks text", then.textVisible(perksText))
                        Then("I should see the correct YuCoin power", then.idVisible(YUCOIN_POWER(6)))
                        Then("I should see Package details", then.textVisible("Package details"))
                        When("I scroll to the bottom of the page", when.swipeFromText("Package details", "up", "slow"), async () => {
                            Then("I should see Membership Guide", then.textVisible("Membership Guide"))
                            Then("I should see Product information (IPID)", then.textVisible("Product information (IPID)"))
                            Then("I should see FAQs", then.textVisible("FAQs"))
                            Then("I should see checkout summary text", then.textVisible(checkoutSummary))
                            When("I tap on Close button", when.tapID(BUTTON_CLOSE_CHALLENGE), async () => {
                                Then("I should see Onboard Performed text", then.textVisible(onboardStepPerformed))
                            })
                        })
                    })
                })
            })
        })
    })
}
