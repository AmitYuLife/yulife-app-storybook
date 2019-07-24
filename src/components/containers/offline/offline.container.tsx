import { IReduxState } from "@redux/_core/reducers";
import * as React from "react";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { getCurrentLevel } from "../../../redux/levels/levels.selectors";
import OfflineScreen from "../../screens/offline/offline.screen";

interface IProps {
    componentId: string;
    level: number;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

class AppOfflineContainer extends PureComponent<IProps> {
    public render() {
        const { level } = this.props;
        return <OfflineScreen level={level} />;
    }
}

const mapStateToProps = (state: IReduxState) => ({
    level: getCurrentLevel(state)
});

export default connect<ConnectedState>(mapStateToProps)(AppOfflineContainer);
