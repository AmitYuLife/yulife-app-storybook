import * as React from "react";
import { findNodeHandle, LayoutChangeEvent, View } from "react-native";
import { BlurView } from "react-native-blur";
import { isIphoneX } from "react-native-iphone-x-helper";
import { GetMobileCopy_getMobileCopy_screens_popUp } from "../../../graphql/_core/schema";
import { Close } from "../../atoms";
import { Popup, POPUPTYPE, TouchableOpacityWithState } from "../../molecules";
import YuCoin from "../../screens/member/daily-steps/assets/yu-coin";
import styles from "./pop-up.styles";

interface IProps {
  onCoinPress: () => void;
  hasWhiteGlow: boolean;
  isOnline: boolean;
  hasPermission: boolean;
  isLoading: boolean;
  copy: GetMobileCopy_getMobileCopy_screens_popUp;
  onUpdateSurgePopupVisibility: (payload: boolean) => void;
}

interface IState {
  viewRef: number;
  top: number;
}

export default class SurgePopup extends React.PureComponent<IProps, IState> {
  public state: IState = {
    viewRef: null,
    top: 0,
  };

  public viewRef: View = null;

  public setRef = (ref: View) => {
    this.viewRef = ref;
  };

  public render() {
    const { viewRef, top } = this.state;
    const { hasWhiteGlow, isOnline, hasPermission, isLoading, copy } = this.props;
    return (
      <>
        <View style={styles.popupWrapper} ref={this.setRef} onLayout={this.handleLayout} />
        {viewRef ? <BlurView viewRef={viewRef} blurAmount={15} blurType="light" style={styles.bgBlur} /> : null}
        <View onLayout={this.getPosition} style={styles.buttonWrapper}>
          <TouchableOpacityWithState onPress={this.yucoinPress} activeOpacity={1}>
            <YuCoin
              hasWhiteGlow={hasWhiteGlow}
              isLoading={isLoading}
              isGrayScale={!hasPermission || (!isOnline && !isLoading)}
            />
          </TouchableOpacityWithState>
        </View>
        {!top ? null : (
          <Popup
            type={POPUPTYPE.SURGE}
            position={{ top: isIphoneX() ? top + 80 : top }}
            isShowingButton={true}
            caretDirection="top"
            onPress={this.yucoinPress}
            copy={copy}
          />
        )}
        <Close style={styles.zIndexWrapper} onPress={this.updateSurgeVisibility} />
      </>
    );
  }

  private yucoinPress = () => {
    this.props.onCoinPress();
    this.updateSurgeVisibility();
  };

  private updateSurgeVisibility = () => {
    this.props.onUpdateSurgePopupVisibility(false);
  };

  private getPosition = (event: LayoutChangeEvent) => {
    this.setState({
      top: event.nativeEvent.layout.x + event.nativeEvent.layout.height,
    });
  };

  private handleLayout = () => {
    this.setState({
      viewRef: findNodeHandle(this.viewRef),
    });
  };
}
