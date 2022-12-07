import React, { ComponentProps, memo, useContext, useCallback } from "react";
import { View, StyleSheet, ViewStyle, Platform, SafeAreaView, PixelRatio } from "react-native";
import { NavBar } from "@organisms";
import { Colours, Style } from "@styles";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useMutation } from "@apollo/client";
import { Popover } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP } from "@graphql/onboardingSteps/performMobileOnboardingStep.gql";
import media from "@styles/media";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { YuScreenContext } from "../context/yu-screen.context";
import { navigateToProduct } from "../navigation/navigateToProduct";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { setScreenViewForBurgerMenu } from "@navigation/utils";
import { PAD_TOP } from "./yu-screen.legacy";
import { YUSCREEN_V3 } from "@ids";

interface Props {
  children: React.ReactChild;
  testID?: string;
}

const POPOVER_ANIMATION_DELAY = 750;

const DEVICE_ADJUSTMENT = media.select(
  [
    { condition: Style.isIphone13(), value: 43 },
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: Style.IOS_NOTCH_HEIGHT,
    },
    {
      condition: Platform.OS === "ios",
      value: 20,
    },
    {
      condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
      value: -4,
    },
  ],
  0
);

const popoverProps = {
  backgroundColor: Colours.neutral.white,
  borderColor: Colours.neutral.n100,
  closeOnOutsideTouch: true,
  shadowOpacity: 0.08,
  animationDelay: POPOVER_ANIMATION_DELAY,
} as ComponentProps<typeof Popover>;

const WIDTH = Style.adjust(156);
const ITEM_SLOT_POSITION_CONSTANT = Style.adjust(8);
const ITEM_SLOT_POSITION_MULTIPLIER = Style.adjust(70);
const NAME_AND_TITLE_HEIGHT = Style.adjust(80);
const DPI_TOP_OFFSET = 48;
const PIXEL_RATIO_MULTIPLIER = -22;
const DPI_OFFSET = DPI_TOP_OFFSET + PIXEL_RATIO_MULTIPLIER * (PixelRatio.get() * 2);
const TARGET_Y_CONSTANT =
  DPI_OFFSET + PAD_TOP + NAME_AND_TITLE_HEIGHT + DEVICE_ADJUSTMENT + ITEM_SLOT_POSITION_CONSTANT;
const OFFSET = Style.adjust(60);

const _YuScreenLayoutLegacy = ({ children, testID = YUSCREEN_V3(true) }: Props) => {
  const { popover } = useContext(YuScreenContext);
  const [performOnboarding] = useMutation(GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP);

  const dismissPopover = useCallback(() => {
    performOnboarding({ variables: { step: popover.id }, refetchQueries: ["YuScreenProductSlots"] });
  }, [performOnboarding, popover]);

  const handleNavigateToProduct = useCallback(async () => {
    await navigateToProduct({
      status: popover.product.status as YuProductStatus,
      productId: popover.product.productId,
    });
  }, [popover]);

  return (
    <SafeAreaView style={styles.wrapper} testID={testID}>
      {children}
      <TopBarAbsolute hasWhiteBackground={true} onPressLeftIcon={openMenu} />
      <NavBar activeIndex={2} />
      {!popover?.message ? null : (
        <Popover
          {...popoverProps}
          closeOnOutsideTouch={true}
          onTouchTarget={handleNavigateToProduct}
          onClose={dismissPopover}
          targetX={popover.side === "left" ? OFFSET : Style.DEVICE_WIDTH - OFFSET}
          targetY={TARGET_Y_CONSTANT + ITEM_SLOT_POSITION_MULTIPLIER * ((popover.index || 0) + 1)}
          targetSize={Style.adjust(88)}
          width={WIDTH}
          side={popover.side}
          offset={OFFSET}
        >
          <View pointerEvents="none" style={styles.popover}>
            <TextTemplate color={Colours.neutral.n900} type="l2">
              {popover.message}
            </TextTemplate>
          </View>
        </Popover>
      )}
    </SafeAreaView>
  );
};

export const YuScreenLayoutLegacy = memo(_YuScreenLayoutLegacy);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  popover: {
    width: WIDTH,
  },
});

const openMenu = () => {
  setScreenViewForBurgerMenu();
  Navigation.mergeOptions(ROUTES.yuScreen, {
    sideMenu: {
      left: {
        enabled: true,
        visible: true,
      },
    },
    statusBar: {
      drawBehind: false,
      visible: true,
    },
  });
};
