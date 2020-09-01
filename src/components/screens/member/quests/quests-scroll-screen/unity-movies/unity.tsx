import * as React from "react";
import { Animated, View } from "react-native";
import { Button, Heading } from "@atoms";
import { initializeAnimation } from "./world-animations";
import { getAssets } from "./unity.data";
import styles from "./unity.styles";
import LottieView from "lottie-react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { toOrdinal } from "@services/utils";

interface IProps {
  unity: number;
  onSkip: () => void;
}

class Unity extends React.PureComponent<IProps, {}> {
  private headingOpacity = new Animated.Value(0);
  private subheadingOpacity = new Animated.Value(0);
  private buttonOpacity = new Animated.Value(0);
  private buttonY = new Animated.Value(15);

  private fadeHeading: Animated.CompositeAnimation;
  private fadeSubheading: Animated.CompositeAnimation;
  private fadeButton: Animated.CompositeAnimation;
  private moveButton: Animated.CompositeAnimation;

  public constructor(props: IProps) {
    super(props);
    initializeAnimation();
    this.fadeHeading = this.createAnimation(this.headingOpacity, 1, 4500);
    this.fadeSubheading = this.createAnimation(this.subheadingOpacity, 1, 5000);
    this.fadeButton = this.createAnimation(this.buttonOpacity, 1, 6000, 200);
    this.moveButton = this.createAnimation(this.buttonY, 1, 6000, 200);
  }

  public componentDidMount() {
    this.fadeHeading.start();
    this.fadeSubheading.start();
    this.fadeButton.start();
    this.moveButton.start();
  }

  public componentWillUnmount() {
    this.fadeHeading.stop();
    this.fadeSubheading.stop();
    this.fadeButton.stop();
    this.moveButton.stop();
  }

  public render() {
    const { onSkip, unity } = this.props;
    const { color, background, background_xl, foreground, foreground_xl } = getAssets(unity);

    return (
      <View style={styles.wrapper}>
        <LottieView
          resizeMode="cover"
          style={styles.fullScreenLottie}
          source={isIphoneX() ? background_xl : background}
          autoPlay={true}
          loop={false}
        />
        <LottieView
          resizeMode="cover"
          style={styles.fullScreenLottie}
          source={isIphoneX() ? foreground_xl : foreground}
          autoPlay={true}
          loop={false}
        />
        <>
          <View style={styles.headingWrapper}>
            <Animated.View style={{ opacity: this.headingOpacity }}>
              <Heading label="Congratulations!" color={color} style={styles.heading} />
            </Animated.View>
            <Animated.View style={{ opacity: this.subheadingOpacity }}>
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
        </>
      </View>
    );
  }

  private createAnimation = (variable: Animated.Value, toValue: number, delay = 0, duration = 500) => {
    return Animated.timing(variable, {
      toValue,
      useNativeDriver: true,
      duration,
      delay,
    });
  };
}

export default Unity;
