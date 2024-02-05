import { navigation } from "@utils"
import { screens } from "@appScreens"
import { BUSINESS_ACCOUNT_1, CUSTOMER_1, YUNIVERSITY_COURSE_1, YUNIVERSITY_COURSE_MODULE_1 } from "@data"
import { QuizDetails } from "../_resources/types"
import moment from "moment"
import * as ids from "@ids"

export const {
    idVisible,
    textVisible,
    textNotVisible,
    idExist,
    textVisibleAtIndex,
    wait
} = navigation.common

export const {
    onChallengeComplete,
    onMeditationChallengeComplete
} = screens.challenges

export const {
    swipeFromText,
    scrollUntilTextVisible
} = navigation.scrolling

export const {

    onCreateAvatarScreen,
} = screens.yuscreen

export const canSeeYuniversityWellbeingHub = async () => {
    await textVisible("Yuniversity", 500)()
    await textVisible("Your learning hub resources")()
}

export const canSeeCourseDetails = (course: typeof YUNIVERSITY_COURSE_1) => async () => {
    const { title, description } = course.data
    
    await textVisible("CPD Courses", 500)()
    await textVisible(title)()
    await textVisible(description)()
}

export const canSeeModuleThumbnail = (module: typeof YUNIVERSITY_COURSE_MODULE_1, index: number) => async () => {
    const { moduleNumber, title, durationMinutes, yuCoinReward } = module.data
    const numOfChapters = module.data.chapters.length

    await textVisible(`Module ${moduleNumber}: ${title}`)()
    await textVisibleAtIndex(`${durationMinutes} min \u2022 ${numOfChapters} Chapters`, index)()
    await textVisibleAtIndex(`Earn ${yuCoinReward}`, index)()
}

export const canSeeModuleDetails = (module: typeof YUNIVERSITY_COURSE_MODULE_1, copy: string[]) => async () => {
    const { moduleNumber, courseNumber, title, durationMinutes, yuCoinReward } = module.data

    await textVisible(title)()
    await textVisible(`CPD Course ${courseNumber}, Module ${moduleNumber} \u2022 ${durationMinutes} min`)()
    await textVisible(`Earn ${yuCoinReward}`)()
    await textVisible(`${durationMinutes / 60} CPD hours`)()

    for (const i of copy) {
        await scrollUntilTextVisible(ids.CPD_COURSE_SCROLL_VIEW, i, "down")()
    }
}

export const canSeeChapterThumbnail = (module: typeof YUNIVERSITY_COURSE_MODULE_1, chapter: number) => async () => {
    const { title, durationMinutes } = module.data.chapters[chapter - 1]

    await textVisible(`Chapter ${chapter}: ${title}`)()
    await textVisibleAtIndex(`${durationMinutes} min \u2022 Video`, chapter - 1)()
}

export const canSeeModuleNotesSection = async () => {
    await textVisible("Module notes")()
    await textVisible("Find the supporting notes for this module here.")()
}

export const canSeeModuleQuizSection = async () => {
    await textVisible("Module quiz")()
    await textVisible("Finish all chapters to be able to take the quiz.")()
}

export const canSeeCerificateSection = async () => {
    await textVisible("Certificate")()
    await textVisible("Once you have completed the full module and reviewed your progress you will be able to view your certificate.")()
}

export const chapterComplete = (chapter: number) => async () => {
    chapter < 2 ? await textVisible("Completed")() : await textVisibleAtIndex("Completed", chapter - 1)()
}

export const canSeeQuizPage = (module: typeof YUNIVERSITY_COURSE_MODULE_1) => async () => {
    await textVisible(module.data.title)()
    await textVisible("Take the quiz")()
    await textVisible("and see how much you have learned")()
    await wait(500)()
}

export const canSeeQuizQuestion = (quizQuestions: QuizDetails, questionNum: number) => async () => {
    await textVisible(`Question ${questionNum + 1}`)()
    await textVisible(quizQuestions[questionNum].question)()

    for (let option = 0; option < quizQuestions[questionNum].options.length; option++) {
        await textVisible(quizQuestions[questionNum].options[option], 500)()
    }
}

export const quizComplete = (correctAnswers: number) => async () => {
    await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE("https://yulife-develop.imgix.net/yugi/yugi-newspaper.svg?ixlib=js-3.2.1&w=927&h=990&s=07236bb0ecbaf9369f996b2121da6f86"))();

    if (correctAnswers > 3) {
        await textVisible("Congratulations!")()
        await textVisible(`Your score: ${correctAnswers}/6 correct answers.`)()
        await textVisible("Practice more?")()
    } else {
        await textVisible("Failed. Try again!")()
        await textVisible(`Your score: ${correctAnswers}/6 correct answers.\nYou need 4 correct answers to pass.`)()
        await textVisible("Take the quiz again")()
    }
}

export const canSeeCertificateDetails = (module: typeof YUNIVERSITY_COURSE_MODULE_1, customer: typeof CUSTOMER_1, business: typeof BUSINESS_ACCOUNT_1) => async () => {
    const { firstName, lastName } = customer.data
    const { courseNumber, moduleNumber, title, durationMinutes } = module.data
    const { business_account_name: businessName } = business.data
    
    await textVisibleAtIndex(`${firstName} ${lastName}`, 0)()
    await textVisible("CPD Module Certificate")()
    await textVisible(`Course ${courseNumber}, Module ${moduleNumber}\n“${title}”`)()
    await textVisible(businessName)()
    await textVisible(`${durationMinutes / 60}`)()
    await textVisible(moment().format("DD/MM/YYYY").toString())()
}

