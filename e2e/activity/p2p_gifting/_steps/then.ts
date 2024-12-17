import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import { getTranslation, replaceName, splitPlural } from "_utils/translations/getTranslations";
import { text } from "stream/consumers";
const locale = process.env.TARGET_LOCALE || "en-GB"
const translation = getTranslation(locale);
import { CUSTOMER_1 } from "../../_data";
import { getFullName } from "_utils/users";
import { P2P_GIFTING_AMOUNTS, P2P_MESSAGES } from "../_resources/constants";

export { leaderboardVisible, isOnInspectScreen } from "../../leaderboard/_steps/then"

export const { 
  idVisible, 
  textVisible, 
  idNotVisible, 
  textNotVisible, 
  multipleTextVisible, 
  textVisibleAtIndex, 
  idExist
} = navigation.common;

export const { 
  onYuscreenV3, 
  onYuscreenV4,
  challengeNudgeVisible,
  hqNudgeVisible,
  completedHQNudgeVisible,
  maximiseYucoinVisible
} = screens.yuscreen;

export const {
  scrollUntilTextVisible
} = navigation.scrolling

export const giftingModalVisible = (name: string) => async () => {
  await idVisible(ids.P2P_GIFTING_CARD)()
  await textVisible(translation.screens.gifting.send_prompt.title)()
  const descriptionTemplate = translation.screens.gifting.send_prompt.description
  const newDescription = replaceName(descriptionTemplate, name)
  await textVisible(newDescription)()
}

export const giftingSelectionScreenVisible = (selectUsers: typeof CUSTOMER_1[]) => async () => {
  const descriptionTemplate = translation.screens.gifting.top_bar.select_target.description
  const newDescription = splitPlural(descriptionTemplate, 5)

  await textVisible(translation.screens.gifting.top_bar.select_target.heading, 2000)()
  await textVisible(newDescription)()
  await idVisible(ids.INPUT_FIELD)()
  await selectedUsersVisible(selectUsers)()
}

export const selectedUsersVisible = (users: typeof CUSTOMER_1[]) => async () => {
  await idVisible(ids.P2P_SELECTED_SECTION(users.length))()
  users.forEach((user) => async () => {
    await idVisible(ids.P2P_SELECTED_USER(user.data.firstName))()
  })
}

export const messageSelectionScreenVisible = (users: number) => async () => {
  const descriptionTemplate = translation.screens.gifting.top_bar.select_message.description
  const newDescription = splitPlural(descriptionTemplate, users)
  await textVisible(translation.screens.gifting.top_bar.select_message.heading)()
  await textVisible(newDescription)()
  P2P_MESSAGES.forEach((message) => async () => {
    await idVisible(ids.P2P_MESSAGE(message))()
  })

}

export const giftingAmountScreenVisible = (users: number, totalYuCoin: number) => async () => {
  const descriptionTemplate = translation.screens.gifting.top_bar.set_coins.description
  const newDescription = splitPlural(descriptionTemplate, users)
  await textVisible(translation.screens.gifting.top_bar.set_coins.heading)()
  await textVisible(newDescription)()
  await correctGiftingAmountsVisible(users, totalYuCoin)()
}

export const correctGiftingAmountsVisible = (users: number, totalYuCoin: number) => async () => {
  for (const amount of P2P_GIFTING_AMOUNTS) {
    const message = `${amount} YuCoin`;

    if (amount * users <= totalYuCoin) {
      await idVisible(ids.P2P_GIFTING_AMOUNT(message))();
    } else {
      await idNotVisible(ids.P2P_GIFTING_AMOUNT(message))();
    }
  }

  await idVisible(ids.P2P_GIFTING_AMOUNT(translation.screens.gifting.no_yu_coin))()
}

export const onGiftingPreviewScreen = (message: string, amount: number) => async () => {
  await textVisible(translation.screens.gifting.top_bar.message_preview.heading)()
  await textVisibleAtIndex(message, 0)()
  await textVisible(translation.screens.gifting.here_is)()
  await textVisible(amount.toString())()
}

export const onGiftingSuccessScreen = (recipients: number) => async () => {
  const descriptionTemplate = translation.screens.gifting.success_alert.description
  const newDescription = splitPlural(descriptionTemplate, recipients)
  await textVisible(translation.screens.gifting.success_alert.title)()
  await textVisible(newDescription)()
}