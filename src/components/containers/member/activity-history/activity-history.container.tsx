import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import { Navigation } from "react-native-navigation";
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

                    return (
                        <ActivityHistoryLevels
                            onPressClose={this.handleClose}
                            items={(data.getActivityHistoryWithLevels || [])}
                        />
                    );
                }}
            </GetActivityHistoryQuery>
        );
    }

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    }
}
