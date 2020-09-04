import * as React from "react";
import { Animated, View } from "react-native";
import { Button, Heading } from "@atoms";
import { initializeAnimation } from "./world-animations";
import { getAssets } from "./unity.data";
import styles from "./unity.styles";
import LottieView from "lottie-react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { YUNITY_REACHED } from "@ids";
import YuCoin from "../../../../../screens/member/daily-steps/assets/yu-coin";
import colours from "@styles/colours";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  unity: number;
  onSkip: () => void;
}

const AUTO_PLAY = !DETOX_ENABLED;

class Unity extends React.PureComponent<IProps, { displayWaves: boolean; showInfo: boolean }> {
  private fadeHeading: Animated.CompositeAnimation;
  private fadeSubheading: Animated.CompositeAnimation;
  private fadeButton: Animated.CompositeAnimation;
  private moveButton: Animated.CompositeAnimation;

  private foregroundAnim: LottieView;
  private backgroundAnim: LottieView;
  private wavesAnim: LottieView;

  private timeout: NodeJS.Timeout;

  private headingOpacity = new Animated.Value(0);
  private subheadingOpacity = new Animated.Value(0);
  private buttonOpacity = new Animated.Value(0);
  private buttonY = new Animated.Value(15);

  public constructor(props: IProps) {
    super(props);
    initializeAnimation();

    this.state = {
      displayWaves: false,
      showInfo: false,
    };

    this.fadeHeading = this.createAnimation(this.headingOpacity, 1, 5500);
    this.fadeSubheading = this.createAnimation(this.subheadingOpacity, 1, 6000);
    this.fadeButton = this.createAnimation(this.buttonOpacity, 1, 8000, 200);
    this.moveButton = this.createAnimation(this.buttonY, 1, 8000, 200);
  }

  private loopForeground(totalDuration = 10000, totalFrames = 300, loopStartFrame = 178, loopEndFrame = 284) {
    const startLoopTime = (totalDuration * loopStartFrame) / totalFrames;

    // first, trigger animation as usual
    this.foregroundAnim.play();

    // at set time, start looping the chosen segment
    this.timeout = global.setTimeout(
      (anim: LottieView) => {
        anim.play(loopStartFrame, loopEndFrame);
      },
      startLoopTime,
      this.foregroundAnim
    );
  }

  public componentDidMount() {
    this.fadeHeading.start();
    this.fadeSubheading.start();
    this.fadeButton.start();
    this.moveButton.start(() => {
      if (AUTO_PLAY) {
        this.setState({ displayWaves: true });
        this.wavesAnim.play();
      }
    });

    if (this.foregroundAnim && this.backgroundAnim) {
      if (AUTO_PLAY) {
        this.loopForeground();
        this.backgroundAnim.play();
      } else {
        this.foregroundAnim.play(300, 300);
        this.backgroundAnim.play(300, 300);
      }
    }
  }

  public componentWillUnmount() {
    this.fadeHeading.stop();
    this.fadeSubheading.stop();
    this.fadeButton.stop();
    this.moveButton.stop();

    if (this.backgroundAnim) {
      this.backgroundAnim.reset();
    }

    if (this.foregroundAnim) {
      this.foregroundAnim.reset();
    }

    if (this.wavesAnim) {
      this.wavesAnim.reset();
    }

    if (this.timeout) {
      global.clearTimeout(this.timeout);
    }
  }

  public render() {
    const { onSkip, unity } = this.props;
    const { displayWaves, showInfo } = this.state;
    const { color, waves, background, background_xl, foreground, foreground_xl } = getAssets(unity);

    const isYuniversal = unity % 200 === 0;

    if (showInfo && isYuniversal) {
      return (
        <View style={styles.wrapper}>
          <View style={styles.coinWrapper}>
            <View style={styles.coinScale}>
              <YuCoin hasWhiteGlow={false} isGrayScale={false} level={200} gems={4} />
            </View>
          </View>
          <View style={styles.infoText}>
            <Heading label="What is Yuniversal?" color={colours.darkestGray} style={styles.infoHeading} />
            <Heading
              label={
                "You achieve Yuniversal every 200 levels. This achievement unlocks a 7 day surge, with 2x YuCoin for every 2,000 steps you walk. You also get to play through the 4 worlds again, but this time with a twist: you can do 4 challenges per day from the beginning!"
              }
              color={colours.darkestGray}
              style={styles.infoBody}
            />
            <Heading label={`Ready for level ${unity + 1}?`} color={colours.darkestGray} style={styles.infoBody} />
          </View>
          <Animated.View
            style={{
              opacity: this.buttonOpacity,
              transform: [{ translateY: this.buttonY }],
              ...styles.buttonWrapper,
            }}
          >
            <Button type="Primary" size="Large" onPress={onSkip} label="Continue" />
          </Animated.View>
        </View>
      );
    }

    return (
      <View style={styles.wrapper}>
        <LottieView
          resizeMode="cover"
          style={{
            ...styles.fullScreenLottie,
            opacity: displayWaves ? 1 : 0,
          }}
          source={waves}
          autoPlay={false}
          loop={true}
          ref={(anim) => (this.wavesAnim = anim)}
        />
        <LottieView
          resizeMode="cover"
          style={styles.fullScreenLottie}
          source={isIphoneX() ? background_xl : background}
          autoPlay={false}
          loop={false}
          ref={(anim) => (this.backgroundAnim = anim)}
        />
        <LottieView
          resizeMode="cover"
          style={styles.fullScreenLottie}
          source={isIphoneX() ? foreground_xl : foreground}
          autoPlay={false}
          loop={true}
          ref={(anim) => (this.foregroundAnim = anim)}
        />
        <View style={styles.headingWrapper}>
          <Animated.View style={{ opacity: this.headingOpacity }}>
            <Heading
              label={isYuniversal ? "You’ve achieved Yuniversal" : "You’ve reached Yunity"}
              color={color}
              style={styles.heading}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.subheadingOpacity }} testID={YUNITY_REACHED(Math.floor(unity / 50))}>
            <Heading
              label={
                isYuniversal
                  ? "By collecting the final gem, you’ll earn double YuCoin for the next 7 days."
                  : "To celebrate your day of Yunity, you will earn double YuCoin for the next 24 hours."
              }
              color={color}
              style={styles.subheading}
            />
          </Animated.View>
        </View>
        <Animated.View
          style={{
            opacity: this.buttonOpacity,
            transform: [{ translateY: this.buttonY }],
            ...styles.buttonWrapper,
          }}
        >
          <Button
            type="Primary"
            size="Large"
            onPress={() => {
              if (isYuniversal) {
                this.setState({ showInfo: true });
              } else {
                onSkip();
              }
            }}
            label="Continue"
          />
        </Animated.View>
      </View>
    );
  }

  private createAnimation = (variable: Animated.Value, toValue: number, delay = 0, duration = 500) => {
    if (!AUTO_PLAY) {
      delay = 0;
      duration = 0;
    }

    return Animated.timing(variable, {
      toValue,
      useNativeDriver: true,
      duration,
      delay,
    });
  };
}

export default Unity;
