import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";
import { CHALLENGE_TEMPLATE } from "./_templates";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
    return {
        startTime: startDate.toDate(),
        date: startDate.format("YYYY-MM-DD"),
        startDateTime: startDate.format(),
        endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
    };
}

