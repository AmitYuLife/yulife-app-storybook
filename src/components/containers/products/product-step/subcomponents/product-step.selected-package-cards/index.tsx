import React, { memo, useContext, useMemo } from "react";
import {
  ContentItemSelectedPackageCards as GqlProps,
  ContentItemSelectedPackageCards_coverOptions_slotInfo,
} from "@graphql/_core/schema";
import { ProductStepSelectedPackageCard } from "../";
import { ProductStepContext } from "../../product-step.context";
import { LOCAL_ANSWER_KEY } from "../../utils";
import { View } from "react-native";
import { mapServerStyles } from "@components/sdui";
import { CoverType } from "@graphql/_core/schema/globalTypes";

interface ActiveItem {
  coverType: CoverType;
  price: string;
  slotInfo: ContentItemSelectedPackageCards_coverOptions_slotInfo;
}

export const ProductStepSelectedPackageCards = memo((props: GqlProps) => {
  const { id, styles, coverOptions, packageCardsPriceDescription, providerLogo } = props;
  const { dynamicData } = useContext(ProductStepContext);
  const activeCover = (dynamicData[LOCAL_ANSWER_KEY.CoverType] as CoverType) || CoverType.common;

  const keyDataByCover = useMemo(
    () =>
      coverOptions.reduce(
        (acc, curr) => ({ ...acc, [curr.coverType]: { ...curr } }),
        {} as Record<CoverType, ActiveItem>
      ),
    [coverOptions]
  );

  if (!keyDataByCover[activeCover]) {
    return null;
  }

  const activeItem = keyDataByCover[activeCover];

  return (
    <View style={mapServerStyles(styles)}>
      <ProductStepSelectedPackageCard
        {...activeItem}
        id={`${id}-${activeItem.coverType}`}
        priceDescription={packageCardsPriceDescription}
        providerLogo={providerLogo}
      />
    </View>
  );
});
