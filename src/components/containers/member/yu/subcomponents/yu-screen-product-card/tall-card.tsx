import React from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { ArrowButton } from "@components/molecules/arrow-button";
import { IYuScreenProductCardVariant } from "./types";

export const TallCard = ({ item, onButtonPress }: IYuScreenProductCardVariant) => {
  const showButton = !!item.buttonCta && !!onButtonPress;
  const showCardCta = !!item.cardCta;
  const showBody = !showButton || !showCardCta;

  return (
    <View style={styles.card}>
      <View style={styles.cardBanner}>
        <View style={styles.illustration}>
          <Image
            source={item.illustrations.tall}
            width={CARD_WIDTH}
            height={ILLUSTRATION_HEIGHT}
            resizeMode="cover"
            suppressLoadingUi={true}
          />
        </View>
        <View style={styles.bannerContent}>
          <Image source={item.logo} width={Style.adjust(68)} height={Style.adjust(14)} suppressLoadingUi={true} />
          <View style={styles.productName}>
            <TextTemplate type="l3b">{item.productName}</TextTemplate>
          </View>
        </View>
      </View>
      <View style={styles.cardBody}>
        <TextTemplate type="b2b" lineHeight={Style.adjust(20)}>
          {item.title}
        </TextTemplate>
        {!showBody ? null : <TextTemplate type="l2">{item.body}</TextTemplate>}
      </View>
      <View style={styles.footer}>
        {!showButton ? null : <Button onPress={onButtonPress} translatedLabel={item.buttonCta} size="Narrow" />}
        {!showCardCta ? null : (
          <View style={styles.cta}>
            <TextTemplate type="l3b">{item.cardCta}</TextTemplate>
            <ArrowButton width={Style.adjust(16)} height={Style.adjust(16)} color={Colours.primary.p600} />
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
const ILLUSTRATION_HEIGHT = (CARD_WIDTH / 156) * 108;

const styles = StyleSheet.create({
  card: {
    borderColor: Colours.neutral.n150,
    borderWidth: 1,
    borderRadius: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    width: CARD_WIDTH,
    height: CARD_WIDTH * 2 + Style.adjust(40),
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
    justifyContent: "space-between",
  },
  illustration: {
    borderTopLeftRadius: Style.adjust(8),
    borderTopEndRadius: Style.adjust(8),
    overflow: "hidden",
  },
  bannerContent: {
    paddingHorizontal: Style.adjust(16),
  },
  productName: {
    paddingTop: Style.adjust(4),
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingTop: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
    gap: Style.adjust(10),
  },
  footer: {
    paddingHorizontal: Style.adjust(10),
    paddingBottom: Style.adjust(2),
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Style.adjust(8),
    paddingHorizontal: Style.adjust(6),
    paddingBottom: Style.adjust(14),
  },
});
