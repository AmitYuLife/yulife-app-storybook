import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import { CUSTOMER_37, AUTH_37 } from "@data";
import { CONDITION_OPTION, CONTENT_ITEM_INPUT, PRODUCT_STEP_BODY_SCROLL_VIEW, SCROLL_PICKER, SCROLL_PICKER_ACTIVE_ITEM, SELECTED_PACKAGE_TITLE, PACKAGE_TYPES, BACK_BUTTON, PACKAGE_INFO, TEXT_TEMPLATE, EDIT_BUTTON, DATE_PICKER, DATE_INPUT, HORIZONTAL_SCROLLER, SCROLL_NUMBER_PICKER } from "@ids";
import { addCommasToNumber } from "_utils/appScreens/rewards";
import { capitalizeFirstLetter } from "@navigation";
import { MonthlyCoverPrices, TotalCoverPrices} from "./types"

const forest = "Forest Pathfinder"
const ocean = "Ocean Explorer"
const desert = "Desert Trailblazer"
const mountain = "Mountain Adventurer"
const styleText = `Almost there, choose a style for your Rare chest`
const styleTextCommon = `Almost there, choose a style for your Common chest`
const subTextStyle = "from any of our worlds: Forest, Ocean, Desert or Mountain!"
const maximumCover = "Based on the age you would like your policy to stop, the maximum % salary we can cover is 61"
const topHeading = "What % of your salary would you like covered?"
const yuScreenChestPurchased = "Your Life Insurance lives here. Tap anytime to review your policy details."


export const ONBOARDING = async () => {

    const personalInsurance = "Personal Life Insurance"
    const startQuoteText = "Start my quote (+1000 YuCoin)"
     
    When("I tap on the right part of the screen", when.navigateThroughTheFullSwiper, async () => {
        Then(`I should see ${startQuoteText}`, then.textVisible(startQuoteText));
        Then(`I should be on the first Life Insurance onboarding screen`, then.textVisible(personalInsurance));
    })
    When("I tap on the right part of the screen", when.navigateThroughTheFullSwiper, async () => {
        Then(`I should see ${startQuoteText}`, then.textVisible(startQuoteText));
    })
    When("I tap on start my quote button", when.dismissPLIModalIfExists, async () => {
        Then("I should see the intro screen", then.textVisible("Life Insurance"));
    })
}

export const INTRO_START = async () => {

    const forest = "Forest Pathfinder"
    const ocean = "Ocean Explorer"
    const desert = "Desert Trailblazer"
    const mountain = "Mountain Adventurer"
    const priceTime = "Get a quote in 5 mins"


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
    When("I scroll down the page", when.swipeFromText("Our simple promise", "up", "slow", 0.2), async () => {
        Then("I should see the correct copy in Cover for a lifetime!", then.correctPliIntroCopy("Cover for a lifetime"))
    })
    When("I scroll down the page", when.swipeFromText("Cover for a lifetime", "up", "slow", 0.2), async () => {
        Then("I should see the correct copy in Power up!", then.correctPliIntroCopy("Power up!"))
    })
    When("I scroll down the page", when.swipeFromText("Power up!", "up", "fast"), async () => {
        Then("I should see the correct copy in Owned by you", then.correctPliIntroCopy("Owned by you"))
        Then("I should see the correct copy in YuCoin", then.correctPliIntroCopy("YuCoin"))
        Then("I should see the correct text on the screen", then.textVisible(priceTime))
        When("I tap Get started button", when.tapText("Get started"), async () => {
            Then("I should be on the Let's get personal screen", then.isOnLetsGetPersonalScreen(CUSTOMER_37.data.firstName))
        })
    })
}

export const INTRO_INFO = async () => {
    When("I tap Let's go!", when.tapText("Let's go!"), async () => {
        Then("I should be on promise Yugi screen", then.isOnPromiseYugiScreen)
    })
}

export const INTRO_HONESTY = async () => {
    When("I tap Yes, I promise", when.tapText("Yes, I promise"), async () => {
        Then("I should be on the name screen", then.isOnNameScreen(CUSTOMER_37))
    })
}

