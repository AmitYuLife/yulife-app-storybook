import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { CardInfoContent } from "./card-info-content";
import { Card } from "./card";
import { Icon, RightIcon, InfoIcon, CoverDetailsColourIcon, LotusColourIcon, GiftBoxColourIcon } from "../../icons";
import { palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof CardInfoContent> = {
  title: "Layout/Card/CardInfoContent",
  component: CardInfoContent,
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## CardInfoContent

A single info row intended to live inside a \`Card\`. Renders an optional
**left-column asset**, a **title + description** text block, and an optional
**right-column** trailing slot (commonly a chevron).

The \`leftAsset\` prop toggles between three layout presets that match the
Figma variants — sizing, gap, and vertical alignment all change together.

| \`leftAsset\` | Left size | Gap | Alignment |
|---------------|-----------|-----|-----------|
| \`ColourIcon\` | 24 × 24 | 8 px | top |
| \`SmallIllo\`  | 64 × 64 | 8 px | top |
| \`LargeAsset\` | 120 × 104 | 16 px | top |

The caller is responsible for supplying the correctly-sized asset. The
component only controls layout.

### Trailing chevron

When the row is tappable, pass an \`<Icon svg={RightIcon} />\` as \`rightSlot\`.
**Chevrons must always use primary pink** (\`palette.pink700\` / Bupa Blue) —
never a neutral colour — so they consistently signal interactivity.

### Figma reference

[YuLife App Storybook — CardInfoContent](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10970-1088)
        `,
      },
    },
  },
  argTypes: {
    leftAsset: {
      control: "radio",
      options: ["ColourIcon", "SmallIllo", "LargeAsset"],
      description: "Layout preset — sizing + alignment of the left column.",
    },
    title: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CardInfoContent>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Trailing chevron used on tappable rows. Per design guidance, chevrons are
 * always rendered in primary pink (`palette.pink700` / Bupa Blue) — never a
 * neutral colour — to signal interactivity.
 */
const trailing = <Icon svg={RightIcon} size={24} color={palette.pink700} accessibilityLabel="" />;

const infoTitleIcon = <Icon svg={InfoIcon} size={24} color={palette.neutral500} accessibilityLabel="" />;

/**
 * Pink placeholder used for the `LargeAsset` demo slot. Mirrors the 120×104
 * asos logo placeholder shown in the Figma variant.
 */
const LargePlaceholder: React.FC = () => (
  <div
    style={{
      width: 120,
      height: 104,
      borderRadius: 8,
      backgroundColor: palette.pink700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: palette.neutralWhite,
      ...textStyles.body1Bold,
      lineHeight: `${textStyles.body1Bold.lineHeight}px`,
      letterSpacing: `${textStyles.body1Bold.letterSpacing}px`,
    }}
  >
    asos
  </div>
);

// ─── ColourIcon ───────────────────────────────────────────────────────────────

/**
 * `ColourIcon` — a 24 × 24 colour icon (e.g. `CoverDetailsColourIcon`)
 * pinned to the top of the row next to the title.
 */
export const ColourIcon: Story = {
  args: {
    leftAsset: "ColourIcon",
    leftSlot: <CoverDetailsColourIcon size={24} />,
    title: "Your title here",
    description: "Your description copy goes here. Should be no more than three lines of copy.",
    rightSlot: trailing,
  },
};

// ─── SmallIllo ────────────────────────────────────────────────────────────────

/**
 * `SmallIllo` — a 64 × 64 small illustration positioned at the top left of
 * the text block. Use for richer, friendlier list items.
 */
export const SmallIllo: Story = {
  args: {
    leftAsset: "SmallIllo",
    leftSlot: <LotusColourIcon size={48} />,
    title: "Your title here",
    description: "Your description copy goes here. Should be no more than three lines of copy.",
    rightSlot: trailing,
  },
};

// ─── LargeAsset ───────────────────────────────────────────────────────────────

/**
 * `LargeAsset` — a 120 × 104 image or branded tile (with 8 px radius) sits
 * on the left with a wider 16 px gap. Used for partner/reward cards.
 */
export const LargeAsset: Story = {
  args: {
    leftAsset: "LargeAsset",
    leftSlot: <LargePlaceholder />,
    title: "Your title here",
    description: "Your description copy goes here. Should be no more than three lines of copy.",
    rightSlot: trailing,
  },
};

// ─── With titleIcon ───────────────────────────────────────────────────────────

/**
 * Drop a 24 × 24 icon immediately after the title via `titleIcon` — useful
 * for info/help affordances that document the row's meaning.
 */
export const WithTitleIcon: Story = {
  args: {
    leftAsset: "ColourIcon",
    leftSlot: <GiftBoxColourIcon size={24} />,
    title: "Your title here",
    titleIcon: infoTitleIcon,
    description: "Your description copy goes here. Should be no more than three lines of copy.",
    rightSlot: trailing,
  },
};

// ─── Without trailing ─────────────────────────────────────────────────────────

/**
 * Omit `rightSlot` when the row isn't interactive — the right column
 * collapses entirely.
 */
export const WithoutTrailing: Story = {
  args: {
    leftAsset: "ColourIcon",
    leftSlot: <CoverDetailsColourIcon size={24} />,
    title: "Your title here",
    description: "Your description copy goes here. Should be no more than three lines of copy.",
  },
};

// ─── All variants ─────────────────────────────────────────────────────────────

/**
 * All three left-asset variants stacked together for comparison.
 */
export const AllVariants: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <Card>
        <CardInfoContent
          leftAsset="ColourIcon"
          leftSlot={<CoverDetailsColourIcon size={24} />}
          title="ColourIcon"
          description="24 × 24 icon, 8 px gap, top-aligned with the title."
          rightSlot={trailing}
        />
      </Card>
      <Card>
        <CardInfoContent
          leftAsset="SmallIllo"
          leftSlot={<LotusColourIcon size={48} />}
          title="SmallIllo"
          description="48 × 48 illustration, 8 px gap, top-aligned with the text block."
          rightSlot={trailing}
        />
      </Card>
      <Card>
        <CardInfoContent
          leftAsset="LargeAsset"
          leftSlot={<LargePlaceholder />}
          title="LargeAsset"
          description="120 × 104 image, 16 px gap, top-aligned with the title."
          rightSlot={trailing}
        />
      </Card>
    </>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Side-by-side comparison of the three layout presets.",
      },
    },
  },
};
