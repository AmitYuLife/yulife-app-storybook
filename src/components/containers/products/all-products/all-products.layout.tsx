import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Colours, Style, TOP_BAR } from "@styles";
import { handleNavigateBack } from "@navigation/utils";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { GenericHeadingAbsolute } from "@organisms";

interface Props {
  children: Element | Element[];
}

export const AllProductsLayout = ({ children }: Props) => {
  const currentRoute = useSelector(getRouteState);

  return (
    <SafeAreaView style={[styles.flex, styles.bgWhite]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
        <View style={styles.topPad} />
        {children}
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleNavigateBack(currentRoute)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topPad: {
    height: TOP_BAR.HEIGHT + Style.adjust(32),
  },
  flex: {
    flex: 1,
  },
  bgWhite: {
    backgroundColor: Colours.neutral.n50,
  },
});
