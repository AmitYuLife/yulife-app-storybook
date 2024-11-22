import uuid from "react-native-uuid";
import { ItemDetails } from "@organisms";
import { Image } from "@redux/_core/types";

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

export const convertExplanationsToItemDetails = (queryResult: QueryResult): ItemDetails[] => {
  const usedKeys = new Set();

  const toId = (text: string) => {
    if (usedKeys.has(text)) {
      return `${text}-${uuid.v4().toString()}`;
    }

    usedKeys.add(text);
    return text;
  };

  const explanations: ItemDetails[] =
    queryResult?.rewardInfo?.explanations?.map((exp) => ({
      type: "simple",
      id: toId(exp.label),
      title: exp.label,
      image: exp.icon,
    })) || [];

  const possibleItems: ItemDetails[] =
    queryResult?.rewardInfo?.possibleItems?.map((item) => ({
      type: "itemReward",
      id: toId(item.label),
      title: item.label,
      image: item.image,
    })) || [];

  return [...explanations, ...possibleItems];
};
