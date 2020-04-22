import { GetRewards_getRewards_uiSettings } from "@graphql/_core/schema";
import { TouchableOpacityWithState } from "@molecules/index";
import { getCloudinaryUrl } from "@services/cloudinary/index";
import * as React from "react";
import { PureComponent } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import LockedOverlay from "./locked-overlay";
import styles from "./rewards-list-item.styles";
import UnlockedOverlay from "./unlocked-overlay";

interface IProps {
  code: string;
  cost: number;
  isLocked?: boolean;
  linkType?: string;
  onPress?: () => void;
  rewardCurrency: string;
  rewardValue: number;
  settings: GetRewards_getRewards_uiSettings;
}

interface IState {
  hasLoaded: boolean;
}

class RewardsListItem extends PureComponent<IProps, IState> {
  public state: IState = {
    hasLoaded: false,
  };

  public render() {
    const { code, cost, onPress, isLocked, linkType, rewardValue, rewardCurrency, settings } = this.props;
    const { hasLoaded } = this.state;

    return (
      <TouchableOpacityWithState
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
            source={getCloudinaryUrl(`reward/background/${code}`, {
              height: 150,
              transformation: [{ effect: isLocked ? "grayscale" : null }],
              width: 375,
            })}
          />
          <View style={styles.overlayWrapper}>
            {isLocked ? (
              <LockedOverlay code={code} settings={settings} />
            ) : (
              <UnlockedOverlay
                code={code}
                cost={cost}
                linkType={linkType}
                rewardValue={rewardValue}
                rewardCurrency={rewardCurrency}
                settings={settings}
              />
            )}
          </View>
          <ActivityIndicator style={styles.activityIndicator} animating={!hasLoaded} />
        </>
      </TouchableOpacityWithState>
    );
  }

  private handleLoadEnd = () => {
    this.setState({ hasLoaded: true });
  };
}

export default RewardsListItem;
