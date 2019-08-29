import { GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn } from "@app/graphql/_core/schema";
import { IAppStore } from "@app/redux/app/app.reducer";
import { ILeaderboard } from "@redux/user/user.reducer";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { Navigation } from "react-native-navigation";
import { Loading } from "../../../atoms";
import { COLOURS, ILabel, NavBar, TopBar, YulifeRefreshHeader } from "../../../molecules";
import assets, { AssetType } from "./assets";
import LeaderboardConsent from "./leaderboard-consent/leaderboard-consent";
import LeaderboardDropdown from "./leaderboard-dropdown/leaderboard-dropdown";
import LeaderboardToggle from "./leaderboard-dropdown/leaderboard-toggle";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import { LEADERBOARD_ITEM_HEIGHT } from "./leaderboard-item/leaderboard-item.styles";
import LeaderboardTabs from "./leaderboard-tabs/leaderboard-tabs";
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
    activeLeaderboardIndex: number;
    initialScrollIndex: number;
    labels: ILabel[];
    leaderboards: ILeaderboard[];
    hasNotification: boolean;
    items: IItem[];
    isLoading: boolean;
    isMindfulAvailable: boolean;
    onHandleCoinsRefetch: () => void;
    onHandleStepsRefetch: () => void;
    onHandleMindfulMinsRefetch: () => void;
    onLeaderboardChange: (index: number) => void;
    onRefetch: () => void;
    sortBy: string;
    totalCoins: number;
    onLeftMenuPress: () => void;
    // Consent props
    onAllowLeaderboard: () => void;
    onPrivacyPolicyPress: () => void;
    onRefuseConsent: () => void;
    copy: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
    navbarColour: COLOURS;
    componentId: string;
    appState: IAppStore["appState"];
}

const initialState = {
    isShowingDropdown: false,
    shouldScrollTo: true
};

type IState = typeof initialState;

export default class LeaderboardScreen extends React.PureComponent<IProps, IState> {
    public largeList: LargeList;
    public state = initialState;

    private timeout: NodeJS.Timer = null;

    public constructor(props: IProps) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidMount() {
        this.scrollToLevel();
    }

    public componentDidAppear() {
        this.scrollToLevel();
    }

    public componentDidUpdate(prevProps: IProps) {
        if (
            prevProps.activeLeaderboardIndex === this.props.activeLeaderboardIndex &&
            !this.props.isLoading &&
            (!prevProps.leaderboards[prevProps.activeLeaderboardIndex].consent &&
                this.props.leaderboards[this.props.activeLeaderboardIndex].consent)
        ) {
            if (this.largeList) {
                this.handleRefresh();
            }
        }

        if (this.state.shouldScrollTo && !this.props.isLoading) {
            this.scrollToLevel();
            this.setState({
                shouldScrollTo: false
            });
        }

        if (
            prevProps.activeLeaderboardIndex !== this.props.activeLeaderboardIndex ||
            (prevProps.appState.match(/inactive|background/) && this.props.appState === "active")
        ) {
            this.setState({
                shouldScrollTo: true
            });
        }
    }

    public componentWillUnmount() {
        if (this.timeout) {
            global.clearTimeout(this.timeout);
        }
    }

    public render() {
        const { isShowingDropdown } = this.state;
        const {
            activeLeaderboardIndex,
            isLoading,
            hasNotification,
            items = [],
            totalCoins,
            leaderboards,
            sortBy,
            labels,
            onLeftMenuPress,
            onPrivacyPolicyPress,
            onRefuseConsent,
            copy,
            isMindfulAvailable,
            navbarColour
        } = this.props;
        const activeLeaderboard = leaderboards.length > 0 && leaderboards[activeLeaderboardIndex];

        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.backgroundImageWrapper}>
                    <Image resizeMethod="scale" style={styles.backgroundImageBase} source={assets.background} />
                </View>
                <TopBar coins={totalCoins} type="default" onPressLeftIcon={onLeftMenuPress} />
                <View style={styles.imageWrapper}>
                    <FastImage style={styles.image} source={assets[sortBy as AssetType]} />
                </View>

                <LeaderboardToggle
                    leaderboards={leaderboards}
                    onToggleDropdown={this.toggleDropdown}
                    isShowingDropdown={isShowingDropdown}
                    activePage={activeLeaderboardIndex}
                />

