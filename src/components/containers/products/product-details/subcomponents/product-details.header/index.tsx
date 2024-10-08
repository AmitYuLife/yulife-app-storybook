import React, { memo, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { Style, mapCoverTypeToColorTheme } from "@styles";
import { ContentItemProductDetailsHeaderFragment } from "@graphql/__generated";
import { PressableWithDelay, YuCoinPower, YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER } from "@components/molecules";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { Title } from "./title";
import { ProductIdentifier } from "./product-identifier";
import { SlotIcon } from "./slot-icon";
import styles from "./styles";
import { ProviderLogo } from "./provider-logo";
import { Benefit } from "./benefit";
import { Funding } from "./funding";

const SLOT_ICON_SIZE = Style.adjust(102);
const YU_COIN_POWER_HEIGHT = Style.DEVICE_WIDTH * YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER;

export const ProductDetailsHeader = memo((props: ContentItemProductDetailsHeaderFragment) => {
  const {
    providerLogo,
    coverType,
    productName,
    itemSlot,
    productIdentifier,
    productDetailsHeaderYuCoinPower: yuCoinPower,
    benefit,
    funding,
    showSlotLabel,
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
            <ProviderLogo image={providerLogo?.image} width={providerLogo?.width} height={providerLogo?.height} />
            <Title titleType="h2" title={productName} />
            <ProductIdentifier productIdentifier={productIdentifier} />
          </View>
          <View style={[styles.rightSide, { height: SLOT_ICON_SIZE }]}>
            <SlotIcon
              coverType={coverType}
              backgroundUrl={itemSlot?.backgroundUrl}
              itemUrl={itemSlot?.iconUrl}
              size={SLOT_ICON_SIZE}
              showLabel={showSlotLabel}
            />
          </View>
        </View>
      </View>
      <Benefit
        style={{ paddingTop: (yuCoinPower ? YU_COIN_POWER_HEIGHT : 0) + Style.adjust(16) }}
        onLayout={handleBenefitLayout}
        benefit={benefit}
      />
      {!yuCoinPower ? null : (
        <View style={[styles.yuCoinPowerWrapper, { bottom: benefitHeight - YU_COIN_POWER_HEIGHT + 1 }]}>
          <View
            style={[
              styles.yuCoinTopHalfBackground,
              { height: YU_COIN_POWER_HEIGHT / 2, backgroundColor: mapCoverTypeToColorTheme(coverType).primary },
            ]}
          />
          <PressableWithDelay onPress={showYuCoinPowerExplainedOverlay} delay={1000}>
            <YuCoinPower width={Style.DEVICE_WIDTH} coins={yuCoinPower} />
          </PressableWithDelay>
        </View>
      )}
    </View>
  );
});
