import React, { memo } from "react";
import { Style } from "@styles";
import { TouchableOpacityWithDelay, YuCoinPower } from "@components/molecules";
import { showEarnRateOverlay } from "@components/containers/member/yu/navigation/showEarnRateOverlay";
import { ContentItemYuCoinPower as Props } from "@graphql/_core/schema";
import { mapServerStyles } from "..";
import { YUCOIN_POWER } from "@ids";

export const ContentItemYuCoinPower = memo(({ yuCoinPower, styles, marginHorizontal = 0 }: Props) => {
  return (
    <TouchableOpacityWithDelay
      style={mapServerStyles(styles)}
      onPress={showEarnRateOverlay}
      testID={YUCOIN_POWER(yuCoinPower)}
    >
      <YuCoinPower width={Style.DEVICE_WIDTH - marginHorizontal * 2} coins={yuCoinPower} />
    </TouchableOpacityWithDelay>
  );
});
