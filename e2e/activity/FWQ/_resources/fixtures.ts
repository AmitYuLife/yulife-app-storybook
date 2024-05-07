import { FinancialWellnessQuiz, FinancialWellnessQuizDescriptionPage, FWQContinuePage, FWQIntroPage, FWQQuizPage } from "./types";

export const moneyMasteryFWQDescriptionPage: FinancialWellnessQuizDescriptionPage = {
    title: "Money Mastery#2",
    daysLeft: "6",
    descTitle: "Money Mastery",
    desc: "Ever wondered how YuLifers around the world approach financial, mental, and physical wellbeing? Come back each week to see how YuLifers around the world voted, and who knows, you may even learn a thing or two!",
    infoCards: [
        {
            title: "Task",
            desc: "Earn 100 bonus YuCoin when you complete the quiz!"
        },
        {
            title: "Rewards",
            desc: "Earn 50 bonus YuCoin by taking this 3-question quiz on financial wellbeing 💪🏼 Ready, set, go!"
        },
        {
            title: "Stay tuned",
            desc: "We’ll share how YuLifers voted soon, so be sure to check back for updates!"
        }
    ],
    button: "Take a quiz"
}

export const moneyMasteryIntroPage: FWQIntroPage = {
    title: "Level up your financial IQ!",
    img: "https://yulife-develop.imgix.net/quiz/financial-wellness/quiz-intro-2024-02-23.png?ixlib=js-3.2.1&w=516&h=516&s=8007f2a99319763992d44556a288ee33",
    header: "Money Mastery",
    desc: "Earn 100 bonus YuCoin by taking this\n3-question quiz on financial wellbeing\n💪🏼 Ready, set, go!",
    button: "Let’s go"
}

export const moneyMastery_Q1: FWQQuizPage = {
    stage: 1,
    title: "Question 1",
    desc: "Which of the following is the best tool for budgeting?",
    questionOrAnswerText: [
        "Financial management app",
        "Envelope system",
        "Digital spreadsheet",
        "All of the above"
    ],
    additionalIds: [
        {
            idType: "CHECK_BOX_STATE",
            ids: [
                "Financial management app",
                "Envelope system",
                "Digital spreadsheet",
                "All of the above"
            ]
        }]
}

export const moneyMastery_A1: FWQQuizPage = {
    stage: 2,
    title: "All of the above!",
    questionOrAnswerText: [
        "Budgeting can help you take steps toward being ",
        "financially stable",
        ", for both the short and long term.",
        "Whichever tool you choose, what’s important is to:",
        "1. Get started",
        " (make a spread sheet, download an app, or buy a new pen and notebook, your call!)\n",
        "2. Stay consistent",
        "There’s no big trick or best practice. It’s all about the small steps you take everyday to build a financially secure future for yourself. It’s entirely doable! Keep at it, or get started again, it’s in your hands! 💵"
    ]
}

export const moneyMastery_Q2: FWQQuizPage = {
    stage: 2,
    title: "Question 2",
    desc: "Why is it important to review your insurance options every year?",
    questionOrAnswerText: [
        "To always get the cheapest insurance",
        "To cancel insurance policies you didn’t use last year",
        "To keep your coverage aligned to your needs",
        "All of the above"
    ],
    additionalIds: [
        {
            idType: "CHECK_BOX_STATE",
            ids: [
                "To always get the cheapest insurance",
                "To cancel insurance policies you didn’t use last year",
                "To keep your coverage aligned to your needs",
                "All of the above"
            ]
        }]
}

export const moneyMastery_A2: FWQQuizPage = {
    stage: 3,
    title: "Keep coverage aligned to your needs!",
    desc: "Checking your insurance annually is crucial as life changes will affect your coverage needs! Things to note are:",
    questionOrAnswerText: [
        "Life events:",
        " big events like marriage or buying a home can change your coverage needs.",
        "Policy updates:",
        " prices and policies can change, so reviewing helps you find savings and cool new benefits.",
        "Cost savings:",
        " regular reviews ensure you're getting the best deal.",
        "Proper protection:",
        " it's about being properly covered for life's surprises!",
        "Set aside some time every now and then to review your insurance. It'll keep you feeling secure!"
    ]
}

