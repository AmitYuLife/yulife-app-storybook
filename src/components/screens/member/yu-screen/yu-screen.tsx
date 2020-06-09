import React from "react";
import { Image, ScrollView, View, TouchableOpacity, StyleSheet } from "react-native";
import { TopBar, NavBar } from "@molecules/index";
import { getCurrentWorld } from "../../../../services/utils";
import { Button, Text } from "../../../atoms";
import { getCurrentWorldImage, getCurrentWorldText, getCurrentWorldTextColor } from "./yu-screen.helper";
import EarnRate from "./svg/earn-rate";
import styles from "./yu-screen.styles";
import { BodyAvatar } from "./svg/body";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import { ProductType } from "@containers/member/yu-screen/yu-screen-products.container";
import EmployerBenefitsItem from "./products/employer-products/employer-product-item";
import YuProducts from "./products/personal-products/personal-products";
import CharmsProducts from "./charms/charms.products";
import { Style } from "@styles/index";
import { IAvatar } from "./avatar-builder/avatar.types";

interface IProps {
  level: number;
  userName: string;
  hasNotification: boolean;
  totalCoins: number;
  onUnlockPress: () => void;
  onEditPress: () => void;
  onProductPress: (
    product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
    productType: ProductType
  ) => () => void;
  onLeftMenuPress: () => void;
  isAvatarCreated: boolean;
  avatar: any;
  avatarFromLocal: IAvatar;
  loading: boolean;
  products: GetYulifer_getYulifer_products;
  earnRate: number;
  onEarnRatePress: () => void;
}

const YuScreen = ({
  level,
  userName,
  onUnlockPress,
  totalCoins,
  onLeftMenuPress,
  onEditPress,
  isAvatarCreated,
  avatar,
  avatarFromLocal,
  loading,
  onProductPress,
  products,
  earnRate,
  onEarnRatePress,
}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topbarFiller} />
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Text style={styles.userName}>{userName}</Text>
          <View style={styles.currentWorldWrapper}>
            <View style={styles.currentWorld}>
              <Image style={styles.image} source={getCurrentWorldImage(getCurrentWorld(level))} />
              <View style={styles.currentWorldDetailsWrapper}>
                <Text
                  style={StyleSheet.flatten([
                    styles.worldText,
                    { color: getCurrentWorldTextColor(getCurrentWorld(level)) },
                  ])}
                >
                  {getCurrentWorldText(getCurrentWorld(level))}
                </Text>
                <Text style={styles.levelText}>{`Lvl ${level}`}</Text>
              </View>
            </View>
            {!isAvatarCreated ? null : (
              <TouchableOpacity onPress={onEditPress}>
                <Image
                  style={styles.editAvatarImage}
                  source={require("../../../../../assets/yuscreen/editAvatar.png")}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {!isAvatarCreated ? (
          <View style={styles.noAvatarWrapper}>
            <View style={styles.personalProtectionWrapper}>
              <Text style={styles.personalProtectionText}>Personal Protection</Text>
              <Text style={styles.personalProtectionBenefits}>
                Create your avatar to unlock{"\n"}personal protection and earn
              </Text>
              <View style={styles.earningCoinWrapper}>
                <Image
                  style={styles.smallYucoinImage}
                  source={require("../../../../../assets/yuscreen/yucoin-black.png")}
                />

                <Text style={styles.earningCoinText}>{` 100 yucoin.`}</Text>
              </View>
              <Button onPress={onUnlockPress} type="PrimarySmall" label="Unlock" />
            </View>

            <Image style={styles.emptyAvatarImage} source={require("../../../../../assets/yuscreen/avatar.png")} />
          </View>
        ) : (
          <View style={styles.avatarWrapper}>
            <Text style={styles.personalProtectionText}>Personal Protection</Text>
            {loading ? (
              <>
                {avatarFromLocal ? (
                  <BodyAvatar
                    avatar={avatarFromLocal}
                    showElipse={true}
                    width={Style.SCALE_UP_AND_DOWN(176)}
                    height={Style.SCALE_UP_AND_DOWN(361)}
                    viewBox={"0 0 265 553"}
                  />
                ) : (
                  <Image
                    style={styles.emptyAvatarImageLoadinState}
                    source={require("../../../../../assets/yuscreen/avatar.png")}
                  />
                )}
              </>
            ) : (
              <View style={styles.avatarAndProductsWrapper}>
                <BodyAvatar
                  avatar={avatar}
                  showElipse={true}
                  width={Style.SCALE_UP_AND_DOWN(176)}
                  height={Style.SCALE_UP_AND_DOWN(361)}
                  viewBox={"0 0 265 553"}
                />
                <View style={styles.insuranceProductsWrapper}>
                  {products.personal.map((product, index) => (
                    <YuProducts
                      key={product.icon + index}
                      isActive={product.active}
                      type={product.icon}
                      name={product.name}
                      onPressAction={onProductPress(product, "personal")}
                    />
                  ))}
                </View>
              </View>
            )}
          </View>
        )}

        {products.charms.length < 1 ? null : (
          <View>
            <View style={styles.bigSeparator} />
            <View style={styles.charmWrapper}>
              <Text style={styles.charmText}>Charms</Text>
              <View style={styles.charmItems}>
                {products.charms.map((product, index) => (
                  <CharmsProducts
                    key={product.icon + index}
                    description={product.description}
                    icon={product.icon}
                    earnRate={product.earnRate}
                  />
                ))}
              </View>
            </View>
          </View>
        )}

        <View style={styles.bigSeparator} />

        <View style={styles.employerBenefitsWrapper}>
          <Text style={styles.employerBenefitsText}>Employer Benefits</Text>
          <View style={styles.employerBenefitsItems}>
            {products.employer.map((product, index) => (
              <EmployerBenefitsItem
                key={product.icon + index}
                product={product}
                onPressAction={onProductPress(product, "employer")}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <NavBar activeIndex={2} />
      <TouchableOpacity onPress={onEarnRatePress} style={styles.earnRate}>
        <EarnRate />
        <Text style={styles.earningRateText}>{`${earnRate}x Earn Rate`}</Text>
        <Image style={styles.yucoinImage} source={require("../../../../../assets/yuscreen/yucoin.png")} />
      </TouchableOpacity>
      <View style={styles.topbarWrapper}>
        <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
      </View>
    </View>
  );
};

export default YuScreen;
