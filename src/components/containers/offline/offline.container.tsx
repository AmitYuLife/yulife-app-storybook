import OfflineScreen from "@screens/offline/offline.screen";
import { IReduxState } from "@redux/_core/reducers";
import { checkConnection } from "@redux/app/app.actions";
import { getCopy } from "@redux/copy/copy.selectors";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import * as React from "react";
import { connect } from "react-redux";

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;
type Props = IProps & ConnectedDispatch & ConnectedState;

const AppOfflineContainer: React.FC<Props> = ({ copy, level, checkConnection: onCTA }) => (
  <OfflineScreen copy={copy} level={level} onPress={onCTA} />
);

const mapStateToProps = (state: IReduxState) => ({
  level: getCurrentLevel(state),
  copy: getCopy(state, "offline"),
});

const mapDispatchToProps = {
  checkConnection,
};

export default connect<ConnectedState>(mapStateToProps, mapDispatchToProps)(AppOfflineContainer);
