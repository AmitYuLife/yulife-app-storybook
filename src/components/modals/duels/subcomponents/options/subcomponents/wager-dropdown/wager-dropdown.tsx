import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "@atoms";
import styles from "./wager-dropdown.styles";
import images from "./wager-dropdown.images";
import DuelYucoin from "@screens/member/duels-hub/subcomponents/duel-entry/yucoin";
import FastImage from "react-native-fast-image";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface IProps {
  yucoin: number;
  pickerAmountLabel: string;
  onPress: () => void;
}

const WagerDropdown: FC<IProps> = ({ yucoin, pickerAmountLabel, onPress }) => {
  return (
    <TouchableOpacityWithDelay onPress={onPress} style={styles.wagerButton}>
      <View style={styles.boxShadow} />
      <View style={styles.wagerTrigger}>
        <View style={styles.yucoinWrapper}>
          <View style={styles.coinsWrapper}>
            <DuelYucoin height={26} width={26} />
          </View>
          <View>
            <Text bold={true} style={styles.yucoinLabel}>
              {pickerAmountLabel}
            </Text>
            {yucoin !== null ? <Text style={styles.yucoinLabel}>Your wager</Text> : null}
          </View>
        </View>
        <FastImage style={styles.dropdownArrow} source={images.arrow} />
      </View>
    </TouchableOpacityWithDelay>
  );
};

export default WagerDropdown;
