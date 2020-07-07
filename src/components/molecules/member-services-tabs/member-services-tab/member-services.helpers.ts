import { MembershipTypes } from "@redux/user/user.reducer";

interface Features {
  hideYuMatterScreen?: boolean;
  hideSmartHealthScreen?: boolean;
}

interface GroupStatus {
  isGroupUser: boolean;
  isWellbeingAccess: boolean;
  membershipType: string;
}

export function getMemberServicesDisplayState(features: Features, groupStatus: GroupStatus) {
  const { isGroupUser, isWellbeingAccess, membershipType } = groupStatus;
  const { hideYuMatterScreen, hideSmartHealthScreen } = features;

  const isAlphaUser = membershipType === MembershipTypes.YULIFE_ALPHA;
  const isGroup = isGroupUser || isWellbeingAccess;

  const res = {
    shouldHideYuMatterScreen: false,
    shouldHideSmartHealthScreen: false,
  };

  if (isAlphaUser) {
    return {
      shouldHideYuMatterScreen: true,
      shouldHideSmartHealthScreen: true,
    };
  }

  if (typeof hideYuMatterScreen === "boolean" && hideYuMatterScreen) {
    res.shouldHideYuMatterScreen = true;
  }

  if (typeof hideSmartHealthScreen !== "boolean" && !isGroup) {
    res.shouldHideSmartHealthScreen = true;
  } else if (typeof hideSmartHealthScreen === "boolean" && hideSmartHealthScreen) {
    res.shouldHideSmartHealthScreen = true;
  }

  return res;
}
