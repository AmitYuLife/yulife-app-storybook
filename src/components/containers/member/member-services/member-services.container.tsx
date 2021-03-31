import React, { useCallback, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import Yumatter from "@screens/member/member-services/yumatter.screen";
import { IReduxState } from "@redux/_core/reducers";
import { getUserStart } from "@redux/user/user.actions";
import { getUserBusiness, getUserFeatures, getUserMembershipType } from "@redux/user/user.selectors";
import SmartHealth from "@screens/member/member-services/smart-health.screen";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";
import { YUMATTER_SCREEN, SMART_HEALTH_SCREEN } from "@ids";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { SwitchTab } from "@components/molecules";
import { getMemberServicesDisplayState } from "./member-services.helpers";

interface IProps {
  componentId: string;
}

export type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

function MemberServicesContainer({ componentId, isGroupUser, isWellbeingAccess, features, membershipType }: Props) {
  const { shouldHideSmartHealthScreen, shouldHideYuMatterScreen } = getMemberServicesDisplayState(features, {
    membershipType,
    isGroupUser,
    isWellbeingAccess,
  });

  const defaultTab: number = shouldHideYuMatterScreen ? 1 : 0;

  const TABS = useMemo(
    () => [
      {
        title: "YuMatter",
        testID: YUMATTER_SCREEN,
        component: <Yumatter />,
        enabled: !shouldHideYuMatterScreen,
      },
      {
        title: "YuDoc",
        testID: SMART_HEALTH_SCREEN,
        component: <SmartHealth />,
        enabled: !shouldHideSmartHealthScreen,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  if (shouldHideYuMatterScreen && shouldHideSmartHealthScreen) {
    return (
      <View>
        <GenericHeadingPad />
        <View style={styles.notEnrollredWrapper}>
          <Text>
            It looks like your team has not been enrolled in additional member services. To see what kind of coverage
            your employer has purchased, please check the Yu screen in the YuLife app navigation bar.
          </Text>
        </View>
        <GenericHeadingAbsolute logo="yulife" onRightIconPress={handleClose} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.tabsWrapper}>
        <SwitchTab tabs={TABS} paddingHorizontal={24} defaultSelected={defaultTab} />
      </View>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={handleClose} />
    </View>
  );
}

const mapStateToProps = (state: IReduxState) => ({
  features: getUserFeatures(state),
  isGroupUser: getUserBusiness(state)?.isGroup,
  isWellbeingAccess: getUserBusiness(state)?.isWellbeingAccess,
  membershipType: getUserMembershipType(state),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(MemberServicesContainer);

const styles = {
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  tabsWrapper: {
    alignItems: "center",
    marginTop: Style.adjust(17),
  } as ViewStyle,
  notEnrollredWrapper: {
    flexDirection: "column",
    paddingHorizontal: Style.adjust(16),
    paddingVertical: Style.adjust(16),
  } as ViewStyle,
};
