import { Box, CloseSvg } from "@atoms";
import { SearchIcon } from "@atoms/icon/search-icon";
import { WalletIcon } from "@atoms/icon/wallet-icon";
import { Pressable, ShineButton } from "@components/molecules";
import { t } from "@locale";
import { Colours, Style } from "@styles";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { LayoutChangeEvent, StyleSheet, TextInput, TextInputProps } from "react-native";
import {
  FadeIn,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface ISearchBarProps extends TextInputProps {
  isOpen?: boolean;
  onPressWallet?: () => void;
  onChangeText?: (text: string) => void;
}

const TRANSITION_DURATION = 350;

const RewardSearchHeader = ({ value, onPressWallet, onChangeText, isOpen, ...props }: ISearchBarProps) => {
  const wrapperRef = useAnimatedRef();
  const initialSearchBarWidth = useSharedValue(0);
  const wrapperWidth = useSharedValue(0);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const onLayoutWrapper = useCallback(
    (layout: LayoutChangeEvent) => {
      const { width } = layout.nativeEvent.layout;
      wrapperWidth.value = width;
    },
    [wrapperWidth]
  );

  const onSearchLayout = useCallback(
    (layout: LayoutChangeEvent) => {
      const { width } = layout.nativeEvent.layout;
      if (!initialSearchBarWidth.value) {
        initialSearchBarWidth.value = width;
      }
    },
    [initialSearchBarWidth]
  );

  const onClear = useCallback(() => {
    onChangeText?.("");
  }, [onChangeText]);

  const inputWrapperStyle = useAnimatedStyle(() => {
    if (onPressWallet) {
      if (!initialSearchBarWidth.value) {
        return {};
      }

      return { width: withTiming(initialSearchBarWidth.value) };
    }

    return {
      width: wrapperWidth.value
        ? withSequence(
            withTiming(initialSearchBarWidth.value, { duration: 0 }),
            withTiming(wrapperWidth.value ?? undefined, { duration: TRANSITION_DURATION })
          )
        : undefined,
    };
  });

  const walletButtonStyle = useAnimatedStyle(() => {
    if (onPressWallet) {
      return {
        opacity: withTiming(1),
      };
    }

    return {
      opacity: withTiming(0),
      transform: [
        {
          translateX: withSequence(withTiming(0, { duration: 0 }), withTiming(500, { duration: TRANSITION_DURATION })),
        },
      ],
    };
  });

  return (
    <Box forceAnimated={true} pt={0} px={20} flexDirection="row" gap={10} w="100%">
      <Box flex={1} flexDirection="row" w="100%" gap={10} onLayout={onLayoutWrapper} animatedRef={wrapperRef}>
        <Box flex={1}>
          <Box forceAnimated={true} style={inputWrapperStyle} flex={1} flexDirection="row">
            <TextInput
              style={styles.searchBar}
              placeholder={t("screens.rewards.search.placeholder")}
              onLayout={onSearchLayout}
              placeholderTextColor={"#A0A09B"}
              value={value}
              ref={inputRef}
              spellCheck={false}
              autoCorrect={false}
              onChangeText={onChangeText}
              {...props}
            />
          </Box>
          <Box pointerEvents="none" position="absolute" pl={15} justifyContent="center" alignItems="center" h="100%">
            <SearchIcon width={20} height={20} />
          </Box>
        </Box>

        <Box forceAnimated={true} style={walletButtonStyle}>
          <ShineButton
            icon={<WalletIcon size={22} />}
            label={t("screens.rewards.storefront.wallet")}
            onPress={onPressWallet}
          />
        </Box>

        {!onPressWallet && value ? (
          <Box
            h="100%"
            right={20}
            position="absolute"
            pointerEvents="box-none"
            alignItems="center"
            justifyContent="center"
            entering={FadeIn.duration(TRANSITION_DURATION)}
          >
            <Pressable p={4} bg="#A0A09B" br={10} onPress={onClear} hitSlop={10}>
              <CloseSvg size={12} stroke="#FFFFFF" strokeWidth={3} />
            </Pressable>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default memo(RewardSearchHeader);

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    fontSize: 15,
    borderWidth: 1,
    height: "100%",
    borderRadius: 100,
    borderColor: "#D9D9D7",
    paddingHorizontal: Style.adjust(45),
    backgroundColor: Colours.neutral.white,
  },
  closeIcon: {
    width: 12,
    height: 12,
  },
});
