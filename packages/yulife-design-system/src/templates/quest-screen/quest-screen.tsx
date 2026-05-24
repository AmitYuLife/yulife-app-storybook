import React, { useRef, useEffect } from "react";
import { NavigationHeader } from "../../components/navigation-header";
import { ActionBar } from "../../components/action-bar";
import { QuestMap } from "../../components/quest-map";
import type { QuestMapSlice } from "../../components/quest-map";
import { TodaysYuCoinIcon, MapIcon, HeartIcon, TrophyIcon, ChestIcon } from "../../icons";
import type { ActionBarItem } from "../../components/action-bar";
import { spacing } from "../../tokens/spacing";

// ─── Layout constants ────────────────────────────────────────────────────────
/** Height of the NavigationHeader (status bar 44 + nav bar 40 + sub-nav 8). */
const HEADER_HEIGHT = 92;
/** Height of the ActionBar pill (58) + its built-in bottom padding (24). */
const ACTION_BAR_HEIGHT = 82;

// ─── Default nav items ──────────────────────────────────────────────────────

const QUEST_SCREEN_NAV_ITEMS: ActionBarItem[] = [
  {
    id: "yucoin",
    icon: TodaysYuCoinIcon,
    label: "YuCoin",
    accessibilityLabel: "YuCoin screen",
  },
  {
    id: "quests",
    icon: MapIcon,
    label: "Quests",
    accessibilityLabel: "Quests screen",
  },
  {
    id: "wellbeing",
    icon: HeartIcon,
    label: "Wellbeing",
    accessibilityLabel: "Wellbeing screen",
  },
  {
    id: "rewards",
    icon: TrophyIcon,
    label: "Rewards",
    accessibilityLabel: "Rewards screen",
  },
  {
    id: "challenges",
    icon: ChestIcon,
    label: "Challenges",
    accessibilityLabel: "Challenges screen",
  },
];

// ─── Types ──────────────────────────────────────────────────────────────────

export interface QuestScreenProps {
  /** Episode slices for the world map. */
  slices: QuestMapSlice[];
  /**
   * When true, scrolls to the bottom of the map on mount so the player
   * sees the entry point (Episode 01 / starting position).
   * @default true
   */
  scrollToBottom?: boolean;
}

// ─── QuestScreen ────────────────────────────────────────────────────────────

/**
 * QuestScreen
 *
 * Full-screen quest map template. Layout matches the YuCoinScreen pattern:
 * - Root: `position: relative; height: 100vh; overflow: hidden`
 * - NavigationHeader: `position: absolute` (via style override) at the top
 * - Scrollable map: `position: absolute; top: 92; bottom: 82; left/right: 0`
 * - ActionBar: `position: absolute; bottom: 0; left/right: 0; padding: 0 16px`
 */
export const QuestScreen: React.FC<QuestScreenProps> = ({ slices, scrollToBottom = true }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToBottom && scrollRef.current) {
      scrollRef.current.scrollTop = Number.MAX_SAFE_INTEGER;
    }
  }, [scrollToBottom]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* NavigationHeader — position: absolute keeps it within the template root */}
      <NavigationHeader style={{ position: "absolute" }} />

      {/* Scrollable map — pinned between header and action bar */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          top: HEADER_HEIGHT,
          bottom: ACTION_BAR_HEIGHT,
          left: 0,
          right: 0,
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <QuestMap slices={slices} />
      </div>

      {/* ActionBar — absolute at bottom, 0 16px padding matches all templates */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: `0 ${spacing[4]}px`,
          zIndex: 100,
        }}
      >
        <ActionBar items={QUEST_SCREEN_NAV_ITEMS} activeId="quests" />
      </div>
    </div>
  );
};

export default QuestScreen;
