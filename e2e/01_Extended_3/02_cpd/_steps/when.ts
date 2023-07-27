import { screens } from "@appScreens"
import { navigation, textVisible, CPD_FEEDBACK_BUTTON, CPD_COURSE_SCROLL_VIEW } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";
import { YUNIVERSITY_COURSE_MODULE_1 } from "@data";
import { canSeeQuizQuestion } from "./then";
import { QuizDetails } from "../_resources/types";
import { scrollUntilTextVisibleAtIndex } from "_utils/navigation/scrolling";

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait,
    booleanTextVisible,
    tapIDAtPoint,
    tapTextAtIndex,
    closeScreen,
} = navigation.common

export const {
    startChallenge,
    startChallengeFromQuests,
} = screens.challenges

export const {
    scrollFromID,
    swipeFromText,
    scrollUntilTextVisible
} = navigation.scrolling

export const tapModule = (module: typeof YUNIVERSITY_COURSE_MODULE_1) => async () => {
    const moduleNum = module.data.moduleNumber
    const moduleTitle = module.data.title

    await tapText(`Module ${moduleNum}: ${moduleTitle}`)()
}

export const tapChapter = (module: typeof YUNIVERSITY_COURSE_MODULE_1, chapter: number) => async () => {
    const chapterTitle = module.data.chapters[chapter - 1].title
    await tapText(`Chapter ${chapter}: ${chapterTitle}`)()
}

export const answerQuizQuestion = (quizQuestions: QuizDetails, quizAnswers: number[], question: number) => async () => {
    await tapText(quizQuestions[question].options[quizAnswers[question]], 1000)()
    await tapText("Next", 1000)()
}

export const completeQuiz = (quizQuestions: QuizDetails, quizAnswers: number[]) => async () => {
    for (let index = 0; index < quizQuestions.length; index++) {
        await canSeeQuizQuestion(quizQuestions, index)()
        await answerQuizQuestion(quizQuestions, quizAnswers, index)()
    }

    await textVisible("Self assessment")()
    await swipeFromText("Self assessment", "up", "slow")()
    await tapID(CPD_FEEDBACK_BUTTON("Happy"))()
    await tapText("Finish")()
}

export const beginQuiz = async () => {
   await tapText("Let's go")()
}

export const retakeQuiz = async () => {
    await tapText("Take the quiz again")()
    await beginQuiz()
}

export const scrollToChapter = (module: typeof YUNIVERSITY_COURSE_MODULE_1, chapter: number, direction: "up" | "down") => async () => {
    const { durationMinutes, title } = module.data.chapters[chapter - 1]
    const chapterInfo = `${durationMinutes} min \u2022 Video`
    const chapterTitle = `Chapter ${chapter}: ${title}`

    if (direction === "up") {
        await scrollUntilTextVisibleAtIndex(CPD_COURSE_SCROLL_VIEW, chapterTitle, direction, chapter - 1)()
    } else {
        await scrollUntilTextVisibleAtIndex(CPD_COURSE_SCROLL_VIEW, chapterInfo, direction, chapter - 1)()
    }
}
