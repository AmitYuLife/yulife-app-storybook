import { startWithoutLaunch } from "@navigation"
import { dataManager, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as leaderboardStubs from "../_data"

const leaderboardData = Object.keys(leaderboardStubs).map((key) => Object.values(leaderboardStubs[key])).reduce((acc, val) => acc.concat(val), []) as unknown as IDatabaseItem[]

export const startWithInsert = async () => {
    await startWithoutLaunch()
    await dataManager.insertRecords(leaderboardData)
}