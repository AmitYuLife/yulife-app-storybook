import { Close, GenericHeading, Text } from "@atoms/index";
import { TouchableOpacityWithState } from "@molecules/index";
import * as React from "react";
import { PureComponent } from "react";
import { FlatList, ListRenderItemInfo, SafeAreaView, View } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import styles from "./debug.styles";

interface ItemProps {
    id: string;
    onPress: () => void;
}

interface IProps {
    data: ItemProps[];
    onPressClose: () => void;
}

export default class DebugScreen extends PureComponent<IProps> {
    public render() {
        const { data, onPressClose } = this.props;

        return (
            <SafeAreaView style={styles.wrapper}>
                <GenericHeading heading="debug" hidesBorder={true} />
                <View style={styles.wrapper}>
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <Close onPress={onPressClose} />
            </SafeAreaView>
        );
    }

    private renderItem = ({ item }: ListRenderItemInfo<ItemProps>) => {
        return (
            <TouchableOpacityWithState style={styles.itemWrapper} onPress={item.onPress}>
                <Text>{item.id}</Text>
                <Svg viewBox="0 0 23 41" height={String(41 * 0.35)} width={String(23 * 0.35)} style={styles.arrow}>
                    <Polygon fill="#333" points="20.5,40.6 0.4,20.5 20.5,0.4 22.6,2.6 4.7,20.5 22.6,38.4 " />
                </Svg>
            </TouchableOpacityWithState>
        );
    };

    private keyExtractor = (item: ItemProps) => item.id;
}
