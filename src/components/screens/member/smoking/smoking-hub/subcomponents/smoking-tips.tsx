import * as React from "react";
import { FC, memo, useCallback } from "react";
import { FlatList, View } from "react-native";
import { SMOKING_INFO_PANEL } from "@ids";
import { HealthSmokingStateTip } from "@redux/health-smoking/health-smoking.types";
import { SNAP_TO_INTERVAL, DECELERATION_RATE, keyExtractor, VIEWABILITY_CONFIG } from "./smoking-tips.config";
import { TipCardItem, TipCardSeparator } from "@organisms";
import { styles as tipCardStyles } from "@organisms/tip-card/tip-card.styles";

interface Props {
  tips: HealthSmokingStateTip[];
}

export const SmokingTips: FC<Props> = memo(({ tips }) => {
  const renderItem = useCallback(({ item }: { item: HealthSmokingStateTip }) => <TipCardItem item={item} />, []);

  const renderSeparator = useCallback(() => <TipCardSeparator />, []);

  return (
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
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={tipCardStyles.contentContainer}
      />
    </View>
  );
});

export default SmokingTips;
