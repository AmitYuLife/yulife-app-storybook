import { clearFieldByID, typeViaID } from "@navigation"
import * as ids from "@ids"

export const searchLeaderboard = (user: string) => async () => {
    await clearFieldByID(ids.INPUT_FIELD)()
    await typeViaID(ids.INPUT_FIELD, user)()
}