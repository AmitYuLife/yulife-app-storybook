import RNFitKit from "@services/fitkit/fitkit.service";
import { getCurrentWorld } from "@services/utils";
import moment from "moment";
import { queryMindfulSessions } from "../../services/fitkit/fitkit.helpers";
import { IActiveLevel } from "./levels.selectors";

const MAX_AVAILABLE = 4;

export async function getEndResult({ startDateTime, endDateTime, subtype, score }: IActiveLevel, features: any = {}) {
    if (subtype === "meditation") {
        try {
            const start = moment(startDateTime).format();
            const end = moment(endDateTime).format();
            const queryResult = await queryMindfulSessions(start, end, features.disableUserEntries);

            if (queryResult.length > 0) {
                return {
                    value: Math.floor(queryResult.reduce((acc: number, item: any) => acc + item.value, 0))
                };
            } else {
                const startOfDay = moment(startDateTime)
                    .startOf("day")
                    .format();
                const endLater = moment(endDateTime)
                    .add(2, "hours")
                    .format();
                const queryResultAllDay = await queryMindfulSessions(startOfDay, endLater, features.disableUserEntries);

                if (queryResultAllDay.length > 0) {
                    return {
                        value: Math.floor(queryResultAllDay.reduce((acc: number, item: any) => acc + item.value, 0))
                    };
                } else {
                    return {
                        value: 0
                    };
                }
            }
        } catch (e) {
            return {
                value: 0
            };
        }
    }

    try {
        const start = moment(startDateTime).format();
        const end = moment(endDateTime).format();
        const results = await RNFitKit.queryPedometerFromDate(start, end);
        return {
            value: results && results.steps > score ? results.steps : score
        };
    } catch (e) {
        return {
            value: score
        };
    }
}

export function getChallengesAmountAvailable(level: number) {
    const available = getCurrentWorld(level) + 1;
    return available > MAX_AVAILABLE ? MAX_AVAILABLE : available;
}
