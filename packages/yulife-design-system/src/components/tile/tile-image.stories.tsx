import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TileImage } from "./tile-image";
import { YuCoinValue } from "../yu-coin-value";
import { palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { Icon, RightIcon } from "../../icons";

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

const meta: Meta<typeof TileImage> = {
  title: "Layout/Tile/Tile Image",
  component: TileImage,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Tile Image

An image-backed tile variant with a raster image slot (152 px tall, \`object-fit: cover\`)
at the top and a content area below containing a title, body slot, and action slot.

Use \`imageOverlay\` for photographic assets that need a dark scrim to ensure
legibility of any text overlaid on the image.

Use \`flagSlot\` to place a status badge in the top-left corner of the image area.

### Related

- **[Tile](/docs/components-tile--docs)** — icon + label tile
- **[Tile Group](/docs/components-tile-tile-group--docs)** — arranges tiles in a row or stack

### Figma reference

[YuLife App Storybook — Tile](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-5682)
        `.trim(),
      },
    },
  },
  argTypes: {
    imageSrc: { control: "text" },
    imageOverlay: { control: "boolean" },
    title: { control: "text" },
    bodySlot: { control: false },
    actionSlot: { control: false },
    flagSlot: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof TileImage>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Challenge tile — illustrated image with YuCoin value and an active badge.
 */
export const Challenge: Story = {
  render: () => (
    <TileImage
      imageSrc={CHALLENGE_IMAGE_1}
      title="Steps"
      bodySlot={<YuCoinValue value={666} size="small" />}
      actionSlot={<BonusFlag />}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Challenge variant — illustrated image (no overlay), title, " +
          "YuCoin value, and a Bonus + Active badge in the action slot.",
      },
    },
  },
};

/**
 * Services tile — photographic image with dark overlay and body description.
 */
export const Services: Story = {
  render: () => (
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
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Services variant — photographic image with dark scrim " +
          "(`imageOverlay`), title, body description, and an active badge.",
      },
    },
  },
};

/**
 * Image tile with a flag overlay on the image area.
 */
export const WithFlag: Story = {
  render: () => (
    <TileImage
      imageSrc={CHALLENGE_IMAGE_2}
      title="Meditation"
      bodySlot={<YuCoinValue value={200} size="small" />}
      actionSlot={<ActiveBadge />}
      flagSlot={
        <div
          style={{
            ...textStyles.label3Bold,
            lineHeight: `${textStyles.label3Bold.lineHeight}px`,
            letterSpacing: `${textStyles.label3Bold.letterSpacing}px`,
            backgroundColor: palette.pink700,
            color: palette.neutralWhite,
            borderRadius: 48,
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          +1
        </div>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Image tile with a flag overlay (top-left corner of the image). " +
          "The `flagSlot` accepts any ReactNode for status badges.",
      },
    },
  },
};
