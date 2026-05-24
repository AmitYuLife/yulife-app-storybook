import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroProductDetails } from "./hero-product-details";
import {
  defaultHeroBackground,
  heroBackgrounds,
  CoveaLogo,
  BupaLogo,
  BupaPipeSeparator,
} from "../../assets/insurance-products";
import YuLifeSquareMonoSvg from "../../icons/svg/YuLifeSquareMono.svg?react";

// ─── Logo helpers ─────────────────────────────────────────────────────────────

/**
 * Bupa + YuLife co-brand logo row.
 * Matches Figma layout: Bupa wordmark · pipe divider · YuLife mark.
 */
const BupaYuLifeLogo = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 0,
      height: 24,
    }}
  >
    {/* Bupa wordmark — natural aspect is ~60×17; preserveAspectRatio="none" in
        the SVG means we must set both axes to avoid stretching. */}
    <BupaLogo width={60} height={17} style={{ display: "block", flexShrink: 0 }} />
    {/* Vertical pipe separator */}
    <BupaPipeSeparator width={1} height={20} style={{ display: "block", flexShrink: 0, margin: "0 8px" }} />
    {/* YuLife square mono mark */}
    <YuLifeSquareMonoSvg width={20} height={20} style={{ display: "block", flexShrink: 0 }} />
  </div>
);

/** Covéa standalone logo — white, sized to 32px height. */
const CoveaLogoEl = () => <CoveaLogo width={40} height={32} style={{ display: "block" }} />;

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof HeroProductDetails> = {
  title: "Layout/Hero/HeroProductDetails",
  component: HeroProductDetails,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
## HeroProductDetails

A \`Hero\` variant for **Insurance Product** page templates. Composes the base
\`Hero\` chassis (cover image, dark scrim, close button navigation) with a
product-specific content layout:

| Element | Required | Notes |
|---------|----------|-------|
| \`backgroundImage\` | ✓ | Imported PNG/JPG URL — use assets from \`insurance-products\` |
| \`heading\` | ✓ | Product name — max two lines at Heading 2 (28 px Bariol Bold) |
| \`logo\` | — | Partner / co-brand logo \`ReactNode\`. 32 px tall container. |
| \`flagLabel\` | — | Short pill badge e.g. "Core Cover" |
| \`onClose\` | — | Handler for the close (×) button |

### Logo composition

The \`logo\` prop accepts any \`ReactNode\`, giving full flexibility for
single-brand and co-brand layouts. Import partner logo SVGs from
\`src/assets/insurance-products\` and compose them inline:

\`\`\`tsx
import { BupaLogo, BupaPipeSeparator, CoveaLogo } from "@/assets/insurance-products";
import YuLifeSquareMonoSvg from "@/icons/svg/YuLifeSquareMono.svg?react";

// Co-brand
const coLogo = (
  <div style={{ display: "flex", alignItems: "center", height: 24 }}>
    <BupaLogo width={60} height={24} />
    <BupaPipeSeparator width={2} height={24} style={{ margin: "0 8px" }} />
    <YuLifeSquareMonoSvg width={20} height={20} />
  </div>
);

// Single brand
const singleLogo = <CoveaLogo width={40} height={32} />;
\`\`\`

### Figma reference

[YuLife App Storybook — HeroProductDetails](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-1492)
        `.trim(),
      },
    },
  },
  argTypes: {
    backgroundImage: {
      control: "select",
      options: Object.keys(heroBackgrounds),
      mapping: heroBackgrounds,
      description: "Hero background photograph.",
    },
    logo: { control: false },
    onClose: { control: false },
    heading: {
      control: "text",
      description: "Product name. Max two lines at Heading 2 scale.",
    },
    flagLabel: {
      control: "text",
      description: "Optional pill badge text.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroProductDetails>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default presentation — Bupa + YuLife co-brand logo with a flag label.
 * Matches the primary Figma variant.
 */
export const CoBrand: Story = {
  args: {
    backgroundImage: defaultHeroBackground,
    logo: <BupaYuLifeLogo />,
    heading: "Life Insurance",
    flagLabel: "Core Cover",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Bupa + YuLife co-brand logo variant — the primary `HeroProductDetails` " +
          "composition as shown in the Figma spec.",
      },
    },
  },
};

/**
 * Single-brand variant with the Covéa logo.
 */
export const CoveaBrand: Story = {
  args: {
    backgroundImage: defaultHeroBackground,
    logo: <CoveaLogoEl />,
    heading: "Life Insurance",
    flagLabel: "Core Cover",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Single insurer logo (Covéa) — demonstrates swapping the `logo` prop " + "for a different partner brand.",
      },
    },
  },
};

/**
 * Heading and flag only — no logo.
 */
export const NoLogo: Story = {
  args: {
    backgroundImage: defaultHeroBackground,
    heading: "Life Insurance",
    flagLabel: "Core Cover",
  },
  parameters: {
    docs: {
      description: {
        story: "Omitting the `logo` prop removes the logo row entirely. " + "The heading and flag label remain.",
      },
    },
  },
};

/**
 * Logo and heading only — no flag label.
 */
export const NoFlag: Story = {
  args: {
    backgroundImage: defaultHeroBackground,
    logo: <CoveaLogoEl />,
    heading: "Life Insurance",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Omitting `flagLabel` removes the pill badge. " + "Use when no product tier or category label is needed.",
      },
    },
  },
};

/**
 * Long product name — verifies two-line clamping behaviour.
 */
export const LongHeading: Story = {
  args: {
    backgroundImage: defaultHeroBackground,
    logo: <BupaYuLifeLogo />,
    heading: "Total length of name no longer than two lines",
    flagLabel: "Core Cover",
  },
  parameters: {
    docs: {
      description: {
        story: "Heading text is clamped to two lines. Copy beyond two lines is " + "hidden with overflow ellipsis.",
      },
    },
  },
};

/**
 * Interactive playground — tweak every text prop via Controls.
 */
export const Playground: Story = {
  args: {
    backgroundImage: defaultHeroBackground,
    logo: <CoveaLogoEl />,
    heading: "Life Insurance",
    flagLabel: "Core Cover",
  },
  parameters: {
    docs: {
      description: {
        story: "Tweak heading and flagLabel via the Controls panel.",
      },
    },
  },
};
