import { navigation, YEAR_SCROLLER, MONTH_SCROLLER, booleanTextVisible, booleanIdVisible, HIGHLIGHTED_SCROLLER_VALUE, CUSTOM_COVER_SCREEN, PERCENTAGE_COVERED, wait, SCROLLER_VALUE, ARMOR_OPTION, UNDERWRITING_JOURNEY_SCREEN, UNDERWRITING_REVIEW_ANSWERS, UNDERWRITING_REVIEW_SCREEN, SALARY_COVERED, PACKAGE_YUCOIN_POWER, SELECTED_PACKAGE_TITLE, SUMMARY_SCROLL_VIEW, CONTACT_DETAILS_CARD, GP_CONFIRMATION, CHECK_BOX_STATE, PACKAGE_INFO } from "@utils"
import { screens } from "@appScreens"
import { fibDataDetox } from "../_data/detox_underwriting_copy"
import moment from "moment"
import { CUSTOMER_10, CUSTOMER_23, CUSTOMER_9 } from "@data"
import { scrollFromID, scrollFromText, scrollUntilIdVisible, swipeFromText } from "_utils/navigation/scrolling"


export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    multipleTextVisible,
    multipleIDVisible,
    tryCatchTextVisible
} = navigation.common

export const {
    onEmptyYuscreen,
    onYuscreen,
    onCreateAvatarScreen,
    onAvatarBuilder,
    onAvatarCompletionScreen,
    onYourYuCoin,
    avatarBodyVisible,
    avatarBodyVisibleWithUser,
    leaderboardAvatarVisible,
    personalProductsVisible,
    onSurveyScreen,
    onSurveySubmitScreen,
    onPackageScreen,
    packageScreenCorrect
} = screens.yuscreen

export const {
    scrollUntilTextVisible,
} = navigation.scrolling


export const onCustomCover = async()=>{
    await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(25)))).toBeVisible()
    await expect(element(by.id(CUSTOM_COVER_SCREEN))).toBeVisible()
}

export const onNextCustomCoverScreen = async()=>{
    await expect(element(by.text("Maximum protection for your loved ones"))).toBeVisible()

    try{
        await expect(element(by.id(PERCENTAGE_COVERED(36)))).toBeVisible()
    }catch(e){
        await expect(element(by.id(PERCENTAGE_COVERED(35)))).toBeVisible()
    }
}

export const styleOptionsVisible = async()=>{
    const styles = ["forest", "ocean", "desert", "mountain"]

    styles.forEach(async i => {
        await expect(element(by.id(ARMOR_OPTION(i)))).toBeVisible()
    });
}

export const onQuestionScreen = (fibID:string) => async()=>{
    const underWritingData = fibDataDetox
    
    const screenCopy = underWritingData.filter(d => d.id==fibID)

    await expect(element(by.text(screenCopy[0].question))).toBeVisible()
}

export const getBirthday = (birthdate:any) => async () => {
    const date = moment(birthdate).format("DD / MM / YYYY");

    await expect(element(by.text(date))).toBeVisible()
};

export const medicalHistoryScreenVisible = async()=>{
    const medicalCopy = ["Cancer", "Diabetes", "Heart Disease / Disorder", "Stroke", "Liver / Kidney disease", "Neurological disorders", "Mental illness", "HIV / AIDS"]
    
    for(const i of medicalCopy){
        await scrollUntilTextVisible(UNDERWRITING_JOURNEY_SCREEN, i, "down")()
    }
}

export const customer23ReviewScreenCorrect = async()=>{
    const reviewAnswers = [
        "Michael Skinner",
        moment(CUSTOMER_23.data.dateOfBirth).format("Do MMMM YYYY"),
        "£40,000",
        "Yes",
        "No",
        "5' 8''",
        "70kg",
        "Never",
        "Never",
        "In the past month",
        "3 units",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
    ]

    const reviewTitles = [
        "Name",
        "Birthday",
        "Salary",
        "UK Residency",
        "Hazardous occupation",
        "Height",
        "Weight",
        "Smoking cigarettes",
        "Smoking cigars, pipes or shisha",
        "Smoking e-cigarettes, vapes or another nicotine substitute",
        "Alcohol",
        "Drugs",
        "Drugs Councelling",
        "Medical Diagnosis",
        "Three Or More Consultations In Last 3 Years",
        "Outstanding Medical Investigations",
        "Other Symptoms",
        "Covid Isolation",
        "Covid Symptoms",
        "Total Life Insurance Exceed £20,000,000?"
    ]

    for(let i=0; i<reviewAnswers.length; i++){
        await scrollUntilIdVisible(UNDERWRITING_REVIEW_SCREEN, UNDERWRITING_REVIEW_ANSWERS(reviewTitles[i], reviewAnswers[i]), "down")()
    }
}

