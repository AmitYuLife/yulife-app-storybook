import React, { memo, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { Style } from "@styles";
import { ContentItemProductDetailsHeaderFragment } from "@graphql/__generated";
import { Pressable, YuCoinPower, YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER } from "@components/molecules";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { Title } from "./title";
import styles from "./styles";
import { ProviderLogo } from "./provider-logo";
import { Benefit } from "./benefit";
import { Funding } from "./funding";
import { mapServerStyles } from "@components/sdui";
import { Image } from "@atoms";

const YU_COIN_POWER_HEIGHT = Style.DEVICE_WIDTH * YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER;
const BACKGROUND_COLOR = "#956AFF";

export const ProductDetailsHeader = memo((props: ContentItemProductDetailsHeaderFragment) => {
  const {
    providerLogo,
    backgroundImage,
    productName,
    productDetailsHeaderYuCoinPower: yuCoinPower,
    benefit,
    funding,
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
        style={[styles.wrapper, { backgroundColor: BACKGROUND_COLOR }, mappedServerStyle]}
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
        <View style={styles.heroContent}>
          <ProviderLogo
            image={providerLogo?.image}
            width={providerLogo?.width}
            height={providerLogo?.height}
            alignLeft={true}
          />
          <Title titleType="h2" title={productName} marginTop={8} />
          {funding ? <Funding {...funding} /> : null}
        </View>
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
              { height: YU_COIN_POWER_HEIGHT / 2, backgroundColor: BACKGROUND_COLOR },
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
