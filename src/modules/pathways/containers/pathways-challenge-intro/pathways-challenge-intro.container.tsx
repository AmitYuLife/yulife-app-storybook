import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import PathwaysChallengeIntroScreen from "@app/modules/pathways/screens/pathways-challenge-intro/pathways-challenge-intro.screen";

interface OnPressAction {
  type: string;
  payload?: unknown;
}

interface Props {
  onPress?: OnPressAction;
  componentId: string;
}

const PathwaysChallengeIntroContainer = ({ onPress, componentId }: Props) => {
  const dispatch = useDispatch();

  const onPressCta = useCallback(() => {
    if (onPress?.type) {
      dispatch({
        type: onPress.type,
        payload: { serverPayload: onPress.payload },
      });
    }
  }, [dispatch, onPress]);

  return <PathwaysChallengeIntroScreen onPressCta={onPressCta} componentId={componentId} />;
};

export default memo(PathwaysChallengeIntroContainer);
