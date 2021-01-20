import React from "react";
import { DuelStepProps } from "../../duels.types";
import GenericDuelsIntro from "../generic-duels-intro/generic-duels-intro";

const Intro = (props: Partial<DuelStepProps>) => {
  const yucoin = props?.yucoin > 0 ? `${props?.yucoin} YuCoin` : "bragging rights";

  const heading = yucoin
    ? `${props?.opponent?.firstName || "A colleague"} has invited you to a 1-day duel for ${yucoin}!`
    : `${props?.opponent?.firstName || "A colleague"} has invited you to a 1-day duel!`;

  return (
    <GenericDuelsIntro
      {...props}
      type="response"
      heading={heading}
      primaryBtnLabel="Accept"
      secondaryBtnLabel="Decline"
    />
  );
};

export default Intro;
