import Yumatter from "@screens/member/member-services/yumatter.screen";
import React, { useState, useCallback, useMemo } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { View, ViewStyle } from "react-native";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getUserStart } from "../../../../redux/user/user.actions";
import { getUserBusiness, getUserFeatures, getUserMembershipType } from "../../../../redux/user/user.selectors";
import SmartHealth from "../../../screens/member/member-services/smart-health.screen";
import MemberServicesTabs, { Tab } from "@components/molecules/member-services-tabs/member-services-tabs";
import { MemberServiceId } from "@components/molecules/member-services-tabs/member-services.models";
import { Text } from "@atoms";
import { Style } from "@styles";
import { YUMATTER_SCREEN, SMART_HEALTH_SCREEN } from "@ids";
import { getMemberServicesDisplayState } from "@components/molecules/member-services-tabs/member-services-tab/member-services.helpers";
import { MembershipTypes } from "@redux/user/user.reducer";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IProps {
  componentId: string;
}

export type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

function MemberServicesContainer({ componentId, isGroupUser, isWellbeingAccess, features, membershipType }: Props) {
  const isInstant = membershipType === MembershipTypes.INSTANT_GROUP;

  const { shouldHideSmartHealthScreen, shouldHideYuMatterScreen } = getMemberServicesDisplayState(features, {
    membershipType,
    isGroupUser,
    isWellbeingAccess,
  });

  const defaultTab: MemberServiceId = shouldHideYuMatterScreen ? "smartHealth" : "yumatter";

  const [selectedTabId, setTab] = useState<MemberServiceId>(defaultTab);

  const handleTabChange = useCallback(
    (newTab: MemberServiceId) => () => {
      setTab(newTab);
    },
    []
  );

  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const rightTabPress = useMemo(() => handleTabChange("smartHealth"), [handleTabChange]);
  const leftTabPress = useMemo(() => handleTabChange("yumatter"), [handleTabChange]);

  const tabDetails: Tab[] = [
    {
      id: "yumatter",
      title: "YuMatter",
      handleTabClick: leftTabPress,
      shouldDisplayTab: !shouldHideYuMatterScreen,
    },
    {
      id: "smartHealth",
      title: "SmartHealth",
      handleTabClick: rightTabPress,
      shouldDisplayTab: !shouldHideSmartHealthScreen,
    },
  ];

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
        <GenericHeadingAbsolute heading="member services" onRightIconPress={handleClose} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper} testID={selectedTabId === "yumatter" ? YUMATTER_SCREEN : SMART_HEALTH_SCREEN}>
      <GenericHeadingPad />
      <View style={styles.tabsWrapper}>
        <MemberServicesTabs tabs={tabDetails} activeTabId={selectedTabId} />
      </View>
      {selectedTabId === "yumatter" ? <Yumatter /> : <SmartHealth isInstant={isInstant} />}
      <GenericHeadingAbsolute heading="member services" onRightIconPress={handleClose} />
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
    backgroundColor: "#FFFFFF",
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
