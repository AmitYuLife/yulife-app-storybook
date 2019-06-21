import * as React from "react";
import { findNodeHandle, View } from "react-native";
import { BlurView } from "react-native-blur";
import { Navigation } from "react-native-navigation";
import { GetMobileCopy_getMobileCopy_screens_popUp } from "../../../graphql/_core/schema";
import { ROUTES } from "../../../navigation/constants";
import { Close } from "../../atoms";
import { ILabel, NavBar, Popup, POPUPTYPE } from "../../molecules";
import { IColours } from "../nav-bar/nav-bar";
import styles from "./pop-up.styles";

interface IProps {
    copy: GetMobileCopy_getMobileCopy_screens_popUp;
    hasNotification: boolean;
    labels?: ILabel[];
    onUpdateLeaderboardPopupVisibility: (payload: boolean) => void;
    navbarColour: IColours;
}

interface IState {
    viewRef: number;
}

export default class LeaderboardPopup extends React.PureComponent<IProps, IState> {
    public state: IState = {
        viewRef: null
    };

    public viewRef: View = null;

    public setRef = (ref: View) => {
        this.viewRef = ref;
    };

    public render() {
        const { viewRef } = this.state;
        const { copy, hasNotification, navbarColour } = this.props;
        return (
            <>
                <View style={styles.popupWrapper} ref={this.setRef} onLayout={this.handleLayout} />
                {viewRef ? <BlurView viewRef={viewRef} blurAmount={15} blurType="dark" style={styles.bgBlur} /> : null}
                <View style={[styles.navBarWrapper, styles.zIndexWrapper]}>
                    <NavBar
                        activeIndex={0}
                        colour={navbarColour}
                        hasNotification={hasNotification}
                        labels={this.getUpdateLabelsFunction()}
                    />
                </View>
                <Popup
                    type={POPUPTYPE.LEADERBOARD}
                    position={{ bottom: 120 }}
                    isShowingButton={true}
                    caretDirection="bottom"
                    copy={copy}
                    onPress={this.pressPopupButton}
                    caretPosition={{ left: 70 }}
                />
                <Close style={styles.zIndexWrapper} onPress={this.updateLeaderboardVisibility} />
            </>
        );
    }

    private updateLeaderboardVisibility = () => {
        this.props.onUpdateLeaderboardPopupVisibility(false);
    };

    private getUpdateLabelsFunction = () => {
        return this.props.labels.map((label, currentTabIndex) => ({
            ...label,
            onPress: () => {
                this.updateLeaderboardVisibility();
                Navigation.mergeOptions(getRouteByIndex(currentTabIndex), {
                    bottomTabs: {
                        currentTabIndex
                    },
                    statusBar: {
                        drawBehind: false,
                        visible: true
                    }
                });
            }
        }));
    };

    private pressPopupButton = () => {
        this.updateLeaderboardVisibility();
        Navigation.mergeOptions(ROUTES.leaderboards, {
            bottomTabs: {
                currentTabIndex: 2
            },
            statusBar: {
                drawBehind: false,
                visible: true
            }
        });
    };

    private handleLayout = () => {
        this.setState({
            viewRef: findNodeHandle(this.viewRef)
        });
    };
}

function getRouteByIndex(index: number) {
    switch (index) {
        case 0:
            return ROUTES.dailySteps;
        case 1:
            return ROUTES.quests;
        case 2:
            return ROUTES.leaderboards;
        case 3:
            return ROUTES.rewards;
    }
}
