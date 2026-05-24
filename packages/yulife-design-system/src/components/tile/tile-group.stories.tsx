import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TileGroup } from "./tile-group";
import { Tile } from "./tile";
import { TileImage } from "./tile-image";
import { YuCoinValue } from "../yu-coin-value";
import { palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { Icon, RightIcon } from "../../icons";
import {
  CoverDetailsColourIcon,
  PolicySummaryColourIcon,
  HintsColourIcon,
  FAQColourIcon,
  MembersColourIcon,
  CalendarColourIcon,
} from "../../icons";

// ─── Challenge hero images ────────────────────────────────────────────────────

function loadAssetContext(context: __WebpackModuleApi.RequireContext): Record<string, string> {
  const result: Record<string, string> = {};
  context.keys().forEach((key) => {
    const mod = context(key) as string | { default: string };
    result[key] = typeof mod === "string" ? mod : mod.default;
  });
  return result;
}

const challengeHeroImages = Object.values(
  loadAssetContext(require.context("../../assets/challenge-hero", false, /\.png$/))
);

function pickRandom(pool: string[], exclude: string[] = []): string {
  const available = pool.filter((img) => !exclude.includes(img));
  const source = available.length > 0 ? available : pool;
  return source[Math.floor(Math.random() * source.length)];
}

const CHALLENGE_IMAGE_1 = pickRandom(challengeHeroImages);
const CHALLENGE_IMAGE_2 = pickRandom(challengeHeroImages, [CHALLENGE_IMAGE_1]);
const SERVICES_IMAGE = "https://picsum.photos/seed/wellbeing/328/304";

// ─── Shared sub-components ────────────────────────────────────────────────────

const ActiveBadge = () => (
  <div
    style={{
      width: 24,
      height: 24,
      borderRadius: 48,
      backgroundColor: palette.pink700,
      border: `1px solid ${palette.neutralWhite}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Icon svg={RightIcon} size={16} color={palette.neutralWhite} accessibilityLabel="" />
  </div>
);

const BonusFlag = () => (
  <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
    <div
      style={{
        ...textStyles.label3Bold,
        lineHeight: `${textStyles.label3Bold.lineHeight}px`,
        letterSpacing: `${textStyles.label3Bold.letterSpacing}px`,
        backgroundColor: "#FCE7F1",
        color: palette.pink700,
        borderRadius: 8,
        border: `1px solid ${palette.neutralWhite}`,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 8,
        paddingRight: 28,
        whiteSpace: "nowrap",
      }}
    >
      Bonus
    </div>
    <div style={{ position: "absolute", right: 0 }}>
      <ActiveBadge />
    </div>
  </div>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof TileGroup> = {
  title: "Layout/Tile/Tile Group",
  component: TileGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Tile Group

A layout wrapper that arranges \`Tile\` and \`TileImage\` components in either a
**horizontal row** (default, equal-width sharing) or a **vertical stack** (full width).

| Direction | Behaviour |
|-----------|-----------|
| \`"horizontal"\` (default) | Children share available width equally with a 8 px gap |
| \`"vertical"\` | Children stack top-to-bottom at full width with a 8 px gap |

Three tiles is the designed maximum for a horizontal group. Beyond three, labels
may become crowded at mobile viewport widths.

### Related

- **[Tile](/docs/components-tile--docs)** — icon + label tile
- **[Tile Image](/docs/components-tile-tile-image--docs)** — image-backed tile variant

### Figma reference

[YuLife App Storybook — Tile](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-5682)
        `.trim(),
      },
    },
  },
  argTypes: {
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof TileGroup>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Two tiles sharing equal width inside a 327 px container.
 */
export const TwoTiles: Story = {
  render: () => (
    <div style={{ width: 327 }}>
      <TileGroup>
        <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="What I can claim for" />
        <Tile colourIcon={<PolicySummaryColourIcon size={24} />} label="Make a claim" />
      </TileGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Two tiles sharing equal width inside a 327 px container." },
    },
  },
};

/**
 * Three tiles — the primary Figma layout. Each tile expands equally across
 * the full content width.
 */
export const ThreeTiles: Story = {
  render: () => (
    <div style={{ width: 327 }}>
      <TileGroup>
        <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="What I can claim for" />
        <Tile colourIcon={<PolicySummaryColourIcon size={24} />} label="Make a claim" />
        <Tile colourIcon={<HintsColourIcon size={24} />} label="Key policy information" />
      </TileGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Three tiles — the primary layout from the Figma spec. " +
          "Matches the TileGroup used in the Health Cash Plan product page.",
      },
    },
  },
};

