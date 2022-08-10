import * as React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { IMapSlice, MAP_SLICE_HEIGHT } from "../assets";
import { HALF_MAP_SLICE_HEIGHT } from "../assets/slices.settings";
import MapSlice from "./map-slice";
import styles from "../quests-screen.styles";

export interface IScrollQuestProps {
  data: IMapSlice[];
  initialScrollIndex: number;
  onViewableItemsChanged?: any;
  setFlatListRef: (ref: any) => void;
  offsets: number[];
}

class ScrollyQuest extends React.Component<IScrollQuestProps> {
  private viewabilityConfig = {
    minimumViewTime: 400,
    viewAreaCoveragePercentThreshold: 95,
    waitForInteraction: true,
  };

  public shouldComponentUpdate(nextProps: IScrollQuestProps) {
    return shouldScrollyQuestUpdate(this.props, nextProps);
  }

  public render() {
    const { data, initialScrollIndex, onViewableItemsChanged, setFlatListRef, offsets } = this.props;

    return (
      <View style={styles.scrollViewWrapper}>
        <FlatList
          data={data}
          inverted={true}
          initialScrollIndex={initialScrollIndex}
          keyExtractor={this.keyExtractor}
          getItemLayout={this.getItemLayout}
          showsVerticalScrollIndicator={false}
          ref={setFlatListRef}
          removeClippedSubviews={true}
          renderItem={this.renderItem}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={this.viewabilityConfig}
          initialNumToRender={8}
          decelerationRate={"fast"}
          snapToOffsets={offsets}
          directionalLockEnabled={true}
        />
      </View>
    );
  }

  private keyExtractor = (level: IMapSlice) => level.id;

  private renderItem: ListRenderItem<IMapSlice> = ({ item }) => <MapSlice {...item} />;

  private getItemLayout = (_: any, index: number) => {
    if (index === 0 && isIphoneX()) {
      return {
        index,
        length: HALF_MAP_SLICE_HEIGHT,
        offset: 0,
      };
    }

    return {
      index,
      length: MAP_SLICE_HEIGHT,
      offset: MAP_SLICE_HEIGHT * index,
    };
  };
}

export default ScrollyQuest;

export function shouldScrollyQuestUpdate(currentProps: IScrollQuestProps, nextProps: IScrollQuestProps) {
  return (
    currentProps.initialScrollIndex !== nextProps.initialScrollIndex ||
    currentProps.data.length !== nextProps.data.length ||
    currentProps.offsets.length !== nextProps.offsets.length
  );
}
