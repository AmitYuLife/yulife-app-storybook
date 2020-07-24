import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styles from "./yu-screen.styles";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import { ProductType } from "@containers/member/yu-screen/yu-screen-products.container";
import { CharmsSection, YuScreenHeader, EmployerBenefits } from "./subcomponents";
import { AvatarSection } from "./subcomponents/avatar-section/avatar-section";
import { YuScreenLayout } from "./yu-screen-layout";

interface IProps {
  level: number;
  totalCoins: number;
  earnRate: number;
  hasNotification: boolean;
  isAvatarCreated: boolean;
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
    <YuScreenLayout hasNotification={hasNotification} onLeftMenuPress={onLeftMenuPress} totalCoins={totalCoins}>
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
    </YuScreenLayout>
  );
};

export default YuScreen;
