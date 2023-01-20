import { GetActivityHistory_getActivityHistoryWithLevels_sources as Sources } from "@graphql/_core/schema";
import { ItemProps } from "@screens/member/activity-history-levels/activity-history-levels.item";

export interface IFormattedDatesByMonth {
  title: string;
  items: ItemProps[];
}

export function groupDatesByMonth(dates: ItemProps[]) {
  // dates return undefined sometimes on first run which crashes the app
  return dates && dates.length
    ? dates.reduce((accumulator: IFormattedDatesByMonth[], curr) => {
        const index = accumulator.findIndex((value) => value.title === curr.monthAndYear);
        if (index !== -1) {
          accumulator[index].items.push(curr);
        } else {
          accumulator.push({
            title: curr.monthAndYear,
            items: [curr],
          });
        }

        return accumulator;
      }, [])
    : [];
}

export function countSources(sources: Partial<Sources>) {
  if (!sources.garmin && !sources.fitbit && !sources.strava && !sources.withings) {
    return 0;
  }

  let sourceCount = 0;
  for (const source in sources) {
    if (
      sources[source as keyof Sources] !== null &&
      sources[source as keyof Sources] !== 0 &&
      source !== "__typename"
    ) {
      sourceCount += 1;
    }
  }

  return sourceCount;
}
