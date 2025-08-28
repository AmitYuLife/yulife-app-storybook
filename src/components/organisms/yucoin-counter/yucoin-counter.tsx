import React, { memo } from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import { Counter } from "@molecules";
import { Colours, Style } from "@styles";
import { useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { YuCoinTopNavIcon } from "@atoms/icon/yucoin-top-nav-icon";

interface IProps {
  shouldHighlightCoins?: boolean;
  textStyle?: TextStyle;
}

const YuCoinCounter = ({ shouldHighlightCoins, textStyle }: IProps) => {
  const coins = useSelector(getTotalCoins);
  return (
    <View style={styles.coinsWrapper}>
      <View>
        <Counter
          value={coins || 0}
          textStyle={StyleSheet.flatten([
            styles.coinsText,
            textStyle,
            shouldHighlightCoins ? { color: Colours.darkHotPink } : null,
          ])}
        />
      </View>
      <View>
        <YuCoinTopNavIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coinsWrapper: {
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    height: "100%",
  },
  coinsText: {
    fontSize: Style.adjust(18),
    marginEnd: Style.adjust(8),
  },
  coinsTextWrapper: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(YuCoinCounter);
