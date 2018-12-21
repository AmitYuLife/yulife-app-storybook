import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import Svg from "react-native-svg";
import {
    GiraffeAnimated,
    GiraffeStatic,
    Glow,
    Shine,
    Static
} from "./yu-coin-subcomponents";
import styles, { svgSpecs } from "./yu-coin.styles";

interface IProps {
    scale?: number;
    isGrayScale?: boolean;
    isLoading?: boolean;
}

const YuCoin: SFC<IProps> = ({ isGrayScale, isLoading }) => (
    <View style={styles.wrapper}>
        {isGrayScale ? null : <Glow />}
        <View style={styles.innerWrapper}>
            <View style={styles.svgWrapper}>
                <Svg {...svgSpecs}>
                    <Static isGrayScale={isGrayScale} />
                    {isLoading && !isGrayScale ? (
                        <GiraffeAnimated />
                    ) : (
                        <GiraffeStatic isGrayScale={isGrayScale} />
                    )}
                </Svg>
                {isLoading || isGrayScale ? null : <Shine />}
            </View>
        </View>
    </View>
);

export default YuCoin;
