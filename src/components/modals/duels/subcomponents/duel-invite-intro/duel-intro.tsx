import { t } from "@locale";
import * as React from "react";
import { DuelStepProps } from "../../duels.types";
import GenericDuelsIntro from "../generic-duels-intro/generic-duels-intro";

const DuelIntro = (props: Partial<DuelStepProps>) => {
  return (
    <GenericDuelsIntro
      {...props}
      type="invite"
      heading={t("modals.duels.duel_intro.heading")}
      primaryTranslationKey="modals.duels.duel_intro.button"
    />
  );
};

export default DuelIntro;
