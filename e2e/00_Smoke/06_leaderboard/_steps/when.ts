import { navigation } from "@navigation"

export const {
    tapID,
    tapText,
    replaceTextByID,
    restartWithData
} = navigation.common

export const {
    loginAsUser,
    continueLogin,
    loginOnly
} = navigation.login

export const turnOffLeaderboard = (leaderboardID: string) => async () => {
    const leaderboard = element(by.id(leaderboardID))
    const offButton = element(by.text("Turn it off"))

    await leaderboard.tap()
    await offButton.tap()

}