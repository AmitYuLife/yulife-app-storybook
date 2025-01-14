import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { Platform, View, ViewStyle } from "react-native";
import { ChipProps } from "@components/molecules/chip-list/chip-list";
import WellBeingHub, { BusinessAccount } from "@components/screens/wellbeing-hub/wellbeing-hub";
import { gql, Os } from "@graphql/__generated";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { getUserFirstName } from "@redux/user/user.selectors";
import { Style } from "@styles";
import { ROUTES } from "@navigation/constants";

interface IProps {
  componentId: string;

  /** pass in a category name to pre select */
  preselectCategory?: string;

  /** If set to "pop", will use Navigation.pop instead of Navigation.popToRoot */
  closeNavigationOption?: string;
}

const WellbeingHubItemsContainer: FC<IProps> = ({ componentId, preselectCategory, closeNavigationOption }: IProps) => {
  const handleClose = useCallback(() => {
    if (closeNavigationOption === "pop") {
      Navigation.pop(componentId);
    } else {
      Navigation.popToRoot(componentId);
    }
  }, [componentId, closeNavigationOption]);

  const [activeBusinessAccounts, setActiveBusinessAccounts] = useState<BusinessAccount[]>([]);
  const [selectedBusinessAccount, setSelectedBusinessAccount] = useState<BusinessAccount | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryToPreselect, setCategoryToPreselect] = useState(preselectCategory || null);
  const firstName = useSelector(getUserFirstName);

  const { data, loading } = useQuery(gql("GetWellbeingHubItemsDocument"), {
    fetchPolicy: "cache-and-network",
    variables: {
      os: Platform.OS as Os,
      width: Style.adjust(240),
      height: Style.adjust(208),
      categories: selectedCategory === "all" ? undefined : [selectedCategory],
      businessAccountId: selectedBusinessAccount?.businessAccountId,
      hasSelectedBusinessAccount: !!selectedBusinessAccount,
    },
  });

  const handleWellbeingLocationPress = useCallback(
    () =>
      Navigation.push(componentId, {
        component: {
          id: ROUTES.selectContentLocation,
          name: ROUTES.selectContentLocation,
          passProps: {
            placement: "wellbeing_hub",
          },
        },
      }),
    [componentId]
  );

  useEffect(() => {
    if (data?.categories && categoryToPreselect) {
      // we have to resolve the category name to an id
      const category = data.categories.find((c) => c.name === categoryToPreselect);

      if (category) {
        setSelectedCategory(category.id);
      }

      setCategoryToPreselect(null);
    }
  }, [categoryToPreselect, data?.categories]);

  useEffect(() => {
    setActiveBusinessAccounts(data.activeEmployments || []);
    if (!selectedBusinessAccount) {
      setSelectedBusinessAccount(data.activeEmployments?.[0]);
    }
  }, [data?.activeEmployments, selectedBusinessAccount]);

  const onCategoryPress = useCallback(
    (id: string) => {
      setSelectedCategory(id);
    },
    [setSelectedCategory]
  );

  const categoryChips: ChipProps[] = useMemo(
    () =>
      [{ id: "all", name: t("screens.wellbeing_hub.category_all") }, ...(data?.categories || [])].map((tag) => ({
        value: tag.name,
        isSelected: tag.id === selectedCategory,
        onPress: () => {
          onCategoryPress(tag.id);
        },
      })),
    [data?.categories, onCategoryPress, selectedCategory]
  );

  return (
    <View style={styles.wrapper}>
      <WellBeingHub
        handleClose={handleClose}
        categoryChips={categoryChips}
        loading={loading}
        userFirstName={firstName}
        handleWellbeingLocationPress={handleWellbeingLocationPress}
        cards={data?.listItems}
        location={data?.location}
        businessAccountState={{ activeBusinessAccounts, selectedBusinessAccount, setSelectedBusinessAccount }}
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