export const moneyMastery_Q3: FWQQuizPage = {
    stage: 3,
    title: "Question 3",
    desc: "Why is maintaining an emergency fund essential to your financial wellbeing?",
    questionOrAnswerText: [
        "To save for a shopping spree",
        "To be prepared for the unexpected",
        "To pay off your debt",
        "All of the above"
    ],
    additionalIds: [
        {
            idType: "CHECK_BOX_STATE",
            ids: [
                "To save for a shopping spree",
                "To be prepared for the unexpected",
                "To pay off your debt",
                "All of the above"
            ]
        }]
}

export const moneyMastery_A3: FWQQuizPage = {
    stage: 4,
    title: "Be prepared for the unexpected!",
    desc: "Having an emergency fund is like having a financial superhero by your side, offering stability, peace of mind, and protection against life's curveballs. It gives you:",
    questionOrAnswerText: [
        "Financial stability:",
        " keeps you steady when unexpected expenses pop up, so you don't have to rely on pricey loans.",
        "Peace of mind:",
        " gives you a safety net for life's surprises, reducing stress and worry.",
        "Flexibility:",
        " lets you handle setbacks without panicking or making rushed decisions.",
        "Goal protection:",
        " safeguards your progress toward big dreams by keeping your savings intact."
    ]
}

export const moneyMastery_End: FWQQuizPage = {
    stage: 5,
    title: "Nice work!",
    questionOrAnswerText: [
        "Great job on completing the Money Mastery quiz! ",
        "Help us develop a feature you’ll love by selecting a rating below!",
        "Would you like to see more bite sized financial wellness tips?",
        "Yes",
        "No",
        "How much did you enjoy this challenge?",
        "If you have any additional feedback or suggestions, talk to us using the in-app chat!"
    ],
    additionalIds: [
        {
            idType: "CHECK_BOX_STATE",
            ids: [
                "Yes",
                "No"
            ]
        },
        {
            idType: "CPD_FEEDBACK_BUTTON",
            ids: [
                "1",
                "2",
                "3",
                "4"
            ]
        }]
}

export const moneyMasteryQuiz: FinancialWellnessQuiz = {
    pages: [
        moneyMastery_Q1,
        moneyMastery_A1,
        moneyMastery_Q2,
        moneyMastery_A2,
        moneyMastery_Q3,
        moneyMastery_A3,
        moneyMastery_End
    ]
}

export const moneyMasteryContinuePage: FWQContinuePage = {
    title: "Money Mastery Quiz",
    mainImg: "https://yulife-develop.imgix.net/quiz/financial-wellness/quiz-success-2024-02-23.png?ixlib=js-3.2.1&w=516&h=516&s=b08c413003c8d3154c43e183724e3f7e",
    firstHeader: "Thank you!",
    firstDesc: "We hope you’ve picked up some helpful tips. Quiz you again soon!",
    yucoin: "100",
    secondHeader: "Want to earn some more YuCoin?",
    secondDesc: "For some bonus YuCoin, would you like to answer a couple short questions to help us improve this experience for the future?",
    buttonOne: "More YuCoin? I’m in!",
    buttonTwo: "No, thank you!"
}

export const hqInfoCopy = {
    title:"Getting to Know Yu!",
    description:"Discovering more about your health is always a good thing, but we’re also here to reward you for that intention. Receive some extra YuCoin as you sail through these questions!",
    boxOneTitle:"Task",
    boxOneDescription:"Complete the health questions to the best of your ability.",
    boxTwoTitle:"Rewards",
    boxTwoDescription:"Earn 20 YuCoin!",
    boxThreeTitle:"Why all the questions?",
    boxThreeDescription:"These questions were hand-picked and referenced from NHS sources to help you create an overall picture of your health.",
    infoBox:"Our lips are sealed! Your answers are confidential and won’t be shared with your employer or any third party.",
    cta:"Let’s go!"

}