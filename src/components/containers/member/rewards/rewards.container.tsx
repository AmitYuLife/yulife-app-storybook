import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import GetRewardsQuery, { getRewardsGql } from "../../../../graphql/rewards/getRewards.gql";
import { Loading } from "../../../atoms";
import { RewardsListScreen } from "../../../screens";

interface IProps {
    isLoaded: boolean;
}

class RewardsContainer extends PureComponent<IProps> {
    public render() {
        const { isLoaded } = this.props;

        return (
            <GetRewardsQuery fetchPolicy="cache-first" ssr={false} query={getRewardsGql} skip={!isLoaded}>
                {({ error, loading, data, refetch }) => {
                    if (loading || !isLoaded) {
                        return <Loading />;
                    }

                    if (error) {
                        return <Text> ERROR!!! </Text>;
                    }

                    return (
                        <RewardsListScreen
                            data={data.getRewards}
                            onLeftTabPress={refetch}
                            onRightTabPress={() => null}
                            onItemPress={() => null}
                        />
                    );
                }}
            </GetRewardsQuery>
        );
    }
}

export default RewardsContainer;
