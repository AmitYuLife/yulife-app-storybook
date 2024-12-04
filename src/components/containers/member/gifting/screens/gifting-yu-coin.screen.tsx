import { memo } from "react";
import { ScrollView, Pressable } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { Avatar, CheckBoxType } from "@molecules";
import { GenericHeadingPad } from "@organisms";
import { Style, Colours } from "@styles";
import { UserSearchItem } from "@redux/user/user.types";
import { YuCoinDenominationChoice } from "../context";

type Props = {
  options: Array<YuCoinDenominationChoice>;
  selectedUsers: UserSearchItem[];
  onSelect: (id: YuCoinDenominationChoice) => void;
  selectedAmount: YuCoinDenominationChoice;
};

const GiftingYuCoinScreen = memo(({ options, selectedUsers, onSelect, selectedAmount }: Props) => (
  <Box w={Style.DEVICE_WIDTH}>
    <GenericHeadingPad />
    <Box justifyContent="center" alignItems="center" flexDirection="row" pl={16} mt={24}>
      {selectedUsers.map((selectedUser) => (
        <Box key={selectedUser.id} borderWidth={2} borderColor={Colours.neutral.white} br={64} h={64} w={64} ml={-12}>
          <Avatar size={60} uri={selectedUser.avatar.uri} />
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
  </Box>
));

export default memo(GiftingYuCoinScreen);
