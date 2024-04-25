import React, { memo } from "react";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { ShowAndHideBalance } from "@organisms";
import { ContentItemShowHideBalance as GqlShowHideBalance } from "@graphql/__generated";

type Props = GqlShowHideBalance & {
  testID?: string;
};

export const ContentItemShowHideBalance = memo(
  ({ balance, currency, balanceDescription, balanceDescriptionValue, styles, wrapperStyles }: Props) => (
    <ShowAndHideBalance
      value={balance}
      currency={currency}
      description={balanceDescription}
      descriptionValue={balanceDescriptionValue}
      styles={mapServerStyles(styles)}
      wrapperStyles={mapServerStyles(wrapperStyles)}
    />
  )
);
