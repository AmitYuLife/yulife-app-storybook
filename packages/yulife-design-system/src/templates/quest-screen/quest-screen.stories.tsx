import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { QuestScreen, type QuestScreenProps } from "./quest-screen";
import type { QuestMapSlice, LevelSpec } from "../../components/quest-map";
import { EPISODE_LAYOUTS } from "../../components/quest-map";

// ─── Asset discovery ────────────────────────────────────────────────────────

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

function makeLevels(episode: number, startLevel: number): LevelSpec[] {
  const activeLevel = 11;

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

function buildForestSlices(): QuestMapSlice[] {
  const slices: QuestMapSlice[] = [];

  for (let ep = 1; ep <= 8; ep++) {
    const startLevel = 1 + (ep - 1) * 7;
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

const meta: Meta<QuestScreenProps> = {
  title: "Templates/QuestScreen",
  component: QuestScreen,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone15" },
    docs: {
      story: { height: "852px" },
      description: {
        component: `
## Quest Screen

Full-screen quest map template with NavigationHeader, scrollable world map,
and ActionBar. The map scrolls upward — Episode 01 (intro) is at the bottom
and Episode 08 is at the top. On mount the view scrolls to the bottom so the
player sees the entry point (Episode 01 with the Yumoji character).

Includes interactive Level Disc buttons positioned at each pathway placemat.
The active disc shows the player's Yumoji Pin avatar above it.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<QuestScreenProps>;

// ─── Stories ────────────────────────────────────────────────────────────────

export const EarthForest: Story = {
  render: () => {
    const slices = buildForestSlices();
    return <QuestScreen slices={slices} />;
  },
  name: "Earth / Forest",
};
