import * as React from "react";
import { View } from "react-native";
import Svg from "react-native-svg";
import { GiraffeAnimated, GiraffeStatic, Glow, Shine, Static } from "./yu-coin-subcomponents";
import styles, { svgSpecs } from "./yu-coin.styles";

interface IProps {
    scale?: number;
    isGrayScale?: boolean;
    isLoading?: boolean;
    hasWhiteGlow?: boolean;
}

export default function YuCoin({ isGrayScale, isLoading, hasWhiteGlow }: IProps) {
    return (
        <View style={styles.wrapper}>
            {isGrayScale ? null : <Glow hasWhiteGlow={hasWhiteGlow} />}
            <View style={styles.innerWrapper}>
                <View style={styles.svgWrapper}>
                    <Svg {...svgSpecs}>
                        <Static isGrayScale={isGrayScale} />
                        {isLoading && !isGrayScale ? <GiraffeAnimated /> : <GiraffeStatic isGrayScale={isGrayScale} />}
                    </Svg>
                    {isLoading || isGrayScale ? null : <Shine />}
                </View>
            </View>
        </View>
    );
}
