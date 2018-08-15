import React, { PureComponent } from "react";
import { isIphoneX } from "react-native-iphone-x-helper";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import Swiper from "react-native-swiper";
import { ChallengesListContainer, DailyStepsContainer } from "../index";
import { CentredScreen } from "../../atoms";
import { TopBar, NavBar, ILabel } from "../../molecules";
import { Style } from "../../../styles";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IState {
    currentIndex: number;
    isModalVisible: boolean;
}

class MemberRootContainer extends PureComponent<IProps, IState> {
    public state: IState = {
        currentIndex: 0,
        isModalVisible: false,
    };

    // private COMPONENT_ID = ROUTES.member;
    private labels: ILabel[] = [
        {
            name: "yucoin",
            onPress: () => this.handleNavBarIndexChange(0),
        },
        {
            name: "quest",
            onPress: () => this.handleNavBarIndexChange(1),
        },
        {
            name: "rewards",
            onPress: () => this.handleNavBarIndexChange(2),
        },
    ];

    public render() {
        const { currentIndex, isModalVisible } = this.state;

        return (
            <CentredScreen>
                <Swiper
                    loop={false}
                    showsPagination={false}
                    index={currentIndex}
                    autoplay={false}
                    showsButtons={false}
                    onIndexChanged={this.handleNavBarIndexChange}
                >
                    <DailyStepsContainer />
                    <ChallengesListContainer onModalToggle={this.handleToggleModal} />
                </Swiper>
                {!isModalVisible && (
                    <>
                        <View style={styles.navBarWrapper}>
                            <NavBar
                                activeIndex={currentIndex}
                                areIconsHidden={currentIndex === 2}
                                hasNotification={false}
                                labels={this.labels}
                            />
                        </View>
                        <View style={styles.topBarWrapper}>
                            <TopBar coins={1000} onPressLeftIcon={() => null} />
                        </View>
                    </>
                )}
            </CentredScreen>
        );
    }

    private handleNavBarIndexChange = (currentIndex: number) => {
        this.setState({ currentIndex });
    }

    private handleToggleModal = (isModalVisible: boolean) => {
        this.setState({ isModalVisible });
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
