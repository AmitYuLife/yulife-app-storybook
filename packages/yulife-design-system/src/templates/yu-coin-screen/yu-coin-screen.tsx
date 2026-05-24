import React from "react";
import { NavigationHeader } from "../../components/navigation-header";
import { ActionBar } from "../../components/action-bar";
import { Badge } from "../../components/badge";
import { Button } from "../../components/button";
import { YuCoinValue } from "../../components/yu-coin-value";
import { Icon } from "../../icons";
import {
  BellIcon,
  HamburgerIcon,
  MapIcon,
  HeartIcon,
  TrophyIcon,
  ChestIcon,
  CyclingIcon,
  MindfulnessIcon,
  TodaysYuCoinIcon,
  StreakColourIcon,
} from "../../icons";
import { colors, palette } from "../../tokens/colors";
import { fontFamily, fontSize, fontWeight } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";
import type { ActionBarItem } from "../../components/action-bar";

// ─── Asset imports ────────────────────────────────────────────────────────────
// All illustration assets exported from the Figma "Today Screen" (node 28:15936).
// Source: YuLife App — Login Spec, https://www.figma.com/design/4tvQWEu6I2nmPKK8eSVtOM

import yucoinComposite from "../../assets/yucoin-screen/yucoin-composite.png";
import { gameBackgrounds } from "../../assets/game-backgrounds";

// ─── Colour constants ─────────────────────────────────────────────────────────

const BG_CREAM = "#fffcd7";
const COLOR_HEADING = palette.neutral700; // #464647
const COLOR_BODY = "#5A5A5C"; // Neutral/N800
const COLOR_CTA = colors.actionPrimaryHover; // #E30D76

// ─── Default nav items ────────────────────────────────────────────────────────

const HOME_SCREEN_NAV_ITEMS: ActionBarItem[] = [
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
    accessibilityLabel: "Quests",
  },
  {
    id: "yu",
    icon: HeartIcon,
    label: "Yu",
    accessibilityLabel: "Yu",
  },
  {
    id: "leaderboard",
    icon: TrophyIcon,
    label: "Leaderboard",
    accessibilityLabel: "Leaderboard",
  },
  {
    id: "rewards",
    icon: ChestIcon,
    label: "Rewards",
    accessibilityLabel: "Rewards",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface ActivityStatProps {
  icon: React.ReactNode;
  value: string;
}

const ActivityStat: React.FC<ActivityStatProps> = ({ icon, value }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: spacing[1],
    }}
  >
    {icon}
    <span
      style={{
        fontFamily: fontFamily.sans,
        fontSize: fontSize.sm,
        fontWeight: fontWeight.regular,
        lineHeight: "24px",
        color: COLOR_HEADING,
        letterSpacing: "0.6px",
        whiteSpace: "nowrap",
      }}
    >
      {value}
    </span>
  </div>
);

// ─── YuCoinScreen ───────────────────────────────────────────────────────────────

export interface YuCoinScreenActivity {
  /** Step count. */
  steps: number;
  /** Distance in km. */
  distanceKm: number;
  /** Active minutes. */
  minutes: number;
}

export interface YuCoinScreenProps {
  /**
   * User's current YuCoin balance displayed in the navigation header.
   * @default 400
   */
  yuCoinBalance?: string | number;
  /**
   * Total YuCoins available to earn today.
   * @default 200
   */
  yuCoinToday?: number;
  /**
   * Today's activity statistics.
   */
  activity?: YuCoinScreenActivity;
  /**
   * Text for the main call-to-action button.
   * @default "Take a challenge (1 left)"
   */
  ctaLabel?: string;
  /**
   * Surge widget — number of challenges completed today.
   * @default 0
   */
  surgeCompleted?: number;
  /**
   * Surge widget — total challenges available today.
   * @default 5
   */
  surgeTotal?: number;
  /**
   * Whether the notification bell shows an unread dot.
   * @default false
   */
  hasNotification?: boolean;
  /**
   * The currently active navigation tab id.
   * @default "yucoin"
   */
  activeTabId?: string;
  /**
   * Callback fired when a nav tab is pressed.
   */
  onTabPress?: (id: string) => void;
  /**
   * Background image source URL. Accepts any imported PNG asset or URL string.
   * Defaults to the Bright / Forest / Select background.
   */
  background?: string;
}

// ─── Layout constants ─────────────────────────────────────────────────────────

/** Height of the NavigationHeader (status bar 44 + nav bar 40 + sub-nav 8). */
const HEADER_HEIGHT = 92;

/** Height of the ActionBar pill + its bottom padding. */
const ACTION_BAR_HEIGHT = 82;

/**
 * YuCoinScreen
 *
 * Full-screen template for the YuLife app home (Today) screen. Combines the
 * `NavigationHeader` and `ActionBar` design-system components with the
 * illustrated YuCoin background, coin graphic, surge badge, and activity
 * statistics — matching the Figma "Today Screen" spec.
 *
 * Both `NavigationHeader` and `ActionBar` retain their natural positioning and
 * scaling from their own component stories:
 * - `NavigationHeader` is `position: fixed` at the top of the viewport.
 * - `ActionBar` sits at the bottom inside a `position: fixed` strip that
 *   mirrors the padding from its own story decorator (`0 16px`).
 *
 * Figma reference: YuLife App — Login Spec, node 28:15936
 * https://www.figma.com/design/4tvQWEu6I2nmPKK8eSVtOM/YuLife-App---Login--Spec-?node-id=28-15936
 */
