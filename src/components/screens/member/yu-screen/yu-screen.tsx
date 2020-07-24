import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { TopBar, NavBar } from "@molecules/index";
import styles from "./yu-screen.styles";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import { ProductType } from "@containers/member/yu-screen/yu-screen-products.container";
import { YUSCREEN } from "@ids";
import { CharmsSection, YuScreenHeader, EmployerBenefits } from "./subcomponents";
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
  const [sectionTitleWidth, setSectionTitleWidth] = useState(SANE_SECTION_TITLE_WIDTH_DEFAULT);

  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <View style={styles.topbarFiller} />
      <YuScreenHeader earnRate={earnRate} onEarnRatePress={onEarnRatePress} level={level} userName={userName} />
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
          avatar={null}
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
      <View style={styles.topbarWrapper}>
        <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
      </View>
    </View>
  );
};

export default YuScreen;
