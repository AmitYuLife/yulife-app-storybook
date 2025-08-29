import React, { FC, memo, useEffect, useRef, useMemo, useCallback } from "react";
import { View, Animated, Easing, ViewStyle } from "react-native";
import Lottie from "lottie-react-native";
import { Style } from "@styles";
import { DETOX_ENABLED } from "@services/socket";
import { ChestCard } from "@organisms";
import styles, { cardPositions } from "./chest.styles";
import { useAssets } from "./hooks/useAssets";
import InfoMessage from "@organisms/info-message/info-message";
import { showTooltipPopupRelativeToPoint } from "@organisms/tooltip-popup/tooltip-popup.helper";
import cardStyles, { CARD_WIDTH } from "../chest-card/chest-card.styles";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { CELESTIAL_CARD, YUNITY_CARD } from "@ids";
import { LottieView, TouchableOpacityWithDelay } from "@molecules";

export type ChestType = "FOREST" | "OCEAN" | "DESERT" | "MOUNTAIN" | "CELESTIAL";

export interface ChestItemType {
  icon: { id: string; uri?: string };
  description: string;
  backgroundColour: string;
  shadowColour: string;
  textColour: string;
  starColour?: string;
  tooltip?: {
    title: string;
    description: string;
    cta: string;
  };
}

interface IProps {
  level: number;
  yuniversalLevel?: number;
  yuniversalMap?: number;
  chestType: ChestType;
  items: ChestItemType[];
  chestState: CHEST_STATE;
  setChestState: React.Dispatch<React.SetStateAction<CHEST_STATE>>;
  currentPlanet: string;
}

export enum CHEST_STATE {
  CLOSED,
  OPENING,
  OPEN,
}

const CHEST_LID_OPENING_DURATION = 2300;
const CHEST_CARDS_FADE_IN_DURATION = 500;
const CHEST_CARDS_ANIMATION_OFFSET = 200;
const CHEST_CARD_OSCILLATION_DURATION = 2500;

