import {
    ImageStyle,
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Style } from "../../../styles";
import { Images, IMAGES } from "./challenge-tile";

export const getImageStyle = (image: Images): ImageStyle => {
    let top;
    let right;

    switch (image) {
        case IMAGES.SQUIRREL:
            top = Style.SCALE_UP_AND_DOWN(7);
            right = Style.SCALE_UP_AND_DOWN(15);
            break;
        case IMAGES.OSTRICH:
            top = 0;
            right = Style.SCALE_UP_AND_DOWN(27);
            break;
        case IMAGES.ELEPHANT:
            top = Style.SCALE_UP_AND_DOWN(7);
            right = Style.SCALE_UP_AND_DOWN(9);
            break;
        case IMAGES.BIRD:
            top = Style.SCALE_UP_AND_DOWN(17);
            right = Style.SCALE_UP_AND_DOWN(10);
            break;
        default:
            top = 0;
            right = 0;
    }
    return StyleSheet.flatten([
        {
            position: "absolute",
            right,
            top: top - (Style.isShortAndroid() ? 40 : 0)
        } as ImageStyle
    ]);
};

export const getImage = (image: Images) => {
    switch (image) {
        case IMAGES.SQUIRREL:
            return require("./assets/squirrel.png");
        case IMAGES.ELEPHANT:
            return require("./assets/elephant.png");
        case IMAGES.OSTRICH:
            return require("./assets/ostrich.png");
        case IMAGES.BIRD:
            return require("./assets/bird.png");
        default:
            return null;
    }
};

const styles = StyleSheet.create({
    contentDurationWrapper: {} as ViewStyle,
    contentReward: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(13)
    } as TextStyle,
    contentRewardWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(2)
    } as ViewStyle,
    contentTitle: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? 13 : 17
        )
    } as TextStyle,
    contentTitleWrapper: {} as ViewStyle,
    contentWrapper: {
        flex: 1,
        paddingLeft: Style.SCALE_UP_AND_DOWN(15),
        paddingTop: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? 4 : 11
        )
    } as ViewStyle,
    imageBackground: {
        backgroundColor: "rgba(255,255,255,0.5)",
        borderTopRightRadius: Style.SCALE_UP_AND_DOWN(20),
        bottom: 0,
        height: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? 108 : 120
        ),
        left: 0,
        position: "absolute",
        right: 0
    } as ViewStyle,
    imageBackgroundFlipped: {
        borderTopLeftRadius: Style.SCALE_UP_AND_DOWN(20),
        borderTopRightRadius: 0
    } as ViewStyle,
    imageBackgroundLocked: {
        backgroundColor: "transparent",
        height: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? 100 : 200
        )
    } as ViewStyle,
    imageNext: {
        height: Style.SCALE_UP_AND_DOWN(25),
        width: Style.SCALE_UP_AND_DOWN(25)
    } as ImageStyle,
    imageWrapper: {
        height: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? 80 : 140
        )
    } as ViewStyle,
    imageWrapperLocked: {
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? 200 : 220
        ),
        justifyContent: "center",
        paddingBottom: Style.isShortAndroid() ? 100 : 0
    } as ViewStyle,
    imageWrapperNext: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(55)
    } as ViewStyle,
    isLockedBottomWrapper: {
        backgroundColor: "rgba(255,255,255,0.5)"
    } as ViewStyle,
    lockedImage: {
        marginBottom: Style.SCALE_UP_AND_DOWN(9)
    } as ImageStyle,
    lockedLabel: {
        fontSize: Style.SCALE_UP_AND_DOWN(17)
    } as TextStyle,
    lockedOverlay: {
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        borderTopRightRadius: Style.SCALE_UP_AND_DOWN(20),
        bottom: 0,
        height: Style.isShortAndroid() ? 160 : "auto",
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? -22 : 20
        )
    } as ViewStyle,
    lockedOverlayFlipped: {
        borderTopLeftRadius: Style.SCALE_UP_AND_DOWN(20),
        borderTopRightRadius: 0
    } as ViewStyle,
    sectionBottomInsideWrapper: {
        flexDirection: "row",
        height: "100%"
    } as ViewStyle,
    sectionBottomWrapper: {
        backgroundColor: "rgba(255,255,255,0.9)",
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? 64 : 80
        )
    } as ViewStyle,
    wrapper: {
        height: Style.SCALE_UP_AND_DOWN(
            Style.isShortAndroid() ? 200 : 220
        ),
        marginTop: Style.SCALE_UP_AND_DOWN(7),
        width: Style.SCALE_UP_AND_DOWN(165)
    } as ViewStyle
});

export default styles;
