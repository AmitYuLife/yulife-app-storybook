/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import { getRouteState } from "@redux/app/app.selectors";
import { FlatList } from "react-native";
import { useRef, useCallback, useEffect, MutableRefObject, useMemo } from "react";
import { useSelector } from "react-redux";
import { isRTL } from "@locale";
import { DETOX_ENABLED } from "@services/socket";

type Args<T> = {
  items: Array<{ status?: string }>;
  ref?: MutableRefObject<FlatList<T>>;
  scrollToDependencies?: unknown[];
};

export function useScrollToItem<T>({ items, ref, scrollToDependencies = [] }: Args<T>) {
  "use no memo";
  const listRef = useRef<FlatList<T>>(null);
  const currentRoute = useSelector(getRouteState);
  const nextRewardIndex = useMemo(
    () => items.findIndex((reward) => reward.status === "completed" || reward.status === "pending") || 0,
    [items]
  );

  const activeListRef = ref || listRef;

  const scrollToReward = useCallback(() => {
    if (nextRewardIndex > 0) {
      // Use setTimeout to ensure content is laid out before scrolling in RTL
      const timeout = setTimeout(() => {
        // // for rtl, we need to reverse the scroll index
        const scrollIndex = isRTL() ? items.length - 1 - nextRewardIndex : nextRewardIndex;

        activeListRef.current?.scrollToIndex({
          index: scrollIndex,
          animated: !DETOX_ENABLED,
        });
      }, 100);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextRewardIndex, items.length]);

  useEffect(scrollToReward, [nextRewardIndex, currentRoute, scrollToReward, ...scrollToDependencies]);

  return { activeListRef, scrollToReward };
}
