import moment from "moment";
import { DATE_FORMAT_WITH_TZ, getStartAndEndDateTimesWithTimezone } from "./utils";

describe("Utils", () => {
    describe("getStartAndEndDateTimesWithTimezone", () => {
        const scenarios = [
            {
                name: "should work fine when there is a timezone in startDateTime",
                startDateTime: "2019-06-19T12:04:20+01:00",
                endDateTime: "2019-06-19T12:09:20",
                result: { start: "2019-06-19T12:04:20+01:00", end: "2019-06-19T12:09:20+01:00" }
            },
            {
                name: "should work fine when there is no timezone in startDateTime",
                startDateTime: "2019-06-19T12:04:20",
                endDateTime: "2019-06-19T12:09:20",
                result: {
                    start: moment("2019-06-19T12:04:20").format(DATE_FORMAT_WITH_TZ),
                    end: moment("2019-06-19T12:09:20").format(DATE_FORMAT_WITH_TZ)
                }
            }
        ];
        for (const {
            name,
            result: { start, end },
            startDateTime,
            endDateTime
        } of scenarios) {
            it(name, () => {
                const actual = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);
                expect(actual.start).toEqual(start);
                expect(actual.end).toEqual(end);
            });
        }
    });
});
