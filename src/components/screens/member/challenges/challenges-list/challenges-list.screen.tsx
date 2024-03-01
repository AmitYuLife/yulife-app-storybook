import React, { memo, Component } from "react";
import { CHALLENGE_SCREEN } from "@ids";
import { getTheme } from "@theme";
import { t } from "@locale";
import { ChallengeBackground } from "@atoms";
import { ChallengesList, IChallengesListProps } from "@molecules/index";
import { View, BackHandler } from "react-native";
import styles from "./challenges-list.screen.styles";
import { GenericHeadingPad, TopBarAbsolute } from "@components/organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

interface IProps extends IChallengesListProps {
  currentLevel?: number;
  yuniversalMap?: number;
  name: string;
  onPressLeftIcon: () => void;
  onLayout?: () => void;
  challenges: IFormattedChallenge[];
}

interface IFormattedChallenge {
  heading: string;
  currentWorld: number;
  duration: string;
  id: string;
  isLocked: boolean;
  availableAtLevel: number;
  onPress: () => void;
  reward: string;
  imageUri: string;
  hasSurge?: boolean;
  hasBonus?: boolean;
}

interface IState {
  hideChallengeTiles: boolean;
}

class ChallengesListScreen extends Component<IProps, IState> {
  public timeout: NodeJS.Timer = null;
  public state = {
    hideChallengeTiles: true,
  };

  constructor(props: IProps) {
    super(props);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  private handleBackPress() {
    this.props.onPressLeftIcon();
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
    const { challenges, currentLevel, yuniversalMap, onPressLeftIcon, name, onLayout } = this.props;
    const { challengeListScreen } = getTheme(currentLevel, yuniversalMap);
    return (
      <View style={styles.wrapper} testID={CHALLENGE_SCREEN} onLayout={onLayout}>
        <GenericHeadingPad />
        <ChallengeBackground
          onLayout={this.showChallengeTiles}
          source={challengeListScreen.backgroundImage}
          style={challengeListScreen.style}
          backgroundColor={challengeListScreen.style.backgroundColor}
        />
        <View style={styles.challengeSetWrapper}>
          {this.state.hideChallengeTiles ? null : (
            <ChallengesList
              challenges={challenges}
              tileColour={challengeListScreen.tileBackgroundColour}
              durationColour={challengeListScreen.durationBackgroundColour}
              durationTextColour={challengeListScreen.durationTextColour}
            />
          )}
        </View>
        <TopBarAbsolute
          type={challengeListScreen.topBarType}
          leftIcon={LeftIcon.BACK}
          menuLabel={t("labels.quest_map")}
          name={name}
          onPressLeftIcon={onPressLeftIcon}
        />
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
