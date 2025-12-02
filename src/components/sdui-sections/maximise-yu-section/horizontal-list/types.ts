import { MaximiseYuItem } from "@redux/yu-screen/yu-screen.types";

export type INudgeItem = {
  item:
    | {
        type: "PAD";
        payload: number;
      }
    | {
        type: "NUDGE";
        payload: MaximiseYuItem;
      };
};
