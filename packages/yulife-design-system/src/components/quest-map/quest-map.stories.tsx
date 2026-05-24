import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { QuestMap } from "./quest-map";
import type { QuestMapSlice, LevelSpec } from "./quest-map";
import { EPISODE_LAYOUTS } from "./positions";

// ─── Asset discovery (webpack) ────────────────────────────────────────────────

function loadAssetContext(context: __WebpackModuleApi.RequireContext): Record<string, string> {
  const result: Record<string, string> = {};
  context.keys().forEach((key) => {
    const mod = context(key) as string | { default: string };
    result[key] = typeof mod === "string" ? mod : mod.default;
  });
  return result;
}

const forestImages = loadAssetContext(require.context("../../assets/quest-maps/earth/forest", false, /\.png$/));

const avatarImages = loadAssetContext(require.context("../../assets/avatars", false, /\.png$/));

const firstAvatar = Object.values(avatarImages)[0] ?? "";

// ─── Helpers ────────────────────────────────────────────────────────────────

const EPISODE_RE = /Episode=(\d+)/;

function getForestSrc(episode: number): string {
  const entry = Object.entries(forestImages).find(([path]) => {
    const m = path.match(EPISODE_RE);
    return m && parseInt(m[1], 10) === episode;
  });
  return entry?.[1] ?? "";
}

const EPISODE_HEIGHTS: Record<number, number> = {
  1: 812,
  2: 676,
  3: 733,
  4: 667,
  5: 746,
  6: 557,
  7: 676,
  8: 701,
};

// ─── Level data ─────────────────────────────────────────────────────────────
// Simulates a player who has completed episodes 1-2 and is partway through 3.

function makeLevels(episode: number, startLevel: number): LevelSpec[] {
  const activeLevel = 18;

  return Array.from({ length: 7 }, (_, i) => {
    const globalLevel = startLevel + i;
    const isChest = i === 6;
    const isActive = globalLevel === activeLevel;
    const isCompleted = globalLevel < activeLevel;

    const spec: LevelSpec = {
      id: `ep${episode}-lv${i + 1}`,
      state: isCompleted ? "completed" : isActive ? "active" : "locked",
      type: isChest ? "chest" : "level",
      label: isChest ? undefined : String(globalLevel),
    };

    if (isActive && !isChest) {
      spec.yumojiPin = { src: firstAvatar, alt: "Player" };
    }

    return spec;
  });
}

// ─── Slice assembly ─────────────────────────────────────────────────────────

function buildForestSlices(): QuestMapSlice[] {
  const slices: QuestMapSlice[] = [];

  // Episode 1 — intro, no levels
  slices.push({
    src: getForestSrc(1),
    height: EPISODE_HEIGHTS[1],
    episode: 1,
  });

  // Episodes 2-8 — each has 7 levels
  for (let ep = 2; ep <= 8; ep++) {
    const startLevel = 1 + (ep - 2) * 7;
    slices.push({
      src: getForestSrc(ep),
      height: EPISODE_HEIGHTS[ep],
      episode: ep,
      layout: EPISODE_LAYOUTS[ep],
      levels: makeLevels(ep, startLevel),
    });
  }

  return slices;
}

// ─── Meta ───────────────────────────────────────────────────────────────────

const meta: Meta<typeof QuestMap> = {
  title: "Layout/QuestMap",
  component: QuestMap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Quest Map

A vertically-scrolling world map composed of stacked episode background PNGs
with interactive Level Disc buttons positioned at each pathway placemat.

Each world contains 8 episodes (Episode 01 is the intro screen at the bottom,
Episodes 02–08 each contain one 7-level pathway segment). The map scrolls
upward — Episode 01 is at the bottom and Episode 08 at the top.

The background images already contain the baked-in pathway lines (white trails).
Level Discs are absolutely positioned on top at the placemat intersection points
derived from the Figma Pathway components.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuestMap>;

// ─── Stories ────────────────────────────────────────────────────────────────

export const Forest: Story = {
  render: () => {
    const slices = buildForestSlices();
    return (
      <div
        style={{
          width: 375,
          height: 812,
          overflow: "auto",
          borderRadius: 12,
          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        }}
      >
        <QuestMap slices={slices} />
      </div>
    );
  },
  name: "Earth / Forest",
};
