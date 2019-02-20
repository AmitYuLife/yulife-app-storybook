import { OptimizedFlatList } from "@molecules/index";
import * as React from "react";
import { PureComponent } from "react";
import {
    Animated,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import { ListRenderItemInfo } from "react-native";
import { Close, GenericHeading, LeaderboardPosition, Pad } from "../../../atoms";
import assets from "./assets";
import LeaderboardHeader from "./leaderboard-header/leaderboard-header";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import { LEADERBOARD_ITEM_HEIGHT } from "./leaderboard-item/leaderboard-item.styles";
import data from "./leaderboards.data";
import styles from "./leaderboards.screen.styles";

interface IItem {
    id: string;
    coins: number;
    firstName: string;
    lastName: string;
    name: string;
    steps: number;
}

interface IProps {
    initialScrollIndex: number;
    items: IItem[];
    onCoinPress: () => void;
    onPressClose: () => void;
    onStepsPress: () => void;
    sortBy: string;
}

interface IState {
    isScrolling: boolean;
    isTopHidden: boolean;
}

export default class LeaderboardScreen extends PureComponent<IProps, IState> {
    public scrollView: ScrollView;
    public state = {
        isScrolling: false,
        isTopHidden: false
    };
    private top3Y = new Animated.Value(0);

    public render() {
        const { isTopHidden } = this.state;
        const { initialScrollIndex, onCoinPress, onPressClose, onStepsPress, items, sortBy = "steps" } = this.props;

        return (
            <SafeAreaView style={styles.wrapper}>
                <Animated.View style={{ transform: [{ translateY: this.top3Y }] }}>
                    <View style={styles.backgroundImageWrapper}>
                        <Image style={styles.backgroundImageBase} source={assets.background} />
                    </View>
                    {!isTopHidden && items.slice(0, 3).map(this.renderTop)}
                    <Pad height={275} />
                    <View style={styles.giraffeImageWrapper}>
                        <Image source={assets.giraffe} />
                        <TouchableOpacity style={styles.arrowImageWrapper} onPressIn={this.handlePressImage}>
                            <Image source={isTopHidden ? assets.arrowDown : assets.arrowUp} />
                        </TouchableOpacity>
                    </View>
                    <LeaderboardHeader sortBy={sortBy} onCoinPress={onCoinPress} onStepsPress={onStepsPress} />
                </Animated.View>
                <View style={styles.header}>
                    <GenericHeading heading={data.heading} hidesBorder={true} subheading={data.subheading} />
                </View>
                <Close onPress={onPressClose} />
                <Animated.View
                    style={StyleSheet.flatten([
                        isTopHidden ? styles.scrollView2 : styles.scrollView1,
                        { transform: [{ translateY: this.top3Y }] }
                    ] as ViewStyle)}
                >
                    <OptimizedFlatList
                        data={items}
                        removeClippedSubviews={false}
                        initialScrollIndex={initialScrollIndex}
                        keyExtractor={this.keyExtractor}
                        getItemLayout={this.getItemLayout}
                        renderItem={this.renderItem}
                    />
                </Animated.View>
            </SafeAreaView>
        );
    }

    private renderTop = (item: IItem, i: number) => (
        <LeaderboardPosition key={`top-3-${item.id}`} name={item.firstName} position={i + 1} />
    );

    private renderItem = ({ item, index }: ListRenderItemInfo<IItem>) => (
        <LeaderboardItem
            {...item}
            isCurrentUser={index === this.props.initialScrollIndex}
            rank={index + 1}
            key={item.id}
        />
    );

    private keyExtractor = (item: IItem) => item.id;

    private getItemLayout = (_: any, index: number) => ({
        index,
        length: LEADERBOARD_ITEM_HEIGHT,
        offset: LEADERBOARD_ITEM_HEIGHT * index
    });

    private handlePressImage = () => {
        const { isTopHidden } = this.state;
        this.setState({ isScrolling: true, isTopHidden: !isTopHidden }, this.animate(isTopHidden ? 0 : -250));
    };

    private animate = (toValue: number) => () => {
        Animated.spring(this.top3Y, {
            toValue,
            useNativeDriver: true
        }).start(() => this.setState({ isScrolling: false }));
    };
}
