import { ComponentProps } from "react";
import { NudgeItem } from "../nudge-item";

export type INudgeItem = {
  item:
    | {
        type: "PAD";
        payload: number;
      }
    | {
        type: "NUDGE";
        payload: {
          type: ComponentProps<typeof NudgeItem>["type"];
          yuCoinAmount?: number;
          done?: boolean;
          target?: string;
        };
      };
};
