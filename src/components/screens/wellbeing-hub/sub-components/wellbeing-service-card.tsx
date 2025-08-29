import React, { FC, useCallback, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Image, ImageStyle, TextTemplate } from "@atoms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { WellbeingHubItem } from "@graphql/__generated";
import { TEXT_TEMPLATE } from "@ids";
import { ArrowButton } from "@components/molecules/arrow-button";
import { pushToScreen } from "@navigation/root";

const ROUTES_SET = new Set(Object.values(ROUTES));
interface IProps {
  card: WellbeingHubItem;
  testID?: string;
}

const WellBeingServiceCard: FC<IProps> = ({ card }) => {
  const onPress = useCallback(async () => {
    const { id, route, sduiStepId } = card;

    // A wellbeing hub item can be another app screen; e.g: Yuniversity
    if (route && ROUTES_SET.has(route)) {
      return await Navigation.push(ROUTES.wellbeingHubItems, {
        component: {
          id: route,
          name: route,
        },
      });
    }

    return pushToScreen(ROUTES.wellbeingHubItems, {
      component: {
        id: ROUTES.sduiWellbeingHubItemDetails,
        name: ROUTES.sduiWellbeingHubItemDetails,
        passProps: {
          dynamicId: id,
          stepId: sduiStepId || "wellbeing_hub_item_details",
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
          <ArrowButton color={Colours.primary.p600} />
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingEnd: Style.adjust(24),
    marginBottom: Style.adjust(24),
  } as ViewStyle,
  remoteWrapper: {
    marginEnd: Style.adjust(16),
  } as ViewStyle,
  remoteImageStyle: {
    borderRadius: 8,
  } as ImageStyle,
  card: {
    marginTop: Style.adjust(4),
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingEnd: Style.adjust(24),
  } as ViewStyle,
  cardContainer: {
    paddingEnd: Style.adjust(15),
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
    marginStart: Style.adjust(8),
  } as ViewStyle,
});

export default WellBeingServiceCard;
