import React, { useCallback, useState } from "react";
import { ScrollView, View, LayoutChangeEvent } from "react-native";
import { TopBar, NavBar } from "@molecules/index";
import styles from "./yu-screen.styles";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import { ProductType } from "@containers/member/yu-screen/yu-screen-products.container";
import { IAvatar } from "./avatar-builder/avatar.types";
import { YUSCREEN } from "@ids";
import { EarnRateButton, CharmsSection, YuScreenHeader, EmployerBenefits } from "./subcomponents";
import { AvatarSection } from "./subcomponents/avatar-section/avatar-section";

interface IProps {
  level: number;
  totalCoins: number;
  earnRate: number;
  hasNotification: boolean;
  isAvatarCreated: boolean;
  loading: boolean;
  userName: string;
  avatarUrl: string;
  avatarFromLocal: IAvatar;
  products: GetYulifer_getYulifer_products;
  onUnlockPress: () => void;
  onEditPress: () => void;
  onLeftMenuPress: () => void;
  onEarnRatePress: () => void;
  onProductPress: (
    product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
    productType: ProductType
  ) => () => void;
}

const SANE_SECTION_TITLE_WIDTH_DEFAULT = 116;

const YuScreen = (props: IProps) => {
  const {
    level,
    userName,
    totalCoins,
    isAvatarCreated,
    avatarUrl,
    avatarFromLocal,
    loading,
    products: { personal: productsPersonal, employer: productsEmployer, charms: productsCharms },
    earnRate,
    hasNotification,
    onUnlockPress,
    onLeftMenuPress,
    onEditPress,
    onProductPress,
    onEarnRatePress,
  } = props;
  const [layoutHeader, setLayoutHeader] = useState(null);
  const [sectionTitleWidth, setSectionTitleWidth] = useState(SANE_SECTION_TITLE_WIDTH_DEFAULT);
  const handleLayoutHeader = useCallback((event: LayoutChangeEvent) => {
    const { y, height } = event.nativeEvent.layout;
    setLayoutHeader(y + height);
  }, []);

  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <View style={styles.topbarFiller} />
      <YuScreenHeader level={level} userName={userName} onLayout={handleLayoutHeader} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.padTop} />
        <AvatarSection
          productsPersonal={productsPersonal}
          onEditPress={onEditPress}
          avatarUrl={avatarUrl}
          onProductPress={onProductPress}
          isAvatarCreated={isAvatarCreated}
          onUnlockPress={onUnlockPress}
          loading={loading}
          avatar={avatarFromLocal}
        />
        <CharmsSection productsCharms={productsCharms} textPosition={sectionTitleWidth} />
        <EmployerBenefits
          onProductPress={onProductPress}
          productsEmployer={productsEmployer}
          setSectionTitleWidth={setSectionTitleWidth}
        />
        <View style={styles.padBot} />
      </ScrollView>
      <NavBar activeIndex={2} hasNotification={hasNotification} />
      <EarnRateButton earnRate={earnRate} onEarnRatePress={onEarnRatePress} topDistance={layoutHeader} />
      <View style={styles.topbarWrapper}>
        <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
      </View>
    </View>
  );
};

export default YuScreen;