export const UNDERWRITING_NAME = async () => {
    When("I tap continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
        Then("I should be on the DoB screen", then.isOnDoBScreen)
    })
}

export const UNDERWRITING_DOB = async (age: number) => {
    const nextScreen = (age > 65 || age < 18) ? "Please confirm your date of birth" : "Enter your salary"

    When("I choose the correct date of birth", when.chooseCorrectDoB(age), async () => {
        Then("I should be back on the dob screen", then.isOnDoBScreen)
        When("I tap Continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
            Then("I should be on the next screen", then.isOnScreen(nextScreen));
        })
    })
}

export const UNDERWRITING_CONFIRM_DOB = async () => {
    When("I tap Yes, this is my date of birth", when.tapText("Yes, this is my date of birth"), async () => {
        Then("I should be on the rejection screen", then.isOnScreen("Sorry about this!"))
    })
}

export const UNDERWRITING_SALARY = async (salary: string) => {
    const salaryNr = Number(salary);
    When("I choose the correct date of birth", [when.typeViaID(CONTENT_ITEM_INPUT("salary"), salary), when.tapText("Enter your salary")], async () => {
        Then("I should see my salary input", then.textVisible(addCommasToNumber(salaryNr).toString()))
        When("I tap continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
            Then("I should be on the citizen screen", then.isOnScreen("Are you a British Citizen or resident in the UK?"))
        })
    })
}

type YesNo = "Yes" | "No"

export const UNDERWRITING_CITIZEN = async (answer: YesNo) => {
    When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
        Then("I should be on the hazardous employment screen", then.isOnScreen("Are you employed in any of the following occupations?"))
    })
}

export const UNDERWRITING_EMPLOYMENT = async (answer: YesNo) => {
    When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
        Then("I should be on the height screen", then.isOnScreen("Getting a bit more personal now... I’m a whopping 16ft 4in tall, what about you?"))
    })
}

export const UNDERWRITING_HEIGHT = async (answer: string) => {
    When(`I tap on Enter your height`, when.tapText("Please enter your height"), async () => {
        Then("I should see the first value on the scroll picker", then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("150 cm")));
        When(`I choose ${answer}`, when.swipeOnPicker(SCROLL_PICKER("heightCm"), SCROLL_PICKER_ACTIVE_ITEM(answer), "down"), async () => {
            Then(`I should have selected ${answer}`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM(answer)))
            When("I tap Select", when.tapText("Select"), async () => {
                Then("I should be on the same screen", then.isOnScreen("Getting a bit more personal now... I’m a whopping 16ft 4in tall, what about you?"))
                Then("I should be back on the height screen", then.textVisible(answer.replace(" ", "")))
                When("I tap Continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                    Then("I should be on the weight screen", then.isOnScreen("I weigh in at a modest 800kg, you?"))

                })
            })
        })
    })
}

export const UNDERWRITING_WEIGHT = async (answer: string) => {
    When(`I tap on Enter your weight`, when.tapText("Please enter your weight"), async () => {
        Then("I should see the first value on the scroll picker", then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("30 kg")));
        When(`I choose ${answer}`, when.swipeOnPicker(SCROLL_PICKER("weightKg"), SCROLL_PICKER_ACTIVE_ITEM(answer), "down"), async () => {
            Then(`I should have selected ${answer}`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM(answer)))
            When("I tap Select", when.tapText("Select"), async () => {
                Then("I should be on the same screen", then.isOnScreen("I weigh in at a modest 800kg, you?"))
                Then("I should be back on the weight screen", then.textVisible(answer.replace(" ", "")))
                When("I tap Continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                    Then("I should be on the cigarretes screen", then.isOnScreen("When was the last time you smoked a cigarette?"))
                })
            })
        })
    })
}

type TimeOption = "In the past month" | "In the past 6 months" | "In the past 12 months" | "1 to 5 years ago" | "6 to 10 years ago" | "More than 10 years ago" | "Never";

