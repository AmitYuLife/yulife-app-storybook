import { t } from "@locale";
import React from "react";
import { DuelStepProps } from "../../duels.types";
import GenericDuelsIntro from "../generic-duels-intro/generic-duels-intro";

const Intro = (props: Partial<DuelStepProps>) => {
  const yucoin =
    props?.yucoin > 0
      ? `${props?.yucoin} ${t("yu_coin.camel_case")}`
      : t("modals.duels.duel_response_intro.bragging_rights");

  const colleagueName = props?.opponent?.firstName || t("modals.duels.duel_response_intro.collegue");

  const heading = yucoin
    ? `${colleagueName} ${t("modals.duels.duel_response_intro.yucoin_heading", { yucoin })}`
    : `${colleagueName} ${t("modals.duels.duel_response_intro.heading")}`;

  return (
    <GenericDuelsIntro
      {...props}
      type="response"
      heading={heading}
      primaryBtnLabel={t("labels.cta.accept")}
      secondaryBtnTranslationKey="labels.cta.decline"
    />
  );
};

export default Intro;
