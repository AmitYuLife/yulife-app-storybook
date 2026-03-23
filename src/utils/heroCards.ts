import {
  SduiAction,
  HeroCard as GqlHeroCard,
  HeroCardHeaderButtonState as GqlButtonState,
  HeroCardProgressMilestoneState as GqlMilestoneState,
} from "@graphql/__generated";

export type HeroCardBadge = { text?: string; icon?: string };

export enum HeroCardHeaderButtonState {
  Default = "DEFAULT",
  Disabled = "DISABLED",
  DisabledMonochrome = "DISABLED_MONOCHROME",
}

export type HeroCardHeader = {
  heading: string;
  image?: { uri?: string };
  subheadingMargin?: number;
  headingWidth?: number;
  subheading?: { text?: string; icon?: string }[];
  button?: { text?: string; icon?: string; state: HeroCardHeaderButtonState; onPress?: () => void };
  fontColor?: string;
};

export enum HeroCardProgressMilestoneVariant {
  Star = "STAR",
  Tick = "TICK",
}

export enum HeroCardProgressMilestoneState {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Emphasized = "EMPHASIZED",
}

export type HeroCardTheme = {
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  boldTextColor: string;
};

export type HeroCardBody = {
  progress?: {
    currentProgress: number;
    maxProgress: number;
    milestones?: {
      progress?: number;
      state: HeroCardProgressMilestoneState;
    }[];
  };
  progressWidth?: number;
  scaleRightImage?: boolean;
  rightImage?: {
    image: { uri?: string };
    width: number;
    height?: number;
  };
  backgroundImage?: { uri?: string };
  cardWidth?: number;
  cardPadding?: number;
};

export type HeroCardFooter = {
  left?: {
    text?: string;
    icon?: string;
  };
  right?: {
    text?: string;
    icon?: string;
  };
  fontColor?: string;
};

export type HeroCard = {
  id: string;
  badge?: HeroCardBadge;
  theme?: HeroCardTheme;
  header?: HeroCardHeader;
  body?: HeroCardBody;
  footer?: HeroCardFooter;
  currentLevel?: number;
  yuniversalMap?: number;
  onPress: SduiAction;
  activePeriod?: { startDate?: string; endDate?: string };
  width?: number;
};

function castButtonState(state: GqlButtonState): HeroCardHeaderButtonState {
  switch (state) {
    case GqlButtonState.Default:
      return HeroCardHeaderButtonState.Default;
    case GqlButtonState.Disabled:
      return HeroCardHeaderButtonState.Disabled;
    case GqlButtonState.DisabledMonochrome:
      return HeroCardHeaderButtonState.DisabledMonochrome;
  }
}

function castMilestoneState(state: GqlMilestoneState): HeroCardProgressMilestoneState {
  switch (state) {
    case GqlMilestoneState.Active:
      return HeroCardProgressMilestoneState.Active;
    case GqlMilestoneState.Emphasized:
      return HeroCardProgressMilestoneState.Emphasized;
    case GqlMilestoneState.Inactive:
      return HeroCardProgressMilestoneState.Inactive;
  }
}

export function mapHeroCard(item: GqlHeroCard): HeroCard {
  return {
    id: item.id,
    badge: {
      icon: item.badge?.icon,
      text: item.badge?.text,
    },
    theme: item?.theme,
    header: {
      heading: item.header?.heading,
      subheadingMargin: item.header?.subheadingMargin,
      headingWidth: item.header?.headingWidth,
      subheading: item.header?.subheading,
      image: item.header?.image,
      button: {
        text: item.header?.button?.text,
        state: castButtonState(item.header?.button?.state),
        icon: item.header?.button?.icon,
      },
    },
    body: {
      progress: {
        currentProgress: item.body?.progress?.currentProgress,
        maxProgress: item.body?.progress?.maxProgress,
        milestones: item.body?.progress?.milestones.map((milestone) => ({
          progress: milestone.progress,
          state: castMilestoneState(milestone.state),
        })),
      },
      scaleRightImage: item.body?.scaleRightImage,
      rightImage: item.body?.rightImage,
      backgroundImage: item.body?.backgroundImage,
    },
    onPress: item.onPress,
    footer: {
      left: {
        text: item.footer?.left?.text,
        icon: item.footer?.left?.icon,
      },
      right: {
        text: item.footer?.right?.text,
        icon: item.footer?.right?.icon,
      },
    },
  };
}
