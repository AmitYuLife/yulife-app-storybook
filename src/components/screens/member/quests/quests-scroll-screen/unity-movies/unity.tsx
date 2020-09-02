import * as React from "react";
import { Animated, View } from "react-native";
import { Button, Heading } from "@atoms";
import { initializeAnimation } from "./world-animations";
import { getAssets } from "./unity.data";
import styles from "./unity.styles";
import LottieView from "lottie-react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { toOrdinal } from "@services/utils";
import { YUNITY_REACHED } from "@ids";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  unity: number;
  onSkip: () => void;
}

const AUTO_PLAY = !DETOX_ENABLED;

class Unity extends React.PureComponent<IProps, { displayWaves: boolean }> {
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

    if (AUTO_PLAY) {
      this.loopForeground();
      this.backgroundAnim.play();
    } else {
      this.foregroundAnim.play(300, 300);
      this.backgroundAnim.play(300, 300);
    }
  }

  public componentWillUnmount() {
    this.fadeHeading.stop();
    this.fadeSubheading.stop();
    this.fadeButton.stop();
    this.moveButton.stop();

    this.backgroundAnim.reset();
    this.foregroundAnim.reset();
    this.wavesAnim.reset();

    if (this.timeout) {
      global.clearTimeout(this.timeout);
    }
  }

  public render() {
    const { onSkip, unity } = this.props;
    const { displayWaves } = this.state;
    const { color, waves, background, background_xl, foreground, foreground_xl } = getAssets(unity);

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
            <Heading label="Congratulations!" color={color} style={styles.heading} />
          </Animated.View>
          <Animated.View style={{ opacity: this.subheadingOpacity }} testID={YUNITY_REACHED(Math.floor(unity / 50))}>
            <Heading
              label={`You’ve reached the ${toOrdinal(Math.floor(unity / 50))} level of Yunity`}
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
          <Button type="Primary" size="Large" onPress={onSkip} label="Continue" />
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
