import { dataManager } from "@yu-life/yulife-bdd-framework";
import { dataManagerUS } from "@dataManager";
import { BUTTON_CLOSE, BUTTON_CLOSE_HEADER, NAV_BAR, SCREEN_CLOSE } from '@ids';
import { dismissNewLooksModalIfVisible } from "./login";
import moment from "moment";

export const restart = async (locale = "en-GB", dm = dataManager) => {
    await device.terminateApp();
    await dm.reseed();
    await device.clearKeychain();
    await device.launchApp({ 
        delete: true,
        languageAndLocale: {
            language: locale,
            locale: locale
          }
    });
}

export const restartWithData = async () => {
    await device.terminateApp();
    await device.clearKeychain();
    await device.launchApp({ delete: true, });
}

export const restartWithoutDelete = async () => {
    await device.terminateApp();
    await device.launchApp({ delete: false, });
}

export const start = async () => {
    await device.terminateApp();
    await device.clearKeychain();
    await device.launchApp({
        delete: true,
        permissions: {},
    });
}

export const startWithoutLaunch = (locale = "en-GB") => async () => {
    await dataManager.reseed();
    await restart(locale);
}

export const reloadAppToTab = (tab: "yucoin" | "quests" | "leaderboard" | "rewards") => async () => {
    await device.reloadReactNative();
    await dismissNewLooksModalIfVisible()
    await navigateViaID(NAV_BAR(tab))
}

export const reloadOnly = async () => {
    await device.reloadReactNative()
}

export const wait = (timeout = 5000) => async () => new Promise((resolve) => setTimeout(resolve, timeout));

export const navigateViaID = async (id: string) => {
    await (waitFor(element(by.id(id)))).toBeVisible();
    await element(by.id(id)).tap();
}

export const navigateViaLabel = async (label: string) => {
    await (waitFor(element(by.label(label)))).toBeVisible();
    await element(by.label(label)).tap();
}

export const navigateViaText = async (text: string, timeout=0) => {
    await (waitFor(element(by.text(text)))).toBeVisible().withTimeout(timeout);
    await element(by.text(text)).tap();
}


export const expectIsVisibleViaID = async (id: string, waitTime = 0) => {
    const target = element(by.id(id));
    await waitFor(target).toExist().withTimeout(waitTime);
    await expect(target).toBeVisible();
    return target;
};

export const expectIsVisibleViaText = async (label: string, waitTime = 0) => {
    const target = element(by.text(label));
    await waitFor(target).toExist().withTimeout(waitTime);
    await expect(target).toBeVisible();
    return target;
};

export const expectDoesNotExistViaText = async (id: string, waitTime = 0) => {
    const target = element(by.text(id));
    await (waitFor as any)(target).not.toExist().withTimeout(waitTime);
    await (expect as any)(target).not.toExist();
    return target;
};

export const tapText = (text: string, waitTime = 0, longPress?:boolean) => async () => {
    const target = element(by.text(text))
    await waitFor(target).toBeVisible().withTimeout(waitTime)

    if(longPress===true){
        await target.longPress()
    }else{
        await target.tap()
    }
}

export const textVisible = (text: string, waitTime = 0) => async () => {
    const target = element(by.text(text))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await expect(target).toBeVisible()
}

export const textNotVisible = (text: string, waitTime = 0) => async () => {
    const target = element(by.text(text))
    await waitFor(target).toBeNotVisible().withTimeout(waitTime)
    await expect(target).toBeNotVisible()
}


export const tapID = (id: string, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await target.tap()
}

export const tapIDNotBeingVisible = (id: string, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await target.tap()
}

// to be used for debugging only, EG when a double tap bug appears
export const tryTapID =(id:string, waitTime=0) => async()=>{
    const target = element(by.id(id))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    try{
        await target.tap()
        await expect(target).toBeNotVisible()
    }catch(e){
        await target.tap()
        await expect(target).toBeNotVisible()
    }
}

export const tryTapText = (text: string, waitTime = 0) => async () => {
    const target = element(by.text(text))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    try {
        await target.tap()
        await expect(target).toBeNotVisible()
    } catch (e) {
        await target.tap()
        await expect(target).toBeNotVisible()
    }
}


export const tapIDAtPoint = (id: string, x: number, y: number, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await (target as any).tap({ x, y })
}

export const tapTextWithParentID = (parentID:string, childText:string, waitTime=0) => async()=>{
    const target = element(by.id(parentID).withDescendant(by.text(childText)))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await target.tap()
}

export const idVisible = (id: string, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await expect(target).toBeVisible()
}

export const idNotVisible = (id: string, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toBeNotVisible().withTimeout(waitTime)
    await expect(target).toBeNotVisible()
}

export const idVisibleAtIndex =(id:string,index:number, waitTime=0) => async()=>{
    const target = element(by.id(id)).atIndex(index)
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await expect(target).toBeVisible()
}

