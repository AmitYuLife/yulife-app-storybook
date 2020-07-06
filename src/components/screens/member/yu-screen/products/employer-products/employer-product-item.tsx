import { Text } from "@atoms/index";
import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./employer-product-item.styles";
import EmployerProductIcon from "../../svg/employer-products";
import { GetYulifer_getYulifer_products_personal } from "@graphql/_core/schema";

interface IProps {
  product: GetYulifer_getYulifer_products_personal;
  onPressAction?: () => void;
}

function EmployerBenefitsItem({ onPressAction, product }: IProps) {
  return (
    <TouchableOpacity onPress={onPressAction} style={styles.employerBenefitsItemWrapper}>
      <View style={styles.employerBenefitsItemImage}>
        <EmployerProductIcon active={product.active} icon={product.icon} />
      </View>
      <Text style={product.active ? styles.employerBenefitsItemText : styles.employerBenefitsItemTextPassive}>
        {product.name}
      </Text>
    </TouchableOpacity>
  );
}

export default EmployerBenefitsItem;
