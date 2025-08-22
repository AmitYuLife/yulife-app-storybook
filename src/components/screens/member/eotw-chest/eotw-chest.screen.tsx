import React, { useCallback, useMemo, useState, FC, useEffect, memo } from "react";
import { ImageSourcePropType, View } from "react-native";
import { useDispatch } from "react-redux";
import { Chest, ChestType, ChestItemType, CHEST_STATE } from "@organisms";
import { Button, LottieView } from "@molecules";
import { RawImage, TextTemplate } from "@atoms";
import styles from "./eotw-chest.styles";
import { IUnityData } from "../quests/quests-scroll-screen/unity-movies/unity.data";
import EOTWSpaceTravel from "./eotw-space-travel";
import { Style } from "@styles";
import { t } from "@locale";
import { PLANET_TRAVEL_ANIMATION, SPACE_TRAVEL_ANIMATION_DURATION } from "./eotw-planet-animation-config";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getCurrentPlanet, getCurrentPlanetByLevel } from "@utils";
import { CELESTIAL_CHEST_SCREEN, TEXT_TEMPLATE } from "@ids";

interface IProps {
  chestType: ChestType;
  title: string;
  level: number;
  yuniversalLevel?: number;
  yuniversalMap?: number;
  items: ChestItemType[];
  avatar: ImageSourcePropType;
  assets: IUnityData;
  onPressCta: () => void;
}
enum EOTW_CHEST_PAGE {
  CHEST,
  SPACE_TRAVEL,
  TRAVEL_ANIMATION,
}

const EOTWChestScreen: FC<IProps> = memo(
  ({ chestType, assets, title, items, level, yuniversalLevel, yuniversalMap, onPressCta, avatar }) => {
    const [chestState, setChestState] = useState(CHEST_STATE.CLOSED);
    const [page, setPage] = useState(EOTW_CHEST_PAGE.CHEST);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [beginningButton, setBeginningButton] = useState(false);
    const dispatch = useDispatch();
    const currentPlanet = getCurrentPlanet(level);
    const currentPlanetName = getCurrentPlanetByLevel(level);
    const [travel, setTravel] = useState(false);

    const chestButtonTranslationKey = useMemo(
      () =>
        chestState === CHEST_STATE.OPEN ? "screens.eotw_chest.claim_button" : "screens.eotw_chest.open_chest_button",
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
          level,
          yuniversalLevel,
          yuniversalMap,
        })
      );
    }, [chestState, dispatch, level, yuniversalLevel, yuniversalMap]);

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
    }, []);

    const onInitialized = useCallback(() => {
      setIsInitialized(true);
    }, []);

    const { color, backgroundChest } = assets;

    return (
      <View style={styles.wrapper} testID={CELESTIAL_CHEST_SCREEN}>
        <RawImage source={backgroundChest} style={styles.fullScreenLottie} onLayout={onInitialized} />
        {page !== EOTW_CHEST_PAGE.CHEST || !isInitialized ? null : (
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
                <TextTemplate color={color} type="h3" textAlign="center" testID={TEXT_TEMPLATE(title)}>
                  {title}
                </TextTemplate>
              </View>
            )}
            <Chest
              chestType={chestType}
              items={items}
              chestState={chestState}
              setChestState={setChestState}
              currentPlanet={currentPlanetName}
              level={level}
              yuniversalLevel={yuniversalLevel}
              yuniversalMap={yuniversalMap}
            />
            {chestState === CHEST_STATE.OPENING ? null : (
              <View style={styles.buttonWrapper}>
                <Button size="Large" onPress={onChestPageButtonPress} translationKey={chestButtonTranslationKey} />
              </View>
            )}
          </View>
        )}
        {page !== EOTW_CHEST_PAGE.SPACE_TRAVEL ? null : (
          <View style={styles.spaceTravelPage}>
            <EOTWSpaceTravel
              currentPlanet={currentPlanet}
              width={Style.DEVICE_WIDTH - 50}
              height={Style.DEVICE_HEIGHT - 50}
              avatar={avatar}
              travel={travel}
            />
            <View style={styles.buttonWrapper}>
              {travel ? null : (
                <Button
                  size="Large"
                  onPress={onSpaceTravelButtonPress}
                  translationKey="screens.eotw_chest.travel_button"
                />
              )}
              {!beginningButton ? null : (
                <Button
                  size="Large"
                  onPress={onBeginningButtonPress}
                  translationKey="screens.eotw_chest.beginning_button"
                />
              )}
            </View>
          </View>
        )}

        {page !== EOTW_CHEST_PAGE.TRAVEL_ANIMATION ? null : (
          <LottieView
            resizeMode="cover"
            style={styles.lottie}
            source={PLANET_TRAVEL_ANIMATION[currentPlanetName]}
            autoPlay={true}
            onAnimationFinish={onPressCta}
            loop={false}
          />
        )}
      </View>
    );
  }
);

export default EOTWChestScreen;
