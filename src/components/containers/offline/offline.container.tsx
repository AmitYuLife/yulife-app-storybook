import { IReduxState } from "@redux/_core/reducers";
import { checkConnection } from "@redux/app/app.actions";
import { getCopy } from "@redux/copy/copy.selectors";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import * as React from "react";
import { PureComponent } from "react";
import { connect } from "react-redux";
import OfflineScreen from "../../screens/offline/offline.screen";

interface IProps {
    componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;
type Props = IProps & ConnectedDispatch & ConnectedState;

class AppOfflineContainer extends PureComponent<Props> {
    public render() {
        return <OfflineScreen copy={this.props.copy} level={this.props.level} onPress={this.props.checkConnection} />;
    }
}

const mapStateToProps = (state: IReduxState) => ({
    level: getCurrentLevel(state),
    copy: getCopy(state, "offline")
});

const mapDispatchToProps = {
    checkConnection
};

export default connect<ConnectedState>(
    mapStateToProps,
    mapDispatchToProps
)(AppOfflineContainer);
