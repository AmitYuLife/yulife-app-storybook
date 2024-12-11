import { memo } from "react";
import { UserSearchScreen } from "@screens";
import { UserSelection } from "@organisms";
import { Style } from "@styles";
import GiftingSearchItem from "../gifting-search-item.container";
import { UserSearchItem } from "@redux/_core/types";
import { StyleSheet, View } from "react-native";

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
  <View style={styles.screenWidth}>
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
  </View>
);

const styles = StyleSheet.create({
  screenWidth: {
    width: Style.DEVICE_WIDTH,
  },
});

export default memo(GiftingSearchScreen);
