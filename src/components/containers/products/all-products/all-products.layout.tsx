import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Colours, Style, TOP_BAR } from "@styles";
import { handleNavigateBack } from "@navigation/utils";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { GenericHeadingAbsolute } from "@organisms";
import { ALL_PRODUCTS_CONTAINER_VIEW } from "@ids";

interface Props {
  children: Element | Element[];
}

export const AllProductsLayout = ({ children }: Props) => {
  const currentRoute = useSelector(getRouteState);

  return (
    <SafeAreaView style={[styles.flex, styles.bgWhite]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex} testID={ALL_PRODUCTS_CONTAINER_VIEW}>
        <>
          <View style={styles.topPad} />
          {children}
          <View style={styles.bottomPad} />
        </>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleNavigateBack(currentRoute)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topPad: {
    height: TOP_BAR.HEIGHT + Style.adjust(32),
  },
  bottomPad: {
    height: Style.adjust(24),
  },
  flex: {
    flex: 1,
  },
  bgWhite: {
    backgroundColor: Colours.neutral.n50,
  },
});
