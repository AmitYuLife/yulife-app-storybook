import React, { FC, PropsWithChildren } from "react";
import { Colours } from "@styles";
import { ActivityIndicator, StyleSheet, View } from "react-native";

interface SduiStaticProps {
  isLoading: boolean;
}

export const SduiStaticLayout: FC<PropsWithChildren<SduiStaticProps>> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator color={Colours.primary.p600} />
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
