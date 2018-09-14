import moment from "moment";
import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import { Navigation } from "react-native-navigation";
import { GetActivityHistory_data } from "../../../../graphql/_core/schema";
import GetActivityHistoryQuery, { getActivityHistoryGql } from "../../../../graphql/user/getActivityHistory.gql";
import Loading from "../../../atoms/loading/loading";
import { ActivityHistoryLevels } from "../../../screens";

interface IProps {
    componentId: string;
}

export default class ActivityHistoryContainer extends PureComponent<IProps> {
    public render() {
        return (
            <GetActivityHistoryQuery query={getActivityHistoryGql} fetchPolicy="network-only">
                {({ error, loading, data }) => {
                    if (loading) {
                        return <Loading />;
                    }

                    if (error) {
                        return <Text> ERROR!!! </Text>;
                    }

                    return <ActivityHistoryLevels onPressClose={this.handleClose} items={this.formatData(data.data)} />;
                }}
            </GetActivityHistoryQuery>
        );
    }

    private formatData = (data: GetActivityHistory_data[]) => {
        return data.map(({ date, passive, challenge }) => {
            const formattedDate = moment(date);
            const dayOfMonth = formattedDate.isValid() ? formattedDate.format("DD") : "";
            const dayOfWeek = formattedDate.isValid() ? formattedDate.format("ddd").toUpperCase() : "";

            const challenges =
                challenge && challenge.data
                    ? [
                          {
                              earned: challenge.yuCoinAwarded || 0,
                              milestones: (challenge.milestoneLog && challenge.milestoneLog.length) || 0,
                              name: challenge.challengeTemplate && challenge.challengeTemplate.subtype,
                              score: `${(challenge && challenge.data && challenge.data[0]) || 0} steps`
                          }
                      ]
                    : [];
            return {
                challenges,
                dayOfMonth,
                dayOfWeek,
                level: null,
                steps: (passive && passive.data && passive.data[0]) || 0
            };
        });
    }

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    }
}
