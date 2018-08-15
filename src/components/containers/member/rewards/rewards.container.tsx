import React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import GetRewardsQuery, { getRewardsGql } from "../../../../graphql/rewards/getRewards.gql";
import { Loading } from "../../../atoms";

class RewardsContainer extends PureComponent<{}> {
    public render() {
        return (
            <GetRewardsQuery
                fetchPolicy="cache-first"
                query={getRewardsGql}
            >
                {({ error, loading }) => {
                    if (error) {
                        return <Text> ERROR!!! </Text>;
                    }

                    if (loading) {
                        return <Loading />;
                    }

                    return (
                        null
                    );
                }}
            </GetRewardsQuery>
        );
    }
}

export default RewardsContainer;
