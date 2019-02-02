import * as React from "react";
import { Component } from "react";
import { FlatList, View } from "react-native";
import { IMapSlice } from "./assets";
import MapSlice from "./map-slice";
import { IChallenge } from "./quests-screen";
import styles from "./quests-screen.styles";

interface IProps {
    data: IMapSlice[];
    currentLevel: number;
    levels: IChallenge[];
    onViewableItemsChanged?: any;
    setFlatListRef: (ref: any) => void;
}

class ScrollyQuest extends Component<IProps> {
    private viewabilityConfig = {
        minimumViewTime: 400,
        viewAreaCoveragePercentThreshold: 95,
        waitForInteraction: true
    };

    public render() {
        const { currentLevel, data, onViewableItemsChanged, setFlatListRef } = this.props;

        return (
            <View style={styles.scrollViewWrapper}>
                <FlatList
                    data={data}
                    inverted={true}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    keyExtractor={(level) => level.id}
                    showsVerticalScrollIndicator={false}
                    ref={setFlatListRef}
                    renderItem={({ item }) => (
                        <MapSlice currentLevel={currentLevel} levels={this.getSlicedLevels(item)} slice={item} />
                    )}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={this.viewabilityConfig}
                />
            </View>
        );
    }

    private getSlicedLevels = ({ slots }: IMapSlice) => {
        const { levels } = this.props;
        const result = [];

        for (const slot of slots) {
            result.push(levels[slot.index]);
        }

        return result;
    };
}

export default ScrollyQuest;
