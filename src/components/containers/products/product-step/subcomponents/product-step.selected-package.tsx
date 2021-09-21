import React, { memo, useContext } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { PackageType, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { Image } from "@atoms";
import { SlotIcon } from "./product-step.slot-icon";
import { ContentItemSelectedPackageCard as GqlProps } from "@graphql/_core/schema";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { ProductStepContext } from "../product-step.context";
import { LOCAL_ANSWER_KEY } from "../utils/localAnswerKeys";

/**
 * Don't scale
 */
const HEADER_HEIGHT = 168;
const BORDER_RADIUS = 12;

export const ProductStepSelectedPackageCard = memo((props: GqlProps) => {
  const { backgroundUrl, slotInfo, previousPrice, price, priceDescription } = props;
  const { dynamicData } = useContext(ProductStepContext);

  const headerImage = backgroundUrl?.uri && { uri: backgroundUrl.uri };

  if (!headerImage) {
    return null;
  }

  // TODO: find a way to unify with product-step.card-header

  return (
    <View style={styles.wrapper}>
      <Image style={styles.headerImage} source={headerImage} width={Style.DEVICE_WIDTH} height={HEADER_HEIGHT} />
      <View style={styles.inner}>
        <SlotIcon
          backgroundUrl={slotInfo.backgroundUrl.uri}
          worldId={dynamicData[LOCAL_ANSWER_KEY.WorldId] as YuWorld}
          coverType={props.coverType as CoverType}
        />
        <View style={styles.distance}>
          <PackageType type={props.coverType} />
          <View style={styles.descriptionWrapper}>
            {!slotInfo?.logoUrl?.id ? null : (
              <Image style={styles.logo} source={slotInfo.logoUrl} width={16} height={16} />
            )}
            <TextTemplate color={Colours.neutral.white} type="h3">
              {slotInfo.name}
            </TextTemplate>
          </View>
        </View>
      </View>
      <View style={styles.pricing}>
        {!previousPrice ? null : (
          <View style={styles.textMargin}>
            <TextTemplate color={Colours.neutral.n200} type="b1b" decoration="strikeThrough">
              {previousPrice}
            </TextTemplate>
          </View>
        )}
        <View style={styles.textMargin}>
          <TextTemplate color={Colours.neutral.white} type="b1b">
            {price}
          </TextTemplate>
        </View>
        <TextTemplate color={Colours.neutral.white} type="l1">
          {priceDescription}
        </TextTemplate>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    marginHorizontal: Style.adjust(32),
  },
  inner: {
    paddingTop: Style.adjust(24),
    paddingBottom: Style.adjust(8),
    paddingHorizontal: Style.adjust(24),
    flexDirection: "row",
  } as ViewStyle,
  pricing: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingRight: Style.adjust(24),
    paddingBottom: Style.adjust(24),
  } as ViewStyle,
  textMargin: {
    marginRight: Style.adjust(4),
    paddingBottom: Style.adjust(2),
  },
  distance: {
    marginLeft: Style.adjust(20),
  } as ViewStyle,
  descriptionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Style.adjust(8),
  },
  logo: {
    marginRight: Style.adjust(8),
  },
  headerImage: {
    position: "absolute",
    right: 0,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});
