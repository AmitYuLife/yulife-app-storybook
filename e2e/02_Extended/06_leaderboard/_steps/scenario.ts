import { startWithoutLaunch } from "@navigation"
import { dataManager } from "../../../_utils/data/dataManager";
import { IDatabaseItem } from "../../../_utils/data/types";
import * as leaderboardStubs from "../_data"

const leaderboardData = Object.keys(leaderboardStubs).map((key) => Object.values(leaderboardStubs[key])).reduce((acc, val) => acc.concat(val), []) as unknown as IDatabaseItem[]

export const startWithInsert = async () => {
    await startWithoutLaunch()
    await dataManager.insertRecords(leaderboardData)
}