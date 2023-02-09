import { useQuery } from "@apollo/client";
import { ChipProps } from "@components/molecules/chip-list/chip-list";
import WellBeingHub from "@components/screens/wellbeing-hub/wellbeing-hub";
import { GQL_QUERY_GET_CURRENT_USER } from "@graphql/user";
import { GQL_QUERY_GET_WELLBEING_HUB_ITEMS } from "@graphql/wellbeingHub";
import { GQL_QUERY_GET_WELLBEING_HUB_CATEGORIES } from "@graphql/wellbeingHub/wellbeingHubCategories.gql";
import { GetWellbeingHubCategories, GetWellbeingHubItems } from "@graphql/_core/schema";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { Style } from "@styles";
import React, { FC, useCallback, useMemo, useState } from "react";
import { PixelRatio, Platform, View, ViewStyle } from "react-native";

interface IProps {
  componentId: string;
}

const WellbeingHubItemsContainer: FC<IProps> = ({ componentId }) => {
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: categories, loading: categoriesLoading } = useQuery<GetWellbeingHubCategories>(
    GQL_QUERY_GET_WELLBEING_HUB_CATEGORIES,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  const { loading: userLoading, data: user } = useQuery(GQL_QUERY_GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: { intercomHashMethod: Platform.OS },
  });

  const { data: wellbeing, loading: itemsLoading } = useQuery<GetWellbeingHubItems>(GQL_QUERY_GET_WELLBEING_HUB_ITEMS, {
    variables: {
      os: Platform.OS,
      width: PixelRatio.get() * Style.adjust(240),
      height: PixelRatio.get() * Style.adjust(208),
      categories: selectedCategory === "all" ? undefined : [selectedCategory],
    },
    fetchPolicy: "cache-and-network",
  });

  const onCategoryPress = useCallback(
    (id: string) => {
      setSelectedCategory(id);
    },
    [setSelectedCategory]
  );

  const categoryChips: ChipProps[] = useMemo(() => {
    return [
      { id: "all", name: t("screens.wellbeing_hub.category_all") },
      ...(categories?.wellbeingHubCategories || []),
    ].map((tag) => ({
      value: tag.name,
      isSelected: tag.id === selectedCategory,
      onPress: () => {
        onCategoryPress(tag.id);
      },
    }));
  }, [categories, onCategoryPress, selectedCategory]);

  return (
    <View style={styles.wrapper}>
      <WellBeingHub
        handleClose={handleClose}
        categoryChips={categoryChips}
        loading={userLoading || itemsLoading || categoriesLoading}
        userFirstName={user?.getCurrentUser.firstName}
        cards={wellbeing?.wellbeingHubItems}
      />
    </View>
  );
};

export default WellbeingHubItemsContainer;

const styles = {
  wrapper: {
    flex: 1,
  } as ViewStyle,
  tabsWrapper: {
    marginTop: Style.adjust(17),
  } as ViewStyle,
};
