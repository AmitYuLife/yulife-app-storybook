import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ModalTemplate, type ModalTemplateProps } from "./modal-template";
import { NavigationHeader } from "../../components/navigation-header";
import { Card, CardInfoContent } from "../../components/card";
import { Tile, TileGroup } from "../../components/tile";
import { Button, ButtonGroup } from "../../components/button";
import { Icon, LeftIcon, CloseIcon, RightIcon, CoverDetailsColourIcon } from "../../icons";
import { colors } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";

// ─── Asset imports ────────────────────────────────────────────────────────────

// Placeholder image shown inside the hero slot of the modal
import heroPlaceholder from "../../assets/challenge-hero/World=Forest, Challenge=Steps@3x.png";

// Full-screen game background shown behind the modal overlay in stories
import storyBackground from "../../assets/game-backgrounds/Earth/Planet=Earth, World=Forest, Challenge=None, Online=On, Section=YuCoin.png";

// ─── Placeholder hero ─────────────────────────────────────────────────────────

/**
 * Reusable placeholder hero used across all stories. Uses a challenge-hero
 * illustration as the background image. The ModalTemplate's hero wrapper
 * controls the height via CSS custom property — this element fills 100% of it
 * so the cover-fit image zooms in naturally during the pull-down gesture.
 *
 * The NavigationHeader uses default (light-mode) icon colours with no status
 * bar, appropriate for a modal that floats mid-screen rather than at the top
 * of the viewport.
 */
const PlaceholderHero = ({ onBack, onClose }: { onBack?: () => void; onClose?: () => void }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Challenge hero illustration — fills the wrapper set by ModalTemplate */}
    <img
      aria-hidden={true}
      src={heroPlaceholder}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />

    {/* NavigationHeader: back left, close right, no status bar, default colours */}
    <NavigationHeader
      showLogo={false}
      showStatusBar={false}
      leftSlot={
        <button
          aria-label="Back"
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: spacing[1],
            background: "none",
            border: "none",
            padding: 0,
            cursor: onBack ? "pointer" : "default",
          }}
        >
          <Icon svg={LeftIcon} size={24} color={colors.textPrimary} accessibilityLabel="" />
          <span
            style={{
              ...textStyles.body2Regular,
              lineHeight: `${textStyles.body2Regular.lineHeight}px`,
              color: colors.textPrimary,
              whiteSpace: "nowrap",
            }}
          >
            Back
          </span>
        </button>
      }
      rightSlot={
        <button
          aria-label="Close"
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            padding: 0,
            cursor: onClose ? "pointer" : "default",
          }}
        >
          <Icon svg={CloseIcon} size={24} color={colors.textPrimary} accessibilityLabel="" />
        </button>
      }
      style={{
        position: "relative",
        top: "auto",
        left: "auto",
        zIndex: "auto" as unknown as number,
        width: "100%",
      }}
    />
  </div>
);

// ─── Shared content blocks ────────────────────────────────────────────────────

const trailing = <Icon svg={RightIcon} size={24} color={colors.actionPrimary} accessibilityLabel="" />;

const ExampleCard = () => (
  <div style={{ width: "100%" }}>
    <Card>
      <CardInfoContent
        leftAsset="ColourIcon"
        leftSlot={<CoverDetailsColourIcon size={24} />}
        title="Your title here"
        description="Your description copy goes here. Should be no more than three lines of copy."
        rightSlot={trailing}
      />
    </Card>
  </div>
);

const ExampleTiles = () => (
  <TileGroup>
    <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="Label text goes here" />
    <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="Label text goes here" />
  </TileGroup>
);

const ExampleButtonGroup = () => (
  <ButtonGroup pinned={true}>
    <Button colour="Primary" variant="Solid" size="Large">
      Confirm
    </Button>
    <Button colour="Primary" variant="Outline" size="Large">
      Cancel
    </Button>
  </ButtonGroup>
);

// ─── Story decorator ──────────────────────────────────────────────────────────

/**
 * Wraps each story in a full-screen game background so the `transBlack`
 * overlay and modal composition are visible in context, matching how the
 * modal appears when rendered over the app's game/challenge screens.
 */
