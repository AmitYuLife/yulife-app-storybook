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
import { Close, GenericHeading, LeaderboardPosition, Pad } from "../../../atoms";
import assets from "./assets";
import LeaderboardHeader from "./leaderboard-header/leaderboard-header";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
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
    private viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 95,
        waitForInteraction: true
    };

    public render() {
        const { isTopHidden } = this.state;
        const { initialScrollIndex, onCoinPress, onPressClose, onStepsPress, items, sortBy = "steps" } = this.props;

        return (
            <SafeAreaView style={styles.wrapper}>
                <Animated.View style={{ transform: [{ translateY: this.top3Y }] }}>
                    <View style={styles.backgroundImageWrapper}>
                        <Image style={styles.backgroundImageBase} source={assets.background} />
                    </View>
                    {!isTopHidden &&
                        items
                            .slice(0, 3)
                            .map((item, i) => <LeaderboardPosition key={i} name={item.firstName} position={i + 1} />)}
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
                    <FlatList
                        data={items}
                        initialScrollIndex={initialScrollIndex}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <LeaderboardItem
                                key={index}
                                {...item}
                                isCurrentUser={index === initialScrollIndex}
                                rank={index + 1}
                            />
                        )}
                        // onViewableItemsChanged={this.handleOnScroll}
                        viewabilityConfig={this.viewabilityConfig}
                    />
                </Animated.View>
            </SafeAreaView>
        );
    }

    private handlePressImage = () => {
        const { isTopHidden } = this.state;
        this.setState({ isScrolling: true, isTopHidden: !isTopHidden }, this.animate(isTopHidden ? 0 : -250));
    }

    // private handleOnScroll = (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
    //     const { isScrolling, isTopHidden } = this.state;

    //     if (!isScrolling) {
    //         if (isTopHidden && info.viewableItems.some(item => item.index === 0)) {
    //             this.setState({ isScrolling: true, isTopHidden: false }, this.animate(0));
    //         } else if (!isTopHidden && !info.viewableItems.some(item => item.index === 0)) {
    //             this.setState({ isScrolling: true, isTopHidden: true }, this.animate(-300));
    //         }
    //     }
    // };

    private animate = (toValue: number) => () => {
        Animated.spring(this.top3Y, {
            toValue,
            useNativeDriver: true
        }).start(() => this.setState({ isScrolling: false }));
    }
}
