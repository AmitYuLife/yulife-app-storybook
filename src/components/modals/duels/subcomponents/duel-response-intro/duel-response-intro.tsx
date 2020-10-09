import React from "react";
import { DuelStepProps } from "../../duels.types";
import GenericDuelsIntro from "../generic-duels-intro/generic-duels-intro";

const Intro = (props: Partial<DuelStepProps>) => {
  return (
    <GenericDuelsIntro
      {...props}
      type="response"
      heading={`${props?.opponent?.firstName || "A colleague"} has invited you to duel!`}
      primaryBtnLabel="See the details"
      secondaryBtnLabel="Decline"
    />
  );
};

export default Intro;
