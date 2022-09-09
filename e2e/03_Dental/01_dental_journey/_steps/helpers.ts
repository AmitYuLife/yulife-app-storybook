import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import { CUSTOMER_37, AUTH_37 } from "@data";
import { CONDITION_OPTION, CONTENT_ITEM_INPUT, PRODUCT_STEP_BODY_SCROLL_VIEW, SCROLL_PICKER, SCROLL_PICKER_ACTIVE_ITEM, SELECTED_PACKAGE_TITLE, YUCOIN_POWER, TEXT_TEMPLATE, COVER_TYPE, BUTTON_CLOSE_CHALLENGE, BACK_BUTTON, PACKAGE_INFO, BUTTON_CLOSE, DENTAL_TOOLTIP_INFO } from "@ids";
import { addCommasToNumber } from "_utils/appScreens/rewards";
import { capitalizeFirstLetter } from "@navigation";
import moment from "moment"


const  addOneMonth = moment().add(1, 'M')
const  startOfnextMonth = moment(addOneMonth).startOf('month').format("DD/MM/YYYY")
const  startOfnextMonthFormated = moment(addOneMonth).startOf('month').format("DD.MM.YYYY")

const warningText = "You are not covered, and cannot claim for any treatments carried out before your cover starts."


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
    const supportCopy = "Both NHS and private patients can claim cashback towards treatment costs. Use the Bupa Dental Care support line to arrange an appointment or get fast, free advice via phone or video call."
    const claimsTitle = "Claims made easy"
    const claimsCopy = "When you’re seen in a participating Bupa dental practice they’ll settle the claim for you*, or use Bupa Touch for online claims."
    const toothBrushTitle = "Claim a free Ordo toothbrush"
    const toothBrushCopy = "You can claim a free Ordo Sonic toothbrush with this policy**."
    const onlyWithYuLifeTitle = "Only with YuLife"
    const onlyWithYuLifeCopy = "Customise your Yumoji’s style and unlock new perks, as well as keep the YuLife app and your policy if you change jobs."

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
    When("I scroll to Claims made easy", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, claimsTitle, "down"), async () => {
        Then("I should see the Bupa support box", then.multipleTextVisible([supportTitle, supportCopy]))
    })
    When("I scroll to Worldwide coverage", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, toothBrushTitle, "down"), async () => {
        Then("I should see the Claims box", then.multipleTextVisible([claimsTitle, claimsCopy]))
    })
    When("I scroll to Only with YuLife", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, onlyWithYuLifeTitle, "down"), async () => {
        Then("I should see the Ordo toothbrush", then.multipleTextVisible([toothBrushTitle, toothBrushCopy]))
    })

    When("I scroll to the bottom of the page", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Bupa’s Privacy Notice", "down"), async () => {
        Then("I should see the Only with YuLife box", then.multipleTextVisible([onlyWithYuLifeTitle, onlyWithYuLifeCopy]))
        Then("I should see *Excludes some treatments", then.textVisible("* Excludes some treatments. Please see full terms and conditions."))
        Then("I should see FAQs", then.textVisible("FAQs"))
        Then("I should see YuLife's Privacy Policy", then.textVisible("YuLife’s Privacy Policy"))
        Then("I should see Bupa's Privacy Notice", then.textVisible("Bupa’s Privacy Notice"))
    })
    When("I scroll more to the bottom of the page", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Information about our Service", "down"), async () => {
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
    const toothBrushTitle = "Claim a free Ordo toothbrush"
    const toothBrushCopy = "You can claim a free Ordo Sonic toothbrush with this policy*."





    When("I tap the Common tile", when.tapText("£12.99"), async () => {
        When("I scroll down to Preventive treatment", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Preventive treatment", "down"), async () => {
            Then("I should see Up to £205", then.textVisible("up to £205"))
            Then("I should see £12.99 / month", then.textVisible("£12.99 / month"))
            Then(`I should see correct Common Package details and price`, then.packageVisible("Common"))
        })
    })
    When("I scroll up to the top of the page", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Choose a plan that suits you", "up"), async () => {
        When("I tap the Rare tile", when.tapText("£18.99"), async () => {
            When("I scroll down to Preventive treatment", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Preventive treatment", "down"), async () => {
                Then("I should see Up to £255", then.textVisible("up to £255"))
                Then("I should see £18.99 / month", then.textVisible("£18.99 / month"))
                Then(`I should see correct Rare Package details and price`, then.packageVisible("Rare"))
            })
        })
    })
    When("I scroll up to the top of the page", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Choose a plan that suits you", "up"), async () => {
        When("I tap the Epic tile", when.tapText("£27.99"), async () => {
            When("I scroll down to Preventive treatment", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Preventive treatment", "down"), async () => {
                Then("I should see Up to £385", then.textVisible("up to £385"))
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
        Then("I should see the Ordo toothbrush", then.multipleTextVisible([toothBrushTitle, toothBrushCopy]))
        When("I scroll a little down on the page", when.swipeFromText(streakBountyTitle , "up", "slow", 0.4), async () => {
            Then("I should see the Streak Bounty perk", then.multipleTextVisible([streakBountyTitle, streakBountyCopy]))
            Then("I should see the Increased Steps perk", then.multipleTextVisible([stepLimitTitle, stepLimitCopy]))
            Then("I should see Package details", then.textVisible("Package details"))
            Then("I should see FAQs", then.textVisible("FAQs"))
            Then("I should see Membership Guide", then.textVisible("Membership Guide"))
            Then("I should see Product information (IPID)", then.textVisible("Product Information (IPID)"))
            When("I scroll a little down on the page", when.swipeFromText(streakBountyTitle , "up", "slow", 0.4), async () => {
                Then("I should see again Continue to checkout", then.textVisible("Continue to checkout"))
            })
        })
    })
}

type coverLevel = "Common" | "Rare" | "Epic"

export const PACKAGE_DETAILS = async ( cover: coverLevel )  => {
    const tooltipFilling = "Fissure sealants and topical fluoride treatments are included in this benefit"
    const tooltipRestorative = "80% towards the cost of your treatment up to your benefit limit"
    const tooltipCancerTreatment = "Paid in full when being referred for oral cancer treatment and using partnership facilities and recognised practitioners who are fee-assured consultants.\n\nThree month waiting period applies from your cover start date when you first join the policy."

    When(`I tap Package Details text`, when.tapText("Package details"), async () => {
        Then(`I should see correct ${cover} Package details and price`, then.packageVisible(cover));     
    })
    When("I tap last tooltip", when.tapIDAtIndex(DENTAL_TOOLTIP_INFO, 2 ), async () => {
        Then("I should see correct tooltip", then.textVisible(tooltipCancerTreatment))
    })
    When("I tap Got It", when.tapText("Got it"), async () => {
        When("I tap the first tooltip", when.tapIDAtIndex(DENTAL_TOOLTIP_INFO, 0 ), async () => {
            Then("I should see correct tooltip", then.textVisible(tooltipFilling))
        })
    })
    When("I tap Got It", when.tapText("Got it"), async () => {
        When("I tap the second tooltip", when.tapIDAtIndex(DENTAL_TOOLTIP_INFO, 1 ), async () => {
            Then("I should see correct tooltip", then.textVisible(tooltipRestorative))
        })
    })
    When("I tap Got It", when.tapText("Got it"), async () => {
        When("I tap to go back to Summary screen", when.tapID(BACK_BUTTON), async () => {
            Then("I should see again Continue to checkout", then.textVisible("Continue to checkout"))
        })
    })
}

export const CHECKOUT = async () => {
    const nextScreen = "Great news!\nYour application is being processed"
    const exclusiveText = `Your exclusive dental YuCoin power up has been unlocked! You can find more details via the gloves located next to your Yumoji`
    const policyLiveOn = `If approved, your policy goes live on*:`
    const perksText = "Your YuLife perks are now unlocked, including YuCoin Power and your new gloves!"
    const checkoutSummary = "*Subject to confirmation from Bupa and successful first payment, we will notify you of any changes to your application status. Any claims for treatments prior to this date will not be eligible"
    const onboardStepPerformed = "Information about your policy lives here, with details of cover amounts and how to make a claim"


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
                Then("I should see Product information (IPID)", then.textVisible("Product Information (IPID)"))
                Then("I should see FAQs", then.textVisible("FAQs"))
                Then("I should see checkout summary text", then.textVisible(checkoutSummary))
                When("I tap on Close button", when.tapID(BUTTON_CLOSE_CHALLENGE), async () => {
                    Then("I should see Onboard Performed text", then.textVisible(onboardStepPerformed))
                })
            })
        })
    })
}

