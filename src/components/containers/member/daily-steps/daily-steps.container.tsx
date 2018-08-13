import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import { Navigation } from "react-native-navigation";
import DailyStepsQuery, { dailyStepsGql } from "../../../../graphql/member/dailySteps.gql";
import { setToken } from "../../../../services/storage";
import { Loading } from "../../../atoms";
import { ILabel } from "../../../molecules/nav-bar/nav-bar";
import { DailyStepsScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId?: string;
}

class DailyStepsContainer extends PureComponent<IProps> {
    // private COMPONENT_ID = "yulife.member.DailySteps";
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
            <DailyStepsQuery
                fetchPolicy="cache-first" // TODO this should be cache-only!
                query={dailyStepsGql}
            >
                {({ error, loading, data }) => {
                    if (error) {
                        return <Text> ERROR!!! </Text>;
                    }

                    if (loading) {
                        return <Loading/>;
                    }

                    const { userStatus } = data.getCurrentUser;

                    return (
                        <DailyStepsScreen
                            coinsToday={5}
                            coinsTotal={userStatus.totalCoins}
                            currentStreak={2}
                            hasNotification={true}
                            isDoneToday={false}
                            labels={this.labels}
                            maxStreak={4}
                            onCtaPress={this.onCta}
                            onMenuPress={this.onMenu}
                            onStreakPress={this.onStreak}
                            steps={12345}
                        />
                    );
                }}
            </DailyStepsQuery>
        );
    }

    private onCta = () => {
        setToken("");
        // Navigation.push(this.props.componentId, {
        //     component: {
        //         name: "yulife.member.ChallengesList",
        //     },
        // });
    }

    private onMenu = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.member.ChallengesList",
            },
        });
    }

    private onStreak = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.member.ChallengesList",
            },
        });
    }

    // private onNavPress = (name: string) => {
    //     Navigation.push(this.props.componentId, {
    //         component: {
    //             id: name,
    //             name,
    //         },
    //     });
    // }
}

export default DailyStepsContainer;
