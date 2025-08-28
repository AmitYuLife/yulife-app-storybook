import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import NativeSvg from "@molecules/native-svg/native-svg";
import { Rect } from "react-native-svg";
import { Colours, Style } from "@styles";

export function RewardsListLoading() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.loadingContainer}>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </View>
    </ScrollView>
  );
}

function LoadingCard() {
  return (
    <View style={styles.loadingCard}>
      <NativeSvg
        speed={2}
        width={Style.adjust(112)}
        height={Style.adjust(84)}
        viewBox="0 0 112 84"
        backgroundColor={Colours.metallic.m100}
        foregroundColor={Colours.neutral.n50}
      >
        <Rect width="112" height="84" rx="16" />
      </NativeSvg>

      <View style={styles.text}>
        <NativeSvg
          speed={2}
          width={106}
          height={12}
          viewBox="0 0 106 12"
          backgroundColor={Colours.metallic.m100}
          foregroundColor={Colours.neutral.n50}
          style={styles.textMargin}
        >
          <Rect width="106" height="12" rx="6" />
        </NativeSvg>

        <NativeSvg
          speed={2}
          width={59}
          height={12}
          viewBox="0 0 59 12"
          backgroundColor={Colours.metallic.m100}
          foregroundColor={Colours.neutral.n50}
        >
          <Rect width="59" height="12" rx="6" />
        </NativeSvg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    marginBottom: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
  },
  loadingCard: {
    flexDirection: "row",
    marginBottom: Style.adjust(16),
    width: "90%",
    backgroundColor: Colours.neutral.n50,
    height: Style.adjust(116),
    justifyContent: "flex-start",
    borderRadius: Style.adjust(16),
    padding: Style.adjust(16),
  },
  text: {
    marginStart: Style.adjust(16),
  },
  textMargin: { marginBottom: Style.adjust(12) },
});
