import React, { PureComponent } from "react";
import { isIphoneX } from "react-native-iphone-x-helper";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import Swiper from "react-native-swiper";
import { ChallengesListContainer } from "../..";
import DailyStepsContainer from "../daily-steps/daily-steps.container";
import { CentredScreen } from "../../../atoms";
import { TopBar, NavBar, ILabel } from "../../../molecules";
import { Style } from "../../../../styles";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IState {
    currentIndex: number;
}

class MemberRootContainer extends PureComponent<IProps, IState> {
    public state: IState = {
        currentIndex: 0,
    };

    // private COMPONENT_ID = ROUTES.member;
    private labels: ILabel[] = [
        {
            name: "yucoin",
            onPress: (): void => null,
        },
        {
            name: "quest",
            onPress: (): void => null,
        },
        {
            name: "rewards",
            onPress: (): void => null,
        },
    ];

    public render() {
        const { currentIndex } = this.state;

        return (
            <CentredScreen>
                <Swiper loop={false} showsPagination={false} index={currentIndex} autoplay={false} showsButtons={false}>
                    <DailyStepsContainer componentId={this.props.componentId} />
                    <ChallengesListContainer componentId={this.props.componentId} />
                </Swiper>
                <View style={styles.navBarWrapper}>
                    <NavBar activeIndex={0} hasNotification={false} labels={this.labels} scale={0.5} />
                </View>
                <View style={styles.topBarWrapper}>
                    <TopBar coins={1000} onPress={() => null} />
                </View>
            </CentredScreen>
        );
    }

    // TODO fix these
    // private onCta = () => { };

    // private onMenu = () => { };

    // private onStreak = () => { };

    // private onNavPress = (name: string) => { };
}

export default MemberRootContainer;

const styles = StyleSheet.create({
    navBarWrapper: {
        bottom: Style.SCALE_UP_AND_DOWN(17),
        position: "absolute",
    } as ViewStyle,
    topBarWrapper: {
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 40 : Platform.OS === "android" ? 0 : 20),
    } as ViewStyle,
});
