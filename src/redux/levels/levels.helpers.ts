import moment from "moment";
import Pedometer from "react-native-dual-pedometer";
import { queryMindfulSessions } from "../../services/fitkit/fitkit.service";
import { IActiveLevel } from "./levels.selectors";

export async function getEndResult({ startDateTime, endDateTime, subtype, score }: IActiveLevel) {
    if (subtype === "meditation") {
        try {
            const start = moment(startDateTime).format();
            const end = moment(endDateTime).format();
            const queryResult = await queryMindfulSessions(start, end);

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
                const queryResultAllDay = await queryMindfulSessions(startOfDay, endLater);

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
        const results = await Pedometer.queryPedometerFromDate(start, end);
        // console.log("RESULTS: ", results);
        return {
            value: results && results.steps > score ? results.steps : score
        };
    } catch (e) {
        // console.log("ERRORS: ", e);
        return {
            value: score
        };
    }
}
