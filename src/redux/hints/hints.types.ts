import { Image } from "@redux/_core/types";
import { ROUTES } from "@navigation/constants";
export interface IHintsStore {
  hints: IHint[];
  shownHints?: IShownHint[];
}

export type HintScreenType = (typeof ROUTES)[keyof typeof ROUTES];

export interface IHint {
  id: string;
  title: string;
  description: string;
  image: Image;
  screenWhitelist: HintScreenType[];
  screenBlacklist: HintScreenType[];
}

export interface IShownHint {
  id: string;
  showCount: number;
}

export type IGetHintsSuccessPayload = { hints: IHint[] };
export type ICycleHintPayload = { shownHint: IHint };
