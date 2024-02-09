import React, { memo, useContext, useMemo } from "react";
import { ProductStepSelectedPackageCard } from "../";
import { ProductStepContext } from "../../product-step.context";
import { LOCAL_ANSWER_KEY } from "../../utils";
import { View } from "react-native";
import { mapServerStyles } from "@components/sdui";
import { CoverType, ContentItemSelectedPackageCardsFragment as GqlProps } from "@graphql/__generated";

interface ActiveItem {
  coverType: CoverType;
  price: string;
  slotInfo: GqlProps["coverOptions"][0]["slotInfo"];
}

export const ProductStepSelectedPackageCards = memo((props: GqlProps) => {
  const { id, styles, coverOptions, packageCardsPriceDescription, providerLogo } = props;
  const { dynamicData } = useContext(ProductStepContext);
  const activeCover = (dynamicData[LOCAL_ANSWER_KEY.CoverType] as CoverType) || CoverType.Common;

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
