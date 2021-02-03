import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ProductHeading } from "./product-heading";
import { ProductSubHeading, ISubHeadingProps } from "./product-sub-heading";
import { Style, Colours } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { ProductCtaIcon } from "./product-cta-icon";
import { getProductIcon } from "../../assets/getProductIcon";
import { PERSONAL_PRODUCT } from "@ids";
import { YuItemSlot, YuProductStatus } from "@graphql/_core/schema/globalTypes";

export interface IProductProps {
  itemSlot: YuItemSlot;
  tag?: string;
  heading: string;
  status?: YuProductStatus;
  subheading: ISubHeadingProps;
  onPress?: () => void;
  showSeparator?: boolean;
}

export const Product = (props: IProductProps) => {
  const { itemSlot, onPress, heading, subheading, status, showSeparator } = props;

  const IconSvg = getProductIcon(itemSlot);

  const isLocked = status === YuProductStatus.locked;

  return (
    <View>
      <Separator show={showSeparator} />
      <TouchableOpacityWithDelay activeOpacity={1} onPress={onPress} style={styles.wrapper}>
        <IconSvg
          status={status}
          style={StyleSheet.flatten([
            styles.productIconWrapper,
            { opacity: status === YuProductStatus.active ? 1 : 0.7 },
          ])}
        />
        <View style={styles.productInfoWrapper} testID={PERSONAL_PRODUCT(heading)}>
          <ProductHeading text={isLocked ? "Coming soon" : heading} />
          <View style={styles.productSubheadingWrapper}>
            <ProductSubHeading {...subheading} />
          </View>
        </View>
        <ProductCtaIcon status={status} />
      </TouchableOpacityWithDelay>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingLeft: Style.adjust(28),
    paddingRight: Style.adjust(16),
    minHeight: Style.adjust(128),
    alignItems: "center",
  } as ViewStyle,
  productIconWrapper: {
    width: Style.adjust(80),
  } as ViewStyle,
  productInfoWrapper: {
    marginLeft: Style.adjust(16),
    justifyContent: "center",
    paddingBottom: Style.adjust(8),
  } as ViewStyle,
  productSubheadingWrapper: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
  separator: {
    height: 1,
    backgroundColor: Colours.neutral.n100,
    position: "absolute",
    left: Style.adjust(24),
    right: Style.adjust(24),
    top: Style.adjust(0),
  } as ViewStyle,
});

function Separator({ show }: { show: boolean }) {
  if (!show) {
    return null;
  }

  return <View style={styles.separator} />;
}
