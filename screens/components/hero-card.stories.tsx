import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HeroCard from "@molecules/hero-card/hero-card";
import HeroCards from "@molecules/hero-card/hero-cards";
import { CARD_WIDTH } from "@molecules/hero-card/constants";
import { Box } from "@atoms";
import { logAction } from "../_utils/mock-actions";
import {
  MOCK_HERO_CARDS,
  MOCK_JOURNEY_HERO_CARD,
  MOCK_THREE_STAR_HERO_CARD,
  MOCK_TOURNAMENT_HERO_CARD,
  MOCK_WALK_10K_HERO_CARD,
} from "../_fixtures/mock-hero-cards";
import type { IHealthPermissionPanelProps } from "@components/molecules/health-permission-panel/health-permission-panel";
import { appComponentPreviewDecorator } from "../../.storybook/app-component-preview";

const heroCardStoryArgs = {
  width: CARD_WIDTH,
  currentLevel: 10,
  yuniversalMap: 0,
  onPress: logAction("hero-card-press"),
};

const meta = {
  title: "Layout/HeroCard",
  component: HeroCard,
  tags: ["autodocs"],
  decorators: [appComponentPreviewDecorator],
  parameters: {
    layout: "centered",
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      canvas: { withToolbar: false },
      description: {
        component: [
          "Horizontal event card shown on the YuCoin (Daily Steps) screen. Displays active challenges, journeys, tournaments, and health prompts in a swipeable carousel (`HeroCards`).",
          "",
          "**When to use:** Surfacing time-bound events, passive step goals, survey journeys, or tournament progress on the home tab.",
          "**When NOT to use:** Static info callouts (use `InfoCard`), full-screen event detail (use event dialog), or YuScreen SDUI banners (use `HeroCardSection`).",
          "",
          "**Commonly used with:** `HeroCards`, `DailyStepsOnline`, `ProgressBar`.",
          "**Theme-aware:** Yes — default colours come from `theme.dailyStepsScreen.eventPanel`; per-card `theme` overrides are supported.",
          "",
          '**App source:** `src/components/molecules/hero-card/`. E2E tests refer to this as an "event card" (`EVENT_CARD` test IDs).',
        ].join("\n"),
      },
    },
  },
  argTypes: {
    id: { table: { disable: true } },
    width: { table: { disable: true } },
    currentLevel: { table: { disable: true } },
    yuniversalMap: { table: { disable: true } },
    header: { table: { disable: true } },
    body: { table: { disable: true } },
    footer: { table: { disable: true } },
    badge: { table: { disable: true } },
    theme: { table: { disable: true } },
    onPress: { table: { disable: true } },
  },
  args: {
    ...MOCK_WALK_10K_HERO_CARD,
    ...heroCardStoryArgs,
  },
} satisfies Meta<typeof HeroCard>;

export default meta;
type Story = StoryObj<typeof HeroCard>;

export const Default: Story = {};

export const WithProgress: Story = {
  args: { ...MOCK_WALK_10K_HERO_CARD, ...heroCardStoryArgs },
  parameters: { docs: { disable: true } },
};

export const WithBadge: Story = {
  args: { ...MOCK_THREE_STAR_HERO_CARD, ...heroCardStoryArgs },
  parameters: { docs: { disable: true } },
};

export const WithHeaderButton: Story = {
  args: { ...MOCK_JOURNEY_HERO_CARD, ...heroCardStoryArgs },
  parameters: { docs: { disable: true } },
};

export const WithFooter: Story = {
  args: { ...MOCK_TOURNAMENT_HERO_CARD, ...heroCardStoryArgs },
  parameters: { docs: { disable: true } },
};

export const AllVariants: Story = {
  parameters: { docs: { disable: true } },
  render: () => (
    <Box gap={24} alignItems="center">
      <HeroCard {...MOCK_WALK_10K_HERO_CARD} width={CARD_WIDTH} currentLevel={10} yuniversalMap={0} />
      <HeroCard {...MOCK_THREE_STAR_HERO_CARD} width={CARD_WIDTH} currentLevel={10} yuniversalMap={0} />
      <HeroCard {...MOCK_JOURNEY_HERO_CARD} width={CARD_WIDTH} currentLevel={10} yuniversalMap={0} />
      <HeroCard {...MOCK_TOURNAMENT_HERO_CARD} width={CARD_WIDTH} currentLevel={10} yuniversalMap={0} />
    </Box>
  ),
};

export const Carousel: StoryObj<typeof HeroCards> = {
  parameters: {
    layout: "fullscreen",
    docs: { disable: true },
  },
  render: () => (
    <HeroCards
      heroCards={MOCK_HERO_CARDS}
      healthPermissions={undefined as unknown as Omit<IHealthPermissionPanelProps, "width">}
    />
  ),
};

export const Playground: Story = {
  parameters: { docs: { disable: true }, controls: { disable: false } },
};
