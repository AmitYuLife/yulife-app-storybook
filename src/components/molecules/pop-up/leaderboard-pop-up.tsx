import * as React from "react";
import { findNodeHandle, StyleSheet, TouchableOpacity, View } from "react-native";
import { BlurView } from "react-native-blur";
import { Navigation } from "react-native-navigation";
import { GetMobileCopy_getMobileCopy_screens_popUp } from "../../../graphql/_core/schema";
import { ROUTES } from "../../../navigation/constants";
import { Popup, POPUPTYPE } from "../../molecules";
import styles from "./pop-up.styles";
import { NavBar } from "@components/organisms";
import { labels } from "@navigation/root";

interface IProps {
  copy: GetMobileCopy_getMobileCopy_screens_popUp;
  onUpdateLeaderboardPopupVisibility: (payload: boolean) => void;
}

interface IState {
  viewRef: number;
}

export default class LeaderboardPopup extends React.PureComponent<IProps, IState> {
  public state: IState = {
    viewRef: null,
  };

  public viewRef: View = null;

  public setRef = (ref: View) => {
    this.viewRef = ref;
  };

  public render() {
    const { viewRef } = this.state;
    const { copy } = this.props;
    return (
      <>
        <TouchableOpacity style={StyleSheet.absoluteFillObject} onPress={this.updateLeaderboardVisibility}>
          <View style={styles.popupWrapper} ref={this.setRef} onLayout={this.handleLayout} />
          {viewRef ? <BlurView viewRef={viewRef} blurAmount={15} blurType="dark" style={styles.bgBlur} /> : null}
        </TouchableOpacity>
        <View style={[styles.navBarWrapper, styles.zIndexWrapper]}>
          <NavBar activeIndex={0} labels={this.getUpdateLabelsFunction()} />
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
      </>
    );
  }

  private updateLeaderboardVisibility = () => {
    this.props.onUpdateLeaderboardPopupVisibility(false);
  };

  private getUpdateLabelsFunction = () => {
    return labels.map((label, currentTabIndex) => ({
      ...label,
      onPress: () => {
        this.updateLeaderboardVisibility();
        Navigation.mergeOptions(getRouteByIndex(currentTabIndex), {
          bottomTabs: {
            currentTabIndex,
          },
          statusBar: {
            drawBehind: false,
            visible: true,
          },
        });
      },
    }));
  };

  private pressPopupButton = () => {
    this.updateLeaderboardVisibility();
    Navigation.mergeOptions(ROUTES.leaderboards, {
      bottomTabs: {
        currentTabIndex: 2,
      },
      statusBar: {
        drawBehind: false,
        visible: true,
      },
    });
  };

  private handleLayout = () => {
    this.setState({
      viewRef: findNodeHandle(this.viewRef),
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
