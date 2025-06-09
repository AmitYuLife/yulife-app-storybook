import { SduiAction } from "@redux/user/user.types";
import { Image, VariableRemoteImage } from "@redux/_core/types";
import { Game2048Options } from "@components/containers/game/2048/types";

enum HealthSmokingStreakCarouselItemStatus {
  Claimed = "claimed",
  Completed = "completed",
  Pending = "pending",
}

interface LabelValuePair {
  label: string;
  value: string;
}

export interface HealthSmokingStreakCarouselItem {
  id: string;
  backgroundColour: string;
  buttonLabel?: string;
  icon: Image;
  onPress?: SduiAction;
  overlayIcon?: Image;
  position?: number;
  status: HealthSmokingStreakCarouselItemStatus;
  title: string;
  titleColour?: string;
  tips?: HealthSmokingStateTip[];
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
    tips?: HealthSmokingStateTip[];
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
    yuCoinAwarded?: number;
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
  icon?: Image;
}

interface GameIntroModal {
  title: string;
  ctaLabel: string;
  image?: VariableRemoteImage;
  displayDuration?: number;
  closeOnBlur?: boolean;
  onDismiss?: SduiAction;
}

export interface HealthSmokingState {
  autoClaimedStreakDaysCopy?: string;
  claimedStreakDay?: number;
  heading: string;
  headerButtonText?: string;
  backgroundColour: string;
  backgroundImage: Image;
  streakPastMax?: string;
  smokingStreakCarousel?: HealthSmokingStreakCarouselItem[];
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
    backgroundImage: Image;
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
  gameIntroModal?: GameIntroModal;
  cravingsManaged?: number;
  gameOptions?: Game2048Options;
}
