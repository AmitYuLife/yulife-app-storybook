import { GetActivityHistory_getActivityHistoryWithLevels_sources as Sources } from "@graphql/_core/schema";
import { ItemProps } from "@screens/member/activity-history-levels/activity-history-levels.item";

export interface IFormattedDatesByMonth {
    title: string;
    items: ItemProps[];
}

export function groupDatesByMonth(dates: ItemProps[]) {
    return Boolean(dates.length)
        ? dates.reduce((accumulator: IFormattedDatesByMonth[], curr) => {
              const index = accumulator.findIndex((value) => value.title === curr.monthAndYear);
              if (index !== -1) {
                  accumulator[index].items.push(curr);
              } else {
                  accumulator.push({
                      title: curr.monthAndYear,
                      items: [curr]
                  });
              }
              return accumulator;
          }, [])
        : [];
}

export function countSources(sources: Partial<Sources>) {
    if (!sources.garmin && !sources.fitbit) {
        return 0;
    }
    let sourceCount = 0;
    for (const source in sources) {
        if (sources[source as keyof Sources] !== null && source !== "__typename") {
            sourceCount += 1;
        }
    }
    return sourceCount;
}
