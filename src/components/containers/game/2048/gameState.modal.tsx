import { memo, useCallback, useMemo } from "react";
import { ScrollView } from "react-native";
import { initialWindowMetrics, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { clamp } from "lodash";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { Box, Image, TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { showFloatingModal } from "@modals";
import { Colours, Style } from "@styles";
import { parseJSON, VoidFunction } from "@utils";
import { TrophyIcon } from "@atoms/icon/trophy-icon";
import { GAME_STATE_MODAL_IMAGE } from "@ids";
import { Game2048StateModal, GameSkin } from "./types";
import { Spotlight } from "@organisms";
import { HeartIcon } from "@atoms/icon/heart-icon";
import GameTiles from "./gameTiles";
import { BoardCell } from "./game";
import { isAndroidWithTransparentStatusBar } from "@styles/status-bar.styles";

const MAIN_IMAGE_SIZE = Style.adjust(198);
const RESTART_IMG = require("./components/assets/restart_icon.png");

type GameStateProps = Game2048StateModal & {
  board: BoardCell[];
  skin: GameSkin;
  restartGame: VoidFunction;
};

const GameStateModal = memo(
  ({ board, skin, restartGame, image, displayImage, spotlight, copy, allowRestart }: GameStateProps) => {
    const onPress = useCallback(() => {
      Navigation.dismissOverlayWithChild();
      restartGame();
    }, [restartGame]);

    const onExitPress = useCallback(() => {
      Navigation.dismissOverlayWithChild();
      Navigation.pop(ROUTES.game2048);
    }, []);

    const mainImage = useMemo(() => {
      if (image?.image?.uri && image?.width) {
        return (
          <Image
            testID={GAME_STATE_MODAL_IMAGE}
            source={image.image}
            width={image.width}
            height={image.width ?? image.height}
            suppressLoadingUi={true}
          />
        );
      }

      switch (displayImage) {
        case "trophy":
          return <TrophyIcon width={Style.adjust(100)} height={Style.adjust(94)} />;
        case "heart":
          return <HeartIcon />;
        case "gameTiles":
          return <GameTiles board={board} skin={skin} />;
      }

      return null;
    }, [image, displayImage, board, skin]);

    const spotlightProps = useMemo(() => {
      if (!spotlight) {
        return null;
      }

      const { data: spotlightJson, isValid } = parseJSON(spotlight);

      if (!isValid || Object.keys(spotlightJson).length === 0) {
        return null;
      }

      return spotlightJson;
    }, [spotlight]);

    const restartIcon = useMemo(
      () => (
        <Image
          source={RESTART_IMG}
          width={Style.adjust(16)}
          height={Style.adjust(16)}
          tintColor={Colours.neutral.white}
          suppressLoadingUi={true}
        />
      ),
      []
    );

    const insets = useSafeAreaInsets();

    const scrollViewContainerStyles = useMemo(() => {
      const deviceHeight = Style.DEVICE_HEIGHT;
      const paddingTop = insets.top + insets.bottom;

      if (isAndroidWithTransparentStatusBar()) {
        return {
          minHeight: deviceHeight,
          paddingTop,
        };
      }

      return {
        minHeight: deviceHeight - paddingTop,
      };
    }, [insets.top, insets.bottom]);

    const contentGap = useMemo(
      () => clamp(0.075 * scrollViewContainerStyles.minHeight, 20, 60),
      [scrollViewContainerStyles.minHeight]
    );

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        bounces={false}
        contentContainerStyle={scrollViewContainerStyles}
      >
        <Box flex={1} ph={24} pt={36} pb={10} gap={10} alignItems="center" justifyContent="space-between">
          <Box flex={1} gap={contentGap}>
            {copy?.title ? (
              <TextTemplate type="h2" color={Colours.neutral.white} textAlign="center">
                {copy.title}
              </TextTemplate>
            ) : null}
            <Box h={MAIN_IMAGE_SIZE} justifyContent="center" alignItems="center">
              {spotlightProps ? <Spotlight {...spotlightProps}>{mainImage}</Spotlight> : mainImage}
            </Box>
            <Box gap={8} alignItems="center">
              {copy?.info ? (
                <TextTemplate type="h2" color={Colours.neutral.white} textAlign="center">
                  {copy.info}
                </TextTemplate>
              ) : null}
              {copy?.description ? (
                <TextTemplate type="b1b" color={Colours.neutral.white} textAlign="center">
                  {copy.description}
                </TextTemplate>
              ) : null}
            </Box>
          </Box>
          <Box mt={20} gap={8}>
            {allowRestart ? <Button leftIcon={restartIcon} translationKey="2048.restart" onPress={onPress} /> : null}
            {allowRestart ? (
              <SecondaryButton
                translationKey="labels.cta.exit"
                onPress={onExitPress}
                textColor={Colours.neutral.white}
                borderColor={Colours.gradients.whiteTransparent}
              />
            ) : (
              <Button translationKey="labels.cta.exit" onPress={onExitPress} />
            )}
          </Box>
        </Box>
      </ScrollView>
    );
  }
);

const GameStateModalWithProviders = (props: GameStateProps) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GameStateModal {...props} />
    </SafeAreaProvider>
  );
};

export const showGameStateModal = (props: GameStateProps) => {
  showFloatingModal({
    modalId: MODALS.game2048Victory,
    showButton: false,
    showCloseIcon: false,
    closeOnBlur: false,
    height: Style.DEVICE_HEIGHT,
    wrapperStyle: {
      backgroundColor: "transparent",
    },
    withBlurBackground: true,
    tint: "dark",
    intensity: 8,
    blurBackgroundColor: "rgba(0,0,0,.2)",
    paddingTop: 0,
    children: <GameStateModalWithProviders {...props} />,
  });
};
