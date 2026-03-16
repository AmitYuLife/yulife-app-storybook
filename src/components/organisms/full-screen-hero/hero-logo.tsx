import { Logo, Image, Box } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { memo } from "react";
import { Platform } from "react-native";

interface Props {
  logoUri: string;
}

const HeroLogo = ({ logoUri }: Props) => {
  if (logoUri) {
    return (
      <Box
        alignItems="center"
        alignSelf="center"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
        gap={8}
        mt={Platform.select({ ios: 4, android: 12 })}
        height={120}
      >
        <Image source={{ uri: logoUri }} width={26} height={26} />
        <Box w={1} h={26} bg={Colours.neutral.n300} />
        <Logo type="logo-only" scale={0.2} style={styles.logo} colour={Colours.neutral.white} />
      </Box>
    );
  }

  return <Logo type="full" width={Style.adjust(76)} style={styles.logoOnly} colour={Colours.neutral.white} />;
};

export default memo(HeroLogo);

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
  },
  logoOnly: {
    alignSelf: "center",
    marginTop: Style.adjust(Platform.select({ ios: 4, android: 12 })),
  },
});
