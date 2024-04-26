import React, { useCallback } from "react";
import { View } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import { WellbeingHubSection as WellbeingHubSectionGql, WellbeingHubSectionItem } from "@graphql/__generated";
import { BoxOptionCard, SecondaryButton } from "@molecules";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "@navigation/root";

const ROUTES_SET = new Set(Object.values(ROUTES));

export const WellbeingHubSection = ({ id, content }: WellbeingHubSectionGql) => {
  const currentRoute = useSelector(getRouteState);

  const onCardPress = useCallback((itemId: WellbeingHubSectionItem["id"], route: WellbeingHubSectionItem["route"]) => {
    // A wellbeing hub item can be another app screen; e.g: Yuniversity
    if (route && ROUTES_SET.has(route)) {
      return Navigation.push(ROUTES.yuScreen, {
        component: {
          id: route,
          name: route,
        },
      });
    }

    pushToScreen(ROUTES.yuScreen, {
      component: {
        id: ROUTES.sduiWellbeingHubItemDetails,
        name: ROUTES.sduiWellbeingHubItemDetails,
        passProps: {
          dynamicId: itemId,
          stepId: "wellbeing_hub_item_details",
        },
      },
    });
  }, []);

  const onButtonPress = useCallback(() => {
    Navigation.push(currentRoute, {
      component: {
        id: ROUTES.wellbeingHubItems,
        name: ROUTES.wellbeingHubItems,
      },
    });
  }, [currentRoute]);

  if (!content) {
    return null;
  }

  const { title, items, buttonLabel } = content || {};

  return (
    <View key={id} style={containerStyle}>
      <View style={titleStyle}>
        <TextTemplate type="b2b">{title}</TextTemplate>
      </View>
      {items.map(({ id: itemId, title: itemTitle, description, image, route }) => (
        <BoxOptionCard
          key={itemId}
          title={itemTitle}
          titleStyles={itemTitleStyle}
          description={description}
          descriptionTextType={"l2b"}
          image={image}
          onPress={() => onCardPress(itemId, route)}
        />
      ))}
      <SecondaryButton onPress={onButtonPress} label={buttonLabel} />
    </View>
  );
};

const containerStyle = {
  paddingVertical: Style.adjust(20),
  paddingHorizontal: Style.adjust(24),
};

const titleStyle = {
  marginBottom: Style.adjust(16),
};

const itemTitleStyle = {
  marginTop: Style.adjust(20),
};
