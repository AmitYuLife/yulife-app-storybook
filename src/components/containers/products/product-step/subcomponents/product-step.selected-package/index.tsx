import React, { memo, useContext, useMemo } from "react";
import { View } from "react-native";
import { Image } from "@atoms";
import { ContentItemSelectedPackageCard as GqlProps } from "@graphql/_core/schema";
import { ProductStepContext } from "../../product-step.context";
import { mapCoverTypeToColorTheme } from "@styles";
import styles from "./product-step.selected-package.styles";
import { RightSide } from "./subcomponents/right-side";
import { Price } from "./subcomponents/price";
import { Title } from "./subcomponents/title";
import { YULIFE_BUPA_LOGO } from "@ids";

type Props = Omit<GqlProps, "previousPrice" | "backgroundUrl">;

export const ProductStepSelectedPackageCard = memo((props: Props) => {
  const { slotInfo, price, priceDescription, providerLogo, coverType } = props;
  const { customerProductId } = useContext(ProductStepContext);

  const wrapperStyle = useMemo(() => {
    const { primary } = mapCoverTypeToColorTheme(coverType);

    const backgroundColor = { backgroundColor: primary };

    return [styles.wrapper, backgroundColor];
  }, [coverType]);

  console.log("url2", providerLogo.url);
  return (
    <View style={wrapperStyle}>
      <View style={styles.inner}>
        <View style={styles.leftSide}>
          <Image source={providerLogo.url} width={providerLogo.width} testID={YULIFE_BUPA_LOGO} />
          <Title title={slotInfo.name} />
          <Price price={price} priceDescription={priceDescription} />
        </View>
        <RightSide
          backgroundUrl={slotInfo.backgroundUrl.uri}
          coverType={coverType}
          customerProductId={customerProductId}
        />
      </View>
    </View>
  );
});
