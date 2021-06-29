import { useQuery } from "@apollo/react-hooks";
import { ReferralsScreen } from "@components/screens";
import { GQL_QUERY_GET_REFERRAL_INFORMATION } from "@graphql/referrals";
import { GetReferralInformation } from "@graphql/_core/schema/GetReferralInformation";
import React, { useCallback } from "react";
import { Navigation } from "react-native-navigation";

interface IProps {
  componentId: string;
}

const ReferralsContainer = ({ componentId }: IProps) => {
  const { data, loading } = useQuery<GetReferralInformation>(GQL_QUERY_GET_REFERRAL_INFORMATION, {
    fetchPolicy: "cache-and-network",
  });

  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  return <ReferralsScreen loading={loading} info={data?.referralInformation} handleClose={handleClose} />;
};

export default ReferralsContainer;
