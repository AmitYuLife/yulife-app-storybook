import { VoidFunction } from "@utils";

export type UserSearchListItemProps = {
  id: string;
  name: string;
  uri: string;
  onPress: VoidFunction;
  disabledReason?: string;
};