export const YuCoinScreen: React.FC<YuCoinScreenProps> = ({
  yuCoinBalance = 400,
  yuCoinToday = 200,
  activity = { steps: 0, distanceKm: 0, minutes: 0 },
  ctaLabel = "Take a challenge (1 left)",
  surgeCompleted = 0,
  surgeTotal = 5,
  hasNotification = false,
  activeTabId = "yucoin",
  onTabPress,
  background = gameBackgrounds["Bright / Forest / —"],
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: BG_CREAM,
        position: "relative",
      }}
      aria-label="YuCoin screen"
    >
      {/* ── Background illustration ───────────────────────────────────────── */}
      {/* Figma node 28:15937 (Challenge / Background). Covers the full viewport. */}
      <img
        aria-hidden={true}
        alt=""
        src={background}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Navigation Header ────────────────────────────────────────────── */}
      {/* Uses its natural position: fixed — no style override. */}
      <NavigationHeader
        darkMode={false}
        style={{ position: "absolute" }}
        leftSlot={<Icon svg={HamburgerIcon} size={24} color={colors.textPrimary} accessibilityLabel="Open menu" />}
        rightSlot={<YuCoinValue value={yuCoinBalance} />}
      />

      {/* ── Notification bell ─────────────────────────────────────────────── */}
      {/*
       * Uses BellIcon from the line icon set (Figma node 28:15943).
       * Fixed to the viewport, aligned with the navigation bar row (y=52).
       * Sits at x=56 next to the hamburger.
       */}
      <div
        style={{
          position: "absolute",
          left: 56,
          top: 52,
          width: 24,
          height: 24,
          zIndex: 101,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label={hasNotification ? "Notifications (unread)" : "Notifications"}
        role="img"
      >
        <Icon svg={BellIcon} size={24} color={colors.textPrimary} accessibilityLabel="" />
        {hasNotification && (
          <span
            aria-hidden={true}
            style={{
              position: "absolute",
              top: 1,
              right: 1,
              width: 8,
              height: 8,
              borderRadius: radii.pill,
              backgroundColor: COLOR_CTA,
              border: `1.5px solid ${BG_CREAM}`,
              boxSizing: "border-box",
            }}
          />
        )}
      </div>

      {/* ── Surge badge (top-right floating) ──────────────────────────────── */}
      {/* Fixed to viewport top-right. 16px from right edge (375 - 295 - 64). */}
      <div
        style={{
          position: "absolute",
          right: 16,
          top: 104,
          zIndex: 101,
        }}
      >
        <Badge
          icon={<StreakColourIcon size={24} />}
          label={`${surgeCompleted}/${surgeTotal}`}
          color={palette.pink600}
          accessibilityLabel={`Active streak: ${surgeCompleted} of ${surgeTotal} challenges completed`}
        />
      </div>

      {/* ── Content area ─────────────────────────────────────────────────── */}
      {/*
       * Fixed layer pinned between header (top: 92) and action bar (bottom: 82).
       * All children use position:absolute with coordinates derived from Figma
       * by subtracting the header height (92px) from each node's screen-level y.
       */}
      <div
        style={{
          position: "absolute",
          top: HEADER_HEIGHT,
          bottom: ACTION_BAR_HEIGHT,
          left: 0,
          right: 0,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* YuCoin coin — Figma y=132 → top: 132-92=40 */}
        <img
          alt="YuCoin"
          src={yucoinComposite}
          style={{
            position: "absolute",
            top: 40,
            left: "50%",
            transform: "translateX(-50%)",
            width: 200,
            height: 200,
            objectFit: "contain",
          }}
        />

        {/* "200 YuCoin Today" — Figma centre y=368 → top: 368-92=276 */}
        <p
          style={{
            position: "absolute",
            top: 276,
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: fontFamily.sans,
            fontSize: 32,
            fontWeight: fontWeight.bold,
            lineHeight: "40px",
            color: COLOR_BODY,
            letterSpacing: "1px",
            textAlign: "center",
            margin: 0,
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          {yuCoinToday} YuCoin Today
        </p>

        {/* Activity statistics row — Figma y=388 → top: 388-92=296 */}
        <div
          style={{
            position: "absolute",
            top: 296,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: spacing[4],
          }}
        >
          <ActivityStat
            icon={<Icon svg={MindfulnessIcon} size={16} color={COLOR_HEADING} accessibilityLabel="Steps" />}
            value={`${activity.steps} steps`}
          />
          <ActivityStat
            icon={<Icon svg={CyclingIcon} size={16} color={COLOR_HEADING} accessibilityLabel="Distance" />}
            value={`${activity.distanceKm} km`}
          />
          <ActivityStat
            icon={<Icon svg={MindfulnessIcon} size={16} color={COLOR_HEADING} accessibilityLabel="Active minutes" />}
            value={`${activity.minutes} min`}
          />
        </div>

        {/* CTA button — Figma bottom=106 from screen → bottom: 106-82=24 from content */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button colour="Primary" variant="Solid" size="Large" style={{ width: 327 }}>
            {ctaLabel}
          </Button>
        </div>
      </div>

      {/* ── Action Bar ────────────────────────────────────────────────────── */}
      {/*
       * Fixed strip at the bottom of the viewport. The inner padding (0 16px)
       * matches the story decorator used in ActionBar.stories.tsx so the
       * component renders at the same scale and position as its own story.
       */}
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
        <ActionBar items={HOME_SCREEN_NAV_ITEMS} activeId={activeTabId} onPress={onTabPress} />
      </div>
    </div>
  );
};

export default YuCoinScreen;
