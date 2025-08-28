import React from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { ArrowButton } from "@components/molecules/arrow-button";
import { IYuScreenProductCardVariant } from "./types";
import {
  YUSCREEN_V5_CTA_BUTTON,
  YUSCREEN_V5_PRODUCT_CARD_LOGO,
  YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD,
  YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION,
  YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_TITLE,
  YUSCREEN_V5_SQUARE_CARD,
} from "@ids";

export const SquareCard = ({ item, onButtonPress }: IYuScreenProductCardVariant) => {
  const showButton = !!item.buttonCta && !!onButtonPress;
  const showCardCta = !showButton && !!item.cardCta;
  const showBody = !showButton && !showCardCta;

  return (
    <View style={styles.card} testID={YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD(item.productName)}>
      <View style={styles.cardBanner} testID={YUSCREEN_V5_SQUARE_CARD(item.title)}>
        <View style={styles.illustration}>
          <Image
            source={item.illustrations.square}
            width={Style.adjust(64)}
            height={Style.adjust(72)}
            resizeMode="cover"
            suppressLoadingUi={true}
            testID={YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION(item.illustrations.square.uri)}
          />
        </View>
        <View style={styles.bannerContent}>
          {item.logo ? (
            <Image
              source={item.logo}
              width={BANNER_WIDTH}
              height={Style.adjust(14)}
              suppressLoadingUi={true}
              testID={YUSCREEN_V5_PRODUCT_CARD_LOGO}
            />
          ) : null}
          <View style={styles.productName}>
            <TextTemplate type="l3b" numberOfLines={2} lineHeight={Style.adjust(14)}>
              {item.productName}
            </TextTemplate>
          </View>
        </View>
      </View>
      <View style={styles.cardBody}>
        <TextTemplate
          type="l1b"
          lineHeight={Style.adjust(18)}
          numberOfLines={2}
          testID={YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_TITLE(item.title)}
        >
          {item.title}
        </TextTemplate>
      </View>
      <View style={styles.footer}>
        {!showButton ? null : (
          <Button
            testID={`yu-product-card-square-${item.productName}`}
            onPress={onButtonPress}
            translatedLabel={item.buttonCta}
            size="Narrow"
          />
        )}
        {!showCardCta ? null : (
          <View style={styles.cta}>
            <TextTemplate type="l3b" testID={YUSCREEN_V5_CTA_BUTTON(item.productName)}>
              {item.cardCta}
            </TextTemplate>
            <ArrowButton size={Style.adjust(16)} color={Colours.primary.p600} />
          </View>
        )}
        {!showBody ? null : (
          <View style={styles.cta}>
            <TextTemplate type="l1">{item.body}</TextTemplate>
          </View>
        )}
      </View>
      {!item.label ? null : (
        <View style={styles.label}>
          <View style={styles.labelWrapper}>
            <TextTemplate type="l3b" textAlign="center">
              {item.label}
            </TextTemplate>
          </View>
        </View>
      )}
    </View>
  );
};

const CARD_WIDTH = Style.DEVICE_WIDTH / 2 - Style.adjust(32);
const BANNER_WIDTH = Math.min(Style.adjust(68), CARD_WIDTH - Style.adjust(96));

const styles = StyleSheet.create({
  card: {
    borderColor: Colours.neutral.n150,
    borderWidth: 1,
    borderRadius: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    width: CARD_WIDTH,
    height: Style.adjust(168),
  },
  label: {
    position: "absolute",
    top: Style.adjust(-10),
    left: 0,
    right: 0,
    height: Style.adjust(20),
    alignItems: "center",
    justifyContent: "center",
  },
  labelWrapper: {
    paddingHorizontal: Style.adjust(16),
    backgroundColor: "#FFE559",
    borderRadius: Style.adjust(10),
  },
  cardBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  illustration: {
    borderTopLeftRadius: Style.adjust(8),
    overflow: "hidden",
  },
  bannerContent: {
    flex: 1,
    paddingTop: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
  },
  productName: {
    paddingTop: Style.adjust(4),
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: Style.adjust(16),
  },
  footer: {
    paddingHorizontal: Style.adjust(10),
    paddingBottom: Style.adjust(6),
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Style.adjust(6),
    paddingBottom: Style.adjust(14),
  },
});