export const UNDERWRITING_CIGARETTES = async (option: TimeOption) => {
    const nextScreen = ["In the past month", "In the past 6 months", "In the past 12 months"].includes(option)
        ? "How many cigarettes do you or did you smoke per day?"
        : "When was the last time you smoked cigars, pipes or shisha?"

    When(`I tap ${option} and Continue`, when.selectOptionAndNavigate(option, "Continue"), async () => {
        Then("I should be on the next screen", then.isOnScreen(nextScreen))
    })
}

type QuantityOption = "40 or more per day" | "30-39 per day" | "21-29 per day" | "10-20 per day" | "1-9 per day" | "Less than 1 per day" | "Less than 1 per week" | "Less than 1 per month";

export const UNDERWRITING_CIGARETTES_QUANTITY = async (option: QuantityOption) => {
    When(`I tap ${option} and Continue`, when.selectOptionAndNavigate(option, "Continue"), async () => {
        Then("I should be on the cigars screen", then.isOnScreen("When was the last time you smoked cigars, pipes or shisha?"))
    })
}

export const UNDERWRITING_CIGARS = async (option: TimeOption) => {
    When(`I tap ${option} and Continue`, when.selectOptionAndNavigate(option, "Continue"), async () => {
        Then("I should be on the smoking alternatives screen", then.isOnScreen("When was the last time you used e-cigarettes, vapes or another nicotine substitute such as nicotine gum or patches?"))
    })
}

export const UNDERWRITING_SMOKING_ALTERNATIVES = async (option: TimeOption) => {
    When(`I tap ${option} and Continue`, when.selectOptionAndNavigate(option, "Continue"), async () => {
        Then("I should be on the alcohol screen", then.isOnScreen("Cheers! How much do you drink in an average week?"))
    })
}

export const UNDERWRITING_ALCOHOL = async (answer: string) => {
    When(`I tap on Enter number of drinks`, when.tapText("Enter number of drinks"), async () => {
        Then("I should see the first value on the scroll picker", then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("0 drinks")));
        When(`I choose ${answer}`, when.swipeOnPicker(SCROLL_PICKER("drinkQuantity"), SCROLL_PICKER_ACTIVE_ITEM(answer), "down"), async () => {
            Then(`I should have selected ${answer}`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM(answer)))
            When("I tap Select", when.tapText("Select"), async () => {
                Then("I should be on the same screen", then.isOnScreen("Cheers! How much do you drink in an average week?"))
                Then("I should see the entered answer", then.textVisible(answer))
                When("I tap Continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                    Then("I should be on the cannabis screen", then.isOnScreen("When was the last time you used cannabis?"))
                })
            })
        })
    })
}

export const UNDERWRITING_CANNABIS = async (option: TimeOption) => {
    const nextScreen = ["In the past month", "In the past 6 months", "In the past 12 months",  "1 to 3 years ago"].includes(option)
        ? "How often do you or did you use cannabis?"
        : "When was the last time you used recreational drugs?"

    When(`I tap ${option} and Continue`, when.selectOptionAndNavigate(option, "Continue"), async () => {
        Then("I should be on the next screen", then.isOnScreen(nextScreen))
    })
}

export const UNDERWRITING_CANNABIS_QUANTITY = async (option: QuantityOption) => {
    When(`I tap ${option} and Continue`, when.selectOptionAndNavigate(option, "Continue"), async () => {
        Then("I should be on the recreational drugs screen", then.isOnScreen("When was the last time you used recreational drugs?"))
    })
}

export const UNDERWRITING_RECREATIONAL_DRUGS = async (option: TimeOption) => {
    When(`I tap ${option} and Continue`, when.selectOptionAndNavigate(option, "Continue"), async () => {
        Then("I should be on the counselling screen", then.isOnScreen("Have you ever been advised to receive and/or received treatment, counselling, or attended a support group to manage your alcohol or drug use?"))
    })
}

export const UNDERWRITING_COUNSELLING = async (answer: YesNo) => {
    When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
        Then("I should be on the sex screen", then.isOnScreen("Now I’ll need a bit of your medical history. What is your sex?"))
    })
}

export const UNDERWRITING_SEX = async (sex: "Male" | "Female") => {
    When(`I tap ${sex} and Continue`, when.selectOptionAndNavigate(sex, "Continue"), async () => {
        Then("I should be on the diagnosed with screen", then.isOnScreen("Have you ever been diagnosed with one of the following?"))
    })
}

