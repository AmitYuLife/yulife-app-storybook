import { InfoScreen } from "@screens/index";
import { InfoModalProps } from "@screens/member/info-screen/info.screen";
import React from "react";

const InfoModal = (props: InfoModalProps) => {
  return <InfoScreen {...props} />;
};

export default InfoModal;
