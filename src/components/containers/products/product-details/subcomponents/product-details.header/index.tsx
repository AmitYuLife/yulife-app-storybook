import React, { memo, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { Style, mapCoverTypeToColorTheme } from "@styles";
import { ContentItemProductDetailsHeader } from "@graphql/_core/schema";
import { PressableWithDelay, YuCoinPower, YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER } from "@components/molecules";
import { showEarnRateOverlay } from "@components/containers/member/yu/navigation/showEarnRateOverlay";
import { Title } from "./title";
import { ProductIdentifier } from "./product-identifier";
import { SlotIcon } from "./slot-icon";
import styles from "./styles";
import { ProviderLogo } from "./provider-logo";
import { Benefit } from "./benefit";
import { Funding } from "./funding";

const SLOT_ICON_SIZE = Style.adjust(102);
const YU_COIN_POWER_HEIGHT = Style.DEVICE_WIDTH * YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER;

export const ProductDetailsHeader = memo((props: ContentItemProductDetailsHeader) => {
  const {
    providerLogo,
    coverType,
    productName,
    itemSlot,
    productIdentifier,
    productDetailsHeaderYuCoinPower: yuCoinPower,
    benefit,
    funding,
  } = props;

  const [benefitHeight, setBenefitHeight] = useState(0);

  const handleBenefitLayout = (event: LayoutChangeEvent) => {
    setBenefitHeight(event.nativeEvent.layout.height);
  };

  return (
    <View>
      <View
        style={StyleSheet.flatten([styles.wrapper, { backgroundColor: mapCoverTypeToColorTheme(coverType).primary }])}
      >
        <View style={styles.inner}>
          <View style={styles.leftSide}>
            {funding ? <Funding {...funding} /> : null}
            <ProviderLogo image={providerLogo?.image} width={providerLogo?.width} />
            <Title titleType="h2" title={productName} />
            <ProductIdentifier productIdentifier={productIdentifier} />
          </View>
          <View style={[styles.rightSide, { height: SLOT_ICON_SIZE }]}>
            <SlotIcon
              coverType={coverType}
              backgroundUrl={itemSlot?.backgroundUrl}
              itemUrl={itemSlot?.iconUrl}
              size={SLOT_ICON_SIZE}
            />
          </View>
        </View>
      </View>
      <Benefit
        style={{ paddingTop: YU_COIN_POWER_HEIGHT + Style.adjust(16) }}
        onLayout={handleBenefitLayout}
        benefit={benefit}
      />
      <View style={[styles.yuCoinPowerWrapper, { bottom: benefitHeight - YU_COIN_POWER_HEIGHT + 1 }]}>
        <View
          style={[
            styles.yuCoinTopHalfBackground,
            { height: YU_COIN_POWER_HEIGHT / 2, backgroundColor: mapCoverTypeToColorTheme(coverType).primary },
          ]}
        />
        <PressableWithDelay onPress={showEarnRateOverlay}>
          <YuCoinPower width={Style.DEVICE_WIDTH} coins={yuCoinPower} />
        </PressableWithDelay>
      </View>
    </View>
  );
});
