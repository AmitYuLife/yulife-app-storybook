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
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { Style } from "../../../../styles";
import { Close, Loading, Pad } from "../../../atoms";
import { YulifeRefreshHeader } from "../../../molecules";
import assets from "./assets";
import LeaderboardHeader from "./leaderboard-header/leaderboard-header";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import { LEADERBOARD_ITEM_HEIGHT } from "./leaderboard-item/leaderboard-item.styles";
import LeaderboardPositionScroll from "./leaderboard-position-scroll/leaderboard-position-scroll";
import SimpleLeaderboardPosition from "./leaderboard-simple.screen";
import styles from "./leaderboards.screen.styles";

export type LeaderboardTypes = "coins" | "steps";

export interface IItem {
    id: string;
    coins: number;
    firstName: string;
    lastName: string;
    name: string;
    steps: number;
}

interface IProps {
    isAdvanced: boolean;
    initialScrollIndex: number;
    leaderboards: Leaderboard[];
    items: IItem[];
    isLoading: boolean;
    onHandleCoinsRefetch: () => void;
    onPressClose: () => void;
    onHandleStepsRefetch: () => void;
    onLeaderboardChange: (index: number) => void;
    onRefetch: () => void;
    sortBy: string;
}

const initialState = {
    hasChanged: false,
    height: 0,
    activePage: 0,
    isScrolling: false,
    isTopHidden: false
};

type IState = typeof initialState;

export default class LeaderboardScreen extends PureComponent<IProps, IState> {
    public largeList: LargeList;
    public flatList: FlatList<any>;
    public viewRef: View;
    public state = initialState;

    private top3Y = new Animated.Value(0);
    private timeout: NodeJS.Timer = null;

    public componentDidUpdate() {
        const { isLoading, initialScrollIndex } = this.props;

        if (!isLoading) {
            this.timeout = global.setTimeout(() => {
                this.largeList.scrollTo({ x: 0, y: initialScrollIndex * LEADERBOARD_ITEM_HEIGHT });
            }, 1000);
        }
    }

    public componentWillUnmount() {
        if (this.timeout) {
            global.clearTimeout(this.timeout);
        }
    }

    public render() {
        const { isTopHidden, height, activePage } = this.state;
        const {
            isAdvanced,
            isLoading,
            onPressClose,
            items,
            leaderboards,
            onHandleCoinsRefetch,
            onHandleStepsRefetch,
            sortBy
        } = this.props;
        return (
            <SafeAreaView style={styles.wrapper}>
                {isAdvanced ? (
                    <LeaderboardPositionScroll
                        items={items}
                        height={height}
                        pages={leaderboards}
                        activePage={activePage}
                        isHidden={isTopHidden}
                        isLoading={isLoading}
                        onSwipeEnd={this.onChangeActiveLeaderboard}
                    />
                ) : (
                    <SimpleLeaderboardPosition isLoading={isLoading} isTopHidden={isTopHidden} items={items} />
                )}
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
                        onCoinPress={onHandleCoinsRefetch}
                        onStepsPress={onHandleStepsRefetch}
                        sortBy={sortBy}
                    />
                </Animated.View>
                <View style={styles.closeWrapper}>
                    <Close style={styles.closeButton} onPress={onPressClose} />
                </View>
                <Animated.View
                    style={StyleSheet.flatten([
                        isTopHidden ? styles.shrinkedList : styles.expandedList,
                        { transform: [{ translateY: this.top3Y }] }
                    ] as ViewStyle)}
                >
                    <LargeList
                        ref={this.setLargeListRef}
                        renderIndexPath={this.renderIndexPath}
                        heightForIndexPath={this.getHeight}
                        showsVerticalScrollIndicator={false}
                        data={[{ items }]}
                        onRefresh={this.handleRefresh}
                        renderEmpty={Loading}
                        refreshHeader={YulifeRefreshHeader}
                    />
                </Animated.View>
            </SafeAreaView>
        );
    }

    private setLargeListRef = (ref: LargeList) => {
        this.largeList = ref;
    };

    private getHeight = () => LEADERBOARD_ITEM_HEIGHT;

    private renderIndexPath = ({ row }: IndexPath) => {
        const { items, initialScrollIndex } = this.props;
        const item = items[row];

        if (item) {
            return (
                <LeaderboardItem {...item} isCurrentUser={row === initialScrollIndex} rank={row + 1} key={item.id} />
            );
        }

        return null;
    };

    private handleRefresh = async () => {
        await this.props.onRefetch();
        this.largeList.endRefresh();
    };

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

    private onChangeActiveLeaderboard = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let activePage = Math.ceil(event.nativeEvent.contentOffset.x / Style.DEVICE_WIDTH);
        if (activePage === this.props.leaderboards.length) {
            activePage = activePage - 1;
        }

        this.setState({ activePage }, () => this.props.onLeaderboardChange(activePage));
    };

    private measureView = (event: LayoutChangeEvent) => {
        this.setState({
            height: event.nativeEvent.layout.height
        });
    };
}
