import { SduiAction } from "@redux/user/user.types";

export interface HealthSmokingStreakCarousel {
  id: string;
  title: string;
  completed: boolean;
}

export interface HealthSmokingMilestoneCarousel {
  id: string;
  title: string;
  completed: boolean;
}

export interface StreakCheckInOverlay {
  title: string;
  failCta: string;
  continueCta: string;
  celebration: {
    title: string;
    description?: string;
    cta: string;
  };
  showMilestoneUnlocked: boolean;
  milestoneUnlocked: {
    title: string;
    image: {
      id?: string;
      uri: string;
    };
    statistics: string[];
    infoBox: {
      title: string;
      description: string;
    };
    days: number;
    cta: string;
  };
}

export interface HealthSmokingOptOutModal {
  image: {
    id?: string;
    uri: string;
  };
  title: string;
  description: string;
  buttonText: string;
  buttonAction: SduiAction;
  backButtonText: string;
}

export interface HealthSmokingState {
  heading: string;
  headerButtonText?: string;
  streakCarousel?: HealthSmokingStreakCarousel[];
  currentStreak: number;
  journeySoFarHeading: string;
  milestoneCarousel: HealthSmokingMilestoneCarousel[];
  totalAvoided: {
    title: string;
    value: string;
  };
  totalSaved: {
    title: string;
    value: string;
  };
  triggers: string[];
  reasons: string[];
  showStreakCheckInOverlay: boolean;
  streakCheckInOverlay: StreakCheckInOverlay;
  optOutText: string;
  optOutModal: HealthSmokingOptOutModal;
  isActive: boolean;
  updatedToday: boolean;
}
