import { RemoteImage } from "@graphql/__generated";
import { SduiAction } from "@redux/user/user.types";

enum GoalRewardStatus {
  Claimed = "claimed",
  Completed = "completed",
  Pending = "pending",
}

interface LabelValuePair {
  label: string;
  value: string;
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
    chipsTitle: string;
    chips: {
      label: string;
      value: string;
      colour: string;
    }[];
  };
  showMilestoneUnlocked: boolean;
  milestoneUnlocked: {
    title: string;
    description: string;
    colour: string;
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

interface Copy {
  edit: {
    title: string;
    description?: string;
    cta: string;
  };
}

export interface HealthSmokingStateTip {
  id: string;
  title?: string;
  description?: string;
  icon?: RemoteImage;
}

export interface HealthSmokingState {
  autoClaimedStreakDaysCopy?: string;
  claimedStreakDay?: number;
  heading: string;
  headerButtonText?: string;
  backgroundColour: string;
  backgroundImage: RemoteImage;
  streakPastMax?: string;
  streakCarousel?: MobileGameEnterpriseGoalReward[];
  currentStreak: number;
  lastStreakUpdate?: string;
  maxStreak: number;
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
  sponsorship?: {
    title: string;
    description?: string;
    cta: string;
    backgroundImage: RemoteImage;
  };
  tips: HealthSmokingStateTip[];
  triggers: LabelValuePair[];
  defaultTriggers: LabelValuePair[];
  customTriggers: LabelValuePair[];
  triggersCopy: Copy;
  reasons: LabelValuePair[];
  defaultReasons: LabelValuePair[];
  customReasons: LabelValuePair[];
  reasonsCopy: Copy;
  showStreakCheckInOverlay: boolean;
  streakCheckInOverlay: StreakCheckInOverlay;
  streakLapsedAction?: SduiAction;
  optOutText: string;
  optOutModal: HealthSmokingOptOutModal;
  isActive: boolean;
  updatedToday: boolean;
  streakProgressAnimation: {
    items: Array<{
      animation: string;
      end: number;
      start: number;
    }>;
  };
}
