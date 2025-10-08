import moment from "moment";
import { MonthMoodData } from "./mood-calendar";
import { CalendarDay } from "./mood-month";

export const getMissingDays = (data: MonthMoodData[]) => {
  const today = moment().format("YYYY-MM-DD");
  const startOfWeek = moment().startOf("week");
  const firstDayOfWeek = startOfWeek.day();

  return data.map((monthData) => {
    const days: (CalendarDay | null)[] = [];
    const targetMonth = moment(monthData.month);
    const startOfMonth = targetMonth.clone().startOf("month");
    const endOfMonth = targetMonth.clone().endOf("month");
    const moodMap = new Map(monthData.days.map((item) => [moment(item.date).format("YYYY-MM-DD"), item.moodImage]));

    // Add empty cells for days before the month starts (to align with correct weekday)
    const startOfMonthDay = startOfMonth.day();
    const emptyCells = (startOfMonthDay - firstDayOfWeek + 7) % 7;
    days.push(...Array.from({ length: emptyCells }, () => null as null));

    const current = startOfMonth.clone();
    while (current.isSameOrBefore(endOfMonth)) {
      const dateKey = current.format("YYYY-MM-DD");

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
