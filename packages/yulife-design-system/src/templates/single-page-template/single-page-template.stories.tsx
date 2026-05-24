import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { SinglePageTemplate, type SinglePageTemplateProps } from "./single-page-template";
import { HeroProductDetails } from "../../components/hero";
import { Card, CardInfoContent } from "../../components/card";
import { Tile, TileGroup } from "../../components/tile";
import { Button, ButtonGroup } from "../../components/button";
import { defaultHeroBackground, BupaLogo, BupaPipeSeparator } from "../../assets/insurance-products";
import YuLifeSquareMonoSvg from "../../icons/svg/YuLifeSquareMono.svg?react";
import { Icon, RightIcon, CoverDetailsColourIcon } from "../../icons";
import { palette, colors } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";

// ─── Shared helpers ──────────────────────────────────────────────────────────

const BupaYuLifeLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 0, height: 24 }}>
    <BupaLogo width={60} height={17} style={{ display: "block", flexShrink: 0 }} />
    <BupaPipeSeparator width={1} height={20} style={{ display: "block", flexShrink: 0, margin: "0 8px" }} />
    <YuLifeSquareMonoSvg width={20} height={20} style={{ display: "block", flexShrink: 0 }} />
  </div>
);

const trailing = <Icon svg={RightIcon} size={24} color={palette.pink700} accessibilityLabel="" />;

// ─── Default example content ──────────────────────────────────────────────────

const ExampleMainContent = () => (
  <>
    {/* Tile row — using TileGroup DS component */}
    <TileGroup>
      <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="Label text goes here maximum..." />
      <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="Label text goes here maximum..." />
    </TileGroup>

    {/* Placeholder card */}
    <div style={{ width: "100%" }}>
      <Card />
    </div>

    {/* Info card */}
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

    {/* Button group — inline within scroll content (no pinned footer) */}
    <ButtonGroup>
      <Button colour="Primary" variant="Solid" size="Large">
        Button text
      </Button>
      <Button colour="Primary" variant="Outline" size="Large">
        Button text
      </Button>
    </ButtonGroup>
  </>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<SinglePageTemplateProps> = {
  title: "Templates/SinglePageTemplate",
  component: SinglePageTemplate,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
## SinglePageTemplate

A generic single-page layout template that pairs a full-bleed **Hero** at the
top with a scrollable **MainLayout** content container below. The MainLayout
overlaps the hero with rounded top corners and slides over the hero as the user
scrolls — creating a subtle parallax effect using pure CSS.

### Composition

| Slot | Accepts | Purpose |
|------|---------|---------|
| \`hero\` | Any \`Hero\` variant (\`HeroProductDetails\`, custom, etc.) | Full-bleed page header |
| \`children\` | Any \`ReactNode\` | Scrollable content area (cards, tiles, buttons, lists…) |
| \`footer\` | Any \`ReactNode\` (optional) | Pinned bottom overlay for \`ButtonGroup pinned\` |

### Parallax behaviour

The hero stays pinned at the top of the viewport (\`position: sticky\`) while
the white MainLayout container scrolls over it with rounded top corners,
creating a natural card-over-image parallax effect.

### Pinned footer

When a \`footer\` is provided, it is rendered as an absolute overlay at the
bottom of the template — always visible regardless of scroll position. Use a
\`<ButtonGroup pinned>\` inside the footer slot: the gradient fades over
scrollable content beneath, giving the buttons a soft floating appearance.
Extra bottom padding is automatically added to the scrollable content so the
last item can be scrolled fully above the footer.

### Figma reference

[YuLife App Storybook — SinglePageTemplate](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10971-1317)

### Real-world usage

See **Pages / Health Cash Plan** for a fully worked product page example.
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
type Story = StoryObj<SinglePageTemplateProps>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default — demonstrates the template with `HeroProductDetails` and a set of
 * generic content blocks (tiles, card, info card, buttons). Scroll to observe
 * the parallax overlap effect.
 */
export const Default: Story = {
  args: {
    hero: (
      <HeroProductDetails
        backgroundImage={defaultHeroBackground}
        logo={<BupaYuLifeLogo />}
        heading="Life Insurance"
        flagLabel="Core Cover"
      />
    ),
    children: <ExampleMainContent />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Generic composition with `HeroProductDetails` and placeholder content " +
          "(tile row, card, info card, button group). Scroll to observe the " +
          "parallax overlap behaviour.",
      },
    },
  },
};

/**
 * WithPinnedFooter — demonstrates the `footer` slot with a pinned `ButtonGroup`.
 * The footer is an absolute overlay at the bottom of the screen, always visible
 * regardless of scroll position. The `ButtonGroup` gradient fades over the
 * scrollable content below, giving the buttons a soft floating appearance.
 */
export const WithPinnedFooter: Story = {
  args: {
    hero: (
      <HeroProductDetails
        backgroundImage={defaultHeroBackground}
        logo={<BupaYuLifeLogo />}
        heading="Life Insurance"
        flagLabel="Core Cover"
      />
    ),
    children: (
      <>
        <TileGroup>
          <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="Label text goes here maximum..." />
          <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="Label text goes here maximum..." />
        </TileGroup>
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
      </>
    ),
    footer: (
      <ButtonGroup pinned={true}>
        <Button colour="Primary" variant="Solid" size="Large">
          Continue
        </Button>
        <Button colour="Primary" variant="Outline" size="Large">
          Cancel
        </Button>
      </ButtonGroup>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Template with a pinned `footer` slot containing a `ButtonGroup` with " +
          "`pinned` enabled. The footer floats above the scrollable content at all " +
          "times. Scroll down to see the gradient fade the last content item beneath " +
          "the buttons.",
      },
    },
  },
};

/**
 * Minimal — hero only with a single line of body copy. Shows the raw template
 * chassis and the MainLayout overlapping the hero's bottom edge.
 */
export const Minimal: Story = {
  args: {
    hero: <HeroProductDetails backgroundImage={defaultHeroBackground} heading="Life Insurance" />,
    children: (
      <p
        style={{
          ...textStyles.body1Regular,
          lineHeight: `${textStyles.body1Regular.lineHeight}px`,
          letterSpacing: `${textStyles.body1Regular.letterSpacing}px`,
          color: colors.textPrimary,
          margin: 0,
        }}
      >
        Minimal content — the MainLayout still overlaps the hero with rounded corners.
      </p>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Minimal usage — a single text paragraph as children, " +
          "demonstrating the overlap without additional components.",
      },
    },
  },
};
