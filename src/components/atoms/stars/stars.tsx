import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { StarLeft, StarMid, StarRight } from "./assets";
import { getColorFromType } from "./stars.helpers";
import styles from "./stars.styles";

interface IProps {
    isLeftHighlighted?: boolean;
    isMidHighlighted?: boolean;
    isRightHighlighted?: boolean;
    type?: string;
}

const Stars: SFC<IProps> = ({ isLeftHighlighted, isMidHighlighted, isRightHighlighted, type }) => {
    const { fill, accentFill } = getColorFromType(type);
    return (
        <View style={styles.wrapper}>
            <StarLeft isHighlighted={isLeftHighlighted} fill={fill} accentFill={accentFill} />
            <View style={styles.starMidWrapper}>
                <StarMid isHighlighted={isMidHighlighted} fill={fill} accentFill={accentFill} />
            </View>
            <StarRight isHighlighted={isRightHighlighted} fill={fill} accentFill={accentFill} />
        </View>
    );
};

export default Stars;
