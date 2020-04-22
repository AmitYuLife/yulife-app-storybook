import moment from "moment";
import { DATE_FORMAT_WITH_TZ, getCurrentEpisode, getStartAndEndDateTimesWithTimezone } from "./utils";

describe("Utils", () => {
  describe("getStartAndEndDateTimesWithTimezone", () => {
    const scenarios = [
      {
        name: "should work fine when there is a timezone in startDateTime",
        startDateTime: "2019-06-19T12:04:20+01:00",
        endDateTime: "2019-06-19T12:09:20",
        result: { start: "2019-06-19T12:04:20+01:00", end: "2019-06-19T12:09:20+01:00" },
      },
      {
        name: "should work fine when there is no timezone in startDateTime",
        startDateTime: "2019-06-19T12:04:20",
        endDateTime: "2019-06-19T12:09:20",
        result: {
          start: moment("2019-06-19T12:04:20").format(DATE_FORMAT_WITH_TZ),
          end: moment("2019-06-19T12:09:20").format(DATE_FORMAT_WITH_TZ),
        },
      },
    ];
    for (const {
      name,
      result: { start, end },
      startDateTime,
      endDateTime,
    } of scenarios) {
      it(name, () => {
        const actual = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);
        expect(actual.start).toEqual(start);
        expect(actual.end).toEqual(end);
      });
    }
  });

  describe("getCurrentEpisode", () => {
    it("should return correct episodes of unity levels", () => {
      const forestUnity = getCurrentEpisode(50);
      const oceanUnity = getCurrentEpisode(100);
      const desertUnity = getCurrentEpisode(150);
      const mountainUnity = getCurrentEpisode(200);

      expect(forestUnity).toEqual(7);
      expect(oceanUnity).toEqual(15);
      expect(desertUnity).toEqual(23);
      expect(mountainUnity).toEqual(31);
    });

    it("should return correct episodes for non-unity levels", () => {
      const level57 = getCurrentEpisode(57);
      const level92 = getCurrentEpisode(92);
      const level93 = getCurrentEpisode(93);
      const level99 = getCurrentEpisode(99);
      const level45 = getCurrentEpisode(45);
      const level135 = getCurrentEpisode(135);
      const level151 = getCurrentEpisode(151);

      expect(level57).toEqual(8);
      expect(level92).toEqual(13);
      expect(level93).toEqual(14);
      expect(level99).toEqual(14);
      expect(level45).toEqual(6);
      expect(level135).toEqual(20);
      expect(level151).toEqual(24);
    });
  });
});
