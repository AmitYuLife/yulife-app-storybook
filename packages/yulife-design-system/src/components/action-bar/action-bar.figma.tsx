/**
 * Figma Code Connect — Action Bar
 *
 * Maps the Action Bar and its Nav Item sub-component to the ActionBar
 * code component.
 *
 * File: https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook
 *
 * To publish:
 *   FIGMA_ACCESS_TOKEN=<token> npx figma connect publish
 *
 * To unpublish:
 *   FIGMA_ACCESS_TOKEN=<token> npx figma connect unpublish
 */

import React from "react";
import figma from "@figma/code-connect";
import { ActionBar } from "./action-bar";
import type { ActionBarItem } from "./action-bar";
import type { FC, SVGProps } from "react";

/**
 * Stubs stand in for the real SVG components so that @figma/code-connect
 * can parse this file without the Vite ?react pipeline.
 */
import { TodaysYuCoinIcon, MapIcon, HeartIcon, TrophyIcon, ChestIcon } from "../icons/figma-stubs";

type SvgStub = FC<SVGProps<SVGSVGElement>>;

const NAV_ITEMS: ActionBarItem[] = [
  { id: "yucoin", icon: MapIcon as SvgStub, label: "YuCoin", accessibilityLabel: "YuCoin" },
  { id: "quests", icon: TodaysYuCoinIcon as SvgStub, label: "Quests", accessibilityLabel: "Quests" },
  { id: "yu", icon: HeartIcon as SvgStub, label: "Yu", accessibilityLabel: "Yu" },
  { id: "leaderboard", icon: TrophyIcon as SvgStub, label: "Leaderboard", accessibilityLabel: "Leaderboard" },
  { id: "rewards", icon: ChestIcon as SvgStub, label: "Rewards", accessibilityLabel: "Rewards" },
];

// ─── Action Bar ───────────────────────────────────────────────────────────────
// Figma node: 9509:3583

figma.connect(ActionBar, "https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=9509-3583", {
  imports: [
    'import { ActionBar } from "@/components/action-bar"',
    'import { TodaysYuCoinIcon, MapIcon, HeartIcon, TrophyIcon, ChestIcon } from "@/icons"',
  ],
  example: () => <ActionBar items={NAV_ITEMS} activeId="yucoin" onPress={(id) => console.log(id)} />,
});

// ─── Nav Item ─────────────────────────────────────────────────────────────────
// Figma node: 9480:20200
//
// The _Nav Item Figma component corresponds to an ActionBarItem entry in the
// items array. Its Active, Notification Dot, Item Label, and Icon properties
// are mapped below so the snippet reflects the selected variant in Figma.

figma.connect(
  ActionBar,
  "https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=9480-20200",
  {
    props: {
      showNotification: figma.boolean("Notification Dot"),
      label: figma.string("Item Label"),
      activeId: figma.enum("Active", {
        On: "item",
        Off: "",
      }),
    },
    imports: ['import { ActionBar } from "@/components/action-bar"', 'import { TodaysYuCoinIcon } from "@/icons"'],
    example: ({ showNotification, label, activeId }) => (
      <ActionBar
        items={[...NAV_ITEMS.slice(0, 4), { id: "item", icon: TodaysYuCoinIcon as SvgStub, label, showNotification }]}
        activeId={activeId}
        onPress={(id) => console.log(id)}
      />
    ),
  }
);
