import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import ChallengesListQuery, { challengesListGql } from "../../../../../graphql/member/challengesList.gql";
import { BlurProvider, Loading } from "../../../../atoms";
import { ChallengeDetailsModal } from "../../../../modals";
import { Images, IMAGES } from "../../../../molecules";
import { ChallengesListScreen } from "../../../../screens";
import { SideEffect } from "../../../../../typings";

interface IChallengeDetailsMilestone {
    reward: number;
    target: number;
}

interface IHandlePressChallenge {
    challengeType: string;
    duration: string;
    id: string;
    reward: string;
    milestones: IChallengeDetailsMilestone[];
    unit: string;
    showOverlay: SideEffect;
}

const getChallengeMilestones = (milestones: any[]): IChallengeDetailsMilestone[] =>
    milestones.map((milestone) => ({
        reward: milestone.coins,
        target: milestone.target[0],
    }));

export const getChallengeImage = (challengeType: string): Images => {
    switch (challengeType) {
        case "meditation":
            return IMAGES.BIRD;

        case "short stroll":
        case "brisk walk":
            return IMAGES.SQUIRREL;

        case "long walk":
            return IMAGES.OSTRICH;

        case "day walk":
            return IMAGES.ELEPHANT;

        default:
            return IMAGES.BIRD;
    }
};

const reduceMilestones = (milestones: any[]): number => milestones.reduce((sum, milestone) => sum + milestone.coins, 0);

const secondsToMinutes = (seconds: number): number => Math.floor(seconds / 60);

const getChallengeDuration = (challenge: any): string => {
    switch (challenge.subtype) {
        case "meditation":
            // tslint:disable-next-line
            return `${secondsToMinutes(challenge.milestones[0].target[0])}-${secondsToMinutes(
                challenge.milestones[2].target[0],
            )} mins`;

        case "day walk":
            return "all day";

        default:
            return `${secondsToMinutes(challenge.timelimit)} mins`;
    }
};

interface IProps {
    isLoaded: boolean;
    onModalToggle: SideEffect<boolean>;
}

interface IState {
    challengeType: string;
    duration: string;
    id: string;
    reward: string;
    milestones: IChallengeDetailsMilestone[];
    unit: string;
}

class ChallengesListContainer extends PureComponent<IProps, IState> {
    public state: IState = {
        challengeType: "brisk walk",
        duration: "",
        id: "",
        milestones: [],
        reward: "",
        unit: "",
    };

    public render() {
        const { isLoaded } = this.props;

        return (
            <ChallengesListQuery query={challengesListGql} skip={!isLoaded}>
                {({ loading, error, data }) => {
                    if (loading || !isLoaded) {
                        return <Loading />;
                    }

                    if (error) {
                        return <Text>ERROR!</Text>;
                    }

                    const challenges = this.mapChallengeTemplates(data.getChallenges);
                    const {
                        challengeType,
                        duration,
                        // id,
                        milestones,
                        unit,
                    } = this.state;

                    return (
                        <BlurProvider
                            render={({ showOverlay }) => (
                                <ChallengesListScreen
                                    challenges={challenges.map((challenge: IHandlePressChallenge) => ({
                                        ...challenge,
                                        onPress: this.handlePressChallenge({
                                            challengeType: challenge.challengeType,
                                            duration: challenge.duration,
                                            id: challenge.id,
                                            milestones: challenge.milestones,
                                            reward: challenge.reward,
                                            showOverlay,
                                            unit: challenge.unit,
                                        }),
                                    }))}
                                />
                            )}
                            renderOverlay={({ hideOverlay }) => (
                                <ChallengeDetailsModal
                                    challengeType={challengeType}
                                    duration={duration}
                                    milestones={milestones}
                                    onPressCta={hideOverlay}
                                    onPressClose={() => {
                                        this.props.onModalToggle(false);
                                        hideOverlay();
                                    }}
                                    unit={unit}
                                />
                            )}
                        />
                    );
                }}
            </ChallengesListQuery>
        );
    }

    private handlePressChallenge = ({ showOverlay, ...challengeProps }: IHandlePressChallenge) => {
        return () => {
            this.setState({ ...challengeProps });
            this.props.onModalToggle(true);
            showOverlay();
        };
    }

    private mapChallengeTemplates = (challengeTemplates: any) => {
        return challengeTemplates.map((template: any) => ({
            challengeType: template.subtype,
            duration: getChallengeDuration(template),
            image: getChallengeImage(template.subtype),
            milestones: getChallengeMilestones(template.milestones),
            reward: `0-${reduceMilestones(template.milestones)}`,
            unit: template.unit,
        }));
    }

    // private onNavPress = async (name: string) => {
    //     if (name === "yulife.member.DailySteps") {
    //         await Navigation.popToRoot(this.props.componentId);
    //         return;
    //     } else {
    //         try {
    //             await Navigation.popTo(name);
    //             return;
    //         } catch (e) {
    //             // TODO proper catch error
    //             // tslint:disable-next-line
    //             console.log("navigation error: ", e.message);
    //         }
    //     }

    //     await Navigation.push(this.props.componentId, {
    //         component: {
    //             id: name,
    //             name,
    //         },
    //     });
    //     return;
    // }
}

export default ChallengesListContainer;
