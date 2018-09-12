import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { SideEffect } from "../../../../../typings";
import { BlurProvider } from "../../../../atoms";
import { ChallengeDetailsModal } from "../../../../modals";
import { ILabel } from "../../../../molecules/nav-bar/nav-bar";
import { ChallengesListScreen } from "../../../../screens";
import { formatMilestones, getSlotDuration, reduceMilestones } from "./challenges-list.helpers";

interface IConnectedState {
    totalCoins: number;
}

interface IProps {
    componentId: string;
    level: GetCurrentWorld_getCurrentWorld;
    onNavBarIndexChange: SideEffect<number>;
}

type Props = IProps & IConnectedState;

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

    private labels: ILabel[] = [
        {
            name: "yucoin",
            onPress: () => {
                this.props.onNavBarIndexChange(0);
                this.onNavPress();
            }
        },
        {
            name: "quest",
            onPress: () => {
                this.props.onNavBarIndexChange(1);
                this.onNavPress();
            }
        },
        {
            name: "rewards",
            onPress: () => {
                this.props.onNavBarIndexChange(2);
                this.onNavPress();
            }
        }
    ];

    public render() {
        const { level, totalCoins } = this.props;
        const {
            slot: { challengeType, duration, milestones, unit }
        } = this.state;

        return (
            <BlurProvider
                render={({ showOverlay }) => (
                    <ChallengesListScreen
                        challenges={level.slots.map((slot) => {
                            const formattedSlot = {
                                challengeType: slot.subtype,
                                duration: getSlotDuration(slot),
                                milestones: formatMilestones(slot.milestones, slot.subtype),
                                reward: `0-${reduceMilestones(slot.milestones)}`,
                                unit: slot.unit
                            };

                            return {
                                ...formattedSlot,
                                isLocked: slot.subtype !== "short stroll", // TODO: this should be base on currentLevel
                                minimumLevel: slot.availableAtLevel || 0,
                                onPress: this.handleSlotPress(formattedSlot, showOverlay)
                            };
                        })}
                        labels={this.labels}
                        name={`level ${level.level}`}
                        onPressLeftIcon={this.onNavPress}
                        totalCoins={totalCoins}
                    />
                )}
                renderOverlay={({ hideOverlay }) => (
                    <ChallengeDetailsModal
                        challengeType={challengeType}
                        duration={duration}
                        milestones={milestones}
                        onPressCta={hideOverlay}
                        onPressClose={() => {
                            hideOverlay();
                        }}
                        unit={unit}
                    />
                )}
            />
        );
    }

    private handleSlotPress = (slot: any, showOverlay: () => void) => () => {
        if (slot.challengeType === "short stroll") {
            this.setState({ slot }, showOverlay);
        }
    }

    private onNavPress = async () => {
        await Navigation.popToRoot(this.props.componentId);
    }
}

const mapStateToProps = (state: IReduxState) => ({
    totalCoins: getTotalCoins(state)
});

export default connect<IConnectedState>(mapStateToProps)(ChallengesListContainer);
