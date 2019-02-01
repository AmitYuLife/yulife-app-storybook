import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Style } from "../../../styles";
import assets from "./assets";

interface IProps {
    onSelect: (value: number) => void;
    rating: number;
}
const StarRating: SFC<IProps> = ({ onSelect, rating }) => (
    <View style={styles.starWrapper}>
        {
            Array.from(Array(5)).map((_, i) => (
                <TouchableOpacity
                    key={i}
                    onPress={() => onSelect(i + 1)}
                    style={styles.star}
                >
                    {i < rating ?
                        <Image source={assets.starActive} /> :
                        <Image source={assets.starInactive} />
                    }
                </TouchableOpacity>
            ))
        }
    </View>
);

export default StarRating;

const styles = StyleSheet.create({
    star: {
        marginHorizontal: Style.SCALE_UP_AND_DOWN(5)
    },
    starWrapper: {
        flexDirection: "row"
    }
});
