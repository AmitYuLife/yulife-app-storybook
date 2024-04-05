export interface FinancialWellnessQuizDescriptionPage {
    title: string,
    daysLeft: string,
    descTitle: string,
    desc: string,
    infoCards: FWQInfoCard [],
    button: string
}

export interface FWQInfoCard {
    title: string,
    desc: string
}

export interface FWQIntroPage {
    title: string,
    img: string,
    header: string,
    desc: string,
    button: string
}

export interface FinancialWellnessQuiz {
    pages: FWQQuizPage []
}

export interface FWQQuizPage {
    stage: number,
    title: string,
    desc?: string,
    questionOrAnswerText: string [],
    additionalIds?: additionalIds []
}

export interface additionalIds {
    idType: string,
    ids: string []
}

export interface FWQContinuePage {
    title: string,
    mainImg: string,
    firstHeader: string,
    firstDesc: string,
    yucoin: string,
    secondHeader: string,
    secondDesc: string,
    buttonOne: string,
    buttonTwo: string
}