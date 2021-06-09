//@TODO: Delete this when the component goes live
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { CoverType, YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { PackageCard } from "@components/molecules";
import { PackageCardHeader } from "@atoms";

const NotEquipped = {
  title: "Life Insurance",
  slotInfo: {
    name: "Chest",
    itemUrl:
      "https://yulife-local.imgix.net/yuscreen_products_assets/default/chest.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=4824a81a611fa27257a9ac5859919033",
    backgroundUrl:
      "https://yulife-local.imgix.net/yuscreen_products_assets/slots/unlockable.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=b5766cae59d394260968e5a030e450c1",
    status: YuProductStatus.unlockable,
  },
  price: "",
};
const EpicCard = {
  title: "Life Insurance",
  slotInfo: {
    name: "",
    itemUrl:
      "https://yulife-local.imgix.net/yuscreen_products_assets/desert/epic_chest.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=51a502605dcb7437fc3d17ec9d3a69c9",
    backgroundUrl:
      "https://yulife-local.imgix.net/yuscreen_products_assets/slots/epic.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=969c76b6d47e497eea6fae47f9f9811c",
    status: YuProductStatus.active,
  },
  coverType: CoverType.epic,
  actualCost: 0,
  earnRate: 30,
  powers: [
    {
      icon: "double_chest",
      title: "Double Chest",
      description: "Increases the chance of unlocking a double chest in challenges.",
      locked: false,
      coverType: CoverType.common,
    },
    {
      icon: "streak_reward",
      title: "Increased Streak Bounty",
      description: "Earn a larger YuCoin bounty for hitting streaks.",
      locked: false,
      coverType: CoverType.rare,
    },
    {
      icon: "daily_step_limit",
      title: "Increased Daily Step Limit",
      description: "Increases the number of daily steps for which you earn YuCoin.",
      locked: false,
      coverType: CoverType.epic,
    },
  ],
};

const packagesInfo = [
  {
    title: "Life Insurance",
    slotInfo: {
      name: "",
      itemUrl:
        "https://yulife-local.imgix.net/yuscreen_products_assets/desert/common_chest.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=9a0347907b3f518dcc461f5429dfaf72",
      backgroundUrl:
        "https://yulife-local.imgix.net/yuscreen_products_assets/slots/common.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=dc3511f3ab49b6bfd4ccf640238a48fe",
      status: YuProductStatus.active,
    },
    coverType: CoverType.common,
    actualCost: 20,
    earnRate: 10,
    powers: [
      {
        icon: "double_chest",
        title: "Double Chest",
        description: "Increases the chance of unlocking a double chest in challenges.",
        locked: false,
        coverType: CoverType.common,
      },
      {
        icon: "streak_reward",
        title: "Increased Streak Bounty",
        description: "Earn a larger YuCoin bounty for hitting streaks.",
        locked: true,
        coverType: CoverType.rare,
      },
      {
        icon: "daily_step_limit",
        title: "Increased Daily Step Limit",
        description: "Increases the number of daily steps for which you earn YuCoin.",
        locked: true,
        coverType: CoverType.epic,
      },
    ],
  },
  {
    title: "Life Insurance",
    slotInfo: {
      name: "",
      itemUrl:
        "https://yulife-local.imgix.net/yuscreen_products_assets/desert/rare_chest.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=027066d852767f01fbfa186734abb6d3",
      backgroundUrl:
        "https://yulife-local.imgix.net/yuscreen_products_assets/slots/rare.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=82e0c375b197b0fff32c827819d11917",
      status: YuProductStatus.active,
    },
    coverType: CoverType.rare,
    actualCost: 30,
    earnRate: 20,
    powers: [
      {
        icon: "double_chest",
        title: "Double Chest",
        description: "Increases the chance of unlocking a double chest in challenges.",
        locked: false,
        coverType: CoverType.common,
      },
      {
        icon: "streak_reward",
        title: "Increased Streak Bounty",
        description: "Earn a larger YuCoin bounty for hitting streaks.",
        locked: false,
        coverType: CoverType.rare,
      },
      {
        icon: "daily_step_limit",
        title: "Increased Daily Step Limit",
        description: "Increases the number of daily steps for which you earn YuCoin.",
        locked: true,
        coverType: CoverType.epic,
      },
    ],
  },
  {
    ...EpicCard,
    actualCost: 30,
  },
];

const PackageCardDemo = () => {
  const [packageType, setPackageType] = useState({
    selectedPackage: CoverType.common,
    previewPackage: null,
  });

  const [filterPackage] = packagesInfo.filter(
    (packageInfo) => packageInfo.coverType === (packageType.previewPackage || packageType.selectedPackage)
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.center}>
        <PackageCard
          packageInfo={filterPackage}
          onPress={(selected: CoverType) => setPackageType({ ...packageType, previewPackage: selected })}
        />
        <View style={styles.hr} />
        <PackageCard
          packageInfo={EpicCard}
          onPress={(selected: CoverType) => setPackageType({ ...packageType, previewPackage: selected })}
        />
        <View style={styles.hr} />
        <PackageCardHeader packageInfo={{ ...NotEquipped, coverType: null }} />
        <View style={styles.hr} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: StatusBar.currentHeight,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  hr: {
    marginBottom: 30,
  },
});

export default PackageCardDemo;
