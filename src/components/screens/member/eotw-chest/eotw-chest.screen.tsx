import React, { useCallback, useMemo, useState, FC, useRef, useEffect, memo } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import LottieView from "lottie-react-native";
import { Chest, ChestType, ChestItemType, CHEST_STATE } from "@organisms";
import { Button } from "@molecules";
import { TextTemplate } from "@atoms";
import styles from "./eotw-chest.styles";
import { getAssets } from "../quests/quests-scroll-screen/unity-movies/unity.data";
import { DETOX_ENABLED } from "@services/socket";
import EOTWSpaceTravel from "./eotw-space-travel";
import { Style } from "@styles";
import { t } from "@locale";
import { SPACE_TRAVEL_ANIMATION_DURATION } from "./eotw-planet-animation-config";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

interface IProps {
  chestType: ChestType;
  title: string;
  level: number;
  levelId: string;
  items: ChestItemType[];
  avatar: ImageSourcePropType;
  onPressCta: () => void;
}
enum EOTW_CHEST_PAGE {
  CHEST,
  SPACE_TRAVEL,
  TRAVEL_ANIMATION,
}

const TRAVEL_ANIMATION = require("./assets/Travel_animation.json");
const EOTWChestScreen: FC<IProps> = memo(({ chestType, title, items, level, levelId, onPressCta, avatar }) => {
  const [chestState, setChestState] = useState(CHEST_STATE.CLOSED);
  const [page, setPage] = useState(EOTW_CHEST_PAGE.CHEST);
  const [beginningButton, setBeginningButton] = useState(false);
  const dispatch = useDispatch();

  const travelRef = useRef<LottieView>(null);

  const [travel, setTravel] = useState(false);

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

    setPage(EOTW_CHEST_PAGE.SPACE_TRAVEL);
    dispatch(
      logMixpanelEventActionCreator("transition_screen_view", {
        name: "space travel",
        levelId,
      })
    );
  }, [chestState, dispatch]);

  const onSpaceTravelButtonPress = useCallback(() => {
    setTravel(true);
  }, []);

  useEffect(() => {
    if (!travel) {
      return;
    }

    const timeout = setTimeout(() => {
      setBeginningButton(true);
    }, SPACE_TRAVEL_ANIMATION_DURATION);

    return () => {
      clearTimeout(timeout);
    };
  }, [travel]);

  const onBeginningButtonPress = useCallback(() => {
    setPage(EOTW_CHEST_PAGE.TRAVEL_ANIMATION);
    setImmediate(() => {
      travelRef.current.play();
    });
  }, []);

  const { color, waves } = useMemo(() => getAssets(level - 1), [level]);
  return (
    <View style={styles.wrapper}>
      <LottieView
        resizeMode="cover"
        style={styles.fullScreenLottie}
        source={waves}
        autoPlay={true}
        loop={DETOX_ENABLED ? false : true}
      />
      {page !== EOTW_CHEST_PAGE.CHEST ? null : (
        <View style={styles.chestPage}>
          {chestState !== CHEST_STATE.OPEN ? null : (
            <View style={styles.chestTitleWrapper}>
              <TextTemplate color={color} type="h3" textAlign="center">
                {t("screens.eotw_chest.title")}
              </TextTemplate>
            </View>
          )}
          {chestState !== CHEST_STATE.CLOSED ? null : (
            <View style={styles.chestTitleWrapper}>
              <TextTemplate color={color} type="h3" textAlign="center">
                {title}
              </TextTemplate>
            </View>
          )}
          <Chest
            levelId={levelId}
            chestType={chestType}
            items={items}
            chestState={chestState}
            setChestState={setChestState}
          />
          {chestState === CHEST_STATE.OPENING ? null : (
            <View style={styles.buttonWrapper}>
              <Button size="Large" onPress={onChestPageButtonPress} label={chestButtonLabel} />
            </View>
          )}
        </View>
      )}
      {page !== EOTW_CHEST_PAGE.SPACE_TRAVEL ? null : (
        <View style={styles.spaceTravelPage}>
          <EOTWSpaceTravel
            currentPlanet={2}
            width={Style.DEVICE_WIDTH - 50}
            height={Style.DEVICE_HEIGHT - 50}
            avatar={avatar}
            travel={travel}
          />
          <View style={styles.buttonWrapper}>
            {travel ? null : (
              <Button size="Large" onPress={onSpaceTravelButtonPress} label={t("screens.eotw_chest.travel_button")} />
            )}
            {!beginningButton ? null : (
              <Button size="Large" onPress={onBeginningButtonPress} label={t("screens.eotw_chest.beginning_button")} />
            )}
          </View>
        </View>
      )}

      {page !== EOTW_CHEST_PAGE.TRAVEL_ANIMATION ? null : (
        <LottieView
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
          ref={travelRef}
          source={TRAVEL_ANIMATION}
          autoPlay={false}
          onAnimationFinish={onPressCta}
          loop={false}
        />
      )}
    </View>
  );
});

export default EOTWChestScreen;
