import { Text } from "@atoms/index";
import * as React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./employer-product-item.styles";
import EmployerProductIcon from "../../svg/employer-products";
import { GetYulifer_getYulifer_products_personal } from "@graphql/_core/schema";

interface IProps {
  product: GetYulifer_getYulifer_products_personal;
  onPressAction?: () => void;
}

function EmployerBenefitsItem({ onPressAction, product }: IProps) {
  const isTwoDigits = product.earnRate.toString().length === 2;
  const leftPosition = isTwoDigits && product.earnRate > 10 ? 2 : isTwoDigits ? 3 : 0;

  return (
    <TouchableOpacity onPress={onPressAction} style={styles.employerBenefitsItemWrapper}>
      <View style={styles.employerBenefitsItemImage}>
        <EmployerProductIcon
          active={product.active}
          icon={product.icon}
          rateViewStyle={styles.rateView}
          rateTextStyle={StyleSheet.flatten([styles.rateText, leftPosition ? { left: leftPosition } : {}])}
          earnRate={product.earnRate}
        />
      </View>
      <Text style={product.active ? styles.employerBenefitsItemText : styles.employerBenefitsItemTextPassive}>
        {product.name}
      </Text>
    </TouchableOpacity>
  );
}

export default EmployerBenefitsItem;
