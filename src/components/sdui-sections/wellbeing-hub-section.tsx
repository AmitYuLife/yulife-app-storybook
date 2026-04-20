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
import { useTheme } from "@app/modules/themes/hooks/useTheme";

const ROUTES_SET = new Set(Object.values(ROUTES));

type Props = IWellbeingHubSection & {
  buttonColor?: string;
};

export const WellbeingHubSection = ({ sectionInstanceId, content, buttonColor }: Props) => {
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
      },
    });
  }, [currentRoute]);

  const { theme } = useTheme();

  if (!content) {
    return null;
  }

  const { items, buttonLabel } = content || {};

  return (
    <View key={sectionInstanceId}>
      {items.map(({ id: itemId, title: itemTitle, description, image, route, pillText }, index) => (
        <BoxOptionCard
          key={itemId}
          title={itemTitle}
          titleStyles={itemTitleStyle}
          description={description}
          descriptionTextType={"l2b"}
          image={image}
          resizeMode={"cover"}
          onPress={() => onCardPress(itemId, route)}
          pills={pillText ? [{ backgroundColor: theme.colors.primary.p600, text: pillText }] : undefined}
          testID={YUSCREEN_V5_WELLBEING_SECTION_ITEM(itemTitle, index.toString())}
        />
      ))}
      <SecondaryButton
        onPress={onButtonPress}
        translatedLabel={buttonLabel}
        size={BUTTON_SIZES.NARROW}
        testID={YUSCREEN_V5_WELLBEING_SECTION_BUTTON}
        textColor={buttonColor}
        borderColor={buttonColor}
      />
    </View>
  );
};

const itemTitleStyle = {
  marginTop: Style.adjust(20),
};
