import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Close, Text } from "../../atoms";
import data from "./activity-history-levels.data";
import styles from "./activity-history-levels.styles";
import Item, { ItemProps } from "./item";

export interface IServerProps {
    items: ItemProps[];
}

export interface IOwnProps {
    onPressClose: () => void;
}

type IProps = IOwnProps & IServerProps;

class ActivityHistoryLevels extends React.PureComponent<IProps> {
    public render() {
        const { onPressClose, items } = this.props;
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.padding}>
                    <View style={styles.headingWrapper}>
                        <Text
                            bold={true}
                            style={styles.heading}
                        >
                            {data.heading}
                        </Text>
                    </View>
                </View>

                <View style={styles.headersWrapper}>
                    <View style={StyleSheet.flatten([styles.headerBase, styles.headerOneWrapper])}>
                        <Text style={styles.headerSpecial} bold={true}>level</Text>
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
                            <Text style={styles.dividerRightLabel} bold={true}>SEP</Text>
                        </View>
                    </View>
                </View>
                <ScrollView
                    style={styles.scrollView}
                >
                    {
                        items.map((item, index) => (
                            <Item key={index} {...item} />
                        ))
                    }
                </ScrollView>
                <Close onPress={onPressClose} />
            </SafeAreaView >
        );
    }
}

export default ActivityHistoryLevels;
