import { CHALLENGE_SCREEN } from "@ids";
import { ChallengesList, IChallengesListProps } from "@molecules/index";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { Image, StyleSheet, View, BackHandler } from "react-native";
import { IMilestoneProps } from "../challenge-details/milestones";
import styles from "./challenges-list.screen.styles";
import { ChallengeType } from "@molecules/challenge-tile/challenge-tile.types";
import { TopBar, NavBar } from "@components/organisms";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface IProps extends IChallengesListProps {
  currentLevel?: number;
  name: string;
  onPressLeftIcon: () => void;
  challenges: IFormattedChallenge[];
}

interface IFormattedChallenge extends IMilestoneProps {
  challengeType: ChallengeType;
  currentWorld: number;
  duration: string;
  id: string;
  isLocked: boolean;
  minimumLevel: number;
  onPress: () => void;
  reward: string;
}

interface IState {
  hideChallengeTiles: boolean;
}

export default class ChallengesListScreen extends React.Component<IProps, IState> {
  public timeout: NodeJS.Timer = null;
  public state = {
    hideChallengeTiles: true,
  };

  private handleBackPress() {
    Navigation.pop(ROUTES.questsChallengesList);
    return true;
  }

  public componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    return (
      this.props.currentLevel !== nextProps.currentLevel ||
      this.state.hideChallengeTiles !== nextState.hideChallengeTiles ||
      (!!(this.props.challenges[0] && nextProps.challenges[0]) &&
        this.props.challenges[0].id !== nextProps.challenges[0].id)
    );
  }

  public componentWillUnmount() {
    if (this.timeout) {
      global.clearTimeout(this.timeout);
    }

    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  public render() {
    const { challenges, currentLevel, onPressLeftIcon, name } = this.props;
    const { backgroundWrapperStyle, backgroundImage, topBarType } = getWorldStyle(currentLevel) as any;

    return (
      <View style={styles.wrapper} testID={CHALLENGE_SCREEN}>
        <View style={styles.topPad} />
        <View style={backgroundWrapperStyle}>
          <Image
            onLayout={this.showChallengeTiles}
            resizeMode="cover"
            style={styles.background}
            source={backgroundImage}
          />
        </View>
        <View style={styles.challengeSetWrapper}>
          {this.state.hideChallengeTiles ? null : <ChallengesList challenges={challenges} />}
        </View>
        <TopBar type={topBarType} leftIcon="Back" menuLabel="map" name={name} onPressLeftIcon={onPressLeftIcon} />
        <NavBar activeIndex={1} additionalBottom={2} />
      </View>
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
  const world = getCurrentWorld(currentLevel);
  switch (world) {
    case 3:
      return {
        backgroundImage: require("../../../../../../assets/challenges/mountain.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(59,123,209)" },
        ]),
        topBarType: "mountain",
      };
    case 2:
      return {
        backgroundImage: require("../../../../../../assets/challenges/desert.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(254,251,205)" },
        ]),
        topBarType: "desert",
      };
    case 1:
      return {
        backgroundImage: require("../../../../../../assets/challenges/ocean.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(87,155,193)" },
        ]),
        topBarType: "white",
      };
    case 0:
    default:
      return {
        backgroundImage: require("../../../../../../assets/challenges/forest.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(154, 231, 216)" },
        ]),
        topBarType: "default",
      };
  }
}
