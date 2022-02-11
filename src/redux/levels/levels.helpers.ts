import { FitKitType } from "@graphql/_core/schema/globalTypes";
import RNFitKit from "@services/fitkit/fitkit.service";
import Logger from "@services/logging/logger";
import { DATE_FORMAT_WITH_TZ, getStartAndEndDateTimesWithTimezone } from "@utils";
import moment from "moment";
import { queryFitKitByTypes } from "@services/fitkit/fitkit.helpers";
import { IActiveLevel } from "./levels.selectors";

const MAX_AVAILABLE = 4;

export async function getEndResult(
  { startDateTime, endDateTime, score, fitKitTypes }: IActiveLevel,
  features: Record<string, boolean> = {}
) {
  if (!fitKitTypes.includes(FitKitType.StepCount)) {
    try {
      const { start, end } = getStartAndEndDateTimesWithTimezone(startDateTime, endDateTime);

      const { results: queryResult } = await queryFitKitByTypes(start, end, fitKitTypes, features);

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
      const { results: queryResultAllDay } = await queryFitKitByTypes(startEarly, endLater, fitKitTypes, features);

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
    // RNFitKit.queryPedometerFromDate
    // Android: queries google fit history, steps from sensor are stored in score
    // iOS: fetches steps from sensors
    const pedometerResults = await RNFitKit.queryPedometerFromDate(start, end);
    const pedometerValue = pedometerResults?.steps || 0;

    Logger.logMixpanelEvent("end_challenge_result", {
      startDateTime,
      endDateTime,
      start,
      end,
      score,
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

export function getAvailableChallengesForToday(
  level: number,
  totalChallengesDoneToday: number,
  availableChallengesToday: number,
  nextLevelAvailableAt: string
) {
  const availableChallengesMinusOne = availableChallengesToday - 1;
  const challengesLeft = availableChallengesToday - totalChallengesDoneToday;
  const challengesLeftMinusOne = challengesLeft - 1;
  const isNextLevelAvailableAt = moment().isBefore(moment(nextLevelAvailableAt));

  // when you do level 49/99/149
  // your current level becomes 51/101/151 so technically you're allowed to take another challenge
  // and that should not happen
  if (
    level % 50 === 1 && // check if it's first level of the world
    Math.floor(level / 50) === totalChallengesDoneToday && // check if you already did 1/2/3 challenges today
    !!nextLevelAvailableAt && // check if nextLevelAvailableAt is not empty
    isNextLevelAvailableAt // check if nextLevelAvailableAt is past the current day
  ) {
    return challengesLeftMinusOne;
  }

  if (level % 50 === 1 && availableChallengesMinusOne > 1 && isNextLevelAvailableAt) {
    return challengesLeftMinusOne;
  }

  return challengesLeft;
}

export function getChallengesAmountAvailable(level: number) {
  const available = Math.floor((level - 1) / 50) + 1;
  return available > MAX_AVAILABLE ? MAX_AVAILABLE : available;
}
