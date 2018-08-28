import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    innerWrapper: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "center"
    },
    svgWrapper: {
        borderRadius: 53,
        height: 109,
        overflow: "hidden",
        width: 109
    },
    wrapper: {
        height: 200,
        width: 200
    }
});

export const svgSpecs = {
    height: 109,
    style: {
        alignItems: "center",
        borderRadius: (106) / 2,
        justifyContent: "center",
        overflow: "hidden"
    } as ViewStyle,
    viewBox: "0 0 212 218",
    width: 106
};

export default styles;