export const UNDERWRITING_DIAGNOSED_WITH = async (answer: YesNo) => {
    When(`I tap ${answer}`, when.scrollToTheBottomAndChooseYesOrNo("LEFT_PRODUCT_STEP_MULTI_BUTTON"), async () => {
        Then("I should be on the diagnosed with screen", then.isOnScreen("Have you required 3 or more consultations in the last 3 years from a healthcare professional for an individual medical or mental health condition, symptom, illness or injury?"))
    })
}

export const UNDERWRITING_MANY_CONSULTATIONS = async (answer: YesNo) => {
    if(answer === "No") {
        When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
            Then("I should be on the awaiting tests screen", then.isOnScreen("Are you awaiting any investigations/tests (including their results) or any surgery?"))
        })
    } else {
        When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
            Then("I should be on the condition selection screen", then.isOnScreen("Select all the conditions for which you required consultations"))
        })
    }
    
}

type Condition = "High blood pressure" | "High cholesterol" | "Ears, nose, throat" | "Digestive" | "Kidneys & bladder" | "Eye" | "Minor injuries" | "Lungs" | "Muscles & joints" | "Skin" | "Pregnancy" | "Other"

export const UNDERWRITING_CONDITION_SELECTION = async (conditions: Condition[]) => {
    for(const condition of conditions) {
        When(`I scroll to ${condition}`, when.scrollUntilIdVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, CONDITION_OPTION(condition, false), "down"), async () => {
            When(`I tap ${condition}`, when.tapID(CONDITION_OPTION(condition, false)), async () => {
                Then(`${condition} should be selected`, then.idVisible(CONDITION_OPTION(condition, true)))
            })
        })
    }

    const conditionLength = (conditions.length - 1).toString()
    const conditionText = (conditions.length > 1) ? "conditions" : "condition"

    When("I tap continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
        Then("I should be on the conditions confirmations screen", then.isOnScreen(`You’ve selected ${conditions.length.toString()} ${conditionText}.`))
        When(`I confirm I have chosen ${conditionLength} ${conditionText}`, when.tapText("I confirm these are all the conditions"), async () => {
            Then("I should be on the next screen", then.textNotVisible(`You’ve selected ${conditionLength} ${conditionText}.`))
        })
    })
}

export const UNDERWRITING_BP = async (answer: YesNo, choice: string) => {
    When(`I tap ${answer}`, when.tapText(answer), async () => {
        Then("I should be on the BP checkup screen", then.isOnScreen("What were you told at your latest blood pressure checkup?"))
        When(`I tap ${choice}`, when.tapText(choice), async () => {
            When("I tap continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                Then("I should be on the next screen", then.textNotVisible("What were you told at your latest blood pressure checkup?"))
            })
        })
    })
}

export const UNDERWRITING_CHOLESTEROL = async (answer: YesNo, choice: string) => {
    When(`I tap ${answer}`, when.tapText(answer), async () => {
        Then("I should be on the Cholesterol checkup screen", then.isOnScreen("What were you told at your latest cholesterol checkup?"))
        When(`I tap ${choice}`, when.tapText(choice), async () => {
            When("I tap continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                Then("I should be on the next screen", then.textNotVisible("What were you told at your latest cholesterol checkup?"))
            })
        })
    })
}