export const ADD_EDIT_PAYMENT_DETAILS = async () => {

    When("I add contact details", when.addContactDetails, async () => {
        Then("I should be on the checkout page", then.isOnScreen("Declarations"))
        When("I accept the conditions", when.acceptConditions, async () => {
            Then("I should see YuLife's Privacy Policy", then.textVisible("YuLife's Privacy Policy"))
        })
    })
    When("I add payment details", when.addPaymentDetails, async () => {
        Then("I should be on the checkout page", then.isOnScreen("Checkout"))
        Then("I should see £27.99 / month", then.textVisible("£27.99 / month"))
    })
    When("I tap on Payment details", when.tapTextAtIndex("Payment details", 1), async () => {
        Then("I should see payment methods", then.textVisible("Select your payment method"))
        Then("I should see Add", then.textVisible("+ Add"))
        Then("I should see Edit", then.textVisible("Edit"))
        Then("I should see Set up", then.textVisible("Set up"))
        When("I add another card payment details", when.addPaymentDetailsMastercard, async () => {
            Then("I should be on the checkout page", then.isOnScreen("Checkout"))
        })
    })
}

export const BUPA_CLAIM = async () => {
    When("I tap How to make claim", when.tapText("How to make a claim"), async () => {
        Then("I should see Bupa claim text", then.bupaClaimInfo)
        When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
            Then("I should see again Policy details", then.textVisible("Policy details"))
        })
    })
}

