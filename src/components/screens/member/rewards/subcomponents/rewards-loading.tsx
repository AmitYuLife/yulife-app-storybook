import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import NativeSvg from "@components/molecules/native-svg/native-svg";
import { Rect, Circle } from "react-native-svg";

export function RewardsListLoading() {
  return (
    <ScrollView>
      <View style={styles.loadingContainer}>
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
        width={32}
        height={32}
        viewBox="0 0 32 32"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Circle opacity="0.5" cx="16" cy="16" r="16" fill="#F4F4F8" />
      </NativeSvg>

      <NativeSvg
        speed={2}
        width={106}
        height={12}
        viewBox="0 0 106 12"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect width="106" height="12" rx="6" fill="#F4F4F8" />
      </NativeSvg>

      <NativeSvg
        speed={2}
        width={59}
        height={12}
        viewBox="0 0 59 12"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect width="59" height="12" rx="6" fill="#F4F4F8" />
      </NativeSvg>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    marginBottom: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f8",
  },
  loadingCard: {
    marginVertical: 12,
    width: "90%",
    backgroundColor: "white",
    height: 160,
    justifyContent: "space-around",
    borderRadius: 10,
    padding: 20,
  },
});
