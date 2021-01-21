import React, { memo, useState, useEffect } from "react";
import { Animated } from "react-native";
import { TouchableWithoutFeedback, View, StyleSheet, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import PackageType from "../../atoms/package-types/package-types";
import { CoverType } from "@graphql/_core/schema/globalTypes";

export interface IPackageSelectorProps {
  onPackageSelected: (packageType: CoverType) => void;
  commonCost?: number;
  rareCost?: number;
  epicCost?: number;
}

export const PackageSelector = memo(function (props: IPackageSelectorProps) {
  const { onPackageSelected, commonCost, rareCost, epicCost } = props;
  const [translateYAnimationCommon] = useState(new Animated.Value(0));
  const [translateYAnimationRare] = useState(new Animated.Value(4));
  const [translateYAnimationEpic] = useState(new Animated.Value(0));

  const [commonStyle, setCommonStyle] = useState(styles.packageWrapper);
  const [rareStyle, setRareStyle] = useState(styles.rarePackageWrapperActive);
  const [epicStyle, setEpicStyle] = useState(styles.packageWrapper);

  const [activeId, setActiveId] = useState(CoverType.rare);

  const label = commonCost && rareCost && epicCost ? "per month" : "of salary";

  useEffect(() => {
    Animated.timing(translateYAnimationCommon, {
      toValue: activeId === CoverType.common ? 4 : 0,
      duration: 160,
      useNativeDriver: true,
    }).start(() => {
      setCommonStyle(activeId === CoverType.common ? styles.commonPackageWrapperActive : styles.packageWrapper);
      if (activeId === CoverType.common) {
        onPackageSelected(CoverType.common);
      }
    });
  }, [translateYAnimationCommon, activeId, onPackageSelected]);

  useEffect(() => {
    Animated.timing(translateYAnimationRare, {
      toValue: activeId === CoverType.rare ? 4 : 0,
      duration: 160,
      useNativeDriver: true,
    }).start(() => {
      setRareStyle(activeId === CoverType.rare ? styles.rarePackageWrapperActive : styles.packageWrapper);
      if (activeId === CoverType.rare) {
        onPackageSelected(CoverType.rare);
      }
    });
  }, [translateYAnimationRare, activeId, onPackageSelected]);

  useEffect(() => {
    Animated.timing(translateYAnimationEpic, {
      toValue: activeId === CoverType.epic ? 4 : 0,
      duration: 160,
      useNativeDriver: true,
    }).start(() => {
      setEpicStyle(activeId === CoverType.epic ? styles.epicPackageWrapperActive : styles.packageWrapper);
      if (activeId === CoverType.epic) {
        onPackageSelected(CoverType.epic);
      }
    });
  }, [translateYAnimationEpic, activeId, onPackageSelected]);

  const onPackageChanged = (selectedPackage: CoverType) => {
    setActiveId(selectedPackage);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => onPackageChanged(CoverType.common)}>
        <View style={StyleSheet.flatten([styles.packageFullWrapper])}>
          <View style={styles.packageWrapperGrey} />
          <Animated.View style={[commonStyle, { transform: [{ translateY: translateYAnimationCommon }] }]}>
            <View style={styles.boxWrapper}>
              <Text bold={true} style={StyleSheet.flatten([styles.percentageText, { color: "#00CC87" }])}>
                {commonCost ? `£${commonCost}` : `25%`}
              </Text>
              <Text style={StyleSheet.flatten([styles.boxDescriptionText, { color: "#00CC87" }])}>{label}</Text>
              <View style={styles.packageTypeWrapper}>
                <PackageType type={CoverType.common} />
              </View>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => onPackageChanged(CoverType.rare)}>
        <View style={StyleSheet.flatten([styles.packageFullWrapper])}>
          <View style={styles.packageWrapperGrey} />
          <Animated.View style={[rareStyle, { transform: [{ translateY: translateYAnimationRare }] }]}>
            <View style={styles.boxWrapper}>
              <Text
                bold={true}
                style={StyleSheet.flatten([styles.percentageText, { color: Colours.products.fib.rare }])}
              >
                {rareCost ? `£${rareCost}` : `50%`}
              </Text>
              <Text style={StyleSheet.flatten([styles.boxDescriptionText, { color: Colours.products.fib.rare }])}>
                {label}
              </Text>
              <View style={styles.packageTypeWrapper}>
                <PackageType type={CoverType.rare} />
              </View>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => onPackageChanged(CoverType.epic)}>
        <View style={StyleSheet.flatten([styles.packageFullWrapper])}>
          <View style={styles.packageWrapperGrey} />
          <Animated.View style={[epicStyle, { transform: [{ translateY: translateYAnimationEpic }] }]}>
            <View style={styles.boxWrapper}>
              <Text
                bold={true}
                style={StyleSheet.flatten([styles.percentageText, { color: Colours.products.fib.epic }])}
              >
                {epicCost ? `£${epicCost}` : `75%`}
              </Text>
              <Text style={StyleSheet.flatten([styles.boxDescriptionText, { color: Colours.products.fib.epic }])}>
                {label}
              </Text>
              <View style={styles.packageTypeWrapper}>
                <PackageType type={CoverType.epic} />
              </View>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
});

const styles = StyleSheet.create({
  packageTypeWrapper: {
    marginTop: 12,
  },
  boxWrapper: {
    alignContent: "center",
    alignItems: "center",
    width: Style.adjust(96),
    paddingTop: Style.adjust(12),
  },
  packageFullWrapper: {
    height: Style.adjust(100),
    width: Style.adjust(96),
    borderRadius: 16,
  },
  packageWrapper: {
    height: Style.adjust(96),
    width: Style.adjust(96),
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: 16,
  },
  commonPackageWrapperActive: {
    height: Style.adjust(96),
    width: Style.adjust(96),
    backgroundColor: Colours.secondary.s10S1,
    borderWidth: 1,
    borderColor: "#00ED9D",
    borderRadius: 16,
  },
  rarePackageWrapperActive: {
    height: Style.adjust(96),
    width: Style.adjust(96),
    backgroundColor: Colours.secondary.s10S2,
    borderWidth: 1,
    borderColor: Colours.products.fib.rare,
    borderRadius: 16,
  },
  epicPackageWrapperActive: {
    height: Style.adjust(96),
    width: Style.adjust(96),
    backgroundColor: Colours.secondary.s10S3,
    borderWidth: 1,
    borderColor: Colours.products.fib.epic,
    borderRadius: 16,
  },
  packageWrapperGrey: {
    height: Style.adjust(96),
    width: Style.adjust(96),
    backgroundColor: Colours.neutral.n100,
    borderRadius: 16,
    position: "absolute",
    bottom: 0,
  },
  percentageText: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  },
  boxDescriptionText: {
    letterSpacing: 0.6,
    lineHeight: Style.adjust(12),
    fontSize: Style.adjust(12),
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Style.adjust(32),
  } as ViewStyle,
});
