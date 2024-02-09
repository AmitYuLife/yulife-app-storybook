import React, { memo } from "react";
import { ContentItemBeneficiariesSectionFragment as Props } from "@graphql/__generated";
import { mapServerStyles } from "..";
import { Beneficiaries } from "./beneficiariesContainer";

export const ContentItemBeneficiariesSection = memo((props: Props) => {
  return <Beneficiaries style={mapServerStyles(props.styles)} productId={props.productId} />;
});
