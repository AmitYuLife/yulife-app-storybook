import { Box } from "@atoms";
import { ListItem } from "@organisms";
import { UserSearchItem } from "@redux/user/user.types";
import { useCallback, ReactNode } from "react";
import { Keyboard } from "react-native";
import { ListRenderItemInfo } from "@shopify/flash-list";

export const useRenderer = (
  items: UserSearchItem[],
  onItemPress: (item: UserSearchItem) => void,
  referralComponent: ReactNode
) => {
  return useCallback(
    ({ item, index }: ListRenderItemInfo<UserSearchItem>) => {
      const isLast = index === items.length - 1;

      const itemComponent = (
        <Box h={45} mb={14}>
          <ListItem
            name={item.name}
            uri={item.avatar?.uri}
            type="search"
            onPress={() => {
              Keyboard.dismiss();
              onItemPress(item);
            }}
          />
        </Box>
      );

      if (isLast) {
        return (
          <>
            {itemComponent}
            {referralComponent}
          </>
        );
      }

      return itemComponent;
    },
    [onItemPress, items, referralComponent]
  );
};
