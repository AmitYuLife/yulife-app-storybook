import { RemoteImage } from "@graphql/__generated";
import { SduiAction } from "@redux/user/user.types";

enum GoalRewardStatus {
  Claimed = "claimed",
  Completed = "completed",
  Pending = "pending",
}

export interface MobileGameEnterpriseGoalReward {
  backgroundColour: string;
  buttonLabel?: string;
  icon: RemoteImage;
  id: string;
  onPress?: SduiAction;
  overlayIcon?: RemoteImage;
  position: number;
  status: GoalRewardStatus;
  title: string;
  titleColour?: string;
}

export interface HealthSmokingMilestoneCarousel {
  id: string;
  image: {
    id: string;
    uri: string;
  };
  completed: boolean;
  popup: {
    title: string;
    description?: string;
    label?: string;
    cta: string;
  };
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
  streakCarousel?: MobileGameEnterpriseGoalReward[];
  currentStreak: number;
  journeySoFarHeading: string;
  milestoneCarousel: HealthSmokingMilestoneCarousel[];
  totalAvoided: {
    image: {
      id?: string;
      uri: string;
    };
    title: string;
    value: string;
  };
  totalSaved: {
    image: {
      id?: string;
      uri: string;
    };
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
