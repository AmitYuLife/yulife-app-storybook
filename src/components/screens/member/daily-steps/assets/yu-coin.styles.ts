import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    svgWrapper: {
        height: 109,
        width: 109,
        borderRadius: 53,
        overflow: "hidden",
    },
    innerWrapper: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        height: 200,
        width: 200
    }
});

export const svgSpecs = {
    style: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius:
            (106) / 2,
        overflow: "hidden",
    } as ViewStyle,
    height: 109,
    width: 106,
    viewBox: "0 0 212 218",
};

export default styles;
