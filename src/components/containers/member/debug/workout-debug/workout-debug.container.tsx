import { TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { Colours, TOP_BAR } from "@styles";
import { isAndroid } from "@utils";
import RNFitKit, { FitKitTypes, SampleQueryResult } from "@yu-life/react-native-fitkit";
import moment from "moment";
import { memo, useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const WorkoutDebugContainer = () => {
  const { authoriseFitKitTypes } = useFitKit();

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [workouts, setWorkouts] = useState<SampleQueryResult[]>([]);

  const getWorkouts = useCallback(async () => {
    try {
      const workoutResults = await RNFitKit.sampleQuery({
        disableUserEntries: false,
        endTime: moment().format(),
        startTime: moment().subtract(24, "hour").format(),
        type: FitKitTypes.Types.Workout,
      });

      setWorkouts(workoutResults);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const checkAndroidPermission = useCallback(async () => {
    const workoutAuthorised = await RNFitKit.isAuthorised({
      read: [FitKitTypes.Types.Workout],
      platform: "GoogleFit",
    });

    if (workoutAuthorised) {
      setHasPermission(true);
    }

    await getWorkouts();
  }, [getWorkouts]);

  const checkIosPermission = useCallback(async () => {
    await authoriseFitKitTypes([FitKitType.Workout], "AppleHealth", false);

    setHasPermission(true);
    await getWorkouts();
  }, [authoriseFitKitTypes, getWorkouts]);

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
            <Button label="Check permission" onPress={isAndroid() ? checkAndroidPermission : checkIosPermission} />
          </>
        ) : null}
        {hasPermission ? (
          <>
            <View style={styles.container}>
              <View style={styles.title}>
                <TextTemplate type="b1b">Workouts found in last 12h: ({workouts.length})</TextTemplate>
              </View>
              <View style={styles.workoutContainer}>
                {workouts.map((workout: SampleQueryResult) => (
                  <View style={styles.workout} key={workout.startTime}>
                    <View style={styles.workoutHeader}>
                      <TextTemplate type="b2b">{workout.workoutName}</TextTemplate>
                      <TextTemplate type="l1">ID: {workout.workoutId}</TextTemplate>
                    </View>
                    <TextTemplate type="l1">
                      <TextTemplate type="l1b">Start time: </TextTemplate>
                      {moment(workout.startTime).format("DD/MM/YYYY HH:mm")}
                    </TextTemplate>
                    <TextTemplate type="l1">
                      <TextTemplate type="l1b">End time: </TextTemplate>
                      {moment(workout.startTime).format("DD/MM/YYYY HH:mm")}
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
                      {workout.userEntered ? "Yes" : "No"}
                    </TextTemplate>
                    <TextTemplate type="l1">
                      <TextTemplate type="l1b">Bundle identifier: </TextTemplate>
                      {workout.source.bundleIdentifier}
                    </TextTemplate>
                  </View>
                ))}
              </View>
              <View style={styles.buttonContainer}>
                <Button label="Refresh workouts" onPress={getWorkouts} />
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
    marginLeft: 5,

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
