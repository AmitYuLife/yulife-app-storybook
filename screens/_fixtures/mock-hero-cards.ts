import { HeroCard, HeroCardHeaderButtonState, HeroCardProgressMilestoneState } from "@utils/heroCards";

const noopPress = {} as HeroCard["onPress"];

/** Step-count event card — desert theme from E2E "Walk 10k this week" scenarios. */
export const MOCK_WALK_10K_HERO_CARD: HeroCard = {
  id: "hero-walk-10k",
  header: {
    heading: "Walk 10k this week",
    subheading: [{ text: "4,000 / 10,000 steps" }],
  },
  body: {
    progress: {
      currentProgress: 4000,
      maxProgress: 10000,
      milestones: [
        { progress: 2500, state: HeroCardProgressMilestoneState.Active },
        { progress: 5000, state: HeroCardProgressMilestoneState.Emphasized },
        { progress: 7500, state: HeroCardProgressMilestoneState.Inactive },
        { progress: 10000, state: HeroCardProgressMilestoneState.Inactive },
      ],
    },
  },
  theme: {
    backgroundColor: "#FFFCDE",
    borderColor: "#F5E998",
    fontColor: "#5A5A5C",
    boldTextColor: "#464647",
  },
  onPress: noopPress,
};

/** Multi-milestone challenge event card with a "New" badge. */
export const MOCK_THREE_STAR_HERO_CARD: HeroCard = {
  id: "hero-three-star",
  badge: { text: "New" },
  header: {
    heading: "3 star challenges streak",
    subheading: [{ text: "1 / 3 completed" }],
  },
  body: {
    progress: {
      currentProgress: 1,
      maxProgress: 3,
      milestones: [
        { progress: 1, state: HeroCardProgressMilestoneState.Active },
        { progress: 2, state: HeroCardProgressMilestoneState.Emphasized },
        { progress: 3, state: HeroCardProgressMilestoneState.Inactive },
      ],
    },
  },
  onPress: noopPress,
};

/** Journey / survey card with a header CTA button instead of a progress bar. */
export const MOCK_JOURNEY_HERO_CARD: HeroCard = {
  id: "hero-journey",
  header: {
    heading: "Money Mastery",
    subheading: [{ text: "Complete your weekly reflection" }],
    button: {
      text: "Start",
      state: HeroCardHeaderButtonState.Default,
    },
  },
  onPress: noopPress,
};

/** Tournament event card with footer metadata. */
export const MOCK_TOURNAMENT_HERO_CARD: HeroCard = {
  id: "hero-tournament",
  header: {
    heading: "Step to it!",
    subheading: [{ text: "Round 2 · 3 days left" }],
  },
  footer: {
    left: { text: "12 participants" },
    right: { text: "Top 3 win prizes" },
  },
  onPress: noopPress,
};

export const MOCK_HERO_CARDS: HeroCard[] = [MOCK_WALK_10K_HERO_CARD, MOCK_THREE_STAR_HERO_CARD, MOCK_JOURNEY_HERO_CARD];
