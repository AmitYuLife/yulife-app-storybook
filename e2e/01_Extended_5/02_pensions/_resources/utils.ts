import moment from "moment";
import { PensionContributionInfo } from "./types";

const pensionRewardPeriodHours = 12
const DAILY_PENSION_PROGRESS_MAX_LIMIT = 12
const START_OF_REWARD_PERIOD = 6;
const REWARD_PERIOD = 12;

const dailyPensionProgress = () => {
    const now = moment().toDate()
    const progress = moment(now).diff(moment.parseZone(now).startOf("day"), "hours") - START_OF_REWARD_PERIOD;

    if (progress < 1) {
        return 0;
    }

    if (progress > REWARD_PERIOD) {
        return REWARD_PERIOD;
    }

    return progress;
}

const dailyPensionProgressWithLimit = Math.min(dailyPensionProgress(), DAILY_PENSION_PROGRESS_MAX_LIMIT)

export const calculateDailyContribution = (contributionRecord: PensionContributionInfo) => {
    const { balance, period } = contributionRecord;
        let dailyAmount = balance;

        if (period === "month") {
            dailyAmount = (balance * 12) / 365;
        } else if (period === "week") {
            dailyAmount = (balance * 52) / 365;
        }

        return +dailyAmount.toFixed(2);
}

export const calculateInProgressContribution = (pensionContribution: PensionContributionInfo) => {
    const calc = (calculateDailyContribution(pensionContribution) / pensionRewardPeriodHours *
    dailyPensionProgressWithLimit).toFixed(2)
    const contribution = calc === "0.00" ? 0 : calc

    return contribution
}

export const calculatePensionModalAmount = (pensionContribution: PensionContributionInfo) => {
    const inProgressContribution = calculateInProgressContribution(pensionContribution)

    if (inProgressContribution === 0) {
        return "Pension (Syncing ... )"
    }

    return `£${inProgressContribution}/${calculateDailyContribution(pensionContribution)} Pension contribution`
}