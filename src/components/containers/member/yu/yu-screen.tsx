import React, { useCallback, useState } from "react";
import { StyleSheet, ViewStyle, View, ScrollView } from "react-native";
import { NameAndLevel, AvatarAndEquipment, YuCoinPower, ProductSet, ToolTip } from "./subcomponents";
import { TopBar } from "@organisms";
import { Style } from "@styles";

export const YuScreen = () => {
  const [product, setProduct] = useState(null);

  const handleCloseModal = useCallback(() => {
    setProduct(null);
  }, [setProduct]);

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
        <View style={styles.padTop} />
        <NameAndLevel />
        <AvatarAndEquipment product={product} setProduct={setProduct} />
        <YuCoinPower />
        <ProductSet type="charms" />
        <ProductSet type="employer" />
        <ProductSet type="personal" />
        <View style={styles.padBot} />
        <ToolTip code={product} onClose={handleCloseModal} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  list: {
    flex: 1,
  } as ViewStyle,
  padTop: {
    height: TopBar.HEIGHT + Style.getSafeAreaStart(),
  } as ViewStyle,
  padBot: {
    height: 120,
  } as ViewStyle,
});
