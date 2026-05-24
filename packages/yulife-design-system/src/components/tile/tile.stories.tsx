import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Tile } from "./tile";
import { CoverDetailsColourIcon } from "../../icons";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tile> = {
  title: "Layout/Tile",
  component: Tile,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Tile

A single icon + label tile with a white card chassis, border, and drop-shadow.
Used as a navigation shortcut to a key action or section.

| Element | Spec |
|---------|------|
| Icon | 24 × 24 ColourIcon — pass via \`colourIcon\` prop |
| Label | 2-line max, ellipsis clamp — \`label2Bold\`, neutral700 |
| Background | White, \`border: 1px solid neutral300\` |

### Related

- **[Tile Group](/docs/components-tile-tile-group--docs)** — arranges multiple tiles in a horizontal row or vertical stack
- **[Tile Image](/docs/components-tile-tile-image--docs)** — image-backed tile variant with a raster image slot

### Figma reference

[YuLife App Storybook — Tile](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-5682)
        `.trim(),
      },
    },
  },
  argTypes: {
    colourIcon: { control: false },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Tile>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default — a single Tile with a ColourIcon and label.
 */
export const Default: Story = {
  args: {
    colourIcon: <CoverDetailsColourIcon size={24} />,
    label: "What I can claim for",
  },
};

/**
 * Long label — verifies 2-line clamping and ellipsis behaviour at the
 * standalone Tile width.
 */
export const LongLabel: Story = {
  args: {
    colourIcon: <CoverDetailsColourIcon size={24} />,
    label: "Label text goes here maximum 2 lines before ellipsis",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Labels longer than two lines are clamped with an ellipsis. " +
          "Copy should be kept short and action-oriented.",
      },
    },
  },
};
