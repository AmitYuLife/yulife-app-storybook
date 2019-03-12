import { Leaderboard } from "@redux/user/user.selectors";
import * as React from "react";
import { PureComponent } from "react";
import {
    Animated,
    FlatList,
    Image,
    LayoutChangeEvent,
    NativeScrollEvent,
    NativeSyntheticEvent,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import { ListRenderItemInfo } from "react-native";
import { Style } from "../../../../styles";
import { Close, Pad } from "../../../atoms";
import assets from "./assets";
import LeaderboardHeader from "./leaderboard-header/leaderboard-header";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import LeaderboardPositionScroll from "./leaderboard-position-scroll/leaderboard-position-scroll";
import styles from "./leaderboards.screen.styles";

export type LeaderboardTypes = "yucoin" | "steps" | "meditation";

export interface IItem {
    id: string;
    coins: number;
    firstName: string;
    lastName: string;
    name: string;
    steps: number;
}

interface IProps {
    initialScrollIndex: number;
    leaderboards: Leaderboard[];
    items: IItem[];
    isLoading: boolean;
    onHandleCoinsRefetch: () => void;
    onPressClose: () => void;
    onHandleStepsRefetch: () => void;
    sortBy: string;
}

interface IState {
    height: number;
    isScrolling: boolean;
    isTopHidden: boolean;
    leaderboardSubtype: LeaderboardTypes;
    activePage: number;
}

export default class LeaderboardScreen extends PureComponent<IProps, IState> {
    public flatList: FlatList<any>;
    public viewRef: View;
    public state = {
        hasChanged: false,
        height: 0,
        activePage: 0,
        isScrolling: false,
        isTopHidden: false,
        leaderboardSubtype: "steps" as LeaderboardTypes
    };

    private top3Y = new Animated.Value(0);

    public render() {
        const { isTopHidden, height, leaderboardSubtype, activePage } = this.state;
        const { isLoading, onPressClose, items, leaderboards } = this.props;
        return (
            <SafeAreaView style={styles.wrapper}>
                <LeaderboardPositionScroll
                    items={items}
                    height={height}
                    pages={leaderboards}
                    activePage={activePage}
                    isHidden={isTopHidden}
                    isLoading={isLoading}
                    onSwipeEnd={this.onChangeActiveLeaderboard}
                />
                <Animated.View
                    onLayout={(event: LayoutChangeEvent) => this.measureView(event)}
                    style={{ transform: [{ translateY: this.top3Y }] }}
                >
                    <View style={styles.backgroundImageWrapper}>
                        <Image style={styles.backgroundImageBase} source={assets.background} />
                    </View>

                    <Pad height={275} />
                    <View style={styles.giraffeImageWrapper}>
                        <Image source={assets.giraffe} />
                        <TouchableOpacity style={styles.arrowImageWrapper} onPressIn={this.handlePressImage}>
                            <Image source={isTopHidden ? assets.arrowDown : assets.arrowUp} />
                        </TouchableOpacity>
                    </View>
                    <LeaderboardHeader
                        type={leaderboardSubtype}
                        onPressLeft={this.pressHeaderLeft}
                        onPressRight={this.pressHeaderRight}
                    />
                </Animated.View>
                <View style={styles.closeWrapper}>
                    <Close onPress={onPressClose} />
                </View>
                <Animated.View
                    style={StyleSheet.flatten([
                        isTopHidden ? styles.shrinkedList : styles.expandedList,
                        { transform: [{ translateY: this.top3Y }] }
                    ] as ViewStyle)}
                >
                    <FlatList
                        keyExtractor={this.outerListKeyExtractor}
                        ref={this.setRef}
                        horizontal={true}
                        pagingEnabled={true}
                        onMomentumScrollEnd={this.onSwipeEnd}
                        data={Array.from({ length: 2 })}
                        renderItem={this.renderLeaderboardList}
                    />
                </Animated.View>
            </SafeAreaView>
        );
    }

    private renderLeaderboardList = ({ index }: ListRenderItemInfo<any>) => {
        const { isLoading, initialScrollIndex, items } = this.props;
        return (
            <FlatList
                contentContainerStyle={styles.flatlistContainer}
                onRefresh={this.onRefresh}
                refreshing={isLoading}
                data={items}
                removeClippedSubviews={false}
                initialScrollIndex={isLoading ? 0 : initialScrollIndex}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem(index ? "yucoin" : "steps")}
            />
        );
    };

    private renderItem = (type: LeaderboardTypes) => {
        return ({ item, index }: ListRenderItemInfo<IItem>) => (
            <LeaderboardItem
                {...item}
                type={type}
                isCurrentUser={index === this.props.initialScrollIndex}
                rank={index + 1}
                key={item.id}
            />
        );
    };

    private outerListKeyExtractor = (_: undefined, index: number) => `${index}`;

    private keyExtractor = (item: IItem) => item.id;

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

    private setRef = (ref: FlatList<any>) => (this.flatList = ref);

    private onRefresh = () => {
        if (this.state.leaderboardSubtype === "steps") {
            this.props.onHandleStepsRefetch();
        } else if (this.state.leaderboardSubtype === "yucoin") {
            this.props.onHandleCoinsRefetch();
        }
    };

    private changeLeaderboardSubtype = (index: number) => {
        switch (index) {
            case 0:
                return this.setState({
                    leaderboardSubtype: "steps"
                });
            case 1:
                return this.setState({
                    leaderboardSubtype: "yucoin"
                });
            case 2:
                return this.setState({
                    leaderboardSubtype: "meditation"
                });
        }
    };

    private pressHeaderLeft = () => {
        const { leaderboardSubtype } = this.state;
        if (leaderboardSubtype === "yucoin") {
            this.changeLeaderboardSubtype(0);
            this.flatList.scrollToIndex({ animated: true, index: 0 });
            this.props.onHandleStepsRefetch();
        }
    };

    private pressHeaderRight = () => {
        const { leaderboardSubtype } = this.state;
        if (leaderboardSubtype === "steps") {
            this.changeLeaderboardSubtype(1);
            this.flatList.scrollToIndex({ animated: true, index: 1 });
            this.props.onHandleCoinsRefetch();
        }
    };

    private onSwipeEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / Style.DEVICE_WIDTH);
        const { leaderboardSubtype } = this.state;
        if (index === 0 && leaderboardSubtype !== "steps") {
            this.props.onHandleStepsRefetch();
        } else if (index === 1 && leaderboardSubtype !== "yucoin") {
            this.props.onHandleCoinsRefetch();
        }
        this.changeLeaderboardSubtype(index);
    };

    private onChangeActiveLeaderboard = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        this.setState({
            activePage: Math.floor(event.nativeEvent.contentOffset.x / Style.DEVICE_WIDTH)
        });
    };

    private measureView = (event: LayoutChangeEvent) => {
        this.setState({
            height: event.nativeEvent.layout.height
        });
    };
}
