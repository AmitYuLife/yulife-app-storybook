import React, { useEffect, useCallback, useMemo, useState, FC, useRef } from "react";
import { Animated, View, Image } from "react-native";
import LottieView from "lottie-react-native";
import { labels } from "@navigation/root";
import { useQuery } from "@apollo/client";
import { DETOX_ENABLED } from "@services/socket";
import { YUNITY_REACHED } from "@ids";
import { RawImage, TextTemplate, YuCoinBadge } from "@atoms";
import { Button } from "@molecules";
import { Chest, CHEST_STATE } from "@organisms";
import { initializeAnimation } from "./world-animations";
import { getAssets, getUnityAnimation, getYuniversalAnimation } from "./unity.data";
import styles from "./unity.styles";
import { t } from "@locale";
import { useSelector } from "react-redux";
import { getCurrentPlanetByLevel, getCurrentWorld, getCurrentYuniverse } from "@utils";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { gql } from "@graphql/__generated";

// placeholder image
const PLANETARY_BACKGROUND = require("./assets/yuniversal-images/planetary_background.png");
const YUGI_ANIMATION = require("./assets/yuniversal-animations/yugi.json");

enum UNITY_REWARD_PAGE {
  INTRO,
  CONGRATULATORY,
  CHEST,
  AFTERWORD,
}

interface IProps {
  level: number;
  yuniversalLevel?: number;
  yuniversalMap?: number;
  repeatedUnity: boolean;
  onSkip: () => void;
}

