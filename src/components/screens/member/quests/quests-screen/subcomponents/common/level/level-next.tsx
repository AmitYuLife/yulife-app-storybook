import React, { SFC } from "react";
import { G, Text } from "react-native-svg";
import { Style } from "../../../../../../../../styles";

interface IProps {
    level: number;
}

const LevelNext: SFC<IProps> = ({ level }) => !level ? null : (
    <G>
        <Text
            y="13"
            textAnchor="middle"
            fill="white"
            fontSize="44"
            fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
            fontWeight="bold"
        >
            {level}
        </Text>
    </G>
);

export default LevelNext;
