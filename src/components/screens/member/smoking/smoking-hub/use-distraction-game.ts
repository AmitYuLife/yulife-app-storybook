import { useCallback, useMemo } from "react";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { useDispatch } from "react-redux";

type Props = {
  gameIntroModal?: HealthSmokingState["gameIntroModal"];
  gameOptions?: HealthSmokingState["gameOptions"];
};

type UseDistractionGameReturn = {
  play: () => void;
};

export const useDistractionGame = ({ gameIntroModal, gameOptions }: Props): UseDistractionGameReturn => {
  const dispatch = useDispatch();

  const gameIntroModalSafe = useMemo(() => {
    if (!gameIntroModal) {
      return;
    }

    const { image: introModalImage, ...introModal } = gameIntroModal || {};

    return {
      ...introModal,
      image: introModalImage?.image?.uri
        ? {
            uri: introModalImage.image.uri,
            width: introModalImage.width,
            height: introModalImage.height,
          }
        : undefined,
    };
  }, [gameIntroModal]);

  const play = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        name: "distraction_game",
        button_id: "distraction_game",
        location: "smoking_hub",
      })
    );

    Navigation.push(ROUTES.smoking, {
      component: {
        id: ROUTES.game2048,
        name: ROUTES.game2048,
        passProps: {
          gameIntroModal: gameIntroModalSafe,
          gameOptions,
        },
      },
    });
  }, [gameIntroModalSafe, gameOptions]);

  return {
    play,
  };
};
