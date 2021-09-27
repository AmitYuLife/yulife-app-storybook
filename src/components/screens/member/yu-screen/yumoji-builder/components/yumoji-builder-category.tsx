import React, { FC } from "react";
import { PressableWithDelay } from "@molecules";
import { Image } from "@atoms";
import { Style } from "@styles";
import { GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList as YumojiBuilderCategoryType } from "@graphql/_core/schema";

interface Props {
  category: Omit<YumojiBuilderCategoryType, "children">;
  isSelected: boolean;
  onPress: (id: string, matchType: string) => void;
}

const YumojiBuilderCategory: FC<Props> = ({ category, isSelected, onPress }) => (
  <PressableWithDelay key={category.id} onPress={() => onPress(category.id, category.matchType)}>
    <Image
      suppressLoadingUi={true}
      source={isSelected ? category.selectedIcon : category.icon}
      width={Style.adjust(40)}
      height={Style.adjust(40)}
    />
  </PressableWithDelay>
);

export default YumojiBuilderCategory;
