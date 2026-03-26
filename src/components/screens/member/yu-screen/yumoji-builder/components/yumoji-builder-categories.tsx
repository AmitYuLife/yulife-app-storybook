import React, { memo, useRef, useState, FC, useMemo } from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import YumojiBuilderCategory from "./yumoji-builder-category";

import { SkeletonLoading } from "@atoms";
import { CATEGORY_TYPE } from "@ids";
import { GetYumojiBuilderCategoryListQuery } from "@graphql/__generated";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

type YumojiBuilderCategoryList = GetYumojiBuilderCategoryListQuery["getYumojiBuilderCategoryList"][number];
type CategoryListChildren = YumojiBuilderCategoryList["children"][number];

interface Props {
  categories: YumojiBuilderCategoryList[];
  loading: boolean;
  selectedCategoryId: string;
  onPress: (id: string, matchType: string, children?: CategoryListChildren) => void;
}

const YumojiBuilderCategories: FC<Props> = ({ categories, loading, selectedCategoryId, onPress }) => {
  const [categoryDetails, setCategoryDetails] = useState({ parentId: null, hasChildren: false });
  const scrollViewRef = useRef<ScrollView | null>(null);
  const { theme } = useTheme();
  const bodyItemWrapperSelectedStyle = useMemo(
    () =>
      ({
        ...defaultStyles,
        borderRadius: 30,
        backgroundColor: theme.colors.primary.p50,
      } as ViewStyle),
    [theme]
  );

  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.contentBodyElementsList}
        style={styles.bodyElementsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      >
        {loading ? (
          <CategoriesSkeleton />
        ) : (
          categories.map((category) => {
            const showChildren = categoryDetails.hasChildren && categoryDetails.parentId === category.id;
            const isParentSelected = category.id === selectedCategoryId;

            return (
              <View
                key={category.id}
                style={isParentSelected || showChildren ? bodyItemWrapperSelectedStyle : styles.bodyItemWrapper}
                testID={CATEGORY_TYPE(category.id)}
              >
                <YumojiBuilderCategory
                  category={category}
                  onPress={(id, matchType) => {
                    if (isParentSelected) {
                      return;
                    }

                    setCategoryDetails({ hasChildren: !!category?.children?.length, parentId: id });
                    onPress(id, matchType);
                  }}
                  isSelected={isParentSelected}
                />

                {showChildren
                  ? category?.children?.map((child) => (
                      <View key={child.id} style={styles.categoryChildren} testID={CATEGORY_TYPE(child.id)}>
                        <YumojiBuilderCategory
                          category={child}
                          onPress={(id, matchType) => {
                            if (child.id === selectedCategoryId) {
                              return;
                            }

                            setCategoryDetails({ ...categoryDetails });
                            onPress(id, matchType, child);
                          }}
                          isSelected={child.id === selectedCategoryId}
                        />
                      </View>
                    ))
                  : null}
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

const CategoriesSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonLoading key={index} style={styles.skeleton} />
      ))}
    </>
  );
};

const defaultStyles = {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginHorizontal: Style.adjust(12),
  padding: Style.adjust(4),
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colours.metallic.m200,
    paddingTop: Style.adjust(7),
    paddingBottom: Style.adjust(7),
  } as ViewStyle,
  contentBodyElementsList: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Style.adjust(3),
  } as ViewStyle,
  bodyElementsList: {
    width: "100%",
  } as ViewStyle,
  categoryWrapper: {
    flex: 1,
    borderWidth: 0,
  },
  categoryChildren: {
    marginStart: Style.adjust(4),
  },
  bodyItemWrapper: {
    ...defaultStyles,
  } as ViewStyle,
  skeleton: {
    ...defaultStyles,
    width: Style.adjust(48),
    height: Style.adjust(48),
    borderRadius: 30,
  } as ViewStyle,
});

export default memo(YumojiBuilderCategories);
