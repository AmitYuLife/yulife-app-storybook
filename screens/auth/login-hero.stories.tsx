import { useEffect, type ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LoginHeroScreen from "@screens/login/login-hero/login-hero.screen";
import { gql } from "@graphql/__generated";
import { ROUTES } from "@navigation/constants";
import { storyApolloClient } from "../../.storybook/story-apollo";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { MOCK_POTENTIAL_REWARDS } from "../_fixtures/mock-tier1";

const preloadPotentialRewards = () => {
  storyApolloClient.cache.writeQuery({
    query: gql("GetPotentialRewardsDocument"),
    variables: { limit: 5 },
    data: { getPotentialRewards: MOCK_POTENTIAL_REWARDS },
  });
};

const LoginHeroStory = (args: ComponentProps<typeof LoginHeroScreen>) => {
  useEffect(() => {
    preloadPotentialRewards();
  }, []);

  return <LoginHeroScreen {...args} />;
};

const meta = {
  title: "Screens/Auth/LoginHero",
  ...createScreenMeta({
    title: "Auth/LoginHero",
    description: [
      "Pre-auth landing screen with animated reward chest and login CTA. Fetches potential rewards via Apollo.",
      "",
      "**When to use:** First screen shown to unauthenticated users (when hero login is enabled).",
      "**Commonly used with:** `FullScreenHero`, `AnimatedChest`, `GetPotentialRewards` query.",
      "**Theme-aware:** Yes — background image from active theme.",
    ].join("\n"),
    component: LoginHeroScreen,
    route: ROUTES.loginHero,
    screenPath: "src/components/screens/login/login-hero/login-hero.screen.tsx",
  }),
  argTypes: {
    onLoginEmailPress: { action: "login-email", description: "Navigates to the email login step." },
  },
  render: (args: ComponentProps<typeof LoginHeroScreen>) => <LoginHeroStory {...args} />,
} satisfies Meta<typeof LoginHeroScreen>;

export default meta;
type Story = StoryObj<typeof LoginHeroScreen>;

const baseArgs = {
  onLoginEmailPress: logAction("login-email"),
};

export const Default: Story = { args: baseArgs };

export const WithPotentialRewards: Story = {
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: "Apollo cache is preloaded with five potential reward logos for the animated chest.",
      },
    },
  },
};

export const Playground: Story = { args: baseArgs };