const withGameBackground = (Story: React.ComponentType) => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${storyBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    }}
  >
    <Story />
  </div>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<ModalTemplateProps> = {
  title: "Templates/ModalTemplate",
  component: ModalTemplate,
  decorators: [withGameBackground],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
## ModalTemplate

A bottom-anchored modal layout template that follows the same slot-based anatomy
as \`SinglePageTemplate\`: a **hero** at the top (not scrollable) and a scrollable
**MainLayout** content area below.

The modal renders over a full-screen \`transBlack\` overlay (\`rgba(0,0,0,0.64)\`)
and is anchored to the bottom of the viewport with a fixed \`zIndex: 1000\`, ensuring
it sits on top of all other page content. Its height is content-driven and capped at **90 vh** — at which point the
MainLayout body scrolls while the hero and optional pinned footer remain stationary.

### Composition

| Slot | Accepts | Purpose |
|------|---------|---------|
| \`hero\` | Any hero-like element | Non-scrollable top section (image, nav header, illustration) |
| \`children\` | Any \`ReactNode\` | Scrollable content area (cards, tiles, text…) |
| \`footer\` | Any \`ReactNode\` (optional) | Pinned bottom section for button groups |

### Navigation header pattern

The placeholder hero uses a \`NavigationHeader\` with \`showStatusBar={false}\` and default
(\`colors.textPrimary\`) icon colours:
- **Left slot** — \`LeftIcon\` + "Back" label
- **Right slot** — \`CloseIcon\`

### Pinned footer

When a \`footer\` is provided, it overlaps the bottom of the scrollable body via
a negative top margin. Content within the footer never scrolls — it is always
visible regardless of the MainLayout scroll position. Use a
\`<ButtonGroup pinned>\` inside the footer slot: the gradient fades over the
scroll content below, giving buttons a soft floating appearance without a hard
divider line.

### Figma reference

[YuLife App Storybook — Modal / Shell](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=12819-3175)
        `.trim(),
      },
    },
  },
  argTypes: {
    hero: { control: false },
    children: { control: false },
    footer: { control: false },
  },
};

export default meta;
type Story = StoryObj<ModalTemplateProps>;

// ─── Animated demo component ──────────────────────────────────────────────────

/**
 * Self-contained component that owns the open/close state for the Animated
 * story. Renders a centred trigger button on the game background (provided by
 * the story decorator) and a ModalTemplate wired to the `isOpen` prop so the
 * enter/exit transitions play on each interaction.
 */
const AnimatedDemo: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Trigger button — absolutely fills the decorator's position:relative wrapper */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button colour="Primary" variant="Solid" size="Large" onClick={open} style={{ minWidth: 160 }}>
          Open modal
        </Button>
      </div>

      <ModalTemplate
        isOpen={isOpen}
        onClose={close}
        hero={<PlaceholderHero onClose={close} />}
        footer={<ExampleButtonGroup />}
      >
        <ExampleTiles />
        <ExampleCard />
        <ExampleCard />
      </ModalTemplate>
    </>
  );
};

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default — modal with a challenge-hero placeholder image and a back/close
 * NavigationHeader (no status bar, default icon colours). Generic content
 * blocks below. No pinned footer.
 */
export const Default: Story = {
  args: {
    hero: <PlaceholderHero />,
    children: (
      <>
        <ExampleTiles />
        <ExampleCard />
        <ExampleCard />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default modal with a placeholder hero image and a small content body. " +
          "The modal height is driven by content and sits over the `transBlack` overlay. " +
          "The story canvas shows a game background behind the overlay to reflect real usage.",
      },
    },
  },
};

/**
 * WithPinnedFooter — demonstrates the optional `footer` slot. The button group
 * is pinned to the bottom of the modal with a shadow separator, remaining
 * visible regardless of scroll position.
 */
export const WithPinnedFooter: Story = {
  args: {
    hero: <PlaceholderHero />,
    children: (
      <>
        <ExampleTiles />
        <ExampleCard />
        <ExampleCard />
      </>
    ),
    footer: <ExampleButtonGroup />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Modal with a pinned `footer` slot containing a primary + outline button group. " +
          "The footer is always visible at the bottom of the modal, separated from the " +
          "scrollable body by a subtle top shadow.",
      },
    },
  },
};

/**
 * Animated — interactive demo showing the enter and exit transitions.
 * Tap "Open modal" to see the overlay fade in and the panel slide up from the
 * bottom. Tap the backdrop or the close button to see the panel slide down and
 * the overlay fade out. The game background behind the overlay reflects real
 * in-app context.
 */
export const Animated: Story = {
  render: () => <AnimatedDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive open/close demo. The overlay fades (`opacity 0.2s ease`) while " +
          "the modal panel slides up on enter and down on exit " +
          "(`transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)`). " +
          "Tap **Open modal** to trigger the enter animation; tap the backdrop or " +
          "close button to trigger the exit. Pass `isOpen` to `ModalTemplate` to " +
          "enable this animation in production — omitting it renders the modal " +
          "unconditionally with no transition.",
      },
    },
  },
};

/**
 * ScrollingContent — enough content to exceed the 90 vh max height, demonstrating
 * the scroll behaviour: the hero and pinned footer remain stationary while the
 * MainLayout body scrolls independently.
 */
export const ScrollingContent: Story = {
  args: {
    hero: <PlaceholderHero />,
    children: (
      <>
        <ExampleTiles />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </>
    ),
    footer: <ExampleButtonGroup />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tall content that exceeds the 90 vh cap. The MainLayout body scrolls independently " +
          "while the hero and pinned footer remain fixed. Use this to verify scroll behaviour " +
          "and ensure the footer is always accessible.",
      },
    },
  },
};
