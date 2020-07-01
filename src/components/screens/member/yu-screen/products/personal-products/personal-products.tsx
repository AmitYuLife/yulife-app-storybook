import { Text } from "@atoms/index";
import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "../products.style";
import { getPersonalProductImage, PersonalType } from "../employer-products/employer-product.helper";
import { PERSONAL_PRODUCT } from "@ids";

interface IProps {
  isActive: boolean;
  type: PersonalType;
  onPressAction?: () => void;
  name: string;
}

function YuProducts({ isActive, type, onPressAction, name }: IProps) {
  return (
    <TouchableOpacity onPress={onPressAction} testID={PERSONAL_PRODUCT(type)}>
      <View style={styles.productWrapper}>
        {getPersonalProductImage(type)}
        <View style={styles.textWrapper}>
          <Text style={isActive ? styles.inactiveProducts : styles.inactiveProducts}>{name}</Text>
          <Text style={styles.tapForInfo}>tap for info</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default YuProducts;
