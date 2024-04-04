import { Platform } from "react-native";
import { useLazyQuery, useMutation } from "@apollo/client";
import { TodayEarningsScreen, TodayEarningLoadingScreen } from "@components/screens";
import RNFitKit from "@yu-life/react-native-fitkit";
import React, { useCallback, useEffect, useState } from "react";
import { Navigation } from "@navigation/main";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { useDispatch, useSelector } from "react-redux";
import { getLocalSteps } from "@redux/daily-steps/daily-steps.selectors";
import moment from "moment";
import { useBackHandler } from "@hooks";
import { getLastUpdated } from "@redux/pedometer/pedometer.selectors";
import { DATE_FORMAT, getCurrentWorld, getCurrentYuniverse } from "@utils";
import { restartPedometerOnNewDay } from "@redux/pedometer/pedometer.actions";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { Storage, StorageKey } from "@utils/storage";
import { FitKitType, PassiveChallengeType, gql } from "@graphql/__generated";

interface IProps {
  componentId: string;

  /** If set to "pop", will use Navigation.pop instead of Navigation.popToRoot */
  closeNavigationOption?: string;
}

const TodayEarningsContainer = ({ componentId, closeNavigationOption }: IProps) => {
  const [permissionIsLoading, setPermissionIsLoading] = useState(true);
  const [isGoogleFitAuthorised, setIsGoogleFitAuthorised] = useState(false);
  const { authoriseFitKitTypes } = useFitKit();
  const localSteps = useSelector(getLocalSteps);
  const pedometerLastUpdate = useSelector(getLastUpdated);
  const currentLevel = useSelector(getCurrentLevel);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);

  const dispatch = useDispatch();
  const [upsertDailyPassives] = useMutation(gql("UpsertDailyPassivesDocument"));
  const [getTodaysEarnings, { data, loading }] = useLazyQuery(gql("GetTodayEarningsDocument"), {
    fetchPolicy: "cache-and-network",
  });

  const checkPermissions = useCallback(async (): Promise<boolean> => {
    let googleFitAuthorised = false;
    if (Platform.OS === "android") {
      googleFitAuthorised = await RNFitKit.isAuthorised({
        read: [],
        platform: "GoogleFit",
      });
    }

    if (Platform.OS === "ios") {
      const iosCyclingPermissionShown = await Storage.getItem(StorageKey.iosCyclingPermissionShown);
      if (!iosCyclingPermissionShown) {
        await authoriseFitKitTypes([FitKitType.Cycling], "AppleHealth", false);
        Storage.setItem(StorageKey.iosCyclingPermissionShown, "true");
      }
    }

    return googleFitAuthorised;
  }, [authoriseFitKitTypes]);

  const fetchData = useCallback(async () => {
    const today = moment().format(DATE_FORMAT);
    const lastUpdate = moment(pedometerLastUpdate).format(DATE_FORMAT);

    if (lastUpdate !== today) {
      dispatch(restartPedometerOnNewDay());
    }

    await upsertDailyPassives({
      variables: {
        payload: [
          {
            value: lastUpdate !== today ? 0 : localSteps,
            endDateTime: moment().format(),
            startDateTime: moment().startOf("day").format(),
            type: PassiveChallengeType.Steps,
          },
        ],
      },
    });
    await getTodaysEarnings();
  }, [localSteps, getTodaysEarnings, upsertDailyPassives, pedometerLastUpdate, dispatch]);

  useEffect(() => {
    (async () => {
      const [googleFitAuthorised] = await Promise.all([checkPermissions(), fetchData()]);
      setIsGoogleFitAuthorised(googleFitAuthorised);
      setPermissionIsLoading(false);
    })();
  }, []);

  const onLeftIconPress = useCallback(() => {
    if (closeNavigationOption === "pop") {
      Navigation.pop(componentId);
    } else {
      Navigation.popToRoot(componentId);
    }
  }, [componentId]);

  useBackHandler(() => {
    onLeftIconPress();
    return true;
  });

  if (loading || permissionIsLoading || !data?.getTodayEarnings) {
    return <TodayEarningLoadingScreen handleClose={onLeftIconPress} />;
  }

  return (
    <TodayEarningsScreen
      isGoogleFitAuthorised={isGoogleFitAuthorised}
      onLeftIconPress={onLeftIconPress}
      currentYuniverse={currentYuniverse}
      currentWorld={currentWorld}
      {...data?.getTodayEarnings}
    />
  );
};

export default TodayEarningsContainer;
