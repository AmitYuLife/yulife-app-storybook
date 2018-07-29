import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { ChallengeTile, ILabel } from "../../../../molecules";
import { ChallengesListScreen } from "../../../../organisms/screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

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
            <ChallengesListScreen
                challenges={[
                    {
                        activity: "brisk walk",
                        duration: "10",
                        image: ChallengeTile.Images.SQUIRREL,
                        reward: "0-3",
                    },
                    {
                        activity: "long walk",
                        duration: "30",
                        image: ChallengeTile.Images.OSTRICH,
                        reward: "0-6",
                    },
                    {
                        activity: "short stroll",
                        duration: "5",
                        image: ChallengeTile.Images.ELEPHANT,
                        reward: "0-1",
                    },
                    {
                        activity: "meditation",
                        duration: "3-10",
                        image: ChallengeTile.Images.BIRD,
                        reward: "0-3",
                    }
                ]}
                coinsTotal={12345}
                hasNotification={true}
                labels={this.labels}
                onMenuPress={this.onMenu}
            />
        );
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
