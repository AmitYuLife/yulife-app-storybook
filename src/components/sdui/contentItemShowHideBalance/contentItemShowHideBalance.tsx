import React, { memo } from "react";
import { ContentItemShowHideBalance as GqlShowHideBalance } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { ShowAndHideBalance } from "@organisms";

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