export const textVisibleAtIndex =(text:string,index:number, waitTime=0) => async()=>{
    const target = element(by.text(text)).atIndex(index)
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await expect(target).toBeVisible()
}

export const typeViaID = (id: string, text: string) => async () => {
    const target = element(by.id(id))
    await expect(target).toBeVisible()
    await target.tap()
    await target.typeText(text)
}

export const typeViaPlaceholder = (placeholder: string, text: string) => async () => {
    const target = element(by.text(placeholder))
    await expect(target).toBeVisible()
    await target.replaceText(text)
}

export const replaceTextViaID = (id: string, text: string) => async () => {
    const target = element(by.id(id))
    await expect(target).toBeVisible()
    await target.replaceText(text)
}

export const multipleTextVisible = (textArr: string[]) => async () => {
    await wait(2000)()
    for (const i of textArr) {
        await expect(element(by.text(i))).toBeVisible()
    }
}

export const multipleTextNotVisible = (textArr: string[], waitTime = 0) => async () => {
    await wait(waitTime)()
    for (const i of textArr) {
        await expect(element(by.text(i))).toBeNotVisible()
    }
}

export const multipleIDVisible = (idArr: string[]) => async () => {
    for (const i of idArr) {
        await expect(element(by.id(i))).toBeVisible()
    }
}

export const booleanTextVisible = async (text) => {
    try {
        await expect(element(by.text(text))).toBeVisible()
        return true
    } catch (e) {
        return false
    }
}

export const booleanIdVisible = async (id) => {
    try {
        await expect(element(by.id(id))).toBeVisible()
        return true
    } catch (e) {
        return false
    }
}

export const replaceTextByID = (id: string, text: string) => async () => {
    const textField = element(by.id(id));
    await textField.tap();
    await textField.replaceText(text);
}


export const tryCatchTextVisible = (textArr, waitTime=0) => async()=>{
    await wait(waitTime)()

    try{
        expect(element(by.text(textArr[0]))).toBeVisible()
    }catch(e){
        expect(element(by.text(textArr[1]))).toBeVisible()
    }
}

export const completeOnboardingIntro = async () => {
    await navigateViaText("Next")
    await navigateViaText("Next")
    await navigateViaText("Let's go")
}

export const completedTodayStreakCopyVisible = (dayNum:number) => async()=>{
    switch(dayNum){
        case 1: 
            await expect(element(by.text("First day done!"))).toBeVisible()
            break
        case 2:
            await expect(element(by.text("Two days down!"))).toBeVisible()
            break
        case 3:
            await expect(element(by.text("You’re over the hump!"))).toBeVisible()
            break
        case 4:
            await expect(element(by.text("Home stretch!"))).toBeVisible()
            break
        case 5:
            await expect(element(by.text("You smashed that Streak!"))).toBeVisible()
            break
    }
}

export const headingStartStreakCopyVisible = (dayNum:number) => async()=>{
    switch (dayNum) {
        case 1:
            await expect(element(by.text("Start your Streak"))).toBeVisible()
            break
        case 2:
            await expect(element(by.text("Off to a good start"))).toBeVisible()
            break
        case 3:
            await expect(element(by.text("Keep it going"))).toBeVisible()
            break
        case 4:
            await expect(element(by.text("Keep it up"))).toBeVisible()
            break
        case 5:
            await expect(element(by.text("Close out your Streak"))).toBeVisible()
            break
    }
}

export const clearFieldByID = (id: string) => async () => {
    const textField = element(by.id(id));
    await textField.tap();
    await textField.clearText();
}

export const slowType = (element: any, string: string, waitTime = 1000) => async () => {
    const stringArr = string.split('')
    await element.tap()
    for (const char of stringArr) {
        await element.typeText(char)
        await wait(waitTime)()
    }
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export const restartWithoutDeleteTwoTimes = async () => {
    await device.terminateApp();
    await device.launchApp({ delete: false, });
    await wait(2000)()
    await device.terminateApp();
    await device.launchApp({ delete: false, });
    await dismissNewLooksModalIfVisible()
}

export const idExist = (id: string, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toExist().withTimeout(waitTime)
    await expect(target).toExist()
}

export const tapIDAtIndex = (id: string, index = 0, waitTime = 0) => async () => {
    const target = element(by.id(id)).atIndex(index)
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await target.tap()
}

export const tapTextAtIndex = (text: string, index = 0, waitTime = 0) => async () => {
    const target = element(by.text(text)).atIndex(index)
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await target.tap({ x:0, y:0 })
}

export const minimiseAndReopenApp = async () => {
    await device.sendToHome();
    await device.launchApp({newInstance: false});
}

export const daysRemainingOfWeek = () => {
    const eventdate = moment().endOf("week");
    const todaysdate = moment();
    const diff = eventdate.diff(todaysdate, 'days');
    return diff + 1
}

export const closeScreen = (option: "button_only" | "yulife" | "activity history") => async () => {
    await tapID(BUTTON_CLOSE_HEADER(option))()
}