import React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import DailyStepsQuery, { dailyStepsGql } from "../../../../graphql/member/dailySteps.gql";
import { setToken } from "../../../../services/storage";
import { Loading } from "../../../atoms";
import { DailyStepsScreen } from "../../../screens";

class DailyStepsContainer extends PureComponent<{}> {
    public render() {
        return (
            <DailyStepsQuery
                fetchPolicy="cache-first" // TODO this should be cache-only!
                query={dailyStepsGql}
            >
                {({ error, loading }) => {
                    if (error) {
                        return <Text> ERROR!!! </Text>;
                    }

                    if (loading) {
                        return <Loading />;
                    }

                    return (
                        <DailyStepsScreen
                            coinsToday={5}
                            currentStreak={2}
                            isDoneToday={false}
                            maxStreak={4}
                            onCtaPress={this.onCta}
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

    private onStreak = () => {
        // console.log("");
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
