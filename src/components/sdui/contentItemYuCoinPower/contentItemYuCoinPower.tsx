import React, { memo } from "react";
import { Style } from "@styles";
import { TouchableOpacityWithDelay, YuCoinPower } from "@components/molecules";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { ContentItemYuCoinPower as Props } from "@graphql/_core/schema";
import { mapServerStyles } from "..";
import { YUCOIN_POWER } from "@ids";
import { View } from "react-native";

export const ContentItemYuCoinPower = memo(({ yuCoinPower, styles, marginHorizontal = 0, interactive }: Props) => {
  const YuCoinPowerView = interactive ? TouchableOpacityWithDelay : View;
  return (
    <YuCoinPowerView
      style={mapServerStyles(styles)}
      onPress={interactive ? showYuCoinPowerExplainedOverlay : null}
      testID={YUCOIN_POWER(yuCoinPower)}
    >
      <YuCoinPower width={Style.DEVICE_WIDTH - marginHorizontal * 2} coins={yuCoinPower} hideInfoIcon={!interactive} />
    </YuCoinPowerView>
  );
});
