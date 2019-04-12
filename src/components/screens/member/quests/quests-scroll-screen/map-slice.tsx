import * as React from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Style } from "../../../../../styles";
import { IChallenge } from "../quests-screen/quests-screen";
import { IMapSlice, LevelBubble, MAP_SLICE_HEIGHT } from "./assets";

interface IProps {
    currentLevel: number;
    levels: IChallenge[];
    onPress?: () => void;
    slice: IMapSlice;
}

export default class MapSlice extends React.PureComponent<IProps> {
    public render() {
        const { levels, slice } = this.props;

        return (
            <View key={slice.id} style={styles.wrapper}>
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
        height: MAP_SLICE_HEIGHT
    },
    levelButtonWrapper: {
        alignItems: "flex-end",
        flex: 1,
        flexDirection: "row"
    },
    wrapper: {
        height: MAP_SLICE_HEIGHT
    }
});
