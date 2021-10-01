import React, { memo, useRef, useState, FC } from "react";
import { ScrollView, View, StyleSheet, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import YumojiBuilderCategory from "./yumoji-builder-category";
import {
  GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList as YumojiBuilderCategoryList,
  GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList_children as CategoryListChildren,
} from "@graphql/_core/schema";

interface Props {
  categories: YumojiBuilderCategoryList[];
  selectedCategoryId: string;
  onPress: (id: string, matchType: string, children?: CategoryListChildren) => void;
}

const YumojiBuilderCategories: FC<Props> = ({ categories, selectedCategoryId, onPress }) => {
  const [categoryDetails, setCategoryDetails] = useState({ parentId: null, hasChildren: false });
  const scrollViewRef = useRef<ScrollView | null>(null);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.contentBodyElementsList}
        style={styles.bodyElementsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      >
        {categories.map((category) => {
          const showChildren = categoryDetails.hasChildren && categoryDetails.parentId === category.id;
          const isParentSelected = category.id === selectedCategoryId;
          return (
            <View
              key={category.id}
              style={isParentSelected || showChildren ? styles.bodyItemWrapperSelected : styles.bodyItemWrapper}
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
                    <View key={child.id} style={styles.categoryChildren}>
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
        })}
      </ScrollView>
    </View>
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
    marginTop: Style.adjust(10),
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
    marginLeft: Style.adjust(4),
  },
  bodyItemWrapper: {
    ...defaultStyles,
  } as ViewStyle,
  bodyItemWrapperSelected: {
    ...defaultStyles,
    borderRadius: Style.adjust(30),
    backgroundColor: Colours.primary.p50,
  } as ViewStyle,
});

export default memo(YumojiBuilderCategories);
