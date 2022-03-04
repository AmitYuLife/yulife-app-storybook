import { Platform } from "react-native";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { TodayEarningLoadingScreen, TodayEarningsScreen } from "@components/screens";
import { GQL_QUERY_GET_TODAY_EARNINGS } from "@graphql/todayEarnings";
import {
  GetTodayEarnings,
  UpsertPassiveChallenges,
  UpsertPassiveChallengesVariables,
  UpsertDailyPassives,
  UpsertDailyPassivesVariables,
} from "@graphql/_core/schema";
import RNFitKit from "@yu-life/react-native-fitkit";
import React, { useCallback, useEffect, useState } from "react";
import { Navigation } from "react-native-navigation";
import { FitKitType, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { useSelector } from "react-redux";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import moment from "moment";
import { getUserFeatures } from "@redux/user/user.selectors";
import { GQL_MUTATION_UPSERT_PASSIVE_CHALLENGES } from "@graphql/challenges/upsertPassiveChallenges.gql";
import { GQL_MUTATION_UPSERT_DAILY_PASSIVES } from "@graphql/challenges/upsertDailyPassives.gql";
import AsyncStorage from "@react-native-community/async-storage";

interface IProps {
  componentId: string;
}

const RN_FIT_KIT_IOS_CYCLING_PERMISSIONS_SHOWN = "@RNFitKit:iosCyclingPermissionShown";

const TodayEarningsContainer = ({ componentId }: IProps) => {
  const [permissionIsLoading, setPermissionIsLoading] = useState(true);
  const [isGoogleFitAuthorised, setIsGoogleFitAuthorised] = useState(false);
  const { authoriseFitKitTypes } = useFitKit();
  const dailySteps = useSelector(getDailySteps);
  const features = useSelector(getUserFeatures);
  const [upsertPassiveChallenges] = useMutation<UpsertPassiveChallenges, UpsertPassiveChallengesVariables>(
    GQL_MUTATION_UPSERT_PASSIVE_CHALLENGES
  );
  const [upsertDailyPassives] = useMutation<UpsertDailyPassives, UpsertDailyPassivesVariables>(
    GQL_MUTATION_UPSERT_DAILY_PASSIVES
  );
  const [getTodaysEarnings, { data, loading }] = useLazyQuery<GetTodayEarnings>(GQL_QUERY_GET_TODAY_EARNINGS, {
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

    if (features.passiveCyclingEnabled && Platform.OS === "ios") {
      const iosCyclingPermissionShown = await AsyncStorage.getItem(RN_FIT_KIT_IOS_CYCLING_PERMISSIONS_SHOWN);
      if (!iosCyclingPermissionShown) {
        await authoriseFitKitTypes([FitKitType.Cycling], "AppleHealth", false);
        AsyncStorage.setItem(RN_FIT_KIT_IOS_CYCLING_PERMISSIONS_SHOWN, "true");
      }
    }

    return googleFitAuthorised;
  }, [authoriseFitKitTypes, features.passiveCyclingEnabled]);

  const fetchData = useCallback(async () => {
    const mutation = features.useCoreChallengesService ? upsertDailyPassives : upsertPassiveChallenges;
    await mutation({
      variables: {
        payload: [
          {
            value: dailySteps,
            endDateTime: moment().format(),
            startDateTime: moment().startOf("day").format(),
            type: PassiveChallengeType.STEPS,
          },
        ],
      },
    });
    await getTodaysEarnings();
  }, [
    dailySteps,
    features.usePassiveChallengesService,
    getTodaysEarnings,
    upsertDailyPassives,
    upsertPassiveChallenges,
  ]);

  useEffect(() => {
    (async () => {
      const [googleFitAuthorised] = await Promise.all([checkPermissions(), fetchData()]);
      setIsGoogleFitAuthorised(googleFitAuthorised);
      setPermissionIsLoading(false);
    })();
  }, []);

  const onLeftIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  if (loading || permissionIsLoading) {
    return <TodayEarningLoadingScreen handleClose={onLeftIconPress} />;
  }

  return (
    <TodayEarningsScreen
      isGoogleFitAuthorised={isGoogleFitAuthorised}
      onLeftIconPress={onLeftIconPress}
      {...data?.getTodayEarnings}
    />
  );
};

export default TodayEarningsContainer;
