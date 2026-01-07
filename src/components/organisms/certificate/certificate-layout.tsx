import React from "react";
import { View, ViewStyle } from "react-native";
import { Medal } from "./background-medal";
import { mapCoverToColor, Style, StyleSheet } from "@styles";
import { ConcentricSet } from "./background-concentric";
import { CornerFlowerSet } from "./background-corner-flower";
import { CoverType } from "@graphql/__generated";

interface Props {
  children: React.ReactNode;
  coverType: CoverType;
}

export const CertificateLayout = (props: Props) => {
  const { children, coverType } = props;
  const {
    solidBorder,
    certificateBackground,
    cornerFlower,
    cornerFlowerAccent,
    concentricCircles,
    medalBorder,
    certificatePrimary,
  } = mapCoverToColor(coverType);

  return (
    <View style={styles.shapeWrapper}>
      <View style={[styles.borderWrapper, { borderColor: solidBorder, backgroundColor: certificateBackground }]}>
        <ConcentricSet color={concentricCircles} />
        <CornerFlowerSet color={cornerFlower} accent={cornerFlowerAccent} />
        {children}
      </View>
      <View style={styles.medalWrapper}>
        <Medal medalBorder={medalBorder} medalFill={certificatePrimary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shapeWrapper: {
    width: "100%",
    paddingBottom: Style.adjust(27),
  } as ViewStyle,
  borderWrapper: {
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  medalWrapper: {
    position: "absolute",
    start: 0,
    end: 0,
    bottom: 0,
    alignItems: "center",
  } as ViewStyle,
});
