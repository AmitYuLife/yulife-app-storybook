import { Box, Image, Logo, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Style } from "@styles";
import { memo } from "react";

interface IWrappedLogoProps {
  size?: "small" | "large";
  wrappedLogo?: { uri?: string | null };
}

const WrappedLogo = ({ size = "large", wrappedLogo }: IWrappedLogoProps) => {
  const LOGO_SIZE = Style.adjust(size === "large" ? 60 : 15);
  const YEAR_SIZE = Style.adjust(size === "large" ? 55 : 25);

  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      h={size === "large" ? Style.adjust(90) : 50}
      mt={Style.adjust(size === "large" ? -20 : 0)}
    >
      <Box alignItems="center" flexDirection="row" gap={size === "large" ? 10 : 5}>
        <Logo width={LOGO_SIZE} height={LOGO_SIZE} />
        <TextTemplate color="#640038" type={size === "large" ? "h1" : "l1b"}>
          {t("screens.wrapped.title")}
        </TextTemplate>
      </Box>
      {wrappedLogo?.uri ? (
        <Box position="absolute" right={0} bottom={size === "large" ? Style.adjust(-15) : Style.adjust(-5)}>
          <Image
            suppressLoadingUi={true}
            width={YEAR_SIZE}
            height={YEAR_SIZE}
            resizeMode="contain"
            source={{ uri: wrappedLogo.uri }}
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default memo(WrappedLogo);
