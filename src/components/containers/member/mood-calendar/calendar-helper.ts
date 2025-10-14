import moment from "moment";
import { MonthMoodData } from "./mood-calendar.container";
import { CalendarDay, IMonth } from "../../../organisms/mood-calendar/mood-month";
import { GetUserMoodSubmissionsQuery } from "@graphql/__generated";
import { DATE_FORMAT, DATE_FORMAT_MONTH } from "@utils";

// Server will not return all months, and all days of the month, we need to generate the missing data
export const generateMissingData = (
  data: GetUserMoodSubmissionsQuery,
  firstMonthDate: string,
  monthsPerPage: number
) => {
  const submissions = data.getUserMoodSubmissions.submissions;
  const monthsMap = new Map<string, MonthMoodData>();

  // Initialize months
  for (let i = 0; i < monthsPerPage; i++) {
    const monthMoment = moment(firstMonthDate).subtract(i, "months");
    const monthKey = monthMoment.format(DATE_FORMAT_MONTH);
    monthsMap.set(monthKey, {
      month: monthMoment.format(DATE_FORMAT),
      days: [],
    });
  }

  // Populate mood submissions
  submissions.forEach((submission) => {
    if (!submission?.date || !submission?.icon?.uri) {
      return;
    }

    const monthKey = moment(submission.date).format(DATE_FORMAT_MONTH);
    const monthData = monthsMap.get(monthKey);

    if (monthData) {
      monthData.days.push({
        date: submission.date,
        moodImage: submission.icon.uri,
      });
    }
  });

  // Convert to array and sort by date (most recent first)
  const newMoodData = Array.from(monthsMap.values()).sort((a, b) => {
    return moment(b.month).valueOf() - moment(a.month).valueOf();
  });

  const fullData = getMissingDays(newMoodData);

  return fullData;
};

const getMissingDays = (data: MonthMoodData[]): IMonth[] => {
  const today = moment().format(DATE_FORMAT);
  const startOfWeek = moment().startOf("week");
  const firstDayOfWeek = startOfWeek.day();

  return data.map((monthData) => {
    const days: (CalendarDay | null)[] = [];
    const targetMonth = moment(monthData.month);
    const startOfMonth = targetMonth.clone().startOf("month");
    const endOfMonth = targetMonth.clone().endOf("month");
    const moodMap = new Map(monthData.days.map((item) => [moment(item.date).format(DATE_FORMAT), item.moodImage]));

    // Add empty cells for days before the month starts (to align with correct weekday)
    const startOfMonthDay = startOfMonth.day();
    const emptyCells = (startOfMonthDay - firstDayOfWeek + 7) % 7;
    days.push(...Array.from({ length: emptyCells }, () => null as null));

    const current = startOfMonth.clone();
    while (current.isSameOrBefore(endOfMonth)) {
      const dateKey = current.format(DATE_FORMAT);

      days.push({
        date: dateKey,
        dayNumber: current.date(),
        moodImage: moodMap.get(dateKey),
        isToday: dateKey === today,
      });

      current.add(1, "day");
    }

    return {
      monthDate: monthData.month,
      monthLabel: targetMonth.format("MMM YYYY"),
      days,
    };
  });
};
