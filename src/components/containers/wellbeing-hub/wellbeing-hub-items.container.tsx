import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { Platform } from "react-native";
import { Box } from "@atoms";
import { ChipProps } from "@components/molecules/chip-list/chip-list";
import WellBeingHub from "@components/screens/wellbeing-hub/wellbeing-hub";
import { gql, Os } from "@graphql/__generated";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { getUserFirstName } from "@redux/user/user.selectors";
import { Style } from "@styles";
import { ROUTES } from "@navigation/constants";
import { BusinessAccount } from "@components/molecules/business-picker";
import ThemeOverrideProvider from "@modules/themes/context";
import { useImagePreload } from "@hooks";

interface IProps {
  componentId: string;

  /** pass in a category name to pre select */
  preselectCategory?: string;

  /** pass in a businessAccountId to pre select */
  businessAccountId?: string;

  /** If set to "pop", will use Navigation.pop instead of Navigation.popToRoot */
  closeNavigationOption?: string;
}

const WellbeingHubItemsContainer: FC<IProps> = ({
  componentId,
  preselectCategory,
  closeNavigationOption,
  businessAccountId,
}: IProps) => {
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

  const { data, loading, previousData } = useQuery(gql("GetWellbeingHubItemsDocument"), {
    fetchPolicy: "cache-and-network",
    variables: {
      os: Platform.OS as Os,
      width: Style.adjust(240),
      height: Style.adjust(208),
      categories: selectedCategory === "all" ? undefined : [selectedCategory],
      // everything should still be validated by hasSelectedBusinessAccount
      businessAccountId: selectedBusinessAccount?.businessAccountId || "",
      hasSelectedBusinessAccount: !!selectedBusinessAccount,
    },
  });

  const { data: linkedBusinessesData } = useQuery(gql("GetLinkedBusinessesDocument"));

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
  const imagesToPreload = useMemo(() => {
    if (!data?.theme) {
      return undefined;
    }

    return [
      data?.theme?.sections?.wellbeing?.heroImageBackground?.uri,
      data?.theme?.sections?.wellbeing?.heroImageIcon?.uri,
    ].filter((uri): uri is string => !!uri) as string[];
  }, [data?.theme]);

  const { hasLoaded } = useImagePreload({
    images: imagesToPreload,
  });

  useEffect(() => {
    if (data?.categories && categoryToPreselect) {
      // we have to resolve the category name to an id
      const category = data?.categories.find((c) => c.name === categoryToPreselect);

      if (category) {
        setSelectedCategory(category.id);
      }

      setCategoryToPreselect(null);
    }
  }, [categoryToPreselect, data?.categories]);

  useEffect(() => {
    const linkedBusinesses = linkedBusinessesData?.getLinkedBusinesses || [];

    setActiveBusinessAccounts(linkedBusinesses);
    if (!selectedBusinessAccount && linkedBusinesses.length > 0) {
      setSelectedBusinessAccount(
        linkedBusinesses.find((a) => a.businessAccountId === businessAccountId) || linkedBusinesses[0]
      );
    }
  }, [businessAccountId, linkedBusinessesData?.getLinkedBusinesses, selectedBusinessAccount]);

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

  useEffect(() => {
    if (selectedBusinessAccount) {
      onCategoryPress("all");
    }
  }, [selectedBusinessAccount, onCategoryPress]);

  return (
    <ThemeOverrideProvider theme={data?.theme || previousData?.theme}>
      <Box flex={1}>
        <WellBeingHub
          handleClose={handleClose}
          categoryChips={categoryChips}
          loading={loading || !hasLoaded}
          userFirstName={firstName}
          handleWellbeingLocationPress={handleWellbeingLocationPress}
          cards={data?.listItems}
          location={data?.location}
          businessAccountState={{ activeBusinessAccounts, selectedBusinessAccount, setSelectedBusinessAccount }}
        />
      </Box>
    </ThemeOverrideProvider>
  );
};

export default WellbeingHubItemsContainer;
