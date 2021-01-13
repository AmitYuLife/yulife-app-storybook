import React, { memo } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PackageTypes, { IType } from "../package-types/package-types";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { Style, Colours } from "@styles";
import { DoubleChest, Streak, Shoe, Text } from "@atoms";
import { PACKAGE_INFO } from "@ids";

export interface Props {
  selectedPackage: Package;
  packagePrice?: number | string;
}

interface Key {
  [key: string]: any;
}

interface Option {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const powersIcons: Key = {
  double_chest: <DoubleChest />,
  streak_reward: <Streak />,
  daily_step_limit: <Shoe />,
};

const boxInfoData: Key = {
  common: {
    header: {
      linearGradient: [Colours.products.fib.common, "#06AE75", "#06AE75", "#0CF0A3"],
      locations: [0, 0, 0.01, 0.99],
    },
    body: {
      backgroundColor: Colours.secondary.s10S1,
      linearGradient: ["rgba(177, 249, 224, 0.6)", "rgba(0, 237, 157, 0.6)", "rgba(177, 249, 224, 0.6)"],
    },
    border: {
      linearGradient: ["rgba(26, 189, 134, 0.3)", "#1ABD86", "rgba(26, 189, 134, 0.31)"],
    },
  },

  rare: {
    header: {
      linearGradient: [Colours.products.fib.rare, "#8FDEFF"],
      locations: [0, 0.99],
    },
    body: {
      backgroundColor: Colours.secondary.s10S2,
      linearGradient: ["rgba(15, 195, 244, 0.15)", "rgba(15, 195, 244, 0.6)", "rgba(15, 195, 244, 0.15)"],
    },
    border: {
      linearGradient: ["rgba(45, 166, 216, 0.3)", "#2DA6D8", "rgba(45, 166, 216, 0.31)"],
    },
  },
  epic: {
    header: {
      linearGradient: [Colours.products.fib.epic, "#BFA6FF"],
      locations: [0, 0.99],
    },
    body: {
      backgroundColor: Colours.secondary.s10S3,
      linearGradient: ["rgba(149, 106, 255, 0.25)", "#956AFF", "rgba(149, 106, 255, 0.25)"],
    },
    border: {
      linearGradient: ["rgba(149, 106, 255, 0.3)", "#AF8EFF", "rgba(149, 106, 255, 0.31)"],
    },
  },
};

const PackageInfo: React.FC<Props> = ({ selectedPackage, packagePrice }) => {
  const selectedPackageInfo = boxInfoData[selectedPackage?.id];

  return (
    <LinearGradient
      testID={PACKAGE_INFO}
      colors={selectedPackageInfo.border.linearGradient}
      locations={[0, 0.5, 1]}
      style={styles.wrapper}
    >
      <LinearGradient
        useAngle={true}
        angle={99.69}
        colors={selectedPackageInfo.header.linearGradient}
        style={styles.header}
        locations={selectedPackageInfo.header.locations}
      >
        <View style={styles.priceWrapper}>
          <PackageTypes type={selectedPackage?.id as IType} />
          {packagePrice ? <Text style={styles.price}>£{packagePrice}/month</Text> : null}
        </View>
        <View style={styles.titleWrapper}>
          <Text bold={true} style={styles.title}>
            {selectedPackage?.title.substring(0, 9)}
          </Text>
          <Text bold={true} style={styles.title}>
            {selectedPackage?.title.substring(9, selectedPackage?.title?.length)}
          </Text>
        </View>
      </LinearGradient>

      <View style={[styles.body, { backgroundColor: selectedPackageInfo.body.backgroundColor }]}>
        <View style={styles.description}>
          <Text style={styles.number}>{selectedPackage?.salaryPercentageCovered}</Text>
          <Text style={[styles.numberText, styles.percentage]}>%</Text>
          <Text style={styles.numberText}> of salary covered </Text>
        </View>

        <View style={[styles.description, styles.marginTop16]}>
          <Text style={[styles.number, styles.yuCoin]}>{selectedPackage?.earnRate}</Text>
          <Text style={[styles.numberText, styles.yuCoinPower]}>YuCoin Power</Text>
        </View>

        <LinearGradient
          colors={selectedPackageInfo.body.linearGradient}
          style={styles.separator}
          useAngle={true}
          locations={[1, 0.53, 0]}
        />

        {selectedPackage.powers.map((option: Option, index: number) => (
          <View
            style={[
              styles.optionWrapper,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                marginBottom: selectedPackage.powers.length !== index + 1 ? 16 : null,
              },
            ]}
            key={index}
          >
            <View style={styles.icon}>{powersIcons[option.id]}</View>
            <View style={styles.optionDetail}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionDescription}>{option.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(328),
    alignSelf: "center",
    borderRadius: 16,
    marginTop: 5,
  } as ViewStyle,
  header: {
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    height: Style.adjust(160),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: Style.adjust(24),
  } as ViewStyle,
  titleWrapper: {
    marginTop: 14,
  },
  title: {
    color: Colours.neutral.white,
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
  } as TextStyle,
  body: {
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 24,
  } as ViewStyle,
  description: {
    flexDirection: "row",
    alignItems: "flex-end",
  } as ViewStyle,
  number: {
    color: Colours.neutral.n800,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(28),
  } as TextStyle,
  numberText: {
    color: Colours.neutral.n800,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: 24,
  } as TextStyle,
  separator: {
    width: Style.adjust(296),
    height: 1,
    opacity: 0.35,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 16,
  } as ViewStyle,
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  price: {
    color: Colours.neutral.white,
    fontSize: Style.adjust(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    marginLeft: 8,
    marginTop: 2,
  } as TextStyle,
  percentage: {
    marginTop: 4,
  } as TextStyle,
  yuCoin: {
    color: Colours.orange,
    marginRight: 8,
  } as TextStyle,
  yuCoinPower: {
    color: "#EDAD25",
  } as TextStyle,
  optionWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  icon: {
    alignSelf: "flex-start",
    marginRight: 17,
  } as ViewStyle,
  optionDetail: {
    flexDirection: "column",
  } as ViewStyle,
  optionTitle: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  } as TextStyle,
  optionDescription: {
    color: Colours.neutral.n700,
    fontSize: Style.adjust(14),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.adjust(18),
    letterSpacing: 0.4,
    marginTop: 4,
    paddingRight: Style.adjust(40),
  } as TextStyle,
  gradientText: {
    opacity: 0,
  },
  marginTop16: {
    marginTop: 16,
  } as ViewStyle,
});

export default memo(PackageInfo);
