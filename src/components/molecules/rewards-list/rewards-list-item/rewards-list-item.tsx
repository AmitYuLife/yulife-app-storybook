import * as React from "react";
import { PureComponent } from "react";
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { GetRewards_getRewards_uiSettings } from "../../../../graphql/_core/schema";
import { getCloudinaryUrl } from "../../../../services/cloudinary/index";
import LockedOverlay from "./locked-overlay";
import styles from "./rewards-list-item.styles";
import UnlockedOverlay from "./unlocked-overlay";

interface IProps {
    code: string;
    cost: number;
    isLocked?: boolean;
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
        hasLoaded: false
    };

    public render() {
        const { code, onPress, isLocked, cost, rewardValue, rewardCurrency, settings } = this.props;
        const { hasLoaded } = this.state;

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress || ((): null => null)}
                style={StyleSheet.flatten([styles.wrapper, hasLoaded ? {} : styles.wrapperLoading])}
            >
                <>
                    <View
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            backgroundColor: "#bebebe"
                        }}
                    />
                    <Image
                        resizeMethod="scale"
                        resizeMode="cover"
                        style={[styles.imageBackground, { opacity: isLocked ? 0.3 : 1 }]}
                        onLoad={this.handleLoadEnd}
                        source={getCloudinaryUrl({
                            transformation: [
                                {
                                    effect: isLocked ? "grayscale" : null
                                }
                            ],
                            url: `reward/background/${code}`
                        })}
                    />
                    <View style={styles.overlayWrapper}>
                        {isLocked ? (
                            <LockedOverlay code={code} settings={settings} />
                        ) : (
                            <UnlockedOverlay
                                settings={settings}
                                cost={cost}
                                rewardValue={rewardValue}
                                rewardCurrency={rewardCurrency}
                                code={code}
                            />
                        )}
                    </View>
                    <ActivityIndicator style={styles.activityIndicator} animating={!hasLoaded} />
                </>
            </TouchableOpacity>
        );
    }

    private handleLoadEnd = () => {
        this.setState({ hasLoaded: true });
    }
}

export default RewardsListItem;