const Chest: FC<IProps> = ({
  level,
  yuniversalLevel,
  yuniversalMap,
  chestType,
  items,
  chestState,
  setChestState,
  currentPlanet,
}) => {
  const dispatch = useDispatch();

  const location = useMemo(() => {
    switch (chestType) {
      case "FOREST":
        return "forest chest";
      case "OCEAN":
        return "ocean chest";
      case "DESERT":
        return "desert chest";
      case "MOUNTAIN":
        return "mountain chest";
      case "CELESTIAL":
      default:
        return "celestial chest";
    }
  }, [chestType]);

  const { chestShakingLottie, chestOpeningLottie } = useAssets(chestType, currentPlanet);
  const lottieChestRef = useRef<Lottie>();

  const openingChestOpacity = useRef(new Animated.Value(0.1));

  const cardListY = useRef(new Animated.Value(0));
  const cardOpacities = useRef([new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]);
  const cardYs = useRef([
    new Animated.Value(cardPositions.startY),
    new Animated.Value(cardPositions.startY),
    new Animated.Value(cardPositions.startY),
  ]);
  const cardXs = useMemo(
    () => (items.length > 2 ? cardPositions.xPositionsThreeCards : cardPositions.xPositionsTwoCards),
    [items.length]
  );

  const openChestSequence = useMemo(
    () =>
      Animated.sequence([
        Animated.timing(openingChestOpacity.current, { toValue: 1, duration: 0, useNativeDriver: true }),
        {
          start: (cb) => {
            lottieChestRef.current.play(0);
            cb({ finished: true });
          },
          stop: () => null,
          reset: () => null,
        },
        Animated.delay(DETOX_ENABLED ? 0 : CHEST_LID_OPENING_DURATION),
        Animated.stagger(DETOX_ENABLED ? 0 : CHEST_CARDS_ANIMATION_OFFSET, [
          Animated.parallel([
            Animated.timing(cardOpacities.current[0], {
              toValue: 1,
              useNativeDriver: true,
              duration: DETOX_ENABLED ? 0 : CHEST_CARDS_FADE_IN_DURATION,
            }),
            Animated.timing(cardYs.current[0], {
              toValue: cardPositions.endY,
              useNativeDriver: true,
              duration: DETOX_ENABLED ? 0 : CHEST_CARDS_FADE_IN_DURATION,
            }),
          ]),
          Animated.parallel([
            Animated.timing(cardOpacities.current[1], {
              toValue: 1,
              useNativeDriver: true,
              duration: DETOX_ENABLED ? 0 : CHEST_CARDS_FADE_IN_DURATION,
            }),
            Animated.timing(cardYs.current[1], {
              toValue: items.length > 2 ? cardPositions.endYMiddle : cardPositions.endY,
              useNativeDriver: true,
              duration: DETOX_ENABLED ? 0 : CHEST_CARDS_FADE_IN_DURATION,
            }),
          ]),
          Animated.parallel([
            Animated.timing(cardOpacities.current[2], {
              toValue: 1,
              useNativeDriver: true,
              duration: DETOX_ENABLED ? 0 : CHEST_CARDS_FADE_IN_DURATION,
            }),
            Animated.timing(cardYs.current[2], {
              toValue: Style.adjust(155),
              useNativeDriver: true,
              duration: DETOX_ENABLED ? 0 : CHEST_CARDS_FADE_IN_DURATION,
            }),
          ]),
        ]),

        {
          start: (cb) => {
            setChestState(CHEST_STATE.OPEN);
            cb({ finished: true });
          },
          stop: () => null,
          reset: () => null,
        },
        DETOX_ENABLED
          ? Animated.delay(0)
          : Animated.loop(
              Animated.sequence([
                Animated.timing(cardListY.current, {
                  toValue: Style.adjust(20),
                  useNativeDriver: true,
                  duration: CHEST_CARD_OSCILLATION_DURATION,
                  easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(cardListY.current, {
                  toValue: 0,
                  useNativeDriver: true,
                  duration: CHEST_CARD_OSCILLATION_DURATION,
                  easing: Easing.inOut(Easing.ease),
                }),
              ])
            ),
      ]),
    [items.length]
  );

  useEffect(() => {
    return () => {
      openChestSequence.stop();
    };
  }, []);

  useEffect(() => {
    if (chestState === CHEST_STATE.OPENING) {
      openingChestOpacity.current.setValue(1);
      lottieChestRef.current.play(0);
      openChestSequence.start();
    }
  }, [chestState]);

  const infoClose = useCallback(() => Navigation.dismissOverlay(MODALS.blurredOverlay), []);

  const { infoHandlers, cardWrappers, infoCardWrappers } = useMemo(
    () => ({
      infoHandlers: items.map(({ tooltip }, index) => () => {
        if (!tooltip) {
          return;
        }

        showTooltipPopupRelativeToPoint({
          x: cardXs[index] + CARD_WIDTH - 20,
          y: cardPositions.endY + 40,
          beakPosition: "autoVertical",
          children: (
            <InfoMessage
              title={tooltip?.title}
              text={tooltip?.description}
              onPress={infoClose}
              buttonLabel={tooltip?.cta}
            />
          ),
        });
        dispatch(
          logMixpanelEventActionCreator("information_viewed", {
            name: tooltip?.title,
            location,
            level,
            yuniversalLevel,
            yuniversalMap,
          })
        );
      }),
      cardWrappers: items.map(
        (_, index): ViewStyle => ({
          ...styles.cardWrapper,
          zIndex: index === 1 ? 2 : 1,
          opacity: cardOpacities.current[index],
          transform: [{ translateY: cardYs.current[index] }, { translateX: cardXs[index] }],
        })
      ),
      infoCardWrappers: items.map(
        (_, index) =>
          ({
            zIndex: 10,
            position: "absolute",
            top: cardPositions.endY,
            start: cardXs[index],
          } as ViewStyle)
      ),
    }),
    [items, cardXs, infoClose, dispatch, location, level, yuniversalLevel, yuniversalMap]
  );

  const openingChestLottieWrapper = useMemo(
    () => ({
      ...styles.chestLottieWrapper,
      opacity: openingChestOpacity.current,
    }),
    []
  );

  return (
    <View style={styles.container}>
      {chestState !== CHEST_STATE.CLOSED ? null : (
        <View style={styles.chestLottieWrapper}>
          <LottieView
            resizeMode="cover"
            style={styles.chestLottie}
            source={chestShakingLottie}
            autoPlay={true}
            loop={false}
          />
        </View>
      )}
      <Animated.View style={openingChestLottieWrapper}>
        <LottieView
          resizeMode="cover"
          style={styles.chestLottie}
          source={chestOpeningLottie}
          autoPlay={false}
          loop={false}
          ref={lottieChestRef}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.cardList,
          {
            transform: [{ translateY: cardListY.current }],
          },
        ]}
      >
        {items.map((item, index) =>
          index > 2 ? null : (
            <Animated.View key={item.description} style={cardWrappers[index]} testID={CELESTIAL_CARD(item.description)}>
              <ChestCard
                description={item.description}
                backgroundColour={item.backgroundColour}
                shadowColour={item.shadowColour}
                starColour={item.starColour}
                textColour={item.textColour}
                icon={item.icon}
                hasTooltip={!!item.tooltip}
              />
            </Animated.View>
          )
        )}
      </Animated.View>
      {chestState !== CHEST_STATE.OPEN
        ? null
        : items.map((item, index) =>
            index > 2 ? null : (
              <View
                key={`info_${item.description}`}
                style={infoCardWrappers[index]}
                testID={YUNITY_CARD(item.description)}
              >
                <TouchableOpacityWithDelay onPress={infoHandlers[index]}>
                  <View style={cardStyles.cardInner} />
                </TouchableOpacityWithDelay>
              </View>
            )
          )}
    </View>
  );
};

export default memo(Chest);
