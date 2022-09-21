import React, { FC, memo, useEffect, useRef, useMemo, RefObject, useCallback } from "react";
import { View, Animated, Easing, TouchableOpacity, ViewStyle } from "react-native";
import LottieView from "lottie-react-native";
import { Style } from "@styles";
import { DETOX_ENABLED } from "@services/socket";
import { ChestCard } from "@organisms";
import styles, { cardPositions } from "./chest.styles";
import { useAssets } from "./hooks/useAssets";
import InfoMessage from "@organisms/info-message/info-message";
import { showTooltipPopupRelativeToPoint } from "@organisms/tooltip-popup/tooltip-popup.helper";
import cardStyles, { CARD_WIDTH } from "../chest-card/chest-card.styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

export type ChestType = "FOREST" | "OCEAN" | "DESERT" | "MOUNTAIN" | "CELESTIAL";

export interface ChestItemType {
  icon: { id: string; uri: string };
  description: string;
  backgroundColour: string;
  shadowColour: string;
  textColour: string;
  starColour: string;
  tooltip?: {
    title: string;
    description: string;
    cta: string;
  };
}

interface IProps {
  levelId: string;
  chestType: ChestType;
  items: ChestItemType[];
  chestState: CHEST_STATE;
  setChestState: React.Dispatch<React.SetStateAction<CHEST_STATE>>;
}

export enum CHEST_STATE {
  CLOSED,
  OPENING,
  OPEN,
}

const Chest: FC<IProps> = ({ levelId, chestType, items, chestState, setChestState }) => {
  const timeout = useRef<NodeJS.Timeout>();
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

  const { chestShakingLottie, chestOpeningLottie } = useAssets(chestType);
  const lottieChestRef: RefObject<LottieView> = useRef();

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
      Animated.parallel([
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
        ]),
        Animated.timing(cardOpacities.current[0], {
          toValue: 1,
          useNativeDriver: true,
          duration: DETOX_ENABLED ? 0 : 500,
          delay: DETOX_ENABLED ? 0 : 1800,
        }),
        Animated.timing(cardYs.current[0], {
          toValue: cardPositions.endY,
          useNativeDriver: true,
          duration: DETOX_ENABLED ? 0 : 500,
          delay: DETOX_ENABLED ? 0 : 1800,
        }),
        Animated.timing(cardOpacities.current[1], {
          toValue: 1,
          useNativeDriver: true,
          duration: DETOX_ENABLED ? 0 : 500,
          delay: DETOX_ENABLED ? 0 : 2000,
        }),
        Animated.timing(cardYs.current[1], {
          toValue: items.length > 2 ? cardPositions.endYMiddle : cardPositions.endY,
          useNativeDriver: true,
          duration: DETOX_ENABLED ? 0 : 500,
          delay: DETOX_ENABLED ? 0 : 2000,
        }),
        Animated.timing(cardOpacities.current[2], {
          toValue: 1,
          useNativeDriver: true,
          duration: DETOX_ENABLED ? 0 : 500,
          delay: DETOX_ENABLED ? 0 : 2200,
        }),
        Animated.timing(cardYs.current[2], {
          toValue: Style.adjust(155),
          useNativeDriver: true,
          duration: DETOX_ENABLED ? 0 : 500,
          delay: DETOX_ENABLED ? 0 : 2200,
        }),

        DETOX_ENABLED
          ? null
          : Animated.sequence([
              Animated.delay(3000),
              Animated.loop(
                Animated.sequence([
                  Animated.timing(cardListY.current, {
                    toValue: Style.adjust(20),
                    useNativeDriver: true,
                    duration: 2500,
                    easing: Easing.inOut(Easing.ease),
                  }),
                  Animated.timing(cardListY.current, {
                    toValue: 0,
                    useNativeDriver: true,
                    duration: 2500,
                    easing: Easing.inOut(Easing.ease),
                  }),
                ])
              ),
            ]),
      ]),
    [items.length]
  );

  useEffect(() => {
    return () => {
      openChestSequence.stop();
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (chestState === CHEST_STATE.OPENING) {
      timeout.current = global.setTimeout(() => {
        setChestState(CHEST_STATE.OPEN);
      }, 3000);
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
            levelId,
          })
        );
      }),
      cardWrappers: items.map((_, index) => ({
        ...styles.cardWrapper,
        zIndex: index === 1 ? 2 : 1,
        opacity: cardOpacities.current[index],
        transform: [{ translateY: cardYs.current[index] }, { translateX: cardXs[index] }],
      })),
      infoCardWrappers: items.map(
        (_, index) =>
          ({
            zIndex: 10,
            position: "absolute",
            top: cardPositions.endY,
            left: cardXs[index],
          } as ViewStyle)
      ),
    }),
    [items, cardXs, infoClose, dispatch, location, levelId]
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
            <Animated.View key={item.description} style={cardWrappers[index]}>
              <ChestCard
                description={item.description}
                backgroundColour={item.backgroundColour}
                shadowColour={item.shadowColour}
                starColour={item.starColour}
                textColour={item.textColour}
                icon={item.icon}
              />
            </Animated.View>
          )
        )}
      </Animated.View>
      {chestState !== CHEST_STATE.OPEN
        ? null
        : items.map((item, index) =>
            index > 2 ? null : (
              <View key={`info_${item.description}`} style={infoCardWrappers[index]}>
                <TouchableOpacity onPress={infoHandlers[index]}>
                  <View style={cardStyles.cardOuter} />
                </TouchableOpacity>
              </View>
            )
          )}
    </View>
  );
};

export default memo(Chest);
