import React, { memo } from "react";
import { Platform, StyleSheet, TextStyle, View } from "react-native";
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
      <View style={styles.coinsTextWrapper}>
        <Counter
          value={coins || 0}
          textStyle={StyleSheet.flatten([
            styles.coinsText,
            textStyle,
            shouldHighlightCoins ? { color: Colours.darkHotPink } : null,
          ])}
        />
      </View>
      <View style={styles.coinsLogoWrapper}>
        <YuCoinTopNavIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coinsWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: Style.adjust(30),
  },
  coinsLogoWrapper: {
    marginBottom: Platform.select({ ios: Style.adjust(-10), android: 2 }),
  },
  coinsText: {
    fontSize: Style.adjust(18),
    marginBottom: Style.adjust(Platform.select({ ios: -12, android: 4 })),
    marginRight: Style.adjust(8),
  },
  coinsTextWrapper: {
    height: "100%",
    justifyContent: "center",
  },
});

export default memo(YuCoinCounter);
