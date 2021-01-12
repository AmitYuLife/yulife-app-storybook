import { GQL_MUTATION_CREATE_ACTIVE_CHALLENGE, CreateActiveChallengeMutationTuple } from "@graphql/challenges";
import { ApolloClient } from "apollo-client";
import React, { FC, useState, useCallback } from "react";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentQuestLevels_getCurrentQuestLevels } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { challengeStartSuccessAction } from "../../../../../redux/levels/levels.actions";
import { getCurrentLevel } from "../../../../../redux/levels/levels.selectors";
import { BlurProvider, IToggleBlur } from "../../../../atoms";
import { ChallengesListScreen, ChallengeDetailsScreen } from "../../../../screens";
import { formatMilestones, getSlotDuration, reduceMilestones } from "./challenges-list.helpers";
import { useMutation } from "@apollo/react-hooks";
import { handleLinkPress } from "@services/app-link";
import { Unit } from "@screens/member/challenges/models";
import { authoriseCycling } from "@services/fitkit/fitkit.helpers";
import { ChallengeType } from "@molecules/challenge-tile/challenge-tile.types";
import { getCurrentWorld } from "@services/utils";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
  componentId: string;
  level: GetCurrentQuestLevels_getCurrentQuestLevels;
  client: ApolloClient<any>;
}

type Props = IProps & ConnectedState & ConnectedDispatch;

const openMeditationURL = handleLinkPress(Config.MEDITATION_SETUP_URL);

const ChallengesListContainer: FC<Props> = ({
  currentLevel,
  level,
  componentId,
  challengeStartSuccessAction: dispatchChallengeStartSuccess,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrorState] = useState(null as string);
  const [slot, setSlot] = useState({
    challengeType: "brisk walk",
    duration: "",
    id: "",
    milestones: [],
    reward: "",
    unit: "steps" as Unit,
  });

  const [createActiveChallenge]: CreateActiveChallengeMutationTuple = useMutation(
    GQL_MUTATION_CREATE_ACTIVE_CHALLENGE,
    {
      variables: { levelSlotId: slot.id },
    }
  );

  const currentWorld = getCurrentWorld(level.level);

  const setError = useCallback(() => {
    setErrorState("Sorry, there was a problem starting your challenge. \n Please try again!");
    setIsLoading(false);
  }, []);

  const handleSlotPress = useCallback(
    (newSlot: typeof slot, showOverlay: () => void) => () => {
      setSlot(newSlot);
      showOverlay();
    },
    [slot]
  );

  const handleNavPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const handleSubmitChallenge = useCallback(async () => {
    setIsLoading(true);
    try {
      if (slot.challengeType === "cycling") {
        await authoriseCycling();
      }

      const { data } = await createActiveChallenge();

      if (data && data.createActiveChallenge) {
        dispatchChallengeStartSuccess({
          ...data,
          levelSlotId: slot.id,
        });
        handleNavPress();
      } else {
        setError();
      }
    } catch (e) {
      setError();
    }
  }, [createActiveChallenge, dispatchChallengeStartSuccess, setError, handleNavPress, slot.id, slot.challengeType]);

  return (
    <BlurProvider
      render={({ showOverlay }: IToggleBlur) => (
        <ChallengesListScreen
          challenges={level.slots.map((levelSlot) => {
            const minValue = levelSlot?.milestones[0]?.coins || 0;
            const maxValue = reduceMilestones(levelSlot.milestones);

            const formattedSlot = {
              challengeType: levelSlot.subtype as ChallengeType,
              duration: getSlotDuration(levelSlot),
              id: levelSlot.id,
              milestones: formatMilestones(levelSlot.milestones, levelSlot.subtype),
              reward: `${minValue} - ${maxValue}`,
              unit: levelSlot.unit as Unit,
            };
            const isLocked = currentLevel < levelSlot.availableAtLevel;

            return {
              ...formattedSlot,
              currentWorld,
              isLocked,
              minimumLevel: levelSlot.availableAtLevel || 0,
              onPress: isLocked ? () => ({}) : handleSlotPress(formattedSlot, showOverlay),
            };
          })}
          currentLevel={level.level}
          name={`level ${level.level}`}
          onPressLeftIcon={handleNavPress}
        />
      )}
      renderOverlay={({ hideOverlay }: IToggleBlur) => (
        <ChallengeDetailsScreen
          challengeType={slot.challengeType}
          currentWorld={currentWorld}
          duration={slot.duration}
          error={error}
          isLoading={isLoading}
          milestones={slot.milestones}
          onPressCta={handleSubmitChallenge}
          onPressClose={hideOverlay}
          onPressSetUp={slot.challengeType === "meditation" ? openMeditationURL : null}
          unit={slot.unit}
        />
      )}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  currentLevel: getCurrentLevel(state),
});

const mapDispatchToProps = {
  challengeStartSuccessAction,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(ChallengesListContainer);
