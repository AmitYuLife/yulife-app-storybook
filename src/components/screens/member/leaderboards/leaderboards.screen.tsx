import * as React from "react";
import { PureComponent } from "react";
import {
    ActivityIndicator,
    Animated,
    FlatList,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import { ListRenderItemInfo } from "react-native";
import { Colours, Style } from "../../../../styles";
import { Close, GenericHeading, LeaderboardPosition, Pad } from "../../../atoms";
import assets from "./assets";
import LeaderboardHeader from "./leaderboard-header/leaderboard-header";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import data from "./leaderboards.data";
import styles from "./leaderboards.screen.styles";

export type LeaderboardTypes = "yucoin" | "steps" | "meditation";

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
    onHandleCoinsRefetch: () => void;
    onPressClose: () => void;
    onHandleStepsRefetch: () => void;
    sortBy: string;
}

interface IState {
    isScrolling: boolean;
    isTopHidden: boolean;
    leaderboardSubtype: LeaderboardTypes;
}

export default class LeaderboardScreen extends PureComponent<IProps, IState> {
    public flatList: FlatList<any>;
    public state = {
        isScrolling: false,
        isTopHidden: false,
        leaderboardSubtype: "steps" as LeaderboardTypes
    };
    private top3Y = new Animated.Value(0);

    public render() {
        const { isTopHidden, leaderboardSubtype } = this.state;
        const { isLoading, onPressClose, items } = this.props;

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
                    <LeaderboardHeader
                        type={leaderboardSubtype}
                        onPressLeft={this.pressHeaderLeft}
                        onPressRight={this.pressHeaderRight}
                    />
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

    private renderTop = (item: IItem, i: number) => (
        <LeaderboardPosition key={`top-3-${item.id}`} name={item.firstName} position={i + 1} />
    );

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
}
