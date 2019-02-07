import * as React from "react";
import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet, View } from "react-native";
import { Close, GenericHeading, Text } from "../../../atoms";
import data from "./activity-history-levels.data";
import Item, { ItemProps } from "./activity-history-levels.item";
import styles from "./activity-history-levels.styles";

export interface IServerProps {
    items: ItemProps[];
}

export interface IOwnProps {
    loading: boolean;
    onPressClose: () => void;
    onRefresh: () => Promise<void>;
}

type IProps = IOwnProps & IServerProps;

function keyExtractor(item: ItemProps) {
    return item.id;
}

function renderItem({ item, index }: ListRenderItemInfo<ItemProps>) {
    return <Item key={index} {...item} />;
}

export default function ActivityHistoryLevels({ items, loading, onPressClose, onRefresh }: IProps) {
    return (
        <SafeAreaView style={styles.wrapper}>
            <GenericHeading heading={data.heading} />
            <View style={styles.headersWrapper}>
                <View style={StyleSheet.flatten([styles.headerBase, styles.headerOneWrapper])}>
                    <Text style={styles.headerSpecial} bold={true}>
                        {data.headerLevel}
                    </Text>
                </View>
                <View style={StyleSheet.flatten([styles.headerBase, styles.headerTwoWrapper])}>
                    <Text style={styles.headerDefault}>{data.headerLeft}</Text>
                </View>
                <View style={StyleSheet.flatten([styles.headerBase, styles.headerThreeWrapper])}>
                    <Text style={styles.headerDefault}>{data.headerMid}</Text>
                </View>
                <View style={StyleSheet.flatten([styles.headerBase, styles.headerFourWrapper])}>
                    <Text style={styles.headerDefault}>{data.headerRight}</Text>
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
                    keyExtractor={keyExtractor}
                    onRefresh={onRefresh}
                    refreshing={loading}
                    renderItem={renderItem}
                />
            </View>
            <Close onPress={onPressClose} />
        </SafeAreaView>
    );
}
