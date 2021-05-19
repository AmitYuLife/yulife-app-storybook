import { AVATAR_ITEM, navigation } from "@utils"
import { screens } from "@appScreens"


export const {
    idVisible,
    textVisible,
} = navigation.common

export const {
    onYuscreenV3,
    onProductDetails,
    onCertificate
} = screens.yuscreen

export const {
    scrollUntilTextVisible,
} = navigation.scrolling

export const alphaProductsNotVisible = async()=>{
    await expect(element(by.id(AVATAR_ITEM("compass", "active")))).toBeNotVisible()
    await expect(element(by.id(AVATAR_ITEM("binoculars", "active")))).toBeNotVisible()
    await expect(element(by.id(AVATAR_ITEM("map", "active")))).toBeNotVisible()
}