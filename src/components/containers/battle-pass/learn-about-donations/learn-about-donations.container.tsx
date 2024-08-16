import React, { memo, useMemo } from "react";
import { LearnAboutDonationsScreen } from "@components/screens";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";
import { GenericFullScreenLoading } from "@organisms";

interface IProps {
  leaderboardId: string;
  templateId: string;
}

const LearnAboutDonationsContainer = ({ leaderboardId, templateId }: IProps) => {
  const currentUserId = useSelector(getCurrentUserId);

  const { data, loading } = useQuery(gql("GetMobileBattlePassDonationProgressDetailsDocument"), {
    variables: {
      leaderboardId,
      templateId,
    },
    fetchPolicy: "network-only",
  });
  const currentUserInfo = useMemo(
    () => data?.leadeboard?.find((item) => item.userId === currentUserId),
    [currentUserId, data?.leadeboard]
  );

  if (loading || !data?.details) {
    return <GenericFullScreenLoading onLeftIconPress={onBack} />;
  }

  return (
    <LearnAboutDonationsScreen leaderboard={data.leadeboard} details={data.details} currentUserInfo={currentUserInfo} />
  );
};

const onBack = () => Navigation.pop(ROUTES.rewards);

export default memo(LearnAboutDonationsContainer);
