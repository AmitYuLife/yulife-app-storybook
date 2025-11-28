export interface IProps {
  componentId: string;
  isDoneToday: boolean;
  onPressCtaPrimary?: () => void;
  reward: string;
  onPressCtaSecondary: (() => void) | null;
  streakCompleted: number;
  streakMax: number;
  nextStreakAvailableAt: string;
  type: string;
}

export type Props = IProps;
