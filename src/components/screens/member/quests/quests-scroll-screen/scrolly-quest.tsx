import * as React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { IMapSlice, MAP_SLICE_HEIGHT } from "./assets";
import MapSlice from "./map-slice";
import { IChallenge } from "./quests-screen";
import styles from "./quests-screen.styles";

interface IProps {
    data: IMapSlice[];
    initialScrollIndex: number;
    isMapVisible?: boolean;
    currentLevel: number;
    levels: IChallenge[];
    onViewableItemsChanged?: any;
    setFlatListRef: (ref: any) => void;
    offsets: number[];
}

class ScrollyQuest extends React.PureComponent<IProps> {
    private viewabilityConfig = {
        minimumViewTime: 400,
        viewAreaCoveragePercentThreshold: 95,
        waitForInteraction: true
    };

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

    private renderItem: ListRenderItem<IMapSlice> = ({ item }) => (
        <MapSlice currentLevel={this.props.currentLevel} levels={this.getSlicedLevels(item)} slice={item} />
    );

    private getItemLayout = (_: any, index: number) => ({
        index,
        length: MAP_SLICE_HEIGHT,
        offset: MAP_SLICE_HEIGHT * index
    });

    private getSlicedLevels = ({ slots }: IMapSlice) => {
        const { levels } = this.props;
        const result = [];

        for (const slot of slots) {
            if (levels[slot.index]) {
                result.push(levels[slot.index]);
            }
        }

        return result;
    };
}

export default ScrollyQuest;
