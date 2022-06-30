import React, { FC, memo, useEffect, useRef, useCallback, useMemo } from "react";
import { Image as RNImage, View, Animated } from "react-native";
import { Style } from "@styles";
import { DETOX_ENABLED } from "@services/socket";
import { ChestCard } from "@organisms";
import styles from "./chest.styles";
import { useAssets } from "./hooks/useAssets";
import { PressableWithDelay } from "@components/molecules";

export type ChestType = "FOREST" | "OCEAN" | "DESERT" | "MOUNTAIN" | "CELESTIAL";

interface ChestItem {
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
  items: ChestItem[];
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

  const chestY = useRef(new Animated.Value(Style.adjust(-100)));
  const chestScale = useRef(new Animated.Value(1));
  const fogOpacity = useRef(new Animated.Value(0));
  const cardListOpacity = useRef(new Animated.Value(0));
  const cardListY = useRef(new Animated.Value(Style.adjust(50)));

  const openChestSequence = useMemo(
    () =>
      Animated.sequence([
        Animated.parallel([
          Animated.timing(chestY.current, {
            toValue: 0,
            useNativeDriver: true,
            duration: DETOX_ENABLED ? 0 : 1000,
          }),
          Animated.timing(chestScale.current, {
            toValue: 0.77,
            useNativeDriver: true,
            duration: DETOX_ENABLED ? 0 : 1000,
          }),
        ]),
        Animated.parallel([
          Animated.timing(fogOpacity.current, {
            toValue: 1,
            useNativeDriver: true,
            duration: DETOX_ENABLED ? 0 : 1000,
          }),
          Animated.timing(cardListOpacity.current, {
            toValue: 1,
            useNativeDriver: true,
            duration: DETOX_ENABLED ? 0 : 1000,
            delay: DETOX_ENABLED ? 0 : 500,
          }),
          Animated.timing(cardListY.current, {
            toValue: 0,
            useNativeDriver: true,
            duration: DETOX_ENABLED ? 0 : 1000,
            delay: DETOX_ENABLED ? 0 : 500,
          }),
        ]),
        {
          start: (cb) => {
            setChestState(CHEST_STATE.OPEN);
            cb({ finished: true });
          },
          stop: () => null,
          reset: () => null,
        },
      ]),
    []
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
    if (chestState === CHEST_STATE.CLOSED) {
      chestY.current?.setValue(Style.adjust(-100));
      chestScale.current?.setValue(1);
      fogOpacity.current?.setValue(0);
      cardListOpacity.current?.setValue(0);
      cardListY.current?.setValue(Style.adjust(50));
      return;
    }

    if (chestState === CHEST_STATE.OPENING) {
      chestY.current?.setValue(Style.adjust(-100));
      chestScale.current?.setValue(1);
      fogOpacity.current?.setValue(0);
      cardListOpacity.current?.setValue(0);
      cardListY.current?.setValue(Style.adjust(50));
      openChestSequence.start();
      return;
    }

    if (chestState === CHEST_STATE.OPEN) {
      chestY.current?.setValue(0);
      chestScale.current?.setValue(0.77);
      fogOpacity.current?.setValue(1);
      cardListOpacity.current?.setValue(1);
      cardListY.current?.setValue(0);
    }
  }, [chestState]);

  const onChestPress = useCallback(() => {
    if (chestState === CHEST_STATE.CLOSED) {
      setChestState(CHEST_STATE.OPENING);
    }
  }, [chestState, setChestState]);

  const { chestSource, fogClosedSource, fogOpenedSource, starsClosedSource, starsOpenedSource } = useAssets(chestType);

  return (
    <View style={styles.container}>
      <PressableWithDelay onPress={onChestPress}>
        <View style={styles.chestContainer}>
          <Animated.View style={[{ opacity: fogOpacity.current }, styles.fogOpenedWrapper]}>
            <RNImage
              resizeMode="contain"
              width={Style.adjust(338)}
              style={styles.fogOpenedImage}
              source={fogOpenedSource}
            />
          </Animated.View>
          <Animated.View
            style={[
              { transform: [{ translateY: chestY.current }, { scale: chestScale.current }] },
              styles.chestWrapper,
            ]}
          >
            <RNImage resizeMode="contain" width={Style.adjust(260)} style={styles.chestImage} source={chestSource} />
          </Animated.View>
          {chestState !== CHEST_STATE.CLOSED ? null : (
            <>
              <View style={styles.fogClosedWrapper}>
                <RNImage
                  resizeMode="contain"
                  width={Style.adjust(395)}
                  style={styles.fogClosedImage}
                  source={fogClosedSource}
                />
              </View>
              <View style={styles.starsClosedWrapper}>
                <RNImage
                  resizeMode="contain"
                  width={Style.adjust(292)}
                  style={styles.starsClosedImage}
                  source={starsClosedSource}
                />
              </View>
            </>
          )}
          {chestState === CHEST_STATE.CLOSED ? null : (
            <Animated.View style={[{ opacity: fogOpacity.current }, styles.starsOpenedWrapper]}>
              <RNImage
                resizeMode="contain"
                width={Style.adjust(186)}
                style={styles.starsOpenedImage}
                source={starsOpenedSource}
              />
            </Animated.View>
          )}
          <Animated.View
            style={[
              { opacity: cardListOpacity.current, transform: [{ translateY: cardListY.current }] },
              styles.cardList,
            ]}
          >
            {items.map((item) => (
              <ChestCard
                key={item.description}
                description={item.description}
                backgroundColour={item.backgroundColour}
                shadowColour={item.shadowColour}
                starColour={item.starColour}
                textColour={item.textColour}
                icon={item.icon}
                tooltip={item.tooltip}
              />
            ))}
          </Animated.View>
        </View>
      </PressableWithDelay>
    </View>
  );
};

export default memo(Chest);
