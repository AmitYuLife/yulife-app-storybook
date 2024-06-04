import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import { ComponentProps, memo } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { renderItem } from "./render-item";
import { NudgeItem } from "../nudge-item";
import { getSnapToOffsets } from "./get-snap-to-offsets";
import { INudgeItem } from "./types";

type Props = {
  data: Array<ComponentProps<typeof NudgeItem>>;
};

const VIEWABILITY_CONFIG = {
  waitForInteraction: false,
  minimumViewTime: 400,
  viewAreaCoveragePercentThreshold: 80,
};

const DECELERATION_RATE = Platform.select({
  ios: 0.8,
  android: 0.9,
});

const keyExtractor = ({ type, payload }: INudgeItem["item"]) => `${type}-${type === "PAD" ? payload : payload.type}`;

export const HorizontalList = memo(({ data }: Props) => {
  const builtData = buildData(data);

  return (
    <View style={styles.wrapper}>
      <FlashList
        renderItem={renderItem}
        snapToOffsets={getSnapToOffsets(data?.length)}
        data={builtData}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        estimatedItemSize={Style.adjust(291)}
        decelerationRate={DECELERATION_RATE}
        keyExtractor={keyExtractor}
        viewabilityConfig={VIEWABILITY_CONFIG}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
    height: Style.adjust(72),
    width: "100%",
  },
});

function buildData(data: Props["data"]) {
  return [
    { type: "PAD", payload: Style.adjust(8) },
    ...data.map((o) => ({ type: "NUDGE" as "NUDGE", payload: o })),
    { type: "PAD", payload: Style.adjust(16) },
  ] as const;
}
