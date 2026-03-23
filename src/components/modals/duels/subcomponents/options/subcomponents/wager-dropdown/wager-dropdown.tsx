import React, { FC } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { t } from "@locale";
import styles from "./wager-dropdown.styles";
import DuelYucoin from "@screens/member/duels-hub/subcomponents/duel-entry/yucoin";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { PICKER_AMOUNT_LABEL } from "@ids";
import { Colours } from "@styles";
import { ArrowButton } from "@components/molecules/arrow-button";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface IProps {
  yucoin: number;
  pickerAmountLabel: string;
  description?: string;
  onPress: () => void;
}

const WagerDropdown: FC<IProps> = ({
  yucoin,
  pickerAmountLabel,
  description = t("modals.duels.duel_options.your_wager"),
  onPress,
}) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacityWithDelay onPress={onPress} style={styles.wagerButton}>
      <View style={styles.boxShadow} />
      <View style={styles.wagerTrigger}>
        <View style={styles.yucoinWrapper}>
          <View style={styles.coinsWrapper}>
            <DuelYucoin height={26} width={26} />
          </View>
          <View>
            <TextTemplate type="b2b" color={Colours.neutral.n600} testID={PICKER_AMOUNT_LABEL}>
              {pickerAmountLabel}
            </TextTemplate>
            {yucoin !== null ? (
              <TextTemplate type="b2" color={Colours.neutral.n600}>
                {description}
              </TextTemplate>
            ) : null}
          </View>
        </View>
        <View style={styles.dropdownArrow}>
          <ArrowButton color={theme.colors.primary.p600} />
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

export default WagerDropdown;
