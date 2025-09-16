import React, { memo } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { Box, TextTemplate } from "@atoms";
import { ITEM_DETAILS_SUBTITLE } from "@ids";

interface IBattlePassItemSubtitleContainer {
  milestoneId: string;
}

const BattlePassItemSubtitleContainer = ({ milestoneId }: IBattlePassItemSubtitleContainer) => {
  const { data: explanation, loading } = useQuery(gql(`GetMobileGameBattlePassRewardInfoDocument`), {
    variables: { milestoneId },
    fetchPolicy: "cache-only", // Cache only, details container will query this for us
  });

  const subtitle = explanation?.rewardInfo?.subtitle;

  if (!subtitle || loading) {
    return null;
  }

  return (
    <Box accessible={true}>
      <TextTemplate
        type="b2"
        textAlign="center"
        accessible={true}
        accessibilityLabel={subtitle}
        testID={ITEM_DETAILS_SUBTITLE(subtitle)}
      >
        {subtitle}
      </TextTemplate>
    </Box>
  );
};

export default memo(BattlePassItemSubtitleContainer);
