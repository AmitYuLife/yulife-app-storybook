import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_23, AUTH_23, CUSTOMER_10, AUTH_10, CUSTOMER_9, AUTH_9, AUTH_17, CUSTOMER_17 } from "@data";
import { FIB_SALARY_INPUT, PERSONAL_PRODUCT, FIB_SALARY_INPUT_VALUE, FIB_BROWSE_SCREEN, YUSCREEN_AVATAR, AVATAR_ITEM, YUSCREEN, FIB_INTRO_SCREEN, FIB_FIRST_NAME_INPUT, PACKAGE_INFO, INPUT_FIELD, INPUT_FIELD_VALUE, FOOT_INPUT, INCH_INPUT, KG_INPUT, DRINKS_INPUT, UNDERWRITING_REVIEW_SCREEN, UNDERWRITING_REVIEW_ANSWERS, UNDERWRITING_REVIEW_CONFIRM, SEX_BUTTON, SUMMARY_SCROLL_VIEW, SELECTED_ARMOR, ARMOR_OPTION, SEARCH_ITEM, SEARCH_FLAT_LIST, CONTACT_DETAILS_INPUT, CONTACT_DETAILS_SCROLL_VIEW, GP_CONTINUE, SEARCH_INPUT, GP_DETAILS_CARD, CHECKOUT_SCROLL_VIEW, PAYMENT_DETAILS_CARD, CHECKOUT_CHECKBOX } from "@ids";

import {
    FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID,
    FIB_UK_RESIDENT_SCREEN_ID,
    FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID,
    FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID,
    FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID,
    FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID,
    FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID,
    FIB_LIFESTYLE_ALCOHOL_SCREEN_ID,
    FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID,
    FIB_MEDICAL_HISTORY_SCREEN_ID,
    FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID,
    FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID,
    FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID,
    FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID,
    FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID,
    FIB_FINANCIAL_QUESTIONS_SCREEN_ID,
    FIB_LIFESTYLE_DRUGS_SCREEN_ID,
    FIB_ENTER_YOUR_NAME,
    FIB_INPUT_SALARY,
    FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
    FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
    FIB_GENDER_SCREEN_ID,
    FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
    FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID
} from "./_data/detox_underwriting_copy"




