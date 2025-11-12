import { memo } from "react";
import { TextStyle } from "react-native";
import { Counter } from "@molecules";
import { TOP_BAR, Colours, Style, StyleSheet } from "@styles";
import { YuCoinTopNavIcon } from "@atoms/icon/yucoin-top-nav-icon";
import { Box } from "@atoms";

interface IProps {
  coins: number;
  backgroundColor?: string;
  textStyle?: TextStyle;
  shouldHighlightCoins?: boolean;
}

const ControlledYuCoinCounter = ({
  coins,
  backgroundColor = Colours.neutral.white,
  textStyle,
  shouldHighlightCoins,
}: IProps) => {
  return (
    <Box
      pointerEvents="box-none"
      bg={backgroundColor}
      h={TOP_BAR.TOP_BAR_WITH_PAD}
      pt={TOP_BAR.PADDING_TOP}
      justifyContent="flex-end"
      alignItems="flex-end"
      ph={16}
      position="absolute"
      left={0}
      right={0}
    >
      <Box alignItems="center" alignSelf="flex-end" justifyContent="center" flexDirection="row" height="100%">
        <Box>
          <Counter
            value={coins || 0}
            textStyle={StyleSheet.flatten([
              styles.coinsText,
              textStyle,
              shouldHighlightCoins ? { color: Colours.darkHotPink } : null,
            ])}
          />
        </Box>
        <Box>
          <YuCoinTopNavIcon />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  coinsText: {
    fontSize: Style.adjust(18),
    marginEnd: Style.adjust(8),
  },
});

export default memo(ControlledYuCoinCounter);
