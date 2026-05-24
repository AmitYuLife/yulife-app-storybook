import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Card } from "./card";
import { CardInfoContent } from "./card-info-content";
import { Icon, RightIcon, CoverDetailsColourIcon } from "../../icons";
import { palette, colors } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Card

A neutral **slot container** that frames related content with a subtle border,
rounded corners, and an optional drop-shadow for emphasis. Card has **no
opinion on its contents** — pass any \`ReactNode\` as \`children\`, typically
one or more \`CardInfoContent\` rows.

| Prop | Values | Default |
|------|--------|---------|
| \`elevation\` | \`Off\` · \`On\` | \`Off\` |
| \`overline\` | \`ReactNode\` | — |
| \`padding\` | \`number\` (px) | \`16\` |

### When to use

- **Elevation Off** — grouped list items and secondary content areas.
- **Elevation On** — call out a single primary card (e.g. featured policy).
- **Overline** — to title a section and group multiple cards beneath one label.

### Composition

Cards pair naturally with \`CardInfoContent\`, which supplies a polished
icon + title + description + trailing-icon row in three sizing variants.

### Figma reference

[YuLife App Storybook — Card (New)](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-4570)
        `,
      },
    },
  },
  argTypes: {
    elevation: {
      control: "radio",
      options: ["Off", "On"],
      description: "Drop-shadow depth.",
    },
    border: {
      control: "boolean",
      description: "Show or hide the 1 px border.",
    },
    overline: {
      control: "text",
      description: "Optional overline label rendered above the card.",
    },
    padding: {
      control: { type: "number", min: 0, max: 32, step: 4 },
      description: "Inner padding around children (px).",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Trailing chevron used on tappable rows. Per design guidance, chevrons are
 * always rendered in primary pink (`palette.pink700` / Bupa Blue) — never a
 * neutral colour — to signal interactivity.
 */
const trailing = <Icon svg={RightIcon} size={24} color={palette.pink700} accessibilityLabel="" />;

const sampleRow = (
  <CardInfoContent
    leftAsset="ColourIcon"
    leftSlot={<CoverDetailsColourIcon size={24} />}
    title="Your title here"
    description="Your description copy goes here. Should be no more than three lines of copy."
    rightSlot={trailing}
  />
);

// ─── Default ──────────────────────────────────────────────────────────────────

/**
 * A flat card containing a single `CardInfoContent` row — the most common use.
 */
export const Default: Story = {
  args: {
    children: sampleRow,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: { story: "Flat card with a single info row — the default usage pattern." },
    },
  },
};

// ─── Elevation ────────────────────────────────────────────────────────────────

/**
 * Elevated card — a 4 px drop-shadow emphasises the card above surrounding
 * surfaces. Use sparingly, typically for the primary card on a screen.
 */
export const Elevated: Story = {
  args: {
    elevation: "On",
    children: sampleRow,
  },
};

/**
 * Side-by-side comparison of both elevation states.
 */
export const Elevations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Card elevation="Off">{sampleRow}</Card>
      <Card elevation="On">{sampleRow}</Card>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Elevation `Off` (flat) above, `On` (4 px drop-shadow) below.",
      },
    },
  },
};

// ─── Overline ─────────────────────────────────────────────────────────────────

/**
 * Cards can be titled with a small overline label — useful when grouping
 * multiple cards under a single section heading.
 */
export const WithOverline: Story = {
  args: {
    overline: "OverlineHeading",
    children: sampleRow,
  },
};

/**
 * Both states side-by-side: with border (default) and without.
 */
export const Borders: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Card>{sampleRow}</Card>
      <Card border={false}>{sampleRow}</Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Bordered (left, default) and borderless (right) variants.",
      },
    },
  },
};

// ─── Custom content ───────────────────────────────────────────────────────────

/**
 * The slot accepts any `ReactNode` — not just `CardInfoContent`. Use this
 * escape hatch for bespoke layouts (banners, CTAs, stat blocks, etc.).
 */
export const CustomContent: Story = {
  render: () => (
    <Card elevation="On">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            ...textStyles.heading3,
            lineHeight: `${textStyles.heading3.lineHeight}px`,
            letterSpacing: `${textStyles.heading3.letterSpacing}px`,
            color: colors.textPrimary,
            margin: 0,
          }}
        >
          Custom content
        </p>
        <p
          style={{
            ...textStyles.body2Regular,
            lineHeight: `${textStyles.body2Regular.lineHeight}px`,
            letterSpacing: `${textStyles.body2Regular.letterSpacing}px`,
            color: colors.textPrimary,
            margin: 0,
          }}
        >
          Card doesn't care what lives inside it. Compose whatever you need.
        </p>
      </div>
    </Card>
  ),
};

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    elevation: "Off",
    border: true,
    overline: "",
    padding: 16,
    children: sampleRow,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Interactive playground — toggle every prop via the Controls panel.",
      },
    },
  },
};
