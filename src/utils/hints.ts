import { IHintsStore } from "@redux/hints/hints.reducer";
import { HintScreenType } from "@redux/hints/hints.types";
import { Hint as HintType } from "@graphql/_core/schema";

export const getHint = ({
  screen,
  hintsState,
  iterations = 0,
}: {
  screen: HintScreenType;
  hintsState: IHintsStore;
  iterations?: number;
}): { hint: HintType } => {
  if (iterations > hintsState.hints.length) {
    return null;
  }

  const shownHints = hintsState.shownHints ?? [];
  const sortedHints = [...hintsState.hints].sort((a, b) => {
    const hasSeenFirst = shownHints.find((hint) => hint.id === a.id);
    const hasSeenSecond = shownHints.find((hint) => hint.id === b.id);

    if (!hasSeenFirst && !hasSeenSecond) {
      return 0;
    }

    if (!hasSeenFirst) {
      return -1;
    }

    if (!hasSeenSecond) {
      return 1;
    }

    return hasSeenFirst.showCount - hasSeenSecond.showCount;
  });

  const nextHint: HintType = sortedHints.find(isHintAvailable(screen));

  if (!nextHint) {
    return null;
  }

  return { hint: nextHint };
};

const isHintAvailable = (screen: string) => {
  return (hint: HintType) => {
    if (hint.screenBlacklist?.includes(screen)) {
      return false;
    }

    if (hint.screenWhitelist?.length && !hint.screenWhitelist.includes(screen)) {
      return false;
    }

    return true;
  };
};
