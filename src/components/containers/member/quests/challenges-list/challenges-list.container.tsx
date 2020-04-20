import { GQL_MUTATION_CREATE_ACTIVE_CHALLENGE, CreateActiveChallengeMutationTuple } from "@graphql/challenges";
import { getCurrentWorld } from "@services/utils";
import { ApolloClient } from "apollo-client";
import React, { FC, useState, useMemo, useCallback } from "react";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { challengeStartSuccessAction } from "../../../../../redux/levels/levels.actions";
import { getCurrentLevel } from "../../../../../redux/levels/levels.selectors";
import { BlurProvider, IToggleBlur } from "../../../../atoms";
import { ILabel } from "../../../../molecules/nav-bar/nav-bar";
import { ChallengesListScreen, ChallengeDetailsScreen } from "../../../../screens";
import { formatMilestones, getSlotDuration, reduceMilestones } from "./challenges-list.helpers";
import { useMutation } from "@apollo/react-hooks";
import { handleLinkPress } from "@services/app-link";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
  componentId: string;
  labels: ILabel[];
  level: GetCurrentWorld_getCurrentWorld;
  client: ApolloClient<any>;
}

type Props = IProps & ConnectedState & ConnectedDispatch;

const openMeditationURL = handleLinkPress(Config.MEDITATION_SETUP_URL);

const ChallengesListContainer: FC<Props> = ({
  currentLevel,
  labels,
  level,
  totalCoins,
  componentId,
  challengeStartSuccessAction: dispatchChallengeStartSuccess
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrorState] = useState<null | string>(null);
  const [slot, setSlot] = useState({
    challengeType: "brisk walk",
    duration: "",
    id: "",
    milestones: [],
    reward: "",
    unit: ""
  });

  const [createActiveChallenge]: CreateActiveChallengeMutationTuple = useMutation(
    GQL_MUTATION_CREATE_ACTIVE_CHALLENGE,
    {
      variables: { levelSlotId: slot.id }
    }
  );

  const currentWorld = useMemo(() => getCurrentWorld(level.level), [level.level]);

  const setError = useCallback(() => {
    setErrorState("Sorry, there was a problem starting your challenge. \n Please try again!");
    setIsLoading(false);
  }, []);

  const handleSlotPress = useCallback(
    (newSlot: typeof slot, showOverlay: () => void) => () => {
      setSlot(newSlot);
      showOverlay();
    },
    []
  );

  const handleNavPress = useCallback(() => Navigation.popToRoot(componentId), []);

  const handleSubmitChallenge = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await createActiveChallenge();

      if (data && data.createActiveChallenge) {
        dispatchChallengeStartSuccess({
          ...data,
          levelSlotId: slot.id
        });
        handleNavPress();
      } else {
        setError();
      }
    } catch (e) {
      setError();
    }
  }, []);

  return (
    <BlurProvider
      render={({ showOverlay }: IToggleBlur) => (
        <ChallengesListScreen
          challenges={level.slots.map((levelSlot) => {
            const formattedSlot = {
              challengeType: levelSlot.subtype,
              duration: getSlotDuration(levelSlot),
              id: levelSlot.id,
              milestones: formatMilestones(levelSlot.milestones, levelSlot.subtype),
              reward: `0-${reduceMilestones(levelSlot.milestones)}`,
              unit: levelSlot.unit
            };
            const isLocked = currentLevel < levelSlot.availableAtLevel;

            return {
              ...formattedSlot,
              currentWorld,
              isLocked,
              minimumLevel: levelSlot.availableAtLevel || 0,
              onPress: isLocked ? () => ({}) : handleSlotPress(formattedSlot, showOverlay)
            };
          })}
          currentLevel={level.level}
          labels={labels}
          name={`level ${level.level}`}
          onPressLeftIcon={handleNavPress}
          totalCoins={totalCoins}
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
  totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
  challengeStartSuccessAction
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(ChallengesListContainer);
