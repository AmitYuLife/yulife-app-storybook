import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import { Navigation } from "react-native-navigation";
import ChallengesListQuery, { challengesListGql } from "../../../../../graphql/member/challengesList.gql";
import { BlurProvider } from "../../../../atoms";
import { ILabel, Images, IMAGES } from "../../../../molecules";
import { ChallengeDetailsModal } from "../../../../organisms/modals";
import { ChallengesListScreen } from "../../../../organisms/screens";

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
    handleToggleBlur: () => void;
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

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
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

    private labels: ILabel[] = [
        {
            name: "yucoin",
            onPress: (): void => null
        },
        {
            name: "challenges",
            onPress: (): void => null
        },
        {
            name: "rewards",
            onPress: (): void => null
        },
    ];

    public render() {
        return (
            <ChallengesListQuery query={challengesListGql}>
                {({ loading, error, data }) => {

                    if (loading) {
                        return <Text>LOADING</Text>;
                    }

                    if (error) {
                        return <Text>ERROR!</Text>;
                    }

                    const challenges = this.mapChallengeTemplates(data.getChallenges);
                    const {
                        challengeType,
                        duration,
                        id,
                        milestones,
                        unit
                    } = this.state;

                    return (
                        <BlurProvider
                            render={({ handleToggleBlur }) => (
                                <ChallengesListScreen
                                    challenges={challenges.map((challenge: IHandlePressChallenge) => ({
                                        ...challenge,
                                        onPress: this.handlePressChallenge({
                                            challengeType: challenge.challengeType,
                                            duration: challenge.duration,
                                            handleToggleBlur,
                                            id: challenge.id,
                                            milestones: challenge.milestones,
                                            reward: challenge.reward,
                                            unit: challenge.unit,
                                        }),
                                    }))}
                                    coinsTotal={12345}
                                    hasNotification={true}
                                    labels={this.labels}
                                    onMenuPress={this.onMenu}
                                />
                            )}
                            renderOverlay={({ handleToggleBlur }) => (
                                <ChallengeDetailsModal
                                    challengeType={challengeType}
                                    duration={duration}
                                    milestones={milestones}
                                    onPressCta={handleToggleBlur}
                                    onPressClose={handleToggleBlur}
                                    unit={unit}
                                />
                            )}
                        />
                    );
                }}
            </ChallengesListQuery>
        );
    }

    private handlePressChallenge = ({ handleToggleBlur, ...challengeProps }: IHandlePressChallenge) => {
        return () => {
            this.setState({ ...challengeProps });
            handleToggleBlur();
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

    private onMenu = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.Login",
            },
        });
    }

    private onNavPress = async (name: string) => {
        if (name === "yulife.member.DailySteps") {
            await Navigation.popToRoot(this.props.componentId);
            return;
        } else {
            try {
                await Navigation.popTo(name);
                return;
            } catch (e) {
                // TODO proper catch error
                // tslint:disable-next-line
                console.log("navigation error: ", e.message);
            }
        }

        await Navigation.push(this.props.componentId, {
            component: {
                id: name,
                name,
            },
        });
        return;
    }
}

export default ChallengesListContainer;
