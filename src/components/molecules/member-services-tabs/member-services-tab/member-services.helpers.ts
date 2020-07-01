interface Features {
  hideYuMatterScreen?: boolean;
  hideSmartHealthScreen?: boolean;
}

interface GroupStatus {
  isGroupUser: boolean;
  isWellbeingAccess: boolean;
}

export function getMemberServicesDisplayState(features: Features, groupStatus: GroupStatus) {
  const { isGroupUser, isWellbeingAccess } = groupStatus;
  const { hideYuMatterScreen, hideSmartHealthScreen } = features;

  const isGroup = isGroupUser || isWellbeingAccess;

  const res = {
    shouldHideYuMatterScreen: false,
    shouldHideSmartHealthScreen: false,
  };

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
