import { navigation } from "@navigation"
export { addStepsHistoricalData, addCyclingHistoricalData, addMindfulnessHistoricalData, addSteps3DaysHistoricalData } from "@socket";


export const {
    loginAsUser,
    loginOnly,
    loginAndCollectSignupBonus
} = navigation.login
