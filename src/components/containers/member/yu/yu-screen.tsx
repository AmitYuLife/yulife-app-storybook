import React from "react";
import { StyleSheet, ViewStyle, View, ScrollView } from "react-native";
import { YUSCREEN } from "@ids";
import { Style } from "@styles";
import { NameAndLevel } from "@components/molecules";
import { YumojiAndSlots } from "./subcomponents/yumoji-and-slots/yumoji-and-slots";
import { Carousel } from "./subcomponents/carousel/carousel";
import { GetYuScreen } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YU_SCREEN } from "@graphql/yuscreen/getYuScreen.gql";
import NameAndLevelSkeleton from "@components/molecules/name-and-level/name-and-level-skeleton";
import { YumojiAndSlotsSkeleton } from "./subcomponents/yumoji-and-slots/yumoji-and-slots-skeleton";
import { CarouselSkeleton } from "./subcomponents/carousel/carousel-skeleton";
import { useQuery } from "@apollo/react-hooks";

export const YuScreen = () => {
  const { data } = useQuery<GetYuScreen>(GQL_QUERY_GET_YU_SCREEN, { fetchPolicy: "cache-and-network" });

  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {data ? (
          <>
            <NameAndLevel useWorldColor={true} />
            <YumojiAndSlots productSlots={data?.getYuScreen.productSlots} />
            <Carousel {...data?.getYuScreen.productCarousel} />
          </>
        ) : (
          <>
            <NameAndLevelSkeleton hideWorldIcon={true} />
            <YumojiAndSlotsSkeleton />
            <CarouselSkeleton />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  } as ViewStyle,
  scrollView: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  userInfoWrapper: {
    alignItems: "center",
  } as ViewStyle,
});
