import { Close, GenericHeading, LeaderboardPosition, Loading, Pad } from "@atoms/index";
import { YulifeRefreshHeader } from "@molecules/index";
import { Colours } from "@styles/index";
import * as React from "react";
import { PureComponent } from "react";
import {
    ActivityIndicator,
    Animated,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
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
    isLoading: boolean;
    onPressClose: () => void;
    onRefetch: () => void;
    sortBy: string;
}

interface IState {
    isScrolling: boolean;
    isTopHidden: boolean;
}

export default class LeaderboardScreen extends PureComponent<IProps, IState> {
    public largeList: LargeList;
    public scrollView: ScrollView;
    public state = {
        isScrolling: false,
        isTopHidden: false
    };
    private top3Y = new Animated.Value(0);

    public render() {
        const { isTopHidden } = this.state;
        const { isLoading, onPressClose, items, initialScrollIndex } = this.props;

        return (
            <SafeAreaView style={styles.wrapper}>
                <Animated.View style={{ transform: [{ translateY: this.top3Y }] }}>
                    <View style={styles.backgroundImageWrapper}>
                        <Image style={styles.backgroundImageBase} source={assets.background} />
                    </View>
                    {isLoading ? (
                        <View style={styles.loaderWrapper}>
                            <ActivityIndicator size="large" color={Colours.gray} />
                        </View>
                    ) : (
                        !isTopHidden && items.slice(0, 3).map(this.renderTop)
                    )}

                    <Pad height={275} />
                    <View style={styles.giraffeImageWrapper}>
                        <Image source={assets.giraffe} />
                        <TouchableOpacity style={styles.arrowImageWrapper} onPressIn={this.handlePressImage}>
                            <Image source={isTopHidden ? assets.arrowDown : assets.arrowUp} />
                        </TouchableOpacity>
                    </View>
                    <LeaderboardHeader />
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
                    <LargeList
                        ref={this.setLargeListRef}
                        initialContentOffset={{ x: 0, y: initialScrollIndex * LEADERBOARD_ITEM_HEIGHT}}
                        renderIndexPath={this.renderIndexPath}
                        heightForIndexPath={this.getHeight}
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

    private handleRefresh = async () => {
        await this.props.onRefetch();
        this.largeList.endRefresh();
    };

    private renderIndexPath = ({ row }: IndexPath) => {
        const { items } = this.props;
        const item = items[row];

        if (item) {
            return (
                <LeaderboardItem
                    {...item}
                    isCurrentUser={row === this.props.initialScrollIndex}
                    rank={row + 1}
                    key={item.id}
                />
            );
        }

        return null;
    };

    private getHeight = () => LEADERBOARD_ITEM_HEIGHT;

    private renderTop = (item: IItem, i: number) => (
        <LeaderboardPosition key={`top-3-${item.id}`} name={item.firstName} position={i + 1} />
    );

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
