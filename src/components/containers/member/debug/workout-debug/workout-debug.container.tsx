import { TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, TOP_BAR } from "@styles";
import { isAndroid } from "@utils";
import {
  HealthProviderCapability,
  IActivityQueryResponse,
  activityQuery,
  hasPermission as hasYuHealthPermission,
  requestPermissions,
} from "@yu-life/react-native-yu-health";
import moment from "moment";
import { memo, useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const WorkoutDebugContainer = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [workouts, setWorkouts] = useState<IActivityQueryResponse[]>([]);

  const getWorkouts = useCallback(async () => {
    try {
      const results = await activityQuery({
        startTime: moment().subtract(24, "hour").toDate(),
        endTime: moment().toDate(),
      });

      setWorkouts(results.result);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const checkPermissions = useCallback(async () => {
    const alreadyHasPermission = await hasYuHealthPermission(HealthProviderCapability.ACTIVITIES);
    if (!alreadyHasPermission) {
      await requestPermissions([HealthProviderCapability.ACTIVITIES]);
    }

    setHasPermission(true);
    await getWorkouts();
  }, [getWorkouts]);

  const onClose = () => {
    Navigation.pop(ROUTES.workoutDebug);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {isAndroid() ? <GenericHeadingPad /> : null}
        {!hasPermission ? (
          <>
            <View style={styles.title}>
              <TextTemplate type="b1b" textAlign="center">
                Permission not checked 😭
              </TextTemplate>
            </View>
            <Button testID="check-permission-button" translatedLabel="Check permission" onPress={checkPermissions} />
          </>
        ) : null}
        {hasPermission ? (
          <>
            <View style={styles.container}>
              <View style={styles.title}>
                <TextTemplate type="b1b">Workouts found in last 12h: ({workouts.length})</TextTemplate>
              </View>
              <View style={styles.workoutContainer}>
                {workouts.map((workout: IActivityQueryResponse) => (
                  <View style={styles.workout} key={workout.startTime}>
                    <View style={styles.workoutHeader}>
                      <TextTemplate type="b2b">{workout.activity}</TextTemplate>
                    </View>
                    <TextTemplate type="l1">
                      <TextTemplate type="l1b">Start time: </TextTemplate>
                      {moment(workout.startTime).format("DD/MM/YYYY HH:mm")}
                    </TextTemplate>
                    <TextTemplate type="l1">
                      <TextTemplate type="l1b">End time: </TextTemplate>
                      {moment(workout.endTime).format("DD/MM/YYYY HH:mm")}
                    </TextTemplate>

                    {workout.distance ? (
                      <TextTemplate type="l1">
                        <TextTemplate type="l1b">Distance: </TextTemplate>
                        {workout.distance}
                      </TextTemplate>
                    ) : null}
                    {workout.calories ? (
                      <TextTemplate type="l1">
                        <TextTemplate type="l1b">Calories: </TextTemplate>
                        {workout.calories}
                      </TextTemplate>
                    ) : null}
                    <TextTemplate type="l1">
                      <TextTemplate type="l1b">User entered: </TextTemplate>
                      {workout.isUserEntered ? "Yes" : "No"}
                    </TextTemplate>
                    <TextTemplate type="l1">
                      <TextTemplate type="l1b">Bundle identifier: </TextTemplate>
                      {workout.bundleIdentifier}
                    </TextTemplate>
                  </View>
                ))}
              </View>
              <View style={styles.buttonContainer}>
                <Button testID="refresh-workouts-button" translatedLabel="Refresh workouts" onPress={getWorkouts} />
              </View>
            </View>
          </>
        ) : null}
      </ScrollView>
      <GenericHeadingAbsolute heading="Workouts" onLeftIconPress={onClose} />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: Colours.neutral.n50,
    paddingTop: TOP_BAR.PADDING_TOP + 20,
  },
  container: {
    padding: 10,
    paddingTop: 0,
  },
  title: {
    marginStart: 5,

    marginBottom: 15,
  },
  workoutContainer: {
    marginBottom: 10,
  },
  workout: {
    padding: 20,
    borderRadius: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: Colours.metallic.m200,
    backgroundColor: Colours.neutral.white,
  },
  buttonContainer: {
    marginBottom: 50,
  },
  workoutHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
});

export default memo(WorkoutDebugContainer);
