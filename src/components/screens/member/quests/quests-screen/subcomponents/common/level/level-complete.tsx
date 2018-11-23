import React, { SFC } from "react";
import { G, Text } from "react-native-svg";
import { Style } from "../../../../../../../../styles";
import Star from "../star";

interface IProps {
    level: number;
    rating: number;
}

const LevelComplete: SFC<IProps> = ({ level, rating }) => (
    <G>
        <Text
            y="5"
            textAnchor="middle"
            fill="white"
            fontSize={String(22 * 2)}
            fontFamily={Style.FONT_FAMILY_PRIMARY}
            fontWeight="normal"
        >
            {level}
        </Text>
        <Star filled={rating} />
    </G>
);

export default LevelComplete;
