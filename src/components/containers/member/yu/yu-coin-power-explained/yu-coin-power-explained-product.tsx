import { View } from "react-native";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { delay } from "@utils/misc";
import { Style, Colours, StyleSheet } from "@styles";
import { TextTemplate, Image } from "@atoms";
import { Navigation } from "@navigation/main";
import { getRouteState } from "@redux/app/app.selectors";
import { navigateToProduct } from "../helpers/navigateToProduct";
import { YucoinPowerButtonMicro, Button } from "@components/molecules";
import { GetYuCoinPowerInfoQuery } from "@graphql/__generated";

type IGetYuCoinPowerInfoProducts = GetYuCoinPowerInfoQuery["getYuCoinPowerInfo"]["products"][0];
export interface IYuCoinPowerExplainedProductProps {
  product: IGetYuCoinPowerInfoProducts;
}

const YuCoinPowerExplainedProduct = ({ product }: IYuCoinPowerExplainedProductProps) => {
  const dispatch = useDispatch();
  const currentRoute = useSelector(getRouteState);

  const handleNavigateToProduct = useCallback(async () => {
    const { button } = product;

    if (button?.sduiAction) {
      dispatch({
        type: button.sduiAction.type,
        payload: button.sduiAction.payload,
      });
    } else if (button?.productAction) {
      await navigateToProduct(button.productAction, currentRoute);
    }

    // This is needed to ensure the product screen is loaded
    // before we close the yucoin modal, otherwise we see the
    // previous screen for a split second which looks quite janky
    await delay(300);
    await Navigation.dismissAllModals();
  }, [dispatch, currentRoute, product]);

  return (
    <View style={styles.productCard}>
      <View style={styles.productCardInner}>
        <View style={[styles.productCardHeader, { backgroundColor: product.backgroundColor }]}>
          <Image style={styles.productCardimage} source={product.image} width={Style.adjust(343)} />
          <YucoinPowerButtonMicro style={styles.productCardYuCoin} yuCoinPower={`+${product.yuCoinPower}`} />
        </View>
        <View style={styles.productCardBody}>
          <TextTemplate color={Colours.neutral.n900} type="b1b">
            {product.title}
          </TextTemplate>
          <TextTemplate type="l1">{product.description}</TextTemplate>
          <Button
            testID="yu-coin-power-explained-product-button"
            size="Narrow"
            translatedLabel={product.button.label}
            onPress={handleNavigateToProduct}
            wrapperStyle={styles.productCardButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    overflow: "hidden",
    padding: Style.adjust(1),
    paddingBottom: Style.adjust(5),
    borderRadius: Style.adjust(8),
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.n100,
  },
  productCardInner: {
    overflow: "hidden",
    borderRadius: Style.adjust(8),
  },
  productCardHeader: {
    minHeight: Style.adjust(150),
  },
  productCardBody: {
    overflow: "hidden",
    paddingVertical: Style.adjust(15),
    paddingHorizontal: Style.adjust(20),
    backgroundColor: Colours.neutral.white,
  },
  productCardYuCoin: {
    position: "absolute",
    top: Style.adjust(20),
    left: Style.adjust(20),
  },
  productCardimage: {},
  productCardButton: {
    marginTop: Style.adjust(20),
  },
});

export default memo(YuCoinPowerExplainedProduct);
