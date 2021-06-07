import React, { memo, useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms";
import { NotVisibleEyeIcon } from "@atoms/icon/not-visible-eye-icon";
import { BlurView } from "react-native-blur";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { toCapitalLetter } from "@services/utils";

export interface IPackageCardPerks {
  icon: React.ReactNode;
  title: string;
  description: string;
  locked: boolean;
  coverType: CoverType;
}

interface IProps {
  perk: IPackageCardPerks;
  onLongPress: (key: CoverType) => void;
  onPressOut: () => void;
}

const commonProps = {
  duration: 400,
  useNativeDriver: true,
};

const PackageCardPerks = ({ perk, onLongPress, onPressOut }: IProps) => {
  const fadeInFadeOut = useRef(new Animated.Value(0)).current;
  const opacity = fadeInFadeOut.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 0.5],
  });

  const fadeIn = Animated.timing(fadeInFadeOut, {
    toValue: 1,
    ...commonProps,
  });

  const fadeOut = Animated.timing(fadeInFadeOut, {
    toValue: 0,
    ...commonProps,
  });

  useEffect(() => {
    return () => {
      fadeOut.stop();
      fadeIn.stop();
    };
  }, [fadeIn, fadeOut]);

  return (
    <Pressable
      onLongPress={() => (!perk.locked ? null : fadeIn.start(() => onLongPress(perk.coverType)))}
      onPressOut={() => fadeOut.start(() => onPressOut())}
    >
      <View style={styles.wrapper}>
        <View style={styles.icon}>{perk.icon}</View>
        <View style={styles.optionDetail}>
          <View style={styles.title}>
            <TextTemplate type="l1b">{perk.title}</TextTemplate>
          </View>
          <TextTemplate type="l1">{perk.description}</TextTemplate>
        </View>
      </View>
      {!perk.locked ? null : (
        <Animated.View style={[StyleSheet.absoluteFillObject, { opacity }]}>
          <BlurView blurAmount={5} blurType="light" style={StyleSheet.absoluteFillObject} />
          <View style={styles.locked}>
            <View style={styles.lockedTitle}>
              <TextTemplate type="l1b">Tap and hold to preview </TextTemplate>
              <TextTemplate type="l1b" color={Colours.products.fib[perk.coverType]}>
                {toCapitalLetter(perk.coverType)}
              </TextTemplate>
              <TextTemplate type="l1b"> cover</TextTemplate>
            </View>
            <NotVisibleEyeIcon width={24} height={24} />
          </View>
        </Animated.View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minHeight: Style.adjust(72),
    flexDirection: "row",
    backgroundColor: Colours.neutral.n50,
    borderColor: Colours.metallic.m100,
    borderWidth: 1,
    paddingHorizontal: Style.adjust(16),
    paddingVertical: Style.adjust(8),
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  icon: {
    marginRight: Style.adjust(17),
  } as ViewStyle,
  title: {
    marginBottom: Style.adjust(4),
  },
  optionDetail: {
    flex: 1,
  } as ViewStyle,
  locked: {
    height: "100%",
    backgroundColor: "rgba(222, 222, 240,0.65)",
    borderWidth: 1,
    borderColor: Colours.metallic.m100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  lockedTitle: {
    marginBottom: Style.adjust(8),
    flexDirection: "row",
  },
});

export default memo(PackageCardPerks);
