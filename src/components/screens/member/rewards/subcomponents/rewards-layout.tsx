import React, { ReactNode, useState } from "react";
import { StyleSheet, ViewStyle, View, Platform } from "react-native";
import { REWARDS_SCREEN } from "@ids";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Box, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import { useUserFeatures } from "@hooks";
import { t } from "@locale";

const WRAPPER_MARGIN_TOP = Platform.select({
  ios: 0,
  android: -20,
});
interface Props {
  children: ReactNode;
  onLeftMenuPress: () => void;
  hasBackButton?: boolean;
  Overlay?: ReactNode | null;
  showNavbar?: boolean;
  showTopBar?: boolean;
}

export function RewardsListLayout({ showNavbar = true, showTopBar, ...props }: Props) {
  const [activeTab, setActiveTab] = useState(1);
  const { children, onLeftMenuPress, hasBackButton, Overlay } = props;
  const { tempGameShowCouponsTab } = useUserFeatures();

  return (
    <View style={styles.wrapper} testID={REWARDS_SCREEN}>
      {!showTopBar ? null : (
        <>
          <GenericHeadingPad />
          {!tempGameShowCouponsTab ? null : (
            <>
              {/*@TODO: Another RewardsTab, ChipList, Tabs... this will need to be merged into a single component in the future!*/}
              <Box flexDirection="row" ml={15} gap={10}>
                {MENUS().map(({ id, label }) => {
                  const isActive = activeTab === id;
                  return (
                    <TouchableOpacityWithDelay
                      onPress={() => setActiveTab(id)}
                      key={id}
                      style={[styles.button, isActive ? styles.buttonActive : styles.buttonInactive]}
                    >
                      <TextTemplate type="b2b" color={isActive ? "white" : "#464647"}>
                        {label}
                      </TextTemplate>
                    </TouchableOpacityWithDelay>
                  );
                })}
              </Box>
            </>
          )}
        </>
      )}
      <View style={styles.listWrapper}>{children}</View>
      {!showTopBar ? null : (
        <TopBarAbsolute leftIcon={hasBackButton ? LeftIcon.BACK : LeftIcon.MENU} onPressLeftIcon={onLeftMenuPress} />
      )}
      {Overlay}
      {showNavbar ? <NavBar activeIndex={4} /> : null}
    </View>
  );
}

const MENUS = () => [
  { id: 1, label: t("history") },
  { id: 2, label: t("coupons") },
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  } as ViewStyle,
  listWrapper: {
    flex: 1,
  } as ViewStyle,
  rewardTabsWrapper: {
    alignItems: "center",
    marginTop: WRAPPER_MARGIN_TOP,
  } as ViewStyle,
  button: {
    paddingHorizontal: Style.adjust(10),
    paddingVertical: Style.adjust(3),
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonActive: {
    borderColor: "#F43E8E",
    backgroundColor: "#CC0D6E",
  },
  buttonInactive: {
    borderColor: "#E3E3E1",
    backgroundColor: Colours.neutral.white,
  },
});
