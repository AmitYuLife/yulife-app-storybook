import React, { memo, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { TextTemplate } from "@atoms";
import { t } from "@locale";

interface IBattlePassItemSubtitleContainer {
  milestoneId: string;
}

const BattlePassItemSubtitleContainer = ({ milestoneId }: IBattlePassItemSubtitleContainer) => {
  const { data: explanation, loading } = useQuery(gql(`GetMobileGameBattlePassRewardInfoDocument`), {
    variables: { milestoneId },
    fetchPolicy: "cache-only", // Cache only, details container will query this for us
  });

  const subtitle = useMemo(() => {
    if (explanation?.rewardInfo?.possibleItems?.length) {
      return t("modals.reward_info.unlock_voucher");
    }

    return t("modals.reward_info.unlock_reward");
  }, [explanation?.rewardInfo?.possibleItems]);

  if (loading) {
    return null;
  }

  return (
    <TextTemplate type="b2" textAlign="center">
      {subtitle}
    </TextTemplate>
  );
};

export default memo(BattlePassItemSubtitleContainer);
