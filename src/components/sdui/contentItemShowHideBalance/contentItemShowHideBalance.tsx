import React, { memo } from "react";
import { ContentItemShowHideBalance as GqlShowHideBalance } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { ShowAndHideBalance } from "@organisms";

type Props = GqlShowHideBalance & {
  testID?: string;
};

export const ContentItemShowHideBalance = memo(
  ({ value, currency, description, descriptionValue, styles, wrapperStyles }: Props) => (
    <ShowAndHideBalance
      value={value}
      currency={currency}
      description={description}
      descriptionValue={descriptionValue}
      styles={mapServerStyles(styles)}
      wrapperStyles={mapServerStyles(wrapperStyles)}
    />
  )
);
