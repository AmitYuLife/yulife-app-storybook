import Yumatter from "@screens/member/member-services/yumatter.screen";
import React, { FC, useState, useCallback, useMemo } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getUserStart } from "../../../../redux/user/user.actions";
import { getUserBusiness, getUserFeatures } from "../../../../redux/user/user.selectors";
import SmartHealth from "../../../screens/member/member-services/smart-health.screen";

type Tab = "yumatter" | "smartHealth";

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const MemberServicesContainer: FC<Props> = ({ componentId, isGroupUser, isWellbeingAccess }) => {
  const [tab, setTab] = useState<Tab>("yumatter");

  const handleTabChange = useCallback(
    (newTab: Tab) => () => {
      setTab(newTab);
    },
    []
  );

  const handleEmptyPress = useCallback((): null => null, []);

  const handleClose = useCallback(() => Navigation.popToRoot(componentId), []);

  if (tab === "yumatter") {
    return (
      <Yumatter
        isGroup={isGroupUser || isWellbeingAccess}
        onPressClose={handleClose}
        onLeftTabPress={handleEmptyPress}
        onRightTabPress={useMemo(() => handleTabChange("smartHealth"), [])}
      />
    );
  }

  return (
    <SmartHealth
      onPressClose={handleClose}
      onLeftTabPress={useMemo(() => handleTabChange("yumatter"), [])}
      onRightTabPress={handleEmptyPress}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  features: getUserFeatures(state),
  isGroupUser: getUserBusiness(state).isGroup,
  isWellbeingAccess: getUserBusiness(state).isWellbeingAccess,
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(MemberServicesContainer);
