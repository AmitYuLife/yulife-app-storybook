import * as React from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";
import { IMapSlice, LevelBubble, MAP_SLICE_HEIGHT } from "./assets";
import { HALF_MAP_SLICE_HEIGHT } from "./assets/slices.settings";
import { IChallenge } from "./quests-screen";

interface IProps {
  activeLevel: number;
  currentLevel: number;
  levels: IChallenge[];
  onPress?: () => void;
  slice: IMapSlice;
}

export default class MapSlice extends React.Component<IProps> {
  public shouldComponentUpdate(nextProps: IProps) {
    return (
      this.props.currentLevel !== nextProps.currentLevel ||
      this.props.slice.id !== nextProps.slice.id ||
      this.props.activeLevel !== nextProps.activeLevel
    );
  }

  public render() {
    const { levels, slice } = this.props;
    const hasForestInterstitial = isIphoneX() && slice.id === "MAP_SLICE_W01_INTERSTITIALS_01";

    return (
      <View key={slice.id} style={hasForestInterstitial ? styles.halfMapSliceWrapper : styles.wrapper}>
        <FastImage source={slice.image} style={styles.image} />
        <View style={styles.levelButtonWrapper}>{levels.map(this.mapLevels)}</View>
      </View>
    );
  }

  private mapLevels = (level: IChallenge, index: number) => {
    const { currentLevel, slice } = this.props;
    return <LevelBubble currentLevel={currentLevel} index={index} key={level.id} level={level} slice={slice} />;
  };
}

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
