import { memo, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { Style } from "@styles";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { prefetchImages } from "@atoms";
import { useAsyncEffect } from "@hooks";
import { convertExplanationsToItemDetails } from "@organisms/battle-pass-list-item/helpers";
import { ItemDetailsContainer } from "@organisms";

interface IBattlePassItemDetailsContainer {
  milestoneId: string;
}

const BattlePassItemDetailsContainer = ({ milestoneId }: IBattlePassItemDetailsContainer) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data: explanation, error } = useQuery(gql(`GetMobileGameBattlePassRewardInfoDocument`), {
    variables: { milestoneId },
    fetchPolicy: "cache-and-network",
  });

  useAsyncEffect(async () => {
    if (!explanation?.rewardInfo || !isLoading) {
      return;
    }

    const explanationImages = explanation.rewardInfo.explanations?.reduce((acc, curr) => [...acc, curr.icon.uri], []);
    const rewardImages = explanation.rewardInfo.possibleItems?.reduce((acc, curr) => [...acc, curr.image.uri], []);

    try {
      await prefetchImages([...explanationImages, ...rewardImages]);
    } catch {}

    setIsLoading(false);
  }, [explanation, isLoading]);

  const details = useMemo(() => convertExplanationsToItemDetails(explanation), [explanation]);

  return (
    <ItemDetailsContainer
      isLoading={isLoading}
      details={!error ? details : []}
      containerStyles={styles.itemDetailsContainer}
    />
  );
};

const styles = StyleSheet.create({
  itemDetailsContainer: {
    paddingHorizontal: Style.adjust(30),
    marginTop: Style.adjust(30),
    paddingBottom: Style.adjust(20),
  },
});

export default memo(BattlePassItemDetailsContainer);