const Unity: FC<IProps> = ({ level, yuniversalLevel, yuniversalMap, repeatedUnity, onSkip }) => {
  const [displayChestBackground, setDisplayChestBackground] = useState(false);
  const [page, setPage] = useState(UNITY_REWARD_PAGE.INTRO);
  const [introFinished, setIntroFinished] = useState(false);
  const [chestState, setChestState] = useState(CHEST_STATE.CLOSED);
  const isYuniversal = useMemo(() => level % 200 === 0, [level]);
  const currentLevel = useSelector(getCurrentLevel);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const yuniverseAnimationLoop = getYuniversalAnimation(currentLevel);
  const unityAnimation = getUnityAnimation(currentLevel);

  const { data, loading } = useQuery(gql("GetUnityRewardsDocument"), {
    variables: { level },
    fetchPolicy: "network-only",
  });

  const createAnimation = useCallback((variable: Animated.Value, toValue: number, delay = 0, duration = 500) => {
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
  }, []);

  const animatedValues = useMemo(
    () => ({
      introPageHeadingOpacity: new Animated.Value(DETOX_ENABLED ? 1 : 0),
      introPageButtonOpacity: new Animated.Value(DETOX_ENABLED ? 1 : 0),
      introPageButtonY: new Animated.Value(DETOX_ENABLED ? 15 : 0),
      introPageOpacity: new Animated.Value(1),
      congratulatoryPageOpacity: new Animated.Value(DETOX_ENABLED ? 1 : 0),
      chestPageOpacity: new Animated.Value(DETOX_ENABLED ? 1 : 0),
      afterwordPageOpacity: new Animated.Value(DETOX_ENABLED ? 1 : 0),
    }),
    []
  );

  const foregroundAnim = useRef<LottieView>();
  const backgroundAnim = useRef<LottieView>();
  const travelRef = useRef<LottieView>(null);

  const timeout = useRef<NodeJS.Timeout>();

  const fadeInIntroPageHeading = useMemo(() => createAnimation(animatedValues.introPageHeadingOpacity, 1, 0, 500), []);
  const fadeInIntroPageButton = useMemo(() => createAnimation(animatedValues.introPageButtonOpacity, 1, 0, 500), []);
  const moveUpIntroPageButton = useMemo(() => createAnimation(animatedValues.introPageButtonY, 0, 0, 500), []);
  const fadeOutIntroPage = useMemo(() => createAnimation(animatedValues.introPageOpacity, 0, 0, 300), []);
  const fadeInCongratulatoryPage = useMemo(
    () => createAnimation(animatedValues.congratulatoryPageOpacity, 1, 0, 300),
    []
  );
  const fadeOutCongratulatoryPage = useMemo(
    () => createAnimation(animatedValues.congratulatoryPageOpacity, 0, 0, 300),
    []
  );
  const fadeInChestPage = useMemo(() => createAnimation(animatedValues.chestPageOpacity, 1, 0, 300), []);
  const fadeOutChestPage = useMemo(() => createAnimation(animatedValues.chestPageOpacity, 0, 0, 300), []);
  const fadeInAfterwordPage = useMemo(() => createAnimation(animatedValues.afterwordPageOpacity, 1, 0, 300), []);

  useEffect(() => {
    initializeAnimation();

    if (!DETOX_ENABLED) {
      timeout.current = global.setTimeout(() => {
        setIntroFinished(true);
      }, 8300);

      if (foregroundAnim.current && backgroundAnim.current) {
        if (isYuniversal) {
          const {
            totalFrames,
            loopStartFrame,
            loopEndFrame,
            frameRate,
            totalDuration = (totalFrames / frameRate) * 1000,
          } = yuniverseAnimationLoop;
          loopForeground(totalDuration, totalFrames, loopStartFrame, loopEndFrame);
        } else {
          const {
            totalFrames,
            loopStartFrame,
            loopEndFrame,
            frameRate,
            totalDuration = (totalFrames / frameRate) * 1000,
          } = unityAnimation;
          loopForeground(totalDuration, totalFrames, loopStartFrame, loopEndFrame);
        }

        backgroundAnim.current?.play();
      }
    }

    return () => {
      fadeInIntroPageHeading.stop();
      fadeInIntroPageButton.stop();
      moveUpIntroPageButton.stop();
      fadeOutIntroPage.stop();
      fadeInCongratulatoryPage.stop();
      fadeOutCongratulatoryPage.stop();
      fadeInChestPage.stop();
      fadeOutChestPage.stop();
      fadeInAfterwordPage.stop();
      backgroundAnim.current?.reset();
      foregroundAnim.current?.reset();

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (introFinished && !loading) {
      fadeInIntroPageHeading.start();
      fadeInIntroPageButton.start();
      moveUpIntroPageButton.start();
    }
  }, [introFinished, loading]);

  const finishUnity = useCallback(() => {
    if (isYuniversal) {
      // go to daily steps screen
      labels[0].onPress();
    }

    onSkip();
  }, [isYuniversal, onSkip]);

  const onIntroPageButtonPress = useCallback(() => {
    if (repeatedUnity || !data?.getUnityRewards) {
      finishUnity();
      return;
    }

    if (DETOX_ENABLED) {
      if (data?.getUnityRewards?.congratulatory) {
        setPage(UNITY_REWARD_PAGE.CONGRATULATORY);
        return;
      }

      setPage(UNITY_REWARD_PAGE.CHEST);
      return;
    }

    fadeOutIntroPage.start();
    if (!data?.getUnityRewards?.congratulatory) {
      setDisplayChestBackground(true);
    }

    timeout.current = global.setTimeout(() => {
      if (data?.getUnityRewards?.congratulatory) {
        setPage(UNITY_REWARD_PAGE.CONGRATULATORY);
        fadeInCongratulatoryPage.start();
        return;
      }

      setPage(UNITY_REWARD_PAGE.CHEST);
      fadeInChestPage.start();
    }, 500);
  }, [repeatedUnity, data, timeout, fadeOutIntroPage, fadeInCongratulatoryPage, fadeInChestPage, finishUnity]);

  const onCongratulatoryPageButtonPress = useCallback(() => {
    if (!data?.getUnityRewards?.chest) {
      finishUnity();
    }

    if (DETOX_ENABLED) {
      setPage(UNITY_REWARD_PAGE.CHEST);
      return;
    }

    fadeOutCongratulatoryPage.start();
    timeout.current = global.setTimeout(() => {
      setPage(UNITY_REWARD_PAGE.CHEST);
      fadeInChestPage.start();
    }, 500);
  }, [data, timeout, fadeOutCongratulatoryPage, fadeInChestPage, finishUnity]);

  const chestButtonLabel = useMemo(
    () =>
      chestState === CHEST_STATE.OPEN
        ? t("screens.eotw_chest.claim_button")
        : t("screens.eotw_chest.open_chest_button"),
    [chestState]
  );

  const onChestPageButtonPress = useCallback(() => {
    if (chestState === CHEST_STATE.CLOSED) {
      setChestState(CHEST_STATE.OPENING);
      return;
    }

    if (!data?.getUnityRewards?.afterword) {
      finishUnity();
    }

    if (DETOX_ENABLED) {
      setPage(UNITY_REWARD_PAGE.AFTERWORD);
      return;
    }

    fadeOutCongratulatoryPage.start();
    timeout.current = global.setTimeout(() => {
      setPage(UNITY_REWARD_PAGE.AFTERWORD);
      fadeInAfterwordPage.start(() => {
        travelRef.current.play();
      });
    }, 500);
  }, [chestState, data, fadeOutCongratulatoryPage, fadeInAfterwordPage, timeout, finishUnity]);

  const loopForeground = (totalDuration: number, totalFrames: number, loopStartFrame: number, loopEndFrame: number) => {
    const startLoopTime = (totalDuration * loopStartFrame) / totalFrames;

    // first, trigger animation as usual
    foregroundAnim.current?.play();

    // at set time, start looping the chosen segment
    timeout.current = global.setTimeout(
      (anim: LottieView) => {
        anim.play(loopStartFrame, loopEndFrame);
      },
      startLoopTime,
      foregroundAnim.current
    );
  };

  const { color, background, foreground, backgroundChest, backgroundGradient } = useMemo(
    () => getAssets(level),
    [level]
  );

  return (
    <View style={styles.unityContainer}>
      <View style={styles.wrapper} testID={YUNITY_REACHED(Math.floor(level / 50))}>
        <Animated.View style={[{ opacity: animatedValues.introPageOpacity }]}>
          <RawImage source={backgroundGradient} style={styles.fullScreenBackground} />
        </Animated.View>

        {!displayChestBackground ? null : (
          <View style={styles.chestPage}>
            <RawImage source={backgroundChest} style={styles.fullScreenBackground} />
          </View>
        )}

        <LottieView
          resizeMode="cover"
          style={styles.fullScreenBackground}
          source={background}
          autoPlay={false}
          loop={false}
          ref={backgroundAnim}
        />

        {page !== UNITY_REWARD_PAGE.INTRO ? null : (
          <Animated.View style={[{ opacity: animatedValues.introPageOpacity }, styles.page]}>
            <LottieView
              resizeMode="cover"
              style={styles.fullScreenBackground}
              source={foreground}
              autoPlay={false}
              loop={DETOX_ENABLED ? false : true}
              ref={foregroundAnim}
            />
            {!data?.getUnityRewards?.intro.heading ? null : (
              <View style={styles.headingWrapper}>
                <Animated.View style={[{ opacity: animatedValues.introPageHeadingOpacity }, styles.heading]}>
                  <TextTemplate color={color} type={isYuniversal ? "b1b" : "h3"} textAlign="center">
                    {data?.getUnityRewards?.intro.heading}
                  </TextTemplate>
                </Animated.View>
              </View>
            )}
            {!data?.getUnityRewards?.intro.subHeading ? null : (
              <View style={styles.subHeadingWrapper}>
                <Animated.View style={[{ opacity: animatedValues.introPageHeadingOpacity }, styles.heading]}>
                  <TextTemplate color={color} type="b2" textAlign="center">
                    {data?.getUnityRewards?.intro.subHeading}
                  </TextTemplate>
                </Animated.View>
              </View>
            )}
            <Animated.View
              style={[
                {
                  opacity: animatedValues.introPageButtonOpacity,
                  transform: [{ translateY: animatedValues.introPageButtonY }],
                },
                styles.buttonWrapper,
              ]}
            >
              <Button
                size="Large"
                testID="unity-movies-intro-button"
                onPress={onIntroPageButtonPress}
                translatedLabel={data?.getUnityRewards?.intro.cta || t("labels.cta.continue")}
              />
            </Animated.View>
          </Animated.View>
        )}

        {page !== UNITY_REWARD_PAGE.CONGRATULATORY ? null : (
          <Animated.View style={[{ opacity: animatedValues.congratulatoryPageOpacity }, styles.congratulatoryPage]}>
            <View style={styles.headingWrapper}>
              <View style={styles.heading}>
                <TextTemplate color={color} type="b1b" textAlign="center">
                  {data?.getUnityRewards?.congratulatory.heading}
                </TextTemplate>
              </View>
            </View>
            <View style={styles.congratulatoryContent}>
              <View style={styles.yucoinBadgeWrapper}>
                <View style={styles.yucoinBadge}>
                  <YuCoinBadge
                    hasWhiteGlow={false}
                    isGrayScale={false}
                    width={200}
                    height={200}
                    currentWorld={currentWorld}
                    currentYuniverse={currentYuniverse}
                  />
                </View>
              </View>
              <TextTemplate color={color} type="h3" textAlign="center">
                {data?.getUnityRewards?.congratulatory.title}
              </TextTemplate>
              <View style={styles.congratulatoryText}>
                <TextTemplate color={color} type="b2" textAlign="center">
                  {data?.getUnityRewards?.congratulatory.description}
                </TextTemplate>
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                size="Large"
                testID="unity-movies-congratulatory-button"
                onPress={onCongratulatoryPageButtonPress}
                translatedLabel={data?.getUnityRewards?.congratulatory.cta}
              />
            </View>
          </Animated.View>
        )}

        {page !== UNITY_REWARD_PAGE.CHEST ? null : (
          <Animated.View style={[{ opacity: animatedValues.chestPageOpacity }, styles.chestPage]}>
            {chestState !== CHEST_STATE.CLOSED || !data?.getUnityRewards?.chest?.title ? null : (
              <Animated.View style={[styles.chestTitleWrapper]}>
                <TextTemplate color={color} type="h3" textAlign="center">
                  {data.getUnityRewards.chest.title}
                </TextTemplate>
              </Animated.View>
            )}
            <Chest
              level={level}
              yuniversalLevel={yuniversalLevel}
              yuniversalMap={yuniversalMap}
              chestType={data.getUnityRewards.chest.chestType}
              items={data.getUnityRewards.chest.items}
              chestState={chestState}
              setChestState={setChestState}
              currentPlanet={getCurrentPlanetByLevel(currentLevel - 1)}
            />
            {chestState === CHEST_STATE.OPENING ? null : (
              <Animated.View style={[styles.buttonWrapper]}>
                <Button
                  testID="unity-movies-chest-button"
                  size="Large"
                  onPress={onChestPageButtonPress}
                  translatedLabel={chestButtonLabel}
                />
              </Animated.View>
            )}
          </Animated.View>
        )}

        {page !== UNITY_REWARD_PAGE.AFTERWORD ? null : (
          <Animated.View style={[{ opacity: animatedValues.afterwordPageOpacity }, styles.afterword]}>
            {!isYuniversal ? null : (
              <Image resizeMode="contain" style={styles.backgroundImage} source={PLANETARY_BACKGROUND} />
            )}
            <View style={styles.yugiContainer}>
              <LottieView
                resizeMode="cover"
                style={styles.lottie}
                ref={travelRef}
                source={YUGI_ANIMATION}
                autoPlay={false}
                loop={false}
              />
            </View>
            <View style={styles.afterwordText}>
              <TextTemplate color={color} type="b2" textAlign="center">
                {data?.getUnityRewards?.afterword?.description}
              </TextTemplate>
            </View>

            <View style={styles.buttonWrapper}>
              <Button
                testID="unity-movies-afterword-button"
                size="Large"
                onPress={finishUnity}
                translatedLabel={data?.getUnityRewards?.afterword?.cta}
              />
            </View>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default Unity;
