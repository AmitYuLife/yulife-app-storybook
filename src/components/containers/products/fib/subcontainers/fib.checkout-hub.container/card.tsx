import React, { memo } from "react";
import { StyleSheet, ViewStyle, TextStyle, View } from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { Text, PackageType } from "@atoms";
import { Style, Colours } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { GetYulifer_personal_chest_options_styles } from "@graphql/_core/schema";

interface Props {
  coverType: CoverType;
  actualCost: string;
  armor: GetYulifer_personal_chest_options_styles["armor"];
  name: string;
}

export const Card = memo((props: Props) => {
  const { coverType, actualCost, armor, name } = props;
  const cost = `£${actualCost}/month`;

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { borderColor: getBorderColor(coverType) }])}>
      <View style={StyleSheet.absoluteFill}>
        <MemoizedGradient colors={getGradient(coverType)} />
      </View>
      <View>
        <PackageType type={coverType} />
        <View style={styles.nameWrapper}>
          <Text bold={true} style={styles.name}>
            {name}
          </Text>
        </View>
        <View style={styles.costWrapper}>
          <Text bold={true} style={styles.cost}>
            {cost}
          </Text>
        </View>
      </View>
      <View style={styles.armorWrapper}>
        <FastImage source={{ uri: armor }} style={styles.armor} />
      </View>
    </View>
  );
});

const MemoizedGradient = memo(({ colors }: { colors: string[] }) => {
  return (
    <LinearGradient
      useAngle={true}
      angle={99}
      angleCenter={{ x: 0.5, y: 0.5 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 0.9947]}
      style={StyleSheet.absoluteFill}
      colors={colors}
    />
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingTop: Style.adjust(24),
    paddingBottom: Style.adjust(20),
    paddingLeft: Style.adjust(24),
    paddingRight: Style.adjust(12),
    marginHorizontal: Style.adjust(16),
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 2,
  } as ViewStyle,
  nameWrapper: {
    marginTop: Style.adjust(8),
    maxWidth: Style.adjust(200),
  } as ViewStyle,
  name: {
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: "white",
  } as TextStyle,
  costWrapper: {
    marginTop: Style.adjust(6),
  } as ViewStyle,
  cost: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    color: "white",
  } as TextStyle,
  armorWrapper: {
    marginLeft: "auto",
    marginTop: Style.adjust(-6),
  } as ViewStyle,
  armor: {
    height: Style.adjust(128),
    width: Style.adjust(128),
  },
});

function getGradient(coverType: CoverType) {
  switch (coverType) {
    case CoverType.common:
      return ["#06AE75", "#0CF0A3"];
    case CoverType.rare:
      return ["#00C0F3", "#8FDEFF"];
    case CoverType.epic:
      return ["#956AFF", "#BFA6FF"];
    default:
      return [];
  }
}

function getBorderColor(coverType: CoverType) {
  switch (coverType) {
    case CoverType.epic:
      return Colours.products.fib.epic;
    case CoverType.rare:
      return Colours.products.fib.rare;
    case CoverType.common:
    default:
      return Colours.products.fib.common;
  }
}