export const UNDERWRITIING_EARS_NOSE_THROAT = async (answer: YesNo) => {
    When(`I am on the Ears, nose, throat screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Ears, nose, throat", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITIING_DIGESTIVE = async (answer: YesNo) => {
    When(`I am on the Digestive screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Digestive", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITIING_KIDNEYS_BLADDER = async (answer: YesNo) => {
    When(`I am on the Kidneys & bladder screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Kidneys & bladder", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITIING_EYE = async (answer: YesNo) => {
    When(`I am on the Eye screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Eye", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITIING_MINOR_INJURIES = async (answer: YesNo) => {
    When(`I am on the Minor injuries screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Minor injuries", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITIING_LUNGS = async (answer: YesNo) => {
    When(`I am on the Lungs screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Lungs", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITIING_MUSCLES_JOINTS = async (answer: YesNo) => {
    When(`I am on the Muscles & joints screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Muscles & joints", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITIING_SKIN = async (answer: YesNo) => {
    When(`I am on the Skin screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Skin", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITIING_OTHER = async (answer: YesNo) => {
    When(`I am on the Other screen and tap ${answer}`, when.tapAnswerOnConditionScreen("Other", answer), async () => {
        Then("I should be on the next screen", then.textNotVisible("Were all of your ear, nose and throat issues in the list below?"))
    })
}

export const UNDERWRITING_MEDICAL_FOLLOW_UP = async (isRejected: boolean) => {
    if(!isRejected) {
        When("I am on the overnight stay screen and tap No", [then.textVisible("For the issues you had that were not on the list, have you required an overnight stay in hospital in the last 2 years?"), when.tapText("No")], async () => {
            Then("I should be on the fully resolved symptom screen", then.textVisible("Are these conditions or symptoms fully resolved?"))
            When("I tap No", when.tapText("No"), async () => {
                Then("I should be on the stable symptom screen", then.textVisible("Are these conditions stable (no increasing symptoms or complications)?"))
                When("I tap Yes", when.tapText("Yes"), async () => {
                    Then("I should be on the restrictions screen", then.textVisible("Do you have restrictions of your daily activities, tasks or occupation?"))
                    When("I tap No", when.tapText("No"), async () => {
                        Then("I should be on the next screen", then.textNotVisible("Do you have restrictions of your daily activities, tasks or occupation?"))
                    })
                })
            })
        })
    } else {
        When("I am on the overnight stay screen and tap Yes", [then.textVisible("For the issues you had that were not on the list, have you required an overnight stay in hospital in the last 2 years?"), when.tapText("Yes")], async () => {
            Then("I should be on the fully resolved symptom screen", then.textVisible("Are these conditions or symptoms fully resolved?"))
            When("I tap Yes", when.tapText("Yes"), async () => {
                Then("I should be on the restrictions screen", then.textVisible("Do you have restrictions of your daily activities, tasks or occupation?"))
                When("I tap Yes", when.tapText("Yes"), async () => {
                    Then("I should be on the next screen", then.textNotVisible("Do you have restrictions of your daily activities, tasks or occupation?"))
                })
            })
        })
    }

    
}

export const UNDERWRITING_AWAITING_TESTS = async (answer: YesNo) => {
    When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
        Then("I should be on the 6 month symptom screen", then.isOnScreen("In the last 6 months have you noticed any symptoms for which you have not yet received an exact diagnosis, that you continue to experience and for which you expect to consult a healthcare professional?"))
    })
}

export const UNDERWRITING_SYMPTOMS = async (answer: YesNo) => {
    When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
        Then("I should be on the covid hospital", then.isOnScreen("In the last 12 months have you been hospitalised for COVID-19?"))
    })
}

export const UNDERWRITING_COVID_HOSPITAL = async (answer: YesNo) => {
    // TODO: can go to covid hospital date
    When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
        Then("I should be on the covid exposure screen", then.isOnScreen("In the last 30 days have any of the following applied to you:"))
    })
}

export const UNDERWRITING_COVID_EXPOSURE = async (answer: YesNo) => {
    When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
        Then("I should be on the other policies screen", then.isOnScreen("Almost done! Do you currently hold any other personal life insurance policies?"))
    })
}

export const UNDERWRITING_OTHER_POLICIES = async (answer: YesNo) => {
    // TODO: can go to exceed 20mln
    let nextScreen
    if(answer === "Yes") nextScreen = "Will the total amount of life insurance on your life exceed £20,000,000?"
    else nextScreen = "Please take a quick look over your answers before submitting."

    When(`I tap ${answer}`, when.chooseYesOrNo(answer), async () => {
        Then("I should be on the next screen", then.isOnScreen(nextScreen))
    })
}

export const UNDERWRITING_DO_POLICIES_EXCEED = async (answer: YesNo) => {
    When(`I tap ${answer}`, when.tapText(answer), async () => {
        Then("I should be on the review screen", then.isOnScreen("Please take a quick look over your answers before submitting."))
    })
}

