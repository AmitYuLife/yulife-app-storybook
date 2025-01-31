import { VoidFunction } from "@utils";

export type QuestDetailModalContainerProps = {
  name?: string;
  yuniversalMap?: number;
  level: number;
  onPressCta: VoidFunction;
  onPressClose: VoidFunction;
  onPressCtaDismiss?: VoidFunction;
  ctaLabelSubmit?: string;
  ctaLabelReject?: string;
  heading?: string;
  nextAvailableAt?: string;
  displayChestCard?: boolean;
};

export type LegacyQuestModalProps = {
  componentId: string;
  yuniversalMap: number;
  isNext: boolean;
  level: number;
};
