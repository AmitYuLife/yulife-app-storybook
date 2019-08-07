import { CHALLENGE_SCREEN } from "@ids";
import { ChallengesList, IChallengesListProps, ILabel, NavBar, TopBar } from "@molecules/index";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import styles from "./challenges-list.screen.styles";

interface IProps extends IChallengesListProps {
    currentLevel?: number;
    labels: ILabel[];
    name: string;
    onPressLeftIcon: () => void;
    totalCoins: number;
}

interface IState {
    hideChallengeTiles: boolean;
}

export default class ChallengesListScreen extends React.PureComponent<IProps, IState> {
    public timeout: NodeJS.Timer = null;
    public state = {
        hideChallengeTiles: true
    };

    public componentWillUnmount() {
        if (this.timeout) {
            global.clearTimeout(this.timeout);
        }
    }

    public render() {
        const { challenges, currentLevel, labels, onPressLeftIcon, totalCoins, name } = this.props;
        const { backgroundWrapperStyle, backgroundImage, navBarType, topBarType } = getWorldStyle(currentLevel) as any;

        return (
            <SafeAreaView style={styles.wrapper} testID={CHALLENGE_SCREEN}>
                <SafeAreaView style={backgroundWrapperStyle}>
                    <Image
                        onLayout={this.showChallengeTiles}
                        resizeMode="cover"
                        style={styles.background}
                        source={backgroundImage}
                    />
                </SafeAreaView>
                <View style={styles.challengeSetWrapper}>
                    {this.state.hideChallengeTiles ? null : <ChallengesList challenges={challenges} />}
                </View>
                <TopBar
                    type={topBarType}
                    leftIcon="Back"
                    menuLabel="map"
                    name={name}
                    coins={totalCoins}
                    onPressLeftIcon={onPressLeftIcon}
                />
                <View style={styles.navBarWrapper}>
                    <NavBar activeIndex={1} colour={navBarType} labels={labels} />
                </View>
            </SafeAreaView>
        );
    }

    private showChallengeTiles = () => {
        this.timeout = global.setTimeout(() => {
            this.setState({ hideChallengeTiles: false });
            this.timeout = null;
        }, 120);
    };
}

function getWorldStyle(currentLevel: number) {
    switch (getCurrentWorld(currentLevel)) {
        case 3:
            return {
                backgroundImage: require("../../../../../../assets/challenges/mountain.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(59,123,209)" }
                ]),
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "mountain"
            };
        case 2:
            return {
                backgroundImage: require("../../../../../../assets/challenges/desert.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(254,251,205)" }
                ]),
                navBarType: NavBar.Colours.DESERT,
                topBarType: "desert"
            };
        case 1:
            return {
                backgroundImage: require("../../../../../../assets/challenges/ocean.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(87,155,193)" }
                ]),
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "white"
            };
        case 0:
        default:
            return {
                backgroundImage: require("../../../../../../assets/challenges/forest.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(154, 231, 216)" }
                ]),
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "default"
            };
    }
}
