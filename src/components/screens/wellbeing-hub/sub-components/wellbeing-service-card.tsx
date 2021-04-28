import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { ArrowRightSvg, RemoteImage, TextTemplate } from "@atoms";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { GetWellbeingHubItems_wellbeingHubItems as WellbeingCard } from "@graphql/_core/schema";
import { ImageStyle } from "react-native-fast-image";

interface IProps {
  card: WellbeingCard;
}

const onPress = async (id: string) => {
  await Navigation.push(ROUTES.wellbeingHubItems, {
    component: {
      id: ROUTES.wellbeingHubDetails,
      name: ROUTES.wellbeingHubDetails,
      passProps: {
        itemId: id,
      },
    },
  });
};

const WellBeingServiceCard: FC<IProps> = ({ card }) => (
  <TouchableOpacityWithDelay onPress={() => onPress(card.id)} style={styles.wrapper}>
    <RemoteImage
      uri={card.thumbnail.uri}
      width={Style.adjust(120)}
      height={Style.adjust(104)}
      theme="light"
      style={styles.remoteWrapper}
      imageStyle={styles.remoteImageStyle}
    />
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <TextTemplate type="b2b">{card.title}</TextTemplate>
          {!card?.icon?.uri ? null : (
            <RemoteImage
              uri={card?.icon?.uri}
              width={Style.adjust(16)}
              height={Style.adjust(16)}
              theme="light"
              style={styles.iconImage}
            />
          )}
        </View>
        <View style={styles.cardDescription}>
          <TextTemplate type="b2">{card.description}</TextTemplate>
        </View>
      </View>
      <View style={styles.arrowRight}>
        <ArrowRightSvg colour={Colours.primary.p600} />
      </View>
    </View>
  </TouchableOpacityWithDelay>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingRight: Style.adjust(24),
    marginBottom: Style.adjust(24),
  } as ViewStyle,
  remoteWrapper: {
    marginRight: Style.adjust(16),
  } as ViewStyle,
  remoteImageStyle: {
    borderRadius: 8,
  } as ImageStyle,
  card: {
    marginTop: Style.adjust(4),
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: Style.adjust(24),
  } as ViewStyle,
  cardContainer: {
    paddingRight: Style.adjust(15),
  } as ViewStyle,
  cardDescription: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
  arrowRight: {
    position: "absolute",
    right: 0,
  } as ViewStyle,
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  iconImage: {
    marginLeft: Style.adjust(8),
  } as ViewStyle,
});

export default WellBeingServiceCard;
