import moment from "moment";
import { PLICoverLevel } from "./types";

export const PLICommonPlan: PLICoverLevel ={
    percent: "25%",
    pricePerMonth: "£9.45",
    payout: "£1,041.67",
    payoutUntil: moment().add(38, "years").format("Do MMMM YYYY")
}

export const PLIRarePlan: PLICoverLevel ={
    percent: "50%",
    pricePerMonth: "£17.86",
    payout: "£2,083.33",
    payoutUntil: moment().add(38, "years").format("Do MMMM YYYY")
}

export const PLIEpicPlan: PLICoverLevel ={
    percent: "75%",
    pricePerMonth: "£30.13",
    payout: "£3,125",
    payoutUntil: moment().add(38, "years").format("Do MMMM YYYY")
}