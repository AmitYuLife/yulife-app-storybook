import { Leaderboard } from "@app/redux/user/user.selectors";
import React from "react";
import { ActivityIndicator, FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_leaderboards } from "../../../../../graphql/_core/schema";
import { Colours } from "../../../../../styles";
import { GenericHeading, PageIndicator } from "../../../../atoms";
import LeaderBoardPosition from "../../../../atoms/leaderboard-position/leaderboard-position";
import { IItem } from "../leaderboards.screen";
import styles, { calculateListHeight } from "./leaderboard-position-scroll.styles";

interface IProps {
    items: IItem[];
    height: number;
    activePage: number;
    isLoading: boolean;
    pages: Leaderboard[];
    isHidden: boolean;
    onSwipeEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    copy: GetMobileCopy_getMobileCopy_screens_leaderboards;
}

class LeaderboardPositionScroll extends React.PureComponent<IProps> {
    public render() {
        const { activePage, height, isHidden, pages, onSwipeEnd } = this.props;
        return (
            <>
                <FlatList
                    data={pages}
                    horizontal={true}
                    pagingEnabled={true}
                    keyExtractor={this.keyExtractor}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={onSwipeEnd}
                    style={StyleSheet.flatten([
                        styles.flatlist,
                        {
                            height: isHidden ? calculateListHeight(height) - 250 : calculateListHeight(height)
                        }
                    ])}
                    renderItem={this.renderLeaderboardPositions}
                />
                {pages.length === 1 ? null : (
                    <View style={styles.pageIndicatorWrapper}>
                        <PageIndicator pages={pages} activePage={activePage} />
                    </View>
                )}
            </>
        );
    }

    private keyExtractor = (_: undefined, index: number) => `${index}`;

    private renderLeaderboardPositions = ({ item: { name } }: any) => {
        const { items, isHidden, isLoading, copy } = this.props;
        return (
            <View style={styles.scrollViewItem}>
                {isLoading && !isHidden ? (
                    <ActivityIndicator style={styles.loader} size="large" color={Colours.gray} />
                ) : (
                    !isHidden && (
                        <View style={styles.leaderboardPositionWrapper}>
                            {items.slice(0, 3).map((item: IItem, leaderboardIndex: number) => (
                                <LeaderBoardPosition
                                    key={`top-3-${item.id}`}
                                    name={item.firstName}
                                    position={leaderboardIndex + 1}
                                />
                            ))}
                        </View>
                    )
                )}

                <View style={styles.header}>
                    <GenericHeading heading={name} hidesBorder={true} subheading={copy.subheading} />
                </View>
            </View>
        );
    };
}

export default LeaderboardPositionScroll;