export const REVIEW_SCREEN = async () => {
    const correctAnswerText = "I confirm that I have understood and answered all the questions honestly, accurately and to the best of my knowledge."
    When("I scroll to the bottom", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, correctAnswerText, "down"), async () => {
        Then("I should see both the accurate answer and sharing text", then.textVisible(correctAnswerText))
        When("I check both checkboxes", when.tapText(correctAnswerText), async () => {
            When("I tap submit answers", when.tapText("Submit answers"), async () => {
                Then("I should be on the next screen", then.textNotVisible("Submit answers"))
            })
        })
    })
}

type percentageLevel = "25%" | "50%" | "75%"

export const COVER_SELECT_PERCENTAGE = async (percentage: percentageLevel) => {
    When(`I tap on ${percentage} cover`, when.tapText(percentage), async () => {
        Then("I should be on the next screen", then.textNotVisible("Submit answers"))
    })
    When("I scroll to the bottom and tap Continue to checkout", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
        Then("I should be on the next page", then.textNotVisible("Select your cover"))
    })
}

type coverLevel = "common" | "rare" | "epic" | "custom"

export const COVER_PRICE_CHECK = async (answer: string) => {
    When("I tap on 25% Common cover", when.tapText("25%"), async () => {
       Then("I should see corect Common plan", then.packageVisible("Common"))
    })
    When("I tap on 75% Epic cover", when.tapText("75%"), async () => {
        Then("I should see corect Epic plan", then.packageVisible("Epic"))
    })
    When("I tap on 50% Rare cover", when.tapText("50%"), async () => {
        Then("I should see corect Rare plan", then.packageVisible("Rare"))
    })
    When("I Edit this screen", when.tapID(EDIT_BUTTON), async () => {
        Then(`I should have selected 60`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("60")))
    })
    When(`I choose 36`, when.swipeOnPicker(DATE_PICKER,SCROLL_PICKER_ACTIVE_ITEM("36"), "left"), async () => {
        Then(`I should have selected "36"`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("36")))
        Then(`I should see corect Price changed according when i am  "36" years`, then.multiFactorPriceChange(30, "£5.10","£1,041.67", 36))
    })
    When(`I choose ${answer}`, when.swipeOnPicker(DATE_PICKER,SCROLL_PICKER_ACTIVE_ITEM(answer), "right", 200), async () => {
        Then(`I should have selected ${answer}`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM(answer)))
        Then(`I should see corect Price changed according when i am  ${answer} years`, then.multiFactorPriceChange(30, "£17.96","£1,041.67", 70))
    })
    When("I tap on percentage choose", when.tapText("Or, choose a custom percentage"), async () => {
        Then(`I should see selected 50 % by default`, then.idVisible(SCROLL_NUMBER_PICKER(50), 4000))
        When(`I choose 62 %`, when.swipeOnPicker(HORIZONTAL_SCROLLER, SCROLL_NUMBER_PICKER(62), "right"), async () => {
            Then("I should see correct price package appearing", then.multiFactorPriceChange(30, "£20.94","£1,291.67", 70))
            Then(`I should have selected ${answer}`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM(answer)))

        })
    })
    When("I scroll and tap on Documents",  when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Documents", "down"), async () => {
        Then("I shoul be on Documents page", then.isOnDocumentsScreen)
    })
    When("I tap to go back to Summary screen", when.tapID(BACK_BUTTON), async () => {
        Then("I should see again Documnets Button", then.textVisible("Documents"))
    })
    When("I scroll to the bottom and tap Continue to checkout", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
        Then("I should be on the next page", then.textNotVisible("Select your cover"))
    })
}


