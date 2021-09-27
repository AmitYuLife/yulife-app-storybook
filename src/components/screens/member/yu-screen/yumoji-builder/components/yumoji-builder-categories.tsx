import React, { memo, useRef, useState, FC } from "react";
import { ScrollView, View, StyleSheet, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { PressableWithDelay } from "@molecules";
import YumojiBuilderCategory from "./yumoji-builder-category";
import { DoneIcon } from "@atoms/icon/done-icon";
import { GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList as YumojiBuilderCategoryList } from "@graphql/_core/schema";

interface Props {
  categories: YumojiBuilderCategoryList[];
  selectedCategoryId: string;
  onPress: (id: string, matchType: string) => void;
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
          return (
            <View key={category.id} style={showChildren ? styles.bodyItemWrapperSelected : styles.bodyItemWrapper}>
              <YumojiBuilderCategory
                category={category}
                onPress={(id, matchType) => {
                  setCategoryDetails({ hasChildren: !!category?.children?.length, parentId: id });
                  onPress(id, matchType);
                }}
                isSelected={category.id === selectedCategoryId}
              />

              {showChildren
                ? category?.children?.map((child) => (
                    <View key={child.id} style={styles.categoryChildren}>
                      <YumojiBuilderCategory
                        category={child}
                        onPress={(id, matchType) => {
                          setCategoryDetails({ ...categoryDetails });
                          onPress(id, matchType);
                        }}
                        isSelected={child.id === selectedCategoryId}
                      />
                    </View>
                  ))
                : null}
            </View>
          );
        })}
        <PressableWithDelay
          onPress={() => setCategoryDetails({ parentId: null, hasChildren: false })}
          style={styles.doneIcon}
        >
          <DoneIcon checked={false} />
        </PressableWithDelay>
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
    backgroundColor: "#F1F1F1",
  } as ViewStyle,

  doneIcon: {
    marginRight: Style.adjust(12),
  },
});

export default memo(YumojiBuilderCategories);
