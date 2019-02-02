import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Style } from "../../../../../styles";
import { IChallenge } from "../quests-screen/quests-screen";
import { IMapSlice, LevelBubble } from "./assets";

interface IProps {
    currentLevel: number;
    levels: IChallenge[];
    onPress?: () => void;
    slice: IMapSlice;
}

const MapSlice: SFC<IProps> = ({ currentLevel, levels, slice }) => (
    <View style={{ height: Style.SCALE_UP_AND_DOWN(slice.height) }}>
        <Image
            source={slice.image}
            style={StyleSheet.flatten([styles.image, { height: Style.SCALE_UP_AND_DOWN(slice.height) }]) as any}
        />
        <View style={styles.levelButtonWrapper}>
            {levels.map((level, index) => (
                <LevelBubble currentLevel={currentLevel} index={index} key={level.id} level={level} slice={slice} />
            ))}
        </View>
    </View>
);

export default MapSlice;

const styles = StyleSheet.create({
    image: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        width: Style.DEVICE_WIDTH
    },
    levelButtonWrapper: {
        alignItems: "flex-end",
        flex: 1,
        flexDirection: "row"
    }
});
