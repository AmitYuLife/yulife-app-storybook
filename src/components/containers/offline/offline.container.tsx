import OfflineScreen from "@screens/offline/offline.screen";
import { checkConnection } from "@redux/app/app.actions";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
  componentId: string;
}

const AppOfflineContainer: React.FC<IProps> = () => {
  const level = useSelector(getCurrentLevel);
  const dispatch = useDispatch();

  const handlePress = React.useCallback(() => dispatch(checkConnection()), []);

  return <OfflineScreen level={level} onPress={handlePress} />;
};

export default React.memo(AppOfflineContainer);
