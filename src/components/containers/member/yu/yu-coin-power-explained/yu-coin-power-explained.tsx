import { isEmpty } from "lodash";
import { ScrollView, View, ViewStyle } from "react-native";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { t } from "@locale";
import { Colours, Style, StyleSheet } from "@styles";
import { useQuery } from "@apollo/client";
import { YuCoinPowerCard } from "@molecules";
import { Navigation } from "@navigation/main";
import { Box, TextTemplate, FlatList } from "@atoms";
import YuCoinPowerExplainedProduct from "./yu-coin-power-explained-product";
import YuCoinPowerExplainedSkeleton from "./yu-coin-power-explained-skeleton";
import { ActivityPanel, GenericHeadingAbsolute, GenericHeadingPad, ProductSelect } from "@organisms";
import { GetYuCoinPowerInfoQuery, gql } from "@graphql/__generated";

type IGetYuCoinPowerInfoSectionItems = GetYuCoinPowerInfoQuery["getYuCoinPowerInfo"]["sections"][0]["items"][0];

export const PADDING_LARGE = 35;
export const ESTIMATED_ITEM_SIZE = 105;
export const HEADER_BACKGROUND_OFFSET = 500;
export const NUMBER_OF_ACTIVITY_COLUMNS_TO_SHOW = 3;

const YuCoinPowerExplained = () => {
  const [selectedPersonalProducts, setSelectedPersonalProducts] = useState<Record<string, boolean>>({});

  const { loading, refetch, previousData, data } = useQuery(gql("GetYuCoinPowerInfoDocument"), {
    variables: {
      productIds: Object.entries(selectedPersonalProducts)
        .filter(([_, isSelected]) => {
          return isSelected;
        })
        .map(([productId]) => productId),
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    refetch();
  }, [refetch, selectedPersonalProducts]);

  const itemSeperator = useCallback(() => <View style={{ width: Style.adjust(10) }} />, []);

  const activityPanelWidth = useCallback((numberOfItems: number): ViewStyle => {
    const screenPadding = PADDING_LARGE * 2;
    const itemSpacing = 10 * (numberOfItems - 1);

    return {
      width: (Style.DEVICE_WIDTH - screenPadding - itemSpacing) / NUMBER_OF_ACTIVITY_COLUMNS_TO_SHOW,
    };
  }, []);

  const onProductToggle = useCallback(async (productId: string): Promise<void> => {
    setSelectedPersonalProducts((prev) => {
      return {
        ...prev,
        [productId]: !prev[productId],
      };
    });
  }, []);

  const keyExtractor = useCallback((item: IGetYuCoinPowerInfoSectionItems, index: number): string => {
    return `${item.title}-${index}`;
  }, []);

  const isPreviewingProduct = useMemo((): boolean => {
    return Object.values(selectedPersonalProducts).some((isSelected) => isSelected);
  }, [selectedPersonalProducts]);

  const currentData = useMemo((): GetYuCoinPowerInfoQuery => {
    return loading ? previousData : data;
  }, [data, loading, previousData]);

  const productPreviewSelection = useMemo((): React.ReactNode => {
    const productPreviews = currentData?.getYuCoinPowerInfo?.productPreviews;

    if (isEmpty(productPreviews?.items)) {
      return (
        <Box gap={10} style={styles.paddedSection}>
          <TextTemplate color={Colours.neutral.n900} type="b1b">
            {t("screens.yu_coin_power_explained.no_products.title")}
          </TextTemplate>
          <TextTemplate color={Colours.neutral.n900} type="l1">
            {t("screens.yu_coin_power_explained.no_products.description")}
          </TextTemplate>
        </Box>
      );
    }

    return (
      <Box gap={10} style={styles.paddedSection}>
        <TextTemplate type="l1">{productPreviews.title}</TextTemplate>
        {productPreviews.items.map((item) => (
          <ProductSelect
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            onPress={onProductToggle}
            yuCoinPower={item.yuCoinPower}
            description={item.description}
            backgroundColor={item.backgroundColor}
            isSelected={selectedPersonalProducts?.[item.id]}
          />
        ))}
      </Box>
    );
  }, [currentData, onProductToggle, selectedPersonalProducts]);

  if (isEmpty(currentData) && loading) {
    return <YuCoinPowerExplainedSkeleton />;
  }

  const { getYuCoinPowerInfo: { yuCoin, sections = [], products = [] } = {} } = currentData;

  return (
    <>
      <GenericHeadingPad />
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.yuCoinPowerCard}>
          {/* Ensures the header is still white when the user overscrolls */}
          <View style={styles.yuCoinPowerCardHeaderBackgroundOffset} />
          <YuCoinPowerCard
            yuCoinPower={yuCoin?.earnRate}
            yuCoinAmount={yuCoin?.earnings}
            isPoweredUp={isPreviewingProduct}
          />
        </View>

        <Box style={styles.wrapper} gap={PADDING_LARGE}>
          {productPreviewSelection}

          {sections.map((section) => (
            <Box gap={10} key={section.title}>
              <View style={styles.paddedSection}>
                <TextTemplate color={Colours.neutral.n900} type="b2b">
                  {section.title}
                </TextTemplate>
              </View>
              <FlatList
                horizontal={true}
                data={section.items}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={itemSeperator}
                contentContainerStyle={styles.paddedSection}
                renderItem={({ item }) => (
                  <ActivityPanel
                    icon={item.icon}
                    title={item.title}
                    milestone={item.milestone}
                    rewardText={item.rewardText}
                    isPoweredUp={isPreviewingProduct}
                    style={activityPanelWidth(section.items.length)}
                  />
                )}
              />
            </Box>
          ))}

          <Box style={styles.paddedSection} gap={24}>
            {products.map((product) => (
              <YuCoinPowerExplainedProduct key={product.title} product={product} />
            ))}
          </Box>
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute
        onRightIconPress={onRightIconPress}
        heading={t("screens.yu_coin_power_explained.heading")}
      />
    </>
  );
};

