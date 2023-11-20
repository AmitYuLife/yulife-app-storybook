import { HeroLockedIcon } from "@atoms/icon/hero-locked-icon";
import { QuestDetailModalProps } from "../quest-detail-modal.types";
import { t } from "@locale";

export const getConfigByType = ({ type, name, level }: QuestDetailModalProps) => {
  if (type === "unavailable") {
    return {
      heading: t(name ? "screens.level_locked.stage" : "screens.level_locked.level", { name, level }),
      headerIcon: HeroLockedIcon,
    };
  }

  return {};
};
