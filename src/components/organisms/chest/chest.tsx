import React, { FC, memo, useEffect, useRef, useMemo, RefObject } from "react";
import { View, Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";
import { Style } from "@styles";
import { DETOX_ENABLED } from "@services/socket";
import { ChestCard } from "@organisms";
import styles, { cardPositions } from "./chest.styles";
import { useAssets } from "./hooks/useAssets";

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

const Chest: FC<IProps> = ({ chestType, items, chestState, setChestState }) => {
  const timeout = useRef<NodeJS.Timeout>();

  const { chestShakingLottie, chestOpeningLottie } = useAssets(chestType);
  const lottieChestRef: RefObject<LottieView> = useRef();

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
        {
          start: (cb) => {
            cb({ finished: true });
          },
          stop: () => null,
          reset: () => null,
        },
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

  return (
    <View style={styles.container}>
      <View style={styles.chestLottieWrapper}>
        <LottieView
          resizeMode="cover"
          style={styles.chestLottie}
          source={chestState === CHEST_STATE.CLOSED ? chestShakingLottie : chestOpeningLottie}
          autoPlay={true}
          loop={false}
          ref={lottieChestRef}
        />
      </View>
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
            <Animated.View
              key={item.description}
              style={[
                styles.cardWrapper,
                {
                  zIndex: index === 1 ? 2 : 1,
                  opacity: cardOpacities.current[index],
                  transform: [{ translateY: cardYs.current[index] }, { translateX: cardXs[index] }],
                },
              ]}
            >
              <ChestCard
                description={item.description}
                backgroundColour={item.backgroundColour}
                shadowColour={item.shadowColour}
                starColour={item.starColour}
                textColour={item.textColour}
                icon={item.icon}
                tooltip={item.tooltip}
              />
            </Animated.View>
          )
        )}
      </Animated.View>
    </View>
  );
};

export default memo(Chest);
