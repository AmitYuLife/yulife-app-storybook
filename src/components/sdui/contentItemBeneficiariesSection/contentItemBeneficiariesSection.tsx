import React, { memo } from "react";
import { ContentItemBeneficiariesSection as Props } from "@graphql/_core/schema";
import { mapServerStyles } from "..";
import { Beneficiaries } from "./beneficiariesContainer";

export const ContentItemBeneficiariesSection = memo((props: Props) => {
  return <Beneficiaries style={mapServerStyles(props.styles)} productId={props.productId} />;
});
