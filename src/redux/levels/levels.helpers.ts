import moment from "moment";
import Pedometer from "react-native-dual-pedometer";
import { IActiveLevel } from "./levels.selectors";

export async function getEndResult({ startDateTime, endDateTime, subtype, score }: IActiveLevel) {
    if (subtype === "meditation") {
        return {};
    }

    try {
        const results = await Pedometer.queryPedometerFromDate(
            moment(startDateTime).format(),
            moment(endDateTime).format()
        );
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
