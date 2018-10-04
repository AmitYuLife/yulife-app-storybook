import * as React from "react";
import { SFC } from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import { Close, GenericHeading, LeaderboardPosition, Pad } from "../../../atoms";
import assets from "./assets";
import LeaderboardHeader from "./leaderboard-header/leaderboard-header";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import data from "./leaderboards.data";
import styles from "./leaderboards.screen.styles";

interface IItem {
    coins: number;
    firstName: string;
    lastName: string;
    name: string;
    steps: number;
}

interface IProps {
    items: IItem[];
    onCoinPress: () => void;
    onPressClose: () => void;
    onStepsPress: () => void;
    sortBy: string;
}

const LeaderboardScreen: SFC<IProps> = ({ onCoinPress, onPressClose, onStepsPress, items, sortBy = "yucoin" }) => (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.backgroundImageWrapper}>
            <Image resizeMode="cover" style={styles.backgroundImageBase} source={assets.background} />
        </View>
        <GenericHeading heading={data.heading} hidesBorder={true} subheading={data.subheading} />
        {items.slice(0, 3).map((item, i) => (
            <LeaderboardPosition key={i} name={item.firstName} position={i + 1} />
        ))}
        <Pad height={200} />
        <View style={styles.giraffeImageWrapper}>
            <Image resizeMode="cover" source={assets.giraffe} />
        </View>
        <LeaderboardHeader sortBy={sortBy} onCoinPress={onCoinPress} onStepsPress={onStepsPress} />
        <ScrollView style={styles.scrollView}>
            {items.map((item, index) => (
                <LeaderboardItem key={index} {...item} rank={index + 1} />
            ))}
        </ScrollView>
        <Close onPress={onPressClose} />
    </SafeAreaView>
);

export default LeaderboardScreen;
