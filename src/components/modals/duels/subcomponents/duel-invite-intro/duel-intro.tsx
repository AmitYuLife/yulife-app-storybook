import * as React from "react";
import { DuelStepProps } from "../../duels.types";
import GenericDuelsIntro from "../generic-duels-intro/generic-duels-intro";

function DuelIntro(props: Partial<DuelStepProps>) {
  return <GenericDuelsIntro {...props} type="invite" heading="The matchup:" primaryBtnLabel="Set the duel" />;
}

export default DuelIntro;
