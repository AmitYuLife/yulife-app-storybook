import uuid from "react-native-uuid";
import { Image } from "@redux/_core/types";
import { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { GetItemDetailsHookResponse, HalfModalItemDetails, useAsyncEffect } from "@hooks";
import { prefetchImages } from "@atoms";
import { gql } from "@graphql/__generated";

type QueryResult = {
  rewardInfo?: {
    explanations?: {
      label?: string;
      icon?: Image;
    }[];
    possibleItems?: {
      label?: string;
      image?: Image;
    }[];
  };
};

export const convertRewardInfoToItemDetails = (queryResult: QueryResult): HalfModalItemDetails[] => {
  const usedKeys = new Set();

  const toId = (text: string) => {
    if (usedKeys.has(text)) {
      return `${text}-${uuid.v4().toString()}`;
    }

    usedKeys.add(text);
    return text;
  };

  const explanations: HalfModalItemDetails[] =
    queryResult?.rewardInfo?.explanations?.map((exp) => ({
      type: "simple",
      id: toId(exp.label),
      title: exp.label,
      image: exp.icon,
    })) || [];

  const possibleItems: HalfModalItemDetails[] =
    queryResult?.rewardInfo?.possibleItems?.map((item) => ({
      type: "itemReward",
      id: toId(item.label),
      title: item.label,
      image: item.image,
    })) || [];

  return [...explanations, ...possibleItems];
};

export const useBattlePassItemDetailsModalItems = ({
  milestoneId,
}: {
  milestoneId: string;
}): GetItemDetailsHookResponse => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data: rewardInfo, error } = useQuery(gql(`GetMobileGameBattlePassRewardInfoDocument`), {
    variables: { milestoneId },
    fetchPolicy: "cache-and-network",
  });

  useAsyncEffect(async () => {
    if (!rewardInfo?.rewardInfo || !isLoading) {
      return;
    }

    const explanationImages =
      rewardInfo.rewardInfo.explanations?.map((exp) => exp.icon?.uri).filter((uri) => !!uri) ?? [];

    try {
      if (explanationImages.length > 0) {
        await prefetchImages(explanationImages);
      }
    } catch {}

    setIsLoading(false);
  }, [rewardInfo, isLoading]);

  const details = useMemo(() => convertRewardInfoToItemDetails(rewardInfo), [rewardInfo]);

  return { isLoading, details, error };
};
