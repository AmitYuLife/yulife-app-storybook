import { Box, Image, Logo, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Style } from "@styles";
import { memo } from "react";

interface IWrappedLogoProps {
  size?: "small" | "large";
}

const WrappedLogo = ({ size = "large" }: IWrappedLogoProps) => {
  const LOGO_SIZE = Style.adjust(size === "large" ? 60 : 15);
  const YEAR_SIZE = Style.adjust(size === "large" ? 55 : 25);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap={size === "large" ? 10 : 5}
      pb={size === "large" ? 65 : 30}
      h={size === "large" ? 100 : 50}
    >
      <Logo width={LOGO_SIZE} height={LOGO_SIZE} />
      <TextTemplate color="#640038" type={size === "large" ? "h1" : "l1b"}>
        {t("screens.wrapped.title")}
      </TextTemplate>
      <Box position="absolute" right={0} top={size === "large" ? 25 : 15}>
        <Image
          suppressLoadingUi={true}
          width={YEAR_SIZE}
          height={YEAR_SIZE}
          resizeMode="contain"
          source={require("../assets/wrapped-2024.webp")}
        />
      </Box>
    </Box>
  );
};

export default memo(WrappedLogo);
