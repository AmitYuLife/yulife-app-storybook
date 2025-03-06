import { Source, TextTemplate } from "@atoms";
import Box from "@atoms/box/box";
import { Colours } from "@styles";
import { Image } from "expo-image";
import { memo } from "react";
import { StyleSheet } from "react-native";

interface EmptyWalletProps {
  image: Source;
  title: string;
  description: string;
}
const EmptyWallet = ({ image, title, description }: EmptyWalletProps) => (
  <Box
    flex={1}
    justifyContent="flex-start"
    alignItems="center"
    alignContent="center"
    flexDirection="column"
    pt={100}
    ph={40}
  >
    <Box p={32}>
      <Image source={image} style={styles.image} />
    </Box>
    <TextTemplate type="b1b" color={Colours.neutral.n900}>
      {title}
    </TextTemplate>
    <Box pv={16} alignContent="center">
      <TextTemplate textAlign="center" type="b2" color={Colours.neutral.n900}>
        {description}
      </TextTemplate>
    </Box>
  </Box>
);

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
  },
});

export default memo(EmptyWallet);
