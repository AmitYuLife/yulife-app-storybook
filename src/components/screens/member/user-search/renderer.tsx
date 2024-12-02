import { useCallback, ReactNode } from "react";
import { Keyboard } from "react-native";
import { ListRenderItemInfo } from "@shopify/flash-list";
import { UserSearchItem } from "@redux/user/user.types";
import { Box } from "@atoms";
import { UserSearchListItem, UserSearchListItemProps } from "./user-search-item.container";

type Args = {
  items: UserSearchItem[];
  onItemPress: (item: UserSearchItem) => void;
  referralComponent?: ReactNode;
  listItem?: (props: UserSearchListItemProps) => ReactNode;
  bottomPad?: number;
};

export const useUserSearchRenderer = ({ items, onItemPress, referralComponent, listItem, bottomPad }: Args) => {
  return useCallback(
    ({ item, index }: ListRenderItemInfo<UserSearchItem>) => {
      const isLast = index === items.length - 1;

      const itemComponent = (
        <UserSearchListItem
          id={item.id}
          name={item.name}
          uri={item.avatar?.uri}
          onPress={() => {
            Keyboard.dismiss();
            onItemPress(item);
          }}
          component={listItem}
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
    [onItemPress, items, referralComponent, listItem]
  );
};
