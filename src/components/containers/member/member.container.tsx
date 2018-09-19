import React, { PureComponent } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Navigation } from "react-native-navigation";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import { DailyStepsContainer, QuestsContainer, RewardsContainer } from "..";
import { ROUTES } from "../../../navigation/routes";
import { IReduxState } from "../../../redux/_core/reducers";
import { getTotalCoins } from "../../../redux/coins/coins.selectors";
import { activeLevelSelector, IActiveLevel } from "../../../redux/levels/levels.selectors";
import { Style } from "../../../styles";
import { ILabel, NavBar, TopBar } from "../../molecules";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IConnectedState {
    active: IActiveLevel;
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

    public static getDerivedStateFromProps(props: Props, state: IState) {
        const isQuestTab = state.currentIndex === 1;
        const isModalVisible = isQuestTab && !!props.active.status;
        return { isModalVisible };
    }
    public state: IState = {
        currentIndex: 0,
        isModalVisible: false,
        isSecondPageLoaded: false,
        isThirdPageLoaded: false
    };

    // private COMPONENT_ID = ROUTES.member;
    private labels: ILabel[] = [
        {
            name: "yucoin",
            onPress: () => this.handleNavBarIndexChange(0)
        },
        {
            name: "quest",
            onPress: () => this.handleNavBarIndexChange(1)
        },
        {
            name: "rewards",
            onPress: () => this.handleNavBarIndexChange(2)
        }
    ];

    public render() {
        const { active, totalCoins } = this.props;
        const { currentIndex, isModalVisible } = this.state;
        const isQuestTab = currentIndex === 1;
        const isRewardsTab = currentIndex === 2;

        const showTimer = isQuestTab && !!active.levelSlotId && !active.status;
        const topBarProps = {
            coins: totalCoins,
            menuLabel: showTimer ? active.subtype : null,
            timer: showTimer ? active.endDateTime : null
        };

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
                    <DailyStepsContainer onNavBarIndexChange={this.handleNavBarIndexChange} />
                    <QuestsContainer
                        challengeType={active.subtype}
                        onNavBarIndexChange={this.handleNavBarIndexChange}
                    />
                    <RewardsContainer />
                </Swiper>
                {!isModalVisible && (
                    <>
                        <View style={styles.navBarWrapper}>
                            <NavBar
                                activeIndex={currentIndex}
                                areIconsHidden={isRewardsTab}
                                hasNotification={false}
                                colour={isRewardsTab ? NavBar.Colours.DARKER : NavBar.Colours.LIGHT}
                                labels={this.labels}
                            />
                        </View>
                        <View style={styles.topBarWrapper}>
                            <TopBar {...topBarProps} onPressLeftIcon={this.showMenu} />
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
            isThirdPageLoaded: isThirdPageLoaded || currentIndex === 2
        }));
    }

    // private handleToggleModal = (isModalVisible: boolean) => {
    //     this.setState({ isModalVisible });
    // }

    // TODO fix these
    // private onCta = () => { };

    // private onMenu = () => { };

    // private onStreak = () => { };

    // private onNavPress = (name: string) => { };
}

const mapStateToProps = (state: IReduxState) => ({
    active: activeLevelSelector(state),
    totalCoins: getTotalCoins(state)
});

export default connect<IConnectedState>(mapStateToProps)(MemberRootContainer);

const styles = StyleSheet.create({
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(17),
        position: "absolute",
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    topBarWrapper: {
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 40 : Platform.OS === "android" ? 0 : 20)
    } as ViewStyle
});
