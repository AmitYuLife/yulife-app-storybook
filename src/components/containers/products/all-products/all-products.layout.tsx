import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { handleNavigateBack } from "@navigation/utils";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";

interface Props {
  children: Element | Element[];
}

export const AllProductsLayout = ({ children }: Props) => {
  const currentRoute = useSelector(getRouteState);

  return (
    <SafeAreaView style={[styles.flex, styles.bgWhite]}>
      <ScrollView style={styles.flex}>
        <View style={styles.topPad} />
        {children}
      </ScrollView>
      <TopBarAbsolute hasWhiteBackground={true} leftIcon="Back" onPressLeftIcon={handleNavigateBack(currentRoute)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topPad: {
    height: Style.adjust(60),
  },
  flex: {
    flex: 1,
  },
  bgWhite: {
    backgroundColor: Colours.neutral.n50,
  },
});
