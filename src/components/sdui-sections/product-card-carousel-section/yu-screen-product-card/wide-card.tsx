import React from "react";
import { View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { ArrowButton } from "@components/molecules/arrow-button";
import { IYuScreenProductCardVariant } from "./types";
import {
  YUSCREEN_V5_CTA_BUTTON,
  YUSCREEN_V5_PRODUCT_CARD_LOGO,
  YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD,
  YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_BODY_DESC,
  YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION,
  YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_TITLE,
  YUSCREEN_V5_WIDE_CARD,
} from "@ids";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

export const WideCard = ({ item, onButtonPress }: IYuScreenProductCardVariant) => {
  const showButton = !!item.buttonCta && !!onButtonPress;
  const showCardCta = !!item.cardCta;
  const { theme } = useTheme();

  return (
    <View style={styles.card} testID={YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD(item.productName)}>
      <View style={styles.cardBody} testID={YUSCREEN_V5_WIDE_CARD(item.title)}>
        <View>
          {item.logo ? (
            <Image
              source={item.logo}
              width={Style.adjust(68)}
              height={Style.adjust(14)}
              suppressLoadingUi={true}
              testID={YUSCREEN_V5_PRODUCT_CARD_LOGO}
            />
          ) : null}
          <View style={styles.productName}>
            <TextTemplate type="l3b">{item.productName}</TextTemplate>
          </View>
          <View style={styles.title}>
            <TextTemplate
              type="b2b"
              lineHeight={Style.adjust(20)}
              testID={YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_TITLE(item.title)}
            >
              {item.title}
            </TextTemplate>
          </View>
        </View>
        {showButton ? (
          <Button
            testID={`yu-product-card-wide-${item.productName}`}
            onPress={onButtonPress}
            translatedLabel={item.buttonCta}
            size="Narrow"
          />
        ) : (
          <View style={styles.body}>
            <TextTemplate type="l2" testID={YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_BODY_DESC(item.body)}>
              {item.body}
            </TextTemplate>
          </View>
        )}
      </View>
      <View style={styles.cardBanner}>
        <View style={styles.illustration}>
          <Image
            source={item.illustrations.wide}
            width={Style.adjust(160)}
            height={Style.adjust(108)}
            resizeMode="cover"
            suppressLoadingUi={true}
            testID={YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION(item.illustrations.wide.uri)}
          />
        </View>
        {!showCardCta ? null : (
          <View style={styles.cta}>
            <TextTemplate type="l3b" testID={YUSCREEN_V5_CTA_BUTTON(item.productName)}>
              {item.cardCta}
            </TextTemplate>
            <ArrowButton size={Style.adjust(16)} color={theme.colors.primary.p600} />
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

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderColor: Colours.neutral.n150,
    borderWidth: 1,
    borderRadius: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    width: Style.DEVICE_WIDTH - Style.adjust(48),
    height: Style.adjust(170),
  },
  label: {
    position: "absolute",
    top: Style.adjust(-10),
    start: 0,
    end: 0,
    height: Style.adjust(20),
    alignItems: "center",
    justifyContent: "center",
  },
  labelWrapper: {
    paddingHorizontal: Style.adjust(16),
    backgroundColor: "#FFE559",
    borderRadius: Style.adjust(10),
  },
  cardBody: {
    justifyContent: "space-between",
    paddingTop: Style.adjust(16),
    paddingStart: Style.adjust(16),
    paddingBottom: Style.adjust(12),
    flex: 1,
    flexGrow: 1,
  },
  productName: {
    paddingTop: Style.adjust(4),
  },
  title: {
    paddingTop: Style.adjust(12),
  },
  body: {
    paddingBottom: Style.adjust(16),
  },
  cardBanner: {
    width: Style.adjust(160),
    justifyContent: "space-between",
  },
  illustration: {
    alignSelf: "flex-end",
    borderTopRightRadius: Style.adjust(8),
    overflow: "hidden",
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: Style.adjust(16),
    gap: Style.adjust(16),
  },
});
