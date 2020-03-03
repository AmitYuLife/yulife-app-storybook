import { PureComponent } from "react";
import * as React from "react";
import { LargeList } from "react-native-largelist-v3";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import GetUserStats from "../../../../graphql/yuscreen/getUserStats.gql";
import { ROUTES } from "../../../../navigation/constants";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getUserStart } from "../../../../redux/user/user.actions";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import Loading from "../../../atoms/loading/loading";
import Stats from "../../../screens/member/stats/stats";

interface IProps {
    componentId: string;
}

interface IState {
    monthsAgo: number;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

class StatsContainer extends PureComponent<Props, IState> {
    public state = {
        monthsAgo: 0
    };

    public largeList: LargeList = null;

    public render() {
        return (
            <GetUserStats fetchPolicy="cache-and-network">
                {({ data, error, loading }) => {
                    if (loading) {
                        return <Loading />;
                    }

                    if (error && (!data || !data.getUserStats)) {
                        return null;
                    }
                    return (
                        <Stats
                            data={data.getUserStats}
                            onPressClose={this.handleClose}
                            onPressActivityHistory={this.onActivityHistory}
                        />
                    );
                }}
            </GetUserStats>
        );
    }

    private onActivityHistory = () => {
        Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.activityHistory,
                name: ROUTES.activityHistory
                // options: { bottomTabs }
            }
        });
    };

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state)
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(StatsContainer);
