import moment from "moment";
import React, { PureComponent } from "react";
import { Linking, View } from "react-native";
import { Navigation } from "react-native-navigation";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import { DailyStepsContainer, QuestsContainer, RewardsContainer } from "..";
import { ROUTES } from "../../../navigation/routes";
import { IReduxState } from "../../../redux/_core/reducers";
import { getTotalCoins } from "../../../redux/coins/coins.selectors";
import {
    requirePushEnabled,
    RequirePushEnabledAction,
    skipPushPermissions,
    SkipPushPermissionsAction
} from "../../../redux/device/device.actions";
import { IPushNotification, pushNotificationsSelector } from "../../../redux/device/device.selectors";
import { activeLevelSelector, IActiveLevel } from "../../../redux/levels/levels.selectors";
import { GenericModal } from "../../modals";
import { ILabel, NavBar, TopBar } from "../../molecules";
import { styles } from "./member.styles";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IConnectedState {
    active: IActiveLevel;
    pushNotifications: IPushNotification;
    totalCoins: number;
}

interface IConnectedDispatch {
    requirePushEnabled: RequirePushEnabledAction;
    skipPushPermissions: SkipPushPermissionsAction;
}

interface IState {
    currentIndex: number;
    isModalVisible: boolean;
    isSecondPageLoaded: boolean;
    isThirdPageLoaded: boolean;
}

type Props = IProps & IConnectedState & IConnectedDispatch;

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
            name: "quests",
            onPress: () => this.handleNavBarIndexChange(1)
        },
        {
            name: "rewards",
            onPress: () => this.handleNavBarIndexChange(2)
        }
    ];

    public render() {
        const {
            active,
            totalCoins,
            pushNotifications: { skipped, denied, requested, status }
        } = this.props;
        const { currentIndex, isModalVisible } = this.state;
        const isQuestTab = currentIndex === 1;
        const isRewardsTab = currentIndex === 2;

        const showTimer = isQuestTab && !!active.levelSlotId && !active.status;
        const topBarProps = {
            coins: totalCoins,
            menuLabel: showTimer ? active.subtype : null,
            timer: showTimer ? active.endDateTime : null
        };

        if (
            status !== "enabled" &&
            (!skipped ||
                (moment(skipped)
                    .add(7, "days")
                    .isBefore(moment()) &&
                    !denied))
        ) {
            const toSettings = requested && skipped;
            const data = {
                ctaLabel: toSettings ? "go to settings" : "allow",
                onPress: toSettings ? () => this.openSettings : this.props.requirePushEnabled,
                subheading: toSettings
                    ? "To get notifications, you need to go to the system settings and turn it on."
                    : "Turn the notification on so we can notify you when there’s a response to your message."
            };

            return (
                <GenericModal
                    heading="notification"
                    ctaLabelSecondary="skip"
                    onPressSecondary={this.props.skipPushPermissions}
                    {...data}
                />
            );
        }
        const props = {
            componentId: this.props.componentId,
            labels: this.labels,
            onLeftMenuPress: this.showMenu
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
                    <DailyStepsContainer {...props} />
                    <QuestsContainer {...props} />
                    <RewardsContainer {...props} />
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

    private openSettings = async () => {
        try {
            await Linking.openURL("app-settings:");
        } catch (e) {
            // tslint:disable-next-line
            console.log(e);
        }
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
}

const mapStateToProps = (state: IReduxState) => ({
    active: activeLevelSelector(state),
    pushNotifications: pushNotificationsSelector(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    requirePushEnabled,
    skipPushPermissions
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(MemberRootContainer);
