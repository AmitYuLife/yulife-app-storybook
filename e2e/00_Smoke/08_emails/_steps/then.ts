import {navigation} from "@utils"
import { screens } from "@appScreens"
import { readInbox, readEmailContent } from "@yu-life/yulife-bdd-framework"

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    multipleTextVisible
} = navigation.common

export const {
    onRewardScreen
} = screens.rewards

export const {
    swipeToID
} = navigation.scrolling

export const isOnNeedHelpScreen = async () => {
    await expect(element(by.text("need help?"))).toBeVisible()
    await expect(element(by.text("No problem! Enter your account email and we will send a magic link straight to your inbox, no password necessary!"))).toBeVisible()
}

export const isOnEmailSentScreen = (email: string) => async () => {
    await expect(element(by.text("email sent"))).toBeVisible()
    await expect(element(by.text(`Check your inbox! If ${email} matches our records, a password recovery email is on way. If you do not receive an email, please contact support@yulife.com`))).toBeVisible()
}

export const logInbox = (email: string) => async () => {
    const inbox = await readInbox(email, true)

    console.log(inbox[0].subject)
    console.log(inbox[0].text)
}

export const hasReceivedMagicLinkEmail = (email: string) => async () => {
    const inbox = await readInbox(email, true)
    const subject = inbox[0].subject

    if(subject !== "[detox] Your link to access YuLife") {
        throw new Error("Email subject is incorrect")
    }
}

export const hasReceivedAviosEmail = (email: string) => async () => {
    const inbox = await readInbox(email, true)
    const subject = inbox[0].subject

    if(subject !== "[detox] YuLife - Your Avios Purchase") {
        throw new Error("Email subject is incorrect")
    }
}

export const hasReceivedNikeEmail = (email: string) => async () => {
    const inbox = await readInbox(email, true)
    const subject = inbox[0].subject

    if(subject !== "[detox] Your link to your Nike voucher") {
        throw new Error("Email subject is incorrect")
    }
}