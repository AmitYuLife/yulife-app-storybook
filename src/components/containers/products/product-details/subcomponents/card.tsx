import React, { memo } from "react";
import { ProductColorTheme, PackageType, TextTemplate } from "@atoms";
import { View, StyleSheet } from "react-native";
import { Style, Colours } from "@styles";
import FastImage from "react-native-fast-image";
import { ValueDescription } from "@molecules";
import { CoverType } from "@graphql/_core/schema/globalTypes";

interface Props {
  coverType: CoverType;
  productName: string;
  benefitValue: string;
  benefitDescription: string;
  yuCoinValue: string;
  yuCoinDescription: string;
  benefitDescriptionLong: string;
  productIconUri: string;
}

export const Card = memo((props: Props) => {
  const {
    coverType,
    productName,
    productIconUri,
    benefitDescription,
    benefitDescriptionLong,
    benefitValue,
    yuCoinDescription,
    yuCoinValue,
  } = props;

  return (
    <ProductColorTheme.CardWrapper coverType={coverType}>
      <CardTop coverType={coverType} productName={productName} productIconUri={productIconUri} />
      <CardBottom
        benefitDescription={benefitDescription}
        benefitDescriptionLong={benefitDescriptionLong}
        benefitValue={benefitValue}
        coverType={coverType}
        yuCoinDescription={yuCoinDescription}
        yuCoinValue={yuCoinValue}
      />
    </ProductColorTheme.CardWrapper>
  );
});

const CardTop = memo(
  ({ coverType, productName, productIconUri }: Pick<Props, "coverType" | "productName" | "productIconUri">) => (
    <View style={cardTopStyles.padding}>
      <ProductColorTheme.GradientBackground coverType={coverType} />
      <PackageType type={coverType} />
      <View style={cardTopStyles.row}>
        <View style={cardTopStyles.title}>
          <TextTemplate color={Colours.neutral.white} type="h1">
            {productName}
          </TextTemplate>
        </View>
        <View style={cardTopStyles.iconWrapper}>
          <FastImage style={cardTopStyles.icon} source={{ uri: productIconUri }} />
        </View>
      </View>
    </View>
  )
);

const cardTopStyles = StyleSheet.create({
  padding: {
    padding: Style.adjust(24),
  },
  icon: {
    width: Style.adjust(80),
    height: Style.adjust(80),
  },
  row: {
    flexDirection: "row",
    marginTop: Style.adjust(16),
  },
  title: {
    maxWidth: Style.adjust(192),
  },
  iconWrapper: {
    flex: 1,
    alignItems: "flex-end",
  },
});

const CardBottom = memo(
  ({
    coverType,
    benefitValue,
    benefitDescription,
    yuCoinValue,
    yuCoinDescription,
    benefitDescriptionLong,
  }: Pick<
    Props,
    "coverType" | "benefitValue" | "benefitDescription" | "yuCoinValue" | "yuCoinDescription" | "benefitDescriptionLong"
  >) => (
    <View style={cardBottomStyles.padding}>
      <ProductColorTheme.FlatBackground coverType={coverType} />
      <ValueDescription value={benefitValue} description={benefitDescription} />
      <ValueDescription
        style={cardBottomStyles.margin}
        value={yuCoinValue}
        description={yuCoinDescription}
        type="yucoin"
      />
      <View style={cardBottomStyles.margin}>
        <TextTemplate type="b2">{benefitDescriptionLong}</TextTemplate>
      </View>
    </View>
  )
);

const cardBottomStyles = StyleSheet.create({
  margin: {
    marginTop: Style.adjust(16),
  },
  padding: {
    padding: Style.adjust(24),
  },
});
