import * as React from "react";
import { PureComponent } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Close, GenericHeading, Text } from "../../../atoms";
import data from "./activity-history-levels.data";
import styles from "./activity-history-levels.styles";
import Item, { ItemProps } from "./item";

export interface IServerProps {
    items: ItemProps[];
}

export interface IOwnProps {
    loading: boolean;
    onPressClose: () => void;
    onRefresh: () => Promise<void>;
}

type IProps = IOwnProps & IServerProps;

class ActivityHistoryLevels extends PureComponent<IProps> {
    public render() {
        const { items, loading, onPressClose, onRefresh } = this.props;

        return (
            <SafeAreaView style={styles.wrapper}>
                <GenericHeading heading={data.heading} />
                <View style={styles.headersWrapper}>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerOneWrapper])}>
                        <Text style={styles.headerSpecial} bold={true}>
                            level
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerTwoWrapper])}>
                        <Text style={styles.headerDefault}>date</Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerThreeWrapper])}>
                        <Text style={styles.headerDefault}>{`activity & progress`}</Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerFourWrapper])}>
                        <Text style={styles.headerDefault}>yucoin</Text>
                    </View>
                </View>

                <View style={styles.dividerWrappers}>
                    <View style={styles.dividerLeft} />
                    <View style={styles.dividerRight}>
                        <View style={styles.dividerRightLabelWrapper}>
                            <Text style={styles.dividerRightLabel} bold={true}>
                                last 30 days
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.scrollView}>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id}
                        onRefresh={onRefresh}
                        refreshing={loading}
                        renderItem={({ item, index }) => <Item key={index} {...item} />}
                    />
                </View>
                <Close onPress={onPressClose} />
            </SafeAreaView>
        );
    }
}

export default ActivityHistoryLevels;
