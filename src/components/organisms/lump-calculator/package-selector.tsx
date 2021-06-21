import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { BoxOption } from "@atoms";
import { BoxLabel } from "./box-label";

export interface IPackageSelectorProps {
  selectedPackage: CoverType;
  onPackageSelected: (packageType: CoverType) => void;
  commonCost?: number;
  rareCost?: number;
  epicCost?: number;
}

export const PackageSelector = memo(function (props: IPackageSelectorProps) {
  const { onPackageSelected, selectedPackage, commonCost, rareCost, epicCost } = props;
  const label = commonCost && rareCost && epicCost ? "per month" : "of salary";

  const coverTypes = [
    {
      coverType: CoverType.common,
      cost: commonCost ? `£${commonCost}` : "25%",
      coverTheme: Colours.products.fib.commonShadow,
      selectedStyle: styles.commonSelectedStyle,
    },
    {
      coverType: CoverType.rare,
      cost: rareCost ? `£${rareCost}` : `50%`,
      coverTheme: Colours.products.fib.rare,
      selectedStyle: styles.rareSelectedStyle,
    },
    {
      coverType: CoverType.epic,
      cost: epicCost ? `£${epicCost}` : "75%",
      coverTheme: Colours.products.fib.epic,
      selectedStyle: styles.epicSelectedStyle,
    },
  ];

  const onPackageChanged = (selectedPackage: CoverType) => {
    onPackageSelected(selectedPackage);
  };

  return (
    <View style={styles.wrapper}>
      {coverTypes.map(({ selectedStyle, coverType, cost, coverTheme }) => (
        <View key={coverType} style={styles.boxWrapper}>
          <BoxOption
            selectedStyle={selectedStyle}
            isSelected={selectedPackage === coverType}
            onPress={() => onPackageChanged(coverType)}
            wrapperStyle={styles.wrapperStyle}
            innerHeight={Style.adjust(88)}
          >
            <BoxLabel cost={cost} coverTheme={coverTheme} coverType={coverType} label={label} />
          </BoxOption>
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapperStyle: {
    width: Style.adjust(98),
  } as ViewStyle,
  boxWrapper: {
    marginHorizontal: Style.adjust(8),
  },
  commonSelectedStyle: {
    borderColor: Colours.products.fib.common,
  } as ViewStyle,
  rareSelectedStyle: {
    borderColor: Colours.products.fib.rare,
  } as ViewStyle,
  epicSelectedStyle: {
    borderColor: Colours.products.fib.epic,
  } as ViewStyle,
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Style.adjust(32),
  } as ViewStyle,
});