const onRightIconPress = () => Navigation.dismissAllModals();

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: Style.adjust(50),
  },
  scrollViewContainer: {
    backgroundColor: Colours.neutral.n50,
  },
  paddedSection: {
    paddingHorizontal: Style.adjust(PADDING_LARGE),
  },
  yuCoinPowerCard: {
    alignItems: "center",
    paddingBottom: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
    borderBottomLeftRadius: Style.adjust(20),
    borderBottomRightRadius: Style.adjust(20),
    marginBottom: Style.adjust(PADDING_LARGE),
  },
  /* Ensures the header is still white when the user overscrolls */
  yuCoinPowerCardHeaderBackgroundOffset: {
    start: 0,
    end: 0,
    position: "absolute",
    backgroundColor: Colours.neutral.white,
    top: Style.adjust(-HEADER_BACKGROUND_OFFSET),
    height: Style.adjust(HEADER_BACKGROUND_OFFSET),
  },
  productCard: {
    overflow: "hidden",
    padding: Style.adjust(1),
    paddingBottom: Style.adjust(5),
    borderRadius: Style.adjust(8),
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.n100,
  },
  productCardInner: {
    overflow: "hidden",
    borderRadius: Style.adjust(8),
  },
  productCardHeader: {
    minHeight: Style.adjust(150),
  },
  productCardBody: {
    overflow: "hidden",
    paddingVertical: Style.adjust(15),
    paddingHorizontal: Style.adjust(20),
    backgroundColor: Colours.neutral.white,
  },
  productCardYuCoin: {
    position: "absolute",
    top: Style.adjust(20),
    start: Style.adjust(20),
  },
  productCardimage: {},
  productCardButton: {
    marginTop: Style.adjust(20),
  },
});

export const yuCoinExplainedStyles = styles;

export default memo(YuCoinPowerExplained);
