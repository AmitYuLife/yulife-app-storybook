import { countSources, IFormattedDatesByMonth } from "@containers/member/activity-history/activity-history.helpers";
import { ACTIVITY_HISTORY_SCREEN } from "@ids";
import { YulifeLoadingFooter, YulifeRefreshHeader } from "@molecules/index";
import { Style } from "@styles/index";
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { GetMobileCopy_getMobileCopy_screens_activityHistoryLevels } from "../../../../graphql/_core/schema";
import { Close, GenericHeading, Loading, Text } from "../../../atoms";
import Item from "./activity-history-levels.item";
import styles from "./activity-history-levels.styles";

export interface IServerProps {
    items: IFormattedDatesByMonth[];
}

export interface IOwnProps {
    loading: boolean;
    onPressClose: () => void;
    onRefresh: () => Promise<void>;
    onFetchMoreData?: () => void;
    copy: GetMobileCopy_getMobileCopy_screens_activityHistoryLevels;
    onSetLargelistRef: (ref: LargeList) => void;
}

type IProps = IOwnProps & IServerProps;

interface IState {
    isAllDataLoaded: boolean;
    willGetMoreData: boolean;
    fetchTries: number;
}

export default class ActivityHistoryLevels extends React.Component<IProps, IState> {
    public state = {
        isAllDataLoaded: false,
        willGetMoreData: false,
        fetchTries: 0
    };

    public largeList: LargeList = null;

    public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        // Check if there are items first then check if there are new items for current month
        return (
            (!!this.props.items.length && this.props.items[0].items.length !== nextProps.items[0].items.length) ||
            this.props.items.length !== nextProps.items.length ||
            this.props.loading !== nextProps.loading ||
            this.state.willGetMoreData !== nextState.willGetMoreData ||
            this.state.isAllDataLoaded !== nextState.isAllDataLoaded ||
            this.state.fetchTries !== nextState.fetchTries
        );
    }

    public componentDidUpdate(prevProps: IProps) {
        const { isAllDataLoaded, willGetMoreData, fetchTries } = this.state;
        const { items } = this.props;
        const wasLoading = !this.props.loading && prevProps.loading;
        // Make sure there items.length > 0 before checking oldest items for level of 1
        const hasLevel1Item =
            Boolean(items.length) && items[items.length - 1].items.findIndex((level) => level.level === 1) !== -1;
        const hasSameNumberOfItems = this.props.items.length === prevProps.items.length;

        if ((hasLevel1Item || items.length === 0) && !isAllDataLoaded) {
            this.setState({
                isAllDataLoaded: true
            });
        }

        // as long as there are more items, should stop fetching
        if (!hasSameNumberOfItems && willGetMoreData) {
            return this.setState({
                willGetMoreData: false,
                fetchTries: 0
            });
        }

        if (wasLoading && hasSameNumberOfItems && willGetMoreData && fetchTries < 3) {
            return this.fetchMoreData();
        } else if (wasLoading && hasSameNumberOfItems && willGetMoreData && fetchTries === 3) {
            this.setState({
                willGetMoreData: false,
                fetchTries: 0,
                isAllDataLoaded: true
            });
        }
    }

    public renderItem = ({ section, row }: IndexPath) => {
        const { items } = this.props;
        const item = items[section].items[row];

        if (item) {
            return (
                <View>
                    <Item {...item} />
                </View>
            );
        }
    };

    public renderSection = (section: number) => {
        const { items } = this.props;
        const item = items[section];

        if (item) {
            return (
                <View style={styles.dividerWrappers}>
                    <View style={styles.dividerLeft} />
                    <View style={styles.dividerRight}>
                        <View style={styles.dividerRightLabelWrapper}>
                            <Text style={styles.dividerRightLabel} bold={true}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }
    };

    public render() {
        const { isAllDataLoaded } = this.state;
        const { items, onPressClose, copy, onSetLargelistRef, onRefresh } = this.props;
        return (
            <SafeAreaView style={styles.wrapper} testID={ACTIVITY_HISTORY_SCREEN}>
                <GenericHeading heading={copy.heading} />
                <View style={styles.headersWrapper}>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerOneWrapper])}>
                        <Text style={styles.headerSpecial} bold={true}>
                            {copy.headerLevel}
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerTwoWrapper])}>
                        <Text style={styles.headerDefault}>{copy.headerLeft}</Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerThreeWrapper])}>
                        <Text style={styles.headerDefault}>{copy.headerMid}</Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerFourWrapper])}>
                        <Text style={styles.headerDefault}>{copy.headerRight}</Text>
                    </View>
                </View>

                <View style={styles.scrollView}>
                    <LargeList
                        ref={onSetLargelistRef}
                        data={items}
                        onRefresh={onRefresh}
                        heightForIndexPath={this.handleHeightForIndexPath}
                        heightForSection={this.handleHeightForSection}
                        renderIndexPath={this.renderItem}
                        renderSection={this.renderSection}
                        renderEmpty={this.renderEmpty}
                        onLoading={this.fetchMoreData}
                        refreshHeader={YulifeRefreshHeader}
                        loadingFooter={YulifeLoadingFooter}
                        allLoaded={isAllDataLoaded}
                    />
                </View>
                <Close onPress={onPressClose} />
            </SafeAreaView>
        );
    }

    private fetchMoreData = () => {
        const { isAllDataLoaded, fetchTries } = this.state;
        const { loading } = this.props;
        if (!isAllDataLoaded && !loading) {
            this.setState(
                {
                    willGetMoreData: true,
                    fetchTries: fetchTries + 1
                },
                this.props.onFetchMoreData
            );
        }
    };

    private renderEmpty = () => {
        const { loading } = this.props;
        if (loading) {
            return <Loading />;
        }

        return null;
    };

    private handleHeightForSection = () => Style.SCALE_UP_AND_DOWN(34);

    private handleHeightForIndexPath = ({ section, row }: IndexPath) => {
        const { items } = this.props;

        const item = items[section].items[row];
        const sourceCount = countSources(item.sources);
        const sourceHeight = sourceCount * Style.SCALE_UP_AND_DOWN(23);
        const dividers = Style.SCALE_UP_AND_DOWN(40);
        const mindfulSecondsHeight = item.mindfulSeconds ? Style.SCALE_UP_AND_DOWN(23) : 0;
        const challengeHeight = item.challenges.length
            ? item.challenges.length * Style.SCALE_UP_AND_DOWN(23)
            : Style.SCALE_UP_AND_DOWN(23);
        const height = challengeHeight + Style.SCALE_UP_AND_DOWN(23) + sourceHeight + dividers + mindfulSecondsHeight;
        return height;
    };
}
