import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { MODALS } from "../../../../../navigation/routes";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { challengeStartAction, ChallengeStartAction } from "../../../../../redux/levels/levels.actions";
import { currentLevelSelector } from "../../../../../redux/levels/levels.selectors";
import { BlurProvider, IToggleBlur } from "../../../../atoms";
import { ChallengeDetailsModal } from "../../../../modals";
import { ILabel } from "../../../../molecules/nav-bar/nav-bar";
import { ChallengesListScreen } from "../../../../screens";
import { formatMilestones, getSlotDuration, reduceMilestones } from "./challenges-list.helpers";

interface IConnectedState {
    currentLevel: number;
    totalCoins: number;
}

interface IConnectedDispatch {
    challengeStartAction: ChallengeStartAction;
}

interface IProps {
    componentId: string;
    labels: ILabel[];
    level: GetCurrentWorld_getCurrentWorld;
}

type Props = IProps & IConnectedState & IConnectedDispatch;

interface IState {
    slot: {
        challengeType: string;
        duration: string;
        id: string;
        reward: string;
        milestones: [];
        unit: string;
    };
}

class ChallengesListContainer extends PureComponent<Props, IState> {
    public state: IState = {
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
        return <BlurProvider render={this.renderScreen} renderOverlay={this.renderOverlay} />;
    }

    private renderScreen = ({ showOverlay }: IToggleBlur) => {
        const { currentLevel, labels, level, totalCoins } = this.props;
        const currentWorld = getCurrentWorld(level.level);

        return (
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
        );
    };

    private renderOverlay = ({ hideOverlay }: IToggleBlur) => {
        const {
            slot: { challengeType, duration, milestones, unit }
        } = this.state;
        const currentWorld = getCurrentWorld(this.props.level.level);

        return (
            <ChallengeDetailsModal
                challengeType={challengeType}
                currentWorld={currentWorld}
                duration={duration}
                milestones={milestones}
                onPressCta={this.handleSubmitChallenge}
                onPressClose={hideOverlay}
                onPressSetUp={challengeType === "meditation" ? this.showMeditationSetUpModal : null}
                unit={unit}
            />
        );
    };

    private showMeditationSetUpModal = () => {
        Navigation.showModal({
            component: {
                id: MODALS.meditationSetUp,
                name: MODALS.meditationSetUp
            }
        });
    };

    private handleSubmitChallenge = async () => {
        const { id: levelSlotId } = this.state.slot;
        this.props.challengeStartAction({ levelSlotId });
        await this.onNavPress();
    };

    private handleSlotPress = (slot: any, showOverlay: () => void) => () => {
        this.setState({ slot }, showOverlay);
    };

    private onNavPress = async () => {
        await Navigation.popToRoot(this.props.componentId);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    currentLevel: currentLevelSelector(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    challengeStartAction
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(ChallengesListContainer);