export const packageVisible = (estimatedCost:string, packageType:string)=> async() =>{
    await expect(element(by.id(SELECTED_PACKAGE_TITLE("Chest of Life Insurance")))).toBeVisible()

    switch (packageType) {
        case "Common":
            await expect(element(by.text(`£${estimatedCost}/month`))).toBeVisible()
            await expect(element(by.id(SALARY_COVERED(25)))).toBeVisible()
            await expect(element(by.id(PACKAGE_YUCOIN_POWER(5)))).toBeVisible()
            await expect(element(by.text("Double Chest"))).toBeVisible()
            break;
        case "Rare":
            await expect(element(by.text(`£${estimatedCost}/month`))).toBeVisible()
            await expect(element(by.id(SALARY_COVERED(50)))).toBeVisible()
            await expect(element(by.id(PACKAGE_YUCOIN_POWER(10)))).toBeVisible()
            await expect(element(by.text("Double Chest"))).toBeVisible()
            await expect(element(by.text("Increased Streak Reward"))).toBeVisible()
            break;
        case "Epic":
            await expect(element(by.text(`£${estimatedCost}/month`))).toBeVisible()
            await expect(element(by.id(SALARY_COVERED(75)))).toBeVisible()
            await expect(element(by.id(PACKAGE_YUCOIN_POWER(20)))).toBeVisible()
            await expect(element(by.text("Double Chest"))).toBeVisible()
            await expect(element(by.text("Increased Streak Reward"))).toBeVisible()
            await swipeFromText(`£${estimatedCost}/month`, "up", "slow")()
            await expect(element(by.text("Increased Daily Step Limit "))).toBeVisible()
            break;
        default:
            break;
    }
}

export const policyDetailsCorrect = (cost:string, amountProtected="2,500") => async()=>{
    const startDate = moment().format("DD/MM/YYYY")
    const endDate = moment().add(30, "years").format("DD/MM/YYYY")

    const description = `${30} years\nStart date: ${startDate}\nEnd date: ${endDate}`

    await expect(element(by.text(description))).toBeVisible()

    await expect(element(by.text("Amount protected"))).toBeVisible()
    await expect(element(by.text(`£${amountProtected} for every month remaining in policy at time of death.`))).toBeVisible()

    await expect(element(by.text("Cost"))).toBeVisible()
    await expect(element(by.text(`£${cost} per month`))).toBeVisible()
}

export const onCheckout = (cost:string, packageType:string)=> async()=>{
    const copy = [`£${cost}/month`, packageType, "Your details", "Add contact details", "Add GP details", "Add payment details"]

    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }
}

export const contactDetailsVisible = async () => {
    const name = "Michael Skinner"
    const firstAddressLine = "12 Mallow Street"
    const postCode = "EC1Y 8RQ"
    const email = "myemail@email.com"
    const phoneNumber = "07352167463"

    const contactDetails = element(by.id(CONTACT_DETAILS_CARD(name, firstAddressLine, postCode, email, phoneNumber)))

    await expect(contactDetails).toBeVisible()

}

export const gpConfirmationCorect = async()=>{
    const gpName = "Neaman G"
    const practiceName = "The Neaman Practice"
    const address1 = "The Neaman Practice"
    const postCode = "EC1A 7HF"

    const details = element(by.id(GP_CONFIRMATION(gpName, practiceName, address1, postCode)))

    await expect(details).toBeVisible()
}


export const gpCheckBoxesChecked = async()=>{
    const firstLabel = "Tick here to consent to your doctor supplying us with a medical report."
    const secondLabel = "Tick here if you want to see your medical report before your doctor sends it to us."

    const firstCheckBox = element(by.id(CHECK_BOX_STATE(firstLabel, true)))
    const secondCheckBox = element(by.id(CHECK_BOX_STATE(secondLabel, true)))

    await expect(firstCheckBox).toBeVisible()
    await expect(secondCheckBox).toBeVisible()
}


export const customer9ReviewScreenCorrect = async () => {
    const reviewAnswers = [
        "George Costanza",
        moment(CUSTOMER_9.data.dateOfBirth).format("Do MMMM YYYY"),
        "£48,000",
        "Yes",
        "No",
        "5' 6''",
        "90kg",
        "In the past 6 months",
        "1-9 per day",
        "Never",
        "In the past month",
        "3 units",
        "No",
        "No",
        "Male",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
    ]

    const reviewTitles = [
        "Name",
        "Birthday",
        "Salary",
        "UK Residency",
        "Hazardous occupation",
        "Height",
        "Weight",
        "Smoking cigarettes",
        "Smoking cigarettes amount",
        "Smoking cigars, pipes or shisha",
        "Smoking e-cigarettes, vapes or another nicotine substitute",
        "Alcohol",
        "Drugs",
        "Drugs Councelling",
        "Gender",
        "Medical Diagnosis",
        "Three Or More Consultations In Last 3 Years",
        "Outstanding Medical Investigations",
        "Other Symptoms",
        "Covid Isolation",
        "Covid Symptoms",
        "Total Life Insurance Exceed £20,000,000?"
    ]

    for (let i = 0; i < reviewAnswers.length; i++) {
        await scrollUntilIdVisible(UNDERWRITING_REVIEW_SCREEN, UNDERWRITING_REVIEW_ANSWERS(reviewTitles[i], reviewAnswers[i]), "down")()
    }
}

export const selectConditionsVisible = async()=>{
    const options = [
        "High Blood Pressure",
        "High Cholesterol",
        "Ears, nose, throat",
        "Digestive",
        "Kidneys & bladder",
        "Eye",
        "Minor injuries",
        "Lungs",
        "Pregnancy",
        "Muscles & Joints",
        "Skin",
        "Other"
    ]

    options.forEach(async i => {
        await scrollUntilTextVisible(UNDERWRITING_JOURNEY_SCREEN, i, "down")()
    });


}