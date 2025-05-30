import { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { Box, Image, TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { showFloatingModal } from "@modals";
import { Colours, Style, TOP_BAR } from "@styles";
import { parseJSON, VoidFunction } from "@utils";
import { TrophyIcon } from "@atoms/icon/trophy-icon";
import { GAME_STATE_MODAL_IMAGE } from "@ids";
import { Game2048StateModal, GameSkin } from "./types";
import { Spotlight } from "@organisms";
import { HeartIcon } from "@atoms/icon/heart-icon";
import GameTiles from "./gameTiles";
import { BoardCell } from "./game";
import { ScrollView, StyleSheet } from "react-native";

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

    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
        bounces={false}
      >
        <Box
          flex={1}
          minHeight={Style.DEVICE_HEIGHT}
          ph={24}
          pt={TOP_BAR.TOP_BAR_WITH_PAD}
          pb={32}
          gap={60}
          alignItems="center"
        >
          {copy?.title ? (
            <TextTemplate type="h2" color={Colours.neutral.white}>
              {copy.title}
            </TextTemplate>
          ) : null}
          <Box h={MAIN_IMAGE_SIZE} justifyContent="center" alignItems="center">
            {spotlightProps ? <Spotlight {...spotlightProps}>{mainImage}</Spotlight> : mainImage}
          </Box>
          <Box flex={1} gap={8} mt={30} alignItems="center">
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
          <Box mt="auto" gap={8}>
            {allowRestart ? <Button leftIcon={restartIcon} translationKey="2048.restart" onPress={onPress} /> : null}
            {allowRestart ? (
              <SecondaryButton
                translationKey="labels.cta.exit"
                onPress={onExitPress}
                textColor={Colours.neutral.white}
                borderColor={Colours.gradient.whiteTransparent}
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

const styles = StyleSheet.create({
  scrollView: {
    height: Style.DEVICE_HEIGHT,
  },
});

export const showGameStateModal = (props: GameStateProps) => {
  showFloatingModal({
    modalId: MODALS.game2048Victory,
    showButton: false,
    showCloseIcon: false,
    closeOnBlur: false,
    height: Style.SCREEN_HEIGHT,
    wrapperStyle: {
      backgroundColor: "transparent",
    },
    withBlurBackground: true,
    blurType: "dark",
    blurAmount: 8,
    blurBackgroundColor: "rgba(0,0,0,.2)",
    paddingTop: Style.adjust(10),
    children: <GameStateModal {...props} />,
  });
};
