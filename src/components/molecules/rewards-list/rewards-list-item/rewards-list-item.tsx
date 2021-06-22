import { GetRewards_getRewards_uiSettings } from "@graphql/_core/schema";
import { TouchableOpacityWithDelay } from "@molecules/index";
import * as React from "react";
import { PureComponent } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import LockedOverlay from "./locked-overlay";
import styles from "./rewards-list-item.styles";
import UnlockedOverlay from "./unlocked-overlay";
import { REWARD_ITEM } from "@ids";

interface IProps {
  code: string;
  cost: number;
  isLocked?: boolean;
  linkType?: string;
  onPress?: () => void;
  rewardCurrency: string;
  rewardValue: number;
  settings: GetRewards_getRewards_uiSettings;
  logoImageUri: string;
  backgroundImageUri: string;
}

interface IState {
  hasLoaded: boolean;
}

class RewardsListItem extends PureComponent<IProps, IState> {
  public state: IState = {
    hasLoaded: false,
  };

  public render() {
    const {
      code,
      cost,
      onPress,
      linkType,
      isLocked,
      rewardValue,
      rewardCurrency,
      settings,
      logoImageUri,
      backgroundImageUri,
    } = this.props;
    const { hasLoaded } = this.state;

    return (
      <TouchableOpacityWithDelay
        testID={REWARD_ITEM(code)}
        activeOpacity={1}
        onPress={onPress || ((): null => null)}
        style={StyleSheet.flatten([styles.wrapper, hasLoaded ? {} : styles.wrapperLoading])}
      >
        <>
          <FastImage
            resizeMode="cover"
            style={[styles.imageBackground, { opacity: isLocked ? 0.3 : 1 }]}
            source={require("../../../../../assets/rewards/reward-placeholder.png")}
          />
          <FastImage
            resizeMode="cover"
            style={[styles.imageBackground, { opacity: isLocked ? 0.3 : 1 }]}
            onLoadEnd={this.handleLoadEnd}
            source={{ uri: backgroundImageUri }}
          />
          <View style={styles.overlayWrapper}>
            {isLocked ? (
              <LockedOverlay code={code} logoImageUri={logoImageUri} settings={settings} />
            ) : (
              <UnlockedOverlay
                cost={cost}
                linkType={linkType}
                rewardValue={rewardValue}
                rewardCurrency={rewardCurrency}
                settings={settings}
                logoImageUri={logoImageUri}
              />
            )}
          </View>
          <ActivityIndicator style={styles.activityIndicator} animating={!hasLoaded} />
        </>
      </TouchableOpacityWithDelay>
    );
  }

  private handleLoadEnd = () => {
    this.setState({ hasLoaded: true });
  };
}

export default RewardsListItem;
