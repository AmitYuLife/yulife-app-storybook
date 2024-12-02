import { Box } from "@atoms";
import { ListItem } from "@organisms";
import { VoidFunction } from "@utils";
import { memo, ReactNode } from "react";

export type UserSearchListItemProps = {
  id: string;
  name: string;
  uri: string;
  onPress: VoidFunction;
};

const DefaultSearchItem = memo(({ name, uri, onPress }: Omit<UserSearchListItemProps, "Component">) => (
  <Box h={45} mb={14}>
    <ListItem name={name} uri={uri} type="search" onPress={onPress} />
  </Box>
));

export const UserSearchListItem = memo(
  ({
    component,
    ...props
  }: UserSearchListItemProps & {
    component?: (props: UserSearchListItemProps) => ReactNode;
  }) => {
    const FallbackComponent = component || DefaultSearchItem;

    return <FallbackComponent {...props} />;
  }
);
