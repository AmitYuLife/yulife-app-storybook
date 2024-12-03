import { Box } from "@atoms";
import { ListItem } from "@organisms";
import { memo } from "react";
import { UserSearchListItemProps } from "./user-search.types";

const UserSearchListItem = ({ name, uri, onPress }: UserSearchListItemProps) => (
  <Box h={45} mb={14}>
    <ListItem name={name} uri={uri} type="search" onPress={onPress} />
  </Box>
);

export default memo(UserSearchListItem);
