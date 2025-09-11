import { FlatList } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { ComponentProps, memo } from "react";
import { Platform, View } from "react-native";
import { renderItem } from "./render-item";
import { NudgeItem } from "../nudge-item";
import { INudgeItem } from "./types";
import { NUDGE_ITEM_MARGIN, NUDGE_ITEM_WIDTH } from "../nudge-item/styles";
import { MAXIMISE_YU_NUDGE_LIST } from "@ids";

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

const keyExtractor = ({ type, payload }: INudgeItem["item"]) =>
  `${type}-${type === "PAD" ? payload : payload.markdown}`;

const SNAP_TO_INTERVAL = NUDGE_ITEM_WIDTH + NUDGE_ITEM_MARGIN;

export const HorizontalList = memo(({ data }: Props) => {
  const builtData = buildData(data);

  return (
    <View style={styles.wrapper}>
      <FlatList
        testID={MAXIMISE_YU_NUDGE_LIST}
        renderItem={renderItem}
        snapToInterval={SNAP_TO_INTERVAL}
        data={builtData}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        decelerationRate={DECELERATION_RATE}
        keyExtractor={keyExtractor}
        viewabilityConfig={VIEWABILITY_CONFIG}
        style={styles.list}
        disableThrottle={true}
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
  list: {
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
