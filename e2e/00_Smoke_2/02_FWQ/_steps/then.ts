import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import * as constant from "../_resources/constants"
import { additionalIds, FinancialWellnessQuizDescriptionPage, FWQContinuePage, FWQIntroPage, FWQQuizPage } from "../_resources/types";
import { swipeFromText } from "./when";


export const { idVisible, textVisible, idNotVisible, textNotVisible, multipleTextVisible, textVisibleAtIndex } =
  navigation.common;

export const { onYuscreenV3, onYuscreenV4 } = screens.yuscreen;

export const customerQuizModalVisible = (name: string, daysLeft: string) => async () => {
  await textVisible(name)()
  await idVisible(ids.EVENT_DESCRIPTION("0 / 1 journeys"))()
  await textVisible(`${daysLeft} days left`)()
}

export const onFinancialWellnessQuizDescriptionPage = (details: FinancialWellnessQuizDescriptionPage, completed: boolean) => async () => {
  const journeys = completed ? "1" : "0"

  await textVisible(details.title)()
  await textVisible(`${details.daysLeft} days left`)()
  await textVisible(`${journeys} / 1 journeys`)()
  await textVisible(details.descTitle)()
  await swipeFromText(details.descTitle, "up", "fast")()
  await textVisible(details.desc)()

  details.infoCards.forEach((card) => async () => {
    await textVisible(card.title)()
    await textVisible(card.desc)()
  })

  if(completed){
    await textNotVisible (details.button)()
  } else {
    await textVisible(details.button)()
  }

}

export const onFinancialWellnessQuizIntroPage = (details: FWQIntroPage) => async () => {
  await idVisible(ids.TEXT_TEMPLATE(details.title, "h3"))()
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(details.img))()
  await idVisible(ids.TEXT_TEMPLATE(details.header, "h2"))()
  await textVisible(details.desc)()
  await textVisible(details.button)()
}

export const onFinancialWellnessQuizPage = (page: FWQQuizPage, stages: number, yuCoin: string) => async () => {
  const percentage = page.stage / stages * 100

  await idVisible(ids.WEEKLY_PROGRESS_BAR(percentage, 100, "#F43E8E"))()
  await textVisible(yuCoin)()
  await idVisible(ids.TEXT_TEMPLATE(page.title, "h2"))()
  page.desc && await textVisible(page.desc)()
  page.questionOrAnswerText.forEach((text) => async () => {
    await textVisible(text)
  })
  page.additionalIds && await checkAdditionalIds(page.additionalIds)()

}

const checkAdditionalIds = (addIds: additionalIds []) => async () => {
  addIds.forEach((idSet) => {
    if(idSet.idType === "CHECK_BOX_STATE"){
      idSet.ids.forEach((id) => async () => {
        await idVisible(ids.CHECK_BOX_STATE(id, false))()
      })
    }
  } )
}

export const onFinancialWellnessQuizContinuePage = (page: FWQContinuePage) => async () => {
  await idVisible(ids.TEXT_TEMPLATE(page.title, "h3"))()
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(page.mainImg))()
  await idVisible(ids.TEXT_TEMPLATE(page.firstHeader, "h2"))()
  await textVisible(page.firstDesc)()
  await textVisible(`${page.yucoin} YuCoin`)()
  await swipeFromText(page.firstHeader, "up", "fast")()
  await idVisible(ids.TEXT_TEMPLATE(page.secondHeader, "h3"))()
  await textVisible(page.secondDesc)()
  await textVisible(page.buttonOne)()
  await textVisible(page.buttonTwo)()
}

export const onQuizCompletedPage = (event: string) => async () => {
  await textVisible(constant.quizCompletedTitle(event))()
  await textVisible(constant.quizCompletedHeader)()
  await idVisible(ids.ANIMATED_CIRCLE(constant.quizCompletedAnimatedCircle))()
  await textVisible(constant.quizCompletedYuCoin)()
  await textVisible(constant.quizCompletedClaimed)()
  await textVisible(constant.quizCompletedButton)()
}