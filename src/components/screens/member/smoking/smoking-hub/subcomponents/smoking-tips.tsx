import * as React from "react";
import { FC, memo } from "react";
import { FlatList, View } from "react-native";
import { SMOKING_INFO_PANEL } from "@ids";
import { HealthSmokingStateTip } from "@redux/health-smoking/health-smoking.types";
import { SNAP_TO_INTERVAL, DECELERATION_RATE, keyExtractor, VIEWABILITY_CONFIG } from "./smoking-tips.config";
import { TipCardItem, TipCardSeparator, tipCardStyles } from "@organisms";

interface Props {
  tips: HealthSmokingStateTip[];
}

export const SmokingTips: FC<Props> = memo(({ tips }) => (
  <View testID={SMOKING_INFO_PANEL}>
    <FlatList
      renderItem={TipCardItem}
      snapToInterval={SNAP_TO_INTERVAL}
      data={tips}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      decelerationRate={DECELERATION_RATE}
      keyExtractor={keyExtractor}
      viewabilityConfig={VIEWABILITY_CONFIG}
      style={tipCardStyles.wrapper}
      ItemSeparatorComponent={TipCardSeparator}
      contentContainerStyle={tipCardStyles.contentContainer}
    />
  </View>
));

export default SmokingTips;
