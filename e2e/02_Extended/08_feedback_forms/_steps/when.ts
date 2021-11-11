import { navigation } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";


export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    wait
} = navigation.common


export const {
    completeIntro,
    dismissNewLooksModalIfVisible
} = navigation.login