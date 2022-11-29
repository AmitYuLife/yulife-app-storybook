import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import { CUSTOMER_47 } from "@data";
import { GET_STARTED_BUTTON, MALE_BODY, BODY_TYPE, COLOUR, YUSCREEN_AVATAR, VIEW_TOP_RIGHT_COIN_COUNTER,YUMOJI_AVATAR_YUSCREEN_V4 } from "@ids";


export const CREATE_AVATAR = (customer: any) => async () => {
    When("I tap Check out my power", when.tapText("Check out my power"), async () => {
        Then("I should be on the create Yumoji screen", then.onChooseAvatarBodyScreen)
    })
    When("I tap a body type", when.tapID(MALE_BODY), async () => {
        When("I tap continue", when.tapText("Continue"), async () => {
            Then("I should be on the Yumoji builder", then.onSkinToneScreen("Skin Tone"))
            Then("The male body should be selected", then.idVisible(BODY_TYPE("male")))
            Then("I should see a skin tone", then.idVisible(COLOUR("#FFC89F")))
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
        When("I tap eye colour", when.tapTab("eyeColour"), async () => {
            Then("I should be on the Eye Colour tab", then.textVisible("Eye Colour"))
        })
    })
    When("I select a colour", when.tapColour("#3C9172"), async () => {
        When("I tap the accessories tab", when.tapTab("glasses"), async () => {
            Then("I should be on the Accessories tab", then.textVisible("Accessories"))
        })
    })
    When("I select an accessory", when.tapItem("glasses_5"), async () => {
        When("I tap 'Save'", when.tapText("Save"), async () => {
            Then("I should be on the 'Yu look great!' screen", then.textVisible("Yu look great!"))
        })
    })
    When("I tap 'yes'", when.tapText("Save changes"), async () => {
        Then("I should be on the Yumoji completion screen", then.onAvatarCompletionScreen)
    })
    When("I tap 'Done' ", when.tapText("Done"), async () => {
        Then("I should be on the yuscreen", then.onYuscreen(customer))
        Then("I should see my Yumoji", then.idVisible(YUMOJI_AVATAR_YUSCREEN_V4))
        Then("I should be awarded 100 yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(800)))
    })
}