import { useCallback, ReactNode } from "react";
import { Keyboard } from "react-native";
import { ListRenderItemInfo } from "@shopify/flash-list";
import { Box } from "@atoms";
import { UserSearchListItemProps } from "./user-search.types";
import { UserSearchItem } from "@redux/_core/types";

type Args = {
  items: UserSearchItem[];
  onItemPress: (item: UserSearchItem) => void;
  referralComponent?: ReactNode;
  ListItem?: (props: UserSearchListItemProps) => ReactNode;
  bottomPad?: number;
};

export const useUserSearchItemRenderer = ({ items, onItemPress, referralComponent, ListItem, bottomPad }: Args) => {
  return useCallback(
    ({ item, index }: ListRenderItemInfo<UserSearchItem>) => {
      const isLast = index === items.length - 1;

      const itemComponent = (
        <ListItem
          id={item.id}
          name={item.name}
          uri={item.avatar?.uri}
          disabledReason={item.disabledReason}
          onPress={() => {
            Keyboard.dismiss();
            onItemPress(item);
          }}
        />
      );

      if (isLast) {
        return (
          <>
            {itemComponent}
            {referralComponent}
            {bottomPad ? <Box h={bottomPad} /> : null}
          </>
        );
      }

      return itemComponent;
    },
    [items.length, ListItem, onItemPress, referralComponent, bottomPad]
  );
};
