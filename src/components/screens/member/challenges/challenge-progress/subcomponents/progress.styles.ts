import { StyleSheet } from "react-native";
import { Colours, Style } from "../../../../../../styles";

const styles = StyleSheet.create({
    bar: {
        backgroundColor: Colours.progressBar.shadow,
        height: Style.PIXEL * 4,
        marginRight: 3,
        marginTop: 5
    },
    goal: {
        alignItems: "flex-end",
        alignSelf: "stretch",
        flexDirection: "column",
        width: Style.PIXEL * 50
    },
    goalText: {
        color: Colours.progressBar.shadow,
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(13),
        marginTop: Style.SCALE_UP_AND_DOWN(14.5),
        textAlign: "center"
    },
    progress: {
        backgroundColor: Colours.progressBar.background,
        flex: 1,
        height: Style.PIXEL * 4
    },
    star: {
        position: "absolute",
        right: 1,
        top: 3
    },
    starBackground: {
        position: "absolute",
        right: 0,
        top: 2
    },
    stepsGoals: {
        left: 0,
        position: "absolute",
        right: 0,
        top: 0
    },
    stepsRow: {
        alignItems: "center",
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});

export default styles;