export const COVER_STYLE_SELECTION = async (cover: coverLevel, percentage: string, mothprice: MonthlyCoverPrices, totalCoverPrices: TotalCoverPrices) => {

    const rareRate = `${percentage} of your salary covered`

    When("I scroll to the left", when.scrollFromID(PACKAGE_INFO, "left", "slow", 0.4), async () => {
        Then(`I should see ${ocean}`, then.textVisible(ocean))
    })
    When("I scroll to the left", when.scrollFromID(PACKAGE_INFO, "left", "slow", 0.4), async () => {
        Then(`I should see ${desert}`, then.textVisible(desert))
    })
    When("I scroll to the left", when.scrollFromID(PACKAGE_INFO, "left", "slow", 0.4), async () => {
        Then(`I should see ${mountain}`, then.textVisible(mountain))
    })
    When("I scroll to the right", when.scrollFromID(PACKAGE_INFO, "right", "fast", 1.0), async () => {
        When("I scroll to the right", when.scrollFromID(PACKAGE_INFO, "right", "fast", 1.0), async () => {
            Then(`I should see ${forest}`, then.textVisible(forest))
            Then(`I should see ${styleText}`, then.textVisible(styleText))
            Then(`I should see ${subTextStyle}`, then.textVisible(subTextStyle))
            Then(`I should see ${rareRate}`, then.textVisible(rareRate))
        })
    })
    When("I tap Continue", when.tapText("Continue"), async () => {
        Then("I should be on the next page", then.textNotVisible(styleText))
        Then("I should see Summary page", then.textVisible("Summary"))
        Then("I should see correct package selected", then.packageSummaryVisible(cover, mothprice, totalCoverPrices))
    })
    When("I scroll and tap on Documents",  when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Documents", "down"), async () => {
        Then("I shoul be on Documents page", then.isOnDocumentsScreen)
    })
    When("I tap to go back to Summary screen", when.tapID(BACK_BUTTON), async () => {
        Then("I should see again Documnets Button", then.textVisible("Documents"))
    })
}

export const MAXIMUM_SUM_ASSURED = async (cover: coverLevel, mothprice: MonthlyCoverPrices, totalCoverPrices: TotalCoverPrices) => {
    When("I am on maximum sum assured screen and tap View full details", [then.isOnScreen("Based on the information you've given us, this is the maximum coverage available."), when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "View full details", "down")], async () => {
        Then("I should be back on the cover selection screen", then.textVisible("Select your cover"))
        Then("I should see warning text about maximum cover", then.textVisible(maximumCover))
        Then("I should see correct heading text", then.textVisible(topHeading))
        Then(`I should have  text selected 61`, then.idVisible(SCROLL_NUMBER_PICKER(61)))
        When(`I choose 31 %`, when.swipeOnPicker(HORIZONTAL_SCROLLER, SCROLL_NUMBER_PICKER(31), "left"), async () => {
            Then("I should see correct price package appearing", then.multiFactorPriceChange(33, mothprice, totalCoverPrices, 60))
            When("I scroll to the bottom and tap Continue to checkout", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                Then("I should be on the checkout page", then.isOnScreen(styleTextCommon))
                When("I scroll to the bottom and tap Continue to checkout", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                    Then("I should see correct package selected", then.packageSummaryVisible(cover, mothprice, totalCoverPrices))
                })
            })
        })
    })
}

export const CHECKOUT = async ( isCovered: boolean, cover: string) => {
    const nextScreenTitle = isCovered ? "Item unlocked!\nYou've powered up your protection." : "We’ll be in touch"
    const nextScreenBody = (nextScreenTitle == "Item unlocked!\nYou've powered up your protection.") ? `Congratulations, you've successully purchased ${cover} cover, your policy is now active.` : 
    "Based on your answers we’ll need additional information. We’ll reach out shortly by email and text to let you know what to do next. No payment will be taken from you.\n\nIn the meantime, you are now covered by Accidental Death Benefit provided by your selected policy:"

    When("I add contact details", when.addContactDetails, async () => {
        Then("I should be on the checkout page", then.isOnScreen("Checkout"))
        When("I add GP details", when.addGPDetails, async () => {
            Then("I should be on the checkout page", then.isOnScreen("Checkout"))
            When("I add payment details", when.addPaymentDetails, async () => {
                Then("I should be on the checkout page", then.isOnScreen("Checkout"))
                When(`I tap Purchase cover`, when.tapText(`Purchase cover`), async () => {
                    Then(`I should be on the ${nextScreenTitle} screen`, then.isOnScreen(nextScreenTitle))
                    Then(`I should see the ${nextScreenBody}`, then.isOnScreen(nextScreenBody))
                })
            })
        })
    })
}