                <View style={StyleSheet.flatten([styles.list, styles.listWrapperMargin])}>
                    {activeLeaderboard && !activeLeaderboard.consent ? null : (
                        <LeaderboardTabs
                            sortBy={sortBy}
                            onHandleTabPress={this.handleTabPress}
                            isMindfulAvailable={isMindfulAvailable}
                        />
                    )}
                    {activeLeaderboard && !activeLeaderboard.consent ? (
                        <LeaderboardConsent
                            isLoading={activeLeaderboard.isLoading}
                            onAllowLeaderboard={this.allowLeaderboard}
                            onPrivacyPolicyPress={onPrivacyPolicyPress}
                            onRefuseConsent={onRefuseConsent}
                            copy={copy}
                        />
                    ) : isLoading ? (
                        <Loading />
                    ) : (
                                <LargeList
                                    style={styles.list}
                                    ref={this.setLargeListRef}
                                    renderIndexPath={this.renderIndexPath}
                                    heightForIndexPath={this.getHeight}
                                    renderFooter={this.renderFooter}
                                    showsVerticalScrollIndicator={false}
                                    data={[{ items }]}
                                    onRefresh={this.handleRefresh}
                                    renderEmpty={Loading}
                                    refreshHeader={YulifeRefreshHeader}
                                />
                            )}
                    <LeaderboardDropdown
                        activePage={activeLeaderboardIndex}
                        initialScrollIndex={activeLeaderboardIndex}
                        leaderboards={leaderboards}
                        isShowingDropdown={isShowingDropdown}
                        onChangeActiveLeaderboard={this.onChangeActiveLeaderboard}
                        onToggleDropdown={this.toggleDropdown}
                    />
                </View>
                <View style={styles.navbarWrapper}>
                    <NavBar
                        activeIndex={2}
                        hasWhiteBackground={true}
                        colour={navbarColour}
                        hasNotification={hasNotification}
                        labels={labels}
                    />
                </View>
            </SafeAreaView>
        );
    }

    private scrollToLevel = () => {
        const { isLoading, items, initialScrollIndex } = this.props;
        if (!isLoading) {
            this.timeout = global.setTimeout(() => {
                if (this.largeList && items.length > 0 && initialScrollIndex !== -1) {
                    try {
                        this.largeList.scrollTo({ x: 0, y: initialScrollIndex * LEADERBOARD_ITEM_HEIGHT });
                    } catch (err) {
                        // console.log("err: ", err);
                    }
                }
            }, 1000);
        }
    };

    private toggleDropdown = () => {
        this.setState(({ isShowingDropdown }) => ({
            isShowingDropdown: !isShowingDropdown
        }));
    };

    private setLargeListRef = (ref: LargeList) => {
        this.largeList = ref;
    };

    private getHeight = () => LEADERBOARD_ITEM_HEIGHT;

    private renderFooter = () => {
        return <View style={styles.footer} />;
    };

    private renderIndexPath = ({ row }: IndexPath) => {
        const { items, initialScrollIndex, sortBy } = this.props;
        const item = items[row];

        if (item) {
            return (
                <LeaderboardItem
                    {...item}
                    isCurrentUser={row === initialScrollIndex}
                    sortBy={sortBy}
                    rank={row + 1}
                />
            );
        }

        return null;
    };

    private allowLeaderboard = () => {
        this.props.onAllowLeaderboard();
    };

    private handleRefresh = async () => {
        await this.props.onRefetch();
        await this.largeList.endRefresh();
        this.setState({
            shouldScrollTo: true
        });
    };

    private onChangeActiveLeaderboard = (activePage: number) => {
        this.props.onLeaderboardChange(activePage);
    };

    private handleTabPress = (activeTab: string) => {
        return async () => {
            // add mindful mins refetch
            switch (activeTab) {
                case "coins":
                    await this.props.onHandleCoinsRefetch();
                    break;

                case "steps":
                    await this.props.onHandleStepsRefetch();
                    break;

                case "mindful":
                    await this.props.onHandleMindfulMinsRefetch();
                    break;
            }
            this.setState({
                shouldScrollTo: true
            });
        };
    };
}
