import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { ContentItemPackageCards_packageCards } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { showEarnRateOverlay } from "@components/containers/member/yu/navigation/showEarnRateOverlay";
import PackageCardHeader from "./package-card-header";
import { PackageCardPerks } from "./package-card-perks";
import YuCoinPowerMini from "./yucoin-power-mini";

interface OwnProps {
  width: number;
}

type Props = ContentItemPackageCards_packageCards & OwnProps;

export const PackageCard = memo((props: Props) => {
  const borderColor = useMemo(() => ({ borderColor: getBorderColor(props.coverType) }), [props.coverType]);

  return (
    <View style={[styles.centerContent, { width: props.width }]}>
      <View style={[styles.wrapper, borderColor]}>
        <View style={styles.bgWhite} />
        <PackageCardHeader width={props.width} coverType={props.coverType} header={props.header} />
        <View style={styles.container}>
          <View style={styles.yucoin}>
            <YuCoinPowerMini coinValue={props.bonusEarnRate} onPress={showEarnRateOverlay} />
          </View>
          <Perks powers={props.powers} />
        </View>
      </View>
    </View>
  );
});

const BORDER_RADIUS = Style.adjust(16);

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Style.adjust(4),
  },
  wrapper: {
    borderRadius: BORDER_RADIUS,
    width: "100%",
  },
  container: {
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(24),
    paddingBottom: Style.adjust(16),
  },
  bgWhite: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: BORDER_RADIUS,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  yucoin: {
    marginBottom: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
  },
});

const Perks = ({ powers }: { powers: ContentItemPackageCards_packageCards["powers"] }) => {
  return (
    <View>
      {powers.map((perk, index: number) => (
        <PackageCardPerks key={index} {...perk} />
      ))}
    </View>
  );
};

const getBorderColor = (coverType: CoverType) => {
  if (coverType === CoverType.epic) {
    return Colours.products.fib.epic;
  }

  if (coverType === CoverType.rare) {
    return Colours.products.fib.rare;
  }

  return Colours.products.fib.common;
};
