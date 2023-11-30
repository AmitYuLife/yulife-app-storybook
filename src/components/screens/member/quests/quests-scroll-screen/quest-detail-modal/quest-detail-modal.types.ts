import { VoidFunction } from "@utils";

export type QuestDetailModalType = "unavailable";

export type QuestDetailModalProps = {
  name?: string;
  level: number;
  onPressCta: VoidFunction;
  onPressClose: VoidFunction;
  onPressCtaDismiss?: VoidFunction;
  type: QuestDetailModalType;
};

export type QuestFeatureToggles = {
  useHalfModalsForQuestMap: boolean;
};
