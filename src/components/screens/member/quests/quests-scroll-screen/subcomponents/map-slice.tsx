import React, { memo, useContext, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "@styles";
import { IMapSlice, LevelBubble, MAP_SLICE_HEIGHT } from "../assets";
import { HALF_MAP_SLICE_HEIGHT } from "../assets/slices.settings";
import { QuestsMapContext } from "../quests.context";

interface IProps extends IMapSlice {
  onPress?: () => void;
}

const MapSlice = memo(
  (props: IProps) => {
    const { slots, id, image } = props;
    const { formattedLevels, currentLevel } = useContext(QuestsMapContext);
    const hasForestInterstitial = useMemo(() => isIphoneX() && id === "MAP_SLICE_W01_INTERSTITIALS_01", [id]);
    const levels = slots.map((slot) => formattedLevels[slot.index]).filter(Boolean);

    return (
      <View key={id} style={hasForestInterstitial ? styles.halfMapSliceWrapper : styles.wrapper}>
        <FastImage source={image} style={styles.image} />
        <View style={styles.levelButtonWrapper}>
          {levels.map((level, index) => (
            <LevelBubble key={level.id} currentLevel={currentLevel} index={index} level={level} slots={slots} />
          ))}
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => prevProps.id !== nextProps.id
);

export default MapSlice;

const styles = StyleSheet.create({
  image: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: Style.DEVICE_WIDTH,
    height: MAP_SLICE_HEIGHT,
  },
  levelButtonWrapper: {
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "row",
  },
  wrapper: {
    height: MAP_SLICE_HEIGHT,
  },
  halfMapSliceWrapper: {
    height: HALF_MAP_SLICE_HEIGHT,
  },
});
