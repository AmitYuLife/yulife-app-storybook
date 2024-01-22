import { DETOX_ENABLED } from "@services/socket";
import { getTimeRemaining } from "@utils";
import { useEffect, useState } from "react";

interface UseTimerProps {
  nextStreakAvailableAt: string;
  streakMax: number;
  streakCompleted: number;
  streakAwardId: string;
}

export function useTimer({ nextStreakAvailableAt, streakMax, streakCompleted, streakAwardId }: UseTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(nextStreakAvailableAt, "medium"));

  useEffect(() => {
    if (streakMax === streakCompleted && !streakAwardId) {
      const callback = () => {
        setTimeRemaining(getTimeRemaining(nextStreakAvailableAt, "medium"));
        timer = setTimeout(callback, DETOX_ENABLED ? 2000 : 1000); // detox will hang for timers less than 1500ms
      };

      let timer = setTimeout(callback, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return { timeRemaining };
}
