import { useCallback, useEffect, memo, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { ReferralsScreen } from "@components/screens";
import {
  gql,
  GetReferralHistoryQuery as ReqHistory,
  GetReferralHistoryQueryVariables as ReqHistoryVars,
} from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { LazyGqlLoadingArgs, useLazyGqlLoading } from "@hooks";
import ReferralsLoadingScreen from "@components/screens/referrals/referrals-loading.screen";
import Logger from "@services/logging/logger";
import { Share } from "react-native";
import { useLazyQuery } from "@apollo/client";
import { BusinessAccount } from "@components/molecules/business-picker";

interface IProps {
  componentId: string;
  sourceId?: string;
}

const LIMIT = 20;

const DEFAULT_REFERRAL_INFORMATION_VARS = {
  limit: LIMIT,
  offset: 0,
};

const ReferralsContainer = ({ componentId, sourceId }: IProps) => {
  const [activeBusinessAccounts, setActiveBusinessAccounts] = useState<BusinessAccount[]>([]);
  const [selectedBusinessAccount, setSelectedBusinessAccount] = useState<BusinessAccount | undefined>(undefined);

  const LAZY_LOAD_ARGS: LazyGqlLoadingArgs<
    ReqHistory["getReferralHistory"]["referralHistory"][0],
    ReqHistory,
    ReqHistoryVars
  > = useMemo(
    () => ({
      gql: gql("GetReferralHistoryDocument"),
      buildVariables: (page: number) => ({
        limit: LIMIT,
        offset: page * LIMIT,
        businessAccountId: selectedBusinessAccount?.businessAccountId,
      }),
      buildFullData: (newData, prevData) => {
        return [...prevData, ...newData.getReferralHistory.referralHistory];
      },
      checkIfReachedEnd: (req) => req?.getReferralHistory?.referralHistory?.length === 0,
      isLazy: true,
    }),
    [selectedBusinessAccount?.businessAccountId]
  );

  const { handleRefresh, fullData, loading, handleEndReached } = useLazyGqlLoading(LAZY_LOAD_ARGS);
  const [getReferralInformation, { data, loading: loadingData }] = useLazyQuery(gql("GetReferralInformationDocument"), {
    fetchPolicy: "cache-and-network",
  });

  const handleRefreshScreen = useCallback(() => {
    getReferralInformation({
      variables: {
        ...DEFAULT_REFERRAL_INFORMATION_VARS,
        hasSelectedBusinessAccount: !!selectedBusinessAccount?.businessAccountId,
        businessAccountId: selectedBusinessAccount?.businessAccountId,
      },
    }).finally(() => {
      if (selectedBusinessAccount?.businessAccountId) {
        handleRefresh();
      }
    });
  }, [handleRefresh, getReferralInformation, selectedBusinessAccount?.businessAccountId]);

  useEffect(() => {
    handleRefreshScreen();
  }, [handleRefreshScreen, selectedBusinessAccount?.businessAccountId]);

  useEffect(() => {
    const activeEmployments = data?.activeEmployments || [];

    setActiveBusinessAccounts(activeEmployments);
    if (!selectedBusinessAccount && activeEmployments.length > 0) {
      setSelectedBusinessAccount(activeEmployments[0]);
    }
  }, [data?.activeEmployments, selectedBusinessAccount]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logMixpanelEventActionCreator("referrals_viewed", { fromScreen: sourceId }));
  }, [dispatch, sourceId]);

  const onShare = useCallback(async () => {
    Logger.logMixpanelEvent("referral_link_shared");
    try {
      await Share.share({
        message: data?.referralInformation?.shareReferralCodeMessage,
      });
    } catch (e) {
      Logger.error(e, { file: componentId });
    }
  }, [componentId, data?.referralInformation?.shareReferralCodeMessage]);

  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  if (!data?.referralInformation && loadingData && loading) {
    return <ReferralsLoadingScreen handleClose={handleClose} />;
  }

  return (
    <ReferralsScreen
      data={fullData}
      onShare={onShare}
      componentId={componentId}
      info={data?.referralInformation}
      handleClose={handleClose}
      loading={loading}
      onFetchMoreData={handleEndReached}
      onRefresh={handleRefreshScreen}
      businessAccountState={{ activeBusinessAccounts, selectedBusinessAccount, setSelectedBusinessAccount }}
    />
  );
};

export default memo(ReferralsContainer);
