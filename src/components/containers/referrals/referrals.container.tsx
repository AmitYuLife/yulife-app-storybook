import React, { useCallback, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useQuery } from "@apollo/react-hooks";
import { ReferralsScreen, ReferralsLoadingScreen } from "@components/screens";
import { GQL_QUERY_GET_REFERRAL_INFORMATION } from "@graphql/referrals";
import { GetReferralInformation } from "@graphql/_core/schema/GetReferralInformation";
import { Navigation } from "react-native-navigation";

interface IProps {
  componentId: string;
  sourceId?: string;
}

const ReferralsContainer = ({ componentId, sourceId }: IProps) => {
  const { data, loading } = useQuery<GetReferralInformation>(GQL_QUERY_GET_REFERRAL_INFORMATION, {
    fetchPolicy: "cache-and-network",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logMixpanelEventActionCreator("referrals_viewed", { fromScreen: sourceId }));
  }, []);

  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  if (loading || !data?.referralInformation) {
    return <ReferralsLoadingScreen handleClose={handleClose} />;
  }

  return <ReferralsScreen componentId={componentId} info={data?.referralInformation} handleClose={handleClose} />;
};

export default memo(ReferralsContainer);
