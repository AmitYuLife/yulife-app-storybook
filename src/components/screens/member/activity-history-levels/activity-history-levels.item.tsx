import { StarInline, Text } from "@atoms/index";
import { GetActivityHistory_getActivityHistoryWithLevels_sources as Sources } from "@graphql/_core/schema";
import * as React from "react";
import { View } from "react-native";
import { displaySecondsAsMinutes, padNum, addCommasToNumber } from "@utils";
import styles from "./activity-history-levels.styles";
import { DistanceMeasurementType } from "@graphql/_core/schema/globalTypes";
import { KM_TO_METERS, METER_TO_MILES } from "@redux/daily-cycling/daily-cycling.selectors";

export interface IChallenge {
  earned: number;
  milestones: number;
  name: string;
  score: string;
}

export interface ItemProps {
  id?: string;
  challenges: IChallenge[];
  dayOfMonth: string;
  dayOfWeek: string;
  level?: number;
  monthAndYear?: string;
  steps: number;
  sources?: Partial<Sources>;
  yucoin: number;
  mindfulSeconds?: number;
  mindfulYucoin?: number;
  cycling?: number;
  cyclingYucoin?: number;
  cyclingMeasurement: DistanceMeasurementType;
}

export default function ActivityHistoryLevelsItem({
  challenges,
  dayOfMonth,
  dayOfWeek,
  level,
  steps,
  sources,
  yucoin,
  mindfulSeconds,
  mindfulYucoin,
  cycling,
  cyclingYucoin,
  cyclingMeasurement,
}: ItemProps) {
  const typeText = steps === 1 ? "step" : "steps";
  const cyclingData =
    cyclingMeasurement === DistanceMeasurementType.km ? cycling / KM_TO_METERS : cycling * METER_TO_MILES;
  const cyclingText = `${cyclingData.toFixed(1)} ${cyclingMeasurement} cycled`;
  const mindfulTotal = displaySecondsAsMinutes(mindfulSeconds);
  const mindfulTotalToDisplay =
    mindfulTotal.minutes === 1
      ? `${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful min`
      : `${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful mins`;
  return (
    <View style={styles.listItemWrapper}>
      <View style={styles.levelWrapper}>
        <View style={styles.divider} />
        {!level ? null : (
          <View style={styles.levelCircle}>
            <View style={styles.levelTextWrapper}>
              <Text bold={true} style={styles.levelTextTop}>
                LEVEL
              </Text>
              <Text bold={true} style={styles.levelTextBottom}>
                {level}
              </Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.listItemContentWrapper}>
        <View style={styles.listItemRow}>
          <View style={styles.dayWrapper}>
            <Text style={styles.dayOfMonth}>{dayOfMonth}</Text>
            <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
          </View>
          <View style={styles.activityLabelsWrapper}>
            <View style={styles.activityLabelWrapper}>
              <Text numberOfLines={1} style={styles.activityLabel}>
                {`${addCommasToNumber(steps)} ${typeText}`}
              </Text>
            </View>

            {!mindfulSeconds ? null : (
              <View style={styles.activityLabelWrapper}>
                <Text numberOfLines={1} style={styles.activityLabel}>
                  {mindfulTotalToDisplay}
                </Text>
              </View>
            )}

            {!cycling ? null : (
              <View style={styles.activityLabelWrapper}>
                <Text numberOfLines={1} style={styles.activityLabel}>
                  {cyclingText}
                </Text>
              </View>
            )}

            {renderSourcesText(sources)}
            {!challenges.length ? (
              <View style={styles.activityLabelWrapper}>
                <Text numberOfLines={1} style={styles.activityLabel}>
                  {`--`}
                </Text>
              </View>
            ) : (
              challenges.map((challenge, index) => (
                <View key={index} style={styles.activityLabelWrapper}>
                  <Text numberOfLines={1} style={styles.activityLabel}>
                    {getLabel(challenge)}
                  </Text>
                </View>
              ))
            )}
          </View>
          <View style={styles.starsColumn}>
            <View style={styles.starsWrapper} />
            {renderSourcesColumnSpacing(sources, () => (
              <View style={styles.starsWrapper} />
            ))}
            {!mindfulSeconds ? null : <View style={styles.starsWrapper} />}
            {challenges.map((challenge, key) => (
              <View style={styles.starsWrapper} key={key}>
                {!challenge.score
                  ? null
                  : Array.from({ length: 3 }).map((_, index) => (
                      <View key={index} style={styles.starWrapper}>
                        <StarInline filled={index < challenge.milestones} />
                      </View>
                    ))}
              </View>
            ))}
          </View>
          <View style={styles.yuCoinEarnedColumn}>
            {renderCoinEarnedValue(yucoin)}
            {!mindfulSeconds ? null : renderCoinEarnedValue(mindfulYucoin || "0")}
            {!cycling ? null : renderCoinEarnedValue(cyclingYucoin || "0")}
            {renderSourcesColumnSpacing(sources, () => renderCoinEarnedValue("-"))}
            {challenges.length ? null : renderCoinEarnedValue(0)}
            {challenges.map(({ earned }, index) => renderCoinEarnedValue(earned, { key: index }))}
          </View>
        </View>
        <View style={styles.bottomDividerWrapper}>
          <View style={styles.bottomDivider} />
        </View>
      </View>
    </View>
  );
}

function getLabel(challenge: IChallenge) {
  let result = `${challenge.name}`;

  if (challenge.score) {
    result += ` / ${challenge.score}`;
  }

  return result;
}

function renderCoinEarnedValue(value: string | number, props?: any) {
  return (
    <View style={styles.yuCoinEarnedWrapper} {...props}>
      <Text style={styles.yuCoinEarned}>{value}</Text>
    </View>
  );
}

function showSources(sources: Partial<Sources>) {
  if (!sources) {
    return false;
  }

  if (!sources.garmin && !sources.fitbit) {
    return false;
  }

  return true;
}

function renderSourcesText(sources: Partial<Sources>) {
  if (!showSources(sources)) {
    return null;
  }

  return (
    <>
      {!sources.device ? null : (
        <View style={styles.activityLabelWrapper}>
          <Text numberOfLines={1} style={styles.activityLabel}>
            {`phone / ${sources.device} steps`}
          </Text>
        </View>
      )}
      {!sources.fitbit ? null : (
        <View style={styles.activityLabelWrapper}>
          <Text numberOfLines={1} style={styles.activityLabel}>
            {`fitbit / ${sources.fitbit} steps`}
          </Text>
        </View>
      )}
      {!sources.garmin ? null : (
        <View style={styles.activityLabelWrapper}>
          <Text numberOfLines={1} style={styles.activityLabel}>
            {`garmin / ${sources.garmin} steps`}
          </Text>
        </View>
      )}
    </>
  );
}

function renderSourcesColumnSpacing(sources: Partial<Sources>, render: () => React.ReactNode) {
  if (!showSources(sources)) {
    return null;
  }

  return (
    <>
      {!sources.device ? null : render()}
      {!sources.fitbit ? null : render()}
      {!sources.garmin ? null : render()}
    </>
  );
}
