import { BattlePassListItem } from "@organisms";
import { ComponentProps } from "react";

export interface VoucherProgressModalProps {
  rewards: Array<{
    title: string;
    current: number;
    max: number;
    gameName: string;
    reward: ComponentProps<typeof BattlePassListItem>;
  }>;
}
