import { memo } from "react";
import { Box } from "@atoms";
import { UserSearchScreen } from "@screens";
import { UserSelection } from "@organisms";
import { Style } from "@styles";
import GiftingSearchItem from "../gifting-search-item.container";
import { UserSearchItem } from "@redux/_core/types";

type Props = {
  selectedUsers: UserSearchItem[];
  data: UserSearchItem[];
  loading: boolean;
  onPressItem: (item: UserSearchItem) => void;
  onChangeText: (text: string) => void;
  referralAmount: number;
  isSearchTextEmpty: boolean;
};

const GiftingSearchScreen = ({
  selectedUsers,
  data,
  loading,
  onPressItem,
  onChangeText,
  referralAmount,
  isSearchTextEmpty,
}: Props) => (
  <Box w={Style.DEVICE_WIDTH}>
    <UserSearchScreen
      data={data}
      loading={loading}
      onItemPress={onPressItem}
      onChangeText={onChangeText}
      referralAmount={referralAmount}
      isSearchTextEmpty={isSearchTextEmpty}
      hideRecent={true}
      ListItem={GiftingSearchItem}
      userSelectionComponent={<UserSelection selected={selectedUsers} onPress={onPressItem} />}
      displayTopBar={false}
      bottomPad={200}
    />
  </Box>
);

export default memo(GiftingSearchScreen);
