import React, { memo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, Platform, View } from "react-native";
import MinimalButton from "@atoms/button/minimalButton";
import { Colours } from "@styles";

interface Props {
  onNavigateBack: () => void;
}

export const ContinueButton = memo(({ onNavigateBack }: Props) => {
  return (
    <LinearGradient colors={["#ffffff00", "#fafafe"]} locations={[0, 0.25]} style={styles.button}>
      <View style={{ width: 306 }}>
        <MinimalButton
          backgroundColor={Colours.darkHotPink}
          shadowColor={Colours.darkHotPinkShadow}
          height={50}
          title="Continue"
          onPress={onNavigateBack}
          color="white"
          borderRadius={50}
        />
      </View>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    height: Platform.select({ ios: 120, android: 90 }),
    bottom: 0,
  },
});
