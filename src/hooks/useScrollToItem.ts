import { getRouteState } from "@redux/app/app.selectors";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import { useRef, useCallback, useEffect, MutableRefObject, useMemo } from "react";
import { useSelector } from "react-redux";

type Args<T> = {
  items: Array<{ status?: string }>;
  ref?: MutableRefObject<FlashList<T>>;
  scrollToDependencies?: unknown[];
};

export function useScrollToItem<T>({ items, ref, scrollToDependencies = [] }: Args<T>) {
  const listRef = useRef<FlashList<T>>(null);
  const currentRoute = useSelector(getRouteState);
  const nextRewardIndex = useMemo(
    () => items.findIndex((reward) => reward.status === "completed" || reward.status === "pending") || 0,
    [items]
  );

  const activeListRef = ref || listRef;

  const scrollToReward = useCallback(() => {
    if (nextRewardIndex > 0) {
      activeListRef.current?.scrollToIndex({
        index: nextRewardIndex,
        animated: true,
        viewOffset: Style.adjust(7),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextRewardIndex]);

  useEffect(scrollToReward, [nextRewardIndex, currentRoute, scrollToReward, ...scrollToDependencies]);

  return { activeListRef, scrollToReward };
}
