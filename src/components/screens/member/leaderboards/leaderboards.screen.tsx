import * as React from "react";
import { PureComponent } from "react";
import {
    Animated,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    // ViewToken,
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

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

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
        const renderItem = getRenderItem(initialScrollIndex);

        return (
            <SafeAreaView style={styles.wrapper}>
                <Animated.View style={{ transform: [{ translateY: this.top3Y }] }}>
                    <View style={styles.backgroundImageWrapper}>
                        <Image style={styles.backgroundImageBase} source={assets.background} />
                    </View>
                    {!isTopHidden && items.slice(0, 3).map(renderTop)}
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
                    <AnimatedFlatList
                        data={items}
                        removeClippedSubviews={false}
                        initialScrollIndex={initialScrollIndex}
                        keyExtractor={keyExtractor}
                        getItemLayout={getItemLayout}
                        renderItem={renderItem}
                    />
                </Animated.View>
            </SafeAreaView>
        );
    }

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

function renderTop(item: IItem, i: number) {
    return <LeaderboardPosition key={`top-3-${item.id}`} name={item.firstName} position={i + 1} />;
}

function getRenderItem(initialScrollIndex: number) {
    return ({ item, index }: ListRenderItemInfo<IItem>) => (
        <LeaderboardItem {...item} isCurrentUser={index === initialScrollIndex} rank={index + 1} key={item.id} />
    );
}

function keyExtractor(item: IItem) {
    return item.id;
}

function getItemLayout(_: any, index: number) {
    return {
        index,
        length: LEADERBOARD_ITEM_HEIGHT,
        offset: LEADERBOARD_ITEM_HEIGHT * index
    };
}
