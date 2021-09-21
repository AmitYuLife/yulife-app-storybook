import { navigation } from "@utils"
import { scrollUntilIdVisible } from "_utils/navigation/scrolling"
import { TEXT_TEMPLATE, WELLBEING_HUB_SCROLL_VIEW } from "@ids"

export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible
} = navigation.common

export const wellbeingServiceVisible = async () => {
    const titles = ["Smart Health", "YuMatter", "Beam", "HiBob", "More Happi"]

    for (const i of titles) {
        await scrollUntilIdVisible(WELLBEING_HUB_SCROLL_VIEW, TEXT_TEMPLATE(i), "down")()
        await expect(element(by.id(TEXT_TEMPLATE(i)))).toBeVisible()
    }
}