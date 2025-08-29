import { TextTemplate } from "@atoms";
import { useUserFeatures } from "@hooks";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import moment from "moment";
import { PassiveChallengeType } from "@graphql/__generated";
import { IFetchActivityResponse, fetchFitkitActivityData } from "@services/fitkit/fitkit.helpers";
import { fetchYuHealthActivityData } from "@services/fitkit/yu-health.helpers";

import { StyleSheet } from "@styles";
const DATA_DIFFERENCE_COLOR = "rgba(255,0,0,.2)";
const DATA_SAME_COLOR = "rgba(0,255,0,.2)";

const YuHealthActivity = () => {
  const [activity, setActivity] = useState<IFetchActivityResponse>(null);
  const [fitkitActivity, setFitkitActivity] = useState<IFetchActivityResponse>(null);
  const features = useUserFeatures();

  const getActivity = useCallback(async () => {
    const startTime = moment().subtract(30, "day").startOf("day");
    const data = await fetchYuHealthActivityData({
      start: startTime,
      end: moment(),
      features,
      stepsBlackListApps: [],
    });

    const fitkitData = await fetchFitkitActivityData({
      start: startTime,
      end: moment(),
      features,
      stepsBlackListApps: [],
    });

    setActivity(data);
    setFitkitActivity(fitkitData);
  }, [features]);

  useEffect(() => {
    getActivity();
  }, [getActivity]);

  const data = useMemo(() => {
    if (!activity || !fitkitActivity) {
      return [];
    }

    const days = Array.from({ length: 30 }, (_, i) => i);
    return days.map((day) => {
      const startTime = moment().subtract(day, "day").startOf("day");
      const endTime = moment().subtract(day, "day").endOf("day");
      const activities = [...activity.stepsResults, ...activity.meditationResults, ...activity.cyclingResults].filter(
        (item) =>
          moment(item.startDateTime).isSameOrAfter(startTime) && moment(item.startDateTime).isSameOrBefore(endTime)
      );

      const fitkitActivities = [
        ...fitkitActivity.stepsResults,
        ...fitkitActivity.meditationResults,
        ...fitkitActivity.cyclingResults,
      ].filter(
        (item) =>
          moment(item.startDateTime).isSameOrAfter(startTime) && moment(item.startDateTime).isSameOrBefore(endTime)
      );

      return {
        date: startTime.format("DD/MM/YYYY"),
        steps: activities.find((item) => item.type === PassiveChallengeType.Steps)?.value ?? 0,
        meditation: activities.find((item) => item.type === PassiveChallengeType.Meditation)?.value ?? 0,
        cycling: activities.find((item) => item.type === PassiveChallengeType.Cycling)?.value ?? 0,

        fitkitSteps: fitkitActivities.find((item) => item.type === PassiveChallengeType.Steps)?.value ?? 0,
        fitkitMeditation: fitkitActivities.find((item) => item.type === PassiveChallengeType.Meditation)?.value ?? 0,
        fitkitCycling: fitkitActivities.find((item) => item.type === PassiveChallengeType.Cycling)?.value ?? 0,
      };
    });
  }, [activity, fitkitActivity]);

  return (
    <>
      <View style={styles.container}>
        {data.map((item) => {
          const stepsSame = item.steps === item.fitkitSteps;
          const cyclingSame = item.cycling === item.fitkitCycling;
          const meditationSame = item.meditation === item.fitkitMeditation;

          return (
            <View style={styles.item} key={item.date}>
              <TextTemplate type="b2b">{item.date}</TextTemplate>
              <View>
                <View
                  style={[
                    styles.splitContainer,
                    { backgroundColor: stepsSame ? DATA_SAME_COLOR : DATA_DIFFERENCE_COLOR },
                  ]}
                >
                  <TextTemplate type="l1b">YuHealth steps: {item.steps}</TextTemplate>
                  <TextTemplate type="l1b">Fitkit steps: {item.fitkitSteps}</TextTemplate>
                </View>
                <View
                  style={[
                    styles.splitContainer,
                    { backgroundColor: cyclingSame ? DATA_SAME_COLOR : DATA_DIFFERENCE_COLOR },
                  ]}
                >
                  <TextTemplate type="l1b">YuHealth cycling: {item.cycling}</TextTemplate>
                  <TextTemplate type="l1b">Fitkit cycling: {item.fitkitCycling}</TextTemplate>
                </View>
                <View
                  style={[
                    styles.splitContainer,
                    { backgroundColor: meditationSame ? DATA_SAME_COLOR : DATA_DIFFERENCE_COLOR },
                  ]}
                >
                  <TextTemplate type="l1b">Meditation: {item.meditation}</TextTemplate>
                  <TextTemplate type="l1b">Fitkit meditation: {item.fitkitMeditation}</TextTemplate>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  item: {
    marginBottom: 15,
  },
  splitContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default memo(YuHealthActivity);
