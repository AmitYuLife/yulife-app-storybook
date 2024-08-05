import React, { FC } from "react";
import { View } from "react-native";
import { RawImage, Text } from "@atoms";
import { t } from "@locale";
import styles from "./wager-dropdown.styles";
import images from "./wager-dropdown.images";
import DuelYucoin from "@screens/member/duels-hub/subcomponents/duel-entry/yucoin";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { PICKER_AMOUNT_LABEL } from "@ids";

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
            <Text bold={true} style={styles.yucoinLabel} testID={PICKER_AMOUNT_LABEL}>
              {pickerAmountLabel}
            </Text>
            {yucoin !== null ? (
              <Text style={styles.yucoinLabel}>{t("modals.duels.duel_options.your_wager")}</Text>
            ) : null}
          </View>
        </View>
        <RawImage style={styles.dropdownArrow} source={images.arrow} />
      </View>
    </TouchableOpacityWithDelay>
  );
};

export default WagerDropdown;
