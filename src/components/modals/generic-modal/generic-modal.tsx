import React from "react";
import { GenericScreen } from "../../screens";
import { IGenericModalProps } from "../../screens/member/generic-screen/generic.screen";

export default function GenericModal(props: IGenericModalProps) {
  return <GenericScreen {...props} />;
}
