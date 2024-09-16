import React, { FC, memo } from "react";
import { FlatList, View } from "react-native";
import { SMOKING_INFO_PANEL } from "@ids";
import { HealthSmokingStateTip } from "@redux/health-smoking/health-smoking.types";
import { renderItem, Separator } from "./smoking-tips-subcomponents";
import { SNAP_TO_INTERVAL, DECELERATION_RATE, keyExtractor, VIEWABILITY_CONFIG } from "./smoking-tips.config";
import { smokingTipsStyles } from "./smoking-tips.styles";

interface Props {
  tips: HealthSmokingStateTip[];
}

export const SmokingTips: FC<Props> = memo(({ tips }) => (
  <View testID={SMOKING_INFO_PANEL}>
    <FlatList
      renderItem={renderItem}
      snapToInterval={SNAP_TO_INTERVAL}
      data={tips}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      decelerationRate={DECELERATION_RATE}
      keyExtractor={keyExtractor}
      viewabilityConfig={VIEWABILITY_CONFIG}
      style={smokingTipsStyles.wrapper}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={smokingTipsStyles.contentContainer}
    ></FlatList>
  </View>
));

export default SmokingTips;
