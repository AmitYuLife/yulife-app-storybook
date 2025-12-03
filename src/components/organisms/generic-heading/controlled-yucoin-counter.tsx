import { memo } from "react";
import { TextStyle } from "react-native";
import { Counter } from "@molecules";
import { TOP_BAR, Colours } from "@styles";
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
        <Box mr={8}>
          <Counter
            value={coins || 0}
            type="b2"
            color={shouldHighlightCoins ? Colours.darkHotPink : (textStyle.color as string)}
          />
        </Box>
        <Box>
          <YuCoinTopNavIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ControlledYuCoinCounter);
