import * as React from "react";
import { Animated, View } from "react-native";
import { Button, Heading } from "@atoms";
import { initializeAnimation } from "./world-animations";
import { getAssets } from "./unity.data";
import styles from "./unity.styles";
import LottieView from "lottie-react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { YUNITY_REACHED } from "@ids";
import Lightbox from "./lightbox/lightbox";
import { getHeading } from "./lightbox/lightbox.data";
import { DETOX_ENABLED } from "@services/socket";

const REMOVE_LOTTIE_VIEWS = false;

interface IProps {
  level: number;
  onSkip: () => void;
}

interface IState {
  displayWaves: boolean;
  showLightbox: boolean;
}

class Unity extends React.PureComponent<IProps, IState> {
  private fadeHeading: Animated.CompositeAnimation;
  private fadeSubheading: Animated.CompositeAnimation;
  private fadeButton: Animated.CompositeAnimation;
  private moveButton: Animated.CompositeAnimation;

  private foregroundAnim: LottieView;
  private backgroundAnim: LottieView;
  private wavesAnim: LottieView;

  private timeout: NodeJS.Timeout;

  private headingOpacity = DETOX_ENABLED ? new Animated.Value(1) : new Animated.Value(0);
  private subheadingOpacity = DETOX_ENABLED ? new Animated.Value(1) : new Animated.Value(0);
  private buttonOpacity = DETOX_ENABLED ? new Animated.Value(1) : new Animated.Value(0);
  private buttonY = DETOX_ENABLED ? new Animated.Value(0) : new Animated.Value(15);

  private isYuniversal: boolean;

  public constructor(props: IProps) {
    super(props);
    initializeAnimation();

    this.state = {
      displayWaves: false,
      showLightbox: false,
    };

    this.fadeHeading = this.createAnimation(this.headingOpacity, 1, 5500);
    this.fadeSubheading = this.createAnimation(this.subheadingOpacity, 1, 6000);
    this.fadeButton = this.createAnimation(this.buttonOpacity, 1, 8000, 200);
    this.moveButton = this.createAnimation(this.buttonY, 1, 8000, 200);

    this.isYuniversal = props.level % 200 === 0;
  }

  private loopForeground(totalDuration: number, totalFrames: number, loopStartFrame: number, loopEndFrame: number) {
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
    if (!DETOX_ENABLED) {
      this.fadeHeading.start();
      this.fadeSubheading.start();
      this.fadeButton.start();
      this.moveButton.start(() => {
        this.setState({ displayWaves: true });
        this.wavesAnim.play();
      });

      if (this.foregroundAnim && this.backgroundAnim) {
        if (this.isYuniversal) {
          this.loopForeground(15000, 450, 288, 388);
        } else {
          this.loopForeground(10000, 300, 178, 284);
        }

        this.backgroundAnim.play();
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
    const { onSkip, level } = this.props;
    const { displayWaves, showLightbox } = this.state;
    const { color, waves, background, background_xl, foreground, foreground_xl } = getAssets(level);

    return (
      <>
        <View style={styles.wrapper} testID={YUNITY_REACHED(Math.floor(level / 50))}>
          {REMOVE_LOTTIE_VIEWS ? null : (
            <>
              <LottieView
                resizeMode="cover"
                style={[styles.fullScreenLottie, { opacity: displayWaves ? 1 : 0 }]}
                source={waves}
                autoPlay={false}
                loop={DETOX_ENABLED ? false : true}
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
                loop={DETOX_ENABLED ? false : true}
                ref={(anim) => (this.foregroundAnim = anim)}
              />
            </>
          )}
          <View style={styles.headingWrapper}>
            <Animated.View style={{ opacity: this.headingOpacity }}>
              <Heading label={getHeading(level)} color={color} style={styles.heading} />
            </Animated.View>
          </View>
          <Animated.View
            style={[{ opacity: this.buttonOpacity, transform: [{ translateY: this.buttonY }] }, styles.buttonWrapper]}
          >
            <Button
              size="Large"
              onPress={() => {
                this.setState({ showLightbox: true });
              }}
              label="Continue"
            />
          </Animated.View>
        </View>
        {!showLightbox ? null : <Lightbox level={level} goToNextScreen={onSkip} />}
      </>
    );
  }

  private createAnimation = (variable: Animated.Value, toValue: number, delay = 0, duration = 500) => {
    if (DETOX_ENABLED) {
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
