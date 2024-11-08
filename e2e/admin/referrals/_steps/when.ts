import { navigation } from "@utils";

export const {
    scrollFromText,
    scrollFromID,
    swipeToText,
    scrollUntilTextVisible,
    scrollUntilIdVisible,
    scrollFromIDMultiple,
    scrollToAndTapText,
} = navigation.scrolling;

export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    replaceTextViaID,
    tapTextWithParentID,
    tryTapID,
    tryTapText,
    wait,
    clearFieldByID,
    restartWithData,
    restartWithoutDelete,
    restartWithoutDeleteTwoTimes,
} = navigation.common;

export const { loginOnly, loginAsUser } = navigation.login;