Feature("I am able to use the yuscreens extended features", async () => {
    Scenario("As a user with the correct toggle, I am able to browse a package and fill out the questionnaire", scenario.start, async () => {
        Given("I go to the yuscreen as a user with the correct toggle", given.loginToYuScreen(true, CUSTOMER_23, AUTH_23), async () => {
            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_23))
            Then("I should see my yumoji", then.idVisible(YUSCREEN_AVATAR))
            Then("I should see an active life insurance icon", then.idVisible(AVATAR_ITEM("chest", "unlockable")))
            When("I tap life insurance", when.tapID(AVATAR_ITEM("chest", "unlockable")), async () => {
                Then("I should see the Upgrade modal", then.multipleTextVisible(["Upgrade", "Not equipped"]))
                When("I tap Upgrade", when.tapText("Upgrade"), async()=>{
                    Then("I should be on the intro screen", then.idVisible(FIB_INTRO_SCREEN))
                    When("I dismiss this screen", when.dismissFibIntro, async()=>{
                        Then("I should be on the choose your style screen", then.textVisible("Choose your style"))
                        Then("I should see the style options", then.styleOptionsVisible)
                        When("I tap a style", when.tapID(ARMOR_OPTION("mountain")), async()=>{
                            Then("I should see the selected style", then.idVisible(SELECTED_ARMOR("mountain")))
                        })
                        When("I tap continue", when.tapText("Continue"), async()=>{
                            Then("I should see the great choice screen", then.multipleTextVisible(["Yugi", "Okay"]))
                        })
                        When("I tap Okay", when.tapText("Okay"), async()=>{
                            Then("I should be on the browse package screen", then.idVisible(PACKAGE_INFO))
                        })
                        When("I tap Continue", when.tapText("Continue"), async()=>{
                            Then("I should see the excellent choice screen", then.textVisible("Excellent choice! On to the “final fitting” to gather some additional info about you!"))
                        })
                        When("I dismiss this screen", when.dismissFibIntro, async()=>{
                            Then("I should be on the Let's get personal screen", then.textVisible("Let's get personal, Mike Skinner."))
                        })
                        When("I tap Continue", when.tapText("Continue"), async()=>{
                            Then("I should be on the name screen", then.onQuestionScreen(FIB_ENTER_YOUR_NAME))
                            Then("I should see the name fields and my name", then.multipleTextVisible(["First name", "Last name", "Mike", "Skinner"]))
                            When("I change my first name", when.replaceTextViaID(FIB_FIRST_NAME_INPUT, "Michael"), async()=>{
                                Then("I should see my first name has been updated", then.textVisible("Michael"))
                            })
                        })
                        When("I Tap continue", when.tapText("Continue"), async()=>{
                            Then("I should be on the birthday screen", then.onQuestionScreen(FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID))
                            Then("I should see my birthday", then.getBirthday(CUSTOMER_23.data.dateOfBirth))
                        })
                        When("I tap yes", when.tapText("Yes"), async()=>{
                            Then("I should see the salary input", then.onQuestionScreen(FIB_INPUT_SALARY))
                            When("I enter a salary", when.typeViaID(INPUT_FIELD, "40000"), async ()=>{
                            Then("I should see my salary has been input", then.idVisible(INPUT_FIELD_VALUE("40,000")))
                            })
                        })
                        When("I tap continue", when.tapText("Continue"), async()=>{
                            Then("I should be on the british citizen question", then.onQuestionScreen(FIB_UK_RESIDENT_SCREEN_ID))
                        })
                        When("I tap Yes", when.tapText("Yes"), async()=>{
                            Then("I sould be on the armed forces question", then.onQuestionScreen(FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async()=>{
                            Then("I should be on the height screen", then.onQuestionScreen(FIB_LIFESTYLE_HEIGHT_SCREEN_ID))
                            When("I switch to ft, in", when.tapText("Switch to ft, in"), async()=>{
                                Then("I should see ft, and in", then.multipleIDVisible([FOOT_INPUT, INCH_INPUT]))
                                When("I input text into the foot input", when.typeViaID(FOOT_INPUT, "5"), async()=>{
                                    Then("I should see my input", then.textVisible("5"))
                                })
                                When("I input text into the inches input", when.typeViaID(INCH_INPUT, "8"), async () => {
                                    Then("I should see my input", then.textVisible("8"))
                                })
                            })
                        })
                        When("I tap continue", when.tapText("Continue"), async()=>{
                            Then("I should be on the weight screen", then.onQuestionScreen(FIB_LIFESTYLE_WEIGHT_SCREEN_ID))
                            When("I enter my weight", when.typeViaID(KG_INPUT, "70"), async()=>{
                                Then("I should see my weight", then.textVisible("70"))
                            })
                        })
                        When("I tap Continue", when.tapText("Continue"), async()=>{
                            Then("I should on the smoker question", then.onQuestionScreen(FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID))
                            When("I tap never", when.tapText("Never"), async()=>{
                                When("I tap continue", when.tapText("Continue"), async()=>{
                                    Then("I should be on the cigar smoker question", then.onQuestionScreen(FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID))
                                })
                            })
                            When("I tap never", when.tapText("Never"), async () => {
                                When("I tap continue", when.tapText("Continue"), async () => {
                                    Then("I should be on the vape smoker question", then.onQuestionScreen(FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID))
                                })
                            })
                        })
                        When("I tap in the past month", when.tapText("In the past month"), async()=>{
                            When("I tap continue", when.tapText("Continue"), async()=>{
                                Then("I should be on the drink question", then.onQuestionScreen(FIB_LIFESTYLE_ALCOHOL_SCREEN_ID))
                                When("I enter my weekly drinks", when.typeViaID(DRINKS_INPUT, "3"), async()=>{
                                    Then("I should see the number I just entered", then.textVisible("3"))
                                })
                            })
                        })
                        When("I tap continue", when.tapText("Continue"), async()=>{
                            Then("I should be on the recreational drugs screen", then.onQuestionScreen(FIB_LIFESTYLE_DRUGS_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async()=>{
                            Then("I should be on the drugs counselling screen", then.onQuestionScreen(FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async()=>{
                            Then("I should be on the what is your sex screen", then.onQuestionScreen(FIB_GENDER_SCREEN_ID))
                            Then("I should see the Male and Female buttons in their unselected state", then.multipleIDVisible([SEX_BUTTON("Male", false), SEX_BUTTON("Female", false)]))
                            When("I tap male", when.tapID(SEX_BUTTON("Male", false)), async()=>{
                                Then("The male button should be visible", then.idVisible(SEX_BUTTON("Male", true)))
                        })
                        When("I tap continue", when.tapText("Continue"), async()=>{                      
                            Then("I should be on the medical history screen", then.onQuestionScreen(FIB_MEDICAL_HISTORY_SCREEN_ID))
                            Then("The medical history options should be visible", then.medicalHistoryScreenVisible)
                        })
                        When("I tap no", when.tapText("No"), async()=>{
                            Then("I should bo on the consultations screen", then.onQuestionScreen(FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async () => {
                            Then("I should be on the investigations/tests screen", then.onQuestionScreen(FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async () => {
                            Then("I should be on the 6 months sypmtoms screen", then.onQuestionScreen(FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async()=>{
                            Then("I should be ont he hospitalised for COVID screen", then.onQuestionScreen(FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async()=>{
                            Then("I should be on the 30 days covid screen", then.onQuestionScreen(FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async()=>{
                            Then("I should be on the almost done screen", then.onQuestionScreen(FIB_FINANCIAL_QUESTIONS_SCREEN_ID))
                        })
                        When("I tap no", when.tapText("No"), async()=>{
                            Then("I should be on the under writing review screen", then.idVisible(UNDERWRITING_REVIEW_SCREEN))
                            Then("The review answers should be correct", then.customer23ReviewScreenCorrect)
                        })
                        When("I scroll up to the cigarette question to update it", when.scrollUntilIdVisible(UNDERWRITING_REVIEW_SCREEN, UNDERWRITING_REVIEW_ANSWERS("Smoking cigarettes", "Never"), "up"), async()=>{
                            When("I tap weight to update it", when.tapID(UNDERWRITING_REVIEW_ANSWERS("Smoking cigarettes", "Never")), async()=>{
                                Then("I should be on the smoking cigarrets screen", then.onQuestionScreen(FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID))
                                When("I tap 6 months", when.tapText("In the past 6 months"), async () => {
                                    When("I press continue", when.tapText("Continue"), async()=>{
                                        Then("I should be on how many cigarretes screen screen", then.onQuestionScreen(FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID))
                                        When("I tap 1-9 per day", when.tapText("1-9 per day"), async()=>{
                                            When("I tap continue", when.tapText("Continue"), async()=>{
                                                Then("I should be on the review screen", then.idVisible(UNDERWRITING_REVIEW_SCREEN))
                                                When("I scroll down to the updated cigarette question", when.scrollUntilIdVisible(UNDERWRITING_REVIEW_SCREEN, UNDERWRITING_REVIEW_ANSWERS("Smoking cigarettes amount", "1-9 per day"), "down"), async () => {
                                                Then("I should see my updated cigarette answer", then.idVisible(UNDERWRITING_REVIEW_ANSWERS("Smoking cigarettes", "In the past 6 months")))
                                                Then("I should see my updated cigarette answer", then.idVisible(UNDERWRITING_REVIEW_ANSWERS("Smoking cigarettes amount", "1-9 per day")))
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                        When("I scroll to the bottom", when.scrollFromIDMultiple(UNDERWRITING_REVIEW_SCREEN, "up", "fast", 2), async()=>{
                            Then("I should see the confirm radio button", then.idVisible(UNDERWRITING_REVIEW_CONFIRM))
                            When("I tap this button", when.tapID(UNDERWRITING_REVIEW_CONFIRM), async()=>{
                                When("I tap submit answers", when.tapText("Submit answers"), async()=>{
                                    Then("I should see the show me options screen", then.textVisible("Show me"))
                                    })
                                })
                            })
                        When("I tap Show me", when.tapText("Show me"), async()=>{
                            Then("I should see the Epic package by default", then.packageVisible("100.13", "Epic"))
                            })
                        When("I scroll back to the top", when.scrollFromID(PACKAGE_INFO, "down", "fast"), async()=>{
                            When("I tap on the Common package", when.tapText("Common"), async () => {
                                Then("I should see the Common package", then.packageVisible("35.90", "Common"))
                            })
                        })
                        When("I tap on the Rare package", when.tapText("Rare"), async()=>{
                            Then("I should see the rare package", then.packageVisible("66.19", "Rare"))
                            })
                        When("I tap on the Epic package", when.tapText("Epic"), async () => {
                            Then("I should see the Epic package", then.packageVisible("100.13", "Epic"))
                            })
                        When("I scroll to the policy details", when.scrollUntilTextVisible(SUMMARY_SCROLL_VIEW, "£100.13 per month", "down"), async()=>{
                            Then("I should see the correct policy details", then.policyDetailsCorrect("100.13"))
                            })
                        When("I scroll to the continue button", when.scrollUntilTextVisible(SUMMARY_SCROLL_VIEW, "Continue", "down"), async()=>{
                            When("I tap continue", when.tapText("Continue"), async()=>{
                                Then("I should be on the checkout screen", then.onCheckout("100.13", "Epic"))
                                })
                            })
                        When("I tap add contact details", when.tapText("Add contact details"), async()=>{
                            Then("I should be on the contact details page", then.textVisible("Contact Details"))
                        })
                        When("I tap look up address", when.tapText("Look up address"), async()=>{
                            Then("I should be told to enter my postcode", then.textVisible("Enter your post code:"))
                            Then("I should see the post code entry field", then.idVisible(SEARCH_INPUT))
                        })
                            When("I enter a post code", when.typeViaID(SEARCH_INPUT, "EC1Y 8RQ"), async()=>{
                            When("I scroll to my address", when.scrollUntilIdVisible(SEARCH_FLAT_LIST, SEARCH_ITEM("14 Mallow Street"), "down"), async()=>{
                                Then("I should see 12 mallow street", then.idVisible(SEARCH_ITEM("12 Mallow Street")))
                            })
                        })
                            When("I tap 12 Mallow Street", when.tryTapID(SEARCH_ITEM("12 Mallow Street")), async()=>{
                            Then("I should be back on the address screen with my address shown", then.multipleTextVisible(["12 Mallow Street", "London", "EC1Y 8RQ"]))
                        })
                        When("I type an email", when.typeViaID(CONTACT_DETAILS_INPUT("Personal Email"), "myemail@email.com"), async()=>{
                            Then("I should see my email", then.textVisible("myemail@email.com"))
                        })
                        When("I type a phone number", when.typeViaID(CONTACT_DETAILS_INPUT("Phone number"), "07352167463"), async () => {
                            Then("I should see my phone number", then.textVisible("07352167463"))
                        })
                        When("I scroll and tap continue", when.scrollToAndTapText(CONTACT_DETAILS_SCROLL_VIEW, "Continue", "down"), async()=>{
                            Then("I should be on the email confirmation screen", then.multipleTextVisible(["Would you like to use:", "myemail@email.com"]))
                        })
                        When("I tap yes", when.tapText("Yes"), async()=>{
                            Then("I should be back on the checkout with my contact details visible", then.contactDetailsVisible)
                        })
                        When("I tap add GP Details", when.tapText("Add GP details"), async()=>{
                            Then("I should see the GP report", then.textVisible("GP Report"))
                        })
                        When("I scroll down to the radio buttons and tap them", when.scrollToAndtapGPCheckBox, async()=>{
                            Then("The check boxes should be checked", then.gpCheckBoxesChecked)
                            When("I press continue", when.tapID(GP_CONTINUE, 5000), async()=>{
                                Then("I should be asked to enter the name of my GP practive", then.textVisible("Enter the name of your local medical practice:"))
                                Then("I should see the GP input", then.idVisible(SEARCH_INPUT))
                            })
                            When("I enter the name of my practice", when.typeViaID(SEARCH_INPUT,"The Neaman Practice"), async()=>{
                                    Then("I should see my practice in a list", then.idVisible(SEARCH_ITEM("The Neaman Practice")))
                            })
                            When("I tap my practice", when.tryTapID(SEARCH_ITEM("The Neaman Practice")),async()=>{
                                Then("I should see the name of my GP", then.textVisible("Dr. Neaman G"))
                            })
                            When("I tap my doctors name", when.tryTapText("Dr. Neaman G"), async()=>{
                                Then("I should be on the confirm screen with my doctors name and practice address", then.gpConfirmationCorect)
                                })
                            })
                        When("I press continue", when.tapText("Continue"), async()=>{
                            Then("I should be back on checkout with my GP details visible", then.idVisible(GP_DETAILS_CARD("Neaman G","EC1A 7HF")))
                            })
                        When("I scroll to and tap Add Payment Details", when.scrollToAndTapText(CHECKOUT_SCROLL_VIEW, "Add payment details", "down"), async()=>{
                            Then("I should be on the stripe payment screen", then.textVisible("Add a Card"))
                            })
                        When("I add payment details", when.enterNewCardDetails, async()=>{
                            When("I tap Done", when.dismissAddCardScreen, async()=>{
                                Then("I should be back on checkout", then.textVisible("Checkout"))
                            })
                        })
                        When("I scroll to get payment details in view", when.scrollUntilTextVisible(CHECKOUT_SCROLL_VIEW, "Key documents", "down"), async()=>{
                            Then("I should back on checkout with my payment details visible", then.idVisible(PAYMENT_DETAILS_CARD("4242", "Michael Skinner","12/2024")))
                            })
                        When("I scroll to get Key Documents in view", when.scrollUntilTextVisible(CHECKOUT_SCROLL_VIEW, "Policy Guide", "down"), async()=>{
                            Then("I should see the key documents", then.multipleTextVisible(["Key documents", "Rewards Policy", "Policy Guide"]))
                            })
                        When("I scroll to get the radio button in view", when.scrollUntilTextVisible(CHECKOUT_SCROLL_VIEW, "Privacy policy", "down"), async()=>{
                            Then("I should see the checkout checkbox", then.idVisible(CHECKOUT_CHECKBOX))
                            })
                        When("I tap the checkbox", when.tapID(CHECKOUT_CHECKBOX), async()=>{
                            When("I tap buy epic cover", when.tapText("Buy Epic cover"), async()=>{
                                Then("I should be on the feedback form", then.textVisible("Feedback"))
                                })
                            })
                        })
                    })
                })
            })
        })
    })


    Scenario("The payout calculator should work correctly", scenario.start, async()=>{
        Given("I go to the yuscreen as a user with the correct toggle", given.loginToYuScreen(true, CUSTOMER_23, AUTH_23), async () => {
            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_23))
            When("I scroll to the bottom", when.scrollFromID(YUSCREEN, "up", "fast"), async () => {
                When("I tap life insurance", when.tapID(PERSONAL_PRODUCT("Chest of Life Insurance")), async () => {
                    Then("I should see the upgrade modal", then.textVisible("Upgrade"))
                    When("I dismiss the upgrade modal", when.tapText("Upgrade"), async()=>{
                        When("I dismiss this screen", when.dismissFibIntro, async () => {
                            Then("I should be on the choose your style screen", then.textVisible("Choose your style"))
                            Then("I should see the style options", then.styleOptionsVisible)
                        })
                    })
                When("I tap continue", when.tapText("Continue"), async () => {
                    Then("I should see the great choice screen", then.multipleTextVisible(["Yugi", "Okay"]))
                    })
                When("I tap Okay", when.tapText("Okay", 500), async () => {
                    Then("I should be on the browse package screen", then.idVisible(PACKAGE_INFO))
                    })
                When("I scroll down slightly", when.scrollFromID(PACKAGE_INFO, "up", "slow"), async()=>{
                    When("I scroll to the payout calculator", when.scrollUntilTextVisible(FIB_BROWSE_SCREEN, "How much would it pay out?", "down"), async () => {
                        Then("I should see 'How much would it pay out?'", then.textVisible("How much would it pay out?"))
                        })
                    })
                When("I tap the payout cta", when.tapText("How much would it pay out?"), async () => {
                    Then("I should be on the payout calculator intro screen", then.multipleTextVisible(["Payout Calculator", "Enter your annual salary"]))
                    Then("I should see my birthday", then.getBirthday(CUSTOMER_23.data.dateOfBirth))
                    })
                When("I tap enter your annual salary", when.tapText("Enter your annual salary"), async()=>{
                    Then("I should be on the enter your salary screen", then.textVisible("Enter your salary"))
                    })
                When("I enter my salary", when.typeViaID(FIB_SALARY_INPUT, "40000"), async()=>{
                    Then("I should see my salary", then.idVisible(FIB_SALARY_INPUT_VALUE("40,000")))
                    })
                When("I tap Done", when.tapText("Done"), async()=>{
                    Then("I should be back on the payout calculator with my salary updated", then.multipleTextVisible(["Payout Calculator","£40,000"]))
                    })
                When("I tap Continue", when.tapText("Continue"), async()=>{
                    Then("I should be on the payout calculator", then.textVisible("Your payout will be:"))
                    Then("I should see my epic payout", then.textVisible("£900,000"))
                    })
                When("I tap Rare", when.tapText("Rare"), async()=>{
                    Then("I should see my rare payout", then.textVisible("£600,000"))
                    })
                When("I tap Continue with cover", when.tapText("Continue with cover"), async()=>{
                    Then("I should be back on the browse screen", then.textVisible("How much would it pay out?"))
                    })
                })
            })
        })
    })

    Scenario("I am able to view the initial package screen and browse the FAQs", scenario.start, async()=>{
        Given("I login to the yuscreen", given.loginToYuScreen(true, CUSTOMER_23, AUTH_23), async () => {
            When("I go to the life insurance screen", when.goToLifeInsurance, async () => {
                Then("I should be on the package screen", then.idVisible(PACKAGE_INFO))
                Then("I should see all elements on the package screen", then.packageScreenCorrect)
            })
            When("I scroll back up to the FAQs", when.scrollUntilTextVisible(FIB_BROWSE_SCREEN, "FAQs", "up"), async () => {
                Then("I should see the FAQs", then.textVisible("FAQs"))
            })
            When("I tap FAQs", when.tapText("FAQs"), async()=>{
                Then("I should be on the FAQs screen", then.multipleTextVisible(["FAQs", "What is a lump sum?"]))
            })
            When("I tap what is the lump sum", when.tapText("What is a lump sum?"), async()=>{
                Then("I should be on the lump sum FAQ screen", then.textVisible("What is a lump sum?"))
            })
        })
    })

    Scenario("I can log back in and continue the package journey", scenario.start, async()=>{
        Given("I login", given.loginToYuScreen(true, CUSTOMER_9, AUTH_9), async()=>{
            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_9))
            Then("I should see an active life insurance icon", then.idVisible(AVATAR_ITEM("chest", "unlockable")))
        })
        When("I tap life insurance", when.tapID(AVATAR_ITEM("chest", "unlockable")), async () => {
            Then("I should see the Upgrade modal", then.multipleTextVisible(["Upgrade", "Not equipped"]))
            When("I tap Upgrade", when.tapText("Upgrade"), async () => {
                Then("I should see the In Progress screen", then.multipleTextVisible(["In Progress", "Continue", "Start over"]))
            })
            When("I tap continue", when.tapText("Continue"), async()=>{
                Then("I should be on the review screen", then.idVisible(UNDERWRITING_REVIEW_SCREEN))
                Then("My review answers should be correct", then.customer9ReviewScreenCorrect)
            })
            When("I scroll to three or more consultations", when.scrollUntilIdVisible(UNDERWRITING_REVIEW_SCREEN, UNDERWRITING_REVIEW_ANSWERS("Three Or More Consultations In Last 3 Years", "No"), "up"), async()=>{
                When("I tap three or more consultations", when.tapID(UNDERWRITING_REVIEW_ANSWERS("Three Or More Consultations In Last 3 Years", "No")), async()=>{
                    Then("I should be on the consultations screen", then.onQuestionScreen(FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID))
                })
                When("I tap yes", when.tapText("Yes"), async()=>{
                    Then("I should be on the select conditions screen", then.onQuestionScreen(FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID))
                    Then("The conditions should be visible", then.selectConditionsVisible)
                })
            })
            When("I tap minor injuries", when.tapText("Minor injuries"), async()=>{
                When("I tap continue", when.tapText("Continue"), async()=>{
                    Then("I should be on the minor injuries screen", then.onQuestionScreen(FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID))
                })
            })
            When("I tap yes", when.tapText("Yes"), async()=>{
                Then("I should be back on the review screen", then.idVisible(UNDERWRITING_REVIEW_SCREEN))
                When("I scroll to the minor injuries answer", when.scrollUntilIdVisible(UNDERWRITING_REVIEW_SCREEN, UNDERWRITING_REVIEW_ANSWERS("Minor Injuries", "Yes"), "down"), async()=>{
                    Then("I should see the updated consultation answer", then.idVisible(UNDERWRITING_REVIEW_ANSWERS("Three Or More Consultations In Last 3 Years", "Yes")))
                    Then("I should see the updated medical history detail answer", then.idVisible(UNDERWRITING_REVIEW_ANSWERS("Three Year Medical History Detail", "Minor injuries")))
                    Then("I should see the minor injuries answer", then.idVisible(UNDERWRITING_REVIEW_ANSWERS("Minor Injuries", "Yes")))
                })
            })
            When("I scroll to the bottom", when.scrollFromIDMultiple(UNDERWRITING_REVIEW_SCREEN, "up", "fast", 1), async () => {
                Then("I should see the confirm radio button", then.idVisible(UNDERWRITING_REVIEW_CONFIRM))
                When("I tap this button", when.tapID(UNDERWRITING_REVIEW_CONFIRM), async () => {
                    When("I tap submit answers", when.tapText("Submit answers"), async () => {
                        Then("I should show me screen", then.textVisible("Show me"))
                    })
                    When("I tap continue", when.tapText("Show me"), async()=>{
                        Then("I should see the Epic package by default", then.packageVisible("127.72", "Epic"))
                        })
                    })
                })
            })
        })

    Scenario("I can be denied life insurance if I answer questions a certain way", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(true, CUSTOMER_17, AUTH_17), async () => {
            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
            Then("I should see an active life insurance icon", then.idVisible(AVATAR_ITEM("chest", "unlockable")))
        })
        When("I tap life insurance", when.tapID(AVATAR_ITEM("chest", "unlockable")), async () => {
            Then("I should see the Upgrade modal", then.multipleTextVisible(["Upgrade", "Not equipped"]))
            When("I tap Upgrade", when.tapText("Upgrade"), async () => {
                Then("I should be on the intro screen", then.idVisible(FIB_INTRO_SCREEN))
                })
            When("I dismiss this screen", when.dismissFibIntro, async () => {
                Then("I should be on the choose your style screen", then.textVisible("Choose your style"))
                Then("I should see the style options", then.styleOptionsVisible)
                })
            When("I tap a style", when.tapID(ARMOR_OPTION("mountain")), async () => {
                Then("I should see the selected style", then.idVisible(SELECTED_ARMOR("mountain")))
                })
            When("I tap continue", when.tapText("Continue"), async () => {
                Then("I should see the great choice screen", then.multipleTextVisible(["Yugi", "Okay"]))
                })
            When("I tap Okay", when.tapText("Okay"), async () => {
                Then("I should be on the browse package screen", then.idVisible(PACKAGE_INFO))
                })
            When("I tap Continue", when.tapText("Continue"), async () => {
                Then("I should see the excellent choice screen", then.textVisible("Excellent choice! On to the “final fitting” to gather some additional info about you!"))
                })
            When("I dismiss this screen", when.dismissFibIntro, async () => {
                Then("I should be on the Let's get personal screen", then.textVisible("Let's get personal, Ryan Howard."))
                })
            When("I complete a negative fib journey", when.fibNegativeJourney, async()=>{
                Then("I should be on the review screen", then.idVisible(UNDERWRITING_REVIEW_SCREEN))
                })
            When("I scroll to the bottom", when.scrollFromIDMultiple(UNDERWRITING_REVIEW_SCREEN, "up", "fast", 3), async () => {
                Then("I should see the confirm radio button", then.idVisible(UNDERWRITING_REVIEW_CONFIRM))
                })
            When("I tap this button", when.tapID(UNDERWRITING_REVIEW_CONFIRM), async () => {
                When("I tap submit answers", when.tapText("Submit answers"), async () => {
                    Then("I should Sorry about this screen", then.textVisible("Sorry about this!"))
                    })
                })
            When("I tap continue", when.tapText("Continue"), async()=>{
                Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
            })
        })
    })

})