import { PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT } from "@services/constants";
import moment from "moment";

export const getEndDates = (stepsLastUpdate: string, meditationLastUpdate: string, cyclingLastUpdate: string) => {
  const endOfYesterday = moment().subtract(1, "day").endOf("day");

  const endDateSteps = moment.min(
    moment(stepsLastUpdate).add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days").endOf("day"),
    endOfYesterday
  );
  const endDateMeditation = moment.min(
    moment(meditationLastUpdate).add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days").endOf("day"),
    endOfYesterday
  );
  const endDateCycling = moment.min(
    moment(cyclingLastUpdate).add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days").endOf("day"),
    endOfYesterday
  );

  return { endDateSteps, endDateMeditation, endDateCycling };
};
