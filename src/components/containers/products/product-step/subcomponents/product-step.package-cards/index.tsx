import React, { memo } from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards as GqlPackageCards } from "@graphql/_core/schema";
import { PackageCard } from "./package-card";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";

/**
 * Don't scale
 */
const WIDTH = Style.DEVICE_WIDTH - 48;
const PAD_WIDTH = 20;

export const ProductStepPackageCards = memo((props: GqlPackageCards) => {
  return (
    <View>
      <View style={styles.flexCenter}>
        <TextTemplate color={Colours.neutral.n400} type="l2b">
          Swipe to discover more
        </TextTemplate>
      </View>
      <ScrollView
        decelerationRate={"fast"}
        snapToOffsets={Array.from({ length: props.packageCards.length }).map((_, i) => i * WIDTH)}
        directionalLockEnabled={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <Pad />
        {props.packageCards.map((packageCard) => (
          <View key={packageCard.id}>
            <PackageCard {...packageCard} width={WIDTH} />
          </View>
        ))}
        <Pad />
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Style.adjust(40),
  } as ViewStyle,
  scrollView: {
    width: Style.DEVICE_WIDTH,
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

const Pad = memo(() => <View style={{ width: PAD_WIDTH }} />);
