import React, { FC, memo } from "react";
import { PressableWithDelay } from "@molecules";
import { Image } from "@atoms";
import { Style } from "@styles";
import { RemoteImage, YumojiBuilderItemMatchType } from "@graphql/__generated";

type Category = {
  id: string;
  matchType: YumojiBuilderItemMatchType;
  selectedIcon: RemoteImage;
  icon: RemoteImage;
};

interface Props {
  category: Category;
  isSelected: boolean;
  onPress: (id: string, matchType: string) => void;
}

const YumojiBuilderCategory: FC<Props> = memo(({ category, isSelected, onPress }) => (
  <PressableWithDelay
    delay={1000}
    key={category.id}
    onPress={() => onPress(category.id, category.matchType)}
    hitSlop={Style.adjust(20)}
  >
    <Image
      suppressLoadingUi={true}
      source={isSelected ? category.selectedIcon : category.icon}
      width={Style.adjust(40)}
      height={Style.adjust(40)}
    />
  </PressableWithDelay>
));

export default YumojiBuilderCategory;
