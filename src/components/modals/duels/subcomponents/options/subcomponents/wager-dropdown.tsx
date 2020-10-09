import React, { FC } from "react";
import { TouchableWithoutFeedback, View, Text, Platform, Image } from "react-native";
import styles from "./wager-dropdown.styles";
import OptionPicker from "../../picker";
import images from "./wager-dropdown.images";

interface IOption {
  id: string;
  value: number;
  label: string;
}

interface IProps {
  onWagerPress: () => void;
  wagerOptions: IOption[];
  setYucoin: (value: number) => void;
  setPickerYuCoinAmount: (value: string) => void;
  yucoin: number;
  pickerYuCoinAmount: string;
  disabled: boolean;
}

const WagerDropdown: FC<IProps> = ({
  wagerOptions,
  disabled,
  onWagerPress,
  pickerYuCoinAmount,
  setYucoin,
  setPickerYuCoinAmount,
}) => {
  if (disabled) {
    return (
      <View style={[styles.dropdown, styles.disabled]}>
        <Text style={[styles.paragraph, styles.disabledText]}>You do not have enough YuCoin</Text>
      </View>
    );
  }

  const isIOS = Platform.OS === "ios";

  if (isIOS) {
    return (
      <>
        <TouchableWithoutFeedback onPress={onWagerPress}>
          <View style={styles.dropdown}>
            <Text style={styles.paragraph}>{pickerYuCoinAmount}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Image style={styles.dropdownArrow} source={images.arrow} />
      </>
    );
  }

  return (
    <OptionPicker
      options={wagerOptions}
      selectedValue={pickerYuCoinAmount}
      onValueChange={(itemValue) => {
        setPickerYuCoinAmount(itemValue);
        setYucoin(wagerOptions.find((option) => option.label === itemValue).value);
      }}
    />
  );
};

export default WagerDropdown;
