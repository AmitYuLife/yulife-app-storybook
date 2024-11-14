import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { getRouteState } from "@redux/app/app.selectors";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import { useRef, useCallback, useEffect, MutableRefObject, useMemo } from "react";
import { useSelector } from "react-redux";

type Args = {
  items: Array<{ status?: string }>;
  ref?: MutableRefObject<FlashList<IBattlePassListItem>>;
  scrollToDependencies?: unknown[];
};

export function useBattlePassScrollToItem({ items, ref, scrollToDependencies = [] }: Args) {
  const battlePassListRef = useRef<FlashList<IBattlePassListItem>>(null);
  const currentRoute = useSelector(getRouteState);
  const nextRewardIndex = useMemo(
    () => items.findIndex((reward) => reward.status === "completed" || reward.status === "pending") || 0,
    [items]
  );

  const activeListRef = ref || battlePassListRef;

  const scrollToReward = useCallback(() => {
    if (nextRewardIndex > 0) {
      activeListRef.current?.scrollToIndex({
        index: nextRewardIndex,
        animated: true,
        viewOffset: Style.adjust(7),
      });
    }
  }, [nextRewardIndex]);

  useEffect(scrollToReward, [nextRewardIndex, currentRoute, scrollToReward, ...scrollToDependencies]);

  return { activeListRef, scrollToReward };
}
