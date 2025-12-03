import React, { memo } from "react";
import { TextStyle, View } from "react-native";
import { Counter } from "@molecules";
import { Colours } from "@styles";
import { useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { YuCoinTopNavIcon } from "@atoms/icon/yucoin-top-nav-icon";
import { Box } from "@atoms";

interface IProps {
  shouldHighlightCoins?: boolean;
  textStyle?: TextStyle;
}

const YuCoinCounter = ({ shouldHighlightCoins, textStyle }: IProps) => {
  const coins = useSelector(getTotalCoins);
  return (
    <Box flexDirection="row" alignItems="center" alignSelf="flex-end" justifyContent="center" height="100%">
      <Box mr={8}>
        <Counter
          value={coins || 0}
          type="b2"
          color={shouldHighlightCoins ? Colours.darkHotPink : (textStyle.color as string)}
        />
      </Box>
      <View>
        <YuCoinTopNavIcon />
      </View>
    </Box>
  );
};

export default memo(YuCoinCounter);
