import { memo } from "react";
import { ScrollView, Pressable, StyleSheet, View } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { Avatar, CheckBoxType } from "@molecules";
import { GenericHeadingPad } from "@organisms";
import { Style, Colours } from "@styles";
import { YuCoinDenominationChoice } from "../context";
import { UserSearchItem } from "@redux/_core/types";
import { P2P_GIFTING_AMOUNT } from "@ids";

type Props = {
  options: Array<YuCoinDenominationChoice>;
  selectedUsers: UserSearchItem[];
  onSelect: (id: YuCoinDenominationChoice) => void;
  selectedAmount: YuCoinDenominationChoice;
};

const GiftingYuCoinScreen = memo(({ options, selectedUsers, onSelect, selectedAmount }: Props) => (
  <View style={styles.screenWidth}>
    <GenericHeadingPad />
    <Box justifyContent="center" alignItems="center" flexDirection="row" pl={16} mt={24}>
      {selectedUsers.map((selectedUser) => (
        <Box key={selectedUser.id} borderWidth={2} borderColor={Colours.neutral.white} br={64} h={64} w={64} ml={-12}>
          <Avatar size={60} uri={selectedUser.avatar.uri} heightScale={selectedUser.avatarHeightScale} />
        </Box>
      ))}
    </Box>
    <Box flex={1} mt={24}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {options.map((option) => {
          return (
            <Pressable key={option.id} onPress={() => onSelect(option)}>
              <Box
                justifyContent="center"
                alignItems="center"
                mh={16}
                mt={16}
                br={16}
                borderWidth={1}
                borderColor={Colours.neutral.n100}
                flexDirection="row"
                pv={12}
                pl={24}
                pr={12}
                testID={P2P_GIFTING_AMOUNT(option.label)}
              >
                <Box flex={1}>
                  <TextTemplate type="b2">{option.label}</TextTemplate>
                </Box>
                <Box alignItems="flex-end">
                  <CheckBoxType
                    type="circular"
                    checked={selectedAmount?.id === option.id}
                    strokeColor={Colours.neutral.n400}
                    activeCheckboxFillColor={Colours.primary.p600}
                  />
                </Box>
              </Box>
            </Pressable>
          );
        })}
        <Box h={200} />
      </ScrollView>
    </Box>
  </View>
));

const styles = StyleSheet.create({
  screenWidth: {
    width: Style.DEVICE_WIDTH,
  },
});

export default memo(GiftingYuCoinScreen);
