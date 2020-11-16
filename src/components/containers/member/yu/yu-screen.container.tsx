import React, { memo } from "react";
import { YuScreen } from "./yu-screen";
import { YuScreenLayout } from "./yu-screen-layout";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { YuScreenLoading } from "./yu-screen-loading";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import { getShowYuscreenIntro } from "@redux/onboarding/onboarding.selectors";
import { YuScreenIntro } from "./yu-screen-intro/yu-screen-intro";

const _YuScreenContainer = () => {
  /*
   * useCacheFirstAndNetworkOnAppearQuery shows an undesirable flicker
   * of the cached state before transitioning to loading
   */
  const { data, loading } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "network-only",
  });

  const showIntro = useSelector(getShowYuscreenIntro);

  if (showIntro) {
    return <YuScreenIntro />;
  }

  if (loading || !data) {
    return (
      <YuScreenLayout>
        <YuScreenLoading />
      </YuScreenLayout>
    );
  }

  return (
    <YuScreenLayout>
      <YuScreen />
    </YuScreenLayout>
  );
};

const YuScreenContainer = memo(_YuScreenContainer);

export default YuScreenContainer;
