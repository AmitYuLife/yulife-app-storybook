import React, { useCallback } from "react";
import { View } from "react-native";
import { Style } from "@styles";
import { BoxOptionCard, SecondaryButton } from "@molecules";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "@navigation/root";
import { BUTTON_SIZES } from "@components/molecules/button/button.types";
import { YUSCREEN_V5_WELLBEING_SECTION_BUTTON, YUSCREEN_V5_WELLBEING_SECTION_ITEM } from "@ids";
import { WellbeingHubSection as IWellbeingHubSection } from "@redux/yu-screen/yu-screen.types";

const ROUTES_SET = new Set(Object.values(ROUTES));

export const WellbeingHubSection = ({ sectionInstanceId, content }: IWellbeingHubSection) => {
  const currentRoute = useSelector(getRouteState);

  const onCardPress = useCallback((itemId: string, route: string) => {
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
        passProps: { businessAccountId: content?.businessAccountId },
      },
    });
  }, [currentRoute, content]);

  if (!content) {
    return null;
  }

  const { items, buttonLabel } = content || {};

  return (
    <View key={sectionInstanceId} style={containerStyle}>
      {items.map(({ id: itemId, title: itemTitle, description, image, route }, index) => (
        <BoxOptionCard
          key={itemId}
          title={itemTitle}
          titleStyles={itemTitleStyle}
          description={description}
          descriptionTextType={"l2b"}
          image={image}
          resizeMode={"cover"}
          onPress={() => onCardPress(itemId, route)}
          testID={YUSCREEN_V5_WELLBEING_SECTION_ITEM(itemTitle, index.toString())}
        />
      ))}
      <SecondaryButton
        onPress={onButtonPress}
        translatedLabel={buttonLabel}
        size={BUTTON_SIZES.NARROW}
        testID={YUSCREEN_V5_WELLBEING_SECTION_BUTTON}
      />
    </View>
  );
};

const containerStyle = {
  paddingTop: Style.adjust(16),
  paddingBottom: Style.adjust(20),
  paddingHorizontal: Style.adjust(24),
};

const itemTitleStyle = {
  marginTop: Style.adjust(20),
};
