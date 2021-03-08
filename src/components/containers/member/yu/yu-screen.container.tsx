import React, { memo } from "react";
import { YuScreen as YuScreenLegacy } from "./yu-screen-legacy";
import { YuScreen } from "./yu-screen";
import { YuScreenLayout } from "./yu-screen-layout";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { YuScreenLoading } from "./yu-screen-loading";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import { getShowYuscreenIntro } from "@redux/onboarding/onboarding.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { YuScreenIntro } from "./yu-screen-intro/yu-screen-intro";
import { useTapBackTwiceToExit } from "@services/hooks/useTapBackTwiceToExit";
import { IMainTabsProps } from "@navigation/root";

type ConnectedState = IMainTabsProps;

const _YuScreenContainer = (props: ConnectedState) => {
  /*
   * useCacheFirstAndNetworkOnAppearQuery shows an undesirable flicker
   * of the cached state before transitioning to loading
   */
  const { data, loading } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, { fetchPolicy: "network-only" });

  useTapBackTwiceToExit(props.componentId);

  const showIntro = useSelector(getShowYuscreenIntro);
  const showNewYuScreen = useSelector(getUserFeatures).showNewYuScreen;

  if (showIntro) {
    return <YuScreenIntro />;
  }

  return (
    <YuScreenLayout>
      {loading || !data ? <YuScreenLoading /> : showNewYuScreen ? <YuScreen /> : <YuScreenLegacy />}
    </YuScreenLayout>
  );
};

const YuScreenContainer = memo(_YuScreenContainer);

export default YuScreenContainer;
