import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when"
import * as then from "../_steps/then"
import * as ids from "@ids";
import { getLocalisedString as t } from "@i18n";

export const CREATE_AVATAR = (customer: any) => async () => {
    When("I swipe down the screen", when.swipeFromIDAtIndex(ids.ONBOARDING_SCREEN, 0, "up", "fast"), async () => {
        When("I tap Check out my power", when.tapID(ids.YUMOJI_ONBOARDING_BUTTON), async () => {
            Then("I should be on the create Yumoji screen", then.onChooseAvatarBodyScreen)
        })
    })
    When("I tap a body type", when.tapID(ids.MALE_BODY), async () => {
        When("I tap continue", when.tapID(ids.CTA_CONTINUE), async () => {
            Then("I should be on the Yumoji builder", then.onSkinToneScreen("Skin Tone"))
            Then("The male body should be selected", then.idVisible(ids.BODY_TYPE("male")))
            Then("I should see a skin tone", then.idVisible(ids.COLOUR("#FFC89F")))
        })
    })
    When("I tap this skin tone", when.tapColour("#FFC89F"), async () => {
        When("I tap the 'Hair Style' tab", when.tapTab("hairStyle"), async () => {
            Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
        })
    })
    When("I tap a style", when.tapItem("scruffy_sidepart"), async () => {
        When("I tap hair colour", when.tapTab("hairColour"), async () => {
            Then("I should be on the Hair Colour tab", then.textVisible("Hair Colour"))
        })
    })
    When("I tap a hair colour", when.tapColour("#212121"), async () => {
        When("I tap the Facial Hair tab", when.tapTab("facialHair"), async () => {
            Then("I should be on the Facial Hair tab", then.textVisible("Facial Hair"))
        })
    })
    When("I tap a facial hair style", when.tapItem("fat_lumberjack"), async () => {
        When("I tap Facial Hair Colour", when.tapTab("facialHairColour"), async () => {
            Then("I should be on the Facial Hair Colour tab", then.textVisible("Facial Hair Colour"))
        })
    })
    When("I tap a colour", when.tapColour("#2B2B2B"), async () => {
        When("I tap on the Headwear tab", when.tapTab("headwear"), async () => {
            Then("I should be on the Headwear tab", then.textVisible("Headwear"))
        })
    })
    When("I select the cowboy hat", when.tapItem("cowboy_hat_1"), async () => {
        When("I tap on the Headwear colour tab", when.tapTab("headwearHairColour"), async () => {
            When("I select a colour", when.tapColour("#F2BB7A"), async () => {
                Then("I should be on the Headwear Colour tab", then.textVisible("Headwear Colour"))
            })
        })
    })
    When("I tap eye colour", when.tapTab("eyeColour"), async () => {
        Then("I should be on the Eye Colour tab", then.textVisible("Eye Colour"))
    })
    When("I select a colour", when.tapColour("#3C9172"), async () => {
        When("I tap the accessories tab", when.tapTab("glasses", true, "left", "eyeColour"), async () => {
            Then("I should be on the Accessories tab", then.textVisible("Accessories"))
        })
    })
    When("I select an accessory", when.tapItem("glasses_5"), async () => {
        When("I tap 'Save'", when.tapID(ids.BUTTON_CLOSE_HEADER('Edit your Yumoji')), async () => {
            Then("I should be on the 'Yu look great!' screen", then.textVisible("Yu look great!"))
        })
    })
    When("I tap 'yes'", when.tapID(ids.GENERIC_SCREEN_CTA("Save changes")), async () => {
        Then("I should be on the Yumoji completion screen", then.onAvatarCompletionScreen)
    })
    When("I tap 'Done' ", when.tapID(ids.COLLECT_REWARD_CTA), async () => {
        Then("I should be on the yuscreen", then.onYuscreen(customer))
        Then("I should see my Yumoji", then.idVisible(ids.YUMOJI_AVATAR_YUSCREEN_V4))
        Then("I should be awarded 100 yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(800)))
    })
}