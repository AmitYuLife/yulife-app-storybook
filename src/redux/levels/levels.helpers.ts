import moment from "moment";
import { queryMindfulSessions } from "../../services/fitkit/fitkit.service";
import { IActiveLevel } from "./levels.selectors";

export async function getEndResult({ startDateTime, endDateTime, subtype, score }: IActiveLevel) {
    const start = moment(startDateTime).format();
    const end = moment(endDateTime).format();
    let result;

    if (subtype === "meditation") {
        try {
            const queryResult = await queryMindfulSessions(start, end);
            result = {
                value: Math.floor(
                    (queryResult || []).reduce(
                        (accumulator: number, session: any) => accumulator + session.value, // tslint:disable-line
                        0
                    )
                )
            };
        } catch (e) {
            result = {
                value: 0
            };
        }
    } else {
        result = {
            value: score
        };
    }

    return result;
}
