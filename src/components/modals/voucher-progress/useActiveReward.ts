import { useMemo } from "react";
import { VoucherProgressModalProps } from "./types";

export const useActiveReward = (activeReward: VoucherProgressModalProps["rewards"][number]) => {
  return useMemo(() => {
    const { reward, title, current, max, gameName } = activeReward;

    const { status, backgroundColour } = reward;

    return { reward, title, current, max, status, backgroundColour, gameName };
  }, [activeReward]);
};
