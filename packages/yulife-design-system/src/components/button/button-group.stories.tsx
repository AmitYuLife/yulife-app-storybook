import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ButtonGroup } from "./button-group";
import { Button } from "./button";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof ButtonGroup> = {
  title: "Inputs/Button/Button Group",
  component: ButtonGroup,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
## ButtonGroup

A layout wrapper that arranges \`Button\` components in either a **vertical stack**
(default, full-width) or a **horizontal row** (equal-width sharing). Uses the same
\`spacing[4]\` (16 px) gap token as \`TileGroup\` for visual consistency across the
design system.

### Direction

| Value | Behaviour |
|-------|-----------|
| \`"vertical"\` (default) | Buttons stack top-to-bottom, each stretching to full width |
| \`"horizontal"\` | Buttons sit side-by-side, sharing the available width equally |

### Pinned variant

Set \`pinned\` to \`true\` on a **vertical** \`ButtonGroup\` to add a white gradient
background that fades from opaque white at the bottom to fully transparent at the top.
Use this when the group is fixed or sticky at the bottom of a scrollable area — the
gradient creates a soft visual lift without a hard divider line.
        `.trim(),
      },
    },
  },
  argTypes: {
    direction: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
    pinned: {
      control: "boolean",
    },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default — two buttons stacked vertically at full width. The most common
 * pattern: a primary CTA above an outline secondary action.
 */
export const Vertical: Story = {
  render: () => (
    <ButtonGroup>
      <Button colour="Primary" variant="Solid" size="Large">
        Confirm
      </Button>
      <Button colour="Primary" variant="Outline" size="Large">
        Cancel
      </Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Two buttons stacked vertically (default direction). Each button stretches " +
          "to the full container width with a 16 px gap between them.",
      },
    },
  },
};

/**
 * Horizontal — two buttons side-by-side, sharing the available width equally.
 * Useful for compact inline action pairs (e.g. Accept / Decline).
 */
export const Horizontal: Story = {
  render: () => (
    <ButtonGroup direction="horizontal">
      <Button colour="Primary" variant="Solid" size="Large">
        Accept
      </Button>
      <Button colour="Primary" variant="Outline" size="Large">
        Decline
      </Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Two buttons arranged in a horizontal row. Each button gets an equal share " +
          "of the available width with a 16 px gap between them.",
      },
    },
  },
};

/**
 * Pinned — vertical button group with a gradient background. The gradient fades
 * from opaque white at the bottom to transparent at the top, allowing content
 * to show through above the buttons while the group itself remains legible.
 * Use when the ButtonGroup is pinned to the bottom of a scrollable view.
 */
export const Pinned: Story = {
  render: () => (
    <div
      style={{
        position: "relative",
        height: 300,
        background: "linear-gradient(180deg, #f0f0f5 0%, #e0e0ea 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 0,
        overflow: "hidden",
        borderRadius: 16,
      }}
    >
      {/* Simulated scrollable content behind the button group */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: 16,
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              height: 48,
              borderRadius: 8,
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Pinned ButtonGroup — sits at the bottom with gradient bleed */}
      <div style={{ position: "relative", zIndex: 1, padding: 16, paddingTop: 0 }}>
        <ButtonGroup pinned={true}>
          <Button colour="Primary" variant="Solid" size="Large">
            Confirm
          </Button>
          <Button colour="Primary" variant="Outline" size="Large">
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vertical `ButtonGroup` with `pinned` enabled. The gradient background " +
          "fades from white (bottom) to transparent (top), visually floating the " +
          "buttons above the scrollable content without a hard divider.",
      },
    },
  },
};

/**
 * Three buttons — demonstrates that the group works with more than two children,
 * both vertically and horizontally.
 */
export const ThreeButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button colour="Primary" variant="Solid" size="Large">
        Primary action
      </Button>
      <Button colour="Primary" variant="Outline" size="Large">
        Secondary action
      </Button>
      <Button colour="Primary" variant="Text" size="Large">
        Tertiary action
      </Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Three buttons stacked vertically — Solid, Outline, and Text variants " +
          "showing a typical three-action hierarchy.",
      },
    },
  },
};
