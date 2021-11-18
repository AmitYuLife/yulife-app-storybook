import { useQuery } from "@apollo/react-hooks";
import { TodayEarningLoadingScreen, TodayEarningsScreen } from "@components/screens";
import { GQL_QUERY_GET_TODAY_EARNINGS } from "@graphql/todayEarnings";
import { GetTodayEarnings } from "@graphql/_core/schema";
import RNFitKit from "@yu-life/react-native-fitkit";
import React, { useCallback, useEffect, useState } from "react";
import { Navigation } from "react-native-navigation";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { useFitKit } from "@services/fitkit/fitkit.hooks";

interface IProps {
  componentId: string;
}

const TodayEarningsContainer = ({ componentId }: IProps) => {
  const [permissionIsLoading, setPermissionIsLoading] = useState(true);
  const [isGoogleFitAuthorised, setIsGoogleFitAuthorised] = useState(false);
  const { authoriseFitKitTypes } = useFitKit();
  const { data, loading } = useQuery<GetTodayEarnings>(GQL_QUERY_GET_TODAY_EARNINGS, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    (async () => {
      const googleFit = await RNFitKit.isAuthorised({
        read: [],
        platform: "GoogleFit",
      });
      await authoriseFitKitTypes([FitKitType.Cycling]);
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
