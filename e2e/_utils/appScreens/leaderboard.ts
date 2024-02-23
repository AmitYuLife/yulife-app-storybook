import { clearFieldByID, typeViaID } from "@navigation"
import * as ids from "@ids"
import { expect } from 'detox'

export const searchLeaderboard = (user: string) => async () => {
    await clearFieldByID(ids.INPUT_FIELD)()
    await typeViaID(ids.INPUT_FIELD, user)()
}

export const checkCopyNoLeaderboard = async () => {
    const copy = "Sit tight, while we set up your leaderboard";
    await expect(element(by.text(copy))).toBeVisible(45)
}