type RejectionScreen = "Age" | "Answers"

export const REJECTED = async (screen: RejectionScreen, date?: string, time?: string) => {
    const screenText = (screen === "Age") 
        ? "Unfortunately we are unable to offer personal life insurance to anyone under the age of 18, please try again in future!" 
        : "Based on your answers, we’re not able to offer you personal life insurance right now."

    When("I wait 5 seconds", when.wait(5000), async () => {
        Then(`I should be on the ${screen} rejection screen`, then.textVisible("Sorry about this!"))
        Then(`I should be on the ${screen} rejection screen`, then.textVisible(screenText))
    })
}

export const REVIEW_YUSCREEN = async () => {
    When("I tap Continue", when.tapText("Continue"), async () => {
        Then("I should see toolTip info text", then.textVisible(yuScreenChestPurchased))
        When("I tap the toolTip", when.tapText(yuScreenChestPurchased), async () => {
            Then("I should NOT see toolTip info text", then.textNotVisible(yuScreenChestPurchased))
        })
    })
}

export const FAST_INTRO_START = async () => {

    When("I tap Get started button", when.tapText("Get started"), async () => {
        When("I scroll to the bottom", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Terms of Business", "down"), async () => {
            When("I tap Let's go!", when.tapText("Let's go!"), async () => {
                Then("I should be on promise Yugi screen", then.isOnPromiseYugiScreen)
                When("I tap Yes, I promise", when.tapText("Yes, I promise"), async () => {
                    Then("I should be on the name screen", then.isOnNameScreen(CUSTOMER_37))
                })
            })
        })
    })
}

export const FAST_REVIEW_SCREEN = async () => {
    const correctAnswerText = "I confirm that I have understood and answered all the questions honestly, accurately and to the best of my knowledge."
    When("I scroll to the bottom", when.scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, correctAnswerText, "down"), async () => {
        Then("I should see both the accurate answer and sharing text", then.textVisible(correctAnswerText))
        When("I check both checkboxes", when.tapText(correctAnswerText), async () => {
            When("I tap submit answers", when.tapText("Submit answers"), async () => {
                Then("I should be on the next screen", then.textNotVisible("Submit answers"))
                When("I scroll to the bottom and tap Continue to checkout", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                    Then("I should be on the next page", then.textNotVisible("Select your cover"))
                    When("I scroll to the bottom and tap Continue to checkout", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
                        Then("I should be on the next page", then.textNotVisible("Select your cover"))
                        When("I tap Continue", when.tapText("Continue"), async () => {
                            Then("I should be on the next page", then.textNotVisible(styleText))
                            Then("I should Not see Summary page", then.textNotVisible("Summary"))
                        })
                    })
                })
            })
        })
    })
}

export const FAST_CHECKOUT = async ( isCovered: boolean, cover: string) => {
    const nextScreenTitle = isCovered ? "Item unlocked!\nYou've powered up your protection." : "We’ll be in touch"
    const nextScreenBody = (nextScreenTitle == "Item unlocked!\nYou've powered up your protection.") ? `Congratulations, you've successully purchased ${cover} cover, your policy is now active.` : 
    "Based on your answers we’ll need additional information. We’ll reach out shortly by email and text to let you know what to do next. No payment will be taken from you.\n\nIn the meantime, you are now covered by Accidental Death Benefit provided by your selected policy:"

    When("I continue on contact details screen", when.continueOnContactsPage, async () => {
        Then("I should be on the checkout page", then.isOnScreen("Checkout"))
        When("I add GP details", when.addGPDetails, async () => {
            Then("I should be on the checkout page", then.isOnScreen("Checkout"))
            Then("I should see existing card ending in 4444", then.textVisible("Purchase with **** 4444"))
            When("I tap purchase with existing card", when.tapText("Purchase with **** 4444"), async () => {
                Then("I should see We've got you covered", then.textVisible("Item unlocked!\nYou've powered up your protection."))
                Then(`I should see the ${nextScreenBody}`, then.isOnScreen(nextScreenBody))
            })
        })
    })
}