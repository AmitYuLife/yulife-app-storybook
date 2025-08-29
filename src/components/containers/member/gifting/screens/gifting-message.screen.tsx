import { memo, useContext, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { Avatar, Pressable, CheckBoxType } from "@molecules";
import { GenericHeadingPad } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import { GiftingChoice } from "../context/gifting-manager.types";
import { GiftingManagerContext } from "../context/gifting-manager.context";
import { P2P_MESSAGE } from "@ids";

type Props = {
  options: Array<GiftingChoice>;
  selectedMessage: GiftingChoice;
  onSelect: (id: GiftingChoice) => void;
};

const GiftingMessageScreen = ({ options, selectedMessage, onSelect }: Props) => {
  const context = useContext(GiftingManagerContext);
  const selectedUsers = useMemo(
    () => ({ array: context?.targetUsers ? Object.values(context.targetUsers) : [] }),
    [context]
  );

  return (
    <View style={styles.screenWidth}>
      <GenericHeadingPad />
      <Box justifyContent="center" alignItems="center" flexDirection="row" pl={16} mt={24}>
        {selectedUsers.array.map((x) => (
          <Box key={x.id} borderWidth={2} borderColor={Colours.neutral.white} br={64} h={64} w={64} ml={-12}>
            <Avatar size={60} uri={x.avatar.uri} heightScale={x.avatarHeightScale} />
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
                  testID={P2P_MESSAGE(option.id)}
                >
                  <Box flex={1}>
                    <TextTemplate type="b2">{option.label}</TextTemplate>
                  </Box>
                  <Box alignItems="flex-end">
                    <CheckBoxType
                      type="circular"
                      checked={selectedMessage?.id === option.id}
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
  );
};

const styles = StyleSheet.create({
  screenWidth: {
    width: Style.DEVICE_WIDTH,
  },
});
export default memo(GiftingMessageScreen);
