import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView, View } from "react-native";
import PackageCardHeader from "@atoms/package-card-header/package-card-header";
import { CoverType, YuProductStatus } from "@graphql/_core/schema/globalTypes";

const items = [
  {
    title: "Life Insurance",
    slotInfo: {
      name: "Chest",
      itemUrl:
        "https://yulife-local.imgix.net/yuscreen_products_assets/default/chest.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=4824a81a611fa27257a9ac5859919033",
      backgroundUrl:
        "https://yulife-local.imgix.net/yuscreen_products_assets/slots/unlockable.svg?ixlib=js-v3.1.3&fm=png&w=180&h=180&s=b5766cae59d394260968e5a030e450c1",
      status: YuProductStatus.unlockable,
    },
    coverType: null,
    price: "",
  },
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
    price: "5",
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
    price: "10",
  },
  {
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
    price: "20",
  },
];

storiesOf("PackageCardHeader", module).add("default", () => {
  return (
    <ScrollView
      style={{ paddingHorizontal: 20 }}
      contentContainerStyle={{ justifyContent: "center", flex: 1, alignItems: "center" }}
    >
      {items.map((item, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <PackageCardHeader packageInfo={item} />
        </View>
      ))}
    </ScrollView>
  );
});
