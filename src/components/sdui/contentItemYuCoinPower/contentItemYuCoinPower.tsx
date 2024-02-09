import React, { memo } from "react";
import { Style } from "@styles";
import { TouchableOpacityWithDelay, YuCoinPower } from "@components/molecules";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { ContentItemYuCoinPowerFragment as Props } from "@graphql/__generated";
import { mapServerStyles } from "..";
import { YUCOIN_POWER } from "@ids";
import { View } from "react-native";

export const ContentItemYuCoinPower = memo(
  ({ yuCoinPower, styles, containerStyles, marginHorizontal = 0, interactive, inactive }: Props) => {
    const YuCoinPowerView = interactive ? TouchableOpacityWithDelay : View;
    return (
      <View style={mapServerStyles(containerStyles)}>
        <YuCoinPowerView
          style={mapServerStyles(styles)}
          onPress={interactive ? showYuCoinPowerExplainedOverlay : null}
          testID={YUCOIN_POWER(yuCoinPower)}
        >
          <YuCoinPower
            width={Style.DEVICE_WIDTH - marginHorizontal * 2}
            coins={yuCoinPower}
            hideInfoIcon={!interactive}
            inactive={inactive}
          />
        </YuCoinPowerView>
      </View>
    );
  }
);
