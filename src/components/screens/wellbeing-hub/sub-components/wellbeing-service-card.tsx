import React, { FC, useCallback, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Image, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { GetWellbeingHubItems_wellbeingHubItems as WellbeingCard } from "@graphql/_core/schema";
import { ImageStyle } from "react-native-fast-image";
import { TEXT_TEMPLATE } from "@ids";

const ROUTES_SET = new Set(Object.values(ROUTES));
interface IProps {
  card: WellbeingCard;
}

const WellBeingServiceCard: FC<IProps> = ({ card }) => {
  const onPress = useCallback(async () => {
    const { id, route } = card;
    if (route && ROUTES_SET.has(route)) {
      return await Navigation.push(ROUTES.wellbeingHubItems, {
        component: {
          id: route,
          name: route,
        },
      });
    }

    await Navigation.push(ROUTES.wellbeingHubItems, {
      component: {
        id: ROUTES.wellbeingHubDetails,
        name: ROUTES.wellbeingHubDetails,
        passProps: {
          itemId: id,
        },
      },
    });
  }, [card.id, card.route]);

  const thumbnailSource = useMemo(() => ({ uri: card.thumbnail?.uri }), [card.thumbnail]);
  const iconSource = useMemo(() => ({ uri: card.icon?.uri }), [card.icon]);

  return (
    <TouchableOpacityWithDelay onPress={onPress} style={styles.wrapper}>
      <Image
        source={thumbnailSource}
        width={Style.adjust(120)}
        height={Style.adjust(104)}
        theme="light"
        style={styles.remoteWrapper}
        imageStyle={styles.remoteImageStyle}
        resizeMode="cover"
      />
      <View style={styles.card}>
        <View style={styles.cardContainer}>
          <View style={styles.titleContainer}>
            <TextTemplate type="b2b" testID={TEXT_TEMPLATE(card.title)}>
              {card.title}
            </TextTemplate>
            {!card?.icon?.uri ? null : (
              <Image
                source={iconSource}
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
          <ArrowIcon color={Colours.primary.p600} />
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

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
