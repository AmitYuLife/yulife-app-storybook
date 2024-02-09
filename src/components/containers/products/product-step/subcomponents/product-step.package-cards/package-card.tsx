import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { ContentItemPackageCardsFragment, CoverType } from "@graphql/__generated";
import { PackageCardPerks, YuCoinPower } from "@molecules";
import PackageCardHeader from "./package-card-header";
import { YUCOIN_POWER } from "@ids";

interface OwnProps {
  width: number;
}

type Props = ContentItemPackageCardsFragment["packageCards"][0] & OwnProps;

export const PackageCard = memo((props: Partial<Props>) => {
  const borderColor = useMemo(() => ({ borderColor: getBorderColor(props.coverType) }), [props.coverType]);

  const wrapperStyle = useMemo(() => {
    return [styles.centerContent, { width: props.width }];
  }, [props.width]);

  const innerWrapperStyle = useMemo(() => {
    return [styles.wrapper, borderColor];
  }, [borderColor]);

  return (
    <View style={wrapperStyle}>
      <View style={innerWrapperStyle}>
        <View style={styles.bgWhite} />
        <PackageCardHeader width={props.width} coverType={props.coverType} header={props.header} />
        <View style={styles.container} testID={YUCOIN_POWER(props.bonusEarnRate)}>
          <View style={styles.yucoin}>
            <YuCoinPower width={Style.DEVICE_WIDTH - 104} coins={props.bonusEarnRate} hideInfoIcon={true} />
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
    borderWidth: 1,
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

const Perks = ({ powers }: { powers: ContentItemPackageCardsFragment["packageCards"][0]["powers"] }) => {
  return (
    <View>
      {powers.map((perk, index: number) => (
        <PackageCardPerks key={index} {...perk} />
      ))}
    </View>
  );
};

const getBorderColor = (coverType: CoverType) => {
  if (coverType === CoverType.Epic) {
    return Colours.products.fib.epic;
  }

  if (coverType === CoverType.Rare) {
    return Colours.products.fib.rare;
  }

  return Colours.products.fib.common;
};
