import { Button, Text } from "@atoms/index";
import { store } from "@redux/_core/store";
import * as React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { CHECK_CONNECTION } from "../../../redux/app/app.actions";
import { getCurrentWorld } from "../../../services/utils";
import styles from "./offline.screen.styles";

const onPress = () => store.dispatch({ type: CHECK_CONNECTION });

export default function OfflineScreen({ level }: any) {
    const currentWorld = getCurrentWorld(level);
    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={getOfflineImage(currentWorld)} />
            <View style={styles.contentWrapper}>
                <Text style={styles.heading} bold={true}>
                    you're offline
                </Text>
                <Text style={styles.subheading}>Check your internet connection.</Text>
                <View style={styles.buttonWrapper}>
                    <Button onPress={onPress} type={Button.Types.PRIMARY_MEDIUM} label="try again" />
                </View>
            </View>
        </View>
    );
}

function getOfflineImage(currentWorld: number): ImageSourcePropType {
    switch (currentWorld) {
        case 3:
            return require("../../../../assets/quests-offline/mountain.png");
        case 2:
            return require("../../../../assets/quests-offline/desert.png");
        case 1:
            return require("../../../../assets/quests-offline/ocean.png");
        default:
            return require("../../../../assets/quests-offline/forest.png");
    }
}
