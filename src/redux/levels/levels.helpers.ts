import moment from "moment";
import Pedometer from "react-native-dual-pedometer";
import { queryMindfulSessions } from "../../services/fitkit/fitkit.service";
import { IActiveLevel } from "./levels.selectors";

export async function getEndResult({ startDateTime, endDateTime, subtype, score }: IActiveLevel) {
    const start = moment(startDateTime).format();
    const end = moment(endDateTime).format();

    if (subtype === "meditation") {
        try {
            const queryResult = await queryMindfulSessions(start, end);
            return {
                value: Math.floor(
                    (queryResult || []).reduce(
                        (accumulator: number, session: any) => accumulator + session.value, // tslint:disable-line
                        0
                    )
                )
            };
        } catch (e) {
            return {
                value: 0
            };
        }
    }

    try {
        const results = await Pedometer.queryPedometerFromDate(start, end);
        // console.log("RESULTS: ", results);
        return {
            value: results.steps || score
        };
    } catch (e) {
        // console.log("ERRORS: ", e);
        return {
            value: score
        };
    }
}