export const FAQ = async () => {
    When("I swipe down the page", when.swipeFromText("How to make a claim", "up", "slow"), async () => {
        When("I tap FAQs text", when.tapText("FAQs"), async () => {
            Then("I should see FAQs info", then.FAQInfo)
            When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
                Then("I should see again Billing info", then.textVisible("Billing info"))
            })
        })
    })
}

export const PAYMENT_HISTORY = async ( ammountPaid: string, payStatus: string )  => {
    When("I tap View payment history text", when.tapText("View payment history"), async () => {
        Then("I should see View payment history info", then.paymentHistoryInfo(ammountPaid, payStatus))
        When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
            Then("I should see again Billing info", then.textVisible("Billing info"))
        })
    })
}

export const PACKAGE_COVERING = async ( cover: coverLevel )  => {
    When(`I tap "What I'm covered for" text`, when.tapText("What I'm covered for"), async () => {
        Then(`I should see correct ${cover} Package details and price`, then.packageVisible(cover));     
        When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
            Then("I should see again Policy details", then.textVisible("Policy details"))
        })
    })
}

export const CANCELLED_NOTIFICATION = async ( cover: coverLevel )  => {
    When(`I tap "What I'm covered for" text`, when.tapText("What I'm covered for"), async () => {
        Then(`I should see correct ${cover} Package details and price`, then.packageVisible(cover));     
        When("I tap to go back to Policy details screen", when.tapID(BACK_BUTTON), async () => {
            Then("I should see again Billing info", then.textVisible("Billing info"))
        })
    })
}


export const TAP_UNLOCKED_ITEM = async ( item: string, productName: string )  => {
    When("I tap off the tooltip", when.tapText(`${CUSTOMER_37.data.firstName} ${CUSTOMER_37.data.lastName}`), async () => {
        When(`I tap the ${item}`, when.tapUnlockableItem(item), async () => {
            Then(`I should be on the first ${productName} screen`, then.idVisible(TEXT_TEMPLATE(productName)));
        })
    })
}

export const CHOOSE_PLAN_AND_CHECKOUT = async () => {

    const streakBountyTitle = "Increased Streak Bounty"
    const nextScreen = "Great news!\nYour application is being processed"

    When("I scroll to the bottom of the page", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Information about our Service", "down"), async () => {
        When("I tap Browse cover levels", when.tapText("Browse cover levels"), async () => {
            Then("I should be on the plan page", then.isOnScreen("Choose a plan that suits you"))
        })
    })
    When("I tap the Epic tile", when.tapText("£27.99"), async () => {
        When("I tap Continue", when.tapText("Continue"), async () => {
            Then("I should be on the Summary page", then.isOnScreen("Summary"))
            When("I scroll a little down on the page", when.swipeFromText(streakBountyTitle , "up", "fast"), async () => {
                Then("I should see again Continue to checkout", then.textVisible("Continue to checkout"))
                When("I continue to checkout", when.continueCheckoutDental, async () => {
                    Then("I should see exising card ending with 4242", then.textVisible("Purchase with **** 4242"))
                    When("I tap purchase with existing card", when.tapText("Purchase with **** 4242"), async () => {
                        When("I wait for the application process screen to load", when.wait(5000), async () => {
                            Then(`I should be on the ${nextScreen} screen`, then.isOnScreen(nextScreen))
                        })
                    })
                })
            })
        })
    })
}

export const canSeeTooltips = async () => {
    const tooltipFilling = "Fissure sealants and topical fluoride treatments are included in this benefit"
    const tooltipRestorative = "80% towards the cost of your treatment up to your benefit limit"
    const tooltipCancerTreatment = "Paid in full when being referred for oral cancer treatment and using partnership facilities and recognised practitioners who are fee-assured consultants.\n\nThree month waiting period applies from your cover start date when you first join the policy."

    When("I tap last tooltip", when.tapTextAtIndex(DENTAL_TOOLTIP_INFO, 2 ), async () => {
        Then("I should see correct tooltip", then.textVisible(tooltipCancerTreatment))
    })
    When("I tap Got It", when.tapText("Got it"), async () => {
        When("I scroll to the first tooltip",when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Fillings/ root canal", "up"), async () => {
            When("I tap the first tooltip", when.tapTextAtIndex(DENTAL_TOOLTIP_INFO, 2 ), async () => {
                Then("I should see correct tooltip", then.textVisible(tooltipFilling))
            })
        })
    })
    When("I tap Got It", when.tapText("Got it"), async () => {
        When("I tap the second tooltip", when.tapTextAtIndex(DENTAL_TOOLTIP_INFO, 1 ), async () => {
            Then("I should see correct tooltip", then.textVisible(tooltipRestorative))
        })
    })
}
    

