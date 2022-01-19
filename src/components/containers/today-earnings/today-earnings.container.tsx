import { Platform } from "react-native";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { TodayEarningLoadingScreen, TodayEarningsScreen } from "@components/screens";
import { GQL_QUERY_GET_TODAY_EARNINGS } from "@graphql/todayEarnings";
import { GetTodayEarnings, UpsertPassiveChallenge, UpsertPassiveChallengeVariables } from "@graphql/_core/schema";
import RNFitKit from "@yu-life/react-native-fitkit";
import React, { useCallback, useEffect, useState } from "react";
import { Navigation } from "react-native-navigation";
import { FitKitType, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { useSelector } from "react-redux";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import moment from "moment";
import { GQL_MUTATION_UPSERT_PASSIVE_CHALLENGE } from "@graphql/challenges";
import { getUserFeatures } from "@redux/user/user.selectors";
import { requestAndroidSystemPermission } from "@services/fitkit/fitkit.system-permissions";

interface IProps {
  componentId: string;
}

const TodayEarningsContainer = ({ componentId }: IProps) => {
  const [permissionIsLoading, setPermissionIsLoading] = useState(true);
  const [isGoogleFitAuthorised, setIsGoogleFitAuthorised] = useState(false);
  const { authoriseFitKitTypes } = useFitKit();
  const dailySteps = useSelector(getDailySteps);
  const features = useSelector(getUserFeatures);
  const [upsertPassiveChallenge] = useMutation<UpsertPassiveChallenge, UpsertPassiveChallengeVariables>(
    GQL_MUTATION_UPSERT_PASSIVE_CHALLENGE
  );
  const [getTodaysEarnings, { data, loading }] = useLazyQuery<GetTodayEarnings>(GQL_QUERY_GET_TODAY_EARNINGS, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    (async () => {
      await upsertPassiveChallenge({
        variables: {
          payload: [
            {
              value: dailySteps,
              endDateTime: moment().format(),
              startDateTime: moment().startOf("day").format(),
            },
          ],
          type: PassiveChallengeType.STEPS,
        },
      });
      await getTodaysEarnings();
      const googleFit = await RNFitKit.isAuthorised({
        read: [],
        platform: "GoogleFit",
      });

      if (features.passiveCyclingEnabled && (googleFit || Platform.OS === "ios")) {
        Platform.OS === "ios"
          ? await authoriseFitKitTypes([FitKitType.Cycling])
          : await requestAndroidSystemPermission("android.permission.ACCESS_FINE_LOCATION", () =>
              authoriseFitKitTypes([FitKitType.Cycling])
            );
      }

      setIsGoogleFitAuthorised(googleFit);
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
