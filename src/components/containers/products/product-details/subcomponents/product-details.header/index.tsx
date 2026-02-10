import React, { memo, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { Style, mapCoverTypeToColorTheme } from "@styles";
import { ContentItemProductDetailsHeaderFragment } from "@graphql/__generated";
import { Pressable, YuCoinPower, YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER } from "@components/molecules";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { Title } from "./title";
import { SlotIcon } from "./slot-icon";
import styles from "./styles";
import { ProviderLogo } from "./provider-logo";
import { Benefit } from "./benefit";
import { Funding } from "./funding";
import { mapServerStyles } from "@components/sdui";
import { Image } from "@atoms";

const SLOT_ICON_SIZE = Style.adjust(102);
const YU_COIN_POWER_HEIGHT = Style.DEVICE_WIDTH * YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER;

export const ProductDetailsHeader = memo((props: ContentItemProductDetailsHeaderFragment) => {
  const {
    providerLogo,
    coverType,
    backgroundImage,
    productName,
    itemSlot,
    productDetailsHeaderYuCoinPower: yuCoinPower,
    benefit,
    funding,
    showItemSlot,
    showSlotLabel,
    styles: sduiStyles,
  } = props;

  const [headerHeight, setHeaderHeight] = useState(0);
  const [benefitHeight, setBenefitHeight] = useState(0);

  const handleBenefitLayout = (event: LayoutChangeEvent) => {
    setBenefitHeight(event.nativeEvent.layout.height);
  };

  const handleHeaderLayout = (event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  };

  const mappedServerStyle = mapServerStyles(sduiStyles) || {};

  return (
    <View>
      <View
        style={[styles.wrapper, { backgroundColor: mapCoverTypeToColorTheme(coverType).primary }, mappedServerStyle]}
        onLayout={handleHeaderLayout}
      >
        {!backgroundImage ? null : (
          <Image
            source={backgroundImage}
            width={Style.DEVICE_WIDTH}
            height={headerHeight}
            style={styles.backgroundImage}
            suppressLoadingUi={true}
            resizeMode={"cover"}
          />
        )}
        {showItemSlot !== false ? (
          <View style={styles.inner}>
            <View style={styles.leftSide}>
              {funding ? <Funding {...funding} /> : null}
              <ProviderLogo image={providerLogo?.image} width={providerLogo?.width} height={providerLogo?.height} />
              <Title titleType="h2" title={productName} />
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
        ) : (
          <View style={styles.title}>
            {funding ? <Funding {...funding} /> : null}
            <ProviderLogo image={providerLogo?.image} width={providerLogo?.width} height={providerLogo?.height} />
            <Title titleType="h1" title={productName} />
          </View>
        )}
      </View>
      <Benefit
        style={{ paddingTop: (yuCoinPower ? YU_COIN_POWER_HEIGHT : 4) + Style.adjust(16) }}
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
          <Pressable onPress={showYuCoinPowerExplainedOverlay} delay={1000}>
            <YuCoinPower width={Style.DEVICE_WIDTH} coins={yuCoinPower} />
          </Pressable>
        </View>
      )}
    </View>
  );
});
