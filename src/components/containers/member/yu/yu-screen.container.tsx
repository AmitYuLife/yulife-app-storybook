import React, { memo, useEffect } from "react";
import { YuScreen } from "./yu-screen";
import { YuScreenLayout } from "./yu-screen-layout";
import { GetTopUpsQuote, GetTopUpsQuoteVariables, GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { YuScreenLoading } from "./yu-screen-loading";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";
import { getShowYuscreenIntro } from "@redux/onboarding/onboarding.selectors";
import { YuScreenIntro } from "./yu-screen-intro/yu-screen-intro";
import { GQL_QUERY_GET_TOP_UPS_QUOTE } from "../../../../graphql/products";
import { refreshFIBStore } from "../../../../redux/product/product.actions";
import { ProductCode } from "../../../../graphql/_core/schema/globalTypes";
import { getFIBState } from "../../../../redux/product/product.selectors";
import { useTapBackTwiceToExit } from "@services/hooks/useTapBackTwiceToExit";
import { IMainTabsProps } from "@navigation/root";

type ConnectedState = IMainTabsProps;

const _YuScreenContainer = (props: ConnectedState) => {
  /*
   * useCacheFirstAndNetworkOnAppearQuery shows an undesirable flicker
   * of the cached state before transitioning to loading
   */
  const { data, loading } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "network-only",
  });

  useTapBackTwiceToExit(props.componentId);

  const productEntityId = useSelector(getFIBState).productEntityId;
  const latestQuoteId = useSelector(getFIBState).latestQuoteId;

  const { data: topUpsData, loading: topUpsLoading } = useQuery<GetTopUpsQuote, GetTopUpsQuoteVariables>(
    GQL_QUERY_GET_TOP_UPS_QUOTE,
    {
      variables: {
        product: ProductCode.YULFIB,
        input: {
          customerProductEntityId: productEntityId,
          quoteId: latestQuoteId,
        },
      },
      skip: !latestQuoteId,
    }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (topUpsData?.getTopUpsQuote?.quoteId) {
      dispatch(refreshFIBStore(topUpsData.getTopUpsQuote));
    }
  }, [dispatch, topUpsData]);

  const showIntro = useSelector(getShowYuscreenIntro);

  if (showIntro) {
    return <YuScreenIntro />;
  }

  if (loading || topUpsLoading || !data) {
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
