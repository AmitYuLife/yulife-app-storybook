import React, { memo, Component } from "react";
import { CHALLENGE_SCREEN } from "@ids";
import { ChallengesList, IChallengesListProps } from "@molecules/index";
import { Image, View, BackHandler } from "react-native";
import { IMilestoneProps } from "../challenge-details/milestones";
import styles from "./challenges-list.screen.styles";
import { NavBar, GenericHeadingPad, TopBarAbsolute } from "@components/organisms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getTheme } from "@theme";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

interface IProps extends IChallengesListProps {
  currentLevel?: number;
  yuniversalMap?: number;
  name: string;
  onPressLeftIcon: () => void;
  challenges: IFormattedChallenge[];
}

interface IFormattedChallenge extends IMilestoneProps {
  heading: string;
  currentWorld: number;
  duration: string;
  id: string;
  isLocked: boolean;
  availableAtLevel: number;
  onPress: () => void;
  reward: string;
  imageUri: string;
}

interface IState {
  hideChallengeTiles: boolean;
}
class ChallengesListScreen extends Component<IProps, IState> {
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
      this.props.yuniversalMap !== nextProps.yuniversalMap ||
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
    const { challenges, currentLevel, yuniversalMap, onPressLeftIcon, name } = this.props;
    const { challengeListScreen } = getTheme(currentLevel, yuniversalMap);
    return (
      <View style={styles.wrapper} testID={CHALLENGE_SCREEN}>
        <GenericHeadingPad />
        <View style={challengeListScreen.style}>
          <Image
            onLayout={this.showChallengeTiles}
            resizeMode="cover"
            style={styles.background}
            source={challengeListScreen.backgroundImage}
          />
        </View>
        <View style={styles.challengeSetWrapper}>
          {this.state.hideChallengeTiles ? null : <ChallengesList challenges={challenges} />}
        </View>
        <TopBarAbsolute
          type={challengeListScreen.topBarType}
          leftIcon={LeftIcon.BACK}
          menuLabel="map"
          name={name}
          onPressLeftIcon={onPressLeftIcon}
        />
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

export default memo(ChallengesListScreen);
