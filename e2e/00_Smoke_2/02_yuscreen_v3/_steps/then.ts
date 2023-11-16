import { navigation } from "@utils"
import { screens } from "@appScreens"
import * as ids from "@ids"
import {expect} from 'detox'

export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible
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
    await expect(element(by.id(ids.AVATAR_ITEM("compass", "active")))).toBeNotVisible()
    await expect(element(by.id(ids.AVATAR_ITEM("binoculars", "active")))).toBeNotVisible()
    await expect(element(by.id(ids.AVATAR_ITEM("map", "active")))).toBeNotVisible()
}

export const avatarItemVisible = (avatarItem: string, status: string) => async () => {
    await idVisible(ids.AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status))
}