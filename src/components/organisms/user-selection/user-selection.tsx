import { Box, TextTemplate, CloseSvg } from "@atoms";
import { Avatar } from "@components/molecules";
import { UserSearchItem } from "@redux/_core/types";
import { Colours, Style } from "@styles";
import { memo } from "react";
import { ScrollView, Pressable, StyleSheet } from "react-native";

type Props = {
  selected: UserSearchItem[];
  onPress: (item: UserSearchItem) => void;
};
const UserSelection = ({ selected, onPress }: Props) => {
  if (!selected?.length) {
    return null;
  }

  return (
    <Box flexDirection="row" bg={Colours.neutral.n50} pt={12} pb={12} mb={16} br={40} overflow="hidden">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Box w={16} />
        {selected.map((selectedUser) => (
          <Pressable key={selectedUser.id} style={styles.target} onPress={() => onPress(selectedUser)}>
            <Box w={56} alignItems="center">
              <Avatar size={56} uri={selectedUser.avatar.uri} />
              <Box mt={4}>
                <TextTemplate type="l3b" numberOfLines={1}>
                  {selectedUser.name.split(" ")[0]}
                </TextTemplate>
              </Box>
            </Box>
            <Box
              w={16}
              h={16}
              alignItems="center"
              justifyContent="center"
              bg={Colours.neutral.n600}
              position="absolute"
              top={0}
              right={0}
              br={999}
              borderWidth={2}
              borderColor={Colours.neutral.white}
            >
              <CloseSvg strokeWidth={4} stroke={Colours.neutral.white} size={8} />
            </Box>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  target: {
    marginRight: Style.adjust(16),
  },
});

export default memo(UserSelection);
