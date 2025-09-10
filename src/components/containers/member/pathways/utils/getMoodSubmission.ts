import { GetUserPathwaysQuery } from "@graphql/__generated";
import moment from "moment";

export const getMoodSubmission = (data: GetUserPathwaysQuery) => {
  const startOfWeek = moment().startOf("week");

  return Array.from({ length: 7 }, (_, i) => {
    const date = startOfWeek.clone().add(i, "days");
    const submission = data?.getUserMoodSubmissions?.submissions.find((s) => s.date === date.format("YYYY-MM-DD"));

    return {
      dayLabel: date.format("ddd"),
      isToday: date.isSame(moment(), "day"),
      iconUrl: submission?.icon?.uri,
    };
  });
};
