import { useCallback, useMemo, useRef } from "react";
import * as Haptics from "expo-haptics";

type HapticsTrigger = {
  id: "haptics";
  props?: {
    style?: Haptics.ImpactFeedbackStyle;
  };
  throttling?: number; // If present - will not activate the trigger is the time since the last time trigger activated is less than throttling millisecond.
};

export type Trigger = HapticsTrigger;

type UseTriggers = () => {
  trigger: (trigger: Trigger) => boolean; // Returns true if trigger was activated
};

export const useTriggers: UseTriggers = () => {
  // Map of when the last trigger was activated
  const triggerMapRef = useRef(new Map<string, number>());

  const trigger = useCallback((t: Trigger) => {
    if (t.throttling) {
      const lastActivation = triggerMapRef.current.get(t.id);

      if (Date.now() - lastActivation < t.throttling) {
        return false;
      }
    }

    let activated = false;

    switch (t.id) {
      case "haptics": {
        Haptics.impactAsync(t.props?.style);
        activated = true;
        break;
      }

      default:
        break;
    }

    if (activated) {
      triggerMapRef.current.set(t.id, Date.now());
    }

    return activated;
  }, []);

  return useMemo(
    () => ({
      trigger,
    }),
    [trigger]
  );
};
