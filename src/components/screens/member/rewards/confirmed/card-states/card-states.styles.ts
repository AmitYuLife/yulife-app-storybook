import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../../../styles";

const imageDimensions = {
    height: Style.SCALE_UP_AND_DOWN(165),
    width: Style.SCALE_UP_AND_DOWN(265)
};

const styles = StyleSheet.create({
    icon: {
        marginRight: Style.SCALE_UP_AND_DOWN(16)
    } as ImageStyle,
    image: {
        ...imageDimensions
    } as ImageStyle,
    imageWrapper: {
        marginBottom: Style.SCALE_UP_AND_DOWN(44),
        marginTop: Style.SCALE_UP_AND_DOWN(100),
        ...imageDimensions
    } as ViewStyle,
    imageWrapperFailed: {
        backgroundColor: "rgb(235,235,235)"
    } as ViewStyle,
    overlayWrapper: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    } as ViewStyle,
    text: {
        fontSize: Style.SCALE_UP_AND_DOWN(17)
    }
});

export default styles;
