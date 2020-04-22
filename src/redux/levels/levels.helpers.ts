import RNFitKit from "@services/fitkit/fitkit.service";
import Logger from "@services/logging/logger";
import { DATE_FORMAT_WITH_TZ, getCurrentWorld, getStartAndEndDateTimesWithTimezone } from "@services/utils";
import moment from "moment";
import { queryMindfulSessions } from "../../services/fitkit/fitkit.helpers";
import { IActiveLevel } from "./levels.selectors";

const MAX_AVAILABLE = 4;

export async function getEndResult({ startDateTime, endDateTime, subtype, score }: IActiveLevel, features: any = {}) {
  if (subtype === "meditation") {
    try {
      const { start, end } = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);

      if (features.loggingEnabled) {
        Logger.logMixpanelEvent("debug_get_end_result_meditation", { startDateTime, endDateTime, start, end });
      }

      const queryResult = await queryMindfulSessions(start, end, features);

      // the way the 3rd party apps like calm/headspace write to the history is not always consistent
      // if someone's got their timezone changed
      // sometimes it might happen that the meditation was written in the wrong period
      // the agreed solution for the beginning was to query the timeframe we've got at first
      // then if there are no results, make another query for the whole day
      // as of july 2019, it's changed to 2 hours before and 2 hours later
      if (queryResult.length > 0) {
        return {
          value: Math.floor(queryResult.reduce((acc: number, item: any) => acc + item.value, 0)),
        };
      } else {
        const startOfDay = moment(startDateTime).subtract(2, "hours").format(DATE_FORMAT_WITH_TZ);
        const endLater = moment(endDateTime).add(2, "hours").format(DATE_FORMAT_WITH_TZ);
        const queryResultAllDay = await queryMindfulSessions(startOfDay, endLater, features);

        if (queryResultAllDay.length > 0) {
          return {
            value: Math.floor(queryResultAllDay.reduce((acc: number, item: any) => acc + item.value, 0)),
          };
        } else {
          return {
            value: 0,
          };
        }
      }
    } catch (e) {
      return {
        value: 0,
      };
    }
  }

  try {
    const { start, end } = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);

    if (features.loggingEnabled) {
      Logger.logMixpanelEvent("debug_query_pedometer_from_date", { startDateTime, endDateTime, start, end });
    }

    const results = await RNFitKit.queryPedometerFromDate(start, end);

    return {
      value: results && results.steps > score ? results.steps : score,
    };
  } catch (e) {
    return {
      value: score,
    };
  }
}

export function isChallengeAvailable(level: number, done: number, available: number, nextLevelAvailableAt: string) {
  // when you do level 49/99/159
  // your current level becomes 51/101/161 so technically you're allowed to take another challenge
  // and that should not happen
  if (
    level % 50 === 1 && // check if it's first level of the world
    Math.floor(level / 50) === done && // check if you already did 1/2/3 challenges today
    !!nextLevelAvailableAt && // check if nextLevelAvailableAt is not empty
    moment().isBefore(moment(nextLevelAvailableAt)) // check if nextLevelAvailableAt is past the current day
  ) {
    return false;
  }
  return done < available;
}

export function getChallengesAmountAvailable(level: number) {
  const available = getCurrentWorld(level) + 1;
  return available > MAX_AVAILABLE ? MAX_AVAILABLE : available;
}
