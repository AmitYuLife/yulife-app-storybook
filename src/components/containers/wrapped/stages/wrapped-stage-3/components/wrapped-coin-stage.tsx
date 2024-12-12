import { Box, TextTemplate } from "@atoms";
import { WRAPPED_BOTTOM_OFFSET } from "@components/containers/wrapped/wrapped.constants";
import { IWrappedStats } from "@components/containers/wrapped/wrapped.types";
import { Button } from "@components/molecules";
import { t } from "@locale";
import { addCommasToNumber } from "@utils";
import { memo } from "react";
import { FadeIn, FadeOutDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const YUCOIN_CONTENT_DELAY = 4000;

interface IWrappedCoinStageProps {
  stats: IWrappedStats;
  onPress: () => void;
}

const WrappedCoinStage = ({ stats, onPress }: IWrappedCoinStageProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box
      px={40}
      w="100%"
      h="100%"
      pb={insets.bottom + WRAPPED_BOTTOM_OFFSET}
      position="absolute"
      alignItems="center"
      justifyContent="space-between"
      exiting={FadeOutDown.duration(1000)}
    >
      <Box flex={1} />
      <Box w="100%" p={30} px={20} mb={80} justifyContent="center" alignItems="center" gap={15}>
        <Box entering={FadeIn.delay(YUCOIN_CONTENT_DELAY).duration(1000)}>
          <TextTemplate type="b1b" textAlign="center">
            {t("screens.wrapped.stage_3.collected")}
          </TextTemplate>
        </Box>
        <Box entering={FadeIn.delay(YUCOIN_CONTENT_DELAY + 1000).duration(1000)}>
          <TextTemplate type="bigYuCoin" color="#640038" textAlign="center">
            {t("screens.wrapped.stage_3.yucoin_amount", { amount: addCommasToNumber(stats.totalYuCoin) })}
          </TextTemplate>
        </Box>
      </Box>
      <Box entering={FadeIn.delay(YUCOIN_CONTENT_DELAY + 3000).duration(1000)}>
        <Button translationKey="labels.cta.continue" onPress={onPress} />
      </Box>
    </Box>
  );
};

export default memo(WrappedCoinStage);
