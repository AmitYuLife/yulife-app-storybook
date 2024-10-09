import { useLazyQuery } from "@apollo/client";
import { BattlePassLeaderboardScreen } from "@components/screens";
import { gql } from "@graphql/__generated";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericFullScreenLoading } from "@organisms";
import { getCurrentUserId } from "@redux/user/user.selectors";
import React, { memo, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

interface IProps {
  leaderboardId: string;
  templateId: string;
  updating: boolean;
}

const BattlePassLeaderboardContainer = ({ leaderboardId, templateId, updating }: IProps) => {
  const currentUserId = useSelector(getCurrentUserId);

  const [getDetails, { data, loading }] = useLazyQuery(gql("GetMobileBattlePassDonationProgressDetailsDocument"), {
    variables: {
      leaderboardId,
      templateId,
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    const timer = setTimeout(
      () => {
        getDetails();
      },
      updating ? 1000 : 0
    );

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const currentUserInfo = useMemo(
    () => data?.leadeboard?.find((item) => item.userId === currentUserId),
    [currentUserId, data?.leadeboard]
  );

  if (loading || !data?.details) {
    return <GenericFullScreenLoading onLeftIconPress={onBack} />;
  }

  return (
    <BattlePassLeaderboardScreen
      leaderboard={data.leadeboard}
      details={data.details}
      currentUserInfo={currentUserInfo}
    />
  );
};

const onBack = () => Navigation.pop(ROUTES.rewards);

export default memo(BattlePassLeaderboardContainer);
