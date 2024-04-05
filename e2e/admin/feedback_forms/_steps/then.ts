import { navigation } from "@utils"

export const {
    idVisible,
    textVisible,
    textNotVisible,
    multipleTextVisible,
} = navigation.common

export const feedbackFormVisible =(title:string)=> async()=>{
    await waitFor(element(by.text(title))).toBeVisible().withTimeout(6000)
}