/**
 * Four tiles — demonstrates that the equal-width layout adapts beyond three,
 * though three is the designed maximum.
 */
export const FourTiles: Story = {
  render: () => (
    <div style={{ width: 327 }}>
      <TileGroup>
        <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="Cover" />
        <Tile colourIcon={<PolicySummaryColourIcon size={24} />} label="Claims" />
        <Tile colourIcon={<FAQColourIcon size={24} />} label="FAQ" />
        <Tile colourIcon={<MembersColourIcon size={24} />} label="Members" />
      </TileGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Four tiles — the layout adapts, but labels may become crowded. " +
          "Three tiles is the recommended maximum per the Figma spec.",
      },
    },
  },
};

/**
 * Product page example — the exact TileGroup used in the Health Cash Plan
 * story, showing real icon + label combinations.
 */
export const ProductPageExample: Story = {
  render: () => (
    <div style={{ width: 327 }}>
      <TileGroup>
        <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="What I can claim for" />
        <Tile colourIcon={<PolicySummaryColourIcon size={24} />} label="Make a claim" />
        <Tile colourIcon={<CalendarColourIcon size={24} />} label="Key policy information" />
      </TileGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world tile group from the Health Cash Plan product page — " +
          "three action shortcuts matching the Figma Product Details spec.",
      },
    },
  },
};

/**
 * Vertical stack — TileImage tiles stacked top-to-bottom at full width.
 */
export const VerticalImageStack: Story = {
  render: () => (
    <div style={{ width: 327 }}>
      <TileGroup direction="vertical">
        <TileImage
          imageSrc={CHALLENGE_IMAGE_1}
          title="Steps"
          bodySlot={<YuCoinValue value={666} size="small" />}
          actionSlot={<BonusFlag />}
        />
        <TileImage
          imageSrc={SERVICES_IMAGE}
          imageOverlay={true}
          title="Phio"
          bodySlot={
            <span
              style={{
                ...textStyles.label1Bold,
                lineHeight: `${textStyles.label1Bold.lineHeight}px`,
                letterSpacing: `${textStyles.label1Bold.letterSpacing}px`,
                color: palette.neutral700,
              }}
            >
              Digital muscle &amp; joint support
            </span>
          }
          actionSlot={<ActiveBadge />}
        />
      </TileGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vertical TileGroup — image tiles stack top-to-bottom at full width. " +
          'Use `direction="vertical"` on TileGroup.',
      },
    },
  },
};

/**
 * Horizontal image tiles — two TileImage tiles side-by-side sharing equal width.
 */
export const HorizontalImageTiles: Story = {
  render: () => (
    <div style={{ width: 327 }}>
      <TileGroup direction="horizontal">
        <TileImage
          imageSrc={CHALLENGE_IMAGE_1}
          title="Steps"
          bodySlot={<YuCoinValue value={666} size="small" />}
          actionSlot={<ActiveBadge />}
        />
        <TileImage
          imageSrc={CHALLENGE_IMAGE_2}
          imageOverlay={true}
          title="Yoga"
          bodySlot={
            <span
              style={{
                ...textStyles.label1Bold,
                lineHeight: `${textStyles.label1Bold.lineHeight}px`,
                letterSpacing: `${textStyles.label1Bold.letterSpacing}px`,
                color: palette.neutral700,
              }}
            >
              Intro session
            </span>
          }
          actionSlot={<ActiveBadge />}
        />
      </TileGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Horizontal image tile group — two TileImage tiles sharing " + "equal width inside a 327 px container.",
      },
    },
  },
};
