import { FitKitType } from "@graphql/_core/schema/globalTypes";
import RNFitKit from "@services/fitkit/fitkit.service";
import Logger from "@services/logging/logger";
import { DATE_FORMAT_WITH_TZ, getStartAndEndDateTimesWithTimezone } from "@services/utils";
import moment from "moment";
import { querySteps, queryFitKitByTypes } from "../../services/fitkit/fitkit.helpers";
import { IActiveLevel } from "./levels.selectors";

const MAX_AVAILABLE = 4;

export async function getEndResult(
  { startDateTime, endDateTime, score, fitKitTypes }: IActiveLevel,
  features: Record<string, boolean> = {}
) {
  if (!fitKitTypes.includes(FitKitType.StepCount)) {
    try {
      const { start, end } = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);

      const queryResult = await queryFitKitByTypes(start, end, fitKitTypes, features);

      // the way the 3rd party apps like calm/headspace write to the history is not always consistent
      // if someone's got their timezone changed
      // sometimes it might happen that the meditation was written in the wrong period
      // the agreed solution for the beginning was to query the timeframe we've got at first
      // then if there are no results, make another query for the whole day
      // as of july 2019, it's changed to 2 hours before and 2 hours later
      // as of july 2021, it's changed to 1 hour before and 1 after
      if (queryResult.length > 0) {
        return {
          value: Math.floor(queryResult.reduce((acc, item) => acc + item.value, 0)),
        };
      }

      const startEarly = moment(startDateTime).subtract(1, "hours").format(DATE_FORMAT_WITH_TZ);
      const endLater = moment(endDateTime).add(1, "hours").format(DATE_FORMAT_WITH_TZ);
      const queryResultAllDay = await queryFitKitByTypes(startEarly, endLater, fitKitTypes, features);

      if (queryResultAllDay.length > 0) {
        return {
          value: Math.floor(queryResultAllDay.reduce((acc, item) => acc + item.value, 0)),
        };
      }

      return {
        value: 0,
      };
    } catch (e) {
      return {
        value: 0,
      };
    }
  }

  try {
    const { start, end } = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);

    // get steps from google services/apple health
    const fitkitResults = await querySteps(moment(start), moment(end));
    const fitkitValue =
      fitkitResults && fitkitResults.results ? fitkitResults.results.reduce((a, b) => a + b.value, 0) : 0;

    // get steps from sensors
    const pedometerResults = await RNFitKit.queryPedometerFromDate(start, end);
    const pedometerValue = pedometerResults?.steps || 0;

    Logger.logMixpanelEvent("end_challenge_result", {
      startDateTime,
      endDateTime,
      start,
      end,
      score,
      fitkitValue,
      pedometerValue,
    });

    const value = Math.max(pedometerValue, score);

    return { value };
  } catch (e) {
    Logger.error(e, {
      startDateTime,
      endDateTime,
      message: e.message,
      where: "debug_query_pedometer_from_date_steps_error",
    });

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
  const available = Math.floor((level - 1) / 50) + 1;
  return available > MAX_AVAILABLE ? MAX_AVAILABLE : available;
}
