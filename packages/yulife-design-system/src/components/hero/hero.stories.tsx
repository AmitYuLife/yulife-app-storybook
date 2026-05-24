import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Hero } from "./hero";
import { defaultHeroBackground, heroBackgrounds } from "../../assets/insurance-products";
import { textStyles } from "../../tokens/typography";
import { palette } from "../../tokens/colors";
import { spacing } from "../../tokens/spacing";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Hero> = {
  title: "Layout/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
## Hero

The structural **chassis** for full-bleed page hero images. Renders a fixed
375 × 290 px container with:

1. A **cover-fit background photograph** with a \`rgba(0,0,0,0.4)\` dark scrim for legibility.
2. A dark-mode **NavigationHeader** with a close (×) button in the right slot.
3. An open **content slot** (\`children\`) filling the lower portion of the hero.

Hero is a low-level primitive — use a variant component such as
\`HeroProductDetails\` to fill the content slot, or pass custom markup directly.

### Variants

| Variant | Purpose |
|---------|---------|
| \`HeroProductDetails\` | Insurance product page heroes — logo, heading, flag label. |

### Usage

\`\`\`tsx
import { Hero } from "@/components/hero";
import { defaultHeroBackground } from "@/assets/insurance-products";

<Hero backgroundImage={defaultHeroBackground} onClose={() => router.back()}>
  {/* slot your variant content here */}
</Hero>
\`\`\`
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
    onClose: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

// ─── Custom content helper ────────────────────────────────────────────────────

/** Example of bespoke content slotted directly into Hero. */
const ExampleContent = () => (
  <div
    style={{
      padding: `${spacing[2]}px ${spacing[8]}px ${spacing[12]}px`,
      display: "flex",
      flexDirection: "column",
      gap: spacing[2],
    }}
  >
    <p
      style={{
        ...textStyles.heading2,
        lineHeight: `${textStyles.heading2.lineHeight}px`,
        letterSpacing: `${textStyles.heading2.letterSpacing}px`,
        color: palette.neutralWhite,
        margin: 0,
      }}
    >
      Custom hero content
    </p>
    <p
      style={{
        ...textStyles.label1Regular,
        lineHeight: `${textStyles.label1Regular.lineHeight}px`,
        letterSpacing: `${textStyles.label1Regular.letterSpacing}px`,
        color: palette.neutralWhite,
        margin: 0,
        opacity: 0.8,
      }}
    >
      Slot any markup into the Hero content area via children.
    </p>
  </div>
);

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Base Hero with custom children — demonstrates the open content slot.
 * In practice, pass a variant component (e.g. `HeroProductDetails`) as children.
 */
export const Default: Story = {
  args: {
    backgroundImage: defaultHeroBackground,
    children: <ExampleContent />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Base Hero chassis with custom content in the children slot. " +
          "Use `HeroProductDetails` (or a future variant) for production use.",
      },
    },
  },
};

/** Hero with no content children — shows the raw chassis. */
export const EmptySlot: Story = {
  args: {
    backgroundImage: defaultHeroBackground,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero with no children — illustrates the chassis in isolation: " +
          "background image, scrim, and navigation bar.",
      },
    },
  },
};
