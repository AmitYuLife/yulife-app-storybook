import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import { Navigation } from "react-native-navigation";
import ChallengesListQuery, { challengesListGql } from "../../../../../graphql/member/challengesList.gql";
import { ChallengeTile, ILabel, Images, IMAGES } from "../../../../molecules";
import { ChallengesListScreen } from "../../../../organisms/screens";
import { ChallengeType } from "../../../../organisms/screens/member/challenges/challenge-progress/challenge-progress";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

// const getChallengeMilestones = (milestones: any[]): any[] =>
//     milestones.map((milestone) => ({
//         reward: milestone.coins,
//         target: milestone.target[0],
//     }));

export const getChallengeImage = (challengeType: ChallengeType): Images => {
    switch (challengeType) {
        case "meditation":
            return IMAGES.BIRD;

        case "short stroll":
        case "brisk walk":
            return IMAGES.SQUIRREL;

        case "long walk":
            return IMAGES.ELEPHANT;

        case "day walk":
            return IMAGES.OSTRICH;

        default:
            return IMAGES.BIRD;
    }
};

const reduceMilestones = (milestones: any[]): number =>
    milestones.reduce((sum, milestone) => sum + milestone.coins, 0);

const secondsToMinutes = (seconds: number): number => Math.floor(seconds / 60);

const getChallengeDuration = (challenge: any): string => {
    switch (challenge.subtype) {
        case "meditation":
            // tslint:disable-next-line
            return `${secondsToMinutes(challenge.milestones[0].target[0])}-${secondsToMinutes(challenge.milestones[2].target[0])} mins`;

        case "day walk":
            return "all day";

        default:
            return `${secondsToMinutes(challenge.timelimit)} mins`;
    }
};

class ChallengesListContainer extends PureComponent<IProps> {

    private labels: ILabel[] = [
        {
            name: "yucoin",
            onPress: (): void => this.onNavPress("yulife.member.DailySteps"),
        },
        {
            name: "challenges",
            onPress: (): void => this.onNavPress("yulife.member.ChallengesList"),
        },
        {
            name: "rewards",
            onPress: (): void => this.onNavPress("yulife.member.Rewards"),
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

                    return (
                        <ChallengesListScreen
                            challenges={this.mapChallengeTemplates(data.getChallenges)}
                            coinsTotal={12345}
                            hasNotification={true}
                            labels={this.labels}
                            onMenuPress={this.onMenu}
                        />
                    );
                }}
            </ChallengesListQuery>
        );
    }

    private mapChallengeTemplates = (challengeTemplates: any) => {
        return challengeTemplates.map((template: any) => ({
            challengeType: template.subtype,
            duration: getChallengeDuration(template),
            image: getChallengeImage(template.subtype),
            reward: `0-${reduceMilestones(template.milestones)}`,
            unit: template.unit,
        }));
    }

    private onMenu = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.Login"
            }
        });
    }

    private onNavPress = (name: string) => {
        Navigation.push(this.props.componentId, {
            component: { name }
        });
    }
}

export default ChallengesListContainer;
