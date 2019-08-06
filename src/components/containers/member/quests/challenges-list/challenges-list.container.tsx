import { createActiveChallengeGql } from "@graphql/challenges/createActiveChallenge.gql";
import { getCurrentWorld } from "@services/utils";
import { ApolloClient } from "apollo-client";
import * as React from "react";
import { PureComponent } from "react";
import { ApolloConsumer } from "react-apollo";
import { Linking } from "react-native";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { getDailySteps } from "../../../../../redux/daily-steps/daily-steps.selectors";
import { challengeStartSuccessAction } from "../../../../../redux/levels/levels.actions";
import { getCurrentLevel } from "../../../../../redux/levels/levels.selectors";
import { BlurProvider, IToggleBlur } from "../../../../atoms";
import { ChallengeDetailsModal } from "../../../../modals";
import { ILabel } from "../../../../molecules/nav-bar/nav-bar";
import { ChallengesListScreen } from "../../../../screens";
import { formatMilestones, getSlotDuration, reduceMilestones } from "./challenges-list.helpers";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
    componentId: string;
    labels: ILabel[];
    level: GetCurrentWorld_getCurrentWorld;
    client: ApolloClient<any>;
}

type Props = IProps & ConnectedState & ConnectedDispatch;

interface IState {
    error: string;
    isLoading: boolean;
    slot: {
        challengeType: string;
        duration: string;
        id: string;
        reward: string;
        milestones: [];
        unit: string;
    };
}

class ChallengesListContainerWithClient extends PureComponent<Props, IState> {
    public state: IState = {
        error: null,
        isLoading: false,
        slot: {
            challengeType: "brisk walk",
            duration: "",
            id: "",
            milestones: [],
            reward: "",
            unit: ""
        }
    };

    public render() {
        const {
            error,
            isLoading,
            slot: { challengeType, duration, milestones, unit }
        } = this.state;
        const { currentLevel, labels, level, totalCoins } = this.props;
        const currentWorld = getCurrentWorld(level.level);

        return (
            <BlurProvider
                render={({ showOverlay }: IToggleBlur) => (
                    <ChallengesListScreen
                        challenges={level.slots.map((slot) => {
                            const formattedSlot = {
                                challengeType: slot.subtype,
                                duration: getSlotDuration(slot),
                                id: slot.id,
                                milestones: formatMilestones(slot.milestones, slot.subtype),
                                reward: `0-${reduceMilestones(slot.milestones)}`,
                                unit: slot.unit
                            };
                            const isLocked = currentLevel < slot.availableAtLevel;

                            return {
                                ...formattedSlot,
                                currentWorld,
                                isLocked,
                                minimumLevel: slot.availableAtLevel || 0,
                                onPress: isLocked ? () => ({}) : this.handleSlotPress(formattedSlot, showOverlay)
                            };
                        })}
                        currentLevel={level.level}
                        labels={labels}
                        name={`level ${level.level}`}
                        onPressLeftIcon={this.onNavPress}
                        totalCoins={totalCoins}
                    />
                )}
                renderOverlay={({ hideOverlay }: IToggleBlur) => (
                    <ChallengeDetailsModal
                        challengeType={challengeType}
                        currentWorld={currentWorld}
                        duration={duration}
                        error={error}
                        isLoading={isLoading}
                        milestones={milestones}
                        onPressCta={this.handleSubmitChallenge}
                        onPressClose={hideOverlay}
                        onPressSetUp={challengeType === "meditation" ? this.openMeditationURL : null}
                        unit={unit}
                    />
                )}
            />
        );
    }

    private openMeditationURL = async () => {
        const url = Config.MEDITATION_SETUP_URL;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    };

    private handleSubmitChallenge = () => {
        this.setState({ isLoading: true }, async () => {
            const { client } = this.props;
            const { id: levelSlotId } = this.state.slot;

            try {
                const { data } = (await client.mutate({
                    mutation: createActiveChallengeGql,
                    variables: { levelSlotId }
                })) as any;

                if (data && data.createActiveChallenge) {
                    this.props.challengeStartSuccessAction({
                        ...data,
                        initialPedometerResult: this.props.dailySteps,
                        levelSlotId
                    });
                    await this.onNavPress();
                } else {
                    this.setError();
                }
            } catch (e) {
                this.setError();
            }
        });
    };

    private setError = () => {
        this.setState({
            error: "Sorry, there was a problem starting your challenge. \n Please try again!",
            isLoading: false
        });
    };

    private handleSlotPress = (slot: any, showOverlay: () => void) => () => {
        this.setState({ slot }, showOverlay);
    };

    private onNavPress = async () => {
        await Navigation.popToRoot(this.props.componentId);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    currentLevel: getCurrentLevel(state),
    dailySteps: getDailySteps(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    challengeStartSuccessAction
};

function ChallengesListContainer(props: any) {
    return (
        <ApolloConsumer>{(client) => <ChallengesListContainerWithClient {...props} client={client} />}</ApolloConsumer>
    );
}

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(ChallengesListContainer);
