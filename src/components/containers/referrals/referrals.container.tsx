import React, { useCallback, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { ReferralsScreen } from "@components/screens";
import { GQL_QUERY_GET_REFERRAL_INFORMATION } from "@graphql/referrals";
import { Navigation } from "@navigation/main";
import { GetReferralInformation as Req, GetReferralInformationVariables as ReqVars } from "@graphql/_core/schema";
import { LazyGqlLoadingArgs, useLazyGqlLoading } from "@hooks";
import ReferralsLoadingScreen from "@components/screens/referrals/referrals-loading.screen";
import Logger from "@services/logging/logger";
import { Share } from "react-native";

interface IProps {
  componentId: string;
  sourceId?: string;
}

const LIMIT = 20;

const LAZY_LOADING_ARGS: LazyGqlLoadingArgs<Req["referralInformation"]["referralHistory"][0] | string, Req, ReqVars> = {
  gql: GQL_QUERY_GET_REFERRAL_INFORMATION,
  buildVariables: (page) => ({ offset: Math.floor(page * LIMIT), limit: LIMIT }),
  buildFullData: (req, prevData) => [...prevData, ...(req.referralInformation.referralHistory || [])],
  checkIfReachedEnd: (req) => req.referralInformation.referralHistory.length === 0,
};

const ReferralsContainer = ({ componentId, sourceId }: IProps) => {
  const { fullData, data, loading, handleRefresh, handleEndReached } = useLazyGqlLoading(LAZY_LOADING_ARGS);

  const dispatch = useDispatch();

  const info = data?.referralInformation;

  useEffect(() => {
    dispatch(logMixpanelEventActionCreator("referrals_viewed", { fromScreen: sourceId }));
  }, []);

  const onShare = useCallback(async () => {
    Logger.logMixpanelEvent("referral_link_shared");
    try {
      await Share.share({
        message: `${info?.shareMessage.replace(/\.$/, "")}: ${info?.referralLink}`,
      });
    } catch (e) {
      Logger.error(e, { file: componentId });
    }
  }, [componentId, info?.referralLink, info?.shareMessage]);

  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  if (loading && !fullData?.length) {
    return <ReferralsLoadingScreen handleClose={handleClose} />;
  }

  return (
    <ReferralsScreen
      data={fullData}
      onShare={onShare}
      componentId={componentId}
      info={info}
      handleClose={handleClose}
      loading={loading}
      onFetchMoreData={handleEndReached}
      onRefresh={handleRefresh}
    />
  );
};

export default memo(ReferralsContainer);
