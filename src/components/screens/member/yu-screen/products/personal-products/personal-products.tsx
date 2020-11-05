import { Text } from "@atoms/index";
import * as React from "react";
import { View } from "react-native";
import { TouchableOpacityWithDelay } from "@molecules";
import styles from "../products.style";
import { PERSONAL_PRODUCT } from "@ids";
import PersonalProductsIcon from "../../svg/yuser-products";

export type PersonalType = "LifeInsurance" | "IncomeProtection" | "CriticalIllness" | "TravelInsurance" | string;
interface IProps {
  isActive: boolean;
  type: PersonalType;
  onPressAction?: () => void;
  name: string;
}

function YuProducts({ isActive, type, onPressAction, name }: IProps) {
  return (
    <TouchableOpacityWithDelay onPress={onPressAction} testID={PERSONAL_PRODUCT(type)}>
      <View style={styles.productWrapper}>
        <PersonalProductsIcon icon={type} active={isActive} />
        <View style={isActive ? styles.textWrapperActiveProduct : styles.textWrapperInactiveProduct}>
          <Text style={styles.productName}>{name}</Text>
          {isActive ? (
            <Text bold={true} style={styles.tapForInfo}>
              tap for info
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
}

export default YuProducts;
