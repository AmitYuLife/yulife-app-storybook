import { useEffect, RefObject } from "react";
import { FlatList as RNFlatList } from "react-native";
import { HealthSmokingStreakCarousel } from "@graphql/__generated";
import { SMOKING_FLAT_LIST_ITEM_WIDTH, SMOKING_FLAT_LIST_SEPARATOR_WIDTH } from "./smoking-streak.styles";

export const useScrollFlatList = (
  flatListRef: RefObject<RNFlatList<HealthSmokingStreakCarousel>>,
  startFrom?: number,
  animateTo?: number
) => {
  useEffect(() => {
    const scrollFromInterval = setTimeout(() => {
      if (flatListRef.current && Number.isInteger(startFrom)) {
        flatListRef.current.scrollToOffset({
          offset: (SMOKING_FLAT_LIST_ITEM_WIDTH + SMOKING_FLAT_LIST_SEPARATOR_WIDTH) * startFrom,
          animated: false,
        });
      }
    }, 0);

    const scrollToInterval = setTimeout(() => {
      if (flatListRef.current && Number.isInteger(animateTo)) {
        flatListRef.current.scrollToOffset({
          offset: (SMOKING_FLAT_LIST_ITEM_WIDTH + SMOKING_FLAT_LIST_SEPARATOR_WIDTH) * animateTo,
          animated: true,
        });
      }
    }, 1000);

    return () => {
      clearInterval(scrollFromInterval);
      clearInterval(scrollToInterval);
    };
  }, [flatListRef, startFrom, animateTo]);
};
