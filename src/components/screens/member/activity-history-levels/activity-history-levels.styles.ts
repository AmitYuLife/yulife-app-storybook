import { Style } from "@styles/index";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";

const headerTwoWidth = Style.SCALE_UP_AND_DOWN(56);
const rowHeight = Style.SCALE_UP_AND_DOWN(23);
const dividerHeight = Style.SCALE_UP_AND_DOWN(34);
const distanceTwoThree = Style.SCALE_UP_AND_DOWN(12);

export default StyleSheet.create({
    activityLabel: {
        lineHeight: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    activityLabelWrapper: {
        height: rowHeight,
        marginLeft: distanceTwoThree
    } as ViewStyle,
    activityLabelsWrapper: {
        width: Style.SCALE_UP_AND_DOWN(150)
    } as ViewStyle,
    bottomDivider: {
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: 1,
        flex: 1
    } as ViewStyle,
    bottomDividerWrapper: {
        height: Style.SCALE_UP_AND_DOWN(20)
    } as ViewStyle,
    closeWrapper: {
        height: Style.SCALE_UP_AND_DOWN(28),
        position: "absolute",
        right: 0,
        top: Style.SCALE_UP_AND_DOWN(Platform.OS === "android" ? 20 : 40),
        width: Style.SCALE_UP_AND_DOWN(28)
    } as ViewStyle,
    dayOfMonth: {
        fontSize: Style.SCALE_UP_AND_DOWN(22),
        lineHeight: Style.SCALE_UP_AND_DOWN(20),
        textAlign: "center",
        width: "100%"
    } as TextStyle,
    dayOfWeek: {
        color: "rgb(136,136,136)",
        lineHeight: Style.SCALE_UP_AND_DOWN(20),
        textAlign: "center",
        width: "100%"
    } as TextStyle,
    dayWrapper: {
        width: headerTwoWidth
    } as ViewStyle,
    divider: {
        backgroundColor: "rgb(251,207,39)",
        bottom: 0,
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(24),
        top: 0,
        width: Style.SCALE_UP_AND_DOWN(2)
    } as ViewStyle,
    dividerLeft: {
        backgroundColor: "rgb(251,207,39)",
        height: "100%",
        width: Style.SCALE_UP_AND_DOWN(60)
    } as ViewStyle,
    dividerRight: {
        backgroundColor: "rgb(226,1,119)",
        flex: 1,
        height: "100%"
    } as ViewStyle,
    dividerRightLabel: {
        color: "white",
        lineHeight: dividerHeight,
        paddingLeft: Style.SCALE_UP_AND_DOWN(10)
    } as TextStyle,
    dividerRightLabelWrapper: {
        alignItems: "flex-start",
        height: "100%",
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(160)
    } as ViewStyle,
    dividerWrappers: {
        flexDirection: "row",
        height: dividerHeight
    } as ViewStyle,
    headerBase: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center"
    } as ViewStyle,
    headerDefault: {
        color: "rgb(225,5,119)"
    } as TextStyle,
    headerFourWrapper: {
        width: Style.SCALE_UP_AND_DOWN(46),
        alignItems: "flex-end"
    } as ViewStyle,
    headerOneWrapper: {
        width: Style.SCALE_UP_AND_DOWN(45)
    } as ViewStyle,
    headerSpecial: {
        color: "rgb(251,207,39)"
    } as TextStyle,
    headerThreeWrapper: {
        alignItems: "flex-start",
        flex: 1,
        paddingLeft: distanceTwoThree
    } as ViewStyle,
    headerTwoWrapper: {
        width: headerTwoWidth
    } as ViewStyle,
    headersWrapper: {
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(65),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    levelCircle: {
        alignItems: "center",
        backgroundColor: "rgb(251,207,39)",
        borderRadius: Style.SCALE_UP_AND_DOWN(45) / 2,
        height: Style.SCALE_UP_AND_DOWN(45),
        justifyContent: "center",
        position: "absolute",
        right: Platform.OS === "ios" ? (Style.DEVICE_WIDTH > 400 ? 5 : 3) : Style.isShortAndroid() ? 4 : 2,
        top: 15,
        width: Style.SCALE_UP_AND_DOWN(45)
    } as ViewStyle,
    levelTextBottom: {
        color: "white",
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        textAlign: "center"
    } as TextStyle,
    levelTextTop: {
        color: "white",
        fontSize: Style.SCALE_UP_AND_DOWN(10),
        marginBottom: Platform.OS === "ios" ? 0 : -5,
        textAlign: "center"
    } as TextStyle,
    levelTextWrapper: {
        marginBottom: -6
    } as ViewStyle,
    levelWrapper: {
        width: Style.SCALE_UP_AND_DOWN(60)
    } as ViewStyle,
    listItemContentWrapper: {
        flex: 1,
        paddingRight: Style.SCALE_UP_AND_DOWN(15),
        paddingTop: Style.SCALE_UP_AND_DOWN(20)
    } as ViewStyle,
    listItemRow: {
        flexDirection: "row"
    } as ViewStyle,
    listItemWrapper: {
        flexDirection: "row"
    } as ViewStyle,
    scrollView: {
        flex: 1
    } as ViewStyle,
    starWrapper: {
        marginLeft: Style.SCALE_UP_AND_DOWN(5)
    } as ViewStyle,
    starsColumn: {
        width: Style.SCALE_UP_AND_DOWN(60)
    } as ViewStyle,
    starsWrapper: {
        alignItems: "center",
        flexDirection: "row",
        height: rowHeight
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle,
    yuCoinEarned: {
        lineHeight: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    yuCoinEarnedColumn: {
        flex: 1
    } as ViewStyle,
    yuCoinEarnedWrapper: {
        alignItems: "center",
        flexDirection: "row",
        height: rowHeight,
        justifyContent: "flex-end"
    } as ViewStyle
});
