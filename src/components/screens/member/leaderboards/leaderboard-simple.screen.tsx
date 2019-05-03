import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_leaderboards } from "../../../../graphql/_core/schema";
import { Colours } from "../../../../styles";
import { GenericHeading, LeaderboardPosition } from "../../../atoms";
import { IItem } from "./leaderboards.screen";
import styles from "./leaderboards.screen.styles";

interface IProps {
    isLoading: boolean;
    isTopHidden: boolean;
    items: IItem[];
    copy: GetMobileCopy_getMobileCopy_screens_leaderboards;
}

const SimpleLeaderboard = ({ isLoading, items, isTopHidden, copy }: IProps) => {
    return (
        <View style={styles.simpleLeaderboardWrapper}>
            {isLoading ? (
                <View
                    style={StyleSheet.flatten([
                        styles.loaderWrapper,
                        isTopHidden ? styles.simpleLeaderboardHidden : styles.simpleLeaderboardShown
                    ])}
                >
                    <ActivityIndicator size="large" color={Colours.gray} />
                </View>
            ) : (
                <View style={styles.simpleLeaderboardPosition}>
                    <GenericHeading heading={copy.heading} hidesBorder={true} subheading={copy.subheading} />
                    {!isTopHidden && items.slice(0, 3).map(renderPosition)}
                </View>
            )}
        </View>
    );
};

function renderPosition(item: IItem, i: number) {
    return <LeaderboardPosition key={`top-3-${item.id}`} name={item.firstName} position={i + 1} />;
}

export default SimpleLeaderboard;
