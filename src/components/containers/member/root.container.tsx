import React, { PureComponent } from "react";
import { isIphoneX } from "react-native-iphone-x-helper";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import Swiper from "react-native-swiper";
import { ChallengesListContainer, DailyStepsContainer, RewardsContainer } from "../index";
import { TopBar, NavBar, ILabel } from "../../molecules";
import { Style } from "../../../styles";
import { ROUTES } from "../../../navigation/routes";
import { Navigation } from "react-native-navigation";
import { IReduxState } from "../../../redux/_core/reducers";
import { getTotalCoins } from "../../../redux/coins/coins.selectors";
import { connect } from "react-redux";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IConnectedState {
    totalCoins: number;
}

interface IState {
    currentIndex: number;
    isModalVisible: boolean;
    isSecondPageLoaded: boolean;
    isThirdPageLoaded: boolean;
}

type Props = IProps & IConnectedState;

class MemberRootContainer extends PureComponent<Props, IState> {
    public state: IState = {
        currentIndex: 0,
        isModalVisible: false,
        isSecondPageLoaded: false,
        isThirdPageLoaded: false,
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
        const { totalCoins } = this.props;
        const { currentIndex, isModalVisible, isSecondPageLoaded, isThirdPageLoaded } = this.state;

        return (
            <>
                <Swiper
                    loop={false}
                    showsPagination={false}
                    index={currentIndex}
                    autoplay={false}
                    showsButtons={false}
                    onIndexChanged={this.handleNavBarIndexChange}
                >
                    <DailyStepsContainer />
                    <ChallengesListContainer isLoaded={isSecondPageLoaded} onModalToggle={this.handleToggleModal} />
                    <RewardsContainer isLoaded={isThirdPageLoaded} />
                </Swiper>
                {!isModalVisible && (
                    <>
                        <View style={styles.navBarWrapper}>
                            <NavBar
                                activeIndex={currentIndex}
                                areIconsHidden={currentIndex === 2}
                                hasNotification={false}
                                colour={currentIndex === 2 ? NavBar.Colours.DARKER : NavBar.Colours.LIGHT}
                                labels={this.labels}
                            />
                        </View>
                        <View style={styles.topBarWrapper}>
                            <TopBar coins={totalCoins} onPressLeftIcon={this.showMenu} />
                        </View>
                    </>
                )}
            </>
        );
    }

    private showMenu = () => {
        Navigation.mergeOptions(ROUTES.menu, {
            sideMenu: {
              left: {
                visible: true
              }
            }
      });
    }

    private handleNavBarIndexChange = (currentIndex: number) => {
        this.setState(({ isSecondPageLoaded, isThirdPageLoaded }) => ({
            currentIndex,
            isSecondPageLoaded: isSecondPageLoaded || currentIndex === 1,
            isThirdPageLoaded: isThirdPageLoaded || currentIndex === 2,
        }));
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

const mapStateToProps = (state: IReduxState) => ({
    totalCoins: getTotalCoins(state)
});

export default connect<IConnectedState>(
    mapStateToProps,
)(MemberRootContainer);

